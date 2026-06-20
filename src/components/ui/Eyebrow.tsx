import { cn } from '@/lib/cn';

export default function Eyebrow({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-pill border border-accent/30 bg-accent/5',
        'px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-accent',
        className,
      )}
    >
      {children}
    </span>
  );
}
