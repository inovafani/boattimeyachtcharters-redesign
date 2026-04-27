'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';

interface Post {
  id: string;
  title: string;
  slug: string;
  categories: string[];
  published: boolean;
  published_at: string | null;
  created_at: string;
}

export default function AdminNewsList() {
  const router = useRouter();
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  async function fetchPosts() {
    console.log('[AdminNewsList] fetching posts');
    const supabase = createClient();
    const { data, error } = await supabase
      .from('posts')
      .select('id, title, slug, categories, published, published_at, created_at')
      .order('created_at', { ascending: false });

    if (error) {
      console.log('[AdminNewsList] fetch error', error.message);
    } else {
      setPosts(data ?? []);
    }
    setLoading(false);
    console.log('[AdminNewsList] posts loaded', data?.length);
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  async function togglePublished(post: Post) {
    const supabase = createClient();
    const nowPublished = !post.published;
    const { error } = await supabase
      .from('posts')
      .update({
        published: nowPublished,
        published_at: nowPublished ? new Date().toISOString() : null,
      })
      .eq('id', post.id);

    if (!error) fetchPosts();
  }

  async function deletePost(id: string) {
    if (!confirm('Delete this article? This cannot be undone.')) return;
    const supabase = createClient();
    await supabase.from('posts').delete().eq('id', id);
    fetchPosts();
  }

  async function handleSignOut() {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push('/admin');
  }

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
          <div
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 600,
              fontSize: 22,
              letterSpacing: '0.02em',
            }}
          >
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
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <a
            href="/boattime-news"
            target="_blank"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 10,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'var(--text-muted)',
              textDecoration: 'none',
            }}
          >
            View site
          </a>
          <button
            onClick={handleSignOut}
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
            Sign out
          </button>
        </div>
      </div>

      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '48px 48px' }}>
        {/* Header */}
        <div
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 40 }}
        >
          <div>
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
              Articles
            </div>
            <h1
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 36,
                fontStyle: 'italic',
                fontWeight: 300,
                color: 'var(--cream)',
                margin: 0,
              }}
            >
              News dashboard
            </h1>
          </div>
          <button
            onClick={() => router.push('/admin/news/new')}
            style={{
              padding: '12px 28px',
              background: 'var(--gold)',
              color: 'var(--navy)',
              border: 'none',
              fontFamily: 'var(--font-body)',
              fontSize: 10,
              letterSpacing: '0.24em',
              textTransform: 'uppercase',
              fontWeight: 600,
              cursor: 'pointer',
            }}
          >
            + New article
          </button>
        </div>

        {/* Table */}
        {loading ? (
          <div style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--text-muted)' }}>
            Loading…
          </div>
        ) : posts.length === 0 ? (
          <div
            style={{
              border: '1px solid var(--border-subtle)',
              padding: '64px',
              textAlign: 'center',
              fontFamily: 'var(--font-body)',
              fontSize: 14,
              color: 'var(--text-muted)',
            }}
          >
            No articles yet. Click &ldquo;+ New article&rdquo; to create your first one.
          </div>
        ) : (
          <div style={{ border: '1px solid var(--border-subtle)', overflow: 'hidden' }}>
            {/* Table head */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 180px 120px 120px',
                padding: '12px 24px',
                borderBottom: '1px solid var(--border-subtle)',
                background: 'rgba(201,168,76,0.04)',
              }}
            >
              {['Title', 'Categories', 'Status', 'Actions'].map((h) => (
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

            {posts.map((post, i) => (
              <div
                key={post.id}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 180px 120px 120px',
                  padding: '18px 24px',
                  borderBottom:
                    i < posts.length - 1 ? '1px solid var(--border-subtle)' : 'none',
                  alignItems: 'center',
                }}
              >
                <div>
                  <div
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: 14,
                      color: 'var(--cream)',
                      marginBottom: 4,
                    }}
                  >
                    {post.title}
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: 11,
                      color: 'var(--text-muted)',
                    }}
                  >
                    {new Date(post.created_at).toLocaleDateString('en-AU', {
                      day: 'numeric',
                      month: 'short',
                      year: 'numeric',
                    })}
                  </div>
                </div>

                <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                  {(post.categories ?? []).map((cat) => (
                    <span
                      key={cat}
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: 8,
                        letterSpacing: '0.18em',
                        textTransform: 'uppercase',
                        color: 'var(--gold)',
                        border: '1px solid rgba(201,168,76,0.3)',
                        padding: '2px 8px',
                      }}
                    >
                      {cat}
                    </span>
                  ))}
                </div>

                <div>
                  <button
                    onClick={() => togglePublished(post)}
                    style={{
                      padding: '5px 14px',
                      border: `1px solid ${post.published ? 'rgba(100,200,130,0.4)' : 'rgba(201,168,76,0.2)'}`,
                      background: post.published ? 'rgba(100,200,130,0.1)' : 'transparent',
                      color: post.published ? '#80d4a0' : 'var(--text-muted)',
                      fontFamily: 'var(--font-body)',
                      fontSize: 9,
                      letterSpacing: '0.2em',
                      textTransform: 'uppercase',
                      cursor: 'pointer',
                    }}
                  >
                    {post.published ? 'Live' : 'Draft'}
                  </button>
                </div>

                <div style={{ display: 'flex', gap: 12 }}>
                  <button
                    onClick={() => router.push(`/admin/news/${post.id}`)}
                    style={actionBtn}
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deletePost(post.id)}
                    style={{ ...actionBtn, color: '#e07070' }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

const actionBtn: React.CSSProperties = {
  background: 'transparent',
  border: 'none',
  fontFamily: 'var(--font-body)',
  fontSize: 10,
  letterSpacing: '0.18em',
  textTransform: 'uppercase',
  color: 'var(--text-muted)',
  cursor: 'pointer',
  padding: 0,
};
