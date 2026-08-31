import React from 'react';
import { Target, Eye, Sparkles, CheckCircle2, ShieldCheck, Heart, MapPin, Users2 } from 'lucide-react';
import { SITE_CONFIG } from '../config/site';
import { SEO } from '../components/SEO';

interface AboutPageProps {
  onNavigate: (path: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-[#fafafa] pt-28 pb-20">
      <SEO title="About Us & Our Story" description="Discover the founding story, mission, and vision of THE STRONGS." slug="about" />

      {/* Header Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-3xl space-y-4">
          <span className="text-xs font-semibold text-emerald-700 tracking-widest uppercase">
            ABOUT THE STRONGS
          </span>
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-slate-900 tracking-tight">
            Who We Are & What Drives Us
          </h1>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            THE STRONGS is an innovation initiative focused on driving research, technology development, and practical solutions that improve lives and advance industries.
          </p>
        </div>
      </div>

      {/* Who We Are & Story Section */}
      <section className="py-16 bg-white border-y border-slate-200/80 mb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Story Text */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-semibold text-emerald-700 tracking-widest uppercase block">
                OUR AUTHENTIC ORIGIN
              </span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 leading-snug">
                Founded in Medical School with a Vision for Real-World Technology
              </h2>
              <div className="space-y-4 text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
                <p>
                  THE STRONGS was founded in 2026 by six people who came together in medical school with a shared vision of improving lives through innovation and creating practical technologies that can help people at the grassroots and across different industries.
                </p>
                <p>
                  The founders shared an acute awareness that technology was not always fully implemented across the communities and sectors from which they came. This helped inspire a vision of bringing technology closer to people and applying innovation to real-world challenges.
                </p>
                <p>
                  While healthcare is one major area where THE STRONGS is actively innovating, exemplified by its flagship prototype StrongsConnect, the initiative&apos;s broader scope encompasses technology, research, sustainability, and grassroots development across multiple sectors.
                </p>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-semibold text-slate-700 bg-slate-50 p-4 rounded-2xl border border-slate-200/80">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-emerald-700 shrink-0" />
                  <span>Headquartered in Lagos State, Nigeria &bull; Serving Local & Global Contexts</span>
                </div>
                <span className="text-emerald-700 font-bold">Established 2026</span>
              </div>
            </div>

            {/* Official Organisation Profile Visual Card */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl overflow-hidden border border-slate-200/90 shadow-xl bg-slate-900">
                <img
                  src="https://i.postimg.cc/0jkFSsY3/file-00000000d35481f498e008356a18d52a.jpg"
                  alt="THE STRONGS official profile image"
                  className="w-full h-auto object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Mission Box */}
          <div className="p-8 sm:p-10 bg-white rounded-3xl border border-slate-200/90 shadow-2xs space-y-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center">
              <Target className="w-6 h-6" />
            </div>
            <span className="text-xs font-semibold text-emerald-700 tracking-widest uppercase block">
              OFFICIAL MISSION
            </span>
            <p className="font-display font-bold text-lg sm:text-xl text-slate-900 leading-snug">
              &ldquo;To drive innovation, research, and the practical application of technology to develop sustainable solutions that address real world challenges, improve everyday life, and contribute to the advancement of industries and communities worldwide.&rdquo;
            </p>
          </div>

          {/* Vision Box */}
          <div className="p-8 sm:p-10 bg-emerald-900 text-white rounded-3xl border border-emerald-800 shadow-lg space-y-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-800/80 text-emerald-300 flex items-center justify-center">
              <Eye className="w-6 h-6" />
            </div>
            <span className="text-xs font-semibold text-emerald-300 tracking-widest uppercase block">
              OFFICIAL VISION
            </span>
            <p className="font-display font-bold text-lg sm:text-xl text-emerald-50 leading-snug">
              &ldquo;To build a future where innovation, research, and technology are seamlessly integrated across every sector of society, creating smarter, more sustainable, and accessible solutions that make life better for everyone.&rdquo;
            </p>
          </div>

        </div>
      </section>

      {/* What Drives Us */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-xs font-semibold text-emerald-700 tracking-widest uppercase">
              FOUNDATIONAL DRIVERS
            </span>
            <h2 className="font-display font-bold text-3xl text-slate-900">
              What Drives Our Work
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <div className="p-6 bg-[#fafafa] rounded-2xl border border-slate-200 space-y-2">
              <h3 className="font-display font-bold text-lg text-slate-900">1. Grassroots Relevance</h3>
              <p className="text-slate-600 leading-relaxed">
                Bringing technology closer to people who need it most, ensuring innovations solve real everyday problems rather than remaining abstract ideas.
              </p>
            </div>
            <div className="p-6 bg-[#fafafa] rounded-2xl border border-slate-200 space-y-2">
              <h3 className="font-display font-bold text-lg text-slate-900">2. Evidence & Research</h3>
              <p className="text-slate-600 leading-relaxed">
                Grounded problem exploration and clinical or technical research to ensure every project is built on solid, verifiable foundations.
              </p>
            </div>
            <div className="p-6 bg-[#fafafa] rounded-2xl border border-slate-200 space-y-2">
              <h3 className="font-display font-bold text-lg text-slate-900">3. Sustainable Advancement</h3>
              <p className="text-slate-600 leading-relaxed">
                Creating long-term systems and tools designed to support communities, healthcare practitioners, and industries for years to come.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={() => onNavigate('/team')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-700 text-white font-semibold text-sm hover:bg-emerald-800 transition-colors cursor-pointer"
            >
              <Users2 className="w-4 h-4" />
              <span>Meet Our Six Founding Members</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
