const { updateRecord } = require('../../../lib/airtable');

// Transparent 1x1 GIF pixel (43 bytes)
const PIXEL = Buffer.from(
  'R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
  'base64'
);

module.exports = async function handler(req, res) {
  const { leadId, emailNum } = req.query;

  // Return the pixel immediately
  res.setHeader('Content-Type', 'image/gif');
  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');
  res.status(200).send(PIXEL);

  // Fire-and-forget Airtable update
  if (leadId && leadId.startsWith('rec')) {
    updateRecord(leadId, {
      last_opened_at: new Date().toISOString(),
    }).catch((err) => {
      console.error(`[OPEN TRACK ERROR] Lead ${leadId}, Email ${emailNum}: ${err.message}`);
    });
  }
};
