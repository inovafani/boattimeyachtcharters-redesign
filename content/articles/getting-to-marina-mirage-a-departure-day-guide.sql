-- Draft article for the Boattime posts table.
-- Generated from getting-to-marina-mirage-a-departure-day-guide.md by build_sql.py. content is HTML, which is what
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
  'getting-to-marina-mirage-a-departure-day-guide',
  'Getting to Marina Mirage: A Departure-Day Guide',
  'Getting to Marina Mirage, Main Beach: A Boarding Guide',
  'Where to board at Marina Mirage on Seaworld Drive, how to get there, where to park, when to arrive and what to bring. A plain guide for guests boarding at Main Beach.',
  'marina mirage main beach',
  'Where to board, how to get there, where to park and when to arrive. Everything to sort before you step on board at Main Beach.',
  'Boattime Yacht Charters',
  4,
  false,
  '/sun-goddess-main.jpeg',
  'Sun Goddess, a 114 ft superyacht, on the Gold Coast Broadwater',
  'https://www.boattimeyachtcharters.com/boattime-news/getting-to-marina-mirage-a-departure-day-guide',
  '<p>Most of what can go wrong on the day of a cruise happens before anyone steps on board: a wrong turn, a slow car park, a guest who thought the boat left at half past. This guide covers the part on land, so the part on the water starts on time.</p><p>Every Boat Time sailing leaves from the same place. Guests on the <a href="/luxury-broadwater-cruise">Luxury Scenic Sunset Cruise</a> and groups on a <a href="/private-yacht-charter">private yacht charter</a> both board at Marina Mirage on Seaworld Drive, Main Beach.</p><h2>Where to board</h2><p>Marina Mirage is at 74 Seaworld Drive, Main Beach, on the Gold Coast. It sits on the Broadwater side of Main Beach, on the road out to the Spit, rather than on the surf beach.</p><p>From the main centres it is a short drive:</p><ul><li><p>About 10 minutes from Surfers Paradise</p></li><li><p>About 15 minutes from Broadbeach</p></li></ul><p>When you put it into a map app, search for "Marina Mirage, Seaworld Drive" and check the pin lands on the Broadwater side of the road before you set off. The booking page for each cruise also carries a map of the departure point.</p><h2>Getting there</h2><p><strong>By car.</strong> There is free parking at Marina Mirage. Check the signs when you park. If you plan to leave the car overnight, for example after an evening event, street parking is the safer choice so the car is not towed.</p><p><strong>By maxi taxi.</strong> For groups this is the most popular option and usually the most cost effective. It also means nobody has to drive home after a celebration. Book the return ahead for the time the boat comes back, so the group is not left waiting at the end of the night.</p><p><strong>For a large group.</strong> If you are organising a charter, send every guest the same three things: the name "Marina Mirage", the address "74 Seaworld Drive, Main Beach", and the boarding time. One clear message saves a dozen phone calls on the day.</p><h2>A note on the precinct</h2><p>Marina Mirage is being redeveloped, so entrances, walkways and signs around the centre can change from one visit to the next. If you knew the old shopping centre, do not rely on memory. Follow the signs to the marina on the day and allow a few extra minutes to walk from the car to the boat.</p><h2>When to arrive</h2><p>Arrive before boarding opens, not at departure time. A boat leaves on schedule, and the marina is the one place where five minutes late means watching it go.</p><p>The sunset cruise sails on Saturday and Sunday evenings. Departure is at 5pm, and boarding opens half an hour earlier. For a charter, your boarding time is set when you book. Either way, check the time on your confirmation the day before, and allow extra time if you are bringing children or a big group.</p><h2>What to bring</h2><ul><li><p>Your booking confirmation, on your phone is fine</p></li><li><p>A layer for the evening, because it is cooler on the water once the sun goes down</p></li><li><p>Flat or low shoes: boarding is a step up from the marina and the decks move</p></li><li><p>Sunscreen and a hat for a daytime charter</p></li><li><p>Any motion sickness tablet, taken at least 30 minutes before departure if you are prone to it</p></li></ul><p>Food and drink are served on board by Boat Time''s catering partners and the two bars on each vessel. If you are planning anything of your own, such as a cake for a celebration, ask when you book.</p><h2>Access and mobility</h2><p>The boats are not currently wheelchair accessible. Boarding requires a step up from the marina, and space on board can be limited. If a guest has limited mobility, talk to the team before you book so you can plan together.</p><h2>Frequently asked questions</h2><h3>Where do Boat Time cruises leave from?</h3><p>From Marina Mirage on Seaworld Drive, Main Beach, Gold Coast. Every sailing, cruise or charter, boards there.</p><h3>Is there parking at Marina Mirage?</h3><p>Yes, there is free parking at Marina Mirage. Check the signs when you park, and use street parking if you will leave the car overnight.</p><h3>How early should we arrive?</h3><p>Before boarding opens. For the sunset cruise, boarding opens at 4:30pm for a 5pm departure. For a charter, use the boarding time on your confirmation.</p><h3>What happens if the weather turns?</h3><p>Cruises run in all weather unless conditions are unsafe. Both vessels have covered decks and indoor space, so a passing shower does not end the outing.</p><h2>Ready to book</h2><p>For a seat on a scheduled evening sailing, choose a date for the <a href="/luxury-broadwater-cruise">Luxury Scenic Sunset Cruise</a>. For a group occasion where the whole boat is yours, send the date, the guest count and the occasion through the <a href="/private-yacht-charter">private yacht charter</a> page, or the <a href="/corporate-yacht-charter">corporate yacht charter</a> page for a work event.</p>',
  ARRAY['Planning']::text[],
  ARRAY['main beach', 'marina mirage', 'getting there', 'parking', 'what to bring', 'gold coast']::text[],
  ARRAY['Article', 'FAQPage']::text[]
)
on conflict (slug) do nothing;
