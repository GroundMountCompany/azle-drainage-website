const { Resend } = require('resend');
const path = require('path');
const fs = require('fs');

/**
 * Prepare and send a nurture sequence email.
 * Returns { subject, error } — error is null on success.
 */
async function sendNurtureEmail({ leadId, emailNum, recipientEmail, recipientName }) {
  const domain = process.env.APP_DOMAIN || 'https://azledrainage.com';
  const senderEmail = process.env.SENDER_EMAIL || 'info@azletx.com';
  const senderName = process.env.SENDER_NAME || 'Bert from Azle Drainage';

  // Load HTML template
  const templateNum = String(emailNum).padStart(2, '0');
  const templatePath = path.join(__dirname, '..', '..', 'email-sequences', 'templates', `email-${templateNum}.html`);

  if (!fs.existsSync(templatePath)) {
    return { subject: null, error: `Template email-${templateNum}.html not found` };
  }

  let html = fs.readFileSync(templatePath, 'utf-8');

  // Personalization
  const firstName = (recipientName || 'there').split(' ')[0];
  html = html.replace(/\{\{name\}\}/g, firstName);

  // Tracking pixel
  const pixelUrl = `${domain}/api/track/open/${leadId}/${emailNum}`;
  html = html.replace(
    '{{tracking_pixel}}',
    `<img src="${pixelUrl}" width="1" height="1" alt="" style="display:none;border:0;" />`
  );

  // Click tracking
  const clickBase = `${domain}/api/track/click/${leadId}/${emailNum}?url=`;
  html = html.replace(/\{\{click_track_url\}\}/g, clickBase);

  // Unsubscribe link
  const unsubUrl = `${domain}/api/unsubscribe/${leadId}`;
  html = html.replace(
    '{{unsubscribe_link}}',
    `<a href="${unsubUrl}" style="color:#bbbbbb; text-decoration:underline;">unsubscribe</a>`
  );

  // Convert relative image paths to absolute
  html = html.replace(
    /src=["']\.\.\/graphics\//g,
    `src="${domain}/email-sequences/graphics/`
  );

  // Extract subject line from <title> tag
  const titleMatch = html.match(/<title>([^<]+)<\/title>/);
  const subject = titleMatch ? titleMatch[1] : `Email ${emailNum} from Azle Drainage`;

  // Send via Resend
  const resend = new Resend(process.env.RESEND_API_KEY);
  const { error } = await resend.emails.send({
    from: `${senderName} <${senderEmail}>`,
    to: [recipientEmail],
    subject,
    html,
  });

  if (error) {
    return { subject, error: error.message || JSON.stringify(error) };
  }

  return { subject, error: null };
}

module.exports = { sendNurtureEmail };
