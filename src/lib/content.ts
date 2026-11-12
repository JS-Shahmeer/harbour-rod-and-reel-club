// Static club content for the UI build (Module 1), copied from the Base44 app.
// Later modules move this into the database and the admin area.

const BASE = 'https://media.base44.com/images/public/6a7df955ee69c2a1fb81ca9a';
const img = (id: string) => `${BASE}/${id}_generated_image.png`;

export const EVENTS = [
  { id: 'e1', title: 'Monthly Club Meeting', date: '2026-08-20', time: '7:00 PM', location: 'Huntington Harbour, Huntington Beach', category: 'Club Meeting', description: 'Club business, fishing reports from the past month, and a look ahead at the tournament schedule. Guests welcome.' },
  { id: 'e2', title: 'Seminar: Reading Local Conditions', date: '2026-09-03', time: '6:30 PM', location: 'Club meeting room', category: 'Seminar', description: 'Members walk through tides, water temperature, and bait movement along the Orange County coast.' },
  { id: 'e3', title: 'Harbour Cleanup Morning', date: '2026-09-13', time: '8:00 AM', location: 'Huntington Harbour launch ramp', category: 'Conservation', description: 'An H.O.P.E. morning on the water and along the shoreline. Bags and gloves provided.' },
  { id: 'e4', title: 'Fall Club Barbecue', date: '2026-09-27', time: '12:00 PM', location: 'Waterfront park, Huntington Harbour', category: 'Social Event', description: 'Families welcome. Bring a dish and your best story from the season.' },
  { id: 'e5', title: 'Junior Anglers Day', date: '2026-10-10', time: '9:00 AM', location: 'Harbour docks', category: 'Community Outreach', description: 'Members teach young anglers knots, casting, and handling fish with care.' },
];

export const TOURNAMENTS = [
  { id: 't1', title: 'Late Summer Yellowtail Shootout', date: '2026-08-29', location: 'Catalina & local waters', category: 'Members Only', registrationStatus: 'Open', resultsSummary: null, imageUrl: img('2ff9a08b0'), description: 'A single-day run for yellowtail with a members-only weigh-in back at the harbour.' },
  { id: 't2', title: 'Harbour Open Inshore Classic', date: '2026-09-19', location: 'Huntington Harbour to Newport', category: 'Open', registrationStatus: 'Coming Soon', resultsSummary: null, imageUrl: null, description: 'Calico, halibut, and sand bass. Open to members and invited guests.' },
  { id: 't3', title: 'Junior Angler Tournament', date: '2026-10-11', location: 'Harbour docks and jetty', category: 'Junior', registrationStatus: 'Coming Soon', resultsSummary: null, imageUrl: null, description: 'A relaxed, well-supervised event for young anglers, with members crewing.' },
  { id: 't4', title: 'H.O.P.E. Charity Fish-Off', date: '2026-11-07', location: 'Southern California coast', category: 'Charity', registrationStatus: 'Coming Soon', resultsSummary: null, imageUrl: null, description: "Fishing in support of the club's conservation and outreach work." },
];

export const ARTICLES = [
  { id: 'a1', slug: 'warm-water-pushes-yellowtail-closer-to-home', title: 'Warm Water Pushes Yellowtail Closer to Home', category: 'Fishing', publishDate: '2026-08-05', author: 'Club Reports', imageUrl: img('2ff9a08b0'), excerpt: 'Members reported steady yellowtail action inside the usual run this month, with bait holding tight to the structure.', body: 'Several members found fish shallower than expected, with the best windows early. Live bait outfished iron on most trips, though a slow-rolled surface iron produced the largest fish of the week.' },
  { id: 'a2', slug: 'summer-tournament-series-wraps-up', title: 'Summer Tournament Series Wraps Up', category: 'Tournaments', publishDate: '2026-07-28', author: 'Tournament Committee', imageUrl: img('4a2a48a61'), excerpt: 'A strong turnout closed out the summer series, with the weigh-in running late into the evening at the harbour.', body: 'Final standings and results for the summer series are posted for members in the Dock. Thanks to everyone who ran boats and crewed for others.' },
  { id: 'a3', slug: 'hope-volunteers-return-to-the-harbour', title: 'H.O.P.E. Volunteers Return to the Harbour', category: 'Conservation', publishDate: '2026-07-12', author: 'H.O.P.E. Committee', imageUrl: img('caedf7273'), excerpt: "Members spent a morning working the shoreline and docks as part of the club's ongoing conservation commitment.", body: 'H.O.P.E. mornings continue through the fall. Watch the calendar for the next date and bring a friend along.' },
];

export const ALBUMS = [
  { id: 'summer-tournament-series', title: 'Summer Tournament Series', category: 'Tournaments', albumDate: '2026-07-26', coverImageUrl: img('2ff9a08b0'), description: 'Weigh-ins, crews, and catches from the summer series.', imageUrls: [img('2ff9a08b0'), img('4a2a48a61')] },
  { id: 'mornings-out-of-the-harbour', title: 'Mornings Out of the Harbour', category: 'Fishing', albumDate: '2026-06-14', coverImageUrl: img('4a2a48a61'), description: 'Departures at first light from Huntington Harbour.', imageUrls: [img('4a2a48a61')] },
  { id: 'hope-conservation-days', title: 'H.O.P.E. Conservation Days', category: 'Conservation', albumDate: '2026-05-02', coverImageUrl: img('caedf7273'), description: 'Members working the harbour and shoreline.', imageUrls: [] as string[] },
  { id: 'from-the-club-archive', title: 'From the Club Archive', category: 'Historical', albumDate: '2026-01-10', coverImageUrl: img('ac655d5f5'), description: 'Older photographs of the harbour and club boats.', imageUrls: [img('ac655d5f5')] },
];

export const MILESTONES = [
  { id: 'm1', year: '', title: 'Club Founded', imageUrl: null as string | null, description: 'Establishment year to be confirmed by club officers before publishing.' },
  { id: 'm2', year: '', title: 'First Club Tournament', imageUrl: null as string | null, description: "Details of the club's first tournament — date, location, and winning angler — to be added from the club record." },
  { id: 'm3', year: '', title: 'H.O.P.E. Established', imageUrl: null as string | null, description: "Harbour Ocean Preservation Enhancement formed as the club's conservation initiative. Year to be confirmed." },
  { id: 'm4', year: '', title: 'Junior Angler Program', imageUrl: null as string | null, description: 'Ongoing outreach teaching young anglers to fish and care for the water.' },
];

export const FISHING_RESOURCES = [
  { id: 'f1', title: 'Handling Fish for Release', topic: 'Catch & Release', imageUrl: null as string | null, summary: 'Wet hands, short air time, and support the belly.', body: 'Keep the fish in the water while you ready the camera, and release headfirst into moving water.' },
  { id: 'f2', title: 'Local Species Card', topic: 'Species', imageUrl: null as string | null, summary: 'Calico bass, sand bass, halibut, yellowtail, bonito, and seasonal tuna.', body: "Seasonality varies year to year — members post current observations in the club's fishing flashes." },
  { id: 'f3', title: 'Regulations & Licences', topic: 'Regulations', imageUrl: null as string | null, summary: 'Always check current California size and bag limits before heading out.', body: 'Regulations change seasonally. Confirm the current rules for the area you plan to fish.' },
  { id: 'f4', title: 'Working Live Bait Inside the Harbour', topic: 'Techniques', imageUrl: null as string | null, summary: 'Presentation, line size, and hook choice for finicky inshore fish.', body: 'Lighter fluorocarbon and a smaller hook usually beat heavier tackle when the water is clear and the fish have seen pressure.' },
];
