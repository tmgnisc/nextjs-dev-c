import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';

export default function CTASection({
  title = 'Ready to grow?',
  body = 'Tell us your goals and we’ll come back with a plan — not a pitch.',
  cta = { label: 'Start a project', href: '/contact-us' },
}: {
  title?: string;
  body?: string;
  cta?: { label: string; href: string };
}) {
  return (
    <Section>
      <Container>
        <div className="relative overflow-hidden rounded-card border border-line bg-surface px-6 py-16 text-center md:px-16">
          <div className="bg-brand-gradient pointer-events-none absolute inset-x-0 -top-24 mx-auto h-48 w-2/3 rounded-full opacity-20 blur-[100px]" />
          <h2 className="relative font-display text-3xl font-bold sm:text-4xl">{title}</h2>
          <p className="relative mx-auto mt-4 max-w-xl text-lg text-muted">{body}</p>
          <div className="relative mt-8 flex justify-center">
            <Button href={cta.href}>{cta.label}</Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
