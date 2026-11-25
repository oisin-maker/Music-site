// Venue access information, gathered from public sources.
// Keyed by venue name as used in src/data/home.js, so it carries over week to week.
//
// level: 'step-free'  step-free to the room the event is in (per the source)
//        'partial'    some areas step-free, others not, or step-free only with help
//        'no'         the event room is reached by stairs only
//        'unknown'    the venue hasn't published access information we could find
//
// Always tell readers to confirm with the venue: access changes (lifts break, rooms move).
// `checked` is when we last looked at the source.

export const accessLevels = {
  'step-free': { label: 'Step-free', icon: '✓' },
  partial: { label: 'Partly step-free', icon: '◐' },
  no: { label: 'Not step-free', icon: '✕' },
  unknown: { label: 'Access info not published', icon: '?' },
};

const checked = '25 Nov 2026';

export const venueAccess = {
  'Islington Assembly Hall': {
    level: 'step-free', checked,
    summary: 'Step-free to the main hall, with an accessible viewing area near the stage, a step-free toilet and an accessible bar. No lift: the balcony is up two flights of stairs.',
    extras: ['Free ticket for a personal assistant or carer: call 020 7527 8900', 'Hearing loop for spoken word, not live music'],
    source: 'https://islingtonassemblyhall.co.uk/accessibility', sourceLabel: 'Islington Assembly Hall',
  },
  'The Lexington': {
    level: 'no', checked,
    summary: 'The gig room is upstairs above the pub, and a published venue guide lists no wheelchair access.',
    extras: ['Disabled booking line: 020 7837 5371'],
    source: 'https://www.inkl.com/news/the-gig-venue-guide-the-lexington-london', sourceLabel: 'Guardian venue guide (older)',
  },
  Scala: {
    level: 'no', checked,
    summary: 'An old building on several levels with no lift. Staff can lift manual wheelchairs; heavy electric chairs may not be possible.',
    extras: ['Ask the box office for a seat if you can’t stand for long', 'Medic and welfare area on the ground floor'],
    source: 'https://scala.co.uk/s/admission/', sourceLabel: 'Scala',
  },
  Oslo: {
    level: 'partial', checked,
    summary: 'The music room is on the first floor and relies on a lift, which was reported out of service in late 2025. Check before you go.',
    extras: ['Accessible toilet: ask at the bar for the RADAR key', 'Free hearing protection at the bars', 'Duty manager trained in welfare and accessibility'],
    source: 'https://d32yfsbcvr2c70.cloudfront.net/content/uploads/2025/11/First-50-venue-Facilities-table-1.pdf', sourceLabel: 'Hackney venue facilities table, Nov 2025',
  },
  Bricks: {
    level: 'partial', checked,
    summary: 'The ground-floor bar is listed as wheelchair accessible with accessible toilets. The club room is upstairs and there is no lift to all floors.',
    extras: ['Ask which floor the show is on when you book'],
    source: 'https://www.tagvenue.com/rooms/london/50646/ton-of-brix/ground-floor-bar', sourceLabel: 'Venue hire listing',
  },
  'The Garage': {
    level: 'step-free', checked,
    summary: 'Step-free from the street into the main ground-floor room, with an accessible toilet. The upstairs room has no wheelchair access.',
    extras: ['Arrive 15 minutes before doors', 'Access requests: accessibility@thegarage.london'],
    source: 'https://www.thegarage.london/?p=29', sourceLabel: 'The Garage',
  },
  'Venue MOT': {
    level: 'unknown', checked,
    summary: 'We couldn’t find published access information for this warehouse unit. Contact the promoter or venue before buying.',
    extras: [],
    source: null, sourceLabel: null,
  },
  'Dalston Den': {
    level: 'unknown', checked,
    summary: 'We couldn’t find published access information. Contact the venue before buying.',
    extras: [],
    source: null, sourceLabel: null,
  },
  'The Jago': {
    level: 'step-free', checked,
    summary: 'The ground-floor live room is listed with step-free access and accessible toilets. Dalston Junction station, 300m away, is step-free.',
    extras: ['Other rooms in the building are not on the ground floor'],
    source: 'https://www.tagvenue.com/rooms/london/119003/the-jago/ground-floor-live-room', sourceLabel: 'Venue hire listing',
  },
  fabric: {
    level: 'partial', checked,
    summary: 'Accessible toilets on the ground floor. Some rooms are reached by stairs; security can help with the lift to Room 3.',
    extras: ['Companion tickets with notice', 'Blue Badge spaces outside, book in advance'],
    source: 'https://www.qmsu.org/news/article/23919/Wheelchair-Accessible-Night-Out-Spots-in-London', sourceLabel: 'QMSU accessible nights guide',
  },
  FOLD: {
    level: 'unknown', checked,
    summary: 'The club hasn’t published access information we could find, and the dancefloor sits above a print works. Contact FOLD before buying.',
    extras: [],
    source: null, sourceLabel: null,
  },
  'Dublin Castle': {
    level: 'no', checked,
    summary: 'The music room is down a number of stairs and there is no accessible toilet.',
    extras: [],
    source: 'https://camdenrocksfestival.com/?p=12375', sourceLabel: 'Camden Rocks venue access table',
  },
  'The Old Blue Last': {
    level: 'no', checked,
    summary: 'The live room is on the second floor and there are no accessible toilets.',
    extras: [],
    source: 'https://www.skiddle.com/whats-on/London/The-Old-Blue-Last/', sourceLabel: 'Skiddle venue listing',
  },
  'The Roundhouse': {
    level: 'step-free', checked,
    summary: 'Step-free throughout, with a lift to every level and accessible toilets on all floors.',
    extras: ['Free carer tickets, no documents needed', 'Hearing loop in the foyer; Sennheiser hearing enhancement in the main space', 'Access: access@roundhouse.org.uk'],
    source: 'https://www.roundhouse.org.uk/visit/accessibility/venue-access-information', sourceLabel: 'Roundhouse',
  },
  'Boxpark Shoreditch': {
    level: 'step-free', checked,
    summary: 'Boxpark says the Shoreditch site is wheelchair friendly. It doesn’t publish detail on the upper level or toilets.',
    extras: ['General enquiries: shoreditch@boxpark.co.uk'],
    source: 'https://www.boxpark.co.uk/venues/shoreditch/contact', sourceLabel: 'Boxpark',
  },
};
