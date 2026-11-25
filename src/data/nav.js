// Top navigation. Pages that don't exist yet point at the homepage section or /news.
export const nav = [
  { label: 'News', href: '/news' },
  { label: 'Reviews', href: '/#reviews' },
  { label: 'Live', href: '/#map' },
  { label: 'Interviews', href: '/news?section=interviews' },
  { label: 'Playlist', href: '/#playlist' },
  { label: 'Gig map', href: '/#map' },
  { label: 'Quiz', href: '/#quiz' },
  { label: 'The Wire', href: '/news?section=wire' },
];

export const footerLinks = [
  { label: 'About', href: '/#manifesto' },
  { label: 'Manifesto', href: '/#manifesto' },
  { label: 'Inclusion', href: '/inclusion' },
  { label: 'Accessibility', href: '/accessibility' },
  { label: 'Privacy', href: '/privacy' },
  { label: 'Write for us', href: 'mailto:hello@example.com' },
  { label: 'List your venue', href: 'mailto:hello@example.com' },
  { label: 'Advertise', href: 'mailto:hello@example.com' },
  { label: 'RSS', href: '/rss.xml' },
];

// Mobile menu: each top tab opens to show its groups. Edit labels and links freely.
const n = (s) => `/news?section=${s}`;
export const mobileMenu = [
  { tab: 'News', href: '/news', intro: 'What is happening in London music this week.', groups: [
    { h: 'Sections', items: [['Latest', '/news'], ['London', n('news')], ['Venues & closures', n('news')], ['Industry', n('news')]] },
    { h: 'Campaigns', items: [['Save small rooms', '/#manifesto'], ['Licensing watch', n('news')]] } ] },
  { tab: 'Reviews', href: n('reviews'), intro: 'Dance, guitar and rap: records, gigs and DJ sets, scored by writers who were there.', groups: [
    { h: 'Format', items: [['Albums', n('reviews')], ['Singles & EPs', n('reviews')], ['Mixtapes', n('reviews')], ['Live', n('reviews')], ['DJ sets', n('reviews')]] },
    { h: 'Dance & electronic', items: [['House', n('reviews')], ['Techno', n('reviews')], ['UK garage', n('reviews')], ['Jungle & DnB', n('reviews')]] },
    { h: 'Guitar & bands', items: [['Indie', n('reviews')], ['Post-punk', n('reviews')], ['Folk', n('reviews')]] },
    { h: 'Rap, grime & drill', items: [['Grime', n('reviews')], ['Drill', n('reviews')], ['UK rap', n('reviews')], ['Afroswing', n('reviews')]] } ] },
  { tab: 'Live', href: '/#map', intro: 'Where to go, with London’s small rooms first.', groups: [
    { h: 'Going out', items: [['Tonight', '/#map'], ['This weekend', '/#map'], ['Free & under £10', '/#map']] },
    { h: 'By scene', items: [['Club nights', '/#map'], ['Gigs & bands', '/#map'], ['Rap & grime nights', '/#map']] } ] },
  { tab: 'Interviews', href: n('interviews'), intro: 'New artists, promoters and venue owners.', groups: [
    { h: 'Features', items: [['Spotlights', n('interviews')], ['Long reads', n('interviews')], ['Thought', n('thought')]] } ] },
  { tab: 'Playlist', href: '/#playlist', intro: 'Fifty songs a month, picked by the writers.', groups: [
    { h: 'Listen', items: [['50 of the month', '/#playlist']] } ] },
  { tab: 'Gig map', href: '/#map', intro: '15 hand-picked nights a week across dance, guitar and rap.', groups: [
    { h: 'Browse', items: [['This week', '/#map'], ['By night', '/#map'], ['By area', '/#map']] } ] },
  { tab: 'Quiz', href: '/#quiz', intro: 'Three questions, every morning.', groups: [
    { h: 'Play', items: [['Today’s quiz', '/#quiz']] } ] },
  { tab: 'The Wire', href: n('wire'), intro: 'Headlines from the rest of the scene.', groups: [
    { h: 'By outlet', items: [['All outlets', n('wire')]] } ] },
];
