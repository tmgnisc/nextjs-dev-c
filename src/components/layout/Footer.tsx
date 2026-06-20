import Link from 'next/link';
import Container from '@/components/ui/Container';
import { site } from '@/content/site';

export default function Footer() {
  return (
    <footer className="border-t border-line bg-surface/40">
      <Container className="py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div className="max-w-sm">
            <div className="font-display text-lg font-bold">{site.name}</div>
            <p className="mt-3 text-sm leading-relaxed text-muted">{site.description}</p>
            <div className="mt-5 flex flex-wrap gap-3">
              {site.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="rounded-pill border border-line px-3 py-1.5 text-xs text-muted transition-colors hover:border-accent/50 hover:text-accent"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {site.footerColumns.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold text-text">{col.title}</h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-muted transition-colors hover:text-text">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-line pt-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p>
            <a href={`mailto:${site.email}`} className="hover:text-text">
              {site.email}
            </a>
            {' · '}
            {site.phone}
          </p>
        </div>
      </Container>
    </footer>
  );
}
