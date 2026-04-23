import type { Metadata } from 'next';
import CruisePage, { type CruisePageData } from '@/components/CruisePage';

export const metadata: Metadata = {
  title: 'Sunset Twilight Buffet — Flavours of Australia · Boattime Yacht Charters',
  description:
    'A 2.5-hour sunset buffet dinner aboard Mermaid Spirit on the Gold Coast Broadwater. Australian cuisine, golden-hour views, family-friendly.',
};

const data: CruisePageData = {
  eyebrow:     'Cruise Tickets · Dinner Cruise',
  title:       'Sunset Twilight Buffet',
  titleAccent: 'Flavours of Australia',
  heroImage:   'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=2000&q=85',
  heroStats: [
    { label: 'Duration',   value: '2.5 hours' },
    { label: 'Adults from', value: '$99' },
    { label: 'Departs',    value: '5:30 PM' },
  ],
  description: [
    'As the sun melts into the Gold Coast horizon, the Mermaid Spirit becomes your private dining room on the water. The Sunset Twilight Buffet combines the finest Australian produce, golden-hour views, and effortless Broadwater cruising.',
    'From chilled Queensland prawns to Bangalow pork belly, every dish reflects the natural abundance of the region. Arrive for drinks, drift through the golden hour, and disembark with the kind of memories that linger.',
  ],
  overviewImage: 'https://images.unsplash.com/photo-1534080564583-6be75777b70a?w=800&q=80',
  inclusions: [
    { title: 'Three-Course Buffet',   detail: 'Full Australian-inspired buffet — cold starters through warm mains to dessert.' },
    { title: 'Mermaid Spirit',        detail: '30m tri-deck catamaran with comfortable indoor and open-air outdoor seating.' },
    { title: 'Golden Hour Views',     detail: 'Watch the sunset unfold across the Broadwater from the open deck.' },
    { title: 'Wildlife Spotting',     detail: 'Dolphins and turtles are regular companions on this evening route.' },
    { title: 'Beverage Service',      detail: 'Full drinks service including licensed bar available throughout the cruise.' },
    { title: 'Family-Friendly',       detail: 'Children\'s menu options and family package pricing available.' },
  ],
  schedule: [
    { label: 'Boarding',  time: '5:00 PM' },
    { label: 'Departure', time: '5:30 PM' },
    { label: 'Return',    time: '7:30 PM' },
  ],
  dates:    'Fridays, Saturdays & Sundays year-round',
  location: 'Muriel Henchman Public Pontoon\nMain Beach, Gold Coast',
  vessel:   'Mermaid Spirit — 30m tri-deck catamaran',
  pricing: [
    { label: 'Adult',         price: '$99',  note: 'Per person' },
    { label: 'Child (3–13)',  price: '$79',  note: 'Per child' },
    { label: 'Family',        price: '$349', note: '2 adults + 2 children' },
  ],
  menu: [
    {
      heading: 'Cold Starters',
      items: [
        'Chilled NZ green lip mussels',
        'Queensland king prawns',
        'Cold cuts selection',
      ],
    },
    {
      heading: 'Warm Mains',
      items: [
        'Bangalow pork belly',
        'Lemon-thyme chicken breast',
        'Penne pesto pasta (vegetarian)',
      ],
    },
    {
      heading: 'Sides & Dessert',
      items: [
        'Potato salad',
        'Tropical coleslaw',
        'Green leaf salad with warm bread rolls & butter',
        'Selection of desserts',
      ],
    },
  ],
  bookingUrl: 'https://boattimeyachtcharters.rezdy.com/',
};

export default function Page() {
  return <CruisePage {...data} />;
}
