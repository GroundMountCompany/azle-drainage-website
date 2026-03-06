const BASE_URL = 'https://api.airtable.com/v0';

function getConfig() {
  const apiKey = process.env.AIRTABLE_PAT;
  const baseId = process.env.AIRTABLE_BASE_ID;
  const tableName = process.env.AIRTABLE_TABLE_NAME || 'Leads';
  if (!apiKey || !baseId) {
    throw new Error('Missing AIRTABLE_PAT or AIRTABLE_BASE_ID');
  }
  return { apiKey, baseId, tableName };
}

function tableUrl(baseId, tableName) {
  return `${BASE_URL}/${baseId}/${encodeURIComponent(tableName)}`;
}

function headers(apiKey) {
  return {
    Authorization: `Bearer ${apiKey}`,
    'Content-Type': 'application/json',
  };
}

/**
 * Query Airtable records with a filterByFormula.
 * Handles pagination automatically.
 */
async function queryRecords(formula, fields = []) {
  const { apiKey, baseId, tableName } = getConfig();
  const url = new URL(tableUrl(baseId, tableName));
  url.searchParams.set('filterByFormula', formula);
  fields.forEach((f) => url.searchParams.append('fields[]', f));

  const allRecords = [];
  let offset = null;

  do {
    if (offset) url.searchParams.set('offset', offset);
    const res = await fetch(url.toString(), { headers: headers(apiKey) });
    if (!res.ok) {
      const body = await res.text();
      throw new Error(`Airtable query failed (${res.status}): ${body}`);
    }
    const data = await res.json();
    allRecords.push(...data.records);
    offset = data.offset || null;
  } while (offset);

  return allRecords;
}

/**
 * Update a single Airtable record by ID.
 */
async function updateRecord(recordId, fields) {
  const { apiKey, baseId, tableName } = getConfig();
  const url = `${tableUrl(baseId, tableName)}/${recordId}`;
  const res = await fetch(url, {
    method: 'PATCH',
    headers: headers(apiKey),
    body: JSON.stringify({ fields }),
  });
  if (!res.ok) {
    const body = await res.text();
    throw new Error(`Airtable update failed (${res.status}): ${body}`);
  }
  return res.json();
}

/**
 * Get a single record by ID.
 */
async function getRecord(recordId) {
  const { apiKey, baseId, tableName } = getConfig();
  const url = `${tableUrl(baseId, tableName)}/${recordId}`;
  const res = await fetch(url, { headers: headers(apiKey) });
  if (!res.ok) {
    const body = await res.text();
    throw new Error(`Airtable get failed (${res.status}): ${body}`);
  }
  return res.json();
}

/**
 * Fetch ALL records from the table (no filter). Handles pagination.
 */
async function getAllRecords(fields = []) {
  const { apiKey, baseId, tableName } = getConfig();
  const url = new URL(tableUrl(baseId, tableName));
  fields.forEach((f) => url.searchParams.append('fields[]', f));

  const allRecords = [];
  let offset = null;

  do {
    if (offset) url.searchParams.set('offset', offset);
    const res = await fetch(url.toString(), { headers: headers(apiKey) });
    if (!res.ok) {
      const body = await res.text();
      throw new Error(`Airtable fetch failed (${res.status}): ${body}`);
    }
    const data = await res.json();
    allRecords.push(...data.records);
    offset = data.offset || null;
  } while (offset);

  return allRecords;
}

module.exports = { queryRecords, updateRecord, getRecord, getAllRecords };
