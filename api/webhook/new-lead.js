const { updateRecord } = require('../lib/airtable');
const { sendNurtureEmail } = require('../lib/send-email');

const RAILWAY_WEBHOOK = 'https://web-production-8fb9e.up.railway.app/webhook/new-lead';
const SEND_INTERVAL_DAYS = 14;

module.exports = async function handler(req, res) {
  // CORS headers for form submissions
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const data = req.body;
  if (!data || !data.name || !data.email) {
    return res.status(400).json({ error: 'Missing required fields: name, email' });
  }

  // Forward to existing Railway webhook first (handles Airtable create, Twilio, Calendar, etc.)
  let railwayRecord = null;
  try {
    const railwayRes = await fetch(RAILWAY_WEBHOOK, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (railwayRes.ok) {
      railwayRecord = await railwayRes.json().catch(() => null);
    }
    console.log(`[WEBHOOK] Forwarded to Railway: ${railwayRes.status}`);
  } catch (err) {
    console.error(`[WEBHOOK] Railway forward failed: ${err.message}`);
    // Don't block — Railway being down shouldn't prevent the lead from being captured
  }

  // Get the Airtable record ID from Railway's response
  // Railway webhook creates the record and should return the record ID
  const recordId = railwayRecord?.recordId || railwayRecord?.id || railwayRecord?.record?.id;

  if (!recordId) {
    console.error('[WEBHOOK] No record ID from Railway — cannot enroll in drip or send Email 1');
    // Still return success to the form (lead was forwarded to Railway)
    return res.status(200).json({
      success: true,
      drip: false,
      reason: 'No record ID returned from lead handler',
    });
  }

  // Enroll in drip sequence: set Drip_Status, Drip_Position, next_send_at
  const now = new Date().toISOString();
  try {
    await updateRecord(recordId, {
      Drip_Status: 'active',
      Drip_Position: 1,
      next_send_at: now,
    });
    console.log(`[WEBHOOK] Enrolled ${data.name} (${recordId}) in drip sequence`);
  } catch (err) {
    console.error(`[WEBHOOK] Drip enrollment failed for ${recordId}: ${err.message}`);
    return res.status(200).json({ success: true, drip: false, reason: err.message });
  }

  // Send Email 1 immediately
  try {
    const { subject, error } = await sendNurtureEmail({
      leadId: recordId,
      emailNum: 1,
      recipientEmail: data.email,
      recipientName: data.name,
    });

    if (error) {
      throw new Error(error);
    }

    // Update to position 2, next send in 14 days
    const nextSendAt = new Date(Date.now() + SEND_INTERVAL_DAYS * 24 * 60 * 60 * 1000).toISOString();
    await updateRecord(recordId, {
      Drip_Position: 2,
      next_send_at: nextSendAt,
      last_email_sent_at: now,
    });

    console.log(`[WEBHOOK] Sent Email 1 ("${subject}") to ${data.email} (${data.name})`);
    return res.status(200).json({ success: true, drip: true, emailSent: 1 });

  } catch (err) {
    console.error(`[WEBHOOK] Email 1 send failed for ${data.email}: ${err.message}`);
    // Drip is enrolled — cron will pick up Email 1 on next run
    return res.status(200).json({ success: true, drip: true, emailSent: false, reason: err.message });
  }
};
