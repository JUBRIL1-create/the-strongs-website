import React, { useState } from 'react';
import { Search, Compass, ArrowRight, Filter, ShieldCheck } from 'lucide-react';
import { PROJECTS_DATA } from '../data/projects';
import { Project, ProjectStatus } from '../types';
import { SEO } from '../components/SEO';

interface ProjectsPageProps {
  onNavigate: (path: string) => void;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({ onNavigate }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStatus, setSelectedStatus] = useState<string>('All');

  // Filter projects based on search query & status
  const filteredProjects = PROJECTS_DATA.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.problem.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesStatus =
      selectedStatus === 'All' || project.status === selectedStatus;

    return matchesSearch && matchesStatus;
  });

  const statusOptions: (ProjectStatus | 'All')[] = [
    'All',
    'Prototype',
    'Ongoing',
    'Completed',
    'Upcoming',
  ];

  return (
    <div className="min-h-screen bg-[#fafafa] pt-28 pb-20">
      <SEO
        title="Projects & Innovations"
        description="Explore projects developed by THE STRONGS across healthtech, sustainability, and grassroots technology."
        slug="projects"
      />

      {/* Header & Introduction */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="max-w-3xl space-y-4">
          <span className="text-xs font-semibold text-emerald-700 tracking-widest uppercase">
            PROJECT DISCOVERY
          </span>
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-slate-900 tracking-tight">
            Our Innovations & Research Projects
          </h1>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Discover technology initiatives engineered by THE STRONGS. Content is structured modularly so new projects automatically appear as development progresses.
          </p>
        </div>
      </div>

      {/* Search & Filter Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="p-4 bg-white rounded-2xl border border-slate-200/90 shadow-2xs flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Search Input */}
          <div className="relative w-full md:w-96">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search projects by keyword, category, or problem..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all"
            />
          </div>

          {/* Status Filter Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-1 md:pb-0">
            <span className="text-xs font-semibold text-slate-500 mr-2 flex items-center gap-1 shrink-0">
              <Filter className="w-3.5 h-3.5" />
              <span>Status:</span>
            </span>
            {statusOptions.map((status) => (
              <button
                key={status}
                onClick={() => setSelectedStatus(status)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer whitespace-nowrap ${
                  selectedStatus === status
                    ? 'bg-emerald-700 text-white shadow-2xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200/70'
                }`}
              >
                {status}
              </button>
            ))}
          </div>

        </div>
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="p-8 bg-white rounded-3xl border border-slate-200/90 hover:border-emerald-300 transition-all shadow-2xs hover:shadow-md flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-emerald-100/80 text-emerald-800">
                      {project.category}
                    </span>
                    <span className="text-xs font-medium px-2.5 py-1 rounded-md bg-slate-100 border border-slate-200 text-slate-700">
                      Status: <strong className="text-slate-900">{project.status}</strong> &bull; {project.dateStarted}
                    </span>
                  </div>

                  <h2 className="font-display font-bold text-2xl text-slate-900">
                    {project.title}
                  </h2>

                  <p className="text-slate-600 text-sm leading-relaxed">
                    {project.shortDescription}
                  </p>

                  {/* Components snippet */}
                  {project.components && project.components.length > 0 && (
                    <div className="pt-2 text-xs space-y-1">
                      <span className="font-semibold text-slate-700">Core Proposed Modules:</span>
                      <ul className="list-disc list-inside text-slate-500 space-y-0.5">
                        {project.components.slice(0, 3).map((comp) => (
                          <li key={comp.name}>{comp.name}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs text-slate-500">
                    {project.status === 'Prototype' ? 'Active Development' : 'Project Pipeline'}
                  </span>
                  <button
                    onClick={() => onNavigate(`/projects/${project.slug}`)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-xs shadow-2xs transition-all cursor-pointer"
                  >
                    <span>Read Full Story & Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="p-16 text-center bg-white rounded-3xl border border-slate-200 space-y-3">
            <p className="font-display font-bold text-xl text-slate-800">No projects match your search criteria.</p>
            <p className="text-slate-500 text-sm">Try clearing filters or searching for alternative terms.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedStatus('All');
              }}
              className="mt-4 px-4 py-2 rounded-xl bg-emerald-50 text-emerald-800 font-semibold text-xs hover:bg-emerald-100 transition-colors"
            >
              Reset Search & Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
