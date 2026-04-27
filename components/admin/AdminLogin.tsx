'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';

export default function AdminLogin() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    setLoading(true);
    console.log('[AdminLogin] attempting sign in');

    const supabase = createClient();
    const { error: err } = await supabase.auth.signInWithPassword({ email, password });

    if (err) {
      setError('Invalid email or password.');
      setLoading(false);
      console.log('[AdminLogin] sign in failed', err.message);
      return;
    }

    console.log('[AdminLogin] sign in successful');
    router.push('/admin/news');
    router.refresh();
  }

  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'var(--navy)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 24,
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: 400,
          border: '1px solid var(--border-subtle)',
          padding: '48px 40px',
        }}
      >
        {/* Logo */}
        <div style={{ marginBottom: 40, textAlign: 'center' }}>
          <div
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 600,
              fontSize: 28,
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
              letterSpacing: '0.32em',
              textTransform: 'uppercase',
              color: 'var(--text-muted)',
              marginTop: 6,
            }}
          >
            Admin
          </div>
        </div>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div>
            <label style={labelStyle}>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={inputStyle}
            />
          </div>
          <div>
            <label style={labelStyle}>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={inputStyle}
            />
          </div>

          {error && (
            <div
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 12,
                color: '#e07070',
                padding: '10px 14px',
                border: '1px solid rgba(224,112,112,0.3)',
              }}
            >
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            style={{
              marginTop: 8,
              padding: '14px',
              background: loading ? 'rgba(201,168,76,0.5)' : 'var(--gold)',
              color: 'var(--navy)',
              border: 'none',
              fontFamily: 'var(--font-body)',
              fontSize: 10,
              letterSpacing: '0.28em',
              textTransform: 'uppercase',
              fontWeight: 600,
              cursor: loading ? 'not-allowed' : 'pointer',
            }}
          >
            {loading ? 'Signing in…' : 'Sign in'}
          </button>
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
  fontSize: 13,
  outline: 'none',
  boxSizing: 'border-box',
};
