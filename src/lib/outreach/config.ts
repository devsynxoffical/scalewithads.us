import "server-only";

/**
 * Outreach configuration, read from environment variables.
 * See OUTREACH.md in the repo root for the full setup guide.
 */

export type Mailbox = {
  id: string;
  email: string;
  fromName: string;
  user: string;
  password: string;
  smtpHost: string;
  smtpPort: number;
  imapHost?: string;
  imapPort: number;
  dailyLimit: number;
};

type MailboxInput = {
  id?: string;
  email: string;
  fromName?: string;
  user?: string;
  password: string;
  provider?: "gmail" | "outlook" | "zoho" | "custom";
  smtpHost?: string;
  smtpPort?: number;
  imapHost?: string | null;
  imapPort?: number;
  dailyLimit?: number;
};

const PRESETS: Record<string, { smtpHost: string; smtpPort: number; imapHost: string; imapPort: number }> = {
  gmail: { smtpHost: "smtp.gmail.com", smtpPort: 465, imapHost: "imap.gmail.com", imapPort: 993 },
  outlook: { smtpHost: "smtp.office365.com", smtpPort: 587, imapHost: "outlook.office365.com", imapPort: 993 },
  zoho: { smtpHost: "smtp.zoho.com", smtpPort: 465, imapHost: "imap.zoho.com", imapPort: 993 },
};

let cachedMailboxes: Mailbox[] | null = null;

export function getMailboxes(): Mailbox[] {
  if (cachedMailboxes) return cachedMailboxes;
  const raw = process.env.OUTREACH_MAILBOXES;
  if (!raw) return (cachedMailboxes = []);
  let parsed: MailboxInput[];
  try {
    parsed = JSON.parse(raw);
  } catch {
    throw new Error("OUTREACH_MAILBOXES is not valid JSON. See OUTREACH.md.");
  }
  if (!Array.isArray(parsed)) throw new Error("OUTREACH_MAILBOXES must be a JSON array.");

  cachedMailboxes = parsed.map((m, i) => {
    if (!m.email || !m.password) throw new Error(`OUTREACH_MAILBOXES[${i}] needs "email" and "password".`);
    const preset = PRESETS[m.provider ?? ""] ?? (m.email.toLowerCase().endsWith("@gmail.com") ? PRESETS.gmail : undefined);
    const smtpHost = m.smtpHost ?? preset?.smtpHost;
    if (!smtpHost) throw new Error(`OUTREACH_MAILBOXES[${i}] needs "provider" or "smtpHost".`);
    return {
      id: m.id ?? m.email.toLowerCase(),
      email: m.email,
      fromName: m.fromName ?? m.email.split("@")[0],
      user: m.user ?? m.email,
      password: m.password,
      smtpHost,
      smtpPort: m.smtpPort ?? preset?.smtpPort ?? 465,
      // imapHost: null explicitly disables reply checking for this mailbox.
      imapHost: m.imapHost === null ? undefined : (m.imapHost ?? preset?.imapHost),
      imapPort: m.imapPort ?? preset?.imapPort ?? 993,
      dailyLimit: m.dailyLimit ?? 30,
    };
  });
  return cachedMailboxes;
}

export function getMailbox(id: string | null | undefined): Mailbox | undefined {
  return id ? getMailboxes().find((m) => m.id === id) : undefined;
}

/** Minimum minutes between two sends from the same mailbox (a random 0-60% is added on top). */
export const MIN_GAP_MINUTES = Number(process.env.OUTREACH_MIN_GAP_MINUTES ?? 6);

/** Text appended under every email, e.g. your business postal address (required by CAN-SPAM). */
export const FOOTER = process.env.OUTREACH_FOOTER ?? "";

export function getSecret(): string {
  const s = process.env.OUTREACH_SECRET;
  if (!s || s.length < 16) throw new Error("OUTREACH_SECRET must be set (at least 16 characters).");
  return s;
}

export function getBaseUrl(): string {
  const url =
    process.env.OUTREACH_BASE_URL ??
    (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : "http://localhost:3000");
  return url.replace(/\/$/, "");
}
