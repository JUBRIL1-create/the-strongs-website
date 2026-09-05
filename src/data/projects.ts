import { Project } from '../types';

/**
 * All projects data is now fetched dynamically and exclusively from the Supabase "projects" database table.
 * The old hard-coded project array has been removed and disconnected.
 */
export const PROJECTS_DATA: Project[] = [];
