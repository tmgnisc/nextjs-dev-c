export type Member = {
  slug: string;
  name: string;
  role: string;
  bio: string;
  skills: { label: string; level: number }[];
  image: string;
  socials: { label: string; href: string }[];
};

export const team: Member[] = [
  {
    slug: 'sarah-mitchell',
    name: 'Sarah Mitchell',
    role: 'Head of SEO',
    bio: 'Sarah has led organic growth for retail and SaaS brands for over a decade. She specializes in technical SEO and turning messy migrations into ranking recoveries — translating crawl logs into revenue the leadership team can see.',
    skills: [
      { label: 'Technical SEO', level: 95 },
      { label: 'Content Strategy', level: 88 },
      { label: 'Analytics', level: 82 },
    ],
    image: '/images/team/sarah-mitchell.png',
    socials: [
      { label: 'LinkedIn', href: 'https://linkedin.com' },
      { label: 'X', href: 'https://x.com' },
    ],
  },
  { slug: 'brian-collins', name: 'Brian Collins', role: 'Paid Media Lead', bio: 'Brian runs paid search and social with a relentless focus on profitable scale, having managed eight-figure budgets across competitive markets.', skills: [{ label: 'Google Ads', level: 93 }, { label: 'Paid Social', level: 87 }, { label: 'Attribution', level: 80 }], image: '/images/team/brian-collins.png', socials: [{ label: 'LinkedIn', href: 'https://linkedin.com' }] },
  { slug: 'ralph-edwards', name: 'Ralph Edwards', role: 'Web Engineering Lead', bio: 'Ralph builds the fast, accessible, conversion-focused sites our campaigns send traffic to, with a soft spot for Core Web Vitals.', skills: [{ label: 'Next.js', level: 94 }, { label: 'Performance', level: 90 }, { label: 'Accessibility', level: 85 }], image: '/images/team/ralph-edwards.png', socials: [{ label: 'GitHub', href: 'https://github.com' }] },
  { slug: 'brooklyn-simmons', name: 'Brooklyn Simmons', role: 'Content Director', bio: 'Brooklyn shapes editorial strategy and leads a team of writers who turn search demand into content people actually want to read.', skills: [{ label: 'Editorial', level: 92 }, { label: 'Content SEO', level: 86 }, { label: 'Brand Voice', level: 84 }], image: '/images/team/brooklyn-simmons.png', socials: [{ label: 'LinkedIn', href: 'https://linkedin.com' }] },
];

export const getMember = (slug: string) => team.find((m) => m.slug === slug);
