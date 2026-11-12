# DevSynx Outreach: automatic cold email

A cold email system built into this site, at **`/outreach`** (password protected, not indexed by search engines).

- Multi-step sequences: a first email plus follow-ups, with a delay in days between each step
- Follow-ups with an empty subject go out as replies in the same thread
- **Stops automatically when a lead replies** (it reads the mailbox over IMAP). Out-of-office auto-replies are ignored.
- Bounces and unsubscribes are detected and added to a do-not-contact list, which applies across all campaigns
- Sends from several SMTP / Gmail mailboxes in rotation, with a daily limit per mailbox and random spacing between sends
- Only sends in a time window you set (days and hours in the leads' timezone)
- Personalization with `{{firstName|there}}`, any CSV column, and `{Hi|Hey}` spintax
- Every email gets an unsubscribe link and a `List-Unsubscribe` header (Gmail/Outlook one-click), plus your footer

## 1. Database

Create a free Postgres database, for example on [Neon](https://neon.tech) or [Supabase](https://supabase.com), and copy its connection string.
The tables are created automatically on first use.

## 2. Mailboxes

**Gmail / Google Workspace:** turn on 2-Step Verification, then create an **App Password**
(Google Account → Security → App passwords). Use that 16-character password, not your normal one.
IMAP is enabled by default on current Gmail accounts.

**Other providers:** use their SMTP and IMAP host and port. Presets exist for `gmail`, `outlook` and `zoho`.

Deliverability tips:
- Send from a **separate domain** (e.g. `devsynx-mail.com` or `trydevsynx.com`), not your main one, so your main domain's reputation stays safe.
- Set up SPF, DKIM and DMARC on that domain.
- Warm up new mailboxes: start at 10–15 emails/day per mailbox and raise it slowly. Stay under about 40/day per mailbox.

## 3. Environment variables

Set these on your host (Vercel → Project → Settings → Environment Variables) and redeploy:

| Variable | Example | Notes |
|---|---|---|
| `DATABASE_URL` | `postgres://user:pass@host/db?sslmode=require` | |
| `OUTREACH_MAILBOXES` | see below | JSON array, one entry per inbox |
| `OUTREACH_SECRET` | any random string, 32+ characters | Signs unsubscribe links and the login cookie |
| `OUTREACH_ADMIN_PASSWORD` | a strong password | Login for `/outreach` |
| `CRON_SECRET` | any random string | Protects the scheduler endpoint |
| `OUTREACH_FOOTER` | `DevSynx · 123 Main St, City, Country` | Your postal address; CAN-SPAM requires one |
| `OUTREACH_BASE_URL` | `https://scalewithads.us` | Public URL used in unsubscribe links |
| `OUTREACH_MIN_GAP_MINUTES` | `6` | Optional. Minimum minutes between sends from one mailbox |

`OUTREACH_MAILBOXES` example (all on one line in the env var):

```json
[
  {"email":"bastian@trydevsynx.com","fromName":"Bastian","provider":"gmail","password":"abcd efgh ijkl mnop","dailyLimit":30},
  {"email":"sales@devsynx-mail.com","fromName":"Bastian from DevSynx","smtpHost":"smtp.example.com","smtpPort":465,"imapHost":"imap.example.com","imapPort":993,"password":"...","dailyLimit":25}
]
```

Fields: `email`, `password` (required); `fromName`, `user` (defaults to email), `provider` or `smtpHost`/`smtpPort`,
`imapHost`/`imapPort` (set `"imapHost": null` to turn off reply tracking), `dailyLimit` (default 30).

Generate random secrets with:

```bash
openssl rand -base64 32
```

## 4. Scheduler (this is what makes it automatic)

Something has to call the run endpoint **every 5 minutes**. Each call checks the inboxes for replies and bounces,
then sends at most one email per mailbox if one is due.

```
GET https://YOUR-SITE/api/outreach/cron
Authorization: Bearer <CRON_SECRET>
```

Easiest free option: [cron-job.org](https://cron-job.org). Create a job with that URL, run it every 5 minutes,
and add the header `Authorization: Bearer <CRON_SECRET>`. You can also use `?key=<CRON_SECRET>` in the URL instead of the header.

Vercel Cron works too on the Pro plan. The Hobby plan only allows one run per day, which is too slow.

## 5. Use it

1. Go to `/outreach` and log in.
2. Click **Test login** next to each mailbox.
3. Create a campaign. It starts with a 3-step DevSynx sequence you can edit.
4. Set the timezone, days and hours of your leads in **Settings**.
5. Import leads as CSV (Apollo, Hunter, Google Sheets export...). It needs an `email` column. Duplicates, unsubscribes,
   and anyone already in another campaign are skipped.
6. Send yourself a test of every step.
7. Click **Start campaign**.

When someone replies, the lead is marked **replied** and gets no more follow-ups. The reply lands in your normal inbox,
so answer it from there.
