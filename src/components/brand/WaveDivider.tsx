export default function WaveDivider({ color = '#5D9992', className = '' }: { color?: string; className?: string }) {
  return (
    <svg viewBox="0 0 1200 24" preserveAspectRatio="none" aria-hidden="true" className={`w-full h-6 ${className}`}>
      <path d="M0 16c50-12 100-12 150 0s100 12 150 0 100-12 150 0 100 12 150 0 100-12 150 0 100 12 150 0 100-12 150 0" fill="none" stroke={color} strokeWidth="1.2" opacity="0.7" />
    </svg>
  );
}
