import type { Metadata } from 'next';
import PageHeader from '@/components/layout/PageHeader';
import MembersDock from '@/components/home/MembersDock';
import ClubButton from '@/components/brand/ClubButton';

export const metadata: Metadata = { title: "Members' Dock" };

// Placeholder until member accounts are built in step 2.
export default function Members() {
  return (
    <>
      <PageHeader
        eyebrow="Members Only"
        title="Members' Dock"
        intro="The club's private area — member forum, fishing flashes, weight slips, angler leaderboard, calendar, bylaws, recipes, galleries, and member resources."
      />
      <section className="bg-offwhite">
        <div className="max-w-2xl mx-auto px-5 py-20 text-center">
          <h2 className="font-heading text-2xl text-harbour">Member Login</h2>
          <div className="mt-5 h-px w-16 bg-seagreen/50 mx-auto" />
          <p className="mt-6 text-[15px] leading-relaxed text-charcoal/80">
            Secure member accounts for the Dock are not switched on yet. Once enabled, members sign in here to reach
            the forum, submit weight slips, view standings, and download club documents.
          </p>
          <div className="mt-8"><ClubButton to="/contact" variant="green">Ask About Member Access</ClubButton></div>
        </div>
      </section>
      <MembersDock />
    </>
  );
}
