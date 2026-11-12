import Image from 'next/image';
import { IMG } from '@/lib/images';

// The club's official logo. Its black lettering needs a light plate on dark backgrounds.
export default function Logo({ height = 56, plate = true, className = '' }: { height?: number; plate?: boolean; className?: string }) {
  const width = Math.round((height * 396) / 252);
  const img = <Image src={IMG.logo} alt="Harbour Rod & Reel Club" width={width} height={height} priority className="block" />;
  if (!plate) return <span className={className}>{img}</span>;
  return <span className={`inline-block bg-offwhite rounded-[2px] px-2 py-1 shadow-[0_1px_0_rgba(0,0,0,0.15)] ${className}`}>{img}</span>;
}
