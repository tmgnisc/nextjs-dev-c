export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readingTime: string;
  image: string;
};

export const posts: Post[] = [
  {
    slug: 'core-web-vitals-2026',
    title: 'Core Web Vitals in 2026: what still moves rankings',
    excerpt: 'A practical look at which performance signals actually correlate with rankings this year — and which are noise.',
    category: 'SEO',
    date: 'June 2, 2026',
    readingTime: '7 min read',
    image: '/images/projects/project-2.jpg',
  },
  {
    slug: 'ai-search-visibility',
    title: 'How to stay visible as AI answers replace blue links',
    excerpt: 'Generative engines are changing how people find brands. Here is how to be the source they cite.',
    category: 'AI / GEO',
    date: 'May 21, 2026',
    readingTime: '9 min read',
    image: '/images/projects/project-3.jpg',
  },
  {
    slug: 'paid-organic-synergy',
    title: 'Stop letting paid and organic compete',
    excerpt: 'A unified search strategy lowers cost per acquisition. Here is the framework we use with every client.',
    category: 'Paid Media',
    date: 'May 8, 2026',
    readingTime: '6 min read',
    image: '/images/projects/project-4.jpg',
  },
  {
    slug: 'cro-experiment-design',
    title: 'Designing CRO experiments that actually reach significance',
    excerpt: 'Most A/B tests fail because of how they are scoped, not what they test. A field guide to honest experimentation.',
    category: 'CRO',
    date: 'April 26, 2026',
    readingTime: '8 min read',
    image: '/images/projects/project-5.jpg',
  },
  {
    slug: 'content-clusters',
    title: 'Topic clusters: the content model that compounds',
    excerpt: 'Why a hub-and-spoke content structure beats one-off blog posts for durable organic growth.',
    category: 'Content',
    date: 'April 12, 2026',
    readingTime: '5 min read',
    image: '/images/projects/project-6.jpg',
  },
  {
    slug: 'analytics-you-can-trust',
    title: 'Building analytics your leadership team actually trusts',
    excerpt: 'Clean tracking is a growth multiplier. A blueprint for GA4, server-side events, and conversion modeling.',
    category: 'Data',
    date: 'March 30, 2026',
    readingTime: '7 min read',
    image: '/images/projects/seo-audits.jpg',
  },
];
