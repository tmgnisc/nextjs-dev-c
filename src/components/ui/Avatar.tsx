import Image from 'next/image';
import { cn } from '@/lib/cn';

export default function Avatar({
  src,
  alt,
  size = 56,
  className,
}: {
  src: string;
  alt: string;
  size?: number;
  className?: string;
}) {
  return (
    <Image
      src={src}
      alt={alt}
      width={size}
      height={size}
      className={cn('rounded-full object-cover', className)}
    />
  );
}
