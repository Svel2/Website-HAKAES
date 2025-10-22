import { NextRequest, NextResponse } from "next/server";
import { sendContactFormEmails } from "@/lib/email";

const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX_REQUESTS = 3;

type RateLimitEntry = {
  count: number;
  expiresAt: number;
};

const rateLimitStore = new Map<string, RateLimitEntry>();

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

async function verifyRecaptcha(token: string, remoteIp: string) {
  const secret = process.env.RECAPTCHA_SECRET_KEY;

  if (!secret) {
    throw new Error("RECAPTCHA_SECRET_KEY is not configured.");
  }

  const params = new URLSearchParams();
  params.append("secret", secret);
  params.append("response", token);
  if (remoteIp && remoteIp !== "unknown") {
    params.append("remoteip", remoteIp);
  }

  const response = await fetch("https://www.google.com/recaptcha/api/siteverify", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: params.toString(),
  });

  if (!response.ok) {
    throw new Error("Failed to verify CAPTCHA.");
  }

  const data = (await response.json()) as {
    success: boolean;
    score?: number;
    action?: string;
    "error-codes"?: string[];
  };

  if (!data.success || (typeof data.score === "number" && data.score < 0.5)) {
    return false;
  }

  return true;
}

export async function POST(request: NextRequest) {
  if (!request.headers.get("content-type")?.includes("application/json")) {
    return NextResponse.json(
      { success: false, message: "Content-Type must be application/json." },
      { status: 415 },
    );
  }

  let payload: {
    name?: unknown;
    email?: unknown;
    phone?: unknown;
    message?: unknown;
    token?: unknown;
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

  const name = typeof payload.name === "string" ? payload.name.trim() : "";
  const email = typeof payload.email === "string" ? payload.email.trim().toLowerCase() : "";
  const phone = typeof payload.phone === "string" ? payload.phone.trim() : undefined;
  const message = typeof payload.message === "string" ? payload.message.trim() : "";
  const token = typeof payload.token === "string" ? payload.token : "";

  if (!name || name.length < 2) {
    errors.name = "Nama wajib diisi minimal 2 karakter.";
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  if (!email || !emailRegex.test(email)) {
    errors.email = "Email tidak valid.";
  }

  if (phone && phone.length < 6) {
    errors.phone = "Nomor telepon tidak valid.";
  }

  if (!message || message.length < 10) {
    errors.message = "Pesan wajib diisi minimal 10 karakter.";
  }

  if (!token) {
    errors.token = "Verifikasi CAPTCHA diperlukan.";
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
    const captchaVerified = await verifyRecaptcha(token, identifier);

    if (!captchaVerified) {
      return NextResponse.json(
        { success: false, message: "Verifikasi CAPTCHA gagal." },
        { status: 400 },
      );
    }

    await sendContactFormEmails({
      name,
      email,
      phone,
      message,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    let message = "Terjadi kesalahan saat memproses permintaan.";

    if (error instanceof Error && error.message === "EMAIL_SENDING_FAILED") {
      message =
        "Pengiriman email gagal. Mohon periksa konfigurasi SMTP dan pastikan alamat pengirim sudah diverifikasi.";
    }

    return NextResponse.json(
      { success: false, message },
      { status: 500 },
    );
  }
}
