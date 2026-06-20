import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import { cn } from '@/lib/cn';
import type { Plan } from '@/content/pricing';

export default function PricingTable({ plans }: { plans: Plan[] }) {
  return (
    <Section className="pt-0">
      <Container>
        <div className="grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={cn(
                'flex flex-col rounded-card border p-8',
                plan.featured
                  ? 'border-accent/40 bg-surface shadow-[0_24px_60px_rgba(61,126,170,0.18)]'
                  : 'border-line bg-surface/50',
              )}
            >
              {plan.featured && (
                <span className="bg-brand-gradient mb-4 inline-flex w-fit rounded-pill px-3 py-1 text-xs font-semibold text-ink">
                  Most popular
                </span>
              )}
              <h3 className="font-display text-xl font-bold">{plan.name}</h3>
              <p className="mt-2 text-sm text-muted">{plan.description}</p>
              <div className="mt-6 flex items-end gap-1">
                <span className="text-gradient font-display text-4xl font-bold">{plan.price}</span>
                {plan.cadence && <span className="pb-1 text-sm text-muted">{plan.cadence}</span>}
              </div>
              <ul className="mt-6 flex-1 space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-muted">
                    <span className="mt-0.5 text-accent">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Button href="/contact-us" variant={plan.featured ? 'primary' : 'ghost'} className="w-full">
                  {plan.cta}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
