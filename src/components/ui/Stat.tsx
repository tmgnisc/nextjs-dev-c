import { cn } from '@/lib/cn';

export default function Stat({
  value,
  label,
  className,
}: {
  value: string;
  label: string;
  className?: string;
}) {
  return (
    <div className={cn('text-center sm:text-left', className)}>
      <div className="text-gradient font-display text-4xl font-bold sm:text-5xl">{value}</div>
      <div className="mt-2 text-sm text-muted">{label}</div>
    </div>
  );
}
