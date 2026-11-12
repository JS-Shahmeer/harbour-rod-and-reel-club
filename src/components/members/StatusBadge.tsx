const STYLES: Record<string, string> = {
  ACTIVE: 'bg-seagreen text-white',
  PENDING: 'bg-sand text-harbour',
  EXPIRED: 'bg-destructive/10 text-destructive',
  CANCELLED: 'bg-charcoal/10 text-charcoal/70',
};
const LABELS: Record<string, string> = { ACTIVE: 'Active', PENDING: 'Pending', EXPIRED: 'Expired', CANCELLED: 'Cancelled' };

export default function StatusBadge({ status }: { status: string }) {
  return (
    <span className={`inline-block px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] rounded-[2px] ${STYLES[status] ?? STYLES.PENDING}`}>
      {LABELS[status] ?? status}
    </span>
  );
}
