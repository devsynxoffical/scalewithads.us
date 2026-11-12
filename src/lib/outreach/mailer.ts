import "server-only";
import nodemailer, { type Transporter } from "nodemailer";
import type { Mailbox } from "./config";
import { FOOTER } from "./config";
import { textToHtml } from "./template";
import { unsubscribeUrl } from "./tokens";

const transports = new Map<string, Transporter>();

function transport(m: Mailbox): Transporter {
  let t = transports.get(m.id);
  if (!t) {
    t = nodemailer.createTransport({
      host: m.smtpHost,
      port: m.smtpPort,
      secure: m.smtpPort === 465,
      auth: { user: m.user, pass: m.password },
    });
    transports.set(m.id, t);
  }
  return t;
}

export async function verifyMailbox(m: Mailbox): Promise<void> {
  await transport(m).verify();
}

export type OutgoingEmail = {
  to: string;
  subject: string;
  body: string;
  inReplyTo?: string;
  references?: string[];
};

/** Sends one plain-text-first email and returns its Message-ID. */
export async function sendEmail(m: Mailbox, email: OutgoingEmail): Promise<string> {
  const unsub = unsubscribeUrl(email.to);
  const footer = [FOOTER.trim(), `Not interested? Unsubscribe: ${unsub}`].filter(Boolean).join("\n");
  const text = `${email.body.trim()}\n\n--\n${footer}`;
  const domain = m.email.split("@")[1];
  const info = await transport(m).sendMail({
    from: { name: m.fromName, address: m.email },
    to: email.to,
    subject: email.subject,
    text,
    html: textToHtml(text),
    messageId: `<${crypto.randomUUID()}@${domain}>`,
    inReplyTo: email.inReplyTo,
    references: email.references,
    headers: {
      "List-Unsubscribe": `<${unsub}>, <mailto:${m.email}?subject=unsubscribe>`,
      "List-Unsubscribe-Post": "List-Unsubscribe=One-Click",
    },
  });
  return info.messageId;
}
