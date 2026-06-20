import type { Metadata } from 'next';
import ComingSoon from '@/components/sections/ComingSoon';

export const metadata: Metadata = { title: 'Local Global SEO' };

export default function Page() {
  return <ComingSoon title={'Local Global SEO'} />;
}
