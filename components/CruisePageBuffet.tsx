'use client';

import Nav from './Nav';
import Footer from './Footer';
import {
  CruiseHero, CruiseOverview, CruiseFoodMenu,
  CruiseChefSection, CruiseInclusions, CruiseFamilyCallout,
  CruiseScheduleDetails, CruisePricingCards, CruiseBookingCTA,
} from './CruiseSections';

const BOOKING = 'https://boattimeyachtcharters.rezdy.com/';

export default function BuffetPage() {
  return (
    <>
      <Nav />
      <main>
        <CruiseHero
          eyebrow="Cruise Tickets · Dinner Cruise"
          title="Sunset Twilight Buffet"
          titleAccent="Flavours of Australia"
          image="https://images.unsplash.com/photo-1559339352-11d035aa65de?w=2000&q=85"
          stats={[
            { label: 'Duration',    value: '2.5 hours' },
            { label: 'Adults from', value: '$99' },
            { label: 'Departs',     value: '5:30 PM' },
            { label: 'Days',        value: 'Fri Sat Sun' },
          ]}
          bookingUrl={BOOKING}
        />

        <CruiseOverview
          title="Sunset Twilight Buffet"
          titleAccent="Flavours of Australia"
          description={[
            'As the sun melts into the Gold Coast horizon, the Mermaid Spirit becomes your private dining room on the water. The Sunset Twilight Buffet combines the finest Australian produce, golden-hour views, and effortless Broadwater cruising.',
            'From chilled Queensland prawns to Bangalow pork belly, every dish reflects the natural abundance of the region. Arrive for drinks, drift through the golden hour, and disembark with memories that linger.',
          ]}
          image="https://images.unsplash.com/photo-1534080564583-6be75777b70a?w=800&q=80"
        />

        {/* Menu takes precedence here — it's the central selling point */}
        <CruiseFoodMenu
          title="The Buffet Menu"
          titleAccent="Flavours of Australia"
          sections={[
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
          ]}
        />

        {/* Chef profile follows the menu reveal */}
        <CruiseChefSection
          name="Executive Chef Brendan Ward"
          role="Head of Culinary · Boattime Yacht Charters"
          bio="Chef Brendan Ward's Flavours of Australia menu is built around a simple belief: Queensland's best ingredients, handled with care, need little else. His sunset buffet has become a Gold Coast institution — the evening meal that locals recommend to every visitor."
          image="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=600&q=80"
        />

        <CruiseInclusions
          items={[
            { title: 'Three-Course Buffet',   detail: 'Full Australian-inspired buffet — cold starters through warm mains to dessert.' },
            { title: 'Mermaid Spirit',        detail: '30m tri-deck catamaran with comfortable indoor and open-air outdoor seating.' },
            { title: 'Golden Hour Views',     detail: 'Watch the sunset unfold across the Broadwater from the open deck.' },
            { title: 'Wildlife Spotting',     detail: 'Dolphins and turtles are regular companions on this evening route.' },
            { title: 'Beverage Service',      detail: 'Full drinks service including licensed bar available throughout.' },
            { title: 'Family-Friendly',       detail: 'Children\'s menu options and family package pricing available.' },
          ]}
        />

        <CruiseFamilyCallout bookingUrl={BOOKING} />

        <CruiseScheduleDetails
          schedule={[
            { label: 'Boarding',  time: '5:00 PM' },
            { label: 'Departure', time: '5:30 PM' },
            { label: 'Return',    time: '7:30 PM' },
          ]}
          dates="Fridays, Saturdays & Sundays year-round"
          location="Muriel Henchman Public Pontoon&#10;Main Beach, Gold Coast"
          vessel="Mermaid Spirit — 30m tri-deck catamaran"
        />

        <CruisePricingCards
          pricing={[
            { label: 'Adult',        price: '$99',  note: 'Per person' },
            { label: 'Child (3–13)', price: '$79',  note: 'Per child' },
            { label: 'Family',       price: '$349', note: '2 adults + 2 children' },
          ]}
          bookingUrl={BOOKING}
        />

        <CruiseBookingCTA bookingUrl={BOOKING} />
      </main>
      <Footer />
    </>
  );
}
