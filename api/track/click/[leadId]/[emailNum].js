const { updateRecord } = require('../../../lib/airtable');

const DEFAULT_URL = 'https://azledrainage.com/#contact';

module.exports = async function handler(req, res) {
  const { leadId, emailNum } = req.query;
  const destinationUrl = req.query.url || DEFAULT_URL;

  // Validate the redirect URL to prevent open redirect attacks
  let safeUrl = DEFAULT_URL;
  try {
    const parsed = new URL(destinationUrl);
    if (parsed.hostname.endsWith('azledrainage.com')) {
      safeUrl = destinationUrl;
    }
  } catch {
    // Invalid URL — use default
  }

  // Redirect immediately
  res.setHeader('Location', safeUrl);
  res.status(302).end();

  // Fire-and-forget Airtable update
  if (leadId && leadId.startsWith('rec')) {
    updateRecord(leadId, {
      last_clicked_at: new Date().toISOString(),
    }).catch((err) => {
      console.error(`[CLICK TRACK ERROR] Lead ${leadId}, Email ${emailNum}: ${err.message}`);
    });
  }
};
