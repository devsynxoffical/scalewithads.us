import "server-only";
import postgres from "postgres";

declare global {
  var __outreachSql: postgres.Sql | undefined;
  var __outreachSchema: Promise<void> | undefined;
}

function client(): postgres.Sql {
  if (!globalThis.__outreachSql) {
    const url = process.env.DATABASE_URL;
    if (!url) throw new Error("DATABASE_URL is not set. See OUTREACH.md.");
    // prepare:false keeps it compatible with pooled connections (Neon, Supabase).
    globalThis.__outreachSql = postgres(url, { max: 3, prepare: false, onnotice: () => {} });
  }
  return globalThis.__outreachSql;
}

async function createSchema(sql: postgres.Sql) {
  await sql.unsafe(`
    CREATE TABLE IF NOT EXISTS outreach_campaigns (
      id SERIAL PRIMARY KEY,
      name TEXT NOT NULL,
      status TEXT NOT NULL DEFAULT 'paused',
      steps JSONB NOT NULL DEFAULT '[]',
      mailbox_ids TEXT[] NOT NULL DEFAULT '{}',
      timezone TEXT NOT NULL DEFAULT 'America/New_York',
      send_days INT[] NOT NULL DEFAULT '{1,2,3,4,5}',
      start_hour INT NOT NULL DEFAULT 9,
      end_hour INT NOT NULL DEFAULT 17,
      created_at TIMESTAMPTZ NOT NULL DEFAULT now()
    );
    CREATE TABLE IF NOT EXISTS outreach_leads (
      id SERIAL PRIMARY KEY,
      campaign_id INT NOT NULL REFERENCES outreach_campaigns(id) ON DELETE CASCADE,
      email TEXT NOT NULL,
      first_name TEXT,
      last_name TEXT,
      company TEXT,
      website TEXT,
      vars JSONB NOT NULL DEFAULT '{}',
      status TEXT NOT NULL DEFAULT 'active',
      current_step INT NOT NULL DEFAULT 0,
      next_send_at TIMESTAMPTZ NOT NULL DEFAULT now(),
      mailbox_id TEXT,
      thread_subject TEXT,
      message_ids TEXT[] NOT NULL DEFAULT '{}',
      last_sent_at TIMESTAMPTZ,
      replied_at TIMESTAMPTZ,
      error TEXT,
      created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
      UNIQUE (campaign_id, email)
    );
    CREATE INDEX IF NOT EXISTS outreach_leads_due ON outreach_leads (status, next_send_at);
    CREATE INDEX IF NOT EXISTS outreach_leads_email ON outreach_leads (email);
    CREATE TABLE IF NOT EXISTS outreach_sends (
      id SERIAL PRIMARY KEY,
      lead_id INT REFERENCES outreach_leads(id) ON DELETE SET NULL,
      campaign_id INT REFERENCES outreach_campaigns(id) ON DELETE SET NULL,
      mailbox_id TEXT NOT NULL,
      step INT NOT NULL,
      to_email TEXT NOT NULL,
      subject TEXT,
      message_id TEXT,
      status TEXT NOT NULL,
      error TEXT,
      sent_at TIMESTAMPTZ NOT NULL DEFAULT now()
    );
    CREATE INDEX IF NOT EXISTS outreach_sends_mailbox ON outreach_sends (mailbox_id, sent_at);
    CREATE TABLE IF NOT EXISTS outreach_suppressions (
      email TEXT PRIMARY KEY,
      reason TEXT NOT NULL,
      created_at TIMESTAMPTZ NOT NULL DEFAULT now()
    );
    CREATE TABLE IF NOT EXISTS outreach_mailbox_state (
      mailbox_id TEXT PRIMARY KEY,
      uid_validity TEXT,
      last_uid BIGINT NOT NULL DEFAULT 0,
      checked_at TIMESTAMPTZ,
      error TEXT
    );
  `);
}

/** Returns the SQL client, creating the tables on first use. */
export async function db(): Promise<postgres.Sql> {
  const sql = client();
  if (!globalThis.__outreachSchema) {
    globalThis.__outreachSchema = createSchema(sql).catch((e) => {
      globalThis.__outreachSchema = undefined;
      throw e;
    });
  }
  await globalThis.__outreachSchema;
  return sql;
}

export type Step = { subject: string; body: string; delayDays: number };

export type Campaign = {
  id: number;
  name: string;
  status: "active" | "paused";
  steps: Step[];
  mailbox_ids: string[];
  timezone: string;
  send_days: number[];
  start_hour: number;
  end_hour: number;
  created_at: Date;
};

export type LeadStatus = "active" | "completed" | "replied" | "bounced" | "unsubscribed" | "failed";

export type Lead = {
  id: number;
  campaign_id: number;
  email: string;
  first_name: string | null;
  last_name: string | null;
  company: string | null;
  website: string | null;
  vars: Record<string, string>;
  status: LeadStatus;
  current_step: number;
  next_send_at: Date;
  mailbox_id: string | null;
  thread_subject: string | null;
  message_ids: string[];
  last_sent_at: Date | null;
  replied_at: Date | null;
  error: string | null;
  created_at: Date;
};
