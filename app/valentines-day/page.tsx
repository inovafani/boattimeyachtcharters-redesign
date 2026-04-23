import type { Metadata } from 'next';
import CruisePage, { type CruisePageData } from '@/components/CruisePage';

export const metadata: Metadata = {
  title: 'Valentine\'s Day Cruise Gold Coast 2026 — Boattime Yacht Charters',
  description:
    'An evening of refined indulgence aboard Sun Goddess. Champagne, gourmet dining, and the Broadwater at golden hour — the perfect Valentine\'s gift.',
};

const data: CruisePageData = {
  eyebrow:     'Special Event · Valentine\'s Day',
  title:       'Valentine\'s',
  titleAccent: 'Cruise 2026',
  heroImage:   'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=2000&q=85',
  heroStats: [
    { label: 'Date',     value: '14 Feb 2026' },
    { label: '2 Tickets', value: '$269' },
    { label: 'Departs',  value: '6:00 PM' },
  ],
  description: [
    'Give the gift of an evening they will never forget. Step aboard the Sun Goddess superyacht as the sun dissolves into the Broadwater, and spend two and a half golden hours adrift in absolute luxury.',
    'From the welcome champagne to the gourmet multi-course dinner and complimentary photography, every detail is prepared so you can focus entirely on the person beside you.',
  ],
  overviewImage: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&q=80',
  inclusions: [
    { title: 'Champagne on Arrival',    detail: 'Sparkling wine or premium beer to begin the evening as you board.' },
    { title: 'Multi-Course Dinner',     detail: 'Gourmet canapés followed by a carefully crafted multi-course dining experience.' },
    { title: 'Professional Photography', detail: 'Complimentary photography on boarding to capture the occasion.' },
    { title: 'Full Bar Service',        detail: 'Fully stocked bar with cocktails, wine, beer, and spirits all evening.' },
    { title: 'Sunset Views',            detail: 'Dine under the golden-hour sky with 360° views of the Broadwater.' },
    { title: 'Premium Crew Service',    detail: 'Dedicated crew providing attentive, unhurried service throughout.' },
  ],
  schedule: [
    { label: 'Boarding',  time: '5:30 PM' },
    { label: 'Departure', time: '6:00 PM' },
    { label: 'Return',    time: '8:00 PM' },
  ],
  dates:    'Saturday, 14 February 2026',
  location: 'Muriel Henchman Public Pontoon\nSeaworld Drive, Main Beach QLD 4217',
  vessel:   'Sun Goddess — 34m superyacht',
  pricing: [
    { label: '2 Tickets', price: '$269', note: '$134.50 per person · all inclusive' },
  ],
  bookingUrl: 'https://boattimeyachtcharters.rezdy.com/',
};

export default function Page() {
  return <CruisePage {...data} />;
}
