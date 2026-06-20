import { cn } from '@/lib/cn';

export default function Badge({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-pill bg-surface-2 px-3 py-1 text-xs font-medium text-muted',
        className,
      )}
    >
      {children}
    </span>
  );
}
