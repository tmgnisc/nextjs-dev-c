import Image from 'next/image';
import type { Member } from '@/content/team';

function initials(name: string): string {
  return name
    .split(' ')
    .map((w) => w[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();
}

/** Fills its (relatively-positioned) parent: photo if present, else gradient initials. */
export default function MemberPhoto({ member, sizes }: { member: Member; sizes?: string }) {
  if (member.image) {
    return (
      <Image
        src={member.image}
        alt={member.name}
        fill
        sizes={sizes}
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
    );
  }
  return (
    <div className="bg-brand-gradient flex h-full w-full items-center justify-center">
      <span className="font-display text-3xl font-bold text-ink">{initials(member.name)}</span>
    </div>
  );
}
