export type SocialLink = { label: string; href: string };
export type FooterColumn = { title: string; links: { label: string; href: string }[] };

export type Site = {
  name: string;
  tagline: string;
  description: string;
  email: string;
  phone: string;
  address: string;
  socials: SocialLink[];
  footerColumns: FooterColumn[];
};

export const site: Site = {
  name: 'Dev Community Nepal',
  tagline: 'Digital growth, engineered.',
  description:
    'Dev Community Nepal is a Kathmandu-based digital growth studio. We help brands rank, convert, and scale with SEO, paid media, content, and web engineering.',
  email: 'hello@devcommunitynepal.com',
  phone: '+977 98-0000-0000',
  address: 'Jhamsikhel, Lalitpur, Kathmandu, Nepal',
  socials: [
    { label: 'LinkedIn', href: 'https://linkedin.com' },
    { label: 'X', href: 'https://x.com' },
    { label: 'GitHub', href: 'https://github.com' },
    { label: 'Instagram', href: 'https://instagram.com' },
  ],
  footerColumns: [
    {
      title: 'Events',
      links: [
        { label: 'Notion Workshop', href: '/events' },
        { label: 'Digital Marketing', href: '/events' },
        { label: 'Skill Sharing', href: '/events' },
        { label: 'Steam Expo', href: '/events' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About', href: '/about-us' },
        { label: 'Team', href: '/our-team' },
        { label: 'Events', href: '/events' },
        { label: 'Blog', href: '/blog' },
      ],
    },
    {
      title: 'Get in touch',
      links: [
        { label: 'Contact', href: '/contact-us' },
        { label: 'Pricing', href: '/pricing-plan' },
        { label: 'FAQs', href: '/faqs' },
      ],
    },
  ],
};
