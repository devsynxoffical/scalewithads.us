import "server-only";

/** Small RFC 4180 CSV parser (quotes, escaped quotes, newlines in quotes, comma/semicolon/tab). */
export function parseCsv(input: string): string[][] {
  const text = input.replace(/^﻿/, "");
  const firstLine = text.split(/\r?\n/, 1)[0] ?? "";
  const delim = [",", ";", "\t"].reduce((best, d) => (firstLine.split(d).length > firstLine.split(best).length ? d : best), ",");
  const rows: string[][] = [];
  let row: string[] = [];
  let field = "";
  let quoted = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (quoted) {
      if (c === '"' && text[i + 1] === '"') {
        field += '"';
        i++;
      } else if (c === '"') quoted = false;
      else field += c;
    } else if (c === '"') quoted = true;
    else if (c === delim) {
      row.push(field);
      field = "";
    } else if (c === "\n" || c === "\r") {
      if (c === "\r" && text[i + 1] === "\n") i++;
      row.push(field);
      if (row.some((f) => f.trim())) rows.push(row);
      row = [];
      field = "";
    } else field += c;
  }
  row.push(field);
  if (row.some((f) => f.trim())) rows.push(row);
  return rows;
}

const ALIASES: Record<string, string[]> = {
  email: ["email", "emailaddress", "mail", "workemail", "businessemail"],
  firstName: ["firstname", "first", "fname", "givenname"],
  lastName: ["lastname", "last", "lname", "surname", "familyname"],
  company: ["company", "companyname", "organization", "organisation", "business", "businessname"],
  website: ["website", "url", "domain", "companywebsite", "site"],
  name: ["name", "fullname", "contactname"],
};

export type ParsedLead = {
  email: string;
  firstName?: string;
  lastName?: string;
  company?: string;
  website?: string;
  vars: Record<string, string>;
};

const EMAIL_RE = /^[^\s@,;<>"]+@[^\s@,;<>"]+\.[a-z]{2,}$/i;

export function isEmail(s: string): boolean {
  return EMAIL_RE.test(s);
}

export function csvToLeads(input: string): { leads: ParsedLead[]; invalid: number } {
  const rows = parseCsv(input);
  if (rows.length === 0) return { leads: [], invalid: 0 };
  const norm = (h: string) => h.toLowerCase().replace(/[^a-z0-9]/g, "");
  let header = rows[0].map((h) => h.trim());
  let body = rows.slice(1);
  // Allow a plain list of emails without a header row.
  if (!header.some((h) => ALIASES.email.includes(norm(h)))) {
    if (isEmail(header[0] ?? "")) {
      body = rows;
      header = ["email", ...header.slice(1).map((_, i) => `column${i + 2}`)];
    } else {
      throw new Error('No "email" column found in the CSV header.');
    }
  }
  const field = (key: string) => header.findIndex((h) => ALIASES[key].includes(norm(h)));
  const idx = Object.fromEntries(Object.keys(ALIASES).map((k) => [k, field(k)])) as Record<string, number>;

  const leads: ParsedLead[] = [];
  let invalid = 0;
  for (const r of body) {
    const get = (i: number) => (i >= 0 ? (r[i] ?? "").trim() : "");
    const email = get(idx.email).toLowerCase();
    if (!isEmail(email)) {
      invalid++;
      continue;
    }
    let firstName = get(idx.firstName);
    let lastName = get(idx.lastName);
    const full = get(idx.name);
    if (!firstName && full) {
      const [f, ...rest] = full.split(/\s+/);
      firstName = f;
      lastName ||= rest.join(" ");
    }
    const vars: Record<string, string> = {};
    header.forEach((h, i) => {
      if (h && r[i]?.trim()) vars[h] = r[i].trim();
    });
    leads.push({ email, firstName, lastName, company: get(idx.company), website: get(idx.website), vars });
  }
  return { leads, invalid };
}
