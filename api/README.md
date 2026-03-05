# Azle Drainage — Email Nurture Sequence API

Serverless API routes (Vercel) that power the 26-email D2C nurture sequence.

## Architecture

```
/api
  /lib/airtable.js            — Shared Airtable client (query, update, get)
  /cron/send-nurture-emails.js — Daily cron: sends next email to qualifying leads
  /track/open/[leadId]/[emailNum].js  — Open tracking pixel (1x1 GIF)
  /track/click/[leadId]/[emailNum].js — Click tracking + redirect
  /unsubscribe/[leadId].js    — Unsubscribe endpoint + confirmation page
```

## Environment Variables

Set these in Vercel Dashboard > Settings > Environment Variables:

| Variable | Description |
|----------|-------------|
| `AIRTABLE_PAT` | Airtable Personal Access Token |
| `AIRTABLE_BASE_ID` | `appybUc0HIClC1sqB` |
| `AIRTABLE_TABLE_NAME` | `Leads` |
| `RESEND_API_KEY` | Resend API key (resend.com) |
| `CRON_SECRET` | Secret for cron auth (Vercel sends this automatically) |
| `SENDER_EMAIL` | `info@azletx.com` |
| `SENDER_NAME` | `Bert from Azle Drainage` |
| `APP_DOMAIN` | `https://azledrainage.com` |

## Airtable Setup

### Existing fields (no changes needed)
- **Name** (Single line text) — Lead's full name
- **Email** (Email) — Lead's email address
- **Status** (Single Select) — Job status. Title Case (e.g. "Complete")

### New fields to add

| Field | Type | Notes |
|-------|------|-------|
| `email_status` | Single Select | Options: `active`, `completed`, `unsubscribed`. Set to `active` when lead enters sequence. |
| `current_email` | Number (integer) | Starts at `1`. Tracks which email is next. |
| `next_send_at` | Date (include time) | ISO datetime. Set to NOW when lead enters sequence. Cron checks this. |
| `last_email_sent_at` | Date (include time) | Updated after each successful send. |
| `last_opened_at` | Date (include time) | Updated by open tracking pixel. |
| `last_clicked_at` | Date (include time) | Updated by click tracking redirect. |
| `opens_count` | Number (integer) | Optional. Not auto-incremented yet — `last_opened_at` is the primary signal. |
| `clicks_count` | Number (integer) | Optional. Not auto-incremented yet — `last_clicked_at` is the primary signal. |

### Enrolling a new lead

When a new lead comes in (form submission, Meta lead ad, etc.), set these fields:

```
email_status: "active"
current_email: 1
next_send_at: <current datetime in ISO format>
```

This can be done via:
- An Airtable automation (on record create, set defaults)
- Your existing webhook handler on Railway
- A Zapier/Make trigger

## How the Cron Works

1. Runs daily at 9:00 AM CT (15:00 UTC) via Vercel Cron
2. Queries Airtable for leads where:
   - `email_status` = "active"
   - `Status` != "Complete"
   - `current_email` <= 26
   - `next_send_at` <= now
   - `Email` is not empty
3. For each lead: loads the HTML template, personalizes it, sends via Resend
4. After send: increments `current_email`, sets `next_send_at` +14 days
5. After email 26: sets `email_status` to "completed"

## Testing

### Dry run (logs what would send, no actual sends)
```
GET /api/cron/send-nurture-emails?dry=true
Authorization: Bearer YOUR_CRON_SECRET
```

### Manual trigger
```
curl -H "Authorization: Bearer YOUR_CRON_SECRET" \
  "https://azledrainage.com/api/cron/send-nurture-emails?dry=true"
```

## Tracking

- **Opens:** Transparent 1x1 GIF at `/api/track/open/{leadId}/{emailNum}`
- **Clicks:** 302 redirect via `/api/track/click/{leadId}/{emailNum}?url=...`
- **Unsubscribe:** `/api/unsubscribe/{leadId}` — sets status, shows confirmation page

Click tracking validates that redirect URLs point to `azledrainage.com` to prevent open redirect attacks.

## Email Templates

26 HTML templates live at `/email-sequences/templates/email-01.html` through `email-26.html`.

Placeholders replaced at send time:
- `{{name}}` — Lead's first name
- `{{tracking_pixel}}` — Open tracking pixel `<img>` tag
- `{{click_track_url}}` — Click tracking URL prefix
- `{{unsubscribe_link}}` — Unsubscribe `<a>` tag

Image paths (`../graphics/...`) are converted to absolute URLs at send time.
