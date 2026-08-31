import React from 'react';
import { Calendar, MapPin, ArrowRight, ExternalLink } from 'lucide-react';
import { EVENTS_DATA } from '../data/events';
import { SEO } from '../components/SEO';

interface EventsPageProps {
  onNavigate: (path: string) => void;
}

export const EventsPage: React.FC<EventsPageProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-[#fafafa] pt-28 pb-20">
      <SEO
        title="Events & Briefings"
        description="Upcoming and past events, virtual briefings, and research symposiums hosted by THE STRONGS."
        slug="events"
      />

      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="max-w-3xl space-y-4">
          <span className="text-xs font-semibold text-emerald-700 tracking-widest uppercase">
            COMMUNITY & EVENTS
          </span>
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-slate-900 tracking-tight">
            Events & Briefings
          </h1>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Participate in our virtual briefings, research workshops, and innovation announcements.
          </p>
        </div>
      </div>

      {/* Events Listing */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {EVENTS_DATA.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {EVENTS_DATA.map((event) => (
              <div
                key={event.id}
                className="p-8 bg-white rounded-3xl border border-slate-200/90 shadow-2xs space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-100 text-emerald-800">
                      {event.status} Event
                    </span>
                    <span className="text-xs font-semibold text-slate-500 flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-emerald-600" />
                      {event.date}
                    </span>
                  </div>

                  <h2 className="font-display font-bold text-2xl text-slate-900">
                    {event.title}
                  </h2>

                  <div className="flex items-center gap-1.5 text-xs text-slate-600 font-medium">
                    <MapPin className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{event.location}</span>
                  </div>

                  <p className="text-slate-600 text-sm leading-relaxed">
                    {event.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs text-slate-500">Virtual Access Available</span>
                  <button
                    onClick={() => onNavigate('/contact')}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-xs transition-colors cursor-pointer"
                  >
                    <span>Inquire / Register</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="p-16 text-center bg-white rounded-3xl border border-slate-200 space-y-3 max-w-2xl mx-auto">
            <h3 className="font-display font-bold text-xl text-slate-800">
              No Upcoming Events Scheduled
            </h3>
            <p className="text-slate-600 text-sm">
              Event announcements will be posted here as dates are finalized.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
