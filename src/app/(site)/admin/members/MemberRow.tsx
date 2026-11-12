'use client';

import { startTransition, useActionState, useState } from 'react';
import { updateMemberAction } from './actions';

const SELECT = 'border border-harbour/25 bg-white px-2 py-1.5 text-[13px] rounded-[2px] focus:border-seagreen focus:outline-none';

export type AdminMember = {
  id: string; name: string; email: string; phone: string | null; role: string; createdAt: string;
  status: string; effective: string; plan: string; expiresAt: string;
};

export default function MemberRow({ m }: { m: AdminMember }) {
  const [state, action, busy] = useActionState(updateMemberAction, {});
  const [v, setV] = useState({ status: m.status, role: m.role, plan: m.plan, expiresAt: m.expiresAt });
  const bind = (k: keyof typeof v) => ({
    name: k,
    value: v[k],
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => setV({ ...v, [k]: e.target.value }),
  });
  return (
    <form
      onSubmit={(e) => {
        // Submit without React's automatic form reset so the row keeps what the admin set.
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        startTransition(() => action(data));
      }}
      className="grid gap-3 lg:grid-cols-[1.6fr_repeat(4,1fr)_auto] items-center border-b border-harbour/10 py-4">
      <input type="hidden" name="userId" value={m.id} />
      <div>
        <p className="font-semibold text-[14px] text-harbour">{m.name}</p>
        <p className="text-[12px] text-charcoal/65 break-all">{m.email}{m.phone ? ` · ${m.phone}` : ''}</p>
        <p className="text-[11px] text-charcoal/45">Joined {m.createdAt}{m.effective !== m.status ? ` · shows as ${m.effective.toLowerCase()}` : ''}</p>
      </div>
      <label className="text-[11px] text-charcoal/60">Status
        <select {...bind('status')} className={`${SELECT} block w-full mt-1`}>
          {['PENDING', 'ACTIVE', 'EXPIRED', 'CANCELLED'].map((s) => <option key={s}>{s}</option>)}
        </select>
      </label>
      <label className="text-[11px] text-charcoal/60">Role
        <select {...bind('role')} className={`${SELECT} block w-full mt-1`}>
          {['MEMBER', 'CONTRIBUTOR', 'ADMIN'].map((s) => <option key={s}>{s}</option>)}
        </select>
      </label>
      <label className="text-[11px] text-charcoal/60">Plan
        <input {...bind('plan')} className={`${SELECT} block w-full mt-1`} />
      </label>
      <label className="text-[11px] text-charcoal/60">Paid through
        <input {...bind('expiresAt')} type="date" className={`${SELECT} block w-full mt-1`} />
      </label>
      <div className="flex items-center gap-3">
        <button disabled={busy} className="bg-seagreen text-white px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] rounded-[2px] disabled:opacity-60">
          {busy ? 'Saving' : 'Save'}
        </button>
        {state.ok && <span className="text-[12px] text-seagreen" role="status">Saved</span>}
        {state.error && <span className="text-[12px] text-destructive" role="alert">{state.error}</span>}
      </div>
    </form>
  );
}
