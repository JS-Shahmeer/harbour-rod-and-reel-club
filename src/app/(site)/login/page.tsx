import type { Metadata } from 'next';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { LogIn } from 'lucide-react';
import AuthCard from '@/components/auth/AuthCard';
import { LoginForm } from '@/components/auth/Forms';
import { getCurrentUser, safeReturnTo } from '@/lib/auth/access';

export const metadata: Metadata = { title: 'Member Login' };

export default async function Login({ searchParams }: { searchParams: Promise<{ returnTo?: string; reset?: string }> }) {
  const sp = await searchParams;
  const returnTo = safeReturnTo(sp.returnTo);
  if (await getCurrentUser()) redirect(returnTo);

  return (
    <AuthCard
      icon={LogIn}
      eyebrow="Members' Dock"
      title="Welcome back"
      subtitle="Log in to reach the forum, weight slips, standings and member resources."
      footer={<>New to the club? <Link href={`/register?returnTo=${encodeURIComponent(returnTo)}`} className="text-seagreen font-semibold hover:text-harbour">Create an account</Link></>}
    >
      <LoginForm returnTo={returnTo} notice={sp.reset ? 'Your password has been changed. Please log in.' : undefined} />
    </AuthCard>
  );
}
