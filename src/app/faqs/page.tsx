import type { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import FAQ from '@/components/sections/FAQ';
import CTASection from '@/components/sections/CTASection';
import { faqs } from '@/content/faqs';

export const metadata: Metadata = {
  title: 'FAQs',
  description: 'Answers to the questions we hear most about working with Dev Community Nepal.',
};

export default function FaqsPage() {
  return (
    <>
      <Hero
        eyebrow="FAQs"
        title="Questions,"
        highlight="answered."
        subtitle="The things teams ask us most before they get started. Can’t find your answer? Reach out anytime."
        cta={{ label: 'Ask us anything', href: '/contact-us' }}
      />
      <FAQ items={faqs} />
      <CTASection title="Still have questions?" body="We’re happy to talk through your specific situation." />
    </>
  );
}
