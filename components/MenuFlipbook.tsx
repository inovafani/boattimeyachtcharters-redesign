'use client';

import { useEffect, useRef, useState } from 'react';

export default function MenuFlipbook({ pdfUrl }: { pdfUrl: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const stripRef = useRef<HTMLDivElement>(null);
  const bookRef = useRef<unknown>(null);
  const touchStartX = useRef<number>(0);
  const [status, setStatus] = useState<'loading' | 'ready' | 'error'>('loading');
  const [currentPage, setCurrentPage] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const [images, setImages] = useState<string[]>([]);
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 640);
  }, []);

  useEffect(() => {
    let cancelled = false;

    async function init() {
      try {
        const pdfjs = await import('pdfjs-dist');
        pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

        const pdf = await pdfjs.getDocument(pdfUrl).promise;
        if (cancelled) return;

        const numPages = pdf.numPages;
        const rendered: string[] = [];

        for (let i = 1; i <= numPages; i++) {
          if (cancelled) return;
          const page = await pdf.getPage(i);
          // 3x keeps a full-screen spread sharp on Retina; phones only ever show one page
          const viewport = page.getViewport({ scale: window.innerWidth < 640 ? 2 : 3 });
          const canvas = document.createElement('canvas');
          canvas.width = viewport.width;
          canvas.height = viewport.height;
          await page.render({ canvas, viewport }).promise;
          rendered.push(canvas.toDataURL('image/jpeg', 0.92));
        }

        if (cancelled) return;

        setImages(rendered);
        setPageCount(numPages);

        // Only mount the flipbook on desktop
        if (window.innerWidth >= 640 && containerRef.current) {
          const { PageFlip } = await import('page-flip');
          const el = containerRef.current;
          const containerWidth = el.parentElement?.parentElement?.clientWidth ?? 1100;
          const pageW = Math.min(500, Math.floor((containerWidth - 160) / 2));
          const pageH = Math.round(pageW * 1.414);

          const book = new PageFlip(el, {
            width: pageW,
            height: pageH,
            size: 'fixed' as const,
            showCover: true,
            mobileScrollSupport: false,
            swipeDistance: 30,
            clickEventForward: false,
            drawShadow: true,
            flippingTime: 700,
          });

          const pages = rendered.map((src) => {
            const pageEl = document.createElement('div');
            pageEl.style.background = '#fff';
            const img = document.createElement('img');
            img.src = src;
            img.alt = '';
            img.draggable = false;
            img.style.cssText = 'width:100%;height:100%;object-fit:cover;display:block;';
            pageEl.appendChild(img);
            return pageEl;
          });
          book.loadFromHTML(pages);
          book.on('flip', (e: unknown) => {
            setCurrentPage((e as { data: number }).data);
          });
          bookRef.current = book;
        }

        if (!cancelled) setStatus('ready');
      } catch (err) {
        console.error('[MenuFlipbook]', err);
        if (!cancelled) setStatus('error');
      }
    }

    init();
    return () => { cancelled = true; };
  }, [pdfUrl]);

  // Full screen shows the same spread as the book: cover alone, then pairs (1-2, 3-4, …)
  const spread = !isMobile;
  const spreadStart = (i: number) => (spread && i > 0 && i % 2 === 0 ? i - 1 : i);
  const shown = lightbox === null ? [] : spread && lightbox > 0 ? [lightbox, lightbox + 1].filter((i) => i < images.length) : [lightbox];
  const canPrev = lightbox !== null && lightbox > 0;
  const canNext = shown.length > 0 && shown[shown.length - 1] < images.length - 1;

  const step = (dir: 1 | -1) =>
    setLightbox((s) => {
      if (s === null) return s;
      const next = !spread ? s + dir : dir > 0 ? (s === 0 ? 1 : s + 2) : s <= 1 ? 0 : s - 2;
      return next < 0 || next >= images.length ? s : next;
    });

  const openLightbox = (i: number) => setLightbox(spreadStart(i));

  const closeLightbox = () => {
    if (lightbox !== null) {
      (bookRef.current as { turnToPage: (p: number) => void } | null)?.turnToPage(lightbox);
      stripRef.current?.scrollTo({ left: lightbox * stripRef.current.clientWidth });
      setCurrentPage(lightbox);
    }
    setLightbox(null);
  };

  // ESC / arrow keys for lightbox
  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') step(-1);
      if (e.key === 'ArrowRight') step(1);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  });

  const flipPrev = () => (bookRef.current as { flipPrev: (c: string) => void } | null)?.flipPrev('top');
  const flipNext = () => (bookRef.current as { flipNext: (c: string) => void } | null)?.flipNext('top');

  const arrowBtn: React.CSSProperties = {
    width: 48, height: 48, borderRadius: '50%',
    border: '1px solid rgba(10,22,40,0.2)', background: 'rgba(10,22,40,0.08)',
    cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
    flexShrink: 0, transition: 'background 0.2s, border-color 0.2s',
  };

  return (
    <section style={{ background: '#f2f2f2', padding: '60px 20px', overflow: 'hidden' }}>
      <style>{`
        @keyframes flipbook-spin { to { transform: rotate(360deg); } }
        .fb-arrow:hover { background: rgba(10,22,40,0.16) !important; border-color: rgba(10,22,40,0.4) !important; }
        .fb-fs-btn:hover { background: rgba(10,22,40,0.12) !important; }
        .fb-mobile-btn { display: flex; align-items: center; justify-content: center; gap: 10px; width: 100%; max-width: 340px; padding: 16px 24px; border: none; border-radius: 10px; background: var(--bl-cta, #0A1628); color: #fff; font-family: sans-serif; font-size: 12px; font-weight: 600; letter-spacing: 0.12em; text-transform: uppercase; cursor: pointer; box-shadow: 0 8px 24px var(--bl-cta-glow, rgba(10,22,40,0.25)); transition: opacity 0.2s ease; }
        .fb-mobile-btn:hover { opacity: 0.88; }
        .fb-strip { display: flex; width: 100%; overflow-x: auto; scroll-snap-type: x mandatory; scrollbar-width: none; box-shadow: 0 8px 32px rgba(0,0,0,0.18); background: #fff; }
        .fb-strip::-webkit-scrollbar { display: none; }
        .fb-strip img { flex: 0 0 100%; width: 100%; display: block; scroll-snap-align: center; cursor: zoom-in; user-select: none; }
        .fb-arrow:disabled { opacity: 0.3; cursor: default; }
        .fb-lb-btn { position: absolute; z-index: 2; display: flex; align-items: center; justify-content: center; border-radius: 50%; cursor: pointer; border: none; background: #fff; color: #0A1628; box-shadow: 0 4px 18px rgba(0,0,0,0.45); transition: transform 0.2s ease, opacity 0.2s ease; }
        .fb-lb-btn:hover:not(:disabled) { transform: translateY(-50%) scale(1.06); }
        .fb-lb-btn:disabled { opacity: 0.25; cursor: default; }
        .fb-lb-nav { top: 50%; transform: translateY(-50%); width: 56px; height: 56px; }
        .fb-lb-close { top: 20px; right: 20px; width: 44px; height: 44px; background: rgba(255,255,255,0.14); color: #fff; box-shadow: none; }
        @media (min-width: 640px) { .fb-lb-prev { left: 28px; } .fb-lb-next { right: 28px; } }
        @media (max-width: 639px) { .fb-lb-prev { left: 8px; } .fb-lb-next { right: 8px; } .fb-lb-nav { width: 44px; height: 44px; } }
      `}</style>

      {/* ── Lightbox overlay ── */}
      {lightbox !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Menu, full screen"
          onClick={closeLightbox}
          onTouchStart={(e) => { touchStartX.current = e.touches[0].clientX; }}
          onTouchEnd={(e) => {
            const diff = touchStartX.current - e.changedTouches[0].clientX;
            if (Math.abs(diff) > 40) step(diff > 0 ? 1 : -1);
          }}
          style={{ position: 'fixed', inset: 0, zIndex: 9999, background: 'rgba(5,10,20,0.96)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
          <button className="fb-lb-btn fb-lb-nav fb-lb-prev" disabled={!canPrev} onClick={(e) => { e.stopPropagation(); step(-1); }} aria-label="Previous page">
            <svg width="20" height="20" viewBox="0 0 16 16" fill="none"><path d="M10 3L5 8L10 13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </button>

          <div onClick={(e) => e.stopPropagation()} style={{ display: 'flex', boxShadow: '0 20px 60px rgba(0,0,0,0.5)' }}>
            {shown.map((i) => (
              <img
                key={i}
                src={images[i]}
                alt={`Menu page ${i + 1}`}
                draggable={false}
                style={{ display: 'block', maxHeight: '90vh', maxWidth: shown.length > 1 ? 'calc(50vw - 80px)' : spread ? 'calc(100vw - 180px)' : '84vw', width: 'auto', height: 'auto', background: '#fff', userSelect: 'none' }}
              />
            ))}
          </div>

          <button className="fb-lb-btn fb-lb-nav fb-lb-next" disabled={!canNext} onClick={(e) => { e.stopPropagation(); step(1); }} aria-label="Next page">
            <svg width="20" height="20" viewBox="0 0 16 16" fill="none"><path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </button>

          <button className="fb-lb-btn fb-lb-close" onClick={(e) => { e.stopPropagation(); closeLightbox(); }} aria-label="Close full screen">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 3L13 13M13 3L3 13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg>
          </button>

          <div className="fb-lb-count" style={{ position: 'absolute', bottom: 18, left: '50%', transform: 'translateX(-50%)', color: 'rgba(255,255,255,0.6)', fontFamily: 'sans-serif', fontSize: 11, letterSpacing: '0.2em' }}>
            {shown.map((i) => i + 1).join('–')} / {images.length}
          </div>
        </div>
      )}

      <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', minHeight: 400 }}>

        {/* Loading */}
        {status === 'loading' && (
          <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 16 }}>
            <div style={{ width: 36, height: 36, borderRadius: '50%', border: '3px solid #ddd', borderTopColor: '#999', animation: 'flipbook-spin 0.8s linear infinite' }} />
            <p style={{ fontFamily: 'sans-serif', fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#888', margin: 0 }}>
              LOADING PDF SERVICE...
            </p>
          </div>
        )}

        {/* Error */}
        {status === 'error' && (
          <div style={{ textAlign: 'center', padding: '80px 20px' }}>
            <p style={{ fontFamily: 'sans-serif', fontSize: 14, color: '#666' }}>
              Menu unavailable. Please{' '}
              <a href="/#inquiry" style={{ color: '#0A1628', textDecoration: 'underline' }}>contact us</a>{' '}
              for a copy.
            </p>
          </div>
        )}

        {/* ── MOBILE view: swipeable pages + fullscreen CTA ── */}
        {status === 'ready' && isMobile && (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20 }}>
            {/* Native scroll-snap does the swiping; we only read which page is in view */}
            <div style={{ width: '100%', maxWidth: 340, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 14 }}>
              <div
                ref={stripRef}
                className="fb-strip"
                onScroll={(e) => setCurrentPage(Math.round(e.currentTarget.scrollLeft / e.currentTarget.clientWidth))}
              >
                {images.map((src, i) => (
                  <img key={i} src={src} alt={`Menu page ${i + 1}`} draggable={false} onClick={() => openLightbox(i)} />
                ))}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
                <button
                  className="fb-arrow"
                  aria-label="Previous page"
                  disabled={currentPage === 0}
                  onClick={() => stripRef.current?.scrollTo({ left: (currentPage - 1) * stripRef.current.clientWidth, behavior: 'smooth' })}
                  style={{ ...arrowBtn, width: 40, height: 40 }}
                >
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M10 3L5 8L10 13" stroke="#0A1628" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </button>
                <p style={{ fontFamily: 'sans-serif', fontSize: 11, letterSpacing: '0.15em', color: '#666', margin: 0, minWidth: 48, textAlign: 'center' }}>
                  {currentPage + 1} / {pageCount}
                </p>
                <button
                  className="fb-arrow"
                  aria-label="Next page"
                  disabled={currentPage >= pageCount - 1}
                  onClick={() => stripRef.current?.scrollTo({ left: (currentPage + 1) * stripRef.current.clientWidth, behavior: 'smooth' })}
                  style={{ ...arrowBtn, width: 40, height: 40 }}
                >
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M6 3L11 8L6 13" stroke="#0A1628" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </button>
              </div>
            </div>
            {/* Big fullscreen CTA */}
            <button
              className="fb-mobile-btn"
              onClick={() => openLightbox(currentPage)}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 3 21 3 21 9"/><polyline points="9 21 3 21 3 15"/>
                <line x1="21" y1="3" x2="14" y2="10"/><line x1="3" y1="21" x2="10" y2="14"/>
              </svg>
              Browse Full Menu · {pageCount} pages
            </button>
            <p style={{ fontFamily: 'sans-serif', fontSize: 10, color: '#888', letterSpacing: '0.12em', textTransform: 'uppercase', margin: 0, textAlign: 'center' }}>
              Swipe to turn pages — tap to open full screen
            </p>
          </div>
        )}

        {/* ── DESKTOP view: flipbook ── */}
        {!isMobile && (
          <>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 24, opacity: status === 'ready' ? 1 : 0, transition: 'opacity 0.4s ease', visibility: status === 'ready' ? 'visible' : 'hidden' }}>
              <button onClick={flipPrev} aria-label="Previous page" className="fb-arrow" style={arrowBtn}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M10 3L5 8L10 13" stroke="#0A1628" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              <div ref={containerRef} />

              <button onClick={flipNext} aria-label="Next page" className="fb-arrow" style={arrowBtn}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M6 3L11 8L6 13" stroke="#0A1628" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>

            {status === 'ready' && pageCount > 0 && (
              <div style={{ textAlign: 'center', marginTop: 24, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 20 }}>
                <p style={{ fontFamily: 'sans-serif', fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#999', margin: 0 }}>
                  {currentPage + 1} / {pageCount}
                </p>
                <button
                  className="fb-fs-btn"
                  onClick={() => openLightbox(currentPage)}
                  style={{ display: 'inline-flex', alignItems: 'center', gap: 7, fontFamily: 'sans-serif', fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#555', background: 'rgba(10,22,40,0.06)', border: '1px solid rgba(10,22,40,0.15)', padding: '8px 16px', cursor: 'pointer', borderRadius: 1 }}
                >
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="15 3 21 3 21 9"/><polyline points="9 21 3 21 3 15"/>
                    <line x1="21" y1="3" x2="14" y2="10"/><line x1="3" y1="21" x2="10" y2="14"/>
                  </svg>
                  Full Screen
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}
