export interface Product {
  id: string;
  label: string;
  sub: string;
  href: string;
}

export const PRODUCTS: Product[] = [
  { id: 'whale-watching',    label: 'Gold Coast Whale Escape',     sub: 'Luxury Whale Watching',    href: '/cruise-tickets-luxury-whale-watching' },
  { id: 'twilight-dining',   label: 'Broadwater Twilight Dining',  sub: 'Buffet Dinner Cruise',     href: '/sunset-twilight-buffet-flavours-of-australia-aboard-the-mermaid-spirit' },
  { id: 'helitours',         label: 'Gold Coast Helitours',        sub: 'Sky to Sea Partnership',   href: '/humpbackhelitours' },
  { id: 'private-charter',   label: 'Private Yacht Charter',       sub: 'Tailored experiences',     href: '/private-yacht-charter' },
  { id: 'corporate-charter', label: 'Corporate Charter',           sub: 'Team & client events',     href: '/corporate-yacht-charter' },
  { id: 'wedding-charter',   label: 'Wedding Yacht Charter',       sub: 'Celebrate in style',       href: '/wedding-yacht-charter' },
  { id: 'catering',          label: 'Catering & Menus',            sub: 'Menus & packages',         href: '/yacht-charter-menus' },
];
