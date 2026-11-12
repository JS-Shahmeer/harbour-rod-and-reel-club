'use client';

import Link from 'next/link';
import { useActionState } from 'react';
import ClubButton from '@/components/brand/ClubButton';
import { ERROR, FIELD, LABEL, NOTICE } from '@/lib/ui';
import {
  changePasswordAction,
  forgotPasswordAction,
  loginAction,
  registerAction,
  resetPasswordAction,
  updateProfileAction,
  type FormState,
} from '@/lib/auth/actions';

function Field({ id, label, ...props }: { id: string; label: React.ReactNode } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className={LABEL} htmlFor={id}>{label}</label>
      <input id={id} name={id} className={FIELD} {...props} />
    </div>
  );
}

function Feedback({ state }: { state: FormState }) {
  if (state.error) return <p className={ERROR} role="alert">{state.error}</p>;
  if (state.message) return <p className={NOTICE} role="status">{state.message}</p>;
  return null;
}

function Submit({ busy, label, busyLabel }: { busy: boolean; label: string; busyLabel: string }) {
  return (
    <ClubButton variant="green" type="submit" disabled={busy} className="w-full disabled:opacity-60">
      {busy ? busyLabel : label}
    </ClubButton>
  );
}

export function LoginForm({ returnTo, notice }: { returnTo: string; notice?: string }) {
  const [state, action, busy] = useActionState(loginAction, {});
  return (
    <form action={action} className="space-y-5">
      {notice && <p className={NOTICE}>{notice}</p>}
      <input type="hidden" name="returnTo" value={returnTo} />
      <Field id="email" label="Email" type="email" autoComplete="email" required autoFocus defaultValue={state.values?.email} />
      <div>
        <div className="flex items-baseline justify-between">
          <label className={LABEL} htmlFor="password">Password</label>
          <Link href="/forgot-password" className="text-[12px] text-seagreen hover:text-harbour">Forgot password?</Link>
        </div>
        <input id="password" name="password" type="password" autoComplete="current-password" required className={FIELD} />
      </div>
      <Feedback state={state} />
      <Submit busy={busy} label="Log In" busyLabel="Logging in…" />
    </form>
  );
}

export function RegisterForm({ returnTo }: { returnTo: string }) {
  const [state, action, busy] = useActionState(registerAction, {});
  return (
    <form action={action} className="space-y-5">
      <input type="hidden" name="returnTo" value={returnTo} />
      <Field id="name" label="Full name" autoComplete="name" required autoFocus defaultValue={state.values?.name} />
      <Field id="email" label="Email" type="email" autoComplete="email" required defaultValue={state.values?.email} />
      <Field id="phone" label="Phone (optional)" type="tel" autoComplete="tel" defaultValue={state.values?.phone} />
      <Field id="password" label="Password" type="password" autoComplete="new-password" minLength={8} required />
      <Field id="confirm" label="Confirm password" type="password" autoComplete="new-password" minLength={8} required />
      <Feedback state={state} />
      <Submit busy={busy} label="Create Account" busyLabel="Creating account…" />
    </form>
  );
}

export function ForgotPasswordForm() {
  const [state, action, busy] = useActionState(forgotPasswordAction, {});
  if (state.ok) {
    return <p className="text-[14px] leading-relaxed text-charcoal/80 text-center">If an account exists with that email, a password reset link is on its way.</p>;
  }
  return (
    <form action={action} className="space-y-5">
      <Field id="email" label="Email address" type="email" autoComplete="email" required autoFocus />
      <Submit busy={busy} label="Send Reset Link" busyLabel="Sending…" />
    </form>
  );
}

export function ResetPasswordForm({ token }: { token: string }) {
  const [state, action, busy] = useActionState(resetPasswordAction, {});
  return (
    <form action={action} className="space-y-5">
      <input type="hidden" name="token" value={token} />
      <Field id="password" label="New password" type="password" autoComplete="new-password" minLength={8} required autoFocus />
      <Field id="confirm" label="Confirm new password" type="password" autoComplete="new-password" minLength={8} required />
      <Feedback state={state} />
      <Submit busy={busy} label="Set New Password" busyLabel="Saving…" />
    </form>
  );
}

type Profile = { name: string; email: string; phone: string | null; city: string | null; boatName: string | null; bio: string | null; showInDirectory: boolean };

export function ProfileForm({ profile }: { profile: Profile }) {
  const [state, action, busy] = useActionState(updateProfileAction, {});
  return (
    <form action={action} className="space-y-5">
      <Field id="name" label="Full name" defaultValue={profile.name} required />
      <div>
        <label className={LABEL}>Email</label>
        <p className="text-[14px] text-charcoal/70 py-1">{profile.email}</p>
      </div>
      <div className="grid sm:grid-cols-2 gap-5">
        <Field id="phone" label="Phone" type="tel" defaultValue={profile.phone ?? ''} />
        <Field id="city" label="City" defaultValue={profile.city ?? ''} />
      </div>
      <Field id="boatName" label="Boat name" defaultValue={profile.boatName ?? ''} />
      <div>
        <label className={LABEL} htmlFor="bio">About you</label>
        <textarea id="bio" name="bio" rows={4} maxLength={600} defaultValue={profile.bio ?? ''} className={FIELD} placeholder="Favourite species, how long you've fished the harbour…" />
      </div>
      <label className="flex items-start gap-3 text-[14px] text-charcoal/80">
        <input type="checkbox" name="showInDirectory" defaultChecked={profile.showInDirectory} className="mt-1 accent-seagreen" />
        <span>Show me in the member directory. Other paid-up members will see my name, city, boat, phone and email.</span>
      </label>
      <Feedback state={state} />
      <ClubButton variant="green" type="submit" disabled={busy} className="disabled:opacity-60">{busy ? 'Saving…' : 'Save Details'}</ClubButton>
    </form>
  );
}

export function ChangePasswordForm() {
  const [state, action, busy] = useActionState(changePasswordAction, {});
  return (
    <form action={action} className="space-y-5">
      <Field id="current" label="Current password" type="password" autoComplete="current-password" required />
      <div className="grid sm:grid-cols-2 gap-5">
        <Field id="password" label="New password" type="password" autoComplete="new-password" minLength={8} required />
        <Field id="confirm" label="Confirm new password" type="password" autoComplete="new-password" minLength={8} required />
      </div>
      <Feedback state={state} />
      <ClubButton variant="primary" type="submit" disabled={busy} className="disabled:opacity-60">{busy ? 'Saving…' : 'Change Password'}</ClubButton>
    </form>
  );
}
