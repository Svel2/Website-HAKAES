import { NextRequest, NextResponse } from "next/server";
const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX_REQUESTS = 3;

type RateLimitEntry = {
  count: number;
  expiresAt: number;
};

const rateLimitStore = new Map<string, RateLimitEntry>();

type GoogleScriptPayload = {
  timestamp: string;
  firstName: string;
  lastName: string;
  email: string;
  message: string;
  ipAddress: string;
  userAgent?: string;
};

function getClientIdentifier(request: NextRequest) {
  const xRealIp = request.headers.get("x-real-ip");
  if (xRealIp?.trim()) {
    return xRealIp.trim();
  }

  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) {
    const [ip] = forwardedFor.split(",");
    if (ip) {
      return ip.trim();
    }
  }

  return "unknown";
}

async function forwardToGoogleScript(data: GoogleScriptPayload) {
  const webhookUrl = 'https://script.google.com/macros/s/AKfycbw9riaHLSMZJaS9nZL7ctww7QoGJdnQgyz9Hvd_4cJqAyi_r2L1esGAhtAehUgUURwi/exec';

  if (!webhookUrl) {
    throw new Error("GOOGLE_APPS_SCRIPT_URL is not configured.");
  }

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok && response.type !== "opaque") {
      throw new Error(`Webhook responded with status ${response.status}`);
    }
  } catch (error) {
    if (process.env.NODE_ENV !== "production") {
      console.error("[Contact] gagal mengirim data ke Google Apps Script:", error);
    }

    throw new Error("GOOGLE_APPS_SCRIPT_FAILED");
  }
}

function isRateLimited(identifier: string) {
  if (!identifier) {
    return false;
  }

  const now = Date.now();
  const entry = rateLimitStore.get(identifier);

  if (!entry || entry.expiresAt <= now) {
    rateLimitStore.set(identifier, {
      count: 1,
      expiresAt: now + RATE_LIMIT_WINDOW_MS,
    });
    return false;
  }

  entry.count += 1;
  if (entry.count > RATE_LIMIT_MAX_REQUESTS) {
    return true;
  }

  rateLimitStore.set(identifier, entry);
  return false;
}

export async function POST(request: NextRequest) {
  if (!request.headers.get("content-type")?.includes("application/json")) {
    return NextResponse.json(
      { success: false, message: "Content-Type must be application/json." },
      { status: 415 },
    );
  }

  let payload: {
    firstName?: unknown;
    lastName?: unknown;
    email?: unknown;
    message?: unknown;
  };

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json(
      { success: false, message: "Invalid JSON payload." },
      { status: 400 },
    );
  }

  const errors: Record<string, string> = {};

  const firstName = typeof payload.firstName === "string" ? payload.firstName.trim() : "";
  const lastName = typeof payload.lastName === "string" ? payload.lastName.trim() : "";
  const name = [firstName, lastName].filter(Boolean).join(" ").trim();
  const email = typeof payload.email === "string" ? payload.email.trim().toLowerCase() : "";
  const message = typeof payload.message === "string" ? payload.message.trim() : "";

  if (!firstName || firstName.length < 2) {
    errors.firstName = "Nama depan wajib diisi minimal 2 karakter.";
  }

  if (lastName && lastName.length < 2) {
    errors.lastName = "Nama belakang minimal 2 karakter atau kosongkan.";
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  if (!email || !emailRegex.test(email)) {
    errors.email = "Email tidak valid.";
  }

  if (!message || message.length < 10) {
    errors.message = "Pesan wajib diisi minimal 10 karakter.";
  }

  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ success: false, errors }, { status: 400 });
  }

  const identifier = getClientIdentifier(request);

  if (isRateLimited(identifier)) {
    return NextResponse.json(
      { success: false, message: "Terlalu banyak percobaan, coba lagi nanti." },
      { status: 429 },
    );
  }

  try {
    await forwardToGoogleScript({
      timestamp: new Date().toISOString(),
      firstName: firstName || name,
      lastName,
      email,
      message,
      ipAddress: identifier,
      userAgent: request.headers.get("user-agent") ?? undefined,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    const message =
      error instanceof Error && error.message === "GOOGLE_APPS_SCRIPT_FAILED"
        ? "Gagal mengirim data ke Google Apps Script. Silakan coba lagi nanti."
        : error instanceof Error
          ? error.message
          : "Terjadi kesalahan saat memproses permintaan.";

    return NextResponse.json(
      { success: false, message },
      { status: 500 },
    );
  }
}
