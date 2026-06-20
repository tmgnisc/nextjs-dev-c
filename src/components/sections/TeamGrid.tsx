import Link from 'next/link';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Heading from '@/components/ui/Heading';
import Eyebrow from '@/components/ui/Eyebrow';
import Badge from '@/components/ui/Badge';
import MemberPhoto from '@/components/ui/MemberPhoto';
import type { Member } from '@/content/team';

function LeadCard({ member }: { member: Member }) {
  return (
    <Link
      href={`/team/${member.slug}`}
      className="group rounded-card border border-line bg-surface p-4 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40"
    >
      <div className="relative aspect-square overflow-hidden rounded-xl">
        <MemberPhoto member={member} sizes="(max-width: 768px) 50vw, 260px" />
      </div>
      <div className="mt-4 flex items-center justify-between gap-2">
        <h3 className="text-base font-semibold text-text">{member.name}</h3>
        <Badge>{member.department}</Badge>
      </div>
      <p className="mt-1 text-sm text-muted">{member.role}</p>
    </Link>
  );
}

export default function TeamGrid({
  members,
  eyebrow = 'The team',
  title = 'People behind the work',
}: {
  members: Member[];
  eyebrow?: string;
  title?: string;
}) {
  const founder = members.find((m) => m.tier === 'founder');
  const leads = members.filter((m) => m.tier === 'lead');

  return (
    <Section>
      <Container>
        <div className="mb-12 max-w-2xl">
          <Eyebrow>{eyebrow}</Eyebrow>
          <Heading className="mt-5">{title}</Heading>
        </div>

        {founder && (
          <Link
            href={`/team/${founder.slug}`}
            className="group mb-12 grid gap-6 overflow-hidden rounded-card border border-accent/30 bg-surface p-6 transition-all duration-300 hover:border-accent/60 sm:grid-cols-[200px_1fr] sm:items-center"
          >
            <div className="relative aspect-square overflow-hidden rounded-xl">
              <MemberPhoto member={founder} sizes="200px" />
            </div>
            <div>
              <span className="bg-brand-gradient inline-flex rounded-pill px-3 py-1 text-xs font-semibold text-ink">
                {founder.role}
              </span>
              <h3 className="mt-3 font-display text-2xl font-bold">{founder.name}</h3>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted">{founder.bio}</p>
            </div>
          </Link>
        )}

        {leads.length > 0 && (
          <>
            <div className="mb-6 flex items-center gap-4">
              <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-muted">Department leads</h3>
              <div className="h-px flex-1 bg-line" />
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {leads.map((m) => (
                <LeadCard key={m.slug} member={m} />
              ))}
            </div>
          </>
        )}
      </Container>
    </Section>
  );
}
