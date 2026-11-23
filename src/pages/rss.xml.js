import { getArticles } from '../lib/articles.js';

const esc = (s = '') => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

export function GET({ site }) {
  const base = (site || new URL('https://example.com')).toString().replace(/\/$/, '');
  const items = getArticles().map((a) => `
    <item>
      <title>${esc(a.title)}</title>
      <link>${base}/news/${a.slug}</link>
      <guid>${base}/news/${a.slug}</guid>
      <pubDate>${new Date(a.date).toUTCString()}</pubDate>
      <description>${esc(a.standfirst)}</description>
    </item>`).join('');
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"><channel>
  <title>Quicksilver</title>
  <link>${base}</link>
  <description>London music, small rooms.</description>${items}
</channel></rss>`;
  return new Response(xml, { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' } });
}
