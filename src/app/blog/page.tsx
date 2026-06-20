import type { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import BlogGrid from '@/components/sections/BlogGrid';
import CTASection from '@/components/sections/CTASection';
import { posts } from '@/content/posts';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Field notes on SEO, paid media, content, and growth from the Dev Community Nepal team.',
};

export default function BlogPage() {
  return (
    <>
      <Hero
        eyebrow="Blog"
        title="Field notes on"
        highlight="growth."
        subtitle="Practical writing on search, paid media, content, and data — straight from the team doing the work."
      />
      <BlogGrid posts={posts} />
      <CTASection title="Want this in your inbox?" body="Get in touch and we’ll add you to our monthly growth digest." cta={{ label: 'Subscribe', href: '/contact-us' }} />
    </>
  );
}
