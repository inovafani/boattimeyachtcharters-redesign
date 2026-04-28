'use client';

import { useState, useEffect } from 'react';
import { useTheme } from './ThemeProvider';

const NAV_LINKS = [
  { label: 'Fleet', href: '/#fleet' },
  { label: 'Whale', href: '/#whale' },
  { label: 'Experiences', href: '/#experiences' },
  { label: 'Horizons', href: '/#horizons' },
  { label: 'FAQ', href: '/#faq' },
];

const MOBILE_LINKS = [
  { pre: 'The', em: 'Fleet', href: '/#fleet', num: '01' },
  { pre: 'Whale', em: 'Season', href: '/#whale', num: '02' },
  { pre: 'The', em: 'Showreel', href: '/#showreel', num: '03' },
  { pre: 'Signature', em: 'Experiences', href: '/#experiences', num: '04' },
  { pre: 'Where we', em: 'sail', href: '/#horizons', num: '05' },
  { pre: 'Good to', em: 'know', href: '/#faq', num: '06' },
];

export default function Nav() {
  const { theme, toggle } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      <header className={`site-header${scrolled ? ' site-header--scrolled' : ''}`}>
        {/* Logo */}
        <a href="/" className="site-header__logo">
          <img
            src="https://boattimeyachtcharters.com/wp-content/uploads/2021/08/Boattime-Logo-PMS.png"
            alt="Boattime Yacht Charters"
            className="site-header__logo-img"
          />
          <div className="site-header__logo-text">
            <strong>Boattime</strong>
            <em>Yacht Charters</em>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="site-header__nav">
          {NAV_LINKS.map((n) => (
            <a key={n.label} href={n.href} className="site-header__nav-link">
              {n.label}
            </a>
          ))}
        </nav>

        {/* Right side */}
        <div className="site-header__right">
          <a href="tel:+61477667644" className="site-header__phone">
            <span className="nav-phone-dot" />
            +61 477 667 644
          </a>

          <button
            onClick={toggle}
            className="theme-toggle-btn"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? (
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
            ) : (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>

          <a href="/#inquiry" className="site-header__reserve">
            <span>Reserve</span>
            <svg width="11" height="11" viewBox="0 0 12 12" fill="none" aria-hidden="true">
              <path
                d="M2 6h8M6 2l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>

          <button
            className={`site-header__menu-btn${mobileOpen ? ' site-header__menu-btn--active' : ''}`}
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <span className="site-header__menu-line" />
            <span className="site-header__menu-line" />
          </button>
        </div>
      </header>

      {/* Full-screen mobile drawer */}
      <div
        className={`mobile-drawer${mobileOpen ? ' mobile-drawer--open' : ''}`}
        aria-hidden={!mobileOpen}
      >
        <button
          className="mobile-drawer__close-btn"
          onClick={() => setMobileOpen(false)}
          aria-label="Close menu"
        >
          <span className="mobile-drawer__close-line" />
          <span className="mobile-drawer__close-line" />
        </button>

        <ul className="mobile-drawer__nav">
          {MOBILE_LINKS.map((n, i) => (
            <li key={n.num} style={{ '--i': i } as React.CSSProperties}>
              <a href={n.href} data-num={n.num} onClick={() => setMobileOpen(false)}>
                <span>
                  {n.pre} <em>{n.em}</em>
                </span>
              </a>
            </li>
          ))}
        </ul>

        <div className="mobile-drawer__footer">
          <div className="mobile-drawer__footer-info">
            <div className="mobile-drawer__footer-block">
              <span className="mobile-drawer__footer-label">Direct</span>
              <a href="tel:+61477667644" className="mobile-drawer__footer-value">
                +61 477 667 644
              </a>
            </div>
            <div className="mobile-drawer__footer-block">
              <span className="mobile-drawer__footer-label">Berth</span>
              <span className="mobile-drawer__footer-value">Marina Mirage · Gold Coast</span>
            </div>
          </div>
          <div className="mobile-drawer__footer-ctas">
            <a href="/#inquiry" className="mobile-drawer__cta" onClick={() => setMobileOpen(false)}>
              Reserve a Cruise →
            </a>
            <a
              href="/#inquiry"
              className="mobile-drawer__cta mobile-drawer__cta--secondary"
              onClick={() => setMobileOpen(false)}
            >
              Custom Enquiry →
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
