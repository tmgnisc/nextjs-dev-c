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
  tagline: 'COLLABORATE & INNOVATE.',
  description:
    "Whether you are a student looking to upskill, a youth eager to contribute, or a company seeking talent, DEV Community Nepal is here to strengthen Nepal’s tech future together.",
  email: 'info@devcommunitynepal.com',
  phone: '+977 9869724290',
  address: 'Kathmandu, Nepal',
  socials: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/company/devcommunitynepal/' },
    { label: 'Facebook', href: 'https://www.facebook.com/share/1BpMn5Td6N/' },
    { label: 'Instagram', href: 'https://www.instagram.com/devcommunitynepal?igsh=MTRyZmNiY3FqdnpnbQ==' },
    { label: 'YouTube', href: 'https://youtube.com' },
  ],
  footerColumns: [
    {
      title: 'Quick Links',
      links: [
        { label: 'About Us', href: '/about-us' },
        { label: 'Events', href: '/events' },
        { label: 'Our Impact', href: '/about-us' },
        { label: 'Register', href: '/contact-us' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { label: 'Notion Workshop', href: '/events' },
        { label: 'Digital Marketing', href: '/events' },
        { label: 'Skill Sharing', href: '/events' },
        { label: 'Steam Expo', href: '/events' },
      ],
    },
  ],
};
