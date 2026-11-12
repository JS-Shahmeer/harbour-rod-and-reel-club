import Link from 'next/link';
import type { ButtonHTMLAttributes, ReactNode } from 'react';

const styles = {
  primary: 'bg-harbour text-offwhite hover:bg-harbour-dark border border-harbour',
  green: 'bg-seagreen text-white hover:bg-[#356b65] border border-seagreen',
  outline: 'bg-transparent text-harbour border border-harbour/50 hover:bg-harbour hover:text-offwhite',
  outlineLight: 'bg-transparent text-offwhite border border-offwhite/50 hover:bg-offwhite hover:text-harbour',
};

type Props = {
  to?: string;
  href?: string;
  variant?: keyof typeof styles;
  className?: string;
  children: ReactNode;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className' | 'children'>;

export default function ClubButton({ to, href, variant = 'primary', className = '', children, ...rest }: Props) {
  const cls = `inline-flex items-center justify-center gap-2 px-6 py-3 text-[12px] font-semibold uppercase tracking-[0.16em] rounded-[2px] transition-colors duration-200 ${styles[variant]} ${className}`;
  if (href) return <a href={href} target="_blank" rel="noreferrer" className={cls}>{children}</a>;
  if (to) return <Link href={to} className={cls}>{children}</Link>;
  return <button className={cls} {...rest}>{children}</button>;
}
