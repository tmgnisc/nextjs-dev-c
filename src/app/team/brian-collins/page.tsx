import type { Metadata } from 'next';
import ComingSoon from '@/components/sections/ComingSoon';

export const metadata: Metadata = { title: 'Brian Collins' };

export default function Page() {
  return <ComingSoon title={'Brian Collins'} />;
}
