import { supabase } from '../lib/supabase';
import { Project, NewsArticle, EventItem, TeamMember, ProjectStatus } from '../types';
import { NEWS_ARTICLES as fallbackNews } from '../data/news';
import { EVENTS_DATA as fallbackEvents } from '../data/events';
import { TEAM_MEMBERS as fallbackTeam } from '../data/team';

export interface SiteSettings {
  id?: string;
  name?: string;
  tagline?: string;
  description?: string;
  contactEmail?: string;
  contactPhone?: string;
  address?: string;
  socialLinks?: Record<string, string>;
  [key: string]: unknown;
}

// Project Mapper
function mapDbProject(item: any): Project {
  let components = [];
  if (Array.isArray(item.core_proposed_modules)) {
    components = item.core_proposed_modules.map((m: any) => ({
      name: typeof m === 'string' ? m : m?.name || '',
      description: typeof m === 'object' && m?.description ? m.description : '',
    }));
  } else if (Array.isArray(item.components)) {
    components = item.components.map((m: any) => ({
      name: typeof m === 'string' ? m : m?.name || '',
      description: typeof m === 'object' && m?.description ? m.description : '',
    }));
  }

  const expectedImpact: string[] = Array.isArray(item.expected_impact)
    ? item.expected_impact
    : [];

  const objectives: string[] = Array.isArray(item.objectives)
    ? item.objectives
    : [];

  const aiRole: string[] = Array.isArray(item.ai_role)
    ? item.ai_role
    : [];

  return {
    id: String(item.id || ''),
    title: item.title || '',
    alternativeName: item.alternative_name || undefined,
    slug: item.slug || String(item.id || ''),
    category: item.category || 'General',
    shortDescription: item.description || '',
    fullDescription: item.description || '',
    problem: item.problem || '',
    objectives,
    dateStarted: item.date_started || '',
    status: (item.status as ProjectStatus) || 'Upcoming',
    components,
    aiRole,
    activities: item.activities || null,
    results: item.results || null,
    impact: typeof item.impact === 'string' && item.impact.trim() ? item.impact : null,
    expectedImpact,
    images: item.image_url ? [item.image_url] : Array.isArray(item.images) ? item.images : [],
    videos: Array.isArray(item.videos) ? item.videos : [],
    partners: Array.isArray(item.partners) ? item.partners : [],
    team: Array.isArray(item.team) ? item.team : [],
    testimonials: Array.isArray(item.testimonials) ? item.testimonials : [],
    relatedLinks: Array.isArray(item.related_links) ? item.related_links : [],
    featured: Boolean(item.featured),
    createdAt: item.created_at || new Date().toISOString(),
    updatedAt: item.updated_at || new Date().toISOString(),
  };
}

// 1. PROJECTS (table: "projects" in Supabase - ONLY source of project data)
export async function getProjects(): Promise<Project[]> {
  const { data, error } = await supabase
    .from('projects')
    .select('*')
    .order('id', { ascending: true });

  if (error) {
    console.error('Supabase projects fetch error:', error);
    throw new Error(error.message || 'Failed to fetch projects from Supabase database');
  }

  if (!data || data.length === 0) {
    return [];
  }

  return data.map(mapDbProject);
}

export async function getProjectBySlug(
  slug: string
): Promise<Project | null> {
  const isNumeric = /^\d+$/.test(slug);
  const query = supabase.from('projects').select('*');

  const { data, error } = isNumeric
    ? await query.or(`slug.eq.${slug},id.eq.${slug}`).maybeSingle()
    : await query.eq('slug', slug).maybeSingle();

  if (error) {
    console.error('Supabase project detail fetch error:', error);
    throw new Error(error.message || 'Failed to fetch project details from Supabase');
  }

  if (!data) {
    return null;
  }

  return mapDbProject(data);
}

// 2. NEWS (table: "news")
export async function getNews(): Promise<NewsArticle[]> {
  try {
    const { data, error } = await supabase
      .from('news')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.warn('Supabase news fetch error, using fallback:', error);
      return fallbackNews;
    }

    if (data && data.length > 0) {
      return data.map((item) => ({
        id: String(item.id || ''),
        title: item.title || '',
        slug: item.slug || '',
        date: item.date || (item.published_at ? new Date(item.published_at).toLocaleDateString('en-US', { month: 'long', year: 'numeric' }) : ''),
        category: item.category || 'Organisational Update',
        excerpt: item.excerpt || item.summary || '',
        content: item.content || '',
        image: item.image_url || item.image || undefined,
        author: item.author || 'THE STRONGS Editorial Team',
        featured: Boolean(item.featured),
      }));
    }

    return fallbackNews;
  } catch (err) {
    console.warn('Supabase news fetch exception:', err);
    return fallbackNews;
  }
}

// 3. EVENTS (table: "events")
export async function getEvents(): Promise<EventItem[]> {
  try {
    const { data, error } = await supabase
      .from('events')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.warn('Supabase events fetch error, using fallback:', error);
      return fallbackEvents;
    }

    if (data && data.length > 0) {
      return data.map((item) => ({
        id: String(item.id || ''),
        title: item.title || '',
        date: item.date || '',
        location: item.location || '',
        description: item.description || '',
        image: item.image_url || item.image || undefined,
        registrationLink: item.registration_link || item.registration_url || undefined,
        status: (item.status === 'Past' ? 'Past' : 'Upcoming') as 'Upcoming' | 'Past',
      }));
    }

    return fallbackEvents;
  } catch (err) {
    console.warn('Supabase events fetch exception:', err);
    return fallbackEvents;
  }
}

// 4. TEAM MEMBERS (table: "team_members")
export async function getTeamMembers(): Promise<TeamMember[]> {
  try {
    const { data, error } = await supabase
      .from('team_members')
      .select('*');

    if (error) {
      console.warn('Supabase team_members fetch error, using fallback:', error);
      return fallbackTeam;
    }

    if (data && data.length > 0) {
      const sorted = [...data].sort((a, b) => {
        const orderA = a.display_order ?? a.id ?? 0;
        const orderB = b.display_order ?? b.id ?? 0;
        return Number(orderA) - Number(orderB);
      });

      return sorted.map((item) => ({
        id: String(item.id || ''),
        name: item.name || '',
        role: item.role || null,
        bio: item.bio || null,
        photo: item.image_url || item.photo || null,
        isFounder: Boolean(item.is_founder),
      }));
    }

    return fallbackTeam;
  } catch (err) {
    console.warn('Supabase team_members fetch exception:', err);
    return fallbackTeam;
  }
}

// 5. SITE SETTINGS (table: "site_settings")
export async function getSiteSettings(): Promise<SiteSettings | null> {
  try {
    const { data, error } = await supabase.from('site_settings').select('*').limit(1).maybeSingle();
    if (error || !data) {
      return null;
    }
    return data as SiteSettings;
  } catch (err) {
    console.warn('Supabase site_settings fetch fallback:', err);
    return null;
  }
}
