-- Draft article for the Boattime posts table.
-- Generated from getting-to-marine-stadium-jetty-a-departure-day-guide.md by build_sql.py. content is HTML, which is what
-- the article page renders. published = false: nothing goes live until
-- someone ticks Published in /admin.
-- Safe to run twice: on conflict (slug) do nothing.

insert into posts (
  slug,
  title,
  meta_title,
  meta_description,
  focus_keyword,
  excerpt,
  author,
  reading_time,
  published,
  image_url,
  image_alt,
  canonical_url,
  content,
  categories,
  tags,
  schema_types
) values (
  'getting-to-marine-stadium-jetty-a-departure-day-guide',
  'Getting to Marine Stadium Jetty: A Departure-Day Guide',
  'Getting to Marine Stadium Jetty, Main Beach: A Guide',
  'Where Marine Stadium Jetty & Pontoon is, how to get there, where to park, when to arrive and what to bring on the day. A plain guide for guests boarding at Main Beach.',
  'marine stadium jetty main beach',
  'Where the pontoon is, how to get there, where to park and when to arrive. Everything to sort before you step on board at Main Beach.',
  'Boattime Yacht Charters',
  4,
  false,
  '/sun-goddess-main.jpeg',
  'Sun Goddess, a 114 ft superyacht, on the Gold Coast Broadwater',
  'https://www.boattimeyachtcharters.com/boattime-news/getting-to-marine-stadium-jetty-a-departure-day-guide',
  '<p>Most of what can go wrong on the day of a cruise happens before anyone steps on board: a wrong turn, a full car park, a guest who thought the boat left at half past. This guide covers the part on land, so the part on the water starts on time.</p><p>Every Boat Time sailing leaves from the same place. Guests on the <a href="/luxury-broadwater-cruise">Luxury Scenic Sunset Cruise</a> and groups on a <a href="/private-yacht-charter">private yacht charter</a> both board at Marine Stadium Jetty &amp; Pontoon.</p><h2>Where the pontoon is</h2><p>Marine Stadium Jetty &amp; Pontoon is at Doug Jennings Park, Main Beach, on the Gold Coast. It sits on the Broadwater side of Main Beach, near the Spit, rather than on the surf beach.</p><p>From the main centres it is a short drive:</p><ul><li><p>About 10 minutes from Surfers Paradise</p></li><li><p>About 15 minutes from Broadbeach</p></li></ul><p>When you put it into a map app, search for Doug Jennings Park as well as the jetty name, and check the pin lands at the park before you set off.</p><h2>Getting there</h2><p><strong>By car.</strong> There is free parking at the pontoon. Check the signs when you park. If you plan to leave the car overnight, for example after an evening event, street parking is the safer choice so the car is not towed.</p><p><strong>By maxi taxi.</strong> For groups this is the most popular option and usually the most cost effective. It also means nobody has to drive home after a celebration. Book the return ahead for the time the boat comes back, because a group waiting at a park after dark is the one part of the night that is easy to avoid.</p><p><strong>For a large group.</strong> If you are organising a charter, send every guest the same three things: the jetty name, "Doug Jennings Park, Main Beach", and the boarding time. One clear message saves a dozen phone calls on the day.</p><h2>When to arrive</h2><p>Arrive before boarding opens, not at departure time. A boat leaves on schedule, and the pontoon is the one place where five minutes late means watching it go.</p><p>For the sunset cruise, departure is at 5pm, and boarding opens half an hour earlier. For a charter, your boarding time is set when you book. Either way, check the time on your confirmation the day before, and allow extra time if you are bringing children or a big group.</p><h2>What to bring</h2><ul><li><p>Your booking confirmation, on your phone is fine</p></li><li><p>A layer for the evening, because it is cooler on the water once the sun goes down</p></li><li><p>Flat or low shoes: boarding is a step up from the pontoon and the decks move</p></li><li><p>Sunscreen and a hat for a daytime charter</p></li><li><p>Any motion sickness tablet, taken at least 30 minutes before departure if you are prone to it</p></li></ul><p>Food and drink are served on board by Boat Time''s catering partners and the two bars on each vessel. If you are planning anything of your own, such as a cake for a celebration, ask when you book.</p><h2>Access and mobility</h2><p>The boats are not currently wheelchair accessible. Boarding requires a step up from the marina pontoon, and space on board can be limited. If a guest has limited mobility, talk to the team before you book so you can plan together.</p><h2>Questions guests ask</h2><h3>Where do Boat Time cruises leave from?</h3><p>From Marine Stadium Jetty &amp; Pontoon at Doug Jennings Park, Main Beach, Gold Coast. Every sailing, cruise or charter, boards there.</p><h3>Is there parking at Marine Stadium Jetty?</h3><p>Yes, there is free parking at the pontoon. Check the signs when you park, and use street parking if you will leave the car overnight.</p><h3>How early should we arrive?</h3><p>Before boarding opens. For the sunset cruise, boarding opens at 4:30pm for a 5pm departure. For a charter, use the boarding time on your confirmation.</p><h3>What happens if the weather turns?</h3><p>Cruises run in all weather unless conditions are unsafe. Both vessels have covered decks and indoor space, so a passing shower does not end the outing.</p><h2>Ready to book</h2><p>For a seat on a scheduled evening sailing, choose a date for the <a href="/luxury-broadwater-cruise">Luxury Scenic Sunset Cruise</a>. For a group occasion where the whole boat is yours, send the date, the guest count and the occasion through the <a href="/private-yacht-charter">private yacht charter</a> page, or the <a href="/corporate-yacht-charter">corporate yacht charter</a> page for a work event.</p>',
  ARRAY['Planning']::text[],
  ARRAY['main beach', 'marine stadium', 'getting there', 'parking', 'what to bring', 'gold coast']::text[],
  ARRAY['Article', 'FAQPage']::text[]
)
on conflict (slug) do nothing;
