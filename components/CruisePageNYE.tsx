'use client';

import Script from 'next/script';
import Nav from './Nav';
import Footer from './Footer';
import {
  CruiseHero, CruiseEventBanner, CruiseOverview,
  CruiseFoodMenu, CruiseInclusions,
  CruiseScheduleDetails, CruisePricingCards,
} from './CruiseSections';

export default function NyePage() {
  return (
    <>
      <Script
        src="https://boattimeyachtcharters.rezdy.com/pluginJs"
        strategy="lazyOnload"
      />

      <Nav />
      <main>
        <CruiseHero
          eyebrow="Special Event · New Year's Eve"
          title="New Year's Eve"
          titleAccent="on the Broadwater"
          image="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=2000&q=85"
          stats={[
            { label: 'Date',       value: '31 Dec 2025' },
            { label: 'Per Person', value: '$169' },
            { label: 'Departs',   value: '9:30 PM' },
            { label: 'Event',     value: '18+ Only' },
          ]}
          bookingUrl="#book"
        />

        <CruiseEventBanner
          date="31 December 2025"
          vessel="Mermaid Spirit — Tri-deck Catamaran"
          tagline="Three decks · Dual bars · State-of-the-art sound"
          adultsOnly
          urgency="Limited tickets — sells out every year"
        />

        <CruiseOverview
          title="New Year's Eve"
          titleAccent="on the Broadwater"
          description={[
            'Welcome 2026 in unforgettable style aboard the Mermaid Spirit tri-deck catamaran. As the clock strikes midnight, the Gold Coast Broadwater becomes a canvas of light and colour — and you\'ll have the finest seat in the house.',
            'Three spacious decks, dual bars, state-of-the-art sound, and a curated menu of gourmet canapés. This is the New Year\'s Eve that every other will be measured against.',
          ]}
          image="https://images.unsplash.com/photo-1513151233558-d860c5398176?w=800&q=80"
        />

        <CruiseFoodMenu
          title="8 Gourmet Canapés"
          titleAccent="Included"
          sections={[
            {
              heading: 'Savoury',
              items: [
                'Smoked salmon blini with crème fraîche',
                'Beef tenderloin crostini with truffle butter',
                'Prawn cocktail with house aioli',
                'Wild mushroom & gruyère tartlet',
              ],
            },
            {
              heading: 'Light Bites',
              items: [
                'Caprese skewer with aged balsamic',
                'Chicken satay with peanut dipping sauce',
                'Fig & brie crostini with honey',
                'Vegetarian spring rolls (GF available)',
              ],
            },
          ]}
        />

        <CruiseInclusions
          items={[
            { title: 'Welcome Champagne',  detail: 'A glass of champagne, wine, or premium beer the moment you step aboard.' },
            { title: '8 Gourmet Canapés',  detail: 'Curated canapé selection — vegetarian, gluten-free, and dairy-free options available.' },
            { title: 'Tri-Deck Catamaran', detail: 'Mermaid Spirit — three spacious decks, dual bars, and premium sound throughout.' },
            { title: 'Fireworks Views',    detail: 'Premium on-water vantage for the city fireworks display at midnight.' },
            { title: 'Dual Bar Service',   detail: 'Two fully licensed bars serving premium drinks throughout the evening.' },
            { title: '18+ Only Event',     detail: 'An adults-only celebration designed for an elevated New Year\'s experience.' },
          ]}
        />

        <CruiseScheduleDetails
          schedule={[
            { label: 'Boarding Opens',     time: '9:00 PM' },
            { label: 'Departure',          time: '9:30 PM' },
            { label: 'Midnight Countdown', time: '12:00 AM' },
            { label: 'Return',             time: '1:30 AM' },
          ]}
          dates="Tuesday, 31 December 2025&#10;18+ only event"
          location="Marina Muriel Henchman Public Pontoon&#10;Gold Coast Broadwater"
          vessel="Mermaid Spirit — 30m tri-deck catamaran"
          availability="Limited tickets — sells out every year"
        />

        <CruisePricingCards
          pricing={[
            { label: 'Per Person', price: '$169', note: 'Includes champagne & 8 gourmet canapés' },
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
                Book Your Tickets
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
                Tuesday, 31 December 2025. Limited tickets — this event sells out every year.
                Instant confirmation on booking.
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
                src="https://boattimeyachtcharters.rezdy.com/668818/zzz-new-years-eve-2026?iframe=true"
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
