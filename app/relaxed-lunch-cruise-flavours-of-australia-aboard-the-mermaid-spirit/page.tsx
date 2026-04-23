import type { Metadata } from 'next';
import CruisePage, { type CruisePageData } from '@/components/CruisePage';

export const metadata: Metadata = {
  title: 'Relaxed Lunch Cruise — Flavours of Australia · Boattime Yacht Charters',
  description:
    'A leisurely 2-hour lunch cruise through the Gold Coast Broadwater aboard Mermaid Spirit. Australian produce, 360° views, family-friendly.',
};

const data: CruisePageData = {
  eyebrow:     'Cruise Tickets · Lunch Cruise',
  title:       'Relaxed Lunch Cruise',
  titleAccent: 'Flavours of Australia',
  heroImage:   'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=2000&q=85',
  heroStats: [
    { label: 'Duration', value: '2 hours' },
    { label: 'Adults from', value: '$99' },
    { label: 'Departs',   value: '12:00 PM' },
  ],
  description: [
    'A leisurely afternoon aboard the Mermaid Spirit, drifting through the golden waterways of the Gold Coast Broadwater. Australian produce, prepared with care, served with genuine warmth.',
    'Perfect for families, friends, or a relaxed midday escape. Spot dolphins, enjoy 360° panoramic views, and let a beautiful Broadwater afternoon do what it does best.',
  ],
  overviewImage: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80',
  inclusions: [
    { title: 'Multi-Course Lunch',    detail: 'Full Australian-inspired lunch — cold starters through warm mains to dessert.' },
    { title: 'Mermaid Spirit',        detail: 'Spacious tri-deck catamaran with comfortable indoor and open-air outdoor seating.' },
    { title: '360° Broadwater Views', detail: 'Scenic cruise through the heart of the Gold Coast Broadwater.' },
    { title: 'Wildlife Spotting',     detail: 'Dolphins and turtles are regular companions on the Broadwater route.' },
    { title: 'Beverage Service',      detail: 'Full drinks service including bar options available throughout the cruise.' },
    { title: 'Family-Friendly',       detail: 'Children\'s menu and family package pricing — perfect for all ages.' },
  ],
  schedule: [
    { label: 'Boarding',  time: '11:30 AM' },
    { label: 'Departure', time: '12:00 PM' },
    { label: 'Return',    time: '2:00 PM' },
  ],
  dates:    'Fridays, Saturdays & Sundays year-round',
  location: 'Muriel Henchman Public Pontoon\nSeaworld Drive, Main Beach, Gold Coast',
  vessel:   'Mermaid Spirit — 30m tri-deck catamaran',
  pricing: [
    { label: 'Adult',         price: '$99',  note: 'Per person' },
    { label: 'Child (3–12)',  price: '$79',  note: 'Per child' },
    { label: 'Family',        price: '$349', note: '2 adults + 2 children' },
  ],
  menu: [
    {
      heading: 'Cold Starters',
      items: [
        'Chilled NZ green lip mussels',
        'Queensland king prawns',
        'Cold cuts & artisan bread selection',
      ],
    },
    {
      heading: 'Warm Mains',
      items: [
        'Bangalow pork belly',
        'Lemon-thyme chicken breast',
        'Penne pasta (children\'s · vegetarian)',
      ],
    },
    {
      heading: 'Sides & Dessert',
      items: [
        'Potato salad',
        'Tropical coleslaw',
        'Green leaf salad',
        'Selection of desserts',
      ],
    },
  ],
  bookingUrl: 'https://boattimeyachtcharters.rezdy.com/',
};

export default function Page() {
  return <CruisePage {...data} />;
}
