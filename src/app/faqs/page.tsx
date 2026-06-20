import type { Metadata } from 'next';
import ComingSoon from '@/components/sections/ComingSoon';

export const metadata: Metadata = { title: 'FAQs' };

export default function Page() {
  return <ComingSoon title={'FAQs'} />;
}
