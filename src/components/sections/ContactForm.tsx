'use client';

import { useState } from 'react';

const field =
  'w-full rounded-xl border border-line bg-surface-2 px-4 py-3 text-text placeholder:text-muted/60 ' +
  'focus:border-accent focus:outline-none transition-colors';

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <div className="rounded-card border border-line bg-surface p-10 text-center">
        <div className="text-3xl">✓</div>
        <h3 className="mt-4 font-display text-xl font-semibold">Thanks — message sent</h3>
        <p className="mt-2 text-sm text-muted">
          We’ll get back to you within one business day. Talk soon.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-card border border-line bg-surface p-6 md:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-muted">Name</span>
          <input name="name" required autoComplete="name" className={field} placeholder="Your name" />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-muted">Email</span>
          <input name="email" type="email" required autoComplete="email" className={field} placeholder="you@company.com" />
        </label>
      </div>
      <label className="mt-4 block">
        <span className="mb-1.5 block text-sm font-medium text-muted">Company</span>
        <input name="company" autoComplete="organization" className={field} placeholder="Company (optional)" />
      </label>
      <label className="mt-4 block">
        <span className="mb-1.5 block text-sm font-medium text-muted">How can we help?</span>
        <textarea name="message" required rows={5} className={field} placeholder="Tell us about your goals…" />
      </label>
      <button
        type="submit"
        className="bg-brand-gradient mt-6 inline-flex items-center justify-center rounded-pill px-7 py-3.5 text-[15px] font-semibold text-ink transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_34px_rgba(255,228,122,0.32)] focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
      >
        Send message
      </button>
    </form>
  );
}
