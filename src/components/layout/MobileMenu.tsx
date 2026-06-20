'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { nav } from '@/content/nav';
import Button from '@/components/ui/Button';
import { cn } from '@/lib/cn';

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="flex h-10 w-10 flex-col items-center justify-center gap-1.5"
      >
        <span className={cn('h-0.5 w-6 bg-text transition-transform', open && 'translate-y-2 rotate-45')} />
        <span className={cn('h-0.5 w-6 bg-text transition-opacity', open && 'opacity-0')} />
        <span className={cn('h-0.5 w-6 bg-text transition-transform', open && '-translate-y-2 -rotate-45')} />
      </button>

      {open && (
        <div className="absolute left-0 right-0 top-full border-b border-line bg-ink/95 backdrop-blur">
          <nav className="flex flex-col gap-1 px-5 py-4" aria-label="Mobile">
            {nav.map((item) => {
              const active = item.href === '/' ? pathname === '/' : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    'rounded-xl px-3 py-3 text-base font-medium',
                    active ? 'bg-surface text-text' : 'text-muted',
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
            <Button href="/contact-us" className="mt-2 w-full">
              Get Started
            </Button>
          </nav>
        </div>
      )}
    </div>
  );
}
