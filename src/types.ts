export type ProjectStatus = 'Prototype' | 'Ongoing' | 'Completed' | 'Upcoming';

export interface ProjectComponent {
  name: string;
  description: string;
}

export interface Project {
  id: string;
  title: string;
  alternativeName?: string;
  slug: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  problem: string;
  objectives: string[];
  dateStarted: string;
  status: ProjectStatus;
  components?: ProjectComponent[];
  aiRole?: string[];
  activities?: string | null;
  results?: string | null;
  impact?: string | null;
  expectedImpact?: string[];
  images?: string[];
  videos?: string[];
  partners?: string[];
  team?: string[];
  testimonials?: { quote: string; author: string; title?: string }[];
  relatedLinks?: { label: string; url: string }[];
  featured: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface NewsArticle {
  id: string;
  title: string;
  slug: string;
  date: string;
  category: string;
  excerpt: string;
  content: string;
  image?: string;
  author: string;
  featured: boolean;
}

export interface EventItem {
  id: string;
  title: string;
  date: string;
  location: string;
  description: string;
  image?: string;
  registrationLink?: string;
  status: 'Upcoming' | 'Past';
}

export interface TeamMember {
  id: string;
  name: string;
  role: string | null;
  bio: string | null;
  photo: string | null;
  isFounder?: boolean;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface ImpactMetric {
  id: string;
  label: string;
  value: string | null; // e.g., null when verified figures are unavailable
  description: string;
  status: 'Verified' | 'Developing' | 'Framework';
}

export interface DonationConfig {
  enabled: boolean;
  bankName: string | null;
  accountName: string | null;
  accountNumber: string | null;
  note?: string;
}
