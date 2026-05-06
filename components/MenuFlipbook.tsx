'use client';

import { useEffect, useRef, useState } from 'react';

export default function MenuFlipbook({ pdfUrl }: { pdfUrl: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const bookRef = useRef<unknown>(null);
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
          const viewport = page.getViewport({ scale: 2 });
          const canvas = document.createElement('canvas');
          canvas.width = viewport.width;
          canvas.height = viewport.height;
          await page.render({ canvas, viewport }).promise;
          rendered.push(canvas.toDataURL('image/jpeg', 0.9));
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

          book.loadFromImages(rendered);
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

  // ESC / arrow keys for lightbox
  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightbox(null);
      if (e.key === 'ArrowLeft') setLightbox((i) => (i === null ? null : (i - 1 + images.length) % images.length));
      if (e.key === 'ArrowRight') setLightbox((i) => (i === null ? null : (i + 1) % images.length));
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightbox, images.length]);

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
        .fb-mobile-btn:hover { opacity: 0.85 !important; }
      `}</style>

      {/* ── Lightbox overlay ── */}
      {lightbox !== null && (
        <div onClick={() => setLightbox(null)} style={{ position: 'fixed', inset: 0, zIndex: 9999, background: 'rgba(0,0,0,0.96)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <button
            onClick={(e) => { e.stopPropagation(); setLightbox((lightbox - 1 + images.length) % images.length); }}
            aria-label="Previous"
            style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '50%', width: 44, height: 44, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2 }}
          >
            <svg width="16" height="16" viewBox="0 0 14 10" fill="none"><path d="M13 5H1M1 5L5 1M1 5L5 9" stroke="white" strokeWidth="1.5"/></svg>
          </button>

          <img
            src={images[lightbox]}
            onClick={(e) => e.stopPropagation()}
            style={{ maxWidth: '96vw', maxHeight: '88vh', objectFit: 'contain', userSelect: 'none' }}
            alt=""
          />

          <button
            onClick={(e) => { e.stopPropagation(); setLightbox((lightbox + 1) % images.length); }}
            aria-label="Next"
            style={{ position: 'absolute', right: 12, top: '50%', transform: 'translateY(-50%)', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '50%', width: 44, height: 44, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2 }}
          >
            <svg width="16" height="16" viewBox="0 0 14 10" fill="none"><path d="M1 5H13M13 5L9 1M13 5L9 9" stroke="white" strokeWidth="1.5"/></svg>
          </button>

          <button onClick={(e) => { e.stopPropagation(); setLightbox(null); }} aria-label="Close" style={{ position: 'absolute', top: 16, right: 16, background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '50%', width: 40, height: 40, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: 18, zIndex: 2 }}>✕</button>

          <div style={{ position: 'absolute', bottom: 20, left: '50%', transform: 'translateX(-50%)', color: 'rgba(255,255,255,0.4)', fontFamily: 'sans-serif', fontSize: 11, letterSpacing: '0.2em' }}>
            {lightbox + 1} / {images.length}
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

        {/* ── MOBILE view: page grid + fullscreen CTA ── */}
        {status === 'ready' && isMobile && (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20 }}>
            {/* First page preview */}
            {images[0] && (
              <img
                src={images[0]}
                alt="Menu cover"
                onClick={() => setLightbox(0)}
                style={{ width: '100%', maxWidth: 340, boxShadow: '0 8px 32px rgba(0,0,0,0.18)', cursor: 'zoom-in' }}
              />
            )}
            {/* Big fullscreen CTA */}
            <button
              className="fb-mobile-btn"
              onClick={() => setLightbox(0)}
              style={{ display: 'flex', alignItems: 'center', gap: 10, background: '#0A1628', color: '#C9A84C', border: '1px solid #C9A84C', fontFamily: 'sans-serif', fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase', fontWeight: 600, padding: '14px 28px', cursor: 'pointer', width: '100%', maxWidth: 340, justifyContent: 'center' }}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 3 21 3 21 9"/><polyline points="9 21 3 21 3 15"/>
                <line x1="21" y1="3" x2="14" y2="10"/><line x1="3" y1="21" x2="10" y2="14"/>
              </svg>
              Browse Full Menu · {pageCount} pages
            </button>
            <p style={{ fontFamily: 'sans-serif', fontSize: 10, color: '#aaa', letterSpacing: '0.12em', textTransform: 'uppercase', margin: 0 }}>
              Tap to open full screen — pinch to zoom
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
                  onClick={() => setLightbox(currentPage)}
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
