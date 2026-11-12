import "server-only";
import type { Lead } from "./db";

/** Normalizes a variable name so {{first_name}}, {{firstName}} and {{First Name}} all match. */
export function normKey(key: string): string {
  return key.toLowerCase().replace(/[^a-z0-9]/g, "");
}

export function leadVars(lead: Pick<Lead, "email" | "first_name" | "last_name" | "company" | "website" | "vars">, senderName: string) {
  const vars: Record<string, string> = {};
  for (const [k, v] of Object.entries(lead.vars ?? {})) vars[normKey(k)] = String(v ?? "");
  const set = (k: string, v: string | null | undefined) => {
    if (v) vars[normKey(k)] = v;
  };
  set("email", lead.email);
  set("firstName", lead.first_name);
  set("lastName", lead.last_name);
  set("company", lead.company);
  set("website", lead.website);
  set("senderName", senderName);
  set("senderFirstName", senderName.split(" ")[0]);
  return vars;
}

/**
 * Renders a template:
 *   {{firstName}}            lead field or any CSV column
 *   {{firstName|there}}      with a fallback when the value is empty
 *   {Hi|Hey|Hello}           spintax: picks one option at random
 */
export function render(template: string, vars: Record<string, string>): string {
  let out = template.replace(/\{\{\s*([^}|]+?)\s*(?:\|\s*([^}]*?)\s*)?\}\}/g, (_m, key: string, fallback?: string) => {
    const v = vars[normKey(key)];
    return v && v.trim() ? v.trim() : (fallback ?? "");
  });
  // Resolve spintax innermost-first.
  const spin = /\{([^{}]*\|[^{}]*)\}/;
  for (let i = 0; i < 50 && spin.test(out); i++) {
    out = out.replace(spin, (_m, opts: string) => {
      const parts = opts.split("|");
      return parts[Math.floor(Math.random() * parts.length)];
    });
  }
  return out;
}

/** Lists variables used in a template that a lead does not have (for the preview warnings). */
export function missingVars(template: string, vars: Record<string, string>): string[] {
  const missing = new Set<string>();
  for (const m of template.matchAll(/\{\{\s*([^}|]+?)\s*(\|[^}]*)?\}\}/g)) {
    if (!m[2] && !vars[normKey(m[1])]?.trim()) missing.add(m[1]);
  }
  return [...missing];
}

function escapeHtml(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

/** Builds a minimal, personal-looking HTML version of a plain-text email. */
export function textToHtml(text: string): string {
  const linked = escapeHtml(text).replace(/(https?:\/\/[^\s<]+)/g, '<a href="$1">$1</a>');
  return `<div style="font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:1.5;color:#222">${linked.replace(/\n/g, "<br>")}</div>`;
}
