// Read helpers for public pages. Module 1 serves static content; the same
// function signatures will read from the database in later modules.
import { ALBUMS, ARTICLES, EVENTS, FISHING_RESOURCES, MILESTONES, TOURNAMENTS } from '@/lib/content';

export type EventItem = (typeof EVENTS)[number];
export type TournamentItem = (typeof TOURNAMENTS)[number];
export type ArticleItem = (typeof ARTICLES)[number];
export type AlbumItem = (typeof ALBUMS)[number];

const take = <T,>(rows: T[], limit?: number) => (limit ? rows.slice(0, limit) : rows);
const asc = (k: 'date') => <T extends Record<typeof k, string>>(a: T, b: T) => a[k].localeCompare(b[k]);

export async function getEvents(limit?: number): Promise<EventItem[]> {
  return take([...EVENTS].sort(asc('date')), limit);
}

export async function getTournaments(limit?: number): Promise<TournamentItem[]> {
  return take([...TOURNAMENTS].sort(asc('date')), limit);
}

export async function getArticles(limit?: number): Promise<ArticleItem[]> {
  return take([...ARTICLES].sort((a, b) => b.publishDate.localeCompare(a.publishDate)), limit);
}

export async function getArticle(slug: string): Promise<ArticleItem | null> {
  return ARTICLES.find((a) => a.slug === slug) ?? null;
}

export async function getAlbums(limit?: number): Promise<AlbumItem[]> {
  return take([...ALBUMS].sort((a, b) => b.albumDate.localeCompare(a.albumDate)), limit);
}

export async function getAlbum(id: string): Promise<AlbumItem | null> {
  return ALBUMS.find((a) => a.id === id) ?? null;
}

export async function getMilestones() {
  return MILESTONES;
}

export async function getFishingResources() {
  return [...FISHING_RESOURCES].sort((a, b) => a.topic.localeCompare(b.topic));
}
