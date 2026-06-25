import Hero from '@/components/sections/Hero';
import ServicesMarquee from '@/components/sections/ServicesMarquee';
import StatsBand from '@/components/sections/StatsBand';
import ServiceList from '@/components/sections/ServiceList';
import EventsSection from '@/components/sections/EventsSection';
import PartnersSection from '@/components/sections/PartnersSection';
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
            { value: '5+', label: 'Tech Meetup' },
            { value: '150+', label: 'Workshops and Training' },
            { value: '100+', label: 'Partnerships' },
            { value: '2021', label: 'Founded' },
          ]}
        />
      </div>

      <ServiceList
        eyebrow="What we do"
        title="Our Programs & Initiatives"
        services={[
          {
            slug: '',
            title: 'WORKSHOPS',
            summary: 'DEV Community Nepal organizes several personal and professional workshops throughout the calendar year. The workshops are intended to provide technical as well as market-related knowledge.',
            icon: '🛠️',
            tagline: '',
            features: [],
            faq: [],
            image: '',
          },
          {
            slug: '',
            title: 'HACKATHON',
            summary: '"DevFest" is the hackathon competition organized by DEV Community Nepal. In the past we have conducted couple of hackathons successfully. It is one of the grand events of the year.',
            icon: '💻',
            tagline: '',
            features: [],
            faq: [],
            image: '',
          },
          {
            slug: '',
            title: 'SOCIAL IMPACT',
            summary: 'DEV Community Nepal not only tries to uplift the students pursuing technology, but also strives to create an impact on the society through various awareness programs, as our responsibility towards our nation',
            icon: '🌍',
            tagline: '',
            features: [],
            faq: [],
            image: '',
          },
        ]}
      />

      <EventsSection />

      <PartnersSection />
    </>
  );
}
