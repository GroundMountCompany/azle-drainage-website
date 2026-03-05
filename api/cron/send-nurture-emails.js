const { Resend } = require('resend');
const path = require('path');
const fs = require('fs');
const { queryRecords, updateRecord } = require('../lib/airtable');

const TOTAL_EMAILS = 26;
const SEND_INTERVAL_DAYS = 14;

module.exports = async function handler(req, res) {
  // Auth check
  const secret = process.env.CRON_SECRET;
  const auth = req.headers.authorization;
  if (!secret || auth !== `Bearer ${secret}`) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  const dryRun = req.query.dry === 'true';
  const domain = process.env.APP_DOMAIN || 'https://azledrainage.com';
  const resend = new Resend(process.env.RESEND_API_KEY);
  const senderEmail = process.env.SENDER_EMAIL || 'info@azletx.com';
  const senderName = process.env.SENDER_NAME || 'Bert from Azle Drainage';

  const now = new Date().toISOString();
  const results = { sent: 0, errors: 0, skipped: 0, details: [] };

  try {
    // Query leads ready for their next email
    const formula = `AND(
      {email_status} = "active",
      {Status} != "Complete",
      {current_email} <= ${TOTAL_EMAILS},
      IS_BEFORE({next_send_at}, NOW()),
      {Email} != ""
    )`;

    const fields = [
      'Name', 'Email', 'email_status', 'current_email',
      'next_send_at', 'Status',
    ];

    const leads = await queryRecords(formula, fields);

    for (const lead of leads) {
      const { Name, Email, current_email } = lead.fields;
      const emailNum = current_email || 1;
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

        // Load HTML template
        const templateNum = String(emailNum).padStart(2, '0');
        const templatePath = path.join(__dirname, '..', '..', 'email-sequences', 'templates', `email-${templateNum}.html`);

        if (!fs.existsSync(templatePath)) {
          results.errors++;
          results.details.push({ leadId, name: Name, email: emailNum, status: 'error', reason: `Template email-${templateNum}.html not found` });
          continue;
        }

        let html = fs.readFileSync(templatePath, 'utf-8');

        // Personalization
        const firstName = (Name || 'there').split(' ')[0];
        html = html.replace(/\{\{name\}\}/g, firstName);

        // Tracking pixel
        const pixelUrl = `${domain}/api/track/open/${leadId}/${emailNum}`;
        html = html.replace(
          '{{tracking_pixel}}',
          `<img src="${pixelUrl}" width="1" height="1" alt="" style="display:none;border:0;" />`
        );

        // Click tracking — wrap CTA URLs
        const clickBase = `${domain}/api/track/click/${leadId}/${emailNum}?url=`;
        html = html.replace(/\{\{click_track_url\}\}/g, clickBase);

        // Unsubscribe link
        const unsubUrl = `${domain}/api/unsubscribe/${leadId}`;
        html = html.replace(
          '{{unsubscribe_link}}',
          `<a href="${unsubUrl}" style="color:#bbbbbb; text-decoration:underline;">unsubscribe</a>`
        );

        // Convert relative image paths to absolute for email clients
        html = html.replace(
          /src=["']\.\.\/graphics\//g,
          `src="${domain}/email-sequences/graphics/`
        );

        // Extract subject line from <title> tag
        const titleMatch = html.match(/<title>([^<]+)<\/title>/);
        const subject = titleMatch ? titleMatch[1] : `Email ${emailNum} from Azle Drainage`;

        if (dryRun) {
          results.sent++;
          results.details.push({
            leadId, name: Name, email: emailNum, to: Email,
            subject, status: 'dry-run',
            timestamp: now,
          });
          console.log(`[DRY RUN] Would send email ${emailNum} to ${Email} (${Name})`);
          continue;
        }

        // Send via Resend
        const { error } = await resend.emails.send({
          from: `${senderName} <${senderEmail}>`,
          to: [Email],
          subject,
          html,
        });

        if (error) {
          throw new Error(error.message || JSON.stringify(error));
        }

        // Update Airtable: increment email, set next send date
        const nextEmail = emailNum + 1;
        const nextSendAt = new Date(Date.now() + SEND_INTERVAL_DAYS * 24 * 60 * 60 * 1000).toISOString();

        const updateFields = {
          current_email: nextEmail,
          next_send_at: nextSendAt,
          last_email_sent_at: now,
        };

        // Mark completed if past email 26
        if (nextEmail > TOTAL_EMAILS) {
          updateFields.email_status = 'completed';
        }

        await updateRecord(leadId, updateFields);

        results.sent++;
        results.details.push({
          leadId, name: Name, email: emailNum, to: Email,
          subject, status: 'sent',
          timestamp: now,
        });
        console.log(`[SENT] Email ${emailNum} to ${Email} (${Name}) at ${now}`);

      } catch (err) {
        results.errors++;
        results.details.push({
          leadId, name: Name, email: emailNum,
          status: 'error', reason: err.message,
        });
        console.error(`[ERROR] Email ${emailNum} to ${Email} (${Name}): ${err.message}`);
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
