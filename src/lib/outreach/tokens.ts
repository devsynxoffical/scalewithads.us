import "server-only";
import { createHmac, timingSafeEqual } from "node:crypto";
import { getBaseUrl, getSecret } from "./config";

function sign(value: string): string {
  return createHmac("sha256", getSecret()).update(value).digest("base64url");
}

function safeEqual(a: string, b: string): boolean {
  const x = Buffer.from(a);
  const y = Buffer.from(b);
  return x.length === y.length && timingSafeEqual(x, y);
}

/** Signed, non-guessable unsubscribe token for an email address. */
export function unsubscribeToken(email: string): string {
  const e = Buffer.from(email.toLowerCase()).toString("base64url");
  return `${e}.${sign(`unsub:${email.toLowerCase()}`).slice(0, 22)}`;
}

export function verifyUnsubscribeToken(token: string): string | null {
  const [e, sig] = token.split(".");
  if (!e || !sig) return null;
  let email: string;
  try {
    email = Buffer.from(e, "base64url").toString("utf8");
  } catch {
    return null;
  }
  return safeEqual(sig, sign(`unsub:${email}`).slice(0, 22)) ? email : null;
}

export function unsubscribeUrl(email: string): string {
  return `${getBaseUrl()}/api/outreach/unsubscribe?t=${unsubscribeToken(email)}`;
}

export function adminSessionValue(): string {
  return sign(`admin:${process.env.OUTREACH_ADMIN_PASSWORD ?? ""}`);
}

export function isValidAdminSession(value: string | undefined): boolean {
  return !!value && !!process.env.OUTREACH_ADMIN_PASSWORD && safeEqual(value, adminSessionValue());
}

export function checkPassword(input: string): boolean {
  const pw = process.env.OUTREACH_ADMIN_PASSWORD;
  if (!pw) return false;
  return safeEqual(sign(`pw:${input}`), sign(`pw:${pw}`));
}

export function checkCronSecret(input: string | null): boolean {
  const s = process.env.CRON_SECRET;
  return !!s && !!input && safeEqual(sign(`cron:${input}`), sign(`cron:${s}`));
}
