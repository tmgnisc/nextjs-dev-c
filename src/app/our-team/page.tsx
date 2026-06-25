import type { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import TeamGrid from '@/components/sections/TeamGrid';
import StatsBand from '@/components/sections/StatsBand';
import CTASection from '@/components/sections/CTASection';
import { team } from '@/content/team';

export const metadata: Metadata = {
  title: 'Our Team',
  description: 'Meet the strategists, engineers, and storytellers behind Dev Community Nepal.',
};

export default function TeamPage() {
  return (
    <>
      <Hero
        eyebrow="Our team"
        title="The people behind"
        highlight="the results."
        subtitle="A senior team of strategists, engineers, and storytellers who treat your growth like their own."
        cta={{ label: 'Join the team', href: '/contact-us' }}
      />

      <div className="pb-4">
        <StatsBand
          stats={[
            { value: '24', label: 'Specialists' },
            { value: '12+', label: 'Avg. years’ experience' },
            { value: '9', label: 'Countries reached' },
            { value: '96%', label: 'Client retention' },
          ]}
        />
      </div>

      <TeamGrid members={team} eyebrow="Leadership" title="Meet the team" />

      <CTASection title="Let's Build Together" body="Become part of a community that turns ideas into reality." />
    </>
  );
}
