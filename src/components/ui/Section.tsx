import { cn } from '@/lib/cn';

export default function Section({
  children,
  className,
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={cn('py-20 md:py-28', className)}>
      {children}
    </section>
  );
}
