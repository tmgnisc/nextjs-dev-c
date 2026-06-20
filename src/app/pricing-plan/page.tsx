import type { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import PricingTable from '@/components/sections/PricingTable';
import FAQ from '@/components/sections/FAQ';
import CTASection from '@/components/sections/CTASection';
import { plans, pricingFaq } from '@/content/pricing';

export const metadata: Metadata = {
  title: 'Pricing',
  description: 'Simple, transparent monthly plans that scale from one channel to a full embedded growth team.',
};

export default function PricingPage() {
  return (
    <>
      <Hero
        eyebrow="Pricing"
        title="Plans that scale"
        highlight="with you."
        subtitle="No long-term contracts. Every plan starts with an audit and a 90-day roadmap, so we’re aligned before work begins."
      />
      <PricingTable plans={plans} />
      <FAQ items={pricingFaq} />
      <CTASection title="Need something custom?" body="Tell us about your goals and we’ll tailor a plan to fit." />
    </>
  );
}
