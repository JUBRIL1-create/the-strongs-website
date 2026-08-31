import React from 'react';
import { Lightbulb, Microscope, Cpu, Leaf, Wrench } from 'lucide-react';
import { SEO } from '../components/SEO';

interface WhatWeDoPageProps {
  onNavigate: (path: string) => void;
}

export const WhatWeDoPage: React.FC<WhatWeDoPageProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-[#fafafa] pt-28 pb-20">
      <SEO title="What We Do" description="THE STRONGS brings innovation, research and practical technology closer to people and industries." slug="what-we-do" />

      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="max-w-3xl space-y-3">
          <span className="text-xs font-semibold text-emerald-700 tracking-widest uppercase block">
            AREAS OF WORK
          </span>
          <p className="text-slate-700 text-lg sm:text-xl font-medium leading-relaxed">
            THE STRONGS brings innovation, research and practical technology closer to people and industries by developing solutions designed around real-world needs.
          </p>
        </div>
      </div>

      {/* Grid of Focus Areas */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* 1. Innovation */}
        <div className="p-8 sm:p-10 bg-white rounded-3xl border border-slate-200/90 shadow-2xs grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          <div className="md:col-span-3">
            <div className="w-14 h-14 rounded-2xl bg-emerald-50 border border-emerald-100 text-emerald-700 flex items-center justify-center">
              <Lightbulb className="w-7 h-7" />
            </div>
          </div>
          <div className="md:col-span-9 space-y-2">
            <h2 className="font-display font-bold text-2xl text-slate-900">Innovation</h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              We develop practical ideas and technologies that respond to real-world challenges. Innovation at THE STRONGS is not about creating gadgets for novelty, but identifying systemic gaps in everyday life and building intuitive solutions to solve them.
            </p>
          </div>
        </div>

        {/* 2. Research */}
        <div className="p-8 sm:p-10 bg-white rounded-3xl border border-slate-200/90 shadow-2xs grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          <div className="md:col-span-3">
            <div className="w-14 h-14 rounded-2xl bg-emerald-50 border border-emerald-100 text-emerald-700 flex items-center justify-center">
              <Microscope className="w-7 h-7" />
            </div>
          </div>
          <div className="md:col-span-9 space-y-2">
            <h2 className="font-display font-bold text-2xl text-slate-900">Research</h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              We explore problems, generate knowledge and use evidence to guide meaningful innovation. Grounded problem exploration ensures that every project is backed by verified data, community engagement, and rigorous technical study.
            </p>
          </div>
        </div>

        {/* 3. Technology */}
        <div className="p-8 sm:p-10 bg-white rounded-3xl border border-slate-200/90 shadow-2xs grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          <div className="md:col-span-3">
            <div className="w-14 h-14 rounded-2xl bg-emerald-50 border border-emerald-100 text-emerald-700 flex items-center justify-center">
              <Cpu className="w-7 h-7" />
            </div>
          </div>
          <div className="md:col-span-9 space-y-2">
            <h2 className="font-display font-bold text-2xl text-slate-900">Technology</h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              We apply technology in practical ways that improve everyday experiences and create new possibilities. From artificial intelligence models in medicine verification to localized agricultural diagnostics, technology is engineered to be accessible and reliable.
            </p>
          </div>
        </div>

        {/* 4. Sustainability */}
        <div className="p-8 sm:p-10 bg-white rounded-3xl border border-slate-200/90 shadow-2xs grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          <div className="md:col-span-3">
            <div className="w-14 h-14 rounded-2xl bg-emerald-50 border border-emerald-100 text-emerald-700 flex items-center justify-center">
              <Leaf className="w-7 h-7" />
            </div>
          </div>
          <div className="md:col-span-9 space-y-2">
            <h2 className="font-display font-bold text-2xl text-slate-900">Sustainability</h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              We pursue solutions designed to create lasting value for communities, people and industries. Our project models prioritize resource efficiency, local maintainability, and long-term societal resilience.
            </p>
          </div>
        </div>

        {/* 5. Practical Solutions */}
        <div className="p-8 sm:p-10 bg-white rounded-3xl border border-slate-200/90 shadow-2xs grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          <div className="md:col-span-3">
            <div className="w-14 h-14 rounded-2xl bg-emerald-50 border border-emerald-100 text-emerald-700 flex items-center justify-center">
              <Wrench className="w-7 h-7" />
            </div>
          </div>
          <div className="md:col-span-9 space-y-2">
            <h2 className="font-display font-bold text-2xl text-slate-900">Practical Grassroots Solutions</h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              We focus on bringing practical technology directly to grassroots communities. By lowering barriers to access, we bridge the gap between high-level technological advancements and everyday human needs.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};
