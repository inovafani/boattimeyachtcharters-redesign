'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Nav from './Nav';
import Footer from './Footer';
import { Icon } from './Shared';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const FALLBACK_IMG = 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1800&q=80';

interface Post {
  id: string;
  slug: string;
  title: string;
  excerpt: string | null;
  content: string | null;
  image_url: string | null;
  categories: string[];
  published_at: string | null;
  created_at: string;
}

function fmtDate(dateStr: string | null | undefined) {
  if (!dateStr) return '';
  return new Date(dateStr).toLocaleDateString('en-AU', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

// ── Hero ──────────────────────────────────────────────────────────────────────

function ArticleHero({ post }: { post: Post }) {
  const heroRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(bgRef.current, { scale: 1.06 }, { scale: 1, duration: 12, ease: 'none' });
      gsap.from(textRef.current!.querySelectorAll('.hr'), {
        y: 28,
        opacity: 0,
        duration: 0.85,
        stagger: 0.1,
        ease: 'power2.out',
        delay: 0.1,
      });
      gsap.to(bgRef.current, {
        yPercent: 20,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });
    },
    { scope: heroRef },
  );

  return (
    <section
      ref={heroRef}
      className="relative overflow-hidden flex items-end"
      style={{ minHeight: '65vh', background: 'var(--navy)' }}
    >
      <div
        ref={bgRef}
        className="absolute inset-0 will-change-transform"
        style={{
          backgroundImage: `url(${post.image_url || FALLBACK_IMG})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to top, rgba(10,22,40,0.97) 0%, rgba(10,22,40,0.6) 45%, rgba(10,22,40,0.15) 100%)',
        }}
      />
      <div
        ref={textRef}
        style={{ position: 'relative', zIndex: 2, padding: '0 48px 72px', maxWidth: 900 }}
      >
        {/* Breadcrumb */}
        <div className="hr" style={{ marginBottom: 20 }}>
          <a
            href="/boattime-news"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              fontFamily: 'var(--font-body)',
              fontSize: 9,
              letterSpacing: '0.28em',
              textTransform: 'uppercase',
              color: 'var(--gold)',
              textDecoration: 'none',
            }}
          >
            <span style={{ transform: 'rotate(180deg)', display: 'inline-flex' }}>
              <Icon name="arrow" size={10} color="var(--gold)" />
            </span>
            Boattime News
          </a>
        </div>

        {/* Categories */}
        <div className="hr" style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 20 }}>
          {(post.categories ?? []).map((cat) => (
            <span
              key={cat}
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 8,
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: 'var(--navy)',
                background: 'var(--gold)',
                padding: '3px 12px',
                fontWeight: 600,
              }}
            >
              {cat}
            </span>
          ))}
        </div>

        {/* Title */}
        <h1
          className="hr"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(32px, 5vw, 62px)',
            fontWeight: 300,
            fontStyle: 'italic',
            color: 'var(--cream)',
            lineHeight: 1.1,
            margin: '0 0 20px',
          }}
        >
          {post.title}
        </h1>

        {/* Date + author */}
        <div
          className="hr"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 16,
            fontFamily: 'var(--font-body)',
            fontSize: 11,
            color: 'rgba(245,240,232,0.55)',
            letterSpacing: '0.12em',
          }}
        >
          <span>{fmtDate(post.published_at ?? post.created_at)}</span>
          <span style={{ width: 1, height: 12, background: 'rgba(201,168,76,0.3)' }} />
          <span>Boattime Yacht Charters</span>
        </div>
      </div>
    </section>
  );
}

// ── Article body ──────────────────────────────────────────────────────────────

function ArticleBody({ post }: { post: Post }) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(ref.current, {
        y: 30,
        opacity: 0,
        duration: 0.9,
        ease: 'power2.out',
        scrollTrigger: { trigger: ref.current, start: 'top 85%', once: true },
      });
    },
    { scope: ref },
  );

  return (
    <div style={{ background: 'var(--navy)' }}>
      <div
        ref={ref}
        style={{ maxWidth: 760, margin: '0 auto', padding: '72px 48px 96px' }}
      >
        {/* Excerpt */}
        {post.excerpt && (
          <p
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(18px, 2.2vw, 24px)',
              fontStyle: 'italic',
              fontWeight: 300,
              color: 'var(--cream)',
              lineHeight: 1.5,
              marginBottom: 40,
              paddingBottom: 40,
              borderBottom: '1px solid var(--border-subtle)',
            }}
          >
            {post.excerpt}
          </p>
        )}

        {/* Content */}
        {post.content ? (
          <div
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 16,
              color: 'rgba(245,240,232,0.78)',
              lineHeight: 1.85,
              whiteSpace: 'pre-wrap',
            }}
          >
            {post.content}
          </div>
        ) : (
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 14,
              color: 'var(--text-muted)',
            }}
          >
            No content yet.
          </p>
        )}

        {/* Back link */}
        <div style={{ marginTop: 64, paddingTop: 40, borderTop: '1px solid var(--border-subtle)' }}>
          <a
            href="/boattime-news"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              fontFamily: 'var(--font-body)',
              fontSize: 10,
              letterSpacing: '0.26em',
              textTransform: 'uppercase',
              color: 'var(--gold)',
              textDecoration: 'none',
              fontWeight: 600,
            }}
          >
            <span style={{ transform: 'rotate(180deg)', display: 'inline-flex' }}>
              <Icon name="arrow" size={10} color="var(--gold)" />
            </span>
            Back to all articles
          </a>
        </div>
      </div>
    </div>
  );
}

// ── Main export ───────────────────────────────────────────────────────────────

export default function ArticlePage({ post }: { post: Post }) {
  return (
    <>
      <Nav />
      <main>
        <ArticleHero post={post} />
        <ArticleBody post={post} />
      </main>
      <Footer />
    </>
  );
}
