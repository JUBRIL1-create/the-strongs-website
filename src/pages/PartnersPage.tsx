import React, { useState } from 'react';
import { Building2, Handshake, Microscope, Cpu, Heart, CheckCircle2, ShieldCheck, Mail, ArrowRight, Info, Users, Copy, Check } from 'lucide-react';
import { SITE_CONFIG } from '../config/site';
import { SEO } from '../components/SEO';

interface PartnersPageProps {
  onNavigate: (path: string) => void;
}

export const PartnersPage: React.FC<PartnersPageProps> = ({ onNavigate }) => {
  const [copiedAccount, setCopiedAccount] = useState(false);

  const handleCopyAccount = () => {
    if (SITE_CONFIG.donations.accountNumber) {
      navigator.clipboard.writeText(SITE_CONFIG.donations.accountNumber);
      setCopiedAccount(true);
      setTimeout(() => setCopiedAccount(false), 3000);
    }
  };
  return (
    <div className="min-h-screen bg-[#fafafa] pt-28 pb-20">
      <SEO
        title="Partnerships & Support"
        description="Collaborate with THE STRONGS in research, technology development, and grassroots initiatives."
        slug="partners"
      />

      {/* Header Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-3xl space-y-4">
          <span className="text-xs font-semibold text-emerald-700 tracking-widest uppercase">
            COLLABORATION & SUPPORT
          </span>
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-slate-900 tracking-tight">
            Partner With THE STRONGS
          </h1>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            THE STRONGS approaches collaboration with a commitment to evidence-based research, practical technology implementation, and long-term grassroots impact.
          </p>
        </div>
      </div>

      {/* BUILD WITH US - Hero Highlight Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="p-8 sm:p-12 bg-gradient-to-br from-emerald-900 to-slate-900 text-white rounded-3xl shadow-xl space-y-8 relative overflow-hidden">
          <div className="space-y-4 max-w-3xl">
            <span className="px-3 py-1 rounded-md bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-bold tracking-wider uppercase">
              COLLABORATION PHILOSOPHY
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white">
              BUILD WITH US
            </h2>
            <blockquote className="text-slate-200 text-lg sm:text-xl font-medium leading-relaxed italic border-l-4 border-emerald-500 pl-4 py-1">
              &ldquo;Meaningful innovation grows through collaboration. We welcome opportunities to work with organisations, researchers, institutions and individuals who share our commitment to creating practical solutions for a better tomorrow.&rdquo;
            </blockquote>
          </div>

          <div className="pt-2 flex flex-wrap items-center gap-4">
            <button
              onClick={() => onNavigate('/contact')}
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm shadow-md transition-all cursor-pointer"
            >
              <span>Initiate Collaboration</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href={`mailto:${SITE_CONFIG.contact.email}`}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-white/20 transition-all"
            >
              <Mail className="w-4 h-4" />
              <span>Email Us Directly</span>
            </a>
          </div>
        </div>
      </section>

      {/* TYPES OF PARTNERSHIPS / HOW WE COLLABORATE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <span className="text-xs font-semibold text-emerald-700 tracking-widest uppercase">
            HOW WE COLLABORATE
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900">
            Types of Partnerships
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Structured engagement pathways for institutions, technology partners, and researchers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Research Institutions */}
          <div className="p-6 sm:p-8 bg-white rounded-3xl border border-slate-200/90 shadow-2xs space-y-4 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold">
                <Microscope className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-xl text-slate-900">
                Research Institutions
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Co-conduct clinical, technical, and grassroots studies, co-publish findings, and frame evidence-backed solutions for complex problems.
              </p>
            </div>
          </div>

          {/* Technical Partners */}
          <div className="p-6 sm:p-8 bg-white rounded-3xl border border-slate-200/90 shadow-2xs space-y-4 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-xl text-slate-900">
                Technical Partners
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Provide hardware components, cloud infrastructure, AI model co-development, or engineering expertise to power prototypes like StrongsConnect.
              </p>
            </div>
          </div>

          {/* Grassroots Communities */}
          <div className="p-6 sm:p-8 bg-white rounded-3xl border border-slate-200/90 shadow-2xs space-y-4 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-xl text-slate-900">
                Grassroots Communities
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Work alongside community leaders, healthcare clinics, and local groups to test solutions in real-world contexts and gather field feedback.
              </p>
            </div>
          </div>

          {/* Resource & Funding Supporters */}
          <div className="p-6 sm:p-8 bg-white rounded-3xl border border-slate-200/90 shadow-2xs space-y-4 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-xl text-slate-900">
                Resource & Funding
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Support research grants, field trials, prototype fabrication, or community education modules through institutional support.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* PARTNERSHIP GUIDELINES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="p-8 sm:p-10 bg-white rounded-3xl border border-slate-200/90 shadow-2xs space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-semibold text-emerald-700 tracking-widest uppercase">
              SELECTION CRITERIA
            </span>
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-slate-900">
              Partnership Guidelines
            </h2>
            <p className="text-slate-600 text-sm max-w-2xl">
              We evaluate potential partnerships based on mutual values, ethical alignment, and practical potential for impact:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
            <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-200/80">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <strong className="block text-slate-900 font-semibold mb-0.5">Shared Commitment to Impact</strong>
                <span className="text-slate-600">Alignment with our goal of developing sustainable, practical solutions that directly serve communities and industries.</span>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-200/80">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <strong className="block text-slate-900 font-semibold mb-0.5">Scientific & Ethical Integrity</strong>
                <span className="text-slate-600">Dedication to rigorous research methodology, data privacy, and ethical technological implementation.</span>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-200/80">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <strong className="block text-slate-900 font-semibold mb-0.5">Practical Feasibility</strong>
                <span className="text-slate-600">Focus on actionable initiatives with realistic timelines, defined objectives, and measurable outcomes.</span>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-200/80">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <strong className="block text-slate-900 font-semibold mb-0.5">Long-Term Sustainability</strong>
                <span className="text-slate-600">Building systems and technologies intended to operate durably beyond single project cycles.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteering Notice & Financial Support */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Volunteering Status */}
        <div className="p-6 rounded-2xl bg-slate-100 border border-slate-200 flex items-center gap-3 text-xs text-slate-600">
          <Info className="w-5 h-5 text-slate-500 shrink-0" />
          <div>
            <strong>Volunteering Status:</strong> General public volunteering is not currently open. Formal technical or research collaboration inquiries can be submitted directly via email.
          </div>
        </div>

        {/* Support Component */}
        <div className="p-8 sm:p-10 bg-slate-900 text-white rounded-3xl shadow-xl space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-bold text-emerald-400 tracking-widest uppercase">
              OFFICIAL ORGANISATIONAL GIVING
            </span>
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-white">
              Official Support &amp; Donation Account
            </h2>
            <p className="text-slate-300 text-sm max-w-2xl leading-relaxed">
              Financial support directly accelerates our prototype research, hardware testing, and grassroots community outreach.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-800 border border-slate-700 text-xs space-y-3">
            <div className="flex items-center justify-between text-slate-300 pb-2 border-b border-slate-700">
              <span className="font-bold uppercase tracking-wider text-emerald-400">Direct Bank Transfer</span>
              <span className="px-2.5 py-1 rounded-md bg-emerald-500/20 text-emerald-300 font-semibold">
                Official Account
              </span>
            </div>

            <div className="space-y-3 text-sm text-slate-100 pt-1">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 pb-2 border-b border-slate-700/60">
                <span className="text-slate-400 text-xs">Bank Name:</span>
                <span className="font-semibold text-white">{SITE_CONFIG.donations.bankName}</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 pb-2 border-b border-slate-700/60">
                <span className="text-slate-400 text-xs">Account Name:</span>
                <span className="font-semibold text-white">{SITE_CONFIG.donations.accountName}</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pt-1">
                <div>
                  <span className="text-slate-400 text-xs block">Account Number:</span>
                  <span className="font-mono font-bold text-lg text-emerald-400 tracking-wider">
                    {SITE_CONFIG.donations.accountNumber}
                  </span>
                </div>
                <button
                  onClick={handleCopyAccount}
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-700 hover:bg-slate-600 text-white font-semibold text-xs transition-all cursor-pointer shrink-0"
                  title="Copy account number"
                >
                  {copiedAccount ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Account Number</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          <div className="pt-2 flex flex-wrap items-center gap-4">
            <button
              onClick={() => onNavigate('/contact')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm transition-colors cursor-pointer"
            >
              <Mail className="w-4 h-4" />
              <span>Contact for Partnership & Support Inquiries</span>
            </button>
          </div>
        </div>

      </section>
    </div>
  );
};
