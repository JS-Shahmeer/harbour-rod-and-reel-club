// Read helpers for public pages. Dates are returned as YYYY-MM-DD strings so they
// format the same on the server and the client, with no timezone drift.
import 'server-only';
import { prisma } from '@/lib/db';

const day = (d: Date | null | undefined) => (d ? d.toISOString().slice(0, 10) : null);

export type EventItem = {
  id: string; title: string; date: string | null; time: string | null; location: string | null;
  category: string; description: string | null;
};
export type TournamentItem = {
  id: string; title: string; date: string | null; location: string | null; category: string;
  description: string | null; registrationStatus: string; resultsSummary: string | null; imageUrl: string | null;
};
export type ArticleItem = {
  id: string; slug: string; title: string; category: string; publishDate: string | null;
  excerpt: string | null; body: string | null; imageUrl: string | null; author: string | null;
};
export type AlbumItem = {
  id: string; title: string; category: string; albumDate: string | null; coverImageUrl: string | null;
  description: string | null; imageUrls: string[];
};

export async function getEvents(limit?: number): Promise<EventItem[]> {
  const rows = await prisma.event.findMany({ orderBy: { date: 'asc' }, take: limit });
  return rows.map((e) => ({ ...e, date: day(e.date) }));
}

export async function getTournaments(limit?: number): Promise<TournamentItem[]> {
  const rows = await prisma.tournament.findMany({ orderBy: { date: 'asc' }, take: limit });
  return rows.map((t) => ({ ...t, date: day(t.date) }));
}

export async function getArticles(limit?: number): Promise<ArticleItem[]> {
  const rows = await prisma.article.findMany({ orderBy: { publishDate: 'desc' }, take: limit });
  return rows.map((a) => ({ ...a, publishDate: day(a.publishDate) }));
}

export async function getArticle(slug: string): Promise<ArticleItem | null> {
  const a = await prisma.article.findUnique({ where: { slug } });
  return a ? { ...a, publishDate: day(a.publishDate) } : null;
}

export async function getAlbums(limit?: number): Promise<AlbumItem[]> {
  const rows = await prisma.galleryAlbum.findMany({ orderBy: { albumDate: 'desc' }, take: limit });
  return rows.map((a) => ({ ...a, albumDate: day(a.albumDate) }));
}

export async function getAlbum(id: string): Promise<AlbumItem | null> {
  const a = await prisma.galleryAlbum.findUnique({ where: { id } });
  return a ? { ...a, albumDate: day(a.albumDate) } : null;
}

export function getMilestones() {
  return prisma.milestone.findMany({ orderBy: [{ sortOrder: 'asc' }, { year: 'asc' }] });
}

export function getFishingResources() {
  return prisma.fishingResource.findMany({ orderBy: { topic: 'asc' } });
}
