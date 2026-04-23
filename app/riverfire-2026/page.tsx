import type { Metadata } from 'next';
import CruisePage, { type CruisePageData } from '@/components/CruisePage';

export const metadata: Metadata = {
  title: 'Riverfire 2026 — Brisbane Fireworks Yacht Cruise · Boattime Yacht Charters',
  description:
    'Brisbane\'s iconic Riverfire fireworks from the best seat on the river. Board the Mermaid Spirit for 5 hours of luxury on the Brisbane River.',
};

const data: CruisePageData = {
  eyebrow:     'Special Event · Riverfire',
  title:       'Riverfire',
  titleAccent: '2026',
  heroImage:   'https://images.unsplash.com/photo-1498354178607-a79df2916198?w=2000&q=85',
  heroStats: [
    { label: 'Date',      value: '5 Sep 2026' },
    { label: 'Per Person', value: '$249' },
    { label: 'Departs',   value: '3:30 PM' },
  ],
  description: [
    'Brisbane\'s iconic Riverfire festival transforms the river into the most spectacular stage in Queensland — and the Mermaid Spirit gives you the finest vantage point of all. Spend five hours aboard a 30-metre luxury catamaran as the city ignites around you.',
    'Two bars, three decks, premium gourmet canapés, and an unobstructed front-row seat for the fireworks display that defines the Brisbane summer. This is an 18+ event aboard Queensland\'s most celebrated charter yacht.',
  ],
  overviewImage: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=800&q=80',
  inclusions: [
    { title: 'Welcome Champagne',   detail: 'Champagne, wine, or premium beer upon boarding as the afternoon begins.' },
    { title: 'Gourmet Canapés',     detail: 'Beef mignon, chicken, pork belly, oysters, Queensland prawns, and vegetarian options.' },
    { title: 'Dual Bar Service',    detail: 'Two fully licensed bars serving premium drinks throughout the 5-hour voyage.' },
    { title: 'Three Deck Access',   detail: 'All three spacious decks with unobstructed views up and down the Brisbane River.' },
    { title: 'Riverfire Views',     detail: 'Premium waterfront positioning for the full Riverfire fireworks display.' },
    { title: '18+ Adults Only',     detail: 'Adults-only event for an elevated atmosphere and premium on-board experience.' },
  ],
  schedule: [
    { label: 'Boarding',            time: '3:00 PM' },
    { label: 'Departure',           time: '3:30 PM' },
    { label: 'Riverfire Fireworks', time: 'At dusk' },
    { label: 'Return',              time: '8:30 PM' },
  ],
  dates:        'Saturday, 5 September 2026\n18+ only event',
  location:     'New Farm, Brisbane River\nBrisbane, Queensland',
  vessel:       'Mermaid Spirit — 30m tri-deck catamaran · 100 guests',
  availability: 'Limited tickets — sells out every year',
  pricing: [
    { label: 'Per Person', price: '$249', note: 'Includes canapés, champagne & full bar access' },
  ],
  bookingUrl: 'https://boattimeyachtcharters.rezdy.com/',
};

export default function Page() {
  return <CruisePage {...data} />;
}
