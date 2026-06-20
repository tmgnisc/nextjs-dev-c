import type { Metadata } from 'next';
import { Sora, Inter } from 'next/font/google';
import './globals.css';

const sora = Sora({ subsets: ['latin'], variable: '--font-sora', display: 'swap' });
const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });

export const metadata: Metadata = {
  title: {
    default: 'Dev Community Nepal',
    template: '%s | Dev Community Nepal',
  },
  description: 'Dev Community Nepal — a Nepal-based digital growth studio for SEO, paid media, and web.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sora.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
