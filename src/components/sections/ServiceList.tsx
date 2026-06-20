import Link from 'next/link';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Heading from '@/components/ui/Heading';
import Eyebrow from '@/components/ui/Eyebrow';
import type { Service } from '@/content/services';

export default function ServiceList({
  services,
  eyebrow = 'What we do',
  title = 'Growth services, end to end',
}: {
  services: Service[];
  eyebrow?: string;
  title?: string;
}) {
  return (
    <Section>
      <Container>
        <div className="mb-12 max-w-2xl">
          <Eyebrow>{eyebrow}</Eyebrow>
          <Heading className="mt-5">{title}</Heading>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <Link
              key={s.slug}
              href={`/${s.slug}`}
              className="group rounded-card border border-line bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40"
            >
              <div className="text-3xl">{s.icon}</div>
              <h3 className="mt-4 text-lg font-semibold text-text">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{s.summary}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent">
                Learn more
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </Section>
  );
}
