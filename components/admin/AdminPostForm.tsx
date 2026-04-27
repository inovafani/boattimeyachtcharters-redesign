'use client';

import { useEffect, useState, use } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';

const ALL_CATEGORIES = [
  'Business',
  'Celebration',
  'Company',
  'Holiday Cruises',
  'Lifestyle',
  'Luxury Whale Watching',
  'Luxury Yacht Hire',
  'Sunset Cruises',
  'Yacht Charter Wedding',
];

interface PostForm {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image_url: string;
  categories: string[];
  published: boolean;
}

const empty: PostForm = {
  title: '',
  slug: '',
  excerpt: '',
  content: '',
  image_url: '',
  categories: [],
  published: false,
};

function slugify(str: string) {
  return str
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

export default function AdminPostForm({
  params,
}: {
  params?: Promise<{ id: string }>;
}) {
  const router = useRouter();
  const resolvedParams = params ? use(params) : null;
  const postId = resolvedParams?.id ?? null;
  const isEdit = !!postId;

  const [form, setForm] = useState<PostForm>(empty);
  const [loading, setLoading] = useState(isEdit);
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!postId) return;
    console.log('[AdminPostForm] loading post', postId);
    const supabase = createClient();
    supabase
      .from('posts')
      .select('*')
      .eq('id', postId)
      .single()
      .then(({ data, error: err }) => {
        if (err || !data) {
          setError('Could not load article.');
        } else {
          setForm({
            title: data.title ?? '',
            slug: data.slug ?? '',
            excerpt: data.excerpt ?? '',
            content: data.content ?? '',
            image_url: data.image_url ?? '',
            categories: data.categories ?? [],
            published: data.published ?? false,
          });
        }
        setLoading(false);
        console.log('[AdminPostForm] post loaded');
      });
  }, [postId]);

  function handleTitleChange(val: string) {
    setForm((f) => ({
      ...f,
      title: val,
      slug: isEdit ? f.slug : slugify(val),
    }));
  }

  function toggleCategory(cat: string) {
    setForm((f) => ({
      ...f,
      categories: f.categories.includes(cat)
        ? f.categories.filter((c) => c !== cat)
        : [...f.categories, cat],
    }));
  }

  async function handleImageUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    setError('');
    console.log('[AdminPostForm] uploading image', file.name);

    const supabase = createClient();
    const ext = file.name.split('.').pop();
    const filename = `${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;

    const { error: upErr } = await supabase.storage
      .from('news-images')
      .upload(filename, file, { upsert: true });

    if (upErr) {
      setError(`Image upload failed: ${upErr.message}`);
      setUploading(false);
      return;
    }

    const { data } = supabase.storage.from('news-images').getPublicUrl(filename);
    setForm((f) => ({ ...f, image_url: data.publicUrl }));
    setUploading(false);
    console.log('[AdminPostForm] image uploaded', data.publicUrl);
  }

  async function handleSave(e: React.FormEvent) {
    e.preventDefault();
    if (!form.title.trim() || !form.slug.trim()) {
      setError('Title and slug are required.');
      return;
    }
    setSaving(true);
    setError('');
    console.log('[AdminPostForm] saving post');

    const supabase = createClient();
    const payload = {
      ...form,
      published_at: form.published ? new Date().toISOString() : null,
    };

    const { error: err } = isEdit
      ? await supabase.from('posts').update(payload).eq('id', postId)
      : await supabase.from('posts').insert(payload);

    if (err) {
      setError(err.message);
      setSaving(false);
      console.log('[AdminPostForm] save error', err.message);
    } else {
      console.log('[AdminPostForm] saved successfully');
      router.push('/admin/news');
    }
  }

  if (loading) {
    return (
      <div
        style={{
          minHeight: '100vh',
          background: 'var(--navy)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'var(--font-body)',
          fontSize: 13,
          color: 'var(--text-muted)',
        }}
      >
        Loading…
      </div>
    );
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
          ← Back
        </button>
      </div>

      <div style={{ maxWidth: 800, margin: '0 auto', padding: '48px' }}>
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
          {isEdit ? 'Edit article' : 'New article'}
        </div>
        <h1
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 36,
            fontStyle: 'italic',
            fontWeight: 300,
            color: 'var(--cream)',
            margin: '0 0 40px',
          }}
        >
          {isEdit ? 'Edit article' : 'Create new article'}
        </h1>

        <form onSubmit={handleSave} style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
          {/* Title */}
          <div>
            <label style={labelStyle}>Title *</label>
            <input
              type="text"
              value={form.title}
              onChange={(e) => handleTitleChange(e.target.value)}
              required
              placeholder="e.g. Sunset Cruises Gold Coast: Your Complete Guide"
              style={inputStyle}
            />
          </div>

          {/* Slug */}
          <div>
            <label style={labelStyle}>Slug * (URL path)</label>
            <input
              type="text"
              value={form.slug}
              onChange={(e) => setForm((f) => ({ ...f, slug: slugify(e.target.value) }))}
              required
              placeholder="sunset-cruises-gold-coast-complete-guide"
              style={inputStyle}
            />
            <div
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 11,
                color: 'var(--text-muted)',
                marginTop: 6,
              }}
            >
              /boattime-news/{form.slug || '…'}
            </div>
          </div>

          {/* Excerpt */}
          <div>
            <label style={labelStyle}>Excerpt</label>
            <textarea
              value={form.excerpt}
              onChange={(e) => setForm((f) => ({ ...f, excerpt: e.target.value }))}
              rows={3}
              placeholder="Short description shown in the article card…"
              style={{ ...inputStyle, resize: 'vertical' }}
            />
          </div>

          {/* Image */}
          <div>
            <label style={labelStyle}>Article Image</label>

            {/* Upload from computer */}
            <label
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 10,
                padding: '11px 22px',
                border: '1px solid var(--border-subtle)',
                color: uploading ? 'var(--text-muted)' : 'var(--cream)',
                fontFamily: 'var(--font-body)',
                fontSize: 10,
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                cursor: uploading ? 'not-allowed' : 'pointer',
                marginBottom: 12,
                background: 'rgba(255,255,255,0.03)',
              }}
            >
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                disabled={uploading}
                style={{ display: 'none' }}
              />
              {uploading ? 'Uploading…' : 'Upload from computer'}
            </label>

            {/* Or paste URL */}
            <div
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 10,
                color: 'var(--text-muted)',
                letterSpacing: '0.14em',
                marginBottom: 8,
              }}
            >
              Or paste an image URL
            </div>
            <input
              type="text"
              value={form.image_url}
              onChange={(e) => setForm((f) => ({ ...f, image_url: e.target.value }))}
              placeholder="https://…"
              style={inputStyle}
            />

            {/* Preview */}
            {form.image_url && (
              <div
                style={{
                  marginTop: 12,
                  height: 180,
                  backgroundImage: `url(${form.image_url})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  border: '1px solid var(--border-subtle)',
                }}
              />
            )}
          </div>

          {/* Categories */}
          <div>
            <label style={labelStyle}>Categories</label>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 4 }}>
              {ALL_CATEGORIES.map((cat) => {
                const active = form.categories.includes(cat);
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => toggleCategory(cat)}
                    style={{
                      padding: '7px 16px',
                      border: `1px solid ${active ? 'var(--gold)' : 'rgba(201,168,76,0.2)'}`,
                      background: active ? 'var(--gold)' : 'transparent',
                      color: active ? 'var(--navy)' : 'var(--text-muted)',
                      fontFamily: 'var(--font-body)',
                      fontSize: 9,
                      letterSpacing: '0.2em',
                      textTransform: 'uppercase',
                      cursor: 'pointer',
                      transition: 'all 0.15s',
                    }}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Content */}
          <div>
            <label style={labelStyle}>Article content</label>
            <textarea
              value={form.content}
              onChange={(e) => setForm((f) => ({ ...f, content: e.target.value }))}
              rows={14}
              placeholder="Write the full article here…"
              style={{ ...inputStyle, resize: 'vertical', lineHeight: 1.7 }}
            />
          </div>

          {/* Published toggle */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <button
              type="button"
              onClick={() => setForm((f) => ({ ...f, published: !f.published }))}
              style={{
                width: 48,
                height: 26,
                borderRadius: 13,
                background: form.published ? 'var(--gold)' : 'rgba(255,255,255,0.1)',
                border: 'none',
                cursor: 'pointer',
                position: 'relative',
                transition: 'background 0.2s',
                flexShrink: 0,
              }}
            >
              <span
                style={{
                  position: 'absolute',
                  top: 3,
                  left: form.published ? 25 : 3,
                  width: 20,
                  height: 20,
                  borderRadius: '50%',
                  background: 'white',
                  transition: 'left 0.2s',
                }}
              />
            </button>
            <div
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 13,
                color: form.published ? 'var(--cream)' : 'var(--text-muted)',
              }}
            >
              {form.published ? 'Published — visible on site' : 'Draft — not visible to visitors'}
            </div>
          </div>

          {error && (
            <div
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 12,
                color: '#e07070',
                padding: '12px 16px',
                border: '1px solid rgba(224,112,112,0.3)',
              }}
            >
              {error}
            </div>
          )}

          {/* Actions */}
          <div style={{ display: 'flex', gap: 16, paddingTop: 8 }}>
            <button
              type="submit"
              disabled={saving}
              style={{
                padding: '14px 36px',
                background: saving ? 'rgba(201,168,76,0.5)' : 'var(--gold)',
                color: 'var(--navy)',
                border: 'none',
                fontFamily: 'var(--font-body)',
                fontSize: 10,
                letterSpacing: '0.26em',
                textTransform: 'uppercase',
                fontWeight: 600,
                cursor: saving ? 'not-allowed' : 'pointer',
              }}
            >
              {saving ? 'Saving…' : isEdit ? 'Save changes' : 'Create article'}
            </button>
            <button
              type="button"
              onClick={() => router.push('/admin/news')}
              style={{
                padding: '14px 28px',
                background: 'transparent',
                color: 'var(--text-muted)',
                border: '1px solid var(--border-subtle)',
                fontFamily: 'var(--font-body)',
                fontSize: 10,
                letterSpacing: '0.26em',
                textTransform: 'uppercase',
                cursor: 'pointer',
              }}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

const labelStyle: React.CSSProperties = {
  display: 'block',
  fontFamily: 'var(--font-body)',
  fontSize: 9,
  letterSpacing: '0.24em',
  textTransform: 'uppercase',
  color: 'var(--text-muted)',
  marginBottom: 8,
};

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '12px 14px',
  background: 'rgba(255,255,255,0.04)',
  border: '1px solid var(--border-subtle)',
  color: 'var(--cream)',
  fontFamily: 'var(--font-body)',
  fontSize: 14,
  outline: 'none',
  boxSizing: 'border-box',
};
