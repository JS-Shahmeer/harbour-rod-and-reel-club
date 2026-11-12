import type { Metadata } from 'next';
import { format } from 'date-fns';
import PageHeader from '@/components/layout/PageHeader';
import DockNav from '@/components/members/DockNav';
import StatusBadge from '@/components/members/StatusBadge';
import SectionHeading from '@/components/brand/SectionHeading';
import { ChangePasswordForm, ProfileForm } from '@/components/auth/Forms';
import { effectiveStatus, requireUser } from '@/lib/auth/access';

export const metadata: Metadata = { title: 'My Account' };

export default async function Account() {
  const user = await requireUser('/members/account');
  const m = user.membership;

  return (
    <>
      <PageHeader eyebrow="Members' Dock" title="My Account" />
      <DockNav isAdmin={user.role === 'ADMIN'} active="/members/account" />
      <section className="bg-offwhite">
        <div className="max-w-3xl mx-auto px-5 py-14 space-y-12">
          <div className="border border-harbour/15 bg-white p-7">
            <SectionHeading eyebrow="Membership" title="Your Membership" />
            <dl className="mt-6 grid sm:grid-cols-3 gap-5 text-[14px]">
              <div><dt className="eyebrow text-charcoal/50 mb-2">Status</dt><dd><StatusBadge status={effectiveStatus(m)} /></dd></div>
              <div><dt className="eyebrow text-charcoal/50 mb-2">Plan</dt><dd className="text-charcoal/80">{m?.plan ?? '—'}</dd></div>
              <div><dt className="eyebrow text-charcoal/50 mb-2">Paid through</dt><dd className="text-charcoal/80">{m?.expiresAt ? format(m.expiresAt, 'MMMM d, yyyy') : '—'}</dd></div>
            </dl>
          </div>
          <div className="border border-harbour/15 bg-white p-7">
            <SectionHeading eyebrow="Profile" title="Your Details" />
            <div className="mt-6"><ProfileForm profile={{ name: user.name, email: user.email, phone: user.phone, city: user.city, boatName: user.boatName, bio: user.bio, showInDirectory: user.showInDirectory }} /></div>
          </div>
          <div className="border border-harbour/15 bg-white p-7">
            <SectionHeading eyebrow="Security" title="Change Password" />
            <div className="mt-6"><ChangePasswordForm /></div>
          </div>
        </div>
      </section>
    </>
  );
}
