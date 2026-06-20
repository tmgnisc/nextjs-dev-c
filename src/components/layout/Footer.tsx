import FOOTER_HTML from './markup/footer';

/**
 * Site footer (Elementor template 6096). Identical on every page, so it lives
 * here instead of being duplicated into each route.
 */
export default function Footer() {
  return <div dangerouslySetInnerHTML={{ __html: FOOTER_HTML }} />;
}
