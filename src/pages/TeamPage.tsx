import React, { useState, useEffect } from 'react';
import { TEAM_MEMBERS } from '../data/team';
import { TeamMember } from '../types';
import { SEO } from '../components/SEO';
import { getTeamMembers } from '../services/supabaseService';

interface TeamPageProps {
  onNavigate: (path: string) => void;
}

function resolvePhotoUrl(photo: string | null): string | null {
  if (!photo) return null;
  if (photo.includes('drive.google.com/file/d/')) {
    const match = photo.match(/\/file\/d\/([a-zA-Z0-9_-]+)/);
    if (match && match[1]) {
      return `https://lh3.googleusercontent.com/d/${match[1]}`;
    }
  }
  if (photo.includes('imgur.com/a/')) {
    const match = photo.match(/imgur\.com\/a\/([a-zA-Z0-9]+)/);
    if (match && match[1]) {
      return `https://i.imgur.com/${match[1]}.jpg`;
    }
  }
  if (photo.includes('imgur.com/') && !photo.includes('i.imgur.com/')) {
    const match = photo.match(/imgur\.com\/([a-zA-Z0-9]+)/);
    if (match && match[1]) {
      return `https://i.imgur.com/${match[1]}.jpg`;
    }
  }
  return photo;
}

export const TeamPage: React.FC<TeamPageProps> = ({ onNavigate }) => {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    getTeamMembers()
      .then((data) => {
        if (isMounted) {
          setTeamMembers(data || []);
        }
      })
      .catch((err) => console.warn('Error loading team members:', err))
      .finally(() => {
        if (isMounted) setLoading(false);
      });
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#fafafa] pt-28 pb-20">
      <SEO
        title="Our Team & Founders"
        description="Meet the founding members of THE STRONGS."
        slug="team"
      />

      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="max-w-3xl space-y-4">
          <span className="text-xs font-semibold text-emerald-700 tracking-widest uppercase">
            LEADERSHIP & FOUNDERS
          </span>
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-slate-900 tracking-tight">
            The Founding Team
          </h1>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            THE STRONGS was founded in 2026 by visionaries who came together in medical school around a shared mission of applying innovation and practical technology to real-world grassroots and industrial challenges.
          </p>
        </div>
      </div>

      {/* Team Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <div
                key={n}
                className="p-8 bg-white rounded-3xl border border-slate-200/90 shadow-2xs space-y-5 animate-pulse"
              >
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-slate-200 shrink-0" />
                  <div className="space-y-2 flex-1">
                    <div className="h-5 w-3/4 bg-slate-200 rounded" />
                    <div className="h-4 w-1/2 bg-slate-200 rounded" />
                  </div>
                </div>
                <div className="space-y-2 pt-2">
                  <div className="h-3 w-full bg-slate-200 rounded" />
                  <div className="h-3 w-5/6 bg-slate-200 rounded" />
                  <div className="h-3 w-4/6 bg-slate-200 rounded" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="p-8 bg-white rounded-3xl border border-slate-200/90 shadow-2xs hover:border-emerald-300 transition-all space-y-5 flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Avatar / Profile Photo & Title Header */}
                <div className="flex items-start gap-4">
                  {member.photo ? (
                    <div className="w-16 h-16 rounded-2xl overflow-hidden border border-emerald-200/80 shadow-xs shrink-0 bg-slate-100">
                      <img
                        src={resolvePhotoUrl(member.photo) || member.photo}
                        alt={member.name}
                        className="w-full h-full object-cover object-top"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  ) : (
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-100 to-emerald-200 text-emerald-900 flex items-center justify-center font-display font-extrabold text-lg shrink-0 shadow-xs border border-emerald-200/50">
                      {member.name.split(' ').map((n) => n[0]).join('')}
                    </div>
                  )}
                  <div className="space-y-1">
                    <h2 className="font-display font-bold text-xl text-slate-900 leading-snug">
                      {member.name}
                    </h2>
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-md bg-emerald-50 text-emerald-800 border border-emerald-200/80 inline-block">
                      {member.role}
                    </span>
                  </div>
                </div>

                {/* Biography or Role Overview */}
                <div className="pt-3 border-t border-slate-100 text-slate-600 text-xs sm:text-sm leading-relaxed">
                  {member.bio ? (
                    <div className="space-y-2 text-slate-700 whitespace-pre-line font-normal">
                      {member.bio}
                    </div>
                  ) : (
                    <div className="text-slate-500 space-y-1">
                      <p className="font-medium text-slate-700">Area of Responsibility:</p>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Leading {member.role?.toLowerCase() || 'strategic innovation'} across THE STRONGS project portfolio and institutional operations.
                      </p>
                    </div>
                  )}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                <span>THE STRONGS Founder</span>
                <span className="text-emerald-700 font-medium">Verified Profile</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  </div>
);
};
