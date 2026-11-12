import { format, parseISO } from 'date-fns';

export const fmt = (iso: string | null | undefined, pattern: string) => (iso ? format(parseISO(iso), pattern) : null);
