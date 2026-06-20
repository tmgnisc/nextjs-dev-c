import type { Metadata } from 'next';
import ComingSoon from '@/components/sections/ComingSoon';

export const metadata: Metadata = { title: 'SEO Content Marketing' };

export default function Page() {
  return <ComingSoon title={'SEO Content Marketing'} />;
}
