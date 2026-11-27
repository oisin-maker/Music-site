import Parser from 'rss-parser';
import { feeds, fallbackItems, PER_FEED, MAX_ITEMS } from '../data/feeds.js';

const parser = new Parser({
  timeout: 10000,
  headers: { 'User-Agent': 'SmallRoomsBot/1.0 (+https://example.com)' },
});

const stripHtml = (s = '') => s.replace(/<[^>]*>/g, ' ').replace(/&nbsp;/g, ' ').replace(/\s+/g, ' ').trim();
const clip = (s, n = 160) => (s.length > n ? s.slice(0, n).replace(/\s+\S*$/, '') + '…' : s);

let cache;

/** Fetch every feed once per build. Returns { items, live, report }. */
export async function getWireItems() {
  if (cache) return cache;
  const report = [];
  const results = await Promise.all(
    feeds.map(async (f) => {
      try {
        const data = await parser.parseURL(f.url);
        const items = (data.items || []).slice(0, PER_FEED).map((it) => ({
          source: f.name,
          badge: f.badge,
          title: stripHtml(it.title || 'Untitled'),
          url: it.link,
          date: it.isoDate || it.pubDate || null,
          excerpt: clip(stripHtml(it.contentSnippet || it.summary || '')),
        })).filter((it) => it.url);
        report.push(`✓ ${f.name}: ${items.length} items`);
        return items;
      } catch (err) {
        report.push(`✗ ${f.name}: ${err.message}`);
        return [];
      }
    })
  );

  let items = results.flat();
  const live = items.length > 0;
  if (!live) items = fallbackItems.map((i) => ({ ...i, excerpt: '' }));

  items.sort((a, b) => new Date(b.date || 0) - new Date(a.date || 0));
  items = items.slice(0, MAX_ITEMS);

  console.log('\n[The Wire] feed report\n  ' + report.join('\n  ') + (live ? '' : '\n  → no live feeds, using saved headlines') + '\n');
  cache = { items, live, report };
  return cache;
}

export const formatDate = (d) => {
  if (!d) return '';
  const date = new Date(d);
  if (isNaN(date)) return '';
  return date.toLocaleDateString('en-GB', { day: 'numeric', month: 'short' });
};
