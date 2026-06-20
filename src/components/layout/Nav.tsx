'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { nav } from '@/content/nav';
import { cn } from '@/lib/cn';

export default function Nav() {
  const pathname = usePathname();
  return (
    <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
      {nav.map((item) => {
        const active = item.href === '/' ? pathname === '/' : pathname.startsWith(item.href);
        return (
          <Link
            key={item.href}
            href={item.href}
            aria-current={active ? 'page' : undefined}
            className={cn(
              'relative text-sm font-medium transition-colors',
              active ? 'text-text' : 'text-muted hover:text-text',
            )}
          >
            {item.label}
            {active && (
              <span className="bg-brand-gradient absolute -bottom-1.5 left-0 h-0.5 w-full rounded-pill" />
            )}
          </Link>
        );
      })}
    </nav>
  );
}
