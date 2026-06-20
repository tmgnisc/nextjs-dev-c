const BASE = '/wp-content/uploads/elementor/css';

/**
 * Renders the page-specific Elementor stylesheet links. React hoists
 * `<link rel="stylesheet">` into <head>, so each route loads only its own CSS.
 */
export default function ElementorStyles({ files }: { files: string[] }) {
  return (
    <>
      {files.map((file) => (
        <link key={file} rel="stylesheet" href={`${BASE}/${file}`} />
      ))}
    </>
  );
}
