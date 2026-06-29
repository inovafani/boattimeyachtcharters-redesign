'use client';

import { useEffect, useState, use } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';

interface ViewRow {
  id: string;
  post_slug: string;
  country: string | null;
  region: string | null;
  city: string | null;
  viewed_at: string;
}

export default function AdminPostViews({ params }: { params: Promise<{ id: string }> }) {
  const router = useRouter();
  const { id } = use(params);

  const [title, setTitle] = useState('');
  const [rows, setRows] = useState<ViewRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function load() {
      console.log('[AdminPostViews] loading', id);
      const supabase = createClient();

      // 1. Get the article (we need its slug + title)
      const { data: post, error: postErr } = await supabase
        .from('posts')
        .select('title, slug')
        .eq('id', id)
        .single();

      if (postErr || !post) {
        setError('Could not load this article.');
        setLoading(false);
        return;
      }
      setTitle(post.title ?? '');

      // 2. Get every recorded visit for that article, newest first
      const { data: views, error: viewsErr } = await supabase
        .from('post_views')
        .select('id, post_slug, country, region, city, viewed_at')
        .eq('post_slug', post.slug)
        .order('viewed_at', { ascending: false });

      if (viewsErr) {
        // Most likely the post_views table hasn't been created yet
        setError(
          'Could not load visitor data. Make sure the post_views table exists in Supabase (run the setup SQL).',
        );
        setLoading(false);
        return;
      }

      setRows(views ?? []);
      setLoading(false);
      console.log('[AdminPostViews] visits loaded', views?.length);
    }

    load();
  }, [id]);

  return (
    <div style={{ minHeight: '100vh', background: 'var(--navy)' }}>
      {/* Top bar */}
      <div
        style={{
          borderBottom: '1px solid var(--border-subtle)',
          padding: '20px 48px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 22, letterSpacing: '0.02em' }}>
            <span style={{ color: 'var(--gold)' }}>Boat</span>
            <span style={{ color: 'var(--cream)' }}>Time</span>
          </div>
          <div
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 9,
              letterSpacing: '0.28em',
              textTransform: 'uppercase',
              color: 'var(--gold)',
            }}
          >
            News CMS
          </div>
        </div>
        <button
          onClick={() => router.push('/admin/news')}
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 10,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'var(--text-muted)',
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          ← Back to articles
        </button>
      </div>

      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '48px 48px' }}>
        {/* Header */}
        <div style={{ marginBottom: 40 }}>
          <div
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 9,
              letterSpacing: '0.32em',
              textTransform: 'uppercase',
              color: 'var(--gold)',
              marginBottom: 8,
            }}
          >
            Visitor details
          </div>
          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 32,
              fontStyle: 'italic',
              fontWeight: 300,
              color: 'var(--cream)',
              margin: 0,
            }}
          >
            {title || 'Article'}
          </h1>
          {!loading && !error && (
            <div
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 13,
                color: 'var(--text-muted)',
                marginTop: 10,
              }}
            >
              {rows.length.toLocaleString()} recorded visit{rows.length === 1 ? '' : 's'}
            </div>
          )}
        </div>

        {loading ? (
          <div style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--text-muted)' }}>Loading…</div>
        ) : error ? (
          <div
            style={{
              border: '1px solid rgba(224,112,112,0.3)',
              padding: '24px',
              fontFamily: 'var(--font-body)',
              fontSize: 13,
              color: '#e07070',
              lineHeight: 1.6,
            }}
          >
            {error}
          </div>
        ) : rows.length === 0 ? (
          <div
            style={{
              border: '1px solid var(--border-subtle)',
              padding: '64px',
              textAlign: 'center',
              fontFamily: 'var(--font-body)',
              fontSize: 14,
              color: 'var(--text-muted)',
              lineHeight: 1.7,
            }}
          >
            No visits recorded yet.
            <br />
            Visitor locations are captured on the live site (Vercel) — opening articles from
            localhost shows up as &ldquo;Unknown&rdquo;.
          </div>
        ) : (
          <div style={{ border: '1px solid var(--border-subtle)', overflow: 'hidden' }}>
            {/* Table head */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '48px 120px 90px 1fr 90px 1fr',
                padding: '12px 24px',
                borderBottom: '1px solid var(--border-subtle)',
                background: 'rgba(201,168,76,0.04)',
              }}
            >
              {['#', 'Date', 'Time', 'City', 'Country', 'Visit ID'].map((h) => (
                <div
                  key={h}
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: 9,
                    letterSpacing: '0.26em',
                    textTransform: 'uppercase',
                    color: 'var(--gold)',
                    fontWeight: 600,
                  }}
                >
                  {h}
                </div>
              ))}
            </div>

            {rows.map((row, i) => {
              const d = new Date(row.viewed_at);
              const date = d.toLocaleDateString('en-AU', { day: 'numeric', month: 'short', year: 'numeric' });
              const time = d.toLocaleTimeString('en-AU', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
              const cityLabel = [row.city, row.region].filter(Boolean).join(', ') || 'Unknown';
              const cell: React.CSSProperties = {
                fontFamily: 'var(--font-body)',
                fontSize: 13,
                color: 'var(--cream)',
                letterSpacing: '0.02em',
              };
              return (
                <div
                  key={row.id}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '48px 120px 90px 1fr 90px 1fr',
                    padding: '14px 24px',
                    borderBottom: i < rows.length - 1 ? '1px solid var(--border-subtle)' : 'none',
                    alignItems: 'center',
                  }}
                >
                  <div style={{ ...cell, color: 'var(--text-muted)' }}>{rows.length - i}</div>
                  <div style={cell}>{date}</div>
                  <div style={cell}>{time}</div>
                  <div style={cell}>{cityLabel}</div>
                  <div style={cell}>{row.country || 'Unknown'}</div>
                  <div
                    style={{ ...cell, color: 'var(--text-muted)', fontSize: 11, fontFamily: 'monospace' }}
                    title={row.id}
                  >
                    {row.id.slice(0, 8)}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
