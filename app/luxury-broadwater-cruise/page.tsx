import type { Metadata } from 'next';
import CruisePage, { type CruisePageData } from '@/components/CruisePage';

export const metadata: Metadata = {
  title: 'Luxury Broadwater Sunset Cruise Gold Coast — Boattime Yacht Charters',
  description:
    'A magical 2-hour evening journey through the Gold Coast Broadwater aboard Sun Goddess. Sunsets, dolphins, and sparkling on arrival.',
};

const data: CruisePageData = {
  eyebrow:     'Cruise Tickets · Sunset Cruise',
  title:       'Broadwater',
  titleAccent: 'Sunset Cruise',
  heroImage:   'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=2000&q=85',
  heroStats: [
    { label: 'Duration', value: '2 hours' },
    { label: 'From',     value: '$64.50 pp' },
    { label: 'Departs',  value: '5:00 PM' },
  ],
  description: [
    'Step aboard the Sun Goddess as the Gold Coast sky turns gold. Over two unhurried hours you\'ll drift through the shimmering Broadwater, watching the city skyline glow and the horizon catch fire — all from the comfort of a 34-metre luxury superyacht.',
    'Keep an eye out for dolphins and turtles playing alongside the hull. A share plate and your first glass arrive as soon as you\'re settled. There is no better way to end a Gold Coast day.',
  ],
  overviewImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
  inclusions: [
    { title: 'Sparkling on Arrival',  detail: 'One complimentary glass of sparkling wine or premium beer as you board.' },
    { title: 'Nibbles Share Plate',   detail: 'A curated share plate for two served during the cruise.' },
    { title: 'Sunset Views',          detail: 'Watch the sun set over the Gold Coast skyline from the open deck.' },
    { title: 'Wildlife Spotting',     detail: 'Regular dolphin and turtle sightings in the Broadwater waters.' },
    { title: 'Light Commentary',      detail: 'Gentle commentary about the Broadwater, its wildlife, and surrounds.' },
    { title: 'Licensed Bar',          detail: 'Fully stocked bar serving wine, beer, spirits, and soft drinks throughout.' },
  ],
  schedule: [
    { label: 'Boarding',  time: '4:30 PM' },
    { label: 'Departure', time: '5:00 PM' },
    { label: 'Return',    time: '7:00 PM' },
  ],
  dates:    'Fridays, Saturdays & Sundays year-round',
  location: 'Muriel Henchman Public Pontoon\nSeaworld Drive, Main Beach, Gold Coast',
  vessel:   'Sun Goddess — 34m superyacht · up to 100 guests',
  pricing: [
    { label: '1 Adult',       price: '$79',  note: 'Single ticket' },
    { label: '2 Adults',      price: '$129', note: '$64.50 each' },
    { label: '4 Adults',      price: '$229', note: '$57.25 each' },
    { label: 'Child (3–13)',  price: '$59',  note: 'Per child' },
  ],
  bookingUrl: 'https://boattimeyachtcharters.rezdy.com/',
};

export default function Page() {
  return <CruisePage {...data} />;
}
