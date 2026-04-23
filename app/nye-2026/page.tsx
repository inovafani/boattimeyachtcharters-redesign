import type { Metadata } from 'next';
import CruisePage, { type CruisePageData } from '@/components/CruisePage';

export const metadata: Metadata = {
  title: 'NYE 2026 — New Year\'s Eve on the Broadwater · Boattime Yacht Charters',
  description:
    'Welcome 2026 aboard the Mermaid Spirit tri-deck catamaran. Champagne, gourmet canapés, fireworks, and the best view on the Gold Coast.',
};

const data: CruisePageData = {
  eyebrow:     'Special Event · New Year\'s Eve',
  title:       'New Year\'s Eve',
  titleAccent: 'on the Broadwater',
  heroImage:   'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=2000&q=85',
  heroStats: [
    { label: 'Date',      value: '31 Dec 2025' },
    { label: 'Per Person', value: '$169' },
    { label: 'Departs',   value: '9:30 PM' },
  ],
  description: [
    'Welcome 2026 in unforgettable style aboard the Mermaid Spirit tri-deck catamaran. As the clock strikes midnight, the Gold Coast Broadwater becomes a canvas of light and colour — and you\'ll have the finest seat in the house.',
    'Three spacious decks, dual bars, state-of-the-art sound, and a curated menu of gourmet canapés. This is the New Year\'s Eve that every other will be measured against. Adults only.',
  ],
  overviewImage: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?w=800&q=80',
  inclusions: [
    { title: 'Welcome Champagne',   detail: 'A glass of champagne, wine, or premium beer the moment you step aboard.' },
    { title: '8 Gourmet Canapés',   detail: 'Curated canapé selection — vegetarian, gluten-free, and dairy-free options available.' },
    { title: 'Tri-Deck Catamaran',  detail: 'Mermaid Spirit — three spacious decks, dual bars, and premium sound throughout.' },
    { title: 'Fireworks Views',     detail: 'Premium on-water vantage for the city fireworks display at midnight.' },
    { title: 'Dual Bar Service',    detail: 'Two fully licensed bars serving premium drinks throughout the evening.' },
    { title: '18+ Only Event',      detail: 'An adults-only celebration designed for an elevated New Year\'s experience.' },
  ],
  schedule: [
    { label: 'Boarding Opens',      time: '9:00 PM' },
    { label: 'Departure',           time: '9:30 PM' },
    { label: 'Midnight Countdown',  time: '12:00 AM' },
    { label: 'Return',              time: '1:30 AM' },
  ],
  dates:        'Tuesday, 31 December 2025\n18+ only event',
  location:     'Marina Muriel Henchman Public Pontoon\nGold Coast Broadwater',
  vessel:       'Mermaid Spirit — 30m tri-deck catamaran',
  availability: 'Limited tickets — sells out every year',
  pricing: [
    { label: 'Per Person', price: '$169', note: 'Includes champagne & 8 gourmet canapés' },
  ],
  bookingUrl: 'https://boattimeyachtcharters.rezdy.com/668818/new-years-eve-2025',
};

export default function Page() {
  return <CruisePage {...data} />;
}
