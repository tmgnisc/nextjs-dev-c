"use client";

import Link from 'next/link';
import Container from '@/components/ui/Container';
import { site } from '@/content/site';

export default function Footer() {
  return (
    <footer className="border-t border-line bg-[#040404]">
      <Container className="py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_repeat(3,1fr)]">
          {/* Column 1: Brand Info */}
          <div className="max-w-sm">
            <div className="font-display text-2xl font-bold leading-tight text-text">
              DEV <span className="text-[#f91515]">Community</span>
              <br />
              Nepal
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              {site.description}
            </p>
            <div className="mt-6 flex items-center gap-2 text-sm text-[#f91515] font-medium">
              <svg
                className="h-4 w-4 fill-current shrink-0"
                viewBox="0 0 24 24"
              >
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
              <span className="text-muted">Building Nepal's tech ecosystem</span>
            </div>
          </div>

          {/* Dynamic Columns (Quick Links & Resources) */}
          {site.footerColumns.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold text-text uppercase tracking-wider">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((link, idx) => (
                  <li key={`${link.href}-${idx}`}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted transition-colors hover:text-text"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Column 4: Get in Touch */}
          <div>
            <h3 className="text-sm font-semibold text-text uppercase tracking-wider">
              Get in Touch
            </h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-center gap-3 text-sm text-muted">
                <svg
                  className="h-4 w-4 text-[#f91515] shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>{site.address}</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted">
                <svg
                  className="h-4 w-4 text-[#f91515] shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <a
                  href={`mailto:${site.email}`}
                  className="transition-colors hover:text-text"
                >
                  {site.email}
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted">
                <svg
                  className="h-4 w-4 text-[#f91515] shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span>{site.phone}</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted">
                <svg
                  className="h-4 w-4 text-[#f91515] shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                  />
                </svg>
                <a
                  href="https://www.devcommunitynepal.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-text"
                >
                  www.devcommunitynepal.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col gap-6 border-t border-line pt-8 text-muted sm:flex-row sm:items-center sm:justify-between">
          {/* Social Icons */}
          <div className="flex gap-5">
            {site.socials.map((s) => {
              let iconSvg = null;
              if (s.label === 'LinkedIn') {
                iconSvg = (
                  <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                );
              } else if (s.label === 'Facebook') {
                iconSvg = (
                  <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                  </svg>
                );
              } else if (s.label === 'Instagram') {
                iconSvg = (
                  <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0 3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                );
              } else if (s.label === 'YouTube') {
                iconSvg = (
                  <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                    <path d="M23.498 6.163c-.272-1.016-1.07-1.815-2.085-2.087-1.84-.496-9.213-.496-9.213-.496s-7.373 0-9.213.496c-1.015.272-1.813 1.071-2.086 2.087-.496 1.839-.496 5.679-.496 5.679s0 3.84.496 5.68c.273 1.015 1.071 1.813 2.086 2.086 1.84.496 9.213.496 9.213.496s7.373 0 9.213-.496c1.015-.273 1.813-1.071 2.085-2.086.496-1.84.496-5.68.496-5.68s0-3.84-.496-5.679zm-14.161 9.514v-7.35l6.502 3.675-6.502 3.675z" />
                  </svg>
                );
              }

              if (!iconSvg) return null;

              return (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-text"
                  aria-label={s.label}
                >
                  {iconSvg}
                </a>
              );
            })}
          </div>

          {/* Copyright Statement */}
          <div className="text-center text-xs flex flex-col items-center gap-1">
            <span>© 2026 DEV Community Nepal. All rights reserved.</span>
            <span>
              Made with <span className="text-[#f91515]">❤️</span> in Nepal
            </span>
          </div>

          {/* Back to Top */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-sm transition-colors hover:text-text flex items-center gap-1 justify-end"
          >
            Back to Top ↑
          </button>
        </div>
      </Container>
    </footer>
  );
}
