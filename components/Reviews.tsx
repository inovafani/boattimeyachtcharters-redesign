'use client';

import { useRef, useState, useCallback } from 'react';
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
        overwhelming — we watched them <ItalicEm>breach</ItalicEm> several times.
        Unforgettable.
      </>
    ),
    name: 'Gleyn Hernandez',
    source: 'Google · Whale Watching',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&q=80',
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
    photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&q=80',
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
    photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120&q=80',
  },
  {
    quote: (
      <>
        Booked for my wife&rsquo;s birthday and it exceeded every expectation. The{' '}
        <ItalicEm>sunset over the Broadwater</ItalicEm> was otherworldly. Worth every cent.
      </>
    ),
    name: 'James Nguyen',
    source: 'Google · Sunset Cruise',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&q=80',
  },
  {
    quote: (
      <>
        We used Sun Goddess for our company Christmas party — 80 guests, three decks,{' '}
        <ItalicEm>completely seamless</ItalicEm>. The catering team were exceptional.
      </>
    ),
    name: 'Sarah Mitchell',
    source: 'Google · Corporate Charter',
    photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=120&q=80',
  },
  {
    quote: (
      <>
        Got married on the foredeck at golden hour. The crew made the whole day feel{' '}
        <ItalicEm>completely effortless</ItalicEm>. Every single guest still talks about it.
      </>
    ),
    name: 'Emily & Tom Barker',
    source: 'Google · Wedding Charter',
    photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=120&q=80',
  },
  {
    quote: (
      <>
        We saw over 20 humpbacks including a full breach ten metres from the bow.{' '}
        <ItalicEm>Absolutely breathtaking.</ItalicEm> Best day on the water I&rsquo;ve had.
      </>
    ),
    name: 'Robert Svensson',
    source: 'Google · Whale Watching',
    photo: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=120&q=80',
  },
  {
    quote: (
      <>
        Hired for grandfather&rsquo;s 80th — three generations on deck. The crew treated
        everyone like <ItalicEm>absolute royalty</ItalicEm>. A perfect afternoon.
      </>
    ),
    name: 'Diane Kowalski',
    source: 'Google · Private Charter',
    photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=120&q=80',
  },
  {
    quote: (
      <>
        Visiting from the UK and chose this on a whim — best decision of the trip. The{' '}
        <ItalicEm>Broadwater at sunset</ItalicEm> is something I will never forget.
      </>
    ),
    name: 'Marcus Webb',
    source: 'Google · Sunset Cruise',
    photo: 'https://images.unsplash.com/photo-1463453091185-61582044d556?w=120&q=80',
  },
];

const RATINGS = [
  { score: '5.0', label: 'Facebook · 2,047 reviews' },
  { score: '4.7', label: 'Google · 1,863 reviews' },
  { score: '12yr', label: 'On the water' },
];

const PER_PAGE = 3;
const TOTAL_PAGES = Math.ceil(REVIEWS.length / PER_PAGE);

function Stars() {
  return (
    <div className="flex gap-1 mb-6">
      {[0, 1, 2, 3, 4].map((i) => (
        <Icon key={i} name="star" size={12} color="var(--gold)" />
      ))}
    </div>
  );
}

const navBtnStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: 10,
  fontFamily: 'var(--font-body)',
  fontSize: 10,
  letterSpacing: '0.25em',
  textTransform: 'uppercase',
  color: 'var(--gold)',
  fontWeight: 600,
  background: 'transparent',
  border: '1px solid rgba(201,168,76,0.3)',
  padding: '12px 22px',
  cursor: 'pointer',
  transition: 'border-color 0.2s',
};

export default function Reviews() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const ratingsRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const isFirstRender = useRef(true);

  const [page, setPage] = useState(0);
  const [locked, setLocked] = useState(false);

  const goToPage = useCallback(
    (target: number) => {
      if (locked || target === page) return;
      setLocked(true);
      gsap.to(cardsRef.current, {
        opacity: 0,
        y: 16,
        duration: 0.2,
        ease: 'power2.in',
        onComplete: () => {
          gsap.set(cardsRef.current, { opacity: 0, y: -20 });
          setPage(target);
        },
      });
    },
    [locked, page],
  );

  useGSAP(
    () => {
      gsap.from(headerRef.current, {
        y: 40,
        opacity: 0,
        duration: 0.9,
        ease: 'power2.out',
        scrollTrigger: { trigger: headerRef.current, start: 'top 85%', once: true },
      });

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
            el.textContent = isYr ? `${Math.round(obj.val)}yr` : obj.val.toFixed(1);
          },
          scrollTrigger: { trigger: ratingsRef.current, start: 'top 85%', once: true },
        });
      });

      gsap.from(ratingsRef.current!.querySelectorAll('.rating-item'), {
        y: 20,
        opacity: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: { trigger: ratingsRef.current, start: 'top 85%', once: true },
      });

      gsap.from(cardsRef.current, {
        y: 60,
        opacity: 0,
        duration: 0.85,
        ease: 'power2.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 78%', once: true },
      });
    },
    { scope: sectionRef },
  );

  useGSAP(
    () => {
      if (isFirstRender.current) {
        isFirstRender.current = false;
        return;
      }
      gsap.fromTo(
        cardsRef.current,
        { opacity: 0, y: -20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          ease: 'power2.out',
          onComplete: () => setLocked(false),
        },
      );
    },
    { dependencies: [page] },
  );

  const visible = REVIEWS.slice(page * PER_PAGE, (page + 1) * PER_PAGE);

  return (
    <div
      ref={sectionRef}
      className="relative overflow-hidden reviews-section"
      style={{ padding: '110px 48px', background: 'var(--navy-mid)' }}
    >
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
            What our guests <ItalicEm>say about us</ItalicEm>.
          </h2>
        </div>

        {/* Platform ratings */}
        <div
          ref={ratingsRef}
          className="flex justify-center ratings-row"
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
          ref={cardsRef}
          className="grid reviews-grid"
          style={{
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 2,
            background: 'rgba(201,168,76,0.1)',
            border: '1px solid rgba(201,168,76,0.1)',
          }}
        >
          {visible.map((r, i) => (
            <div
              key={`${page}-${i}`}
              className="flex flex-col"
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
                  className="flex-shrink-0"
                  style={{
                    width: 44,
                    height: 44,
                    border: '1px solid rgba(201,168,76,0.3)',
                    backgroundImage: `url(${r.photo})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                />
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

        {/* Carousel navigation */}
        <div
          className="flex items-center justify-between"
          style={{ marginTop: 40 }}
        >
          <button
            style={navBtnStyle}
            onClick={() => goToPage((page - 1 + TOTAL_PAGES) % TOTAL_PAGES)}
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'var(--gold)')}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'rgba(201,168,76,0.3)')}
          >
            <span style={{ transform: 'rotate(180deg)', display: 'inline-flex' }}>
              <Icon name="arrow" size={11} color="var(--gold)" />
            </span>
            Previous
          </button>

          <div className="flex items-center gap-3">
            {Array.from({ length: TOTAL_PAGES }).map((_, i) => (
              <button
                key={i}
                onClick={() => goToPage(i)}
                style={{
                  width: i === page ? 32 : 8,
                  height: 2,
                  background: i === page ? 'var(--gold)' : 'rgba(201,168,76,0.3)',
                  border: 'none',
                  cursor: 'pointer',
                  padding: 0,
                  transition: 'all 0.35s ease',
                }}
              />
            ))}
          </div>

          <button
            style={navBtnStyle}
            onClick={() => goToPage((page + 1) % TOTAL_PAGES)}
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'var(--gold)')}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'rgba(201,168,76,0.3)')}
          >
            Next
            <Icon name="arrow" size={11} color="var(--gold)" />
          </button>
        </div>
      </div>
    </div>
  );
}
