/**
 * FAQs for the Gold Coast sunset cruise.
 *
 * Every answer restates a fact already published on
 * `/luxury-broadwater-cruise` — the schedule block, the pricing table, the
 * inclusions list, the vessel copy and the booking terms. Nothing here is new
 * marketing copy, so the page and its FAQPage schema can never disagree.
 *
 * Kept out of the page component because that file is `'use client'`, and a
 * client module's exports arrive at the server as references, not arrays.
 */
export const SUNSET_FAQS = [
  {
    q: 'What time does the Gold Coast sunset cruise depart?',
    a: 'Boarding opens at 4:30 PM, the Sun Goddess departs at 5:00 PM and returns at 7:00 PM. The cruise runs Fridays, Saturdays and Sundays only.',
  },
  {
    q: 'How long is the sunset cruise?',
    a: 'Two hours on the water, from a 5:00 PM departure to a 7:00 PM return.',
  },
  {
    q: 'Where does the sunset cruise depart from?',
    a: 'Marine Stadium Jetty & Pontoon, Main Beach on the Gold Coast. It is a return trip, setting out past the Main Beach Spit.',
  },
  {
    q: 'How much is a Gold Coast sunset cruise?',
    a: 'One adult is $79. Two adults are $129, which works out at $64.50 per person, and four adults are $229, or $57.25 per person. Children aged 3 to 13 are $59.',
  },
  {
    q: 'What is included in the sunset cruise?',
    a: 'The sunset tour itself, light commentary of the surrounds, drinks service and a nibbles share plate for two. Cocktails, snacks, an on-board photo opportunity and a sparkling or beer on arrival are available as extras.',
  },
  {
    q: 'Which yacht is used for the sunset cruise?',
    a: 'The Sun Goddess, with 360-degree views across the Broadwater and the Gold Coast skyline, and room for up to 135 guests.',
  },
  {
    q: 'Can you see wildlife on the sunset cruise?',
    a: 'Marine life such as dolphins, turtles and dugongs is often about as the yacht navigates the Seaway.',
  },
  {
    q: 'Can I cancel my sunset cruise booking?',
    a: 'Yes. Booking is instantly confirmed, and you can cancel up to 24 hours before departure for a full refund.',
  },
];
