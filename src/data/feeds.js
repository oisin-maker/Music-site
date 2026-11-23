// Outlets pulled into The Wire. Each build fetches these feeds and skips any that fail.
// The build log prints which feeds worked: check it on your first deploy and fix any URL
// that fails (most sites list their feed at /feed, /rss or in the page source).
//
// Only headlines, dates and short excerpts are shown, always linking back to the source.

export const feeds = [
  { name: 'NME', badge: 'NME', url: 'https://www.nme.com/feed' },
  { name: 'Crack Magazine', badge: 'CR', url: 'https://crackmagazine.net/feed/' },
  { name: 'DJ Mag', badge: 'DJ', url: 'https://djmag.com/feeds/news' },
  { name: 'Mixmag', badge: 'MX', url: 'https://mixmag.net/rss.xml' },
  { name: 'The Quietus', badge: 'TQ', url: 'https://thequietus.com/feed/' },
  { name: 'Pitchfork', badge: 'PF', url: 'https://pitchfork.com/feed/feed-news/rss' },
  // Resident Advisor doesn't publish a public RSS feed as far as we know.
];

// How many items to keep per outlet, and in total.
export const PER_FEED = 12;
export const MAX_ITEMS = 60;

// Saved headlines shown only if every live feed fails (e.g. building offline).
export const fallbackItems = [
  { source: 'Crack Magazine', badge: 'CR', title: 'Inside the world of DJ Creole Princess', url: 'https://crackmagazine.net/article/profiles/dj-creole-princess-interview/', date: '2026-11-13' },
  { source: 'Crack Magazine', badge: 'CR', title: 'Mucho Flow 2026 through five key performances', url: 'https://crackmagazine.net/article/long-reads/mucho-flow-2026-review/', date: '2026-11-11' },
  { source: 'Crack Magazine', badge: 'CR', title: 'In Photos: Simple Things 2026', url: 'https://crackmagazine.net/article/long-reads/in-photos-simple-things-2026/', date: '2026-11-10' },
  { source: 'Crack Magazine', badge: 'CR', title: 'Decoding… The legacy of Juan Atkins, Godfather of Techno', url: 'https://crackmagazine.net/article/long-reads/decoding-juan-atkins/', date: '2026-11-04' },
  { source: 'Resident Advisor', badge: 'RA', title: 'Juan Atkins, techno pioneer and Belleville Three member, dies aged 64', url: 'https://ra.co/news/86327', date: '2026-11-01' },
  { source: 'DJ Mag', badge: 'DJ', title: "Everything But The Girl announce new album, 'Blue Reservoir'", url: 'https://djmag.com/news/everything-girl-announce-new-album-blue-reservoir-share-young-and-dumb-listen', date: '2026-10-29' },
  { source: 'DJ TechTools', badge: 'DT', title: 'Behringer teases a $300–400 open DJ standalone', url: 'https://djtechtools.com/?p=70343', date: '2026-10-27' },
  { source: 'DJ Mag', badge: 'DJ', title: 'Boris Brejcha will retire in 2028', url: 'https://djmag.com/news/boris-brejcha-will-retire-2028', date: '2026-10-26' },
];
