import Link from 'next/link';
import { logoutAction } from '@/lib/auth/actions';

// Secondary bar shown across member pages.
export default function DockNav({ isAdmin, active }: { isAdmin: boolean; active: string }) {
  const links = [
    ['/members', 'Dock'],
    ['/members/directory', 'Directory'],
    ['/members/account', 'My Account'],
    ...(isAdmin ? [['/admin/members', 'Manage Members']] : []),
  ];
  return (
    <div className="bg-sand border-b border-harbour/10">
      <div className="max-w-6xl mx-auto px-5 flex flex-wrap items-center gap-x-6 gap-y-2 py-3">
        {links.map(([href, label]) => (
          <Link
            key={href}
            href={href}
            className={`text-[11px] font-semibold uppercase tracking-[0.16em] ${active === href ? 'text-harbour border-b-2 border-seagreen pb-0.5' : 'text-harbour/70 hover:text-harbour'}`}
          >
            {label}
          </Link>
        ))}
        <form action={logoutAction} className="ml-auto">
          <button className="text-[11px] font-semibold uppercase tracking-[0.16em] text-harbour/70 hover:text-harbour">Log Out</button>
        </form>
      </div>
    </div>
  );
}
