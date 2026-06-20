import Container from '@/components/ui/Container';
import Eyebrow from '@/components/ui/Eyebrow';
import Heading from '@/components/ui/Heading';
import Button from '@/components/ui/Button';

export default function ComingSoon({
  title,
  description = 'This page is being rebuilt natively. The content is on its way — in the meantime, explore the rest of the site or get in touch.',
}: {
  title: string;
  description?: string;
}) {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-brand/15 blur-[120px]" />
      <Container className="relative flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
        <Eyebrow>Coming soon</Eyebrow>
        <Heading as="h1" className="mt-6 max-w-2xl">
          {title}
        </Heading>
        <p className="mt-5 max-w-lg text-lg text-muted">{description}</p>
        <div className="mt-9 flex flex-wrap justify-center gap-4">
          <Button href="/">Back to home</Button>
          <Button href="/contact-us" variant="ghost">
            Contact us
          </Button>
        </div>
      </Container>
    </section>
  );
}
