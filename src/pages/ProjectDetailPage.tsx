import React from 'react';
import {
  ArrowLeft,
  Calendar,
  Tag,
  CheckCircle2,
  ShieldAlert,
  Compass,
  ArrowRight,
  Users,
  Building2,
  Layers,
  Sparkles,
} from 'lucide-react';
import { PROJECTS_DATA } from '../data/projects';
import { BrandLogo } from '../components/BrandLogo';
import { SEO } from '../components/SEO';

interface ProjectDetailPageProps {
  slug: string;
  onNavigate: (path: string) => void;
}

export const ProjectDetailPage: React.FC<ProjectDetailPageProps> = ({
  slug,
  onNavigate,
}) => {
  const project = PROJECTS_DATA.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#fafafa] pt-32 pb-20 text-center">
        <div className="max-w-md mx-auto px-4 space-y-4">
          <h1 className="font-display font-bold text-2xl text-slate-900">
            Project Not Found
          </h1>
          <p className="text-slate-600 text-sm">
            The requested project story could not be located or may have been updated.
          </p>
          <button
            onClick={() => onNavigate('/projects')}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-700 text-white font-semibold text-xs hover:bg-emerald-800 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Projects List</span>
          </button>
        </div>
      </div>
    );
  }

  // Related projects filtering
  const relatedProjects = PROJECTS_DATA.filter((p) => p.slug !== project.slug);

  return (
    <div className="min-h-screen bg-[#fafafa] pt-28 pb-20">
      <SEO
        title={`${project.title} | THE STRONGS`}
        description={project.shortDescription}
        slug={`projects/${project.slug}`}
      />

      {/* Back Button Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <button
          onClick={() => onNavigate('/projects')}
          className="inline-flex items-center gap-2 text-xs font-semibold text-slate-600 hover:text-emerald-800 transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Projects Overview</span>
        </button>
      </div>

      {/* 1. PROJECT HERO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="p-8 sm:p-12 bg-white rounded-3xl border border-slate-200/90 shadow-2xs space-y-6">
          
          <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-emerald-100/80 text-emerald-800">
                {project.category}
              </span>
              <span className="text-xs font-medium px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 border border-slate-200">
                Status: <strong className="text-slate-900">{project.status}</strong>
              </span>
            </div>

            <div className="flex items-center gap-2 text-xs text-slate-500">
              <Calendar className="w-3.5 h-3.5 text-emerald-600" />
              <span>Initiated: {project.dateStarted}</span>
            </div>
          </div>

          <div className="space-y-3">
            {project.slug === 'strongsconnect' ? (
              <BrandLogo variant="strongsconnect" size="lg" className="mb-2" />
            ) : (
              <h1 className="font-display font-extrabold text-3xl sm:text-5xl text-slate-900 tracking-tight">
                {project.title}
              </h1>
            )}

            {project.alternativeName && (
              <div className="text-xs font-semibold tracking-wider text-slate-400 uppercase">
                {project.alternativeName}
              </div>
            )}

            <p className="text-slate-700 text-base sm:text-lg leading-relaxed pt-2 max-w-4xl">
              {project.fullDescription}
            </p>
          </div>

          {/* Healthcare Disclaimer */}
          {project.category.toLowerCase().includes('health') && (
            <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 text-xs leading-relaxed flex items-start gap-3">
              <ShieldAlert className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <strong>Important Development Status Notice:</strong> StrongsConnect is an active development prototype (2026). Proposed functionality—including drug packaging verification and clinical exchange—represents planned/developing capabilities. This platform is not yet clinically validated, medical-grade certified, or commercially deployed.
              </div>
            </div>
          )}

        </div>
      </section>

      {/* 2. MAIN STORY DETAILS GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Problem & Objectives */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Problem Statement */}
          <div className="p-8 bg-white rounded-3xl border border-slate-200/90 shadow-2xs space-y-3">
            <h2 className="font-display font-bold text-xl text-slate-900 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-500" />
              <span>The Problem We Are Addressing</span>
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              {project.problem}
            </p>
          </div>

          {/* Objectives */}
          <div className="p-8 bg-white rounded-3xl border border-slate-200/90 shadow-2xs space-y-3">
            <h2 className="font-display font-bold text-xl text-slate-900 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-600" />
              <span>Key Objectives</span>
            </h2>
            <ul className="space-y-2.5 text-xs text-slate-600">
              {project.objectives.map((obj, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{obj}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Components Section (If present) */}
        {project.components && project.components.length > 0 && (
          <div className="p-8 sm:p-10 bg-white rounded-3xl border border-slate-200/90 shadow-2xs space-y-6">
            <h2 className="font-display font-bold text-2xl text-slate-900">
              Core Modules & Proposed Architecture
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.components.map((comp) => (
                <div key={comp.name} className="p-5 rounded-2xl bg-[#f8fafc] border border-slate-200 space-y-2">
                  <h3 className="font-display font-bold text-base text-slate-900">
                    {comp.name}
                  </h3>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    {comp.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Proposed AI Capabilities (If present) */}
        {project.aiRole && project.aiRole.length > 0 && (
          <div className="p-8 bg-slate-900 text-white rounded-3xl space-y-4">
            <div className="flex items-center gap-2 text-emerald-400 font-display font-bold text-lg">
              <Sparkles className="w-5 h-5" />
              <span>Proposed Artificial Intelligence Capabilities</span>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-300">
              {project.aiRole.map((role, i) => (
                <li key={i} className="flex items-center gap-2 bg-slate-800 p-3 rounded-xl border border-slate-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                  <span>{role}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Activities Section */}
        {project.activities && (
          <div className="p-8 bg-white rounded-3xl border border-slate-200 space-y-2">
            <h2 className="font-display font-bold text-xl text-slate-900">
              Current Activities & Milestones
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              {project.activities}
            </p>
          </div>
        )}

        {/* Results Section (Only shown if non-empty / non-null) */}
        {project.results && (
          <div className="p-8 bg-white rounded-3xl border border-slate-200 space-y-2">
            <h2 className="font-display font-bold text-xl text-slate-900">
              Verified Project Results
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              {project.results}
            </p>
          </div>
        )}

        {/* Impact Section */}
        {project.impact && (
          <div className="p-8 bg-emerald-50/80 rounded-3xl border border-emerald-200 text-slate-900 space-y-2">
            <h2 className="font-display font-bold text-xl text-emerald-900">
              Anticipated & Grassroots Impact
            </h2>
            <p className="text-slate-700 text-sm leading-relaxed">
              {project.impact}
            </p>
          </div>
        )}

        {/* Team Members Attached */}
        {project.team && project.team.length > 0 && (
          <div className="p-8 bg-white rounded-3xl border border-slate-200 space-y-4">
            <h2 className="font-display font-bold text-xl text-slate-900 flex items-center gap-2">
              <Users className="w-5 h-5 text-emerald-700" />
              <span>Project Team & Contributors</span>
            </h2>
            <div className="flex flex-wrap gap-2">
              {project.team.map((member) => (
                <span key={member} className="px-3.5 py-2 rounded-xl bg-slate-100 text-slate-800 font-semibold text-xs border border-slate-200">
                  {member}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Call To Action */}
        <div className="p-8 bg-slate-900 text-white rounded-3xl text-center space-y-4">
          <h2 className="font-display font-bold text-2xl">Interested in Collaborating on this Project?</h2>
          <p className="text-slate-300 text-sm max-w-xl mx-auto leading-relaxed">
            We welcome research partners, institutions, and supporters interested in advancing this technology initiative.
          </p>
          <button
            onClick={() => onNavigate('/partners')}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-500 text-slate-950 font-bold text-sm hover:bg-emerald-400 transition-colors cursor-pointer"
          >
            <span>Partner With THE STRONGS</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </section>
    </div>
  );
};
