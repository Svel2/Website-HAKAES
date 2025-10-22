import nodemailer from "nodemailer";

type ContactFormPayload = {
  name: string;
  email: string;
  phone?: string;
  message: string;
};

const {
  SMTP_HOST,
  SMTP_PORT,
  SMTP_USER,
  SMTP_PASS,
  CONTACT_EMAIL_FROM,
  CONTACT_EMAIL_TO,
} = process.env;

let cachedTransporter: nodemailer.Transporter | null = null;

function getTransporter() {
  if (cachedTransporter) {
    return cachedTransporter;
  }

  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS || !CONTACT_EMAIL_FROM) {
    throw new Error("Email service environment variables are not fully configured.");
  }

  cachedTransporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: SMTP_PORT ? Number(SMTP_PORT) : 587,
    secure: SMTP_PORT ? Number(SMTP_PORT) === 465 : false,
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS,
    },
  });

  return cachedTransporter;
}

function buildAdminHtml(payload: ContactFormPayload) {
  return `
    <div style="font-family: Arial, sans-serif; color: #111827;">
      <h2 style="color: #dc2626;">Permintaan Kontak Baru</h2>
      <p>Detail pengirim:</p>
      <ul>
        <li><strong>Nama:</strong> ${payload.name}</li>
        <li><strong>Email:</strong> ${payload.email}</li>
        ${payload.phone ? `<li><strong>Telepon:</strong> ${payload.phone}</li>` : ""}
      </ul>
      <p><strong>Pesan:</strong></p>
      <p style="white-space: pre-line;">${payload.message}</p>
    </div>
  `;
}

function buildCustomerHtml(payload: ContactFormPayload) {
  return `
    <div style="font-family: Arial, sans-serif; color: #111827;">
      <h2 style="color: #dc2626;">Terima kasih sudah menghubungi HAKAES</h2>
      <p>Halo ${payload.name},</p>
      <p>Kami telah menerima pesan Anda dan tim kami akan menghubungi dalam waktu 1x24 jam.</p>
      <p>Berikut ringkasan pesan Anda:</p>
      <blockquote style="border-left: 4px solid #dc2626; margin: 0; padding-left: 16px; color: #4b5563;">
        ${payload.message}
      </blockquote>
      <p>Salam hangat,<br/>Tim HAKAES</p>
    </div>
  `;
}

export async function sendContactFormEmails(payload: ContactFormPayload) {
  const transporter = getTransporter();

  const adminRecipient = CONTACT_EMAIL_TO || CONTACT_EMAIL_FROM;

  const baseMailOptions = {
    from: CONTACT_EMAIL_FROM!,
    replyTo: payload.email,
  } satisfies Partial<nodemailer.SendMailOptions>;

  try {
    const adminMail = transporter.sendMail({
      ...baseMailOptions,
      to: adminRecipient,
      subject: `Kontak Baru dari ${payload.name}`,
      html: buildAdminHtml(payload),
    });

    const customerMail = transporter.sendMail({
      ...baseMailOptions,
      to: payload.email,
      subject: "Terima kasih telah menghubungi HAKAES",
      html: buildCustomerHtml(payload),
    });

    await Promise.all([adminMail, customerMail]);
  } catch (error) {
    if (process.env.NODE_ENV !== "production") {
      console.error("[contact] gagal mengirim email:", error);
    }

    throw new Error("EMAIL_SENDING_FAILED");
  }
}
