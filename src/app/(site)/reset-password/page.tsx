import type { Metadata } from 'next';
import Link from 'next/link';
import { KeyRound } from 'lucide-react';
import AuthCard from '@/components/auth/AuthCard';
import { ResetPasswordForm } from '@/components/auth/Forms';

export const metadata: Metadata = { title: 'Choose a New Password' };

export default async function ResetPassword({ searchParams }: { searchParams: Promise<{ token?: string }> }) {
  const { token } = await searchParams;
  return (
    <AuthCard
      icon={KeyRound}
      title="Choose a new password"
      footer={<Link href="/login" className="text-seagreen font-semibold hover:text-harbour">← Back to log in</Link>}
    >
      {token ? (
        <ResetPasswordForm token={token} />
      ) : (
        <p className="text-[14px] text-center text-charcoal/80">This link is missing its reset code. <Link href="/forgot-password" className="text-seagreen underline">Request a new link</Link>.</p>
      )}
    </AuthCard>
  );
}
