'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Eyebrow, ItalicEm, Icon } from './Shared';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const REVIEWS = [
  {
    quote: (
      <>
        Hands down the best whale watching in south east Queensland. Informative without
        overwhelming — we watched them{' '}
        <ItalicEm>breach</ItalicEm> several times. Unforgettable.
      </>
    ),
    name: 'Gleyn Hernandez',
    source: 'Google · Whale Watching',
  },
  {
    quote: (
      <>
        An amazing experience visiting from England. Never imagined I&rsquo;d see so many
        whales and a pod of <ItalicEm>dolphins</ItalicEm>. The crew made us feel genuinely
        welcome.
      </>
    ),
    name: 'Alex',
    source: 'Google · Whale Watching',
  },
  {
    quote: (
      <>
        My grandchildren were so excited. The crew were incredibly knowledgeable. Five stars
        all round — a <ItalicEm>perfect day</ItalicEm> out for the whole family.
      </>
    ),
    name: 'Linda Bernhardt',
    source: 'Google · Family Charter',
  },
];

const RATINGS = [
  { score: '5.0', label: 'Facebook · 2,047 reviews' },
  { score: '4.7', label: 'Google · 1,863 reviews' },
  { score: '12yr', label: 'On the water' },
];

function Stars() {
  return (
    <div className="flex gap-1 mb-6">
      {[0, 1, 2, 3, 4].map((i) => (
        <Icon key={i} name="star" size={12} color="var(--gold)" />
      ))}
    </div>
  );
}

export default function Reviews() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const ratingsRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(headerRef.current, {
        y: 40,
        opacity: 0,
        duration: 0.9,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: headerRef.current,
          start: 'top 85%',
          once: true,
        },
      });

      // Ratings count-up
      const ratingEls = ratingsRef.current!.querySelectorAll<HTMLElement>('.rating-number');
      ratingEls.forEach((el) => {
        const text = el.dataset.value ?? '';
        const numericPart = parseFloat(text);
        if (isNaN(numericPart)) return;
        const isYr = text.includes('yr');
        const obj = { val: 0 };
        gsap.to(obj, {
          val: numericPart,
          duration: 2,
          ease: 'power2.out',
          onUpdate() {
            el.textContent = isYr
              ? `${Math.round(obj.val)}yr`
              : obj.val.toFixed(1);
          },
          scrollTrigger: {
            trigger: ratingsRef.current,
            start: 'top 85%',
            once: true,
          },
        });
      });

      gsap.from(ratingsRef.current!.querySelectorAll('.rating-item'), {
        y: 20,
        opacity: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: ratingsRef.current,
          start: 'top 85%',
          once: true,
        },
      });

      gsap.from(sectionRef.current!.querySelectorAll('.review-card'), {
        y: 60,
        opacity: 0,
        duration: 0.85,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 78%',
          once: true,
        },
      });
    },
    { scope: sectionRef },
  );

  return (
    <div
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{ padding: '110px 48px', background: 'var(--navy-mid)' }}
    >
      {/* Subtle radial accent */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at 90% 20%, rgba(201,168,76,0.07), transparent 55%)',
          pointerEvents: 'none',
        }}
      />

      <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative' }}>
        {/* Header */}
        <div ref={headerRef} style={{ textAlign: 'center', maxWidth: 720, margin: '0 auto' }}>
          <Eyebrow>Guest Book</Eyebrow>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 300,
              fontSize: 'clamp(36px, 5vw, 60px)',
              lineHeight: 1.05,
              letterSpacing: '-0.015em',
            }}
          >
            What our guests{' '}
            <ItalicEm>say about us</ItalicEm>.
          </h2>
        </div>

        {/* Platform ratings */}
        <div
          ref={ratingsRef}
          className="flex justify-center"
          style={{
            gap: 64,
            marginTop: 36,
            marginBottom: 72,
            paddingTop: 36,
            borderTop: '1px solid rgba(201,168,76,0.18)',
          }}
        >
          {RATINGS.map((r) => (
            <div key={r.label} className="rating-item text-center">
              <div
                className="rating-number"
                data-value={r.score}
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 40,
                  fontWeight: 300,
                  color: 'var(--gold)',
                  lineHeight: 1,
                }}
              >
                {r.score}
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 10,
                  letterSpacing: '0.28em',
                  textTransform: 'uppercase',
                  color: 'var(--text-muted)',
                  fontWeight: 500,
                  marginTop: 8,
                }}
              >
                {r.label}
              </div>
            </div>
          ))}
        </div>

        {/* Cards */}
        <div
          className="grid"
          style={{
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 2,
            background: 'rgba(201,168,76,0.1)',
            border: '1px solid rgba(201,168,76,0.1)',
          }}
        >
          {REVIEWS.map((r, i) => (
            <div
              key={i}
              className="review-card flex flex-col"
              style={{
                padding: '48px 36px',
                background: 'var(--navy-mid)',
                minHeight: 320,
              }}
            >
              <Stars />
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 19,
                  fontWeight: 300,
                  color: 'var(--cream)',
                  lineHeight: 1.5,
                  letterSpacing: '-0.005em',
                  marginBottom: 28,
                  flex: 1,
                }}
              >
                &ldquo;{r.quote}&rdquo;
              </div>
              <div
                className="flex items-center gap-3.5"
                style={{
                  paddingTop: 24,
                  borderTop: '1px solid rgba(201,168,76,0.15)',
                }}
              >
                <div
                  className="flex items-center justify-center flex-shrink-0"
                  style={{
                    width: 38,
                    height: 38,
                    background: 'var(--ocean)',
                    color: 'var(--gold)',
                    fontFamily: 'var(--font-display)',
                    fontStyle: 'italic',
                    fontSize: 16,
                    border: '1px solid rgba(201,168,76,0.3)',
                  }}
                >
                  {r.name[0]}
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: 12,
                      color: 'var(--cream)',
                      fontWeight: 500,
                      letterSpacing: '0.04em',
                    }}
                  >
                    {r.name}
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: 9,
                      letterSpacing: '0.25em',
                      textTransform: 'uppercase',
                      color: 'var(--text-muted)',
                      marginTop: 2,
                      fontWeight: 500,
                    }}
                  >
                    {r.source}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
