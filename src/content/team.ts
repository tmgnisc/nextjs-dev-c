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
    slug: 'sushant-rimal',
    name: 'Sushant Rimal',
    role: 'Founder & Executive Director',
    department: 'Leadership',
    tier: 'founder',
    bio: 'Sushant is the Founder and Executive Director of DEV Community Nepal. He is passionate about building tech communities, empowering youth with tech workshops, and strengthening the Nepalese engineering and science ecosystem through national-scale events.',
    skills: [],
    image: '/images/team/sushant.jpeg',
    socials: [
      { label: 'LinkedIn', href: 'https://www.linkedin.com/company/devcommunitynepal/' },
    ],
  },
  {
    slug: 'muna-adhikari',
    name: 'Muna Adhikari',
    role: 'Operation Lead',
    department: 'Operations',
    tier: 'lead',
    bio: 'Muna oversees the operational backbone of DEV Community Nepal, ensuring programs run smoothly, resources are allocated effectively, and every initiative achieves its intended impact.',
    skills: [],
    image: '/images/team/muna operation lead.webp',
    socials: [{ label: 'LinkedIn', href: 'https://www.linkedin.com/company/devcommunitynepal/' }],
  },
  {
    slug: 'rupak-sapkota',
    name: 'Rupak Sapkota',
    role: 'Community Engagement Lead',
    department: 'Community',
    tier: 'lead',
    bio: 'Rupak drives community engagement strategies, fostering meaningful connections between members, organizing networking events, and building a vibrant, inclusive tech community across Nepal.',
    skills: [],
    image: '/images/team/rupak sapkota.jpg',
    socials: [{ label: 'LinkedIn', href: 'https://www.linkedin.com/company/devcommunitynepal/' }],
  },
  {
    slug: 'aditya-pangini',
    name: 'Aditya Pangini',
    role: 'Creative Lead',
    department: 'Creative',
    tier: 'lead',
    bio: 'Aditya leads the creative direction at DEV Community Nepal, bringing visual storytelling and design thinking to brand communications, event branding, and digital presence.',
    skills: [],
    image: '/images/team/aditya-creatie.jpg',
    socials: [{ label: 'LinkedIn', href: 'https://www.linkedin.com/company/devcommunitynepal/' }],
  },
  {
    slug: 'sisam-rimal',
    name: 'Sisam Rimal',
    role: 'Tech Lead',
    department: 'Technology',
    tier: 'lead',
    bio: 'Sisam leads the technology initiatives at DEV Community Nepal, mentoring aspiring developers, organizing technical workshops, and driving innovation within the community.',
    skills: [],
    image: '/images/team/sisam.jpeg',
    socials: [{ label: 'LinkedIn', href: 'https://www.linkedin.com/company/devcommunitynepal/' }],
  },
  {
    slug: 'nischal-tamang',
    name: 'Nischal Tamang',
    role: 'Tech Lead',
    department: 'Technology',
    tier: 'lead',
    bio: 'Nischal supports the technology vertical at DEV Community Nepal, contributing to technical training programs and helping students navigate engineering challenges through mentorship.',
    skills: [],
    image: '/images/team/nischal.jpeg',
    socials: [{ label: 'LinkedIn', href: 'https://www.linkedin.com/company/devcommunitynepal/' }],
  },

   {
    slug: 'sushmita-bhatt',
    name: 'Sushmita Bhatt',
    role: 'Event & Program Lead',
    department: 'Events & Programs',
    tier: 'lead',
    bio: 'Sushmita co-leads event and program initiatives at DEV Community Nepal, coordinating logistics, partnerships, and participant experiences across community events and initiatives.',
    skills: [],
    image: '/images/team/sushmita.jpg',
    socials: [{ label: 'LinkedIn', href: 'https://www.linkedin.com/company/devcommunitynepal/' }],
  },
  
  {
    slug: 'mahesh-tamang',
    name: 'Mahesh Tamang',
    role: 'Event & Program Lead',
    department: 'Events & Programs',
    tier: 'lead',
    bio: 'Mahesh leads event planning and program management at DEV Community Nepal, orchestrating hackathons, workshops, and national-level events that inspire students and youth.',
    skills: [],
    image: '/images/team/mahesh-even lead.JPG',
    socials: [{ label: 'LinkedIn', href: 'https://www.linkedin.com/company/devcommunitynepal/' }],
  },
 
  {
    slug: 'subham-devkota',
    name: 'Subham Devkota',
    role: 'Event & Program Lead',
    department: 'Events & Programs',
    tier: 'lead',
    bio: 'Subham coordinates events and programs at DEV Community Nepal, driving student participation, managing event timelines, and ensuring impactful learning experiences throughout the year.',
    skills: [],
    image: '/images/team/subham -m event lead.jpg',
    socials: [{ label: 'LinkedIn', href: 'https://www.linkedin.com/company/devcommunitynepal/' }],
  },
  {
    slug: 'kritika-ghimire',
    name: 'Kritika Ghimire',
    role: 'Social Media Lead',
    department: 'Social Media',
    tier: 'lead',
    bio: 'Kritika leads social media strategy at DEV Community Nepal, crafting engaging content, growing online presence, and amplifying the community\'s voice across digital platforms.',
    skills: [],
    image: '/images/team/kritika- social media lead.jpeg',
    socials: [{ label: 'LinkedIn', href: 'https://www.linkedin.com/company/devcommunitynepal/' }],
  },
];

export const founder = team.find((m) => m.tier === 'founder');
export const leads = team.filter((m) => m.tier === 'lead');
export const getMember = (slug: string) => team.find((m) => m.slug === slug);
