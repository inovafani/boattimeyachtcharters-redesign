'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Eyebrow, ItalicEm, Button } from './Shared';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function CtaBand() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Parallax on the background image
      gsap.to(bgRef.current, {
        yPercent: 22,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });

      // Content reveal
      gsap.from(contentRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          once: true,
        },
      });

      gsap.from(sectionRef.current!.querySelectorAll('.cta-line'), {
        y: '110%',
        opacity: 0,
        duration: 0.9,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: contentRef.current,
          start: 'top 82%',
          once: true,
        },
      });
    },
    { scope: sectionRef },
  );

  return (
    <div
      ref={sectionRef}
      className="relative overflow-hidden flex items-center justify-center cta-band"
      style={{ minHeight: 560, padding: '120px 48px' }}
    >
      {/* Background image with parallax */}
      <div
        ref={bgRef}
        className="absolute inset-0 will-change-transform"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=2000&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to bottom, rgba(10,22,40,0.72) 0%, rgba(10,22,40,0.58) 50%, rgba(10,22,40,0.88) 100%)',
        }}
      />

      <div ref={contentRef} className="relative z-10 text-center" style={{ maxWidth: 760 }}>
        <Eyebrow>Ready when you are</Eyebrow>

        <h2
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 300,
            fontSize: 'clamp(44px, 6vw, 88px)',
            lineHeight: 0.98,
            letterSpacing: '-0.02em',
            color: 'var(--cream)',
            margin: '20px 0 28px',
          }}
        >
          <div style={{ overflow: 'hidden' }}>
            <span className="cta-line block">Ready to</span>
          </div>
          <div style={{ overflow: 'hidden' }}>
            <span
              className="cta-line block"
              style={{ fontStyle: 'italic', color: 'var(--gold-light)' }}
            >
              set sail?
            </span>
          </div>
        </h2>

        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 16,
            color: 'rgba(245,240,232,0.82)',
            lineHeight: 1.75,
            marginBottom: 44,
            maxWidth: 520,
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          Every charter begins with a conversation. Share the afternoon you have in mind —
          our concierge replies within the hour.
        </p>

        <div className="flex gap-4 justify-center flex-wrap">
          <Button variant="primary" href="#inquiry">
            Booking Enquiry
          </Button>
          <Button variant="ghost" href="#cruises">
            Browse Cruise Tickets
          </Button>
        </div>
      </div>
    </div>
  );
}
