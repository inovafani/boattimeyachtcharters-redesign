'use client';

import Nav from './Nav';
import Footer from './Footer';
import {
  CruiseHero, CruiseOverview, CruiseChefSection,
  CruiseFoodMenu, CruiseInclusions, CruiseFamilyCallout,
  CruiseScheduleDetails, CruisePricingCards, CruiseBookingCTA,
} from './CruiseSections';

const BOOKING = 'https://boattimeyachtcharters.rezdy.com/';

export default function LunchPage() {
  return (
    <>
      <Nav />
      <main>
        <CruiseHero
          eyebrow="Cruise Tickets · Lunch Cruise"
          title="Relaxed Lunch Cruise"
          titleAccent="Flavours of Australia"
          image="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=2000&q=85"
          stats={[
            { label: 'Duration',    value: '2 hours' },
            { label: 'Adults from', value: '$99' },
            { label: 'Departs',     value: '12:00 PM' },
            { label: 'Days',        value: 'Fri Sat Sun' },
          ]}
          bookingUrl={BOOKING}
        />

        <CruiseOverview
          title="Relaxed Lunch Cruise"
          titleAccent="Flavours of Australia"
          description={[
            'A leisurely afternoon aboard the Mermaid Spirit, drifting through the golden waterways of the Gold Coast Broadwater. Australian produce, prepared with care, served with genuine warmth.',
            'Perfect for families, friends, or a relaxed midday escape. Spot dolphins, enjoy 360° panoramic views, and let a beautiful Broadwater afternoon do what it does best.',
          ]}
          image="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80"
        />

        {/* Chef is a signature feature of the Flavours of Australia cruises */}
        <CruiseChefSection
          name="Executive Chef Brendan Ward"
          role="Head of Culinary · Boattime Yacht Charters"
          bio="Chef Brendan Ward brings over fifteen years of fine-dining experience to the Mermaid Spirit's galley. His Flavours of Australia menu celebrates the finest Queensland produce — from Broadwater prawns to Bangalow pork — prepared simply and served with pride."
          image="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=600&q=80"
        />

        {/* Full menu is the centrepiece of this experience */}
        <CruiseFoodMenu
          title="Today's Menu"
          titleAccent="Flavours of Australia"
          sections={[
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
          ]}
        />

        <CruiseInclusions
          items={[
            { title: 'Multi-Course Lunch',    detail: 'Full Australian-inspired lunch — cold starters through warm mains to dessert.' },
            { title: 'Mermaid Spirit',        detail: 'Spacious tri-deck catamaran with comfortable indoor and open-air seating.' },
            { title: '360° Broadwater Views', detail: 'Scenic cruise through the heart of the Gold Coast Broadwater.' },
            { title: 'Wildlife Spotting',     detail: 'Dolphins and turtles are regular companions on the Broadwater route.' },
            { title: 'Beverage Service',      detail: 'Full drinks service including bar options available throughout.' },
            { title: 'Family-Friendly',       detail: 'Children\'s menu options and family package pricing available.' },
          ]}
        />

        {/* Family pricing is a key differentiator for the lunch cruise */}
        <CruiseFamilyCallout bookingUrl={BOOKING} />

        <CruiseScheduleDetails
          schedule={[
            { label: 'Boarding',  time: '11:30 AM' },
            { label: 'Departure', time: '12:00 PM' },
            { label: 'Return',    time: '2:00 PM' },
          ]}
          dates="Fridays, Saturdays & Sundays year-round"
          location="Muriel Henchman Public Pontoon&#10;Seaworld Drive, Main Beach, Gold Coast"
          vessel="Mermaid Spirit — 30m tri-deck catamaran"
        />

        <CruisePricingCards
          pricing={[
            { label: 'Adult',        price: '$99',  note: 'Per person' },
            { label: 'Child (3–12)', price: '$79',  note: 'Per child' },
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
