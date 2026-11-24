// Homepage content that isn't an article yet. Edit freely.

// Gig map: 5–10 picks a week. x/y are % positions on the map illustration.
// SAMPLE LISTINGS — replace with real picks each week.
export const gigWeek = 'Week of 23 November';
export const gigs = [
  { day: 'Mon', time: '19:30', act: 'Fresh Faces: three new bands', venue: 'The Lamplight', area: 'Dalston', price: '£6', note: 'Pub back room, 120 cap', tags: ['Indie', 'Live'], x: 57, y: 30, url: '#' },
  { day: 'Tue', time: '20:00', act: 'Lantern Folk Night', venue: 'The Old Bell', area: 'Camden', price: '£5', note: 'Upstairs room', tags: ['Folk'], x: 40, y: 34, url: '#' },
  { day: 'Wed', time: '21:00', act: 'Sodium Sound System', venue: 'The Back Room', area: 'Peckham', price: '£10', note: 'Own rig, all vinyl', tags: ['Dub'], x: 58, y: 86, url: '#' },
  { day: 'Thu', time: '22:00', act: 'Pull Up: garage all night', venue: 'Basement 9', area: 'Tottenham', price: '£7', note: 'Basement, til 3', tags: ['UK garage'], x: 57, y: 10, url: '#' },
  { day: 'Fri', time: '22:00', act: 'Low Ceilings', venue: 'Arch 47', area: 'Bermondsey', price: '£12', note: 'Railway arch, til 4', tags: ['Techno'], x: 61, y: 72, url: '#' },
  { day: 'Sat', time: '22:30', act: 'Ghost Stations', venue: 'The Undercroft', area: 'Deptford', price: '£9', note: 'Crypt bar', tags: ['Ambient', 'Breaks'], x: 74, y: 84, url: '#' },
  { day: 'Sun', time: '16:00', act: 'Lock-In', venue: 'The Magpie & Stump', area: 'Hackney Wick', price: 'Free', note: 'Sunday session', tags: ['House', 'Disco'], x: 73, y: 42, url: '#' },
];

// Daily quiz: three questions. `answer` is the index of the right option.
export const quiz = [
  { prompt: 'The Belleville Three helped invent techno in Detroit. Who were they?', options: ['Juan Atkins, Derrick May and Kevin Saunderson', 'Jeff Mills, Robert Hood and Mike Banks', 'Frankie Knuckles, Larry Heard and Ron Hardy', 'Carl Craig, Moodymann and Theo Parrish'], answer: 0, explain: 'The three met in Belleville, outside Detroit, in the early 1980s.' },
  { prompt: 'Which London pirate station, started in 1994, became home to garage, grime and dubstep?', options: ['Kiss FM', 'Rinse FM', 'Flex FM', 'Deja Vu FM'], answer: 1, explain: 'Rinse began as an east London pirate before going legal.' },
  { prompt: 'In what year did fabric open in Farringdon?', options: ['1989', '1994', '1999', '2004'], answer: 2, explain: 'The club opened in 1999 by Smithfield Market.' },
];

// Playlist: paste a Spotify/Apple Music embed URL here when ready.
export const playlist = {
  title: 'Aerial 50: November',
  embedUrl: '', // e.g. https://open.spotify.com/embed/playlist/XXXXXXXX
};
