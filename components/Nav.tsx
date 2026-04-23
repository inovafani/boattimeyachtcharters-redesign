'use client';

import { useRef, useState, useEffect } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { Button, Icon } from './Shared';

gsap.registerPlugin(useGSAP);

const NAV_LINKS = [
  { label: 'Home' },
  { label: 'About' },
  {
    label: 'Cruise Tickets',
    sub: [
      'Luxury Whale Watching',
      'Broadwater Sunset Cruise',
      'New Year’s Eve 2026',
      'Valentine’s Cruise',
      'Riverfire 2026',
      'Relaxed Lunch Cruise',
      'Sunset Twilight Buffet',
    ],
  },
  {
    label: 'Yacht Charters',
    sub: ['Private Charter', 'Corporate Charter', 'Wedding Charter', 'Catering'],
  },
  { label: 'Our Yachts', sub: ['Sun Goddess', 'Mermaid Spirit'] },
  { label: 'Journal' },
];

function NavItem({ label, sub }: { label: string; sub?: string[] }) {
  const [open, setOpen] = useState(false);
  const dropRef = useRef<HTMLDivElement>(null);
  const hasSub = !!sub;

  useEffect(() => {
    if (!dropRef.current) return;
    gsap.to(dropRef.current, {
      opacity: open ? 1 : 0,
      y: open ? 0 : 6,
      pointerEvents: open ? 'auto' : 'none',
      duration: 0.22,
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
        className="relative flex items-center gap-1.5 cursor-pointer select-none transition-colors duration-200"
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: 10.5,
          letterSpacing: '0.22em',
          textTransform: 'uppercase',
          color: 'var(--cream)',
          fontWeight: 500,
          padding: '8px 0',
          textDecoration: 'none',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--gold)')}
        onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--cream)')}
      >
        {label}
        {hasSub && (
          <span style={{ opacity: 0.6 }}>
            <Icon name="chevronDown" size={10} />
          </span>
        )}
      </a>

      {hasSub && (
        <div
          ref={dropRef}
          className="absolute top-full left-0"
          style={{
            minWidth: 240,
            background: 'rgba(10,22,40,0.97)',
            backdropFilter: 'blur(14px)',
            WebkitBackdropFilter: 'blur(14px)',
            border: '1px solid rgba(201,168,76,0.18)',
            padding: '16px 0',
            opacity: 0,
            pointerEvents: 'none',
            zIndex: 100,
            marginTop: 6,
          }}
        >
          {sub!.map((s) => (
            <a
              key={s}
              className="block cursor-pointer transition-colors duration-200"
              style={{
                padding: '10px 24px',
                fontFamily: 'var(--font-body)',
                fontSize: 11,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'var(--cream)',
                textDecoration: 'none',
                fontWeight: 400,
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
              {s}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

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
      <a
        className="flex items-center gap-3.5 cursor-pointer no-underline"
        href="#"
      >
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
          <NavItem key={n.label} label={n.label} sub={n.sub} />
        ))}
      </div>

      {/* CTA + mobile toggle */}
      <div className="flex items-center gap-4">
        <Button variant="outline" small href="#inquiry" className="hidden md:inline-flex">
          Booking Enquiry
        </Button>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 cursor-pointer bg-transparent border-none"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span
            className="block w-6 h-px transition-all duration-300"
            style={{
              background: 'var(--cream)',
              transform: mobileOpen ? 'rotate(45deg) translate(3px, 3px)' : 'none',
            }}
          />
          <span
            className="block w-6 h-px transition-all duration-300"
            style={{
              background: 'var(--cream)',
              opacity: mobileOpen ? 0 : 1,
            }}
          />
          <span
            className="block w-6 h-px transition-all duration-300"
            style={{
              background: 'var(--cream)',
              transform: mobileOpen ? 'rotate(-45deg) translate(3px, -3px)' : 'none',
            }}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="absolute top-full left-0 right-0 md:hidden"
          style={{
            background: 'rgba(10,22,40,0.98)',
            backdropFilter: 'blur(14px)',
            borderBottom: '1px solid rgba(201,168,76,0.14)',
            padding: '24px',
          }}
        >
          {NAV_LINKS.map((n) => (
            <a
              key={n.label}
              href="#"
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
          ))}
          <div className="mt-6">
            <Button variant="primary" href="#inquiry" small>
              Booking Enquiry
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
