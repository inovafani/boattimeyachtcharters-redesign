'use client';

import { useRef, useState, useCallback } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const REVIEWS = [
  {
    source: 'Google',
    text: (
      <>
        Easily a <em>must-do attraction</em>. Never imagined I&rsquo;d see so many whales
        and even a pod of dolphins. Excellent service — friendly, knowledgeable staff that
        made us feel welcome the whole time.
      </>
    ),
    name: 'Alex',
    loc: 'Visiting from England',
    photo: 'https://i.pravatar.cc/80?img=11',
  },
  {
    source: 'Tripadvisor',
    text: (
      <>
        An <em>AMAZING day</em>. Staff were brilliant and my grandchildren (6 and 4) were
        very excited. Loved the boat, the commentary, the crew. Five stars all round —
        perfect day out.
      </>
    ),
    name: 'Linda Bernhardt',
    loc: 'Family group · Gold Coast',
    photo: 'https://i.pravatar.cc/80?img=47',
  },
  {
    source: 'Facebook',
    text: (
      <>
        We watched a whale breach <em>fifty times</em>. At the end of the trip we saw three
        whales breach and swim together. The trip was worthy, definitely — good seats up
        top, professional crew.
      </>
    ),
    name: 'Helen C R',
    loc: 'Weekend group · Brisbane',
    photo: 'https://i.pravatar.cc/80?img=44',
  },
  {
    source: 'Google',
    text: (
      <>
        Booked for my wife&rsquo;s birthday and it exceeded every expectation. The{' '}
        <em>sunset over the Broadwater</em> was otherworldly. Worth every cent.
      </>
    ),
    name: 'James Nguyen',
    loc: 'Couple · Sunset Cruise',
    photo: 'https://i.pravatar.cc/80?img=13',
  },
  {
    source: 'Google',
    text: (
      <>
        We used Sun Goddess for our company Christmas party — 80 guests, three decks,{' '}
        <em>completely seamless</em>. The catering team were exceptional.
      </>
    ),
    name: 'Sarah Mitchell',
    loc: 'Corporate group · Gold Coast',
    photo: 'https://i.pravatar.cc/80?img=48',
  },
  {
    source: 'Google',
    text: (
      <>
        Got married on the foredeck at golden hour. The crew made the whole day feel{' '}
        <em>completely effortless</em>. Every single guest still talks about it.
      </>
    ),
    name: 'Emily & Tom Barker',
    loc: 'Wedding Charter',
    photo: 'https://i.pravatar.cc/80?img=36',
  },
  {
    source: 'Google',
    text: (
      <>
        We saw over 20 humpbacks including a full breach ten metres from the bow.{' '}
        <em>Absolutely breathtaking.</em> Best day on the water I&rsquo;ve had.
      </>
    ),
    name: 'Robert Svensson',
    loc: 'Whale Watching',
    photo: 'https://i.pravatar.cc/80?img=3',
  },
  {
    source: 'Google',
    text: (
      <>
        Hired for grandfather&rsquo;s 80th — three generations on deck. The crew treated
        everyone like <em>absolute royalty</em>. A perfect afternoon.
      </>
    ),
    name: 'Diane Kowalski',
    loc: 'Private Charter',
    photo: 'https://i.pravatar.cc/80?img=56',
  },
  {
    source: 'Tripadvisor',
    text: (
      <>
        Visiting from the UK and chose this on a whim — best decision of the trip. The{' '}
        <em>Broadwater at sunset</em> is something I will never forget.
      </>
    ),
    name: 'Marcus Webb',
    loc: 'Sunset Cruise',
    photo: 'https://i.pravatar.cc/80?img=7',
  },
  {
    source: 'Google',
    text: (
      <>
        Hands down the best whale watching in south east Queensland. Informative without
        overwhelming — we watched them <em>breach</em> several times. Unforgettable.
      </>
    ),
    name: 'Gleyn Hernandez',
    loc: 'Whale Watching',
    photo: 'https://i.pravatar.cc/80?img=15',
  },
  {
    source: 'Facebook',
    text: (
      <>
        The crew went above and beyond for our group. Every detail was thought of before
        we asked. <em>Truly world-class</em> service on the Gold Coast.
      </>
    ),
    name: 'Priya R',
    loc: 'Group Charter',
    photo: 'https://i.pravatar.cc/80?img=49',
  },
  {
    source: 'Google',
    text: (
      <>
        From the moment we boarded to the last glass, the evening was <em>flawless</em>.
        A standard you simply don&rsquo;t expect to find and then can&rsquo;t forget.
      </>
    ),
    name: 'Thomas A',
    loc: 'Private Charter',
    photo: 'https://i.pravatar.cc/80?img=25',
  },
];

const PER_PAGE = 3;
const TOTAL_PAGES = Math.ceil(REVIEWS.length / PER_PAGE);

function StarIcon() {
  return (
    <svg width="13" height="12" viewBox="0 0 18 17" fill="currentColor" aria-hidden="true">
      <path d="M9 0l2.47 6.24L18 6.76l-5 4.52L14.47 17 9 13.52 3.53 17 5 11.28 0 6.76l6.53-.52L9 0z" />
    </svg>
  );
}

export default function Reviews() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
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
        y: 12,
        duration: 0.18,
        ease: 'power2.in',
        onComplete: () => {
          gsap.set(cardsRef.current, { opacity: 0, y: -16 });
          setPage(target);
        },
      });
    },
    [locked, page],
  );

  useGSAP(
    () => {
      gsap.from(headerRef.current!.children, {
        y: 30,
        opacity: 0,
        duration: 0.85,
        stagger: 0.12,
        ease: 'power2.out',
        scrollTrigger: { trigger: headerRef.current, start: 'top 85%', once: true },
      });

      gsap.from(cardsRef.current, {
        y: 50,
        opacity: 0,
        duration: 0.9,
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
        { opacity: 0, y: -16 },
        {
          opacity: 1,
          y: 0,
          duration: 0.38,
          ease: 'power2.out',
          onComplete: () => setLocked(false),
        },
      );
    },
    { dependencies: [page] },
  );

  const visible = REVIEWS.slice(page * PER_PAGE, (page + 1) * PER_PAGE);
  const prevPage = (page - 1 + TOTAL_PAGES) % TOTAL_PAGES;
  const nextPage = (page + 1) % TOTAL_PAGES;

  return (
    <div ref={sectionRef} id="reviews" className="testimonials">
      {/* Header row */}
      <div ref={headerRef} className="testimonials-header">
        <h2 className="testimonials-title">
          Four thousand guests<br />can&rsquo;t be <em>wrong.</em>
        </h2>

        <div className="testimonials-nav">
          <span className="testimonials-count">
            {String(page + 1).padStart(2, '0')} · {String(REVIEWS.length).padStart(2, '0')}
          </span>

          <div className="testimonials-progress">
            {Array.from({ length: TOTAL_PAGES }).map((_, i) => (
              <button
                key={i}
                className={`t-prog-dot${i === page ? ' active' : ''}`}
                aria-label={`Page ${i + 1}`}
                onClick={() => goToPage(i)}
              />
            ))}
          </div>

          <button className="nav-btn" aria-label="Previous" onClick={() => goToPage(prevPage)}>
            <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden="true">
              <path d="M13 5H1M1 5L5 1M1 5L5 9" stroke="currentColor" strokeWidth="1.2" />
            </svg>
          </button>
          <button className="nav-btn" aria-label="Next" onClick={() => goToPage(nextPage)}>
            <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden="true">
              <path d="M1 5H13M13 5L9 1M13 5L9 9" stroke="currentColor" strokeWidth="1.2" />
            </svg>
          </button>
        </div>
      </div>

      {/* Cards grid */}
      <div ref={cardsRef} className="testimonials-grid">
        {visible.map((r, i) => (
          <div key={`${page}-${i}`} className="t-card">
            <div className="t-card-header">
              <div className="t-card-stars">
                {[0, 1, 2, 3, 4].map((s) => <StarIcon key={s} />)}
              </div>
              <span className="t-card-source">{r.source}</span>
            </div>

            <p className="t-card-text">{r.text}</p>

            <div className="t-card-attr">
              <img className="t-card-avatar" src={r.photo} alt={r.name} />
              <div>
                <div className="t-card-name">{r.name}</div>
                <div className="t-card-loc">{r.loc}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
