import React from 'react';
import { Calendar, User, ArrowRight, Tag } from 'lucide-react';
import { NEWS_ARTICLES } from '../data/news';
import { SEO } from '../components/SEO';

interface NewsPageProps {
  onNavigate: (path: string) => void;
}

export const NewsPage: React.FC<NewsPageProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-[#fafafa] pt-28 pb-20">
      <SEO
        title="News & Updates"
        description="Official announcements, milestones, and organisational updates from THE STRONGS."
        slug="news"
      />

      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="max-w-3xl space-y-4">
          <span className="text-xs font-semibold text-emerald-700 tracking-widest uppercase">
            ORGANISATIONAL UPDATES
          </span>
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-slate-900 tracking-tight">
            News & Milestone Announcements
          </h1>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Stay informed about core developments, project milestones, and research publications from THE STRONGS.
          </p>
        </div>
      </div>

      {/* Articles Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {NEWS_ARTICLES.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {NEWS_ARTICLES.map((article) => (
              <article
                key={article.id}
                className="p-8 bg-white rounded-3xl border border-slate-200/90 hover:border-emerald-300 transition-all shadow-2xs space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-xs text-slate-500">
                    <span className="font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-100">
                      {article.category}
                    </span>
                    <span>&bull;</span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      {article.date}
                    </span>
                  </div>

                  <h2 className="font-display font-bold text-2xl text-slate-900">
                    {article.title}
                  </h2>

                  <p className="text-slate-600 text-sm leading-relaxed">
                    {article.excerpt}
                  </p>

                  <div className="pt-2 text-slate-700 text-sm leading-relaxed border-t border-slate-100">
                    {article.content}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span className="flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5" />
                    {article.author}
                  </span>
                  <span className="font-semibold text-emerald-700">Official Announcement</span>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="p-16 text-center bg-white rounded-3xl border border-slate-200 space-y-3 max-w-2xl mx-auto">
            <h3 className="font-display font-bold text-xl text-slate-800">
              No News Articles Published Yet
            </h3>
            <p className="text-slate-600 text-sm">
              Updates from THE STRONGS will appear here as our work develops.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
