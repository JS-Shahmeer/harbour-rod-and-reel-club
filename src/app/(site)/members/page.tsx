import type { Metadata } from 'next';
import Link from 'next/link';
import { format } from 'date-fns';
import {
  BookOpen, Calendar, FileText, Images, MessageSquare, Newspaper, Scale, Trophy, Users, UserCog, UtensilsCrossed, ShieldCheck,
} from 'lucide-react';
import PageHeader from '@/components/layout/PageHeader';
import MembersDock from '@/components/home/MembersDock';
import ClubButton from '@/components/brand/ClubButton';
import DockNav from '@/components/members/DockNav';
import StatusBadge from '@/components/members/StatusBadge';
import { effectiveStatus, getCurrentUser, hasMemberAccess } from '@/lib/auth/access';

export const metadata: Metadata = { title: "Members' Dock" };

const INTRO = "The club's private area — member forum, fishing flashes, weight slips, angler leaderboard, calendar, bylaws, recipes, galleries, and member resources.";

export default async function Members() {
  const user = await getCurrentUser();

  if (!user) {
    return (
      <>
        <PageHeader eyebrow="Members Only" title="Members' Dock" intro={INTRO} />
        <section className="bg-offwhite">
          <div className="max-w-2xl mx-auto px-5 py-20 text-center">
            <h2 className="font-heading text-2xl text-harbour">Member Login</h2>
            <div className="mt-5 h-px w-16 bg-seagreen/50 mx-auto" />
            <p className="mt-6 text-[15px] leading-relaxed text-charcoal/80">
              Sign in to reach the forum, submit weight slips, view standings, and download club documents.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <ClubButton to="/login" variant="green">Log In</ClubButton>
              <ClubButton to="/register" variant="outline">Create an Account</ClubButton>
            </div>
          </div>
        </section>
        <MembersDock />
      </>
    );
  }

  const isAdmin = user.role === 'ADMIN';
  const status = effectiveStatus(user.membership);
  const expires = user.membership?.expiresAt;

  if (!hasMemberAccess(user)) {
    const copy =
      status === 'EXPIRED'
        ? 'Your membership has expired. Renew your dues to get back into the Dock.'
        : status === 'CANCELLED'
          ? 'Your membership is cancelled. Contact a club officer if you would like to rejoin.'
          : 'Your account is set up. The Dock opens as soon as your membership dues are paid and your membership is active.';
    return (
      <>
        <PageHeader eyebrow="Members Only" title={`Welcome, ${user.name.split(' ')[0]}`} intro={INTRO} />
        <DockNav isAdmin={isAdmin} active="/members" />
        <section className="bg-offwhite">
          <div className="max-w-2xl mx-auto px-5 py-20">
            <div className="border border-harbour/20 bg-white p-8 sm:p-10 text-center">
              <p className="eyebrow text-seagreen mb-4">Membership Status</p>
              <StatusBadge status={status} />
              <p className="mt-6 text-[15px] leading-relaxed text-charcoal/80">{copy}</p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
                <ClubButton to="/membership" variant="green">Membership Information</ClubButton>
                <ClubButton to="/contact?subject=Membership" variant="outline">Contact an Officer</ClubButton>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }

  const tiles: [typeof Users, string, string | null][] = [
    [Users, 'Member Directory', '/members/directory'],
    [UserCog, 'My Account', '/members/account'],
    [Calendar, 'Events Calendar', '/events'],
    [Newspaper, 'Fishing Flashes', '/news'],
    [Images, 'Galleries', '/gallery'],
    [Trophy, 'Leaderboard', null],
    [Scale, 'Weight Slips', null],
    [MessageSquare, 'Member Forum', null],
    [FileText, 'Bylaws', null],
    [UtensilsCrossed, 'Recipes', null],
    [BookOpen, 'Member Resources', null],
  ];
  if (isAdmin) tiles.push([ShieldCheck, 'Manage Members', '/admin/members']);

  return (
    <>
      <PageHeader eyebrow="Members' Dock" title={`Welcome aboard, ${user.name.split(' ')[0]}`} intro={INTRO} />
      <DockNav isAdmin={isAdmin} active="/members" />
      <section className="bg-offwhite">
        <div className="max-w-6xl mx-auto px-5 py-14">
          <div className="flex flex-wrap items-center gap-4 border border-harbour/15 bg-white px-6 py-4">
            <span className="eyebrow text-harbour">Membership</span>
            <StatusBadge status={status} />
            {user.membership?.plan && <span className="text-[13px] text-charcoal/75">{user.membership.plan}</span>}
            {expires && <span className="text-[13px] text-charcoal/60">Paid through {format(expires, 'MMMM d, yyyy')}</span>}
          </div>
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-px bg-harbour/10 border border-harbour/10">
            {tiles.map(([Icon, label, href]) => {
              const body = (
                <>
                  <Icon className="w-5 h-5 text-seagreen" strokeWidth={1.4} aria-hidden="true" />
                  <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-harbour">{label}</span>
                  {!href && <span className="text-[10px] uppercase tracking-[0.14em] text-charcoal/45">Coming soon</span>}
                </>
              );
              const cls = 'bg-white p-6 flex flex-col items-center text-center gap-3 min-h-[130px] justify-center';
              return href ? (
                <Link key={label} href={href} className={`${cls} hover:bg-sand-light transition-colors`}>{body}</Link>
              ) : (
                <div key={label} className={`${cls} opacity-70`}>{body}</div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
