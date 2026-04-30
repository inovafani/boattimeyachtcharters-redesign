'use client';

import Script from 'next/script';
import Nav from './Nav';
import Footer from './Footer';
import {
  CruiseHero, CruiseOverview, CruiseChefSection,
  CruiseFoodMenu, CruiseInclusions, CruiseFamilyCallout,
  CruiseScheduleDetails, CruisePricingCards,
} from './CruiseSections';

export default function LunchPage() {
  return (
    <>
      <Script
        src="https://boattimeyachtcharters.rezdy.com/pluginJs"
        strategy="lazyOnload"
      />

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
          bookingUrl="#book"
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

        <CruiseChefSection
          name="Executive Chef Brendan Ward"
          role="Head of Culinary · Boattime Yacht Charters"
          bio="Chef Brendan Ward brings over fifteen years of fine-dining experience to the Mermaid Spirit's galley. His Flavours of Australia menu celebrates the finest Queensland produce — from Broadwater prawns to Bangalow pork — prepared simply and served with pride."
          image="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=600&q=80"
        />

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

        <CruiseFamilyCallout bookingUrl="#book" />

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
          bookingUrl="#book"
        />

        {/* ── Inline booking widget ── */}
        <section
          id="book"
          style={{
            background: 'var(--navy-mid)',
            borderTop: '1px solid var(--border-subtle)',
            padding: '80px 48px 100px',
          }}
        >
          <div style={{ maxWidth: 1000, margin: '0 auto' }}>
            <div style={{ marginBottom: 48, textAlign: 'center' }}>
              <div className="section-eyebrow" style={{ justifyContent: 'center' }}>
                Book Your Session
              </div>
              <h2
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 300,
                  fontSize: 'clamp(36px, 5vw, 60px)',
                  lineHeight: 1.0,
                  letterSpacing: '-0.02em',
                  color: 'var(--cream)',
                  marginBottom: 16,
                }}
              >
                Reserve your <em style={{ fontStyle: 'italic', color: 'var(--gold-light)' }}>spot</em>.
              </h2>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 15,
                  color: 'var(--text-muted)',
                  lineHeight: 1.75,
                  maxWidth: 520,
                  margin: '0 auto',
                }}
              >
                Fridays, Saturdays, and Sundays at noon year-round.
                Instant confirmation — cancel up to 24 hours before for a full refund.
              </p>
            </div>

            <div
              style={{
                border: '1px solid var(--border-subtle)',
                background: 'rgba(255,255,255,0.02)',
              }}
            >
              <iframe
                seamless
                width="100%"
                height="1000px"
                frameBorder="0"
                className="rezdy"
                src="https://boattimeyachtcharters.rezdy.com/730190/relaxed-lunch-cruise-flavors-of-australia-aboard-the-mermaid-spirit?iframe=true"
                style={{ display: 'block' }}
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
