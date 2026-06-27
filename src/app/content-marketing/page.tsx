import type { Metadata } from 'next';
import ServicePage from '@/components/templates/ServicePage';
import { getService } from '@/content/services';
import { notFound } from 'next/navigation'; // Import notFound for Next.js App Router

// 1. Fetch the service safely (remove the '!')
const service = getService('content-marketing');

// 2. Generate metadata safely using optional chaining and fallbacks
export const metadata: Metadata = { 
  title: service?.title || 'Content Marketing', 
  description: service?.summary || 'Content marketing services' 
};

export default function Page() {
  // 3. If the service isn't found, trigger a 404 instead of crashing the site
  if (!service) {
    notFound();
  }

  return <ServicePage service={service} />;
}