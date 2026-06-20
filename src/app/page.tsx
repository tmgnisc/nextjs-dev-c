import Hero from '@/components/sections/Hero';
import ServicesMarquee from '@/components/sections/ServicesMarquee';
import StatsBand from '@/components/sections/StatsBand';
import FeatureGrid from '@/components/sections/FeatureGrid';
import ServiceList from '@/components/sections/ServiceList';
import Testimonials from '@/components/sections/Testimonials';
import CTASection from '@/components/sections/CTASection';
import { services } from '@/content/services';
import { testimonials } from '@/content/testimonials';
import { site } from '@/content/site';

export default function Home() {
  return (
    <>
      <Hero
        eyebrow={site.tagline}
        title="We grow brands with"
        highlight="search, data, and code."
        subtitle={site.description}
        cta={{ label: 'Start a project', href: '/contact-us' }}
        secondaryCta={{ label: 'See our work', href: '/services' }}
        image="/images/hero.png"
      />

      <ServicesMarquee items={['SEO', 'PPC', 'Content Marketing', 'Data & Analytics', 'CRO', 'Web Development']} />

      <div className="pt-20 md:pt-28">
        <StatsBand
          stats={[
            { value: '12+', label: 'Years in search' },
            { value: '180+', label: 'Projects shipped' },
            { value: '3.4x', label: 'Avg. return on retainer' },
            { value: '96%', label: 'Client retention' },
          ]}
        />
      </div>

      <FeatureGrid
        eyebrow="Why Dev Community Nepal"
        title="A growth partner, not a vendor"
        items={[
          { icon: '🧭', title: 'Strategy first', body: 'We start with your goals and economics, then build the plan that gets there — no cookie-cutter playbooks.' },
          { icon: '📈', title: 'Measurable outcomes', body: 'Clean tracking and honest reporting, so you always know what’s working and why.' },
          { icon: '🤝', title: 'An extension of your team', body: 'We work inside your tools and cadence, sharing context instead of hiding behind a black box.' },
        ]}
      />

      <ServiceList services={services.slice(0, 6)} />

      <Testimonials items={testimonials} />

      <CTASection />
    </>
  );
}
