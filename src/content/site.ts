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
      title: 'Services',
      links: [
        { label: 'SEO', href: '/seo' },
        { label: 'Google Ads', href: '/google-ads' },
        { label: 'Content Marketing', href: '/content-marketing' },
        { label: 'Web Development', href: '/website-development' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About', href: '/about-us' },
        { label: 'Team', href: '/our-team' },
        { label: 'Work', href: '/services' },
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
