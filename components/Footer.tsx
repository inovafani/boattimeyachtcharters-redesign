'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Icon } from './Shared';

gsap.registerPlugin(ScrollTrigger, useGSAP);

function FootLink({ children, href = '#' }: { children: React.ReactNode; href?: string }) {
  return (
    <a
      href={href}
      style={{
        display: 'block',
        fontFamily: 'var(--font-body)',
        fontSize: 13,
        color: 'var(--text-muted)',
        textDecoration: 'none',
        padding: '7px 0',
        transition: 'color 0.2s',
      }}
      onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--cream)')}
      onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
    >
      {children}
    </a>
  );
}

function ColHead({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        fontFamily: 'var(--font-body)',
        fontSize: 9,
        letterSpacing: '0.32em',
        textTransform: 'uppercase',
        color: 'var(--gold)',
        fontWeight: 500,
        marginBottom: 20,
      }}
    >
      {children}
    </div>
  );
}

export default function Footer() {
  const footRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(footRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.9,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: footRef.current,
          start: 'top 92%',
          once: true,
        },
      });
    },
    { scope: footRef },
  );

  return (
    <footer
      ref={footRef}
      className="footer-section"
      style={{
        padding: '80px 48px 36px',
        background: 'var(--navy)',
        borderTop: '1px solid var(--border-subtle)',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        {/* Top grid */}
        <div
          className="grid footer-top-grid"
          style={{
            gridTemplateColumns: '1.4fr 1fr 1fr 1fr',
            gap: 56,
            marginBottom: 64,
            paddingBottom: 52,
            borderBottom: '1px solid var(--border-subtle)',
          }}
        >
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3.5" style={{ marginBottom: 20 }}>
              <div
                className="flex items-center justify-center"
                style={{
                  width: 40,
                  height: 40,
                  border: '1px solid var(--gold)',
                  fontFamily: 'var(--font-display)',
                  fontStyle: 'italic',
                  fontSize: 20,
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
                    fontSize: 26,
                    letterSpacing: '0.02em',
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
            </div>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 13,
                color: 'var(--text-muted)',
                lineHeight: 1.75,
                maxWidth: 300,
                marginBottom: 28,
              }}
            >
              Superyacht charters on the Gold Coast and Brisbane. Two vessels, one unhurried
              coastline — since 2014.
            </p>
            {/* Socials */}
            <div className="flex gap-2.5">
              {(['instagram', 'facebook', 'mail'] as const).map((icon) => (
                <a
                  key={icon}
                  href="#"
                  className="flex items-center justify-center transition-colors duration-300"
                  style={{
                    width: 38,
                    height: 38,
                    border: '1px solid rgba(201,168,76,0.28)',
                    color: 'var(--gold)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'var(--gold)';
                    e.currentTarget.style.borderColor = 'var(--gold)';
                    e.currentTarget.style.color = 'var(--navy)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.borderColor = 'rgba(201,168,76,0.28)';
                    e.currentTarget.style.color = 'var(--gold)';
                  }}
                >
                  <Icon name={icon} size={14} color="inherit" />
                </a>
              ))}
            </div>
          </div>

          {/* Cruise Tickets */}
          <div>
            <ColHead>Cruise Tickets</ColHead>
            <FootLink>Luxury Whale Watching</FootLink>
            <FootLink>Broadwater Sunset</FootLink>
            <FootLink>New Year&rsquo;s Eve 2026</FootLink>
            <FootLink>Valentine&rsquo;s Cruise</FootLink>
            <FootLink>Riverfire 2026</FootLink>
            <FootLink>Relaxed Lunch</FootLink>
            <FootLink>Twilight Buffet</FootLink>
          </div>

          {/* Charters + Yachts */}
          <div>
            <ColHead>Yacht Charters</ColHead>
            <FootLink>Private Charter</FootLink>
            <FootLink>Corporate Charter</FootLink>
            <FootLink>Wedding Charter</FootLink>
            <FootLink>Catering &amp; Menus</FootLink>
            <div style={{ marginTop: 28 }}>
              <ColHead>Our Yachts</ColHead>
            </div>
            <FootLink>Sun Goddess</FootLink>
            <FootLink>Mermaid Spirit</FootLink>
          </div>

          {/* Contact */}
          <div>
            <ColHead>Contact</ColHead>
            <FootLink>Muriel Henchman Pontoon</FootLink>
            <FootLink>Marina Mirage, Southport QLD</FootLink>
            <FootLink href="tel:+61755280400">+61 7 5528 0400</FootLink>
            <FootLink href="mailto:info@boattimeyachtcharters.com.au">
              info@boattimeyachtcharters.com.au
            </FootLink>
            <div style={{ marginTop: 28 }}>
              <ColHead>Company</ColHead>
            </div>
            <FootLink>About BoatTime</FootLink>
            <FootLink>Boattime News</FootLink>
            <FootLink href="#inquiry">Booking Enquiry</FootLink>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex justify-between items-center footer-bottom-bar"
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 10,
            color: 'var(--text-muted)',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
          }}
        >
          <div>© 2026 Boattime Yacht Charters · All rights reserved</div>
          <div className="flex gap-8">
            <FootLink>Privacy</FootLink>
            <FootLink>Terms</FootLink>
            <FootLink>Cookies</FootLink>
          </div>
        </div>
      </div>
    </footer>
  );
}
