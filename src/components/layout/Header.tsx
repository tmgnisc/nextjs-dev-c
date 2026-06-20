import Link from 'next/link';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import Nav from './Nav';
import MobileMenu from './MobileMenu';
import { site } from '@/content/site';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-ink/80 backdrop-blur-md">
      <Container className="flex h-18 items-center justify-between py-4">
        <Link href="/" className="font-display text-lg font-bold tracking-tight">
          {site.name}
        </Link>

        <div className="flex items-center gap-6">
          <Nav />
          <div className="hidden md:block">
            <Button href="/contact-us">Get Started</Button>
          </div>
          <MobileMenu />
        </div>
      </Container>
    </header>
  );
}
