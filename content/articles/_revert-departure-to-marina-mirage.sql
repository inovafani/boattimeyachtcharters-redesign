-- Departure point back to Marina Mirage Seaworld Drive, Main Beach (24 Nov 2026).
-- Run once in Supabase → SQL Editor. Safe to run twice: the second run finds nothing to change.
--
-- 1. Hides the article written entirely about Marine Stadium Jetty. Nothing is deleted;
--    tick Published in /admin again once it has been rewritten for Marina Mirage.
-- 2. In every other post, replaces the old name with the new one. The first pattern catches
--    the long forms ("... at Doug Jennings Park, Main Beach", "... at Main Beach"),
--    the second catches the bare name. Line breaks and "&" / "&amp;" are both handled.
-- 3. Generic "the pontoon" / "a pontoon" / "the jetty" / "marina pontoon" become "the marina" / "marina",
--    so no article still sends guests to a pontoon or jetty.

begin;

update posts
set published = false
where slug = 'getting-to-marine-stadium-jetty-a-departure-day-guide';

update posts
set
  content = regexp_replace(regexp_replace(content,
    'Marine Stadium Jetty\s+(&amp;|&)\s+Pontoon(\s+at\s+Doug\s+Jennings\s+Park,|,\s+Doug\s+Jennings\s+Park,|\s+at)?(\s+)Main(\s+)Beach',
    'Marina Mirage Seaworld Drive,\3Main\4Beach', 'g'),
    'Marine Stadium Jetty\s+(&amp;|&)\s+Pontoon', 'Marina Mirage Seaworld Drive', 'g'),
  excerpt = regexp_replace(excerpt, 'Marine Stadium Jetty\s+(&amp;|&)\s+Pontoon', 'Marina Mirage Seaworld Drive', 'g'),
  meta_description = regexp_replace(meta_description, 'Marine Stadium Jetty\s+(&amp;|&)\s+Pontoon', 'Marina Mirage Seaworld Drive', 'g')
where slug <> 'getting-to-marine-stadium-jetty-a-departure-day-guide'
  and (content ~ 'Marine Stadium' or excerpt ~ 'Marine Stadium' or meta_description ~ 'Marine Stadium');

update posts
set
  content = regexp_replace(regexp_replace(regexp_replace(content,
    'marina pontoon', 'marina', 'g'),
    '\m(the|a) pontoon\M', 'the marina', 'g'),
    '\mthe jetty\M', 'the marina', 'g'),
  excerpt = regexp_replace(excerpt, '\m(the|a) pontoon\M', 'the marina', 'g'),
  meta_description = regexp_replace(meta_description, '\m(the|a) pontoon\M', 'the marina', 'g')
where slug <> 'getting-to-marine-stadium-jetty-a-departure-day-guide'
  and (content ~* 'pontoon|jetty' or excerpt ~* 'pontoon' or meta_description ~* 'pontoon');

-- Should list only the hidden article. Any other row means a phrasing the patterns missed.
select slug, published from posts
where content ~* 'Marine Stadium|Doug Jennings|Muriel Henchman|pontoon|jetty'
   or excerpt ~* 'Marine Stadium|pontoon|jetty'
   or meta_description ~* 'Marine Stadium|pontoon|jetty';

commit;
