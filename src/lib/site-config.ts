/**
 * Single source of truth for brand-level values. Reused by metadata and
 * available to any component that needs the brand, nav, or contact details.
 */
export const siteConfig = {
  name: 'Dev Community Nepal',
  description: 'Dev Community Nepal — Tech & Developer Community',
  url: 'https://devcommunitynepal.com',
  contact: {
    phone: '+977 98-0000-0000',
    email: 'hello@devcommunitynepal.com',
  },
  nav: [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about-us' },
    { label: 'Blog', href: '/blog' },
  ],
  services: [
    'SEO',
    'PPC',
    'Content Marketing',
    'Data and Analytics',
    'CRO',
    'Website Development',
  ],
} as const;

export type SiteConfig = typeof siteConfig;
