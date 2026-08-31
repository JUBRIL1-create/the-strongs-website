import React from 'react';
import { Mail, Instagram, Youtube, Linkedin, MapPin, ArrowUpRight, Heart, ShieldCheck } from 'lucide-react';
import { SITE_CONFIG } from '../config/site';
import { BrandLogo } from './BrandLogo';

interface FooterProps {
  onNavigate: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const currentYear = new Date().getFullYear();

  const handleNav = (path: string) => {
    onNavigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-slate-800">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <button
              onClick={() => handleNav('/')}
              className="text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded-lg"
            >
              <div className="bg-white/95 backdrop-blur-xs p-2.5 rounded-2xl inline-block border border-slate-700/50">
                <BrandLogo size="md" />
              </div>
            </button>
            <p className="text-slate-400 text-sm leading-relaxed max-w-md">
              THE STRONGS is an innovation initiative driving research, practical technology application, and sustainable solutions to tackle real-world challenges across grassroots communities and industries.
            </p>
            <div className="flex items-center gap-2 text-xs font-medium text-slate-400 pt-1">
              <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Founded 2026 in Lagos State, Nigeria</span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="space-y-3">
            <h3 className="font-display font-semibold text-white text-sm tracking-wider uppercase">
              Organisation
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => handleNav('/')} className="hover:text-emerald-400 transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('/about')} className="hover:text-emerald-400 transition-colors">
                  About Us & Story
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('/what-we-do')} className="hover:text-emerald-400 transition-colors">
                  What We Do
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('/team')} className="hover:text-emerald-400 transition-colors">
                  Our Founders & Team
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('/partners')} className="hover:text-emerald-400 transition-colors">
                  Partners & Support
                </button>
              </li>
            </ul>
          </div>

          {/* Projects & Updates */}
          <div className="space-y-3">
            <h3 className="font-display font-semibold text-white text-sm tracking-wider uppercase">
              Initiatives
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => handleNav('/projects')} className="hover:text-emerald-400 transition-colors flex items-center gap-1.5">
                  <span>Explore All Projects</span>
                  <ArrowUpRight className="w-3 h-3 text-emerald-400" />
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('/projects/strongsconnect')} className="hover:text-emerald-400 transition-colors">
                  StrongsConnect (HealthTech)
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('/news')} className="hover:text-emerald-400 transition-colors">
                  News & Milestone Updates
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('/events')} className="hover:text-emerald-400 transition-colors">
                  Events & Briefings
                </button>
              </li>
            </ul>
          </div>

          {/* Connect & Social */}
          <div className="space-y-3">
            <h3 className="font-display font-semibold text-white text-sm tracking-wider uppercase">
              Connect
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Official email for inquiries, collaborations & research partnerships:
            </p>
            <a
              href={`mailto:${SITE_CONFIG.contact.email}`}
              className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-400 hover:text-emerald-300 break-all bg-slate-800/80 px-3 py-2 rounded-lg border border-slate-700/80 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 shrink-0" />
              <span>{SITE_CONFIG.contact.email}</span>
            </a>

            <div className="pt-3 flex items-center gap-2">
              <a
                href={SITE_CONFIG.social.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-emerald-600 hover:text-white text-slate-300 flex items-center justify-center transition-all"
                aria-label="Instagram"
                title="Instagram @the.strongs.initiatives"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={SITE_CONFIG.social.youtube.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-emerald-600 hover:text-white text-slate-300 flex items-center justify-center transition-all"
                aria-label="YouTube"
                title="YouTube Channel THE STRONGS"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href={SITE_CONFIG.social.linkedin.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-emerald-600 hover:text-white text-slate-300 flex items-center justify-center transition-all"
                aria-label="LinkedIn"
                title="LinkedIn THE STRONGS"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>
              &copy; {currentYear} {SITE_CONFIG.name}. All rights reserved. British English Standard.
            </span>
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={() => handleNav('/contact')}
              className="hover:text-slate-200 transition-colors cursor-pointer"
            >
              Contact Us
            </button>
            <button
              onClick={() => handleNav('/partners')}
              className="hover:text-slate-200 transition-colors cursor-pointer"
            >
              Support Our Work
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
