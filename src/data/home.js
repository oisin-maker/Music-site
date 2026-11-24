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

// Daily quiz: London music across our three scenes. Each day the page asks
// one question from each scene, rotating through these pools by date.
// `answer` is the index of the right option. Add questions to any pool freely.
export const quizPools = {
  dance: [
    { prompt: 'Which London pirate station, started in 1994, became home to garage, grime and dubstep?', options: ['Kiss FM', 'Rinse FM', 'Flex FM', 'Deja Vu FM'], answer: 1, explain: 'Rinse began as an east London pirate before going legal.' },
    { prompt: 'The dubstep night FWD>> made its name at which Shoreditch club?', options: ['Plastic People', 'Cargo', 'The End', 'Corsica Studios'], answer: 0, explain: 'FWD>> at Plastic People, on Curtain Road, was where much of early dubstep was first heard loud.' },
    { prompt: 'Goldie’s label Metalheadz ran its famous Sunday sessions at which Hoxton club in the mid-90s?', options: ['Turnmills', 'The Blue Note', 'Heaven', 'The Fridge'], answer: 1, explain: 'The Metalheadz Sunday sessions at the Blue Note in Hoxton Square became a jungle and drum & bass institution.' },
    { prompt: 'UK garage crew So Solid Crew, who hit No. 1 with “21 Seconds” in 2001, came from which part of London?', options: ['Battersea', 'Croydon', 'Hackney', 'Tottenham'], answer: 0, explain: 'So Solid came out of Battersea in south-west London.' },
    { prompt: 'In what year did fabric open in Farringdon?', options: ['1989', '1994', '1999', '2004'], answer: 2, explain: 'The club opened in 1999 in a former cold store by Smithfield Market.' },
  ],
  bands: [
    { prompt: 'Which south London pub became home to the post-punk scene behind black midi and Shame?', options: ['The Windmill, Brixton', 'The Lexington, Angel', 'The Shacklewell Arms, Dalston', 'The George Tavern, Stepney'], answer: 0, explain: 'The Windmill in Brixton gave both bands their early gigs.' },
    { prompt: 'The Libertines played secret gigs at the Albion Rooms. What was it?', options: ['A pub cellar in Camden', 'Their flat in Bethnal Green', 'A railway arch in Hackney', 'A squat in Kentish Town'], answer: 1, explain: 'The Albion Rooms was the name Pete Doherty and Carl Barât gave their Bethnal Green flat.' },
    { prompt: 'Bob Dylan played the Troubadour folk club in 1962. Which part of London is it in?', options: ['Soho', 'Earls Court', 'Camden', 'Greenwich'], answer: 1, explain: 'The Troubadour on Old Brompton Road in Earls Court has hosted folk nights since the 1950s.' },
  ],
  rap: [
    { prompt: 'Dizzee Rascal won the Mercury Prize in 2003 with which debut album?', options: ['Maths + English', 'Boy in da Corner', 'Showtime', 'Treddin’ on Thin Ice'], answer: 1, explain: 'Boy in da Corner made grime front-page news. Dizzee was 18.' },
    { prompt: 'Wiley and Dizzee Rascal both came up in which east London area, a cradle of grime?', options: ['Bow', 'Stratford', 'Walthamstow', 'Ilford'], answer: 0, explain: 'Bow, in Tower Hamlets, was home to Roll Deep and pirate stations like Rinse in its early years.' },
    { prompt: 'UK drill took shape in south London in the early 2010s. Pioneering group 67 came from where?', options: ['Brixton Hill', 'Peckham', 'Croydon', 'Lewisham'], answer: 0, explain: '67 came out of Brixton Hill and helped give UK drill its own sound.' },
  ],
};
// Order the scenes appear in each day.
export const quizScenes = [['dance', 'Dance & electronic'], ['bands', 'Guitar & bands'], ['rap', 'Rap, grime & drill']];

// Playlist: paste a Spotify/Apple Music embed URL here when ready.
export const playlist = {
  title: 'Aerial 50: November',
  embedUrl: '', // e.g. https://open.spotify.com/embed/playlist/XXXXXXXX
};
