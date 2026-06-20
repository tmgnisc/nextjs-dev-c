import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Heading from '@/components/ui/Heading';
import Eyebrow from '@/components/ui/Eyebrow';

export default function FAQ({ items }: { items: { q: string; a: string }[] }) {
  if (items.length === 0) return null;
  return (
    <Section>
      <Container className="max-w-3xl">
        <div className="mb-10">
          <Eyebrow>FAQ</Eyebrow>
          <Heading className="mt-5">Questions, answered</Heading>
        </div>
        <div className="divide-y divide-line rounded-card border border-line bg-surface/50">
          {items.map((item) => (
            <details key={item.q} className="group px-6 py-5 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between gap-4 text-[15px] font-medium text-text">
                {item.q}
                <span className="text-accent transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-muted">{item.a}</p>
            </details>
          ))}
        </div>
      </Container>
    </Section>
  );
}
