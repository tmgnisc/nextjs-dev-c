export type Plan = {
  name: string;
  price: string;
  cadence: string;
  description: string;
  features: string[];
  featured?: boolean;
  cta: string;
};

export const plans: Plan[] = [
  {
    name: 'Starter',
    price: '$1,500',
    cadence: '/ month',
    description: 'For early-stage brands that need one channel done properly.',
    features: ['One core channel (SEO or Ads)', 'Monthly strategy call', 'Performance dashboard', 'Email support'],
    cta: 'Start with Starter',
  },
  {
    name: 'Growth',
    price: '$3,800',
    cadence: '/ month',
    description: 'For teams ready to scale across search, content, and paid.',
    features: [
      'Up to three channels',
      'Bi-weekly strategy & reporting',
      'Conversion rate optimization',
      'Dedicated account lead',
      'Priority support',
    ],
    featured: true,
    cta: 'Choose Growth',
  },
  {
    name: 'Scale',
    price: 'Custom',
    cadence: '',
    description: 'For established brands with complex, multi-market needs.',
    features: ['Full-funnel program', 'Embedded specialist team', 'Custom analytics & modeling', 'Quarterly business reviews', 'SLA-backed support'],
    cta: 'Talk to us',
  },
];

export const pricingFaq = [
  { q: 'Are there long-term contracts?', a: 'No. We work on rolling monthly engagements. We earn the renewal every month with results.' },
  { q: 'What is included in the setup?', a: 'Every plan starts with an audit and a 90-day roadmap at no extra cost, so we are aligned before work begins.' },
  { q: 'Can we change plans later?', a: 'Yes — scale up or down with 30 days’ notice as your needs change.' },
];
