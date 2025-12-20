import nodemailer from "nodemailer";

const SMTP_HOST = process.env.SMTP_HOST;
const SMTP_PORT = process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT, 10) : undefined;
const SMTP_USER = process.env.SMTP_USER;
const SMTP_PASS = process.env.SMTP_PASS;
const EMAIL_TO = process.env.EMAIL_TO;

if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS || !EMAIL_TO) {
  // don't throw in dev, but log a warning
  console.warn("Mailer not fully configured. Set SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, EMAIL_TO env vars to enable email sending.");
}

export async function sendContactEmail(payload: {
  firstName?: string;
  lastName?: string;
  email: string;
  _subject?: string;
  message: string;
}) {
  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS || !EMAIL_TO) {
    throw new Error("SMTP not configured");
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: SMTP_PORT,
    secure: SMTP_PORT === 465, // true for 465, false for other ports
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS,
    },
  });

  const subject = payload._subject || `New contact from ${payload.firstName || ""} ${payload.lastName || ""}`;

  const html = `
    <p><strong>From:</strong> ${payload.firstName || ""} ${payload.lastName || ""} &lt;${payload.email}&gt;</p>
    <p><strong>Subject:</strong> ${subject}</p>
    <p><strong>Message:</strong></p>
    <div>${payload.message.replace(/\n/g, "<br />")}</div>
  `;

  const info = await transporter.sendMail({
    from: `${payload.firstName || "Website"} <${SMTP_USER}>`,
    to: EMAIL_TO,
    subject,
    html,
    replyTo: payload.email,
  });

  return info;
}
