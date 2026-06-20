import SITE_STYLES from './markup/site-styles';

/**
 * Global inline style block that every page shared as a duplicated copy.
 * Now rendered once from the root layout.
 */
export default function SiteStyles() {
  return <style dangerouslySetInnerHTML={{ __html: SITE_STYLES }} />;
}
