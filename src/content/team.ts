export type Member = {
  slug: string;
  name: string;
  role: string;
  department: string;
  tier: 'founder' | 'lead';
  bio: string;
  skills: { label: string; level: number }[];
  image?: string;
  socials: { label: string; href: string }[];
};

export const team: Member[] = [
  {
    slug: 'sarah-mitchell',
    name: 'Sarah Mitchell',
    role: 'Founder & CEO',
    department: 'Leadership',
    tier: 'founder',
    bio: 'Sarah founded Dev Community Nepal in 2016 after a decade leading organic growth for retail and SaaS brands. She sets the studio’s strategy and standards, and still loves turning a messy migration into a ranking recovery.',
    skills: [
      { label: 'Growth Strategy', level: 96 },
      { label: 'Technical SEO', level: 90 },
      { label: 'Leadership', level: 92 },
    ],
    image: '/images/team/sarah-mitchell.png',
    socials: [
      { label: 'LinkedIn', href: 'https://linkedin.com' },
      { label: 'X', href: 'https://x.com' },
    ],
  },
  {
    slug: 'ralph-edwards',
    name: 'Ralph Edwards',
    role: 'Tech Lead',
    department: 'Engineering',
    tier: 'lead',
    bio: 'Ralph leads engineering, building the fast, accessible, conversion-focused sites our campaigns send traffic to. He has a soft spot for Core Web Vitals and clean, documented code.',
    skills: [
      { label: 'Next.js', level: 94 },
      { label: 'Performance', level: 90 },
      { label: 'Accessibility', level: 85 },
    ],
    image: '/images/team/ralph-edwards.png',
    socials: [{ label: 'GitHub', href: 'https://github.com' }],
  },
  {
    slug: 'brian-collins',
    name: 'Brian Collins',
    role: 'Marketing Lead',
    department: 'Marketing',
    tier: 'lead',
    bio: 'Brian heads paid media and demand generation with a relentless focus on profitable scale, having managed eight-figure budgets across competitive markets.',
    skills: [
      { label: 'Paid Media', level: 93 },
      { label: 'Demand Gen', level: 88 },
      { label: 'Attribution', level: 82 },
    ],
    image: '/images/team/brian-collins.png',
    socials: [{ label: 'LinkedIn', href: 'https://linkedin.com' }],
  },
  {
    slug: 'brooklyn-simmons',
    name: 'Brooklyn Simmons',
    role: 'Design Lead',
    department: 'Design',
    tier: 'lead',
    bio: 'Brooklyn leads brand and product design, shaping the identity, UI, and experiences that make our clients’ work distinct and easy to use.',
    skills: [
      { label: 'Brand & Identity', level: 92 },
      { label: 'UI Design', level: 89 },
      { label: 'Design Systems', level: 84 },
    ],
    image: '/images/team/brooklyn-simmons.png',
    socials: [{ label: 'LinkedIn', href: 'https://linkedin.com' }],
  },
  {
    slug: 'anil-bhandari',
    name: 'Anil Bhandari',
    role: 'SEO Lead',
    department: 'Search',
    tier: 'lead',
    bio: 'Anil runs our search practice, from technical audits to content strategy, turning organic search into a dependable, compounding channel for every client.',
    skills: [
      { label: 'Technical SEO', level: 91 },
      { label: 'Content Strategy', level: 86 },
      { label: 'Analytics', level: 83 },
    ],
    socials: [{ label: 'LinkedIn', href: 'https://linkedin.com' }],
  },
  {
    slug: 'maya-rai',
    name: 'Maya Rai',
    role: 'Content Lead',
    department: 'Content',
    tier: 'lead',
    bio: 'Maya directs editorial strategy and leads a team of writers who turn search demand into content people actually want to read.',
    skills: [
      { label: 'Editorial', level: 90 },
      { label: 'Content SEO', level: 85 },
      { label: 'Brand Voice', level: 87 },
    ],
    socials: [{ label: 'LinkedIn', href: 'https://linkedin.com' }],
  },
];

export const founder = team.find((m) => m.tier === 'founder');
export const leads = team.filter((m) => m.tier === 'lead');
export const getMember = (slug: string) => team.find((m) => m.slug === slug);
