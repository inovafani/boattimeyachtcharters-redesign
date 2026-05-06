'use client';

import { useRef, useState, useCallback } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const REVIEWS = [
  {
    name: 'Alex',
    rating: 5,
    text: "Easily a must-do attraction. Never imagined I'd see so many whales and even a pod of dolphins. Excellent service — friendly, knowledgeable staff that made us feel welcome the whole time.",
    when: 'a month ago',
    photo: 'https://i.pravatar.cc/80?img=11',
  },
  {
    name: 'Linda Bernhardt',
    rating: 5,
    text: "An AMAZING day. Staff were brilliant and my grandchildren (6 and 4) were very excited. Loved the boat, the commentary, the crew. Five stars all round — perfect day out.",
    when: '2 months ago',
    photo: 'https://i.pravatar.cc/80?img=47',
  },
  {
    name: 'Helen C R',
    rating: 5,
    text: "We watched a whale breach fifty times. At the end of the trip we saw three whales breach and swim together. The trip was worthy, definitely — good seats up top, professional crew.",
    when: '3 months ago',
    photo: 'https://i.pravatar.cc/80?img=44',
  },
  {
    name: 'James Nguyen',
    rating: 5,
    text: "Booked for my wife's birthday and it exceeded every expectation. The sunset over the Broadwater was otherworldly. Worth every cent.",
    when: '2 months ago',
    photo: 'https://i.pravatar.cc/80?img=13',
  },
  {
    name: 'Sarah Mitchell',
    rating: 5,
    text: "We used Sun Goddess for our company Christmas party — 80 guests, three decks, completely seamless. The catering team were exceptional.",
    when: '4 months ago',
    photo: 'https://i.pravatar.cc/80?img=48',
  },
  {
    name: 'Emily & Tom Barker',
    rating: 5,
    text: "Got married on the foredeck at golden hour. The crew made the whole day feel completely effortless. Every single guest still talks about it.",
    when: '5 months ago',
    photo: 'https://i.pravatar.cc/80?img=36',
  },
  {
    name: 'Robert Svensson',
    rating: 5,
    text: "We saw over 20 humpbacks including a full breach ten metres from the bow. Absolutely breathtaking. Best day on the water I've had.",
    when: '1 month ago',
    photo: 'https://i.pravatar.cc/80?img=3',
  },
  {
    name: 'Diane Kowalski',
    rating: 5,
    text: "Hired for grandfather's 80th — three generations on deck. The crew treated everyone like absolute royalty. A perfect afternoon.",
    when: '3 months ago',
    photo: 'https://i.pravatar.cc/80?img=56',
  },
  {
    name: 'Marcus Webb',
    rating: 5,
    text: "Visiting from the UK and chose this on a whim — best decision of the trip. The Broadwater at sunset is something I will never forget.",
    when: '6 months ago',
    photo: 'https://i.pravatar.cc/80?img=7',
  },
  {
    name: 'Gleyn Hernandez',
    rating: 5,
    text: "Hands down the best whale watching in south east Queensland. Informative without overwhelming — we watched them breach several times. Unforgettable.",
    when: '2 months ago',
    photo: 'https://i.pravatar.cc/80?img=15',
  },
  {
    name: 'Priya R',
    rating: 5,
    text: "The crew went above and beyond for our group. Every detail was thought of before we asked. Truly world-class service on the Gold Coast.",
    when: '4 months ago',
    photo: 'https://i.pravatar.cc/80?img=49',
  },
  {
    name: 'Thomas A',
    rating: 5,
    text: "From the moment we boarded to the last glass, the evening was flawless. A standard you simply don't expect to find and then can't forget.",
    when: '5 months ago',
    photo: 'https://i.pravatar.cc/80?img=25',
  },
];

const PER_PAGE   = 3;
const TOTAL_PAGES = Math.ceil(REVIEWS.length / PER_PAGE);

function StarIcon() {
  return (
    <svg width="13" height="12" viewBox="0 0 18 17" fill="currentColor" aria-hidden="true">
      <path d="M9 0l2.47 6.24L18 6.76l-5 4.52L14.47 17 9 13.52 3.53 17 5 11.28 0 6.76l6.53-.52L9 0z" />
    </svg>
  );
}

function GoogleLogo() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
    </svg>
  );
}

export default function Reviews() {
  const sectionRef    = useRef<HTMLDivElement>(null);
  const headerRef     = useRef<HTMLDivElement>(null);
  const cardsRef      = useRef<HTMLDivElement>(null);
  const isFirstRender = useRef(true);

  const [page, setPage]     = useState(0);
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
      if (isFirstRender.current) { isFirstRender.current = false; return; }
      gsap.fromTo(
        cardsRef.current,
        { opacity: 0, y: -16 },
        { opacity: 1, y: 0, duration: 0.38, ease: 'power2.out', onComplete: () => setLocked(false) },
      );
    },
    { dependencies: [page] },
  );

  const visible  = REVIEWS.slice(page * PER_PAGE, (page + 1) * PER_PAGE);
  const prevPage = (page - 1 + TOTAL_PAGES) % TOTAL_PAGES;
  const nextPage = (page + 1) % TOTAL_PAGES;

  return (
    <div ref={sectionRef} id="reviews" className="testimonials">
      <div ref={headerRef} className="testimonials-header">
        <h2 className="testimonials-title">
          1,341 guests<br />can&rsquo;t be <em>wrong.</em>
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

      <div ref={cardsRef} className="testimonials-grid">
        {visible.map((r, i) => (
          <div key={`${page}-${i}`} className="t-card">
            <div className="t-card-header">
              <div className="t-card-stars">
                {[0, 1, 2, 3, 4].map((s) => <StarIcon key={s} />)}
              </div>
              <span className="t-card-source" style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                <GoogleLogo /> Google
              </span>
            </div>

            <p className="t-card-text">{r.text}</p>

            <div className="t-card-attr">
              <img className="t-card-avatar" src={r.photo} alt={r.name} referrerPolicy="no-referrer" />
              <div>
                <div className="t-card-name">{r.name}</div>
                <div className="t-card-loc">{r.when}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
