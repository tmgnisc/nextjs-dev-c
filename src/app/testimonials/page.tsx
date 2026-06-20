import type { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import Testimonials from '@/components/sections/Testimonials';
import StatsBand from '@/components/sections/StatsBand';
import CTASection from '@/components/sections/CTASection';
import { testimonials } from '@/content/testimonials';

export const metadata: Metadata = {
  title: 'Testimonials',
  description: 'What clients say about working with Dev Community Nepal.',
};

export default function TestimonialsPage() {
  return (
    <>
      <Hero
        eyebrow="Testimonials"
        title="Teams that grew"
        highlight="with us."
        subtitle="We measure our work by our clients’ results. Here’s what they say about the partnership."
        cta={{ label: 'Become a client', href: '/contact-us' }}
      />

      <div className="pb-4">
        <StatsBand
          stats={[
            { value: '96%', label: 'Client retention' },
            { value: '3.4x', label: 'Avg. return on retainer' },
            { value: '180+', label: 'Projects shipped' },
            { value: '4.9/5', label: 'Average rating' },
          ]}
        />
      </div>

      <Testimonials items={testimonials} />

      <CTASection title="Ready to be our next success story?" />
    </>
  );
}
