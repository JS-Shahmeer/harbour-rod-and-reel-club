// Classic circular club insignia from the Base44 design, used as a decorative mark.
export default function Emblem({ size = 56, tone = 'light', year = '' }: { size?: number; tone?: 'light' | 'dark'; year?: string }) {
  const stroke = tone === 'light' ? '#F7F5EF' : '#123B56';
  const accent = tone === 'light' ? '#5D9992' : '#3F7F78';
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" role="img" aria-label="Harbour Rod & Reel Club emblem" className="shrink-0">
      <circle cx="50" cy="50" r="47" fill="none" stroke={stroke} strokeWidth="1.5" />
      <circle cx="50" cy="50" r="41" fill="none" stroke={accent} strokeWidth="0.8" />
      <path d="M20 62c8-6 14-6 22 0M28 68c8-6 14-6 22 0" stroke={accent} strokeWidth="1.2" fill="none" strokeLinecap="round" />
      <path d="M30 44c8-9 22-9 30 0-8 9-22 9-30 0z" fill="none" stroke={stroke} strokeWidth="1.6" />
      <path d="M60 44l10-7v14l-10-7z" fill="none" stroke={stroke} strokeWidth="1.6" />
      <circle cx="40" cy="42" r="1.6" fill={stroke} />
      <path d="M50 20v8M50 72v8" stroke={accent} strokeWidth="1.2" />
      {year ? (
        <text x="50" y="86" textAnchor="middle" fontSize="9" fill={stroke} fontFamily="Libre Baskerville, serif">{year}</text>
      ) : null}
    </svg>
  );
}
