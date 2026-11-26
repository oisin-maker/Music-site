// Newsletter sign-up: takes the email from the footer form and passes it to the
// Google Apps Script attached to the subscribers sheet, which adds a row.
// Set NEWSLETTER_SCRIPT_URL and NEWSLETTER_SECRET in Netlify (see README).

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default async (req) => {
  const wantsJson = (req.headers.get('accept') || '').includes('application/json');
  const reply = (status, ok, message) =>
    wantsJson
      ? Response.json({ ok, message }, { status })
      : new Response(page(ok, message), { status, headers: { 'content-type': 'text/html; charset=utf-8' } });

  if (req.method !== 'POST') return reply(405, false, 'Please use the sign-up form.');

  let form;
  try {
    form = await req.formData();
  } catch {
    return reply(400, false, 'Something went wrong with the form. Please try again.');
  }

  // Bots fill in the hidden "website" field; people never see it.
  if (String(form.get('website') || '').trim()) return reply(200, true, 'Thanks, you’re on the list.');

  const email = String(form.get('email') || '').trim().toLowerCase();
  if (email.length > 254 || !EMAIL.test(email)) {
    return reply(400, false, 'That email address doesn’t look right. Please check it and try again.');
  }

  const url = process.env.NEWSLETTER_SCRIPT_URL;
  const secret = process.env.NEWSLETTER_SECRET;
  if (!url || !secret) {
    console.error('[newsletter] NEWSLETTER_SCRIPT_URL or NEWSLETTER_SECRET is not set.');
    return reply(503, false, 'Sign-ups aren’t working right now, so we haven’t stored your email. Please try again later.');
  }

  const from = String(form.get('page') || '').slice(0, 200);
  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'content-type': 'text/plain;charset=utf-8' },
      body: JSON.stringify({ secret, email, page: from }),
      redirect: 'follow',
      signal: AbortSignal.timeout(10000),
    });
    const data = await res.json().catch(() => null);
    if (!res.ok || !data || !data.ok) throw new Error(`script replied ${res.status} ${JSON.stringify(data)}`);
    return reply(200, true, data.existing ? 'You’re already on the list. Thanks!' : 'Thanks, you’re on the list.');
  } catch (err) {
    console.error('[newsletter] Could not save to the sheet:', err.message);
    return reply(502, false, 'Something went wrong, so we haven’t stored your email. Please try again later.');
  }
};

export const config = { path: '/api/subscribe' };

// Shown only when JavaScript is off and the browser submits the form directly.
function page(ok, message) {
  const esc = (s) => s.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]);
  return `<!doctype html><html lang="en-GB"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>${ok ? 'Subscribed' : 'Sign-up problem'} · Aerial</title>
<style>body{font-family:system-ui,sans-serif;background:#F4EFE6;color:#1A1714;max-width:36rem;margin:15vh auto;padding:0 16px;line-height:1.5}a{color:inherit}</style></head>
<body><h1>${ok ? 'You’re subscribed' : 'Sorry'}</h1><p>${esc(message)}</p><p><a href="/">Back to Aerial</a></p></body></html>`;
}
