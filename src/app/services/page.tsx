import type { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import ServiceList from '@/components/sections/ServiceList';
import StatsBand from '@/components/sections/StatsBand';
import CTASection from '@/components/sections/CTASection';
import { services } from '@/content/services';

export const metadata: Metadata = {
  title: 'Services',
  description: 'SEO, paid media, content, data, CRO, and web engineering — the full range of growth services we offer.',
};

export default function ServicesPage() {
  return (
    <>
      <Hero
        eyebrow="Our services"
        title="Everything you need to"
        highlight="grow online."
        subtitle="From search and paid media to content, data, and web engineering — one team, one plan, measurable outcomes."
        cta={{ label: 'Start a project', href: '/contact-us' }}
      />

      <div className="pb-4">
        <StatsBand
          stats={[
            { value: '6', label: 'Core disciplines' },
            { value: '180+', label: 'Projects shipped' },
            { value: '3.4x', label: 'Avg. return on retainer' },
            { value: '14', label: 'Industries served' },
          ]}
        />
      </div>

      <ServiceList services={services} eyebrow="What we do" title="Growth services, end to end" />

      <CTASection title="Not sure where to start?" body="Tell us your goals and we’ll recommend the right mix of services." />
    </>
  );
}
