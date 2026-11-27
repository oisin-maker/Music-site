/**
 * Small Rooms newsletter sign-ups → Google Sheet.
 *
 * Paste this into Extensions → Apps Script in your subscribers sheet,
 * change SECRET below, then Deploy → New deployment → Web app
 * (Execute as: Me, Who has access: Anyone). Full steps are in the README.
 */

// Make this a long random password, and put the same value in Netlify as NEWSLETTER_SECRET.
const SECRET = 'change-me-to-a-long-random-password';
const SHEET_NAME = 'Subscribers';

function doPost(e) {
  try {
    return handleSignup(e);
  } catch (err) {
    console.error(err);
    return reply({ ok: false, error: String(err && err.message || err) });
  }
}

function handleSignup(e) {
  let body;
  try {
    body = JSON.parse(e.postData.contents);
  } catch (err) {
    return reply({ ok: false, error: 'bad request' });
  }
  if (!body || body.secret !== SECRET) return reply({ ok: false, error: 'unauthorised' });

  const email = String(body.email || '').trim().toLowerCase();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 254) {
    return reply({ ok: false, error: 'invalid email' });
  }

  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    const sheet = getSheet();
    const last = sheet.getLastRow();
    if (last > 1) {
      const existing = sheet.getRange(2, 2, last - 1, 1).getValues().flat();
      if (existing.indexOf(email) !== -1) return reply({ ok: true, existing: true });
    }
    // The leading apostrophe stops Sheets treating text that starts with = + - @ as a formula.
    const page = String(body.page || '').slice(0, 200);
    sheet.appendRow([new Date(), asText(email), asText(page)]);
    return reply({ ok: true, existing: false });
  } finally {
    lock.releaseLock();
  }
}

function asText(value) {
  return /^[=+\-@]/.test(value) ? "'" + value : value;
}

function getSheet() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
    sheet.appendRow(['Signed up', 'Email', 'Page']);
    sheet.setFrozenRows(1);
  }
  return sheet;
}

function reply(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}

// To check the script yourself: choose testSignup in the toolbar and click Run.
// The Execution log shows the reply, and a test@example.com row appears in the sheet.
function testSignup() {
  const result = doPost({ postData: { contents: JSON.stringify({ secret: SECRET, email: 'test@example.com', page: '/test' }) } });
  Logger.log(result.getContent());
}
