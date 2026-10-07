import React, { useState, useEffect } from 'react';
import {
  Compass,
  ArrowRight,
  ChevronDown,
  Calendar,
} from 'lucide-react';
import { SITE_CONFIG } from '../config/site';
import { NEWS_ARTICLES } from '../data/news';
import { FAQ_ITEMS } from '../data/faq';
import { Project, NewsArticle } from '../types';
import { BrandLogo } from '../components/BrandLogo';
import { SEO } from '../components/SEO';
import { HeroImageSection } from '../components/HeroImageSection';
import { PillarsCtaCarousel } from '../components/PillarsCtaCarousel';
import { getProjects, getNews } from '../services/supabaseService';

const DEFAULT_PROJECTS: Project[] = [
  {
    id: 'strongsconnect',
    title: 'StrongsConnect',
    slug: 'strongsconnect',
    category: 'HealthTech',
    status: 'Prototype',
    dateStarted: '2026',
    shortDescription:
      'A pioneering healthcare and emergency support platform providing digital access to health information and emergency services.',
    fullDescription:
      'A pioneering healthcare and emergency support platform providing digital access to health information and emergency services.',
    problem:
      'Limited access to emergency support and reliable healthcare information at the grassroots.',
    objectives: [],
    featured: true,
    createdAt: '2026-01-01',
    updatedAt: '2026-01-01',
  },
  {
    id: 'strong-soil',
    title: 'STRONG SOIL',
    slug: 'strong-soil',
    category: 'AgriTech & IoT',
    status: 'Prototype',
    dateStarted: '2026',
    shortDescription:
      'Low-cost soil moisture sensor system integrating accessible IoT and local agronomy data for smallholder farming communities.',
    fullDescription:
      'Low-cost soil moisture sensor system integrating accessible IoT and local agronomy data for smallholder farming communities.',
    problem:
      'Lack of accessible soil condition data for smallholder farmers leading to crop vulnerability.',
    objectives: [],
    featured: false,
    createdAt: '2026-01-01',
    updatedAt: '2026-01-01',
  },
];

interface HomePageProps {
  onNavigate: (path: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const [openFaq, setOpenFaq] = useState<string | null>("faq-1");
  const [projectsList, setProjectsList] = useState<Project[]>([]);
  const [newsList, setNewsList] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    Promise.all([getProjects(), getNews()])
      .then(([projData, newsData]) => {
        if (isMounted) {
          if (projData && projData.length > 0) {
            setProjectsList(projData);
          }
          if (newsData && newsData.length > 0) {
            setNewsList(newsData);
          }
        }
      })
      .catch((err) => console.warn('Error loading home data:', err))
      .finally(() => {
        if (isMounted) setLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  const projectsToDisplay = projectsList.length > 0 ? projectsList : DEFAULT_PROJECTS;

  const flagshipProject =
    projectsToDisplay.find((p) => p.id === 'strongsconnect' || p.slug === 'strongsconnect' || p.id === '1') ||
    projectsToDisplay[0];
  const recentNews = newsList.slice(0, 3);

  const toggleFaq = (id: string) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-[#fafafa]">
      <SEO title="THE STRONGS | Innovating for a Better Tomorrow" description={SITE_CONFIG.seo.defaultDescription} slug="" />

      {/* SECTION 1 — PREMIUM HERO IMAGE SECTION */}
      <HeroImageSection onNavigate={onNavigate} />

      {/* SECTION 2 — WHO WE ARE */}
      <section id="home-overview" className="py-16 sm:py-20 bg-white border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6">
          <div className="space-y-3">
            <span className="text-xs font-semibold text-emerald-700 tracking-widest uppercase">
              WHO WE ARE
            </span>
            <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-slate-900 tracking-tight">
              Building practical solutions for a better tomorrow.
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              THE STRONGS brings innovation, research and practical technology closer to people and industries by developing solutions designed around real-world needs.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onNavigate('/projects')}
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-sm shadow-md transition-all duration-200 hover:shadow-lg cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2 active:scale-[0.98]"
            >
              <Compass className="w-4 h-4 text-emerald-200" />
              <span>Explore Our Projects</span>
              <ArrowRight className="w-4 h-4 opacity-80" />
            </button>

            <button
              onClick={() => onNavigate('/about')}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-semibold text-sm border border-slate-200/90 shadow-2xs hover:border-slate-300 transition-all cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
            >
              <span>Learn More</span>
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 3 — WHAT DRIVES OUR INNOVATION (RELOCATED FOUR-SLIDE CAROUSEL) */}
      <PillarsCtaCarousel onNavigate={onNavigate} />

      {/* SECTION 4 — CURRENT PROJECT */}
      <section className="py-16 sm:py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="p-8 sm:p-10 rounded-3xl bg-slate-800/80 border border-slate-700/80 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
              
              <div className="lg:col-span-7 space-y-5">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="px-3 py-1 rounded-md bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-bold tracking-wider uppercase">
                    CURRENT PROJECT
                  </span>
                  <span className="px-3 py-1 rounded-md bg-slate-700/80 text-slate-300 text-xs font-semibold">
                    {flagshipProject.status} &bull; 2026
                  </span>
                  <span className="px-3 py-1 rounded-md bg-sky-500/20 text-sky-300 text-xs font-semibold">
                    {flagshipProject.category}
                  </span>
                </div>

                <div className="space-y-1.5">
                  <h3 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
                    {flagshipProject.title}
                  </h3>
                  <p className="text-emerald-400 font-medium text-sm sm:text-base">
                    Healthcare & Emergency Support Platform
                  </p>
                </div>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl">
                  StrongsConnect is a digital healthcare and emergency support platform developed by THE STRONGS. It addresses critical gaps in timely first-aid guidance, verified medical information, and emergency assistance across local communities. Designed for practical impact, the platform leverages accessible technology to deliver essential healthcare support where it is needed most.
                </p>

                <div className="pt-2">
                  <button
                    onClick={() => onNavigate(`/projects/${flagshipProject.slug}`)}
                    className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm shadow-md transition-all cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300"
                  >
                    <span>Explore Project</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Existing Project Image / Design */}
              <div className="lg:col-span-5 flex justify-center lg:justify-end">
                <div className="w-full max-w-sm bg-slate-900/90 p-8 rounded-2xl border border-slate-700/80 shadow-inner flex flex-col items-center justify-center text-center space-y-4">
                  <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-md">
                    <img
                      src={SITE_CONFIG.logos.strongsConnect}
                      alt={flagshipProject.title}
                      className="w-16 h-16 object-contain"
                    />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-xl text-white">
                      {flagshipProject.title}
                    </h4>
                    <span className="text-xs font-medium text-sky-400 uppercase tracking-wider">
                      Flagship Prototype
                    </span>
                  </div>
                  <div className="w-full pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                    <span>Active Development</span>
                    <span className="text-emerald-400 font-semibold">2026 Initiative</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — OUR PROJECTS */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-xs font-semibold text-emerald-700 tracking-widest uppercase">
                PORTFOLIO
              </span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 mt-1">
                Our Projects
              </h2>
            </div>
            <button
              onClick={() => onNavigate('/projects')}
              className="inline-flex items-center gap-2 text-emerald-700 hover:text-emerald-800 font-semibold text-sm group cursor-pointer"
            >
              <span>View All Projects</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {projectsToDisplay.map((project) => (
              <div
                key={project.id}
                className="bg-[#fafafa] p-6 sm:p-7 rounded-3xl border border-slate-200/80 hover:border-emerald-300 transition-all shadow-2xs hover:shadow-sm flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Top: Project Image, Category & Status */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200/80 p-2 flex items-center justify-center shrink-0 shadow-2xs">
                      {project.slug === 'strongsconnect' ? (
                        <img
                          src={SITE_CONFIG.logos.strongsConnect}
                          alt={project.title}
                          className="w-full h-full object-contain"
                        />
                      ) : project.images && project.images[0] ? (
                        <img
                          src={project.images[0]}
                          alt={project.title}
                          className="w-full h-full object-cover rounded-lg"
                        />
                      ) : (
                        <div className="w-full h-full rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-700">
                          <Compass className="w-5 h-5" />
                        </div>
                      )}
                    </div>

                    <div className="flex flex-wrap items-center justify-end gap-1.5">
                      <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-emerald-100/80 text-emerald-800">
                        {project.category}
                      </span>
                      <span className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-slate-200/70 text-slate-700">
                        {project.status}
                      </span>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-display font-bold text-xl sm:text-2xl text-slate-900">
                      {project.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed mt-2 line-clamp-2">
                      {project.shortDescription}
                    </p>
                  </div>
                </div>

                {/* Bottom: Action link */}
                <div className="pt-4 mt-5 border-t border-slate-200/60 flex items-center justify-between">
                  <span className="text-xs text-slate-500">
                    {project.dateStarted ? `Initiated ${project.dateStarted}` : 'Active Project'}
                  </span>
                  <button
                    onClick={() => onNavigate(`/projects/${project.slug}`)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white border border-slate-200 hover:bg-emerald-50 hover:border-emerald-300 hover:text-emerald-800 text-slate-800 font-semibold text-xs transition-all cursor-pointer"
                  >
                    <span>View Project</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 — VISION SECTION */}
      <section className="py-24 bg-gradient-to-r from-emerald-900 to-slate-900 text-white relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-6">
          <span className="text-xs font-bold text-emerald-400 tracking-widest uppercase">
            OUR VISION
          </span>
          <blockquote className="font-display font-extrabold text-2xl sm:text-4xl lg:text-5xl leading-tight text-white tracking-tight">
            &ldquo;To build a future where innovation, research, and technology are seamlessly integrated across every sector of society, creating smarter, more sustainable, and accessible solutions that make life better for everyone.&rdquo;
          </blockquote>
          <div className="pt-4 flex items-center justify-center gap-3 text-xs text-emerald-200">
            <span className="font-bold tracking-wider uppercase">THE STRONGS Official Vision</span>
            <span>&bull;</span>
            <span>Founded 2026</span>
          </div>
        </div>
      </section>

      {/* SECTION 8 — LATEST UPDATES (NEWS) */}
      <section className="py-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <span className="text-xs font-semibold text-emerald-700 tracking-widest uppercase">
                ANNOUNCEMENTS
              </span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 mt-1">
                Latest News & Updates
              </h2>
            </div>
            <button
              onClick={() => onNavigate('/news')}
              className="text-emerald-700 hover:text-emerald-800 font-semibold text-sm flex items-center gap-1"
            >
              <span>View All Updates</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {recentNews.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {recentNews.map((article) => (
                <div
                  key={article.id}
                  className="bg-[#fafafa] p-6 sm:p-8 rounded-3xl border border-slate-200/80 hover:border-emerald-300 transition-all space-y-4 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-xs text-slate-500">
                      <span className="font-semibold text-emerald-700">{article.category}</span>
                      <span>&bull;</span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {article.date}
                      </span>
                    </div>

                    <h3 className="font-display font-bold text-xl text-slate-900">
                      {article.title}
                    </h3>

                    <p className="text-slate-600 text-sm leading-relaxed">
                      {article.excerpt}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-200/60 flex items-center justify-between">
                    <span className="text-xs text-slate-500">By {article.author}</span>
                    <button
                      onClick={() => onNavigate('/news')}
                      className="text-xs font-bold text-emerald-700 hover:text-emerald-800 flex items-center gap-1"
                    >
                      <span>Read Full Update</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-12 text-center bg-slate-50 rounded-3xl border border-slate-200 text-slate-500 space-y-2">
              <p className="font-medium">Updates from THE STRONGS will appear here as our work develops.</p>
            </div>
          )}
        </div>
      </section>

      {/* SECTION 9 — PARTNERSHIP CTA */}
      <section className="py-20 bg-emerald-50/60 border-b border-emerald-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-6">
          <span className="text-xs font-bold text-emerald-800 tracking-widest uppercase">
            COLLABORATION
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-5xl text-slate-900">
            Build With Us
          </h2>
          <p className="text-slate-700 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            &ldquo;Meaningful innovation grows through collaboration. We welcome opportunities to work with organisations, researchers, institutions and individuals who share our commitment to creating practical solutions for a better tomorrow.&rdquo;
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onNavigate('/partners')}
              className="px-6 py-3.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-sm shadow-md transition-all cursor-pointer"
            >
              Partner With Us
            </button>
            <button
              onClick={() => onNavigate('/partners')}
              className="px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-bold text-sm border border-slate-200 shadow-2xs transition-all cursor-pointer"
            >
              Support Our Work
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 10 — FAQ */}
      <section className="py-20 bg-white border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14 space-y-2">
            <span className="text-xs font-semibold text-emerald-700 tracking-widest uppercase">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900">
              Verified Organisational Information
            </h2>
            <p className="text-slate-600 text-sm">
              Clear answers based strictly on confirmed facts and ongoing developments.
            </p>
          </div>

          <div className="space-y-4">
            {FAQ_ITEMS.map((faq) => {
              const isOpen = openFaq === faq.id;
              return (
                <div
                  key={faq.id}
                  className="border border-slate-200/80 rounded-2xl overflow-hidden bg-[#fafafa] transition-colors"
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full p-5 text-left font-display font-bold text-slate-900 text-base flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-100/60"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-emerald-700 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-slate-600 text-sm leading-relaxed border-t border-slate-200/50 bg-white">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};
