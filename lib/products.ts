export interface Product {
  id: string;
  label: string;
  sub: string;
  href: string;
}

// Single source of truth for the site's product menus.
// The header dropdowns (components/Nav.tsx) and the "Related products" picker in
// the news CMS both read from these lists, so they can never drift apart.

export const EXPERIENCE_PRODUCTS: Product[] = [
  { id: 'whale-watching',    label: 'Gold Coast Whale Escape',                    sub: 'Luxury Whale Watching',   href: '/cruise-tickets-luxury-whale-watching' },
  { id: 'twilight-drift',    label: 'Twilight Drift',                             sub: 'Broadwater Sunset Tour',  href: '/luxury-broadwater-cruise' },
  { id: 'chefs-table-lunch', label: "Chef's Table – Flavours of Australia",        sub: 'Lunch Cruise',            href: '/relaxed-lunch-cruise-flavours-of-australia-aboard-the-mermaid-spirit' },
  { id: 'twilight-dining',   label: "Chef's Table Dinner – Flavours of Australia", sub: 'Dinner Cruise',           href: '/sunset-twilight-buffet-flavours-of-australia-aboard-the-mermaid-spirit' },
  { id: 'riverfire-2026',    label: 'Riverfire 2026',                             sub: 'Brisbane Event',          href: '/riverfire-2026' },
  { id: 'nye-2026',          label: "New Year's Eve 2026",                        sub: 'Celebration Cruise',      href: '/nye-2026' },
  { id: 'valentines-day',    label: "Valentine's Day",                            sub: 'Romance Evening',         href: '/valentines-day' },
  { id: 'helitours',         label: 'Gold Coast Helitours',                       sub: 'Sky to Sea Partnership',  href: '/humpbackhelitours' },
];

export const CHARTER_PRODUCTS: Product[] = [
  { id: 'private-charter',    label: 'Private Yacht Charter',        sub: 'Tailored experiences',    href: '/private-yacht-charter' },
  { id: 'corporate-charter',  label: 'Corporate Charter',            sub: 'Team & client events',    href: '/corporate-yacht-charter' },
  { id: 'wedding-charter',    label: 'Wedding Yacht Charter',        sub: 'Celebrate in style',      href: '/wedding-yacht-charter' },
  { id: 'buffet-dinner-lunch',label: 'Buffet Dinner & Lunch Cruise', sub: 'Flavours of Australia',   href: '/buffet-dinner-and-lunch-cruise' },
  { id: 'catering',           label: 'Catering & Menus',             sub: 'Menus & packages',        href: '/yacht-charter-menus' },
];

export const PRODUCTS: Product[] = [...EXPERIENCE_PRODUCTS, ...CHARTER_PRODUCTS];
