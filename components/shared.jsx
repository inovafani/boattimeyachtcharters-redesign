// Small shared atoms + icon set (Lucide-style, hairline 1.5px).
const Eyebrow = ({ children, light }) => (
  <div className="section-eyebrow" style={light ? { color: 'var(--navy)' } : null}>{children}</div>
);

const Button = ({ variant = 'primary', children, onClick, href, small, ...rest }) => {
  const cls = {
    primary: 'btn btn-primary',
    ghost: 'btn btn-ghost',
    outline: 'btn btn-outline-gold',
  }[variant];
  const extra = small ? { padding: '12px 26px', fontSize: 10 } : null;
  return <a className={cls} href={href} onClick={onClick} style={extra} {...rest}>{children}</a>;
};

const ItalicEm = ({ children }) => (
  <span style={{ fontStyle: 'italic', color: 'var(--gold-light)', fontWeight: 400 }}>{children}</span>
);

const Divider = ({ w = 60 }) => (
  <div style={{ width: w, height: 1, background: 'var(--gold)', opacity: 0.6 }} />
);

const Icon = ({ name, size = 16, color = 'currentColor' }) => {
  const paths = {
    anchor: <><circle cx="12" cy="5" r="3"/><line x1="12" y1="22" x2="12" y2="8"/><path d="M5 12H2a10 10 0 0 0 20 0h-3"/></>,
    chevron: <polyline points="9 18 15 12 9 6"/>,
    chevronDown: <polyline points="6 9 12 15 18 9"/>,
    arrow: <><path d="M5 12h14"/><path d="M12 5l7 7-7 7"/></>,
    pin: <><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/></>,
    clock: <><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></>,
    users: <><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></>,
    instagram: <><rect x="2" y="2" width="20" height="20" rx="0"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.5" y2="6.5"/></>,
    facebook: <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>,
    mail: <><path d="M4 4h16v16H4z"/><polyline points="4 6 12 13 20 6"/></>,
    phone: <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>,
    plus: <><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></>,
    minus: <line x1="5" y1="12" x2="19" y2="12"/>,
    waves: <><path d="M2 6c.6-.5 1.2-1 2.5-1C7 5 7 7 9.5 7s2.5-2 5-2 2.5 2 5 2c1.3 0 1.9-.5 2.5-1"/><path d="M2 12c.6-.5 1.2-1 2.5-1C7 11 7 13 9.5 13s2.5-2 5-2 2.5 2 5 2c1.3 0 1.9-.5 2.5-1"/><path d="M2 18c.6-.5 1.2-1 2.5-1C7 17 7 19 9.5 19s2.5-2 5-2 2.5 2 5 2c1.3 0 1.9-.5 2.5-1"/></>,
    sparkle: <><path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M18.4 5.6l-2.8 2.8M8.4 15.6l-2.8 2.8"/></>,
    star: <polygon points="12 2 15.1 8.6 22 9.3 17 14.1 18.2 21 12 17.7 5.8 21 7 14.1 2 9.3 8.9 8.6"/>,
  };
  return (
    <svg width={size} height={size} viewBox="0 0 24 24"
      fill="none" stroke={color} strokeWidth="1.5"
      strokeLinecap="round" strokeLinejoin="round">
      {paths[name]}
    </svg>
  );
};

Object.assign(window, { Eyebrow, Button, Icon, ItalicEm, Divider });
