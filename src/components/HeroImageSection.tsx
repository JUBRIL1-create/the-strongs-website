import React from 'react';
import { ArrowRight, ChevronDown, Compass, Sparkles } from 'lucide-react';

interface HeroImageSectionProps {
  onNavigate: (path: string) => void;
}

export const HeroImageSection: React.FC<HeroImageSectionProps> = ({ onNavigate }) => {
  const scrollToNext = () => {
    const nextSection = document.getElementById('home-overview');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollBy({ top: window.innerHeight * 0.8, behavior: 'smooth' });
    }
  };

  return (
    <section
      aria-label="THE STRONGS Hero Introduction"
      className="relative w-full pt-20 sm:pt-24 lg:pt-28 pb-12 sm:pb-16 lg:pb-20 bg-slate-950 text-white overflow-hidden border-b border-slate-800/80"
    >
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://i.postimg.cc/4dpndrZ9/1788209806379.png"
          alt="THE STRONGS - People, research, technology and innovation collaborating for meaningful societal progress"
          className="w-full h-full object-cover object-center sm:object-[center_35%] lg:object-center"
          referrerPolicy="no-referrer"
          fetchPriority="high"
          loading="eager"
        />

        {/* Directional gradients & subtle dark translucent overlay for contrast & readability without heavy blur */}
        {/* Mobile gradient: darker at bottom for text contrast while keeping image subjects authentic */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/75 to-black/40 sm:hidden" />
        
        {/* Desktop & Tablet gradient: cinematic radial & horizontal gradient maintaining photographic realism */}
        <div className="hidden sm:block absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/65 to-black/35" />
        <div className="hidden sm:block absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-black/25" />
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[520px] xs:min-h-[560px] sm:min-h-[600px] lg:min-h-[640px] flex flex-col justify-between">
        
        {/* Eyebrow / Category indicator */}
        <div className="pt-2 sm:pt-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/50 sm:bg-white/10 backdrop-blur-md border border-white/20 text-emerald-300 text-xs font-semibold tracking-wider uppercase shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span>THE STRONGS</span>
          </div>
        </div>

        {/* Central / Left Headline & Copy */}
        <div className="max-w-2xl lg:max-w-3xl my-auto py-8 sm:py-12 space-y-5 sm:space-y-6 text-left">
          <h1 className="font-display font-extrabold text-3xl xs:text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.12] drop-shadow-md">
            Innovating for a <span className="text-emerald-400">Better Tomorrow.</span>
          </h1>

          <p className="text-slate-200 text-base sm:text-lg lg:text-xl font-normal leading-relaxed max-w-2xl drop-shadow-sm">
            Exploring ideas, advancing knowledge and building solutions for meaningful progress.
          </p>

          {/* Action Buttons */}
          <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4">
            <button
              onClick={() => onNavigate('/projects')}
              className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm sm:text-base shadow-lg hover:shadow-emerald-500/25 transition-all duration-200 transform hover:-translate-y-0.5 active:scale-[0.98] cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
              aria-label="Explore Our Work - View THE STRONGS projects and initiatives"
            >
              <Compass className="w-4 h-4 sm:w-5 sm:h-5 text-slate-950" />
              <span>Explore Our Work</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-slate-950" />
            </button>

            <button
              onClick={() => onNavigate('/about')}
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 rounded-xl bg-black/40 hover:bg-black/60 text-white font-semibold text-sm sm:text-base border border-white/25 hover:border-white/40 backdrop-blur-md transition-all duration-200 active:scale-[0.98] cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
              aria-label="Discover THE STRONGS - Learn more about our story and mission"
            >
              <span>Discover THE STRONGS</span>
            </button>
          </div>
        </div>

        {/* Bottom Bar: Subtle Non-Distracting Scroll Indicator */}
        <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-300">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-medium tracking-wide">Forward-Thinking Impact & Research</span>
          </div>

          <button
            onClick={scrollToNext}
            className="group inline-flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors cursor-pointer py-1 px-2 rounded-md focus:outline-none focus-visible:ring-1 focus-visible:ring-emerald-400"
            aria-label="Scroll to discover more content below"
          >
            <span className="hidden sm:inline">Scroll to explore</span>
            <ChevronDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform duration-200" />
          </button>
        </div>

      </div>
    </section>
  );
};
