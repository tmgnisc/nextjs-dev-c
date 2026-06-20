import { cn } from '@/lib/cn';

export default function Card({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        'rounded-card border border-line bg-surface p-6 transition-all duration-300',
        'hover:-translate-y-1 hover:border-white/15 hover:shadow-[0_18px_40px_rgba(0,0,0,0.3)]',
        className,
      )}
    >
      {children}
    </div>
  );
}
