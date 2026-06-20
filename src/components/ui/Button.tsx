import Link from 'next/link';
import { cn } from '@/lib/cn';

type Variant = 'primary' | 'ghost' | 'link';

const base =
  'inline-flex items-center justify-center gap-2 font-semibold transition-all duration-300 ' +
  'focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2';

const variants: Record<Variant, string> = {
  primary:
    'bg-brand-gradient text-ink rounded-pill px-7 py-3.5 text-[15px] shadow-[0_8px_24px_rgba(61,126,170,0.25)] ' +
    'hover:-translate-y-0.5 hover:shadow-[0_14px_34px_rgba(255,228,122,0.32)]',
  ghost:
    'rounded-pill border border-line px-7 py-3.5 text-[15px] text-text hover:border-accent/60 hover:text-accent',
  link: 'text-accent hover:underline underline-offset-4',
};

type Props = {
  children: React.ReactNode;
  href?: string;
  variant?: Variant;
  className?: string;
  type?: 'button' | 'submit';
};

export default function Button({ children, href, variant = 'primary', className, type }: Props) {
  const classes = cn(base, variants[variant], className);
  if (href) {
    const internal = href.startsWith('/');
    if (internal) {
      return (
        <Link href={href} className={classes}>
          {children}
        </Link>
      );
    }
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }
  return (
    <button type={type ?? 'button'} className={classes}>
      {children}
    </button>
  );
}
