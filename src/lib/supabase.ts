import { createClient } from '@supabase/supabase-js';

/**
 * Normalizes the Supabase project base URL.
 * The Supabase client requires the base origin only (e.g., https://xyz.supabase.co).
 * If the environment variable contains /rest/v1, /projects, trailing slashes, or wrapping quotes,
 * this function strips them so that PostgREST queries are not malformed with duplicate path segments.
 */
function normalizeSupabaseUrl(rawUrl?: string): string {
  const fallback = 'https://cfnrerpjvidgayhqfuvx.supabase.co';
  const url = (rawUrl || fallback).trim().replace(/^["']|["']$/g, '');
  try {
    const parsed = new URL(url);
    // Returns origin only: protocol + host (e.g., https://cfnrerpjvidgayhqfuvx.supabase.co)
    return parsed.origin;
  } catch {
    return url.replace(/\/rest\/v1\/?$/i, '').replace(/\/+$/, '');
  }
}

function normalizeSupabaseKey(rawKey?: string): string {
  const fallback = 'sb_publishable_Zo9MrKolV_-2r62Q2ekpeg_eP6P2Cgu';
  return (rawKey || fallback).trim().replace(/^["']|["']$/g, '');
}

const env = typeof import.meta !== 'undefined' && import.meta.env ? import.meta.env : (typeof process !== 'undefined' ? process.env : {});

const supabaseUrl = normalizeSupabaseUrl(
  (env as Record<string, string | undefined>).VITE_SUPABASE_URL ||
  (env as Record<string, string | undefined>).VITE_SUPABASE_PUBLISHABLE_URL
);

const supabasePublishableKey = normalizeSupabaseKey(
  (env as Record<string, string | undefined>).VITE_SUPABASE_ANON_KEY ||
  (env as Record<string, string | undefined>).VITE_SUPABASE_PUBLISHABLE_KEY
);

export const supabase = createClient(supabaseUrl, supabasePublishableKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
  },
});
