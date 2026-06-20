import { cn } from '@/lib/cn';

type Props = {
  as?: 'h1' | 'h2' | 'h3';
  children: React.ReactNode;
  className?: string;
};

const sizes: Record<NonNullable<Props['as']>, string> = {
  h1: 'text-4xl sm:text-5xl lg:text-6xl',
  h2: 'text-3xl sm:text-4xl lg:text-5xl',
  h3: 'text-2xl sm:text-3xl',
};

export default function Heading({ as = 'h2', children, className }: Props) {
  const Tag = as;
  return <Tag className={cn(sizes[as], 'text-balance', className)}>{children}</Tag>;
}
