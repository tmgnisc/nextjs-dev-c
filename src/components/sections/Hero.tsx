import Image from 'next/image';
import Container from '@/components/ui/Container';
import Heading from '@/components/ui/Heading';
import Eyebrow from '@/components/ui/Eyebrow';
import Button from '@/components/ui/Button';

type Cta = { label: string; href: string };

export default function Hero({
  eyebrow,
  title,
  highlight,
  subtitle,
  cta,
  secondaryCta,
  image,
}: {
  eyebrow?: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  cta?: Cta;
  secondaryCta?: Cta;
  image?: string;
}) {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[480px] w-[820px] -translate-x-1/2 rounded-full bg-brand/20 blur-[120px]" />
      <Container className="relative grid items-center gap-12 py-20 md:py-28 lg:grid-cols-2">
        <div>
          {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
          <Heading as="h1" className="mt-6">
            {title}
            {highlight && <span className="text-gradient"> {highlight}</span>}
          </Heading>
          {subtitle && <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">{subtitle}</p>}
          {(cta || secondaryCta) && (
            <div className="mt-9 flex flex-wrap gap-4">
              {cta && <Button href={cta.href}>{cta.label}</Button>}
              {secondaryCta && (
                <Button href={secondaryCta.href} variant="ghost">
                  {secondaryCta.label}
                </Button>
              )}
            </div>
          )}
        </div>

        {image && (
          <div className="relative aspect-[4/3] overflow-hidden rounded-card border border-line">
            <Image src={image} alt="" fill className="object-cover" priority sizes="(max-width: 1024px) 100vw, 600px" />
          </div>
        )}
      </Container>
    </section>
  );
}
