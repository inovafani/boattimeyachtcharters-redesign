import type { Metadata } from 'next';
import CruisePage, { type CruisePageData } from '@/components/CruisePage';

export const metadata: Metadata = {
  title: 'Luxury Whale Watching Gold Coast — Boattime Yacht Charters',
  description:
    'Board the Sun Goddess superyacht for an extraordinary encounter with humpback whales. June–November, Gold Coast.',
};

const data: CruisePageData = {
  eyebrow:      'Cruise Tickets · Whale Watching',
  title:        'Luxury Whale Watching',
  titleAccent:  'Gold Coast',
  heroImage:    'https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?w=2000&q=85',
  heroStats: [
    { label: 'Duration',  value: '2.5 hours' },
    { label: 'From',      value: '$74.50 pp' },
    { label: 'Departs',   value: '9:00 AM' },
  ],
  description: [
    'Board the Sun Goddess superyacht for an extraordinary encounter with humpback whales in their natural habitat. From June through November, the waters off the Gold Coast become a stage for one of nature\'s most breathtaking spectacles.',
    'Our expert crew provides live marine commentary throughout the voyage, bringing you closer to these magnificent creatures while ensuring their comfort and safety. With 360° rotating viewing decks, every passenger has a front-row seat to moments they will never forget.',
  ],
  overviewImage: 'https://images.unsplash.com/photo-1568430462989-44163eb1752f?w=800&q=80',
  inclusions: [
    { title: 'Sun Goddess Superyacht',  detail: '135-passenger luxury vessel with multiple viewing decks and full onboard amenities.' },
    { title: 'Marine Commentary',       detail: 'World-class crew delivering live education and whale behaviour insights throughout.' },
    { title: 'Licensed Bar',            detail: 'Fully licensed bar open throughout the voyage plus complimentary tea and coffee.' },
    { title: 'Whale Guarantee',         detail: 'If no whales are sighted, receive a complimentary return ticket for a future cruise.' },
    { title: 'Light Snacks',            detail: 'Selection of nibbles and snacks available on board throughout the voyage.' },
    { title: '360° Viewing Decks',      detail: 'Multiple open-air decks with unobstructed ocean views in every direction.' },
  ],
  schedule: [
    { label: 'Boarding — Morning',   time: '8:30 AM' },
    { label: 'Departure',            time: '9:00 AM' },
    { label: 'Return',               time: '11:30 AM' },
  ],
  dates:        'June – November · 7 days a week\nAfternoon session departs 1:30 PM',
  location:     'Muriel Henchman Public Pontoon\nSeaworld Drive, Main Beach, Gold Coast',
  vessel:       'Sun Goddess — 34m superyacht · up to 135 guests',
  availability: 'Morning & afternoon sessions available daily',
  pricing: [
    { label: '2 Tickets',    price: '$149',    note: '$74.50 per person' },
    { label: '1 Adult',      price: '$85',     note: 'Single ticket' },
    { label: 'Gift Voucher', price: 'From $85', note: 'Never expires' },
  ],
  bookingUrl: 'https://boattimeyachtcharters.rezdy.com/',
};

export default function Page() {
  return <CruisePage {...data} />;
}
