export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  avatar: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      'They recovered the organic traffic we lost in a replatform within two quarters — and gave us reporting we finally trust. It felt like adding a senior team overnight.',
    name: 'Anita Sharma',
    role: 'VP Marketing, Himalaya Retail',
    avatar: '/images/avatars/author-1.jpg',
  },
  {
    quote:
      'Paid and organic used to fight each other. Now they compound. Cost per lead is down 41% and pipeline has never been healthier.',
    name: 'David Chen',
    role: 'Growth Lead, Annapurna SaaS',
    avatar: '/images/avatars/author-2.jpg',
  },
  {
    quote:
      'Clear strategy, honest reporting, and a team that ships. Dev Community Nepal is the rare agency that does what it says it will.',
    name: 'Priya Thapa',
    role: 'Founder, Summit Academy',
    avatar: '/images/avatars/author-3.jpg',
  },
];
