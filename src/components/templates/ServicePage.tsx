import Hero from '@/components/sections/Hero';
import FeatureGrid from '@/components/sections/FeatureGrid';
import FAQ from '@/components/sections/FAQ';
import CTASection from '@/components/sections/CTASection';
import type { Service } from '@/content/services';

export default function ServicePage({ service }: { service: Service }) {
  return (
    <>
      <Hero
        eyebrow="Service"
        title={service.title}
        subtitle={service.summary}
        cta={{ label: 'Start a project', href: '/contact-us' }}
        secondaryCta={{ label: 'See all services', href: '/services' }}
        image={service.image}
      />
      {service.features.length > 0 && (
        <FeatureGrid
          eyebrow={service.tagline}
          title={`How our ${service.title.toLowerCase()} works`}
          items={service.features}
        />
      )}
      <FAQ items={service.faq} />
      <CTASection
        title={`Let’s grow your ${service.title.toLowerCase()}`}
        body="Tell us your goals and we’ll come back with a plan — not a pitch."
      />
    </>
  );
}
