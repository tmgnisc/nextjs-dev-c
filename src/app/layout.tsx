import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Dev Community Nepal',
  description: 'Dev Community Nepal — Tech & Developer Community',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="/wp-content/plugins/elementor/assets/css/frontend.min.css" />
        <link rel="stylesheet" href="/wp-content/uploads/elementor/css/post-6095.css" />
        <link rel="stylesheet" href="/wp-content/uploads/elementor/css/post-6096.css" />
        <link rel="stylesheet" href="/wp-content/plugins/contact-form-7/includes/css/styles.css" />
        <link rel="stylesheet" href="/wp-content/plugins/elementor/assets/lib/eicons/css/elementor-icons.min.css" />
        <link rel="stylesheet" href="/wp-content/uploads/elementor/css/post-6045.css" />
        <link rel="stylesheet" href="/wp-content/plugins/elementor/assets/lib/animations/styles/fadeInUp.min.css" />
        <link rel="stylesheet" href="/wp-content/plugins/elementor/assets/css/widget-heading.min.css" />
        <link rel="stylesheet" href="/wp-content/plugins/elementor/assets/css/widget-text-path.min.css" />
        <link rel="stylesheet" href="/wp-content/plugins/elementor/assets/css/widget-icon-list.min.css" />
        <link rel="stylesheet" href="/wp-content/plugins/elementor/assets/css/widget-image.min.css" />
        <link rel="stylesheet" href="/wp-content/plugins/elementor/assets/css/widget-rating.min.css" />
        <link rel="stylesheet" href="/wp-content/plugins/elementor/assets/css/widget-counter.min.css" />
        <link rel="stylesheet" href="/wp-content/plugins/elementor/assets/lib/swiper/v8/css/swiper.min.css" />
        <link rel="stylesheet" href="/wp-content/uploads/elementor/css/post-14.css" />
        <link rel="stylesheet" href="/wp-content/uploads/elementor/css/base-desktop.css" />
        <link rel="stylesheet" href="/wp-content/uploads/elementor/css/local-14-frontend-desktop.css" />
        <link rel="stylesheet" href="/wp-content/plugins/elementskit-lite/widgets/init/assets/css/widget-styles.css" />
        <link rel="stylesheet" href="/wp-content/plugins/elementskit/widgets/init/assets/css/widget-styles-pro.css" />
        <link rel="stylesheet" href="/wp-content/plugins/elementskit-lite/widgets/init/assets/css/responsive.css" />
        <link rel="stylesheet" href="/wp-content/themes/rankio/assets/css/css-variable.css" />
        <link rel="stylesheet" href="/wp-content/themes/rankio/assets/css/all.min.css" />
        <link rel="stylesheet" href="/wp-content/themes/rankio/assets/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/wp-content/themes/rankio/style.css" />
        <link rel="stylesheet" href="/wp-content/themes/rankio-child/style.css" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css" />
        <link rel="stylesheet" href="/wp-content/plugins/elementskit-lite/modules/elementskit-icon-pack/assets/css/ekiticons.css" />
        <link rel="stylesheet" href="/wp-content/plugins/elementor/assets/lib/font-awesome/css/fontawesome.min.css" />
        <link rel="stylesheet" href="/wp-content/plugins/elementor/assets/lib/font-awesome/css/solid.min.css" />
        <link rel="stylesheet" href="/wp-content/plugins/elementor/assets/lib/font-awesome/css/regular.min.css" />
        <link rel="stylesheet" href="/wp-content/plugins/elementor/assets/lib/font-awesome/css/brands.min.css" />
        <script src="/wp-includes/js/jquery/jquery.min.js"></script>
        <script src="/wp-includes/js/jquery/jquery-migrate.min.js"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
