const { getAllRecords, updateRecord } = require('../lib/airtable');
const { sendNurtureEmail } = require('../lib/send-email');

const TOTAL_EMAILS = 26;
const SEND_INTERVAL_DAYS = 14;
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

module.exports = async function handler(req, res) {
  console.log('DEBUG AUTH:', {
    querySec: req.query?.secret,
    envSec: process.env.CRON_SECRET,
    authHeader: req.headers?.authorization,
    vercelHeader: req.headers?.['x-vercel-cron-auth-token'],
    match: req.query?.secret === process.env.CRON_SECRET
  });

  // Auth check — supports three methods:
  // 1. Vercel cron header: x-vercel-cron-auth-token (sent automatically by Vercel)
  // 2. Bearer token: Authorization: Bearer <secret> (standard HTTP auth)
  // 3. Query param: ?secret=<secret> (manual testing fallback)
  const secret = process.env.CRON_SECRET;
  const vercelToken = req.headers['x-vercel-cron-auth-token'];
  const bearerMatch = (req.headers.authorization || '').match(/^Bearer\s+(.+)$/i);
  const bearerToken = bearerMatch ? bearerMatch[1] : null;
  const queryToken = req.query.secret;

  const authenticated = secret && (
    vercelToken === secret ||
    bearerToken === secret ||
    queryToken === secret
  );

  if (!authenticated) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  const dryRun = req.query.dry === 'true';

  const now = new Date().toISOString();
  const results = { sent: 0, errors: 0, skipped: 0, details: [] };

  try {
    // Fetch all leads and filter in JS to avoid Airtable formula field-name conflicts
    const allRecords = await getAllRecords([
      'Name', 'Email', 'Drip_Status', 'Drip_Position',
      'next_send_at', 'Status',
    ]);

    const now_ms = Date.now();
    const leads = allRecords.filter((r) => {
      const f = r.fields;
      if (f['Drip_Status'] !== 'active') return false;
      if (f['Status'] === 'Complete') return false;
      const pos = f['Drip_Position'] || 1;
      if (pos > TOTAL_EMAILS) return false;
      if (!f['Email']) return false;
      // next_send_at must be in the past or not set
      if (f['next_send_at'] && new Date(f['next_send_at']).getTime() > now_ms) return false;
      return true;
    });

    for (const lead of leads) {
      const { Name, Email, Drip_Position } = lead.fields;
      const emailNum = Drip_Position || 1;
      const leadId = lead.id;

      try {
        // Validate
        if (!Email) {
          results.skipped++;
          results.details.push({ leadId, name: Name, status: 'skipped', reason: 'No email' });
          continue;
        }

        if (emailNum > TOTAL_EMAILS) {
          results.skipped++;
          results.details.push({ leadId, name: Name, status: 'skipped', reason: 'Sequence complete' });
          continue;
        }

        if (dryRun) {
          results.sent++;
          results.details.push({
            leadId, name: Name, email: emailNum, to: Email,
            status: 'dry-run', timestamp: now,
          });
          console.log(`[DRY RUN] Would send email ${emailNum} to ${Email} (${Name})`);
          continue;
        }

        // Send via shared helper
        const { subject, error } = await sendNurtureEmail({
          leadId, emailNum, recipientEmail: Email, recipientName: Name,
        });

        if (error) {
          throw new Error(error);
        }

        // Update Airtable: increment email, set next send date
        const nextEmail = emailNum + 1;
        const nextSendAt = new Date(Date.now() + SEND_INTERVAL_DAYS * 24 * 60 * 60 * 1000).toISOString();

        const updateFields = {
          Drip_Position: nextEmail,
          next_send_at: nextSendAt,
          last_email_sent_at: now,
        };

        // Mark completed if past email 26
        if (nextEmail > TOTAL_EMAILS) {
          updateFields.Drip_Status = 'completed';
        }

        await updateRecord(leadId, updateFields);

        results.sent++;
        results.details.push({
          leadId, name: Name, email: emailNum, to: Email,
          subject, status: 'sent',
          timestamp: now,
        });
        console.log(`[SENT] Email ${emailNum} to ${Email} (${Name}) at ${now}`);
        await delay(1000);

      } catch (err) {
        results.errors++;
        results.details.push({
          leadId, name: Name, email: emailNum,
          status: 'error', reason: err.message,
        });
        console.error(`[ERROR] Email ${emailNum} to ${Email} (${Name}): ${err.message}`);
        await delay(1000);
      }
    }
  } catch (err) {
    console.error(`[FATAL] Cron job failed: ${err.message}`);
    return res.status(500).json({ error: err.message, results });
  }

  const mode = dryRun ? ' (DRY RUN)' : '';
  console.log(`[DONE${mode}] Sent: ${results.sent}, Errors: ${results.errors}, Skipped: ${results.skipped}`);
  return res.status(200).json(results);
};
