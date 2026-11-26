// Homepage content that isn't an article yet. Edit freely.

// Gig map: real London listings for the week, curated to our three scenes.
// Each pick has a lat/lng; the map converts it to a position (see toMap below).
// Sources checked 24 Nov 2026: Songkick, DICE/RA event pages via listings sites, Skiddle, WeGotTickets, Ents24.
// Re-check before publishing: line-ups and prices change.
import { venueAccess } from './venueAccess.js';
export const gigWeek = 'Mon 23 – Sat 28 November';
// Tall frame (about 4:5) centred on the Thames, so the map can run the length of the list.
export const BOUNDS = { west: -0.175, east: 0.03, north: 51.58, south: 51.42 };
export const toMap = (lat, lng) => ({
  x: Math.round(((lng - BOUNDS.west) / (BOUNDS.east - BOUNDS.west)) * 1000) / 10,
  y: Math.round(((BOUNDS.north - lat) / (BOUNDS.north - BOUNDS.south)) * 1000) / 10,
});
// `nudge` [dx, dy] in % separates pins for venues that sit very close together.
const g = (o) => { const p = toMap(o.lat, o.lng); const [dx, dy] = o.nudge || [0, 0]; return { ...o, x: p.x + dx, y: p.y + dy, access: venueAccess[o.venue] || { level: 'unknown', summary: 'We haven’t checked access for this venue yet.', extras: [], source: null } }; };
export const gigs = [
  g({ scene: 'bands', day: 'Mon 23', time: '19:00', act: 'Dea Matrona', venue: 'Islington Assembly Hall', area: 'Islington', price: 'See listing', note: 'Belfast rock trio on a 900-cap Upper Street stage.', tags: ['Rock', 'Live'], lat: 51.5395, lng: -0.1033, url: 'https://www.songkick.com/concerts/43258059-dea-matrona-at-islington-assembly-hall' }),
  g({ scene: 'bands', day: 'Tue 24', time: '19:30', act: 'Requin Chagrin', venue: 'The Lexington', area: 'Angel', price: 'See listing', note: 'French surf-pop and shoegaze in a 200-cap upstairs room.', tags: ['Indie', 'Shoegaze'], lat: 51.5313, lng: -0.1121, url: 'https://www.songkick.com/concerts/43321805-requin-chagrin-at-lexington' }),
  g({ scene: 'bands', day: 'Tue 24', time: '19:30', act: 'Guest List', venue: 'Scala', area: "King's Cross", price: 'From £17.50', note: 'Indie guitar band at the old cinema by the station.', tags: ['Indie', 'Guitar'], lat: 51.5309, lng: -0.121, url: 'https://www.songkick.com/concerts/43189987-guest-list-at-scala' }),
  g({ scene: 'bands', day: 'Wed 25', time: '19:30', act: 'deary', venue: 'Oslo', area: 'Hackney', price: 'From £15', note: 'Dream-pop over Hackney Central station.', tags: ['Dream pop', 'Shoegaze'], lat: 51.5464, lng: -0.0558, url: 'https://www.songkick.com/concerts/43221563-deary-at-oslo' }),
  g({ scene: 'rap', day: 'Thu 26', time: '19:00', act: 'Kio: Local Geezer', venue: 'Bricks', area: 'Brixton', price: 'See listing', note: 'Headline show with Trixx, Dreamm and KC, live dancers and DJs.', tags: ['Rap', 'Grime'], lat: 51.462, lng: -0.114, url: 'https://www.skiddle.com/whats-on/London/Bricks/Kio---Local-Geezer-Headline-Show/42645693/' }),
  g({ scene: 'bands', day: 'Thu 26', time: '19:00', act: 'Look Mum No Computer', venue: 'The Garage', area: 'Highbury', price: 'From £25', note: 'Homemade synths and punk energy at Highbury Corner.', tags: ['Synth', 'Live'], lat: 51.5465, lng: -0.1036, url: 'https://www.songkick.com/concerts/43211073-look-mum-no-computer-at-garage' }),
  g({ scene: 'dance', day: 'Fri 27', time: '23:00', act: 'Oneman b2b Plastician, all night', venue: 'Venue MOT', area: 'New Cross', price: '£10–£20', note: 'Six hours of UKG, breakstep, dubstep and grime in a south-east London warehouse unit.', tags: ['UKG', 'Grime', 'Dubstep'], lat: 51.4826, lng: -0.0478, url: 'https://www.ents24.com/london-events/venue-mot-unit-18/oneman-b2b-plastician-all-night-long/7511513' }),
  g({ scene: 'dance', day: 'Fri 27', time: '21:00', act: 'Breakaway: jungle & drum and bass', venue: 'Dalston Den', area: 'Dalston', price: 'Free–£5', note: 'Cheap, small and loud.', tags: ['Jungle', 'DnB'], lat: 51.548, lng: -0.0755, url: '' /* removed 26 Nov: pointed to a different event; no verified listing found */ }),
  g({ scene: 'dance', day: 'Fri 27', time: '22:30', act: 'A Night in Paradise: Larry Levan tribute', venue: 'The Jago', area: 'Dalston', price: 'See listing', note: 'Garage-house and disco in honour of the Paradise Garage DJ.', tags: ['House', 'Disco'], lat: 51.5415, lng: -0.076, url: 'https://www.technoairlines.com/event/a-night-in-paradise-tribute-to-larry-levan-the-jago-2026-11-27' }),
  g({ scene: 'dance', day: 'Fri 27', time: '18:00', act: 'ORII: The Lineage Mixtape', venue: 'fabric', area: 'Farringdon', price: 'See listing', note: 'Early show with BIG DRECO, Neue Grafik, AUKA, DJ Programma and more.', tags: ['Club', 'Jazz'], lat: 51.5197, lng: -0.1025, url: 'https://www.technoairlines.com/event/fabric-x-sennheiser-present-orii-the-lineage-mixtape-fabric-2026-11-27' }),
  g({ scene: 'dance', day: 'Fri 27', time: '23:00', act: 'Dresden Extended', venue: 'FOLD', area: 'Canning Town', price: 'Sold out', note: 'Dresden with Ivan Smagghe and Manfredas. Sold out: try resale.', tags: ['Techno'], lat: 51.5108, lng: 0.0094, url: '' /* removed 26 Nov: pointed to a different event */ }),
  g({ scene: 'bands', day: 'Fri 27', time: '19:15', act: 'Electroniq: Holy Braile, Legpuppy 2.0, Lauri Black', venue: 'Dublin Castle', area: 'Camden', price: '£11', note: 'Synth-punk bill at the Camden pub where Madness started out.', tags: ['Synth', 'Punk'], lat: 51.5379, lng: -0.1446, url: 'https://wegottickets.com/f/18219' }),
  g({ scene: 'bands', day: 'Sat 28', time: '19:30', act: 'Minimum Wage', venue: 'The Old Blue Last', area: 'Shoreditch', price: '£13.31', note: '180-cap room above the pub.', tags: ['Indie', 'Live'], lat: 51.5255, lng: -0.0809, url: 'https://www.songkick.com/concerts/43342835-minimum-wage-at-old-blue-last' }),
  g({ scene: 'dance', day: 'Sat 28', time: '19:00', act: 'Notion', venue: 'The Roundhouse', area: 'Chalk Farm', price: 'From £27.50', note: 'His biggest UK headline show yet: bassline, DnB and 140.', tags: ['Bassline', 'UKG'], lat: 51.5432, lng: -0.1519, url: 'https://ra.co/events/2507195' }),
  g({ scene: 'rap', day: 'Fri 27', time: '18:00', act: 'Hip Hop Karaoke', venue: 'Boxpark Shoreditch', area: 'Shoreditch', price: 'See listing', note: 'Take the mic: UK and US rap classics, crowd on the chorus.', tags: ['Rap', 'Hip hop'], lat: 51.5232, lng: -0.0763, nudge: [3, 4], url: 'https://beatstorapon.com/event/hip-hop-karaoke-6aeab6349f1bb794c9274b32' }),
];
// Day order for sorting the list.
const DAY = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
gigs.sort((a, b) => DAY.indexOf(a.day.slice(0, 3)) - DAY.indexOf(b.day.slice(0, 3)) || a.time.localeCompare(b.time));
// The Thames through the map area, as lat/lng points (west to east).
export const thames = [
  [51.4845, -0.19], [51.4823, -0.17], [51.4835, -0.15], [51.4862, -0.13], [51.4905, -0.1235], [51.5005, -0.1225],
  [51.5075, -0.1185], [51.5095, -0.104], [51.5078, -0.0875], [51.5052, -0.0753], [51.5038, -0.0595], [51.5072, -0.039],
  [51.5085, -0.028], [51.5003, -0.0245], [51.4885, -0.0135], [51.4855, -0.0035], [51.4915, 0.0045], [51.5035, 0.0065],
  [51.5085, 0.0115], [51.5055, 0.023], [51.5005, 0.035],
];
export const sceneLabels = { dance: 'Dance', bands: 'Guitar', rap: 'Rap' };

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
