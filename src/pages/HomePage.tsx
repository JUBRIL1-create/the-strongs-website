import React, { useState, useEffect } from 'react';
import {
  Compass,
  ArrowRight,
  Lightbulb,
  Microscope,
  Cpu,
  Leaf,
  ChevronDown,
  Sparkles,
  CheckCircle2,
  Users,
  Building2,
  Layers,
  Calendar,
  Tag,
  ShieldAlert,
  Globe2,
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

  const flagshipProject =
    projectsList.find((p) => p.id === 'strongsconnect' || p.slug === 'strongsconnect' || p.id === '1') ||
    projectsList[0] ||
    null;
  const recentNews = newsList.slice(0, 3);

  const toggleFaq = (id: string) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-[#fafafa]">
      <SEO title="Home" description={SITE_CONFIG.seo.defaultDescription} slug="" />

      {/* SECTION 1 — PREMIUM HERO IMAGE SECTION */}
      <HeroImageSection onNavigate={onNavigate} />

      {/* SECTION 2 — INNOVATION OVERVIEW & ECOSYSTEM */}
      <section id="home-overview" className="relative py-20 lg:py-28 overflow-hidden bg-gradient-to-b from-white via-white to-[#fafafa] border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Hero Left Content */}
            <div className="lg:col-span-7 space-y-6 text-left">
              {/* Tagline Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/70 border border-emerald-200/80 text-emerald-800 text-xs font-semibold tracking-wide">
                <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                <span>{SITE_CONFIG.tagline}</span>
              </div>

              {/* Main Headline */}
              <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-slate-900 tracking-tight leading-[1.1]">
                Innovation that moves <span className="text-emerald-700">ideas into impact.</span>
              </h1>

              {/* Supporting Message */}
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
                We drive innovation, research and practical technology solutions that address real-world challenges and help create a smarter, more sustainable future across communities and industries.
              </p>

              {/* Hero Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
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

              {/* Trust & Location Indicator */}
              <div className="pt-6 border-t border-slate-200/60 flex flex-wrap items-center gap-6 text-xs text-slate-500">
                <div className="flex items-center gap-2">
                  <Globe2 className="w-4 h-4 text-emerald-600" />
                  <span>Founded 2026 in Lagos State, Nigeria</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Grassroots & Industry Focus</span>
                </div>
              </div>
            </div>

            {/* Hero Right Visual: Authentic Graphic Diagram */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/90 shadow-xl shadow-emerald-950/5">
                
                {/* Visual Header */}
                <div className="flex items-center justify-between pb-6 border-b border-slate-100">
                  <BrandLogo size="sm" showTagline={false} />
                  <span className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-600 text-[11px] font-semibold tracking-wider">
                    INNOVATION ECOSYSTEM
                  </span>
                </div>

                {/* Conceptual Nodes Illustration */}
                <div className="py-8 space-y-4">
                  {/* Step 1 */}
                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/70 flex items-center gap-3.5 transition-all hover:bg-emerald-50/50 hover:border-emerald-200">
                    <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-sm shrink-0">
                      01
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-slate-900 text-sm">Research & Problem Framing</h4>
                      <p className="text-xs text-slate-500">Exploring real-world grassroots and industrial challenges.</p>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/70 flex items-center gap-3.5 transition-all hover:bg-emerald-50/50 hover:border-emerald-200">
                    <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-sm shrink-0">
                      02
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-slate-900 text-sm">Practical Technology Development</h4>
                      <p className="text-xs text-slate-500">Building user-centered software, AI models, & hardware tools.</p>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/70 flex items-center gap-3.5 transition-all hover:bg-emerald-50/50 hover:border-emerald-200">
                    <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-sm shrink-0">
                      03
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-slate-900 text-sm">Grassroots & Sustainable Impact</h4>
                      <p className="text-xs text-slate-500">Delivering lasting value directly to people and communities.</p>
                    </div>
                  </div>
                </div>

                {/* Footer caption */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span>Technology as a means to impact</span>
                  <span className="font-semibold text-emerald-700">Flagship: StrongsConnect</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 2 — HOMEPAGE INTRODUCTION */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-4">
          <span className="text-xs font-semibold text-emerald-700 tracking-widest uppercase">
            WHO WE ARE
          </span>
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-slate-900">
            Building practical solutions for a better tomorrow.
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            THE STRONGS brings innovation, research and practical technology closer to people and industries by developing solutions designed around real-world needs.
          </p>
        </div>
      </section>

      {/* SECTION 3 — WHAT DRIVES OUR INNOVATION (RELOCATED FOUR-SLIDE CAROUSEL) */}
      <PillarsCtaCarousel onNavigate={onNavigate} />

      {/* SECTION 4 — FEATURED INNOVATION (FLAGSHIP: StrongsConnect) */}
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="p-8 sm:p-12 rounded-3xl bg-slate-800/80 border border-slate-700/80 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-8 space-y-6">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="px-3 py-1 rounded-md bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-bold tracking-wider uppercase">
                    CURRENT INNOVATION
                  </span>
                  <span className="px-3 py-1 rounded-md bg-slate-700 text-slate-300 text-xs font-semibold">
                    PROTOTYPE &bull; 2026
                  </span>
                  <span className="px-3 py-1 rounded-md bg-sky-500/20 text-sky-300 text-xs font-semibold">
                    HealthTech
                  </span>
                </div>

                <div className="space-y-2">
                  <div className="inline-flex max-w-full">
                    <BrandLogo
                      variant="strongsconnect"
                      size="lg"
                      className="bg-white p-3.5 sm:p-4 rounded-2xl text-slate-900 border border-slate-100 shadow-sm overflow-hidden"
                    />
                  </div>
                  <p className="text-slate-300 text-base sm:text-lg leading-relaxed pt-3">
                    &ldquo;{flagshipProject?.shortDescription || "A pioneering healthcare and emergency support platform providing digital access to health information and emergency services."}&rdquo;
                  </p>
                </div>

                {/* Core components bullets */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-slate-300">
                  {flagshipProject?.components && flagshipProject.components.length > 0 ? (
                    flagshipProject.components.slice(0, 4).map((comp) => (
                      <div key={comp.name} className="flex items-start gap-2 bg-slate-900/60 p-3 rounded-xl border border-slate-700/50">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{comp.name}</span>
                      </div>
                    ))
                  ) : (
                    <>
                      <div className="flex items-start gap-2 bg-slate-900/60 p-3 rounded-xl border border-slate-700/50">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>Smart Drug Verification Analysis (Proposed)</span>
                      </div>
                      <div className="flex items-start gap-2 bg-slate-900/60 p-3 rounded-xl border border-slate-700/50">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>Clinical Case Research Exchange (Proposed)</span>
                      </div>
                      <div className="flex items-start gap-2 bg-slate-900/60 p-3 rounded-xl border border-slate-700/50">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>Interactive First Aid Emergency Modules</span>
                      </div>
                      <div className="flex items-start gap-2 bg-slate-900/60 p-3 rounded-xl border border-slate-700/50">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>Verified Healthcare Information Layer</span>
                      </div>
                    </>
                  )}
                </div>

                {/* Accuracy Disclaimer */}
                <div className="flex items-center gap-2 p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-200 text-xs">
                  <ShieldAlert className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>
                    Note: StrongsConnect is an active development prototype (2026). Functionality is currently proposed / developing and is not yet clinically validated or commercially deployed.
                  </span>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => onNavigate(`/projects/${flagshipProject?.slug || 'strongsconnect'}`)}
                    className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm shadow-md transition-all cursor-pointer"
                  >
                    <span>Explore StrongsConnect Project Story</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Graphic Card Right */}
              <div className="lg:col-span-4 bg-slate-900/90 p-6 rounded-2xl border border-slate-700/80 space-y-4 text-xs text-slate-300">
                <div className="font-display font-semibold text-white text-sm border-b border-slate-800 pb-2">
                  PROPOSED AI CAPABILITIES
                </div>
                <ul className="space-y-2.5">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                    <span>Packaging feature & barcode analysis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                    <span>Anonymised clinical case recommendations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                    <span>Personalised first-aid learning paths</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                    <span>Grassroots health trend identification</span>
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — PROJECTS PREVIEW */}
      <section className="py-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-semibold text-emerald-700 tracking-widest uppercase">
                PORTFOLIO
              </span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 mt-1">
                Initiatives & Projects
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projectsList.map((project) => (
              <div
                key={project.id}
                className="bg-[#fafafa] p-6 sm:p-8 rounded-3xl border border-slate-200/80 hover:border-emerald-300 transition-all shadow-2xs hover:shadow-md flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-emerald-100/80 text-emerald-800">
                      {project.category}
                    </span>
                    <span className="text-xs font-medium px-2.5 py-0.5 rounded-md bg-slate-200/70 text-slate-700">
                      {project.status} &bull; {project.dateStarted}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-2xl text-slate-900">
                    {project.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed">
                    {project.shortDescription}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-200/60 flex items-center justify-between">
                  <span className="text-xs text-slate-500">
                    {project.featured ? 'Featured Initiative' : 'Research Project'}
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
