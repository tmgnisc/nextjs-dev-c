import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Eyebrow from '@/components/ui/Eyebrow';
import Heading from '@/components/ui/Heading';
import Badge from '@/components/ui/Badge';
import MemberPhoto from '@/components/ui/MemberPhoto';
import CTASection from '@/components/sections/CTASection';
import type { Member } from '@/content/team';

export default function TeamMemberPage({ member }: { member: Member }) {
  return (
    <>
      <Section>
        <Container className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div className="relative aspect-square overflow-hidden rounded-card border border-line">
            <MemberPhoto member={member} sizes="(max-width: 1024px) 100vw, 460px" />
          </div>
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <Eyebrow>{member.role}</Eyebrow>
              <Badge>{member.department}</Badge>
            </div>
            <Heading as="h1" className="mt-5">
              {member.name}
            </Heading>
            <p className="mt-6 text-lg leading-relaxed text-muted">{member.bio}</p>

            <div className="mt-10 space-y-5">
              {member.skills.map((skill) => (
                <div key={skill.label}>
                  <div className="mb-1.5 flex justify-between text-sm">
                    <span className="font-medium text-text">{skill.label}</span>
                    <span className="text-muted">{skill.level}%</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-pill bg-surface-2">
                    <div className="bg-brand-gradient h-full rounded-pill" style={{ width: `${skill.level}%` }} />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex gap-3">
              {member.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="rounded-pill border border-line px-4 py-2 text-sm text-muted transition-colors hover:border-accent/50 hover:text-accent"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <CTASection title={`Work with ${member.name.split(' ')[0]} and the team`} />
    </>
  );
}
