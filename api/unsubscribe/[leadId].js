const { updateRecord } = require('../lib/airtable');

module.exports = async function handler(req, res) {
  const { leadId } = req.query;

  if (!leadId || !leadId.startsWith('rec')) {
    return res.status(400).send(errorPage('Invalid unsubscribe link.'));
  }

  try {
    await updateRecord(leadId, { Drip_Status: 'unsubscribed' });
    console.log(`[UNSUBSCRIBE] Lead ${leadId} unsubscribed`);
  } catch (err) {
    console.error(`[UNSUBSCRIBE ERROR] Lead ${leadId}: ${err.message}`);
    return res.status(500).send(errorPage('Something went wrong. Please try again or call us.'));
  }

  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.status(200).send(`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Unsubscribed — Azle Drainage</title>
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body { font-family: -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; background: #f4f4f4; color: #333; }
  .header { background: #115740; padding: 20px 24px; }
  .header span { color: #fff; font-size: 18px; font-weight: 700; letter-spacing: 0.5px; }
  .card { max-width: 500px; margin: 60px auto; background: #fff; border-radius: 8px; box-shadow: 0 1px 4px rgba(0,0,0,0.1); overflow: hidden; }
  .body { padding: 40px 30px; text-align: center; }
  .body h1 { font-size: 22px; margin-bottom: 16px; color: #115740; }
  .body p { font-size: 16px; line-height: 1.6; color: #555; margin-bottom: 12px; }
  .body a { color: #115740; font-weight: 600; text-decoration: none; }
</style>
</head>
<body>
<div class="card">
  <div class="header"><span>AZLE DRAINAGE</span></div>
  <div class="body">
    <h1>You've been unsubscribed</h1>
    <p>You won't receive any more emails from this series.</p>
    <p>If this was a mistake, just give us a call at <a href="tel:6825166797">(682) 516-6797</a> and we'll fix it.</p>
    <p style="margin-top:24px; font-size:14px; color:#999;">&mdash; Bert, Azle Drainage</p>
  </div>
</div>
</body>
</html>`);
};

function errorPage(message) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Error — Azle Drainage</title>
<style>
  body { font-family: -apple-system, "Segoe UI", Roboto, sans-serif; background: #f4f4f4; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
  .msg { background: #fff; padding: 40px; border-radius: 8px; text-align: center; max-width: 400px; box-shadow: 0 1px 4px rgba(0,0,0,0.1); }
  .msg p { color: #555; font-size: 16px; line-height: 1.6; }
  .msg a { color: #115740; font-weight: 600; }
</style>
</head>
<body>
<div class="msg">
  <p>${message}</p>
  <p style="margin-top:16px;">Call us at <a href="tel:6825166797">(682) 516-6797</a></p>
</div>
</body>
</html>`;
}
