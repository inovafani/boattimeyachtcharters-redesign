'use client';

import { useRef, useState, useEffect } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { Button, Icon } from './Shared';

gsap.registerPlugin(useGSAP);

interface SubLink {
  label: string;
  href: string;
}
interface NavLinkData {
  label: string;
  href?: string;
  sub?: SubLink[];
  menu?: 'cruises' | 'charters' | 'yachts';
  alignRight?: boolean;
}

const NAV_LINKS: NavLinkData[] = [
  { label: 'Home', href: '/' },
  {
    label: 'About BoatTime',
    href: '/about-boattime',
  },
  {
    label: 'Cruise Tickets',
    href: 'https://boattimeyachtcharters.com/cruise-tickets/',
    menu: 'cruises',
    sub: [
      {
        label: 'Luxury Whale Watching',
        href: '/cruise-tickets-luxury-whale-watching',
      },
      { label: 'Broadwater Sunset Cruise', href: '/luxury-broadwater-cruise' },
      { label: 'NYE 2026', href: '/nye-2026' },
      { label: 'Luxury Valentines Cruise', href: '/valentines-day' },
      { label: 'Riverfire 2026', href: '/riverfire-2026' },
      {
        label: 'Relaxed Lunch Cruise',
        href: '/relaxed-lunch-cruise-flavours-of-australia-aboard-the-mermaid-spirit',
      },
      {
        label: 'Sunset Twilight Buffet',
        href: '/sunset-twilight-buffet-flavours-of-australia-aboard-the-mermaid-spirit',
      },
    ],
  },
  {
    label: 'Yacht Charters',
    href: 'https://boattimeyachtcharters.com/yacht-charters/',
    menu: 'charters',
    sub: [
      {
        label: 'Private Charter',
        href: '/private-yacht-charter',
      },
      {
        label: 'Corporate Yacht Charter',
        href: '/corporate-yacht-charter',
      },
      {
        label: 'Wedding Yacht Charter',
        href: '/wedding-yacht-charter',
      },
      {
        label: 'Catering',
        href: '/yacht-charter-menus',
      },
    ],
  },
  {
    label: 'Our Yachts',
    href: 'https://boattimeyachtcharters.com/our-yachts/',
    menu: 'yachts',
    alignRight: true,
    sub: [
      {
        label: 'Sun Goddess',
        href: '/sun-goddess-gold-coast',
      },
      {
        label: 'Mermaid Spirit',
        href: '/mermaid-spirit-gold-coast',
      },
    ],
  },
  {
    label: 'Boattime News',
    href: 'https://boattimeyachtcharters.com/boattime-news/',
  },
];

const CRUISE_META = [
  {
    desc: 'June – October · 4 hrs',
    img: 'https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?w=60&q=80',
  },
  {
    desc: 'Year-round · 2.5 hrs',
    img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=60&q=80',
  },
  {
    desc: 'Special event · 4 hrs',
    img: 'https://images.unsplash.com/photo-1516550893923-42d28e5677af?w=60&q=80',
  },
  {
    desc: 'February · 3 hrs',
    img: 'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=60&q=80',
  },
  {
    desc: 'Special event · 4 hrs',
    img: 'https://images.unsplash.com/photo-1498354178607-a79df2916198?w=60&q=80',
  },
  {
    desc: 'Year-round · 3 hrs',
    img: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=60&q=80',
  },
  {
    desc: 'Year-round · 3.5 hrs',
    img: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=60&q=80',
  },
];

const CHARTER_META = [
  { desc: 'Up to 135 guests on the Broadwater. Your afternoon, your brief.' },
  { desc: 'Client events, launches, team offsites. Dual bars throughout.' },
  {
    desc: 'Ceremony on the foredeck at golden hour. Three decks of celebration.',
  },
  { desc: 'Private Chefs of Brisbane. From grazing boards to fine dining.' },
];

// ── Mega menu: Cruise Tickets ─────────────────────────────────────────────────

function CruisesMenu({ sub }: { sub: SubLink[] }) {
  return (
    <div style={{ display: 'flex', minWidth: 640 }}>
      {/* Left image panel */}
      <div
        style={{
          width: 210,
          flexShrink: 0,
          position: 'relative',
          backgroundImage:
            'url(https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?w=420&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(to top, rgba(10,22,40,0.95) 0%, rgba(10,22,40,0.3) 60%)',
          }}
        />
        <div style={{ position: 'absolute', bottom: 28, left: 24, right: 24 }}>
          <div
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 8,
              letterSpacing: '0.38em',
              textTransform: 'uppercase',
              color: 'var(--gold)',
              marginBottom: 12,
            }}
          >
            Cruise Tickets
          </div>
          <div
            style={{
              fontFamily: 'var(--font-display)',
              fontStyle: 'italic',
              fontSize: 22,
              color: 'var(--cream)',
              lineHeight: 1.15,
              marginBottom: 14,
            }}
          >
            Seven routes.
            <br />
            One coastline.
          </div>
          <a
            href="https://boattimeyachtcharters.com/cruise-tickets/"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 9,
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              color: 'var(--gold)',
              fontWeight: 600,
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: 6,
            }}
          >
            View all <Icon name="arrow" size={10} color="var(--gold)" />
          </a>
        </div>
      </div>

      {/* Right links */}
      <div style={{ flex: 1, padding: '6px 0' }}>
        {sub.map((s, i) => (
          <a
            key={s.label}
            href={s.href}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 14,
              padding: '9px 20px',
              textDecoration: 'none',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background =
                'rgba(201,168,76,0.06)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = 'transparent';
            }}
          >
            <div
              style={{
                width: 40,
                height: 40,
                flexShrink: 0,
                backgroundImage: `url(${CRUISE_META[i]?.img})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                border: '1px solid rgba(201,168,76,0.2)',
              }}
            />
            <div>
              <div
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 10.5,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'var(--cream)',
                  fontWeight: 500,
                  lineHeight: 1,
                  marginBottom: 4,
                }}
              >
                {s.label}
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 10,
                  color: 'var(--text-muted)',
                  letterSpacing: '0.06em',
                }}
              >
                {CRUISE_META[i]?.desc}
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

// ── Mega menu: Yacht Charters ─────────────────────────────────────────────────

function ChartersMenu({ sub }: { sub: SubLink[] }) {
  return (
    <div
      style={{
        minWidth: 500,
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 1,
        background: 'rgba(201,168,76,0.08)',
        padding: 1,
      }}
    >
      {sub.map((s, i) => (
        <a
          key={s.label}
          href={s.href}
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 8,
            padding: '22px 24px',
            textDecoration: 'none',
            background: 'var(--navy)',
            transition: 'background 0.2s',
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.background =
              'rgba(201,168,76,0.06)';
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.background = 'var(--navy)';
          }}
        >
          <div
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 10,
              letterSpacing: '0.28em',
              textTransform: 'uppercase',
              color: 'var(--gold)',
              fontWeight: 600,
            }}
          >
            {s.label}
          </div>
          <div
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 12,
              color: 'rgba(245,240,232,0.6)',
              lineHeight: 1.6,
            }}
          >
            {CHARTER_META[i]?.desc}
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 6,
              fontFamily: 'var(--font-body)',
              fontSize: 9,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'var(--gold)',
              marginTop: 4,
            }}
          >
            Learn more <Icon name="arrow" size={9} color="var(--gold)" />
          </div>
        </a>
      ))}
    </div>
  );
}

// ── Mega menu: Our Yachts ─────────────────────────────────────────────────────

const YACHT_DATA = [
  {
    img: 'https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=500&q=80',
    spec: '34m · 135 guests',
    detail: 'Two decks · Dual bars · Sound throughout',
  },
  {
    img: 'https://images.unsplash.com/photo-1511316695145-4992006ffddb?w=500&q=80',
    spec: '30m · 100 guests',
    detail: "Tri-deck · Chef's kitchen · Sun lounge",
  },
];

function YachtsMenu({ sub }: { sub: SubLink[] }) {
  return (
    <div
      style={{
        minWidth: 540,
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 2,
      }}
    >
      {sub.map((s, i) => (
        <a
          key={s.label}
          href={s.href}
          style={{
            position: 'relative',
            height: 230,
            display: 'block',
            textDecoration: 'none',
            overflow: 'hidden',
          }}
        >
          <div
            className="will-change-transform"
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: `url(${YACHT_DATA[i].img})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              transition: 'transform 0.55s ease',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.transform = 'scale(1.05)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.transform = 'scale(1)';
            }}
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background:
                'linear-gradient(to top, rgba(10,22,40,0.95) 0%, rgba(10,22,40,0.2) 55%)',
            }}
          />
          <div
            style={{ position: 'absolute', bottom: 22, left: 22, right: 22 }}
          >
            <div
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 24,
                fontStyle: 'italic',
                color: 'var(--cream)',
                marginBottom: 6,
              }}
            >
              {s.label}
            </div>
            <div
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 9,
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: 'var(--gold)',
                marginBottom: 4,
              }}
            >
              {YACHT_DATA[i].spec}
            </div>
            <div
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 10,
                color: 'rgba(245,240,232,0.5)',
                letterSpacing: '0.05em',
              }}
            >
              {YACHT_DATA[i].detail}
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}

// ── NavItem ───────────────────────────────────────────────────────────────────

function NavItem({
  label,
  href,
  sub,
  menu,
  alignRight,
}: {
  label: string;
  href?: string;
  sub?: SubLink[];
  menu?: 'cruises' | 'charters' | 'yachts';
  alignRight?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const dropRef = useRef<HTMLDivElement>(null);
  const hasSub = !!sub;

  useEffect(() => {
    if (!dropRef.current) return;
    gsap.to(dropRef.current, {
      opacity: open ? 1 : 0,
      y: open ? 0 : 8,
      pointerEvents: open ? 'auto' : 'none',
      duration: 0.25,
      ease: 'power2.out',
    });
  }, [open]);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <a
        href={href ?? '#'}
        className="relative flex items-center gap-1.5 select-none"
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: 10.5,
          letterSpacing: '0.22em',
          textTransform: 'uppercase',
          color: 'var(--cream)',
          fontWeight: 500,
          padding: '8px 0',
          textDecoration: 'none',
          transition: 'color 0.2s',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--gold)')}
        onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--cream)')}
      >
        {label}
        {hasSub && (
          <span style={{ opacity: 0.55 }}>
            <Icon name="chevronDown" size={10} />
          </span>
        )}
      </a>

      {hasSub && (
        <div
          ref={dropRef}
          className="absolute top-full"
          style={{
            ...(alignRight ? { right: 0 } : { left: 0 }),
            background: 'rgba(10,22,40,0.97)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            border: '1px solid rgba(201,168,76,0.18)',
            marginTop: 0,
            opacity: 0,
            pointerEvents: 'none',
            zIndex: 100,
            overflow: 'hidden',
          }}
        >
          {menu === 'cruises' && <CruisesMenu sub={sub!} />}
          {menu === 'charters' && <ChartersMenu sub={sub!} />}
          {menu === 'yachts' && <YachtsMenu sub={sub!} />}
          {!menu &&
            sub!.map((s) => (
              <a
                key={s.label}
                href={s.href}
                className="block"
                style={{
                  padding: '10px 24px',
                  fontFamily: 'var(--font-body)',
                  fontSize: 11,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: 'var(--cream)',
                  textDecoration: 'none',
                  fontWeight: 400,
                  minWidth: 240,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--gold)';
                  e.currentTarget.style.background = 'rgba(201,168,76,0.05)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--cream)';
                  e.currentTarget.style.background = 'transparent';
                }}
              >
                {s.label}
              </a>
            ))}
        </div>
      )}
    </div>
  );
}

// ── Nav ───────────────────────────────────────────────────────────────────────

export default function Nav() {
  const navRef = useRef<HTMLElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const isScrolled = window.scrollY > 40;
      if (isScrolled !== scrolled) setScrolled(isScrolled);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [scrolled]);

  useGSAP(
    () => {
      if (!navRef.current) return;
      gsap.to(navRef.current, {
        background: scrolled ? 'rgba(10,22,40,0.97)' : 'transparent',
        backdropFilter: scrolled ? 'blur(14px)' : 'blur(0px)',
        borderBottomColor: scrolled ? 'rgba(201,168,76,0.14)' : 'transparent',
        paddingTop: scrolled ? 14 : 22,
        paddingBottom: scrolled ? 14 : 22,
        duration: 0.4,
        ease: 'power2.out',
      });
    },
    { dependencies: [scrolled] },
  );

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between border-b border-transparent nav-bar"
      style={{
        paddingTop: 22,
        paddingBottom: 22,
        paddingLeft: 48,
        paddingRight: 48,
      }}
    >
      {/* Logo */}
      <a className="flex items-center gap-3.5 no-underline" href="/">
        <div
          className="flex items-center justify-center"
          style={{
            width: 36,
            height: 36,
            border: '1px solid var(--gold)',
            fontFamily: 'var(--font-display)',
            fontStyle: 'italic',
            fontSize: 18,
            color: 'var(--gold)',
          }}
        >
          B
        </div>
        <div>
          <div
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 600,
              fontSize: 22,
              letterSpacing: '0.02em',
              lineHeight: 1,
            }}
          >
            <span style={{ color: 'var(--gold)' }}>Boat</span>
            <span style={{ color: 'var(--cream)' }}>Time</span>
          </div>
          <div
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 8,
              letterSpacing: '0.32em',
              textTransform: 'uppercase',
              color: 'var(--text-muted)',
              marginTop: 3,
              fontWeight: 500,
            }}
          >
            Yacht Charters
          </div>
        </div>
      </a>

      {/* Desktop links */}
      <div className="hidden md:flex items-center gap-8">
        {NAV_LINKS.map((n) => (
          <NavItem
            key={n.label}
            label={n.label}
            href={n.href}
            sub={n.sub}
            menu={n.menu}
            alignRight={n.alignRight}
          />
        ))}
      </div>

      {/* CTA + hamburger */}
      <div className="flex items-center gap-4">
        <Button
          variant="outline"
          small
          href="https://boattimeyachtcharters.com/contact/"
          className="hidden md:inline-flex"
        >
          Booking Enquiry
        </Button>

        <button
          className="md:hidden flex flex-col gap-1.5 p-2 bg-transparent border-none cursor-pointer"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span
            className="block w-6 h-px transition-all duration-300"
            style={{
              background: 'var(--cream)',
              transform: mobileOpen
                ? 'rotate(45deg) translate(3px, 3px)'
                : 'none',
            }}
          />
          <span
            className="block w-6 h-px transition-all duration-300"
            style={{ background: 'var(--cream)', opacity: mobileOpen ? 0 : 1 }}
          />
          <span
            className="block w-6 h-px transition-all duration-300"
            style={{
              background: 'var(--cream)',
              transform: mobileOpen
                ? 'rotate(-45deg) translate(3px, -3px)'
                : 'none',
            }}
          />
        </button>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div
          className="absolute top-full left-0 right-0 md:hidden"
          style={{
            background: 'rgba(10,22,40,0.98)',
            backdropFilter: 'blur(14px)',
            borderBottom: '1px solid rgba(201,168,76,0.14)',
            padding: '24px',
            maxHeight: '80vh',
            overflowY: 'auto',
          }}
        >
          {NAV_LINKS.map((n) => (
            <div key={n.label}>
              <a
                href={n.href ?? '#'}
                className="block py-3 border-b"
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 12,
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: 'var(--cream)',
                  textDecoration: 'none',
                  borderBottomColor: 'rgba(201,168,76,0.1)',
                }}
              >
                {n.label}
              </a>
              {n.sub && (
                <div style={{ paddingLeft: 16, paddingBottom: 8 }}>
                  {n.sub.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      className="block py-2"
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: 11,
                        letterSpacing: '0.15em',
                        textTransform: 'uppercase',
                        color: 'var(--text-muted)',
                        textDecoration: 'none',
                      }}
                    >
                      {s.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="mt-6">
            <Button
              variant="primary"
              href="https://boattimeyachtcharters.com/contact/"
              small
            >
              Booking Enquiry
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
