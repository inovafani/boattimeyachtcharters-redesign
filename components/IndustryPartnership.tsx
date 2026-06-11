'use client';

import { useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Nav from './Nav';
import Footer from './Footer';

gsap.registerPlugin(ScrollTrigger, useGSAP);

// ── Icons ──────────────────────────────────────────────────────────────────────

function IconCamera({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
      <circle cx="12" cy="13" r="4" />
    </svg>
  );
}

function IconBuilding({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="9" width="13" height="13" />
      <path d="M8 22V12h3v10" />
      <path d="M21 22V6.5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0-.5.5V9" />
      <path d="M3 9V5a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v4" />
      <path d="M21 11H17M21 15H17" />
    </svg>
  );
}

function IconAnchor({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="5" r="3" />
      <line x1="12" y1="22" x2="12" y2="8" />
      <path d="M5 12H2a10 10 0 0 0 20 0h-3" />
    </svg>
  );
}

function IconStar({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

function IconHandshake({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z" opacity=".4" />
      <path d="m9 11 3 3 3-3" />
    </svg>
  );
}

function IconGlobe({ size = 26 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}

// ── Section heading helper ─────────────────────────────────────────────────────

function SectionHead({
  eyebrow,
  title,
  sub,
  align = 'center',
}: {
  eyebrow: string;
  title: React.ReactNode;
  sub?: string;
  align?: 'center' | 'left';
}) {
  return (
    <div style={{ textAlign: align, maxWidth: align === 'center' ? 760 : undefined, margin: align === 'center' ? '0 auto' : undefined }}>
      <div className="section-eyebrow" style={{ justifyContent: align === 'center' ? 'center' : 'flex-start', marginBottom: 22 }}>
        {eyebrow}
      </div>
      <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: 'clamp(32px, 4.5vw, 58px)', lineHeight: 1.02, letterSpacing: '-0.02em', color: 'var(--cream)', marginBottom: sub ? 20 : 0 }}>
        {title}
      </h2>
      {sub && (
        <p style={{ fontFamily: 'var(--font-body)', fontSize: 15, color: 'var(--text-muted)', lineHeight: 1.8, fontWeight: 300, maxWidth: 600, margin: align === 'center' ? '0 auto' : undefined }}>
          {sub}
        </p>
      )}
    </div>
  );
}

// ── Marquee strip ──────────────────────────────────────────────────────────────

function PartnershipStrip() {
  const items = ['CONTENT CREATORS', 'TOURISM OPERATORS', 'HOSPITALITY BRANDS', 'EVENT COMPANIES', 'TRAVEL AGENCIES', 'INFLUENCERS & MEDIA'];
  const row = [...items, ...items];
  return (
    <div style={{ background: 'var(--gold)', overflow: 'hidden', whiteSpace: 'nowrap', padding: '12px 0' }}>
      <div style={{ display: 'inline-flex', gap: 0, animation: 'partnerMarquee 28s linear infinite' }}>
        {row.map((t, i) => (
          <span key={i} style={{ fontFamily: 'var(--font-body)', fontSize: 11, letterSpacing: '0.22em', fontWeight: 700, color: '#0A1628', padding: '0 28px', display: 'inline-flex', alignItems: 'center', gap: 28 }}>
            {t}
            <span style={{ opacity: 0.35 }}>&bull;</span>
          </span>
        ))}
      </div>
      <style>{`@keyframes partnerMarquee{from{transform:translateX(0)}to{transform:translateX(-50%)}}`}</style>
    </div>
  );
}

// ── Input field ────────────────────────────────────────────────────────────────

function Field({
  label,
  id,
  type = 'text',
  placeholder,
  value,
  onChange,
  required,
  prefix,
}: {
  label: string;
  id: string;
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
  prefix?: React.ReactNode;
}) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      <label htmlFor={id} style={{ fontFamily: 'var(--font-body)', fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 600 }}>
        {label}{required && <span style={{ color: 'var(--gold)', marginLeft: 4 }}>*</span>}
      </label>
      <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
        {prefix && (
          <span style={{ position: 'absolute', left: 16, color: 'rgba(245,240,232,0.35)', fontSize: 13, fontFamily: 'var(--font-body)', pointerEvents: 'none' }}>
            {prefix}
          </span>
        )}
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          required={required}
          style={{
            width: '100%',
            padding: prefix ? '14px 16px 14px 38px' : '14px 16px',
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(201,168,76,0.2)',
            color: 'var(--cream)',
            fontFamily: 'var(--font-body)',
            fontSize: 14,
            outline: 'none',
            transition: 'border-color 0.2s',
            borderRadius: 0,
          }}
          onFocus={(e) => { e.currentTarget.style.borderColor = 'rgba(201,168,76,0.6)'; }}
          onBlur={(e) => { e.currentTarget.style.borderColor = 'rgba(201,168,76,0.2)'; }}
        />
      </div>
    </div>
  );
}

// ── Partnership form ───────────────────────────────────────────────────────────

type FormType = 'company' | 'creator';

const EMPTY_COMPANY = { companyName: '', companyWebsite: '', companyEmail: '', companyPhone: '', companyAddress: '', message: '' };
const EMPTY_CREATOR = { creatorName: '', creatorEmail: '', creatorPhone: '', instagram: '', youtube: '', tiktok: '', creatorAddress: '', message: '' };

function PartnershipForm() {
  const [formType, setFormType] = useState<FormType>('company');
  const [company, setCompany] = useState(EMPTY_COMPANY);
  const [creator, setCreator] = useState(EMPTY_CREATOR);
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const setC = (key: keyof typeof company) => (v: string) => setCompany((p) => ({ ...p, [key]: v }));
  const setR = (key: keyof typeof creator) => (v: string) => setCreator((p) => ({ ...p, [key]: v }));

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!consent) return;
    setStatus('loading');

    const payload = formType === 'company'
      ? { type: 'company', ...company }
      : { type: 'creator', ...creator };

    try {
      const res = await fetch('/api/partnership', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
      const data = await res.json();
      if (!res.ok || !data.ok) throw new Error(data.error || 'Unknown error');
      setStatus('success');
    } catch {
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div style={{ textAlign: 'center', padding: '80px 32px' }}>
        <div style={{ width: 64, height: 64, borderRadius: '50%', border: '1px solid rgba(201,168,76,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 28px' }}>
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <polyline points="22 4 12 14.01 9 11.01" />
          </svg>
        </div>
        <div className="section-eyebrow" style={{ justifyContent: 'center', marginBottom: 16 }}>APPLICATION RECEIVED</div>
        <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: 'clamp(28px, 4vw, 46px)', color: 'var(--cream)', lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: 16 }}>
          Thank you for <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>reaching out.</em>
        </h3>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--text-muted)', lineHeight: 1.8, maxWidth: 480, margin: '0 auto' }}>
          We&rsquo;ve received your application and will be in touch within 2–3 business days to discuss how we can work together.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      {/* Type toggle */}
      <div style={{ display: 'flex', gap: 2, marginBottom: 48, background: 'rgba(201,168,76,0.06)', border: '1px solid rgba(201,168,76,0.15)', padding: 4 }}>
        {(['company', 'creator'] as FormType[]).map((t) => (
          <button
            key={t}
            type="button"
            onClick={() => setFormType(t)}
            style={{
              flex: 1,
              padding: '14px 24px',
              background: formType === t ? 'var(--gold)' : 'transparent',
              border: 'none',
              cursor: 'pointer',
              fontFamily: 'var(--font-body)',
              fontSize: 11,
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              fontWeight: 700,
              color: formType === t ? '#0A1628' : 'rgba(245,240,232,0.55)',
              transition: 'all 0.25s',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 10,
            }}
          >
            {t === 'company' ? <IconBuilding size={16} /> : <IconCamera size={16} />}
            {t === 'company' ? 'Company' : 'Creator'}
          </button>
        ))}
      </div>

      {/* Company fields */}
      {formType === 'company' && (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 20 }}>
          <div style={{ gridColumn: '1 / -1' }}>
            <Field label="Company Name" id="companyName" placeholder="Your company name" value={company.companyName} onChange={setC('companyName')} required />
          </div>
          <Field label="Company Website" id="companyWebsite" type="url" placeholder="https://yourcompany.com" value={company.companyWebsite} onChange={setC('companyWebsite')} prefix={<IconGlobe size={14} />} />
          <Field label="Email Address" id="companyEmail" type="email" placeholder="hello@company.com" value={company.companyEmail} onChange={setC('companyEmail')} required />
          <Field label="Main Phone Number" id="companyPhone" type="tel" placeholder="+61 4XX XXX XXX" value={company.companyPhone} onChange={setC('companyPhone')} required />
          <div style={{ gridColumn: '1 / -1' }}>
            <Field label="Company Address" id="companyAddress" placeholder="Street, Suburb, State, Postcode" value={company.companyAddress} onChange={setC('companyAddress')} required />
          </div>
          <div style={{ gridColumn: '1 / -1' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <label htmlFor="companyMessage" style={{ fontFamily: 'var(--font-body)', fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 600 }}>
                Tell Us About the Partnership
              </label>
              <textarea
                id="companyMessage"
                rows={4}
                placeholder="Briefly describe what kind of partnership you have in mind…"
                value={company.message}
                onChange={(e) => setC('message')(e.target.value)}
                style={{ width: '100%', padding: '14px 16px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(201,168,76,0.2)', color: 'var(--cream)', fontFamily: 'var(--font-body)', fontSize: 14, outline: 'none', resize: 'vertical', borderRadius: 0, lineHeight: 1.7 }}
                onFocus={(e) => { e.currentTarget.style.borderColor = 'rgba(201,168,76,0.6)'; }}
                onBlur={(e) => { e.currentTarget.style.borderColor = 'rgba(201,168,76,0.2)'; }}
              />
            </div>
          </div>
        </div>
      )}

      {/* Creator fields */}
      {formType === 'creator' && (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 20 }}>
          <div style={{ gridColumn: '1 / -1' }}>
            <Field label="Full Name" id="creatorName" placeholder="Your full name" value={creator.creatorName} onChange={setR('creatorName')} required />
          </div>
          <Field label="Email Address" id="creatorEmail" type="email" placeholder="you@example.com" value={creator.creatorEmail} onChange={setR('creatorEmail')} required />
          <Field label="Phone Number" id="creatorPhone" type="tel" placeholder="+61 4XX XXX XXX" value={creator.creatorPhone} onChange={setR('creatorPhone')} required />

          {/* Socials heading */}
          <div style={{ gridColumn: '1 / -1', paddingTop: 8 }}>
            <div style={{ fontFamily: 'var(--font-body)', fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 600, marginBottom: 16, paddingBottom: 12, borderBottom: '1px solid rgba(201,168,76,0.1)' }}>
              Social Platforms
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
              <Field label="Instagram" id="instagram" placeholder="@handle" value={creator.instagram} onChange={setR('instagram')} prefix="@" />
              <Field label="YouTube" id="youtube" placeholder="Channel name or URL" value={creator.youtube} onChange={setR('youtube')} />
              <Field label="TikTok" id="tiktok" placeholder="@handle" value={creator.tiktok} onChange={setR('tiktok')} prefix="@" />
            </div>
          </div>

          <div style={{ gridColumn: '1 / -1' }}>
            <Field label="Address" id="creatorAddress" placeholder="Street, Suburb, State, Postcode" value={creator.creatorAddress} onChange={setR('creatorAddress')} required />
          </div>
          <div style={{ gridColumn: '1 / -1' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <label htmlFor="creatorMessage" style={{ fontFamily: 'var(--font-body)', fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 600 }}>
                Tell Us About Your Content
              </label>
              <textarea
                id="creatorMessage"
                rows={4}
                placeholder="Your niche, audience size, and what kind of collaboration you're pitching…"
                value={creator.message}
                onChange={(e) => setR('message')(e.target.value)}
                style={{ width: '100%', padding: '14px 16px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(201,168,76,0.2)', color: 'var(--cream)', fontFamily: 'var(--font-body)', fontSize: 14, outline: 'none', resize: 'vertical', borderRadius: 0, lineHeight: 1.7 }}
                onFocus={(e) => { e.currentTarget.style.borderColor = 'rgba(201,168,76,0.6)'; }}
                onBlur={(e) => { e.currentTarget.style.borderColor = 'rgba(201,168,76,0.2)'; }}
              />
            </div>
          </div>
        </div>
      )}

      {/* Consent */}
      <div style={{ marginTop: 32, display: 'flex', alignItems: 'flex-start', gap: 14 }}>
        <button
          type="button"
          onClick={() => setConsent((p) => !p)}
          aria-pressed={consent}
          style={{
            flexShrink: 0,
            width: 20,
            height: 20,
            border: `1px solid ${consent ? 'var(--gold)' : 'rgba(201,168,76,0.3)'}`,
            background: consent ? 'var(--gold)' : 'transparent',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 1,
            transition: 'all 0.2s',
            borderRadius: 0,
          }}
        >
          {consent && (
            <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
              <path d="M1.5 5.5L4 8L9.5 3" stroke="#0A1628" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </button>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: 12.5, color: 'rgba(245,240,232,0.55)', lineHeight: 1.7 }}>
          I consent to Boattime Yacht Charters collecting and storing my information to process this partnership application. My details will not be shared with third parties without my permission.
          <span style={{ color: 'var(--gold)', marginLeft: 4 }}>*</span>
        </p>
      </div>

      {status === 'error' && (
        <p style={{ marginTop: 16, fontFamily: 'var(--font-body)', fontSize: 13, color: '#e06c75' }}>
          Something went wrong. Please try again or email us directly.
        </p>
      )}

      <div style={{ marginTop: 36 }}>
        <button
          type="submit"
          disabled={!consent || status === 'loading'}
          className="btn btn-primary"
          style={{ opacity: (!consent || status === 'loading') ? 0.5 : 1, cursor: (!consent || status === 'loading') ? 'not-allowed' : 'pointer', transition: 'opacity 0.2s' }}
        >
          {status === 'loading' ? 'Submitting…' : 'Submit Application'}
        </button>
      </div>
    </form>
  );
}

// ── Main page ──────────────────────────────────────────────────────────────────

export default function IndustryPartnership() {
  const heroRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(bgRef.current, { scale: 1.1 }, { scale: 1, duration: 14, ease: 'none' });
      gsap.from(textRef.current!.querySelectorAll('.hr'), {
        y: 28, opacity: 0, duration: 0.8, stagger: 0.08, ease: 'power2.out', delay: 0.15,
      });
      gsap.to(bgRef.current, {
        yPercent: 18, ease: 'none',
        scrollTrigger: { trigger: heroRef.current, start: 'top top', end: 'bottom top', scrub: true },
      });
    },
    { scope: heroRef },
  );

  const BENEFITS = [
    {
      icon: <IconAnchor size={28} />,
      title: 'Access to the fleet',
      body: 'Bring your audience or clients on board. From intimate yacht charters to large vessel experiences, partners gain preferential access to our full Gold Coast fleet.',
    },
    {
      icon: <IconCamera size={28} />,
      title: 'Premium content settings',
      body: 'The Broadwater, the open ocean, the city skyline at dusk — our vessels provide striking backdrops that elevate any content, campaign, or event.',
    },
    {
      icon: <IconStar size={28} />,
      title: 'Brand credibility',
      body: 'Associate with a five-star rated operation. Over 2,000 verified five-star reviews back Boattime as Gold Coast&rsquo;s most trusted luxury yacht charter.',
    },
    {
      icon: <IconHandshake size={28} />,
      title: 'Tailored collaboration',
      body: 'No two partnerships look the same. We work with you to shape an arrangement that suits your audience, your brand, and your goals — not a generic package.',
    },
  ];

  const PARTNER_TYPES = [
    {
      tag: 'CREATOR PARTNERSHIP',
      icon: <IconCamera size={32} />,
      title: 'Content creators & influencers',
      body: 'Photographers, videographers, travel influencers, lifestyle content creators — if you create content that moves people, there&rsquo;s a place for you on the water with us.',
      items: ['Photo & video shoots on board', 'Complimentary or hosted charter access', 'Co-branded social content', 'Affiliate commission opportunities'],
    },
    {
      tag: 'COMPANY PARTNERSHIP',
      icon: <IconBuilding size={32} />,
      title: 'Tourism, hospitality & corporate',
      body: 'Tourism operators, hotels, travel agencies, event companies, and corporate brands looking to add a luxury marine experience to their offering — let&rsquo;s build something together.',
      items: ['Package bundling & reseller agreements', 'Co-marketing & co-branding', 'Corporate event collaboration', 'Referral & commission structures'],
    },
  ];

  return (
    <>
      <Nav />
      <main>

        {/* ── Hero ── */}
        <section
          ref={heroRef}
          className="relative overflow-hidden"
          style={{ minHeight: '100vh', background: 'var(--navy)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}
        >
          <div ref={bgRef} className="absolute inset-0 will-change-transform">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/twilight-drift.jpeg"
              alt=""
              aria-hidden="true"
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 40%' }}
            />
          </div>
          <div
            className="absolute inset-0"
            style={{ background: 'radial-gradient(ellipse at center, rgba(10,22,40,0.55) 0%, rgba(10,22,40,0.88) 70%), linear-gradient(to top, rgba(10,22,40,0.98) 0%, rgba(10,22,40,0.0) 40%)' }}
          />

          <div
            ref={textRef}
            className="relative z-10 w-full"
            style={{ padding: '160px 40px 160px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
          >
            <div className="hr section-eyebrow" style={{ marginBottom: 22, justifyContent: 'center' }}>
              BOATTIME YACHT CHARTERS · GOLD COAST
            </div>
            <h1
              className="hr"
              style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: 'clamp(48px, 7vw, 100px)', lineHeight: 0.96, letterSpacing: '-0.025em', color: 'var(--cream)', marginBottom: 28, maxWidth: 900 }}
            >
              Industry{' '}
              <em style={{ fontStyle: 'italic', color: 'var(--gold-light)' }}>Partnership.</em>
            </h1>
            <p
              className="hr"
              style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(15px, 1.8vw, 18px)', color: 'rgba(245,240,232,0.78)', lineHeight: 1.75, fontWeight: 300, maxWidth: 520, marginBottom: 38 }}
            >
              Boattime Yacht Charters is inviting creators and companies to join us on the water. Whether you build audiences or build brands — there&rsquo;s a partnership here for you.
            </p>
            <div className="hr" style={{ display: 'flex', gap: 14, flexWrap: 'wrap', justifyContent: 'center' }}>
              <a href="#apply" className="btn btn-primary">Apply for Partnership</a>
              <a href="#why" className="btn btn-ghost">See What We Offer</a>
            </div>
          </div>

          {/* info bar */}
          <div className="hero-infobar" style={{ width: '100%' }}>
            {[
              { label: 'Based in', value: 'Gold Coast' },
              { label: 'Fleet', value: '6+ Vessels' },
              { label: 'Rating', value: '5.0 Stars', em: '2,000+ reviews' },
              { label: 'Open to', value: 'Creators & Companies' },
            ].map((c) => (
              <div key={c.label} className="hero-infobar-cell">
                <div className="hero-infobar-label">{c.label}</div>
                <div className="hero-infobar-value">{c.value}{c.em && <em> · {c.em}</em>}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Marquee ── */}
        <PartnershipStrip />

        {/* ── What ── */}
        <section
          className="cruise-section"
          style={{ background: 'var(--navy)', padding: '104px 80px' }}
        >
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <SectionHead
              eyebrow="WHAT IS THIS"
              title={<>A new kind of <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>partnership</em> on the Gold Coast.</>}
              sub="We&rsquo;re opening the doors for creators and companies who want to collaborate, co-brand, or simply work alongside one of Gold Coast&rsquo;s most trusted luxury marine experiences. The water is our stage — and we&rsquo;re inviting the right partners to share it."
            />

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 2, marginTop: 56, background: 'rgba(201,168,76,0.14)', border: '1px solid rgba(201,168,76,0.18)' }}>
              {[
                { num: '6+', label: 'Vessels in fleet' },
                { num: '2,000+', label: 'Five-star reviews' },
                { num: '10+', label: 'Years on the water' },
                { num: '365', label: 'Days a year' },
              ].map((s) => (
                <div key={s.label} className="stat-item" style={{ background: 'var(--navy)', padding: '44px 24px', textAlign: 'center' }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: 'clamp(38px, 5vw, 64px)', color: 'var(--gold)', lineHeight: 1, marginBottom: 12, letterSpacing: '-0.01em' }}>
                    {s.num}
                  </div>
                  <div style={{ fontFamily: 'var(--font-body)', fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(245,240,232,0.6)', fontWeight: 600, lineHeight: 1.5 }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Why ── */}
        <section
          id="why"
          className="cruise-section"
          style={{ background: 'var(--navy-mid)', padding: '104px 80px', borderTop: '1px solid rgba(201,168,76,0.08)' }}
        >
          <div style={{ maxWidth: 1180, margin: '0 auto' }}>
            <SectionHead
              eyebrow="WHY PARTNER WITH US"
              title={<>What you get when you <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>partner with Boattime.</em></>}
              sub="We&rsquo;re not looking for logo placements. We&rsquo;re looking for genuine partners who share our values — and we&rsquo;ll invest in making the collaboration work."
            />

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 2, marginTop: 56, background: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.14)' }}>
              {BENEFITS.map((b) => (
                <div key={b.title} style={{ background: 'var(--navy)', padding: '48px 44px 52px' }}>
                  <div style={{ marginBottom: 24 }}>{b.icon}</div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 'clamp(22px, 2.5vw, 28px)', color: 'var(--cream)', marginBottom: 14, letterSpacing: '-0.01em' }}>
                    {b.title}
                  </h3>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: 13.5, color: 'rgba(245,240,232,0.66)', lineHeight: 1.8, fontWeight: 300 }} dangerouslySetInnerHTML={{ __html: b.body }} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── The Network Effect ── */}
        <section
          className="cruise-section"
          style={{ background: 'var(--navy)', padding: '104px 80px', borderTop: '1px solid rgba(201,168,76,0.08)' }}
        >
          <div style={{ maxWidth: 1180, margin: '0 auto' }}>
            <SectionHead
              eyebrow="BIGGER TOGETHER"
              title={<>One post. <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>Multiple audiences.</em></>}
              sub="When a creator partner stays at a Sheraton or Marriott through our network and posts about their Gold Coast experience — that reach extends across both of our audiences. Every partnership compounds."
            />

            {/* Network diagram */}
            <div style={{ marginTop: 64, position: 'relative' }}>
              {/* Centre node */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0 }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 48, flexWrap: 'wrap', position: 'relative' }}>

                  {/* Hotel node */}
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16, minWidth: 160 }}>
                    <div style={{ width: 80, height: 80, border: '1px solid rgba(201,168,76,0.3)', background: 'var(--navy-mid)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <IconBuilding size={32} />
                    </div>
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ fontFamily: 'var(--font-body)', fontSize: 9, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 600, marginBottom: 6 }}>Hotel Partner</div>
                      <div style={{ fontFamily: 'var(--font-display)', fontSize: 18, color: 'var(--cream)', fontWeight: 300 }}>Sheraton · Marriott</div>
                      <div style={{ fontFamily: 'var(--font-display)', fontSize: 18, color: 'var(--cream)', fontWeight: 300 }}>Imperial & more</div>
                      <div style={{ fontFamily: 'var(--font-body)', fontSize: 11, color: 'rgba(245,240,232,0.45)', marginTop: 6 }}>Their followers</div>
                    </div>
                  </div>

                  {/* Connector lines */}
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, color: 'rgba(201,168,76,0.4)', fontSize: 28, fontWeight: 200, userSelect: 'none' }}>
                    <span style={{ fontFamily: 'var(--font-display)', fontSize: 40, color: 'rgba(201,168,76,0.25)', lineHeight: 1 }}>+</span>
                  </div>

                  {/* Creator node */}
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16, minWidth: 160 }}>
                    <div style={{ width: 80, height: 80, border: '1px solid rgba(201,168,76,0.3)', background: 'var(--navy-mid)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <IconCamera size={32} />
                    </div>
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ fontFamily: 'var(--font-body)', fontSize: 9, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 600, marginBottom: 6 }}>Creator Partner</div>
                      <div style={{ fontFamily: 'var(--font-display)', fontSize: 18, color: 'var(--cream)', fontWeight: 300 }}>Influencer · Blogger</div>
                      <div style={{ fontFamily: 'var(--font-display)', fontSize: 18, color: 'var(--cream)', fontWeight: 300 }}>Photographer · Media</div>
                      <div style={{ fontFamily: 'var(--font-body)', fontSize: 11, color: 'rgba(245,240,232,0.45)', marginTop: 6 }}>Their followers</div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, color: 'rgba(201,168,76,0.4)', fontSize: 28, fontWeight: 200, userSelect: 'none' }}>
                    <span style={{ fontFamily: 'var(--font-display)', fontSize: 40, color: 'rgba(201,168,76,0.25)', lineHeight: 1 }}>+</span>
                  </div>

                  {/* Boattime node */}
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16, minWidth: 160 }}>
                    <div style={{ width: 80, height: 80, border: '1px solid var(--gold)', background: 'var(--navy-mid)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <IconAnchor size={32} />
                    </div>
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ fontFamily: 'var(--font-body)', fontSize: 9, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 600, marginBottom: 6 }}>Boattime</div>
                      <div style={{ fontFamily: 'var(--font-display)', fontSize: 18, color: 'var(--cream)', fontWeight: 300 }}>Yacht Charters</div>
                      <div style={{ fontFamily: 'var(--font-display)', fontSize: 18, color: 'var(--cream)', fontWeight: 300 }}>Gold Coast</div>
                      <div style={{ fontFamily: 'var(--font-body)', fontSize: 11, color: 'rgba(245,240,232,0.45)', marginTop: 6 }}>Our followers</div>
                    </div>
                  </div>

                </div>

                {/* Result banner */}
                <div style={{ marginTop: 48, width: '100%', maxWidth: 760, background: 'rgba(201,168,76,0.07)', border: '1px solid rgba(201,168,76,0.22)', padding: '32px 40px', display: 'flex', alignItems: 'center', gap: 24, flexWrap: 'wrap', justifyContent: 'center' }}>
                  <div style={{ width: 40, height: 40, border: '1px solid rgba(201,168,76,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                      <polyline points="17 6 23 6 23 12" />
                    </svg>
                  </div>
                  <div>
                    <div style={{ fontFamily: 'var(--font-body)', fontSize: 9, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 600, marginBottom: 6 }}>The result</div>
                    <p style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(18px, 2.2vw, 24px)', fontWeight: 300, color: 'var(--cream)', lineHeight: 1.2, letterSpacing: '-0.01em' }}>
                      One post reaches <em style={{ fontStyle: 'italic', color: 'var(--gold-light)' }}>all three audiences</em> simultaneously.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* How it works — 3 steps */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2, marginTop: 40, background: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.14)' }}>
              {[
                { n: '01', title: 'Creator joins the network', body: 'A content creator applies and is welcomed as a Boattime partner. They get access to the yacht and perks from our hotel partners — Sheraton, Marriott, Imperial, and others.' },
                { n: '02', title: 'They post about the experience', body: 'The creator documents their Gold Coast stay — yacht charter, hotel, the whole experience. One authentic piece of content that covers multiple partners.' },
                { n: '03', title: 'Everyone\'s reach grows', body: 'The post is seen by the creator\'s followers, shared by Boattime, and amplified by the hotel. Three audiences, one post — and every brand benefits.' },
              ].map((s) => (
                <div key={s.n} style={{ background: 'var(--navy)', padding: '40px 36px' }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: 44, color: 'var(--gold)', lineHeight: 1, marginBottom: 18 }}>{s.n}</div>
                  <h4 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 22, color: 'var(--cream)', marginBottom: 12 }}>{s.title}</h4>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'rgba(245,240,232,0.62)', lineHeight: 1.8, fontWeight: 300 }}>{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Partnership types ── */}
        <section
          className="cruise-section"
          style={{ background: 'var(--navy-mid)', padding: '104px 80px', borderTop: '1px solid rgba(201,168,76,0.08)' }}
        >
          <div style={{ maxWidth: 1180, margin: '0 auto' }}>
            <SectionHead
              eyebrow="WHO WE WORK WITH"
              title={<>Two ways to <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>partner.</em></>}
              sub="Whether you&rsquo;re a solo creator with an engaged audience or a company looking for a luxury marine experience partner — there&rsquo;s a path forward."
            />

            <div className="cruise-overview-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginTop: 56 }}>
              {PARTNER_TYPES.map((pt) => (
                <div
                  key={pt.tag}
                  style={{ background: 'var(--navy-mid)', border: '1px solid rgba(201,168,76,0.16)', padding: '48px 44px 52px', display: 'flex', flexDirection: 'column' }}
                >
                  <div style={{ marginBottom: 22 }}>{pt.icon}</div>
                  <div style={{ fontFamily: 'var(--font-body)', fontSize: 9, letterSpacing: '0.26em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 600, marginBottom: 14 }}>
                    {pt.tag}
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: 'clamp(24px, 2.8vw, 34px)', lineHeight: 1.08, letterSpacing: '-0.01em', color: 'var(--cream)', marginBottom: 18 }}>
                    {pt.title}
                  </h3>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'rgba(245,240,232,0.68)', lineHeight: 1.8, fontWeight: 300, marginBottom: 32 }} dangerouslySetInnerHTML={{ __html: pt.body }} />
                  <ul style={{ listStyle: 'none', margin: 0, padding: 0, marginTop: 'auto', borderTop: '1px solid rgba(201,168,76,0.12)', paddingTop: 28 }}>
                    {pt.items.map((item) => (
                      <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, padding: '8px 0' }}>
                        <svg width="13" height="13" viewBox="0 0 13 13" fill="none" style={{ flexShrink: 0, marginTop: 3 }}>
                          <path d="M2 6.5L5 9.5L11 3.5" stroke="var(--gold)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'rgba(245,240,232,0.72)', lineHeight: 1.55 }}>
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div style={{ textAlign: 'center', marginTop: 52 }}>
              <a href="#apply" className="btn btn-primary">Apply for Partnership</a>
            </div>
          </div>
        </section>

        {/* ── Closing CTA band ── */}
        <section
          className="cta-band"
          style={{ position: 'relative', padding: '120px 40px', textAlign: 'center', overflow: 'hidden', borderTop: '1px solid rgba(201,168,76,0.1)' }}
        >
          <div className="absolute inset-0" style={{ backgroundImage: 'url(/gch-heli.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(10,22,40,0.84), rgba(6,14,28,0.94))' }} />
          <div className="cta-band-content" style={{ position: 'relative', zIndex: 1, maxWidth: 760, margin: '0 auto' }}>
            <div className="section-eyebrow" style={{ justifyContent: 'center', marginBottom: 22 }}>
              THE WATER IS WAITING
            </div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: 'clamp(36px, 5.5vw, 72px)', lineHeight: 1, letterSpacing: '-0.02em', color: 'var(--cream)', marginBottom: 24 }}>
              Let&rsquo;s build something{' '}
              <em style={{ fontStyle: 'italic', color: 'var(--gold-light)' }}>together.</em>
            </h2>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, color: 'rgba(245,240,232,0.78)', lineHeight: 1.7, fontWeight: 300, maxWidth: 520, margin: '0 auto 36px' }}>
              The application takes two minutes. Our team reviews every one personally, and we&rsquo;ll be in touch to explore what&rsquo;s possible.
            </p>
            <a href="#apply" className="btn btn-primary">Apply Now</a>
          </div>
        </section>

        {/* ── Application Form ── */}
        <section
          id="apply"
          className="cruise-section"
          style={{ background: 'var(--navy-mid)', borderTop: '1px solid rgba(201,168,76,0.1)', padding: '104px 80px 130px' }}
        >
          <div style={{ maxWidth: 820, margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: 56 }}>
              <div className="section-eyebrow" style={{ justifyContent: 'center', marginBottom: 18 }}>
                INDUSTRY PARTNERSHIP APPLICATION
              </div>
              <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: 'clamp(30px, 4vw, 52px)', lineHeight: 1.05, letterSpacing: '-0.02em', color: 'var(--cream)', marginBottom: 16 }}>
                Apply for{' '}
                <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>partnership.</em>
              </h2>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'rgba(245,240,232,0.58)', lineHeight: 1.75, maxWidth: 500, margin: '0 auto', fontWeight: 300 }}>
                Fill in the form below — select whether you&rsquo;re applying as a company or a creator and we&rsquo;ll be in touch within 2–3 business days.
              </p>
            </div>
            <PartnershipForm />
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
