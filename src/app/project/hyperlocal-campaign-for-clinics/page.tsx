import type { Metadata } from 'next';
import ComingSoon from '@/components/sections/ComingSoon';

export const metadata: Metadata = { title: 'Hyperlocal Campaign For Clinics' };

export default function Page() {
  return <ComingSoon title={'Hyperlocal Campaign For Clinics'} />;
}
