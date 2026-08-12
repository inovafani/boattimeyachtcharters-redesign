'use client';

import { useState } from 'react';

/**
 * Shown when Kai returns a contactRequest. Kai has no structured contact endpoint — it expects the
 * details back as an ordinary chat message in natural language, so that is what we submit.
 */
export default function KaiContactForm({
  disabled,
  onSubmit,
}: {
  disabled: boolean;
  onSubmit: (message: string) => void;
}) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (name.trim().length < 2) return setError('Please enter your name.');
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim()))
      return setError('Please enter a valid email address.');
    if (phone.replace(/\D/g, '').length < 6) return setError('Please enter a valid phone number.');

    setError('');
    onSubmit(
      `My name is ${name.trim()}, email is ${email.trim()}, phone number is ${phone.trim()}`,
    );
  };

  // noValidate: without it the browser's own type="email" check blocks submit before our handler
  // runs, so our styled messages never appear and the user sees a stock Chrome tooltip instead.
  // We validate all three fields ourselves in handleSubmit.
  return (
    <form className="kai-contact" onSubmit={handleSubmit} noValidate>
      <p className="kai-contact-label">Your details</p>

      <input
        className="kai-input"
        type="text"
        placeholder="Full name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        disabled={disabled}
      />
      <input
        className="kai-input"
        type="email"
        placeholder="Email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        disabled={disabled}
      />
      <input
        className="kai-input"
        type="tel"
        placeholder="Phone number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        disabled={disabled}
      />

      {error && <p className="kai-contact-error">{error}</p>}

      <button className="kai-contact-submit" type="submit" disabled={disabled}>
        Send details
      </button>
    </form>
  );
}
