import Image from 'next/image';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Badge from '@/components/ui/Badge';
import type { Post } from '@/content/posts';

export default function BlogGrid({ posts }: { posts: Post[] }) {
  return (
    <Section className="pt-0">
      <Container>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="group flex flex-col overflow-hidden rounded-card border border-line bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-accent/40"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={post.image}
                  alt=""
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 380px"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center gap-3">
                  <Badge>{post.category}</Badge>
                  <span className="text-xs text-muted">{post.readingTime}</span>
                </div>
                <h3 className="mt-4 text-lg font-semibold leading-snug text-text">{post.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{post.excerpt}</p>
                <div className="mt-5 text-xs text-muted">{post.date}</div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
