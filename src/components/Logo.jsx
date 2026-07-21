/**
 * ZENTO Logo Component
 * Uses the official approved brand logo image (zento-logo.png)
 * The background has been removed programmatically to match the webpage.
 *
 * Props:
 *  size:   'sm' | 'md' | 'lg'
 */
export default function Logo({ size = 'md' }) {
  const widths = {
    sm: '160px',
    md: '240px',
    lg: '340px',
  };

  return (
    <img
      src="/zento-logo.png"
      alt="ZENTO — Grill · Dürüm · More"
      style={{
        width: widths[size] || widths.md,
        height: 'auto',
        objectFit: 'contain',
        display: 'block',
      }}
    />
  );
}
