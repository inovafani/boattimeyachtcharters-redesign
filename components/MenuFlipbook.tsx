'use client';

import { useEffect, useRef, useState } from 'react';

export default function MenuFlipbook({ pdfUrl }: { pdfUrl: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const bookRef = useRef<unknown>(null);
  const [status, setStatus] = useState<'loading' | 'ready' | 'error'>('loading');
  const [currentPage, setCurrentPage] = useState(0);
  const [pageCount, setPageCount] = useState(0);

  useEffect(() => {
    if (!containerRef.current) return;
    let cancelled = false;

    async function init() {
      try {
        const pdfjs = await import('pdfjs-dist');
        pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

        const pdf = await pdfjs.getDocument(pdfUrl).promise;
        if (cancelled) return;

        const numPages = pdf.numPages;
        const images: string[] = [];

        for (let i = 1; i <= numPages; i++) {
          if (cancelled) return;
          const page = await pdf.getPage(i);
          const viewport = page.getViewport({ scale: 2 });
          const canvas = document.createElement('canvas');
          canvas.width = viewport.width;
          canvas.height = viewport.height;
          await page.render({ canvas, viewport }).promise;
          images.push(canvas.toDataURL('image/jpeg', 0.9));
        }

        if (cancelled || !containerRef.current) return;

        const { PageFlip } = await import('page-flip');
        const el = containerRef.current;

        const containerWidth = el.parentElement?.clientWidth ?? 1100;
        const pageW = Math.min(500, Math.floor((containerWidth - 120) / 2));
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

        book.loadFromImages(images);

        book.on('flip', (e: unknown) => {
          setCurrentPage((e as { data: number }).data);
        });

        bookRef.current = book;
        setPageCount(numPages);
        if (!cancelled) setStatus('ready');
      } catch (err) {
        console.error('[MenuFlipbook]', err);
        if (!cancelled) setStatus('error');
      }
    }

    init();

    return () => {
      cancelled = true;
    };
  }, [pdfUrl]);

  const flipPrev = () => (bookRef.current as { flipPrev: (c: string) => void } | null)?.flipPrev('top');
  const flipNext = () => (bookRef.current as { flipNext: (c: string) => void } | null)?.flipNext('top');

  const arrowBtn: React.CSSProperties = {
    width: 48,
    height: 48,
    borderRadius: '50%',
    border: '1px solid rgba(10,22,40,0.2)',
    background: 'rgba(10,22,40,0.08)',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    transition: 'background 0.2s, border-color 0.2s',
  };

  return (
    <section style={{ background: '#f2f2f2', padding: '60px 20px' }}>
      <style>{`
        @keyframes flipbook-spin { to { transform: rotate(360deg); } }
        .fb-arrow:hover { background: rgba(10,22,40,0.16) !important; border-color: rgba(10,22,40,0.4) !important; }
      `}</style>

      <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', minHeight: 400 }}>

        {/* Loading state — matches original "LOADING PDF SERVICE..." */}
        {status === 'loading' && (
          <div style={{
            position: 'absolute', inset: 0,
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center', gap: 16,
          }}>
            <div style={{
              width: 36, height: 36, borderRadius: '50%',
              border: '3px solid #ddd', borderTopColor: '#999',
              animation: 'flipbook-spin 0.8s linear infinite',
            }} />
            <p style={{
              fontFamily: 'sans-serif', fontSize: 11,
              letterSpacing: '0.18em', textTransform: 'uppercase',
              color: '#888', margin: 0,
            }}>
              LOADING PDF SERVICE...
            </p>
          </div>
        )}

        {/* Error state */}
        {status === 'error' && (
          <div style={{ textAlign: 'center', padding: '80px 20px' }}>
            <p style={{ fontFamily: 'sans-serif', fontSize: 14, color: '#666' }}>
              Menu unavailable. Please{' '}
              <a href="/#inquiry" style={{ color: '#0A1628', textDecoration: 'underline' }}>contact us</a>{' '}
              for a copy.
            </p>
          </div>
        )}

        {/* Book + navigation */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 24,
          opacity: status === 'ready' ? 1 : 0,
          transition: 'opacity 0.4s ease',
          visibility: status === 'ready' ? 'visible' : 'hidden',
        }}>
          <button
            onClick={flipPrev}
            aria-label="Previous page"
            className="fb-arrow"
            style={arrowBtn}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M10 3L5 8L10 13" stroke="#0A1628" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <div ref={containerRef} />

          <button
            onClick={flipNext}
            aria-label="Next page"
            className="fb-arrow"
            style={arrowBtn}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M6 3L11 8L6 13" stroke="#0A1628" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        {/* Page counter */}
        {status === 'ready' && pageCount > 0 && (
          <p style={{
            textAlign: 'center',
            marginTop: 24,
            fontFamily: 'sans-serif',
            fontSize: 11,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: '#999',
          }}>
            {currentPage + 1} / {pageCount}
          </p>
        )}
      </div>
    </section>
  );
}
