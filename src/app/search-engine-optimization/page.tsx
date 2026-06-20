import type { Metadata } from 'next';
import ComingSoon from '@/components/sections/ComingSoon';

export const metadata: Metadata = { title: 'Enterprise SEO' };

export default function Page() {
  return <ComingSoon title={'Enterprise SEO'} />;
}
