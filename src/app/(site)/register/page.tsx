import type { Metadata } from 'next';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { UserPlus } from 'lucide-react';
import AuthCard from '@/components/auth/AuthCard';
import { RegisterForm } from '@/components/auth/Forms';
import { getCurrentUser, safeReturnTo } from '@/lib/auth/access';

export const metadata: Metadata = { title: 'Create an Account' };

export default async function Register({ searchParams }: { searchParams: Promise<{ returnTo?: string }> }) {
  const returnTo = safeReturnTo((await searchParams).returnTo);
  if (await getCurrentUser()) redirect(returnTo);

  return (
    <AuthCard
      icon={UserPlus}
      eyebrow="Membership"
      title="Create your account"
      subtitle="Your account opens the Members' Dock once your membership is active."
      footer={<>Already a member? <Link href={`/login?returnTo=${encodeURIComponent(returnTo)}`} className="text-seagreen font-semibold hover:text-harbour">Log in</Link></>}
    >
      <RegisterForm returnTo={returnTo} />
    </AuthCard>
  );
}
