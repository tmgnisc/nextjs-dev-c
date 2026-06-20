import type { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import StatsBand from '@/components/sections/StatsBand';
import FeatureGrid from '@/components/sections/FeatureGrid';
import TeamGrid from '@/components/sections/TeamGrid';
import CTASection from '@/components/sections/CTASection';
import { team } from '@/content/team';

export const metadata: Metadata = {
  title: 'About',
  description: 'Dev Community Nepal is a Kathmandu-based digital growth studio built on strategy, data, and craft.',
};

export default function AboutPage() {
  return (
    <>
      <Hero
        eyebrow="About us"
        title="Built on strategy,"
        highlight="proven by results."
        subtitle="We’re a Kathmandu-based team of strategists, engineers, and storytellers who help brands turn search and paid channels into dependable growth."
        cta={{ label: 'Work with us', href: '/contact-us' }}
        image="/images/about.png"
      />

      <div className="pb-4">
        <StatsBand
          stats={[
            { value: '2016', label: 'Founded' },
            { value: '24', label: 'Specialists' },
            { value: '14', label: 'Industries served' },
            { value: '9', label: 'Countries reached' },
          ]}
        />
      </div>

      <FeatureGrid
        eyebrow="How we work"
        title="Principles that shape every engagement"
        items={[
          { icon: '🔬', title: 'Evidence over opinion', body: 'Every recommendation is grounded in data you can inspect, not gut feel.' },
          { icon: '🧱', title: 'Durable, not hacky', body: 'We build growth that survives algorithm updates and platform changes.' },
          { icon: '💬', title: 'Radical clarity', body: 'Plain-English reporting and a single source of truth, always.' },
        ]}
      />

      <TeamGrid members={team} />

      <CTASection title="Let’s build your growth engine" />
    </>
  );
}
