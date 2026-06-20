'use client';

import { usePathname } from 'next/navigation';
import HEADER_HTML from './markup/header';

/**
 * Site header (Elementor template 6095). The markup is stored once, neutral of
 * any active-nav state; the highlight for the current route is applied here so
 * a single component serves every page.
 */
export default function Header() {
  const pathname = usePathname();
  // Header anchors use trailing slashes (`/about-us/`); home is just `/`.
  const target = pathname === '/' ? '/' : `${pathname.replace(/\/$/, '')}/`;
  const html = HEADER_HTML.replace(
    `href="${target}" class="ekit-menu-nav-link"`,
    `href="${target}" class="ekit-menu-nav-link active"`,
  );
  return <div suppressHydrationWarning dangerouslySetInnerHTML={{ __html: html }} />;
}
