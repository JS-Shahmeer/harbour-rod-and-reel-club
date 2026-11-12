import type { Metadata } from 'next';
import Link from 'next/link';
import { Mail } from 'lucide-react';
import AuthCard from '@/components/auth/AuthCard';
import { ForgotPasswordForm } from '@/components/auth/Forms';

export const metadata: Metadata = { title: 'Reset Password' };

export default function ForgotPassword() {
  return (
    <AuthCard
      icon={Mail}
      title="Reset password"
      subtitle="We'll email you a link to choose a new one."
      footer={<Link href="/login" className="text-seagreen font-semibold hover:text-harbour">← Back to log in</Link>}
    >
      <ForgotPasswordForm />
    </AuthCard>
  );
}
