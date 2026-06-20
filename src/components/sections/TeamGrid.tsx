import Link from 'next/link';
import Image from 'next/image';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Heading from '@/components/ui/Heading';
import Eyebrow from '@/components/ui/Eyebrow';
import type { Member } from '@/content/team';

export default function TeamGrid({
  members,
  eyebrow = 'The team',
  title = 'People behind the work',
}: {
  members: Member[];
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
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {members.map((m) => (
            <Link
              key={m.slug}
              href={`/team/${m.slug}`}
              className="group rounded-card border border-line bg-surface p-4 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40"
            >
              <div className="relative aspect-square overflow-hidden rounded-xl">
                <Image
                  src={m.image}
                  alt={m.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 260px"
                />
              </div>
              <h3 className="mt-4 text-base font-semibold text-text">{m.name}</h3>
              <p className="text-sm text-muted">{m.role}</p>
            </Link>
          ))}
        </div>
      </Container>
    </Section>
  );
}
