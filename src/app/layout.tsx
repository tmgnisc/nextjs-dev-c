import type { Metadata } from 'next';
import './globals.css';
import SiteStyles from '@/components/layout/SiteStyles';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { siteConfig } from '@/lib/site-config';

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
};

/**
 * Theme + plugin stylesheets shared by every route. Page-specific Elementor
 * CSS is loaded per route via <ElementorStyles> inside each page.
 */
const GLOBAL_STYLES = [
  '/wp-content/plugins/elementor/assets/css/frontend.min.css',
  '/wp-content/uploads/elementor/css/post-6095.css',
  '/wp-content/uploads/elementor/css/post-6096.css',
  '/wp-content/plugins/contact-form-7/includes/css/styles.css',
  '/wp-content/plugins/elementor/assets/lib/eicons/css/elementor-icons.min.css',
  '/wp-content/uploads/elementor/css/post-6045.css',
  '/wp-content/plugins/elementor/assets/lib/animations/styles/fadeInUp.min.css',
  '/wp-content/plugins/elementor/assets/css/widget-heading.min.css',
  '/wp-content/plugins/elementor/assets/css/widget-text-path.min.css',
  '/wp-content/plugins/elementor/assets/css/widget-icon-list.min.css',
  '/wp-content/plugins/elementor/assets/css/widget-image.min.css',
  '/wp-content/plugins/elementor/assets/css/widget-rating.min.css',
  '/wp-content/plugins/elementor/assets/css/widget-counter.min.css',
  '/wp-content/plugins/elementor/assets/lib/swiper/v8/css/swiper.min.css',
  '/wp-content/uploads/elementor/css/base-desktop.css',
  '/wp-content/plugins/elementskit-lite/widgets/init/assets/css/widget-styles.css',
  '/wp-content/plugins/elementskit/widgets/init/assets/css/widget-styles-pro.css',
  '/wp-content/plugins/elementskit-lite/widgets/init/assets/css/responsive.css',
  '/wp-content/themes/rankio/assets/css/css-variable.css',
  '/wp-content/themes/rankio/assets/css/all.min.css',
  '/wp-content/themes/rankio/assets/css/bootstrap.min.css',
  '/wp-content/themes/rankio/style.css',
  '/wp-content/themes/rankio-child/style.css',
  'https://fonts.googleapis.com/css',
  '/wp-content/plugins/elementskit-lite/modules/elementskit-icon-pack/assets/css/ekiticons.css',
  '/wp-content/plugins/elementor/assets/lib/font-awesome/css/fontawesome.min.css',
  '/wp-content/plugins/elementor/assets/lib/font-awesome/css/solid.min.css',
  '/wp-content/plugins/elementor/assets/lib/font-awesome/css/regular.min.css',
  '/wp-content/plugins/elementor/assets/lib/font-awesome/css/brands.min.css',
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {GLOBAL_STYLES.map((href) => (
          <link key={href} rel="stylesheet" href={href} />
        ))}
        <script src="/wp-includes/js/jquery/jquery.min.js" />
        <script src="/wp-includes/js/jquery/jquery-migrate.min.js" />
      </head>
      <body>
        <SiteStyles />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
