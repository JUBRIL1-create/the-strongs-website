import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { WhatWeDoPage } from './pages/WhatWeDoPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ProjectDetailPage } from './pages/ProjectDetailPage';
import { NewsPage } from './pages/NewsPage';
import { EventsPage } from './pages/EventsPage';
import { TeamPage } from './pages/TeamPage';
import { PartnersPage } from './pages/PartnersPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      // If a legacy hash URL was accessed (e.g. /#/projects), migrate to clean URL
      if (window.location.hash) {
        const legacyPath = window.location.hash.replace(/^#\/?/, '/');
        if (legacyPath && legacyPath !== '/') {
          window.history.replaceState(null, '', legacyPath);
          return legacyPath;
        }
      }
      const pathname = window.location.pathname.replace(/\/+$/, '') || '/';
      return pathname;
    }
    return '/';
  });

  // Handle clean History API route change
  const navigate = (path: string) => {
    const targetPath = path.startsWith('/') ? path : `/${path}`;
    const normalized = targetPath === '/' ? '/' : targetPath.replace(/\/+$/, '');
    setCurrentPath(normalized);
    if (typeof window !== 'undefined') {
      if (window.location.pathname !== normalized) {
        window.history.pushState(null, '', normalized);
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handlePopState = () => {
      const pathname = window.location.pathname.replace(/\/+$/, '') || '/';
      setCurrentPath(pathname);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Determine view component
  const renderView = () => {
    const normalizedPath = currentPath === '/' ? '/' : currentPath.replace(/\/+$/, '');
    if (normalizedPath.startsWith('/projects/')) {
      const slug = normalizedPath.replace('/projects/', '');
      return <ProjectDetailPage slug={slug} onNavigate={navigate} />;
    }

    switch (normalizedPath) {
      case '/about':
        return <AboutPage onNavigate={navigate} />;
      case '/what-we-do':
        return <WhatWeDoPage onNavigate={navigate} />;
      case '/projects':
        return <ProjectsPage onNavigate={navigate} />;
      case '/news':
        return <NewsPage onNavigate={navigate} />;
      case '/events':
        return <EventsPage onNavigate={navigate} />;
      case '/team':
        return <TeamPage onNavigate={navigate} />;
      case '/partners':
        return <PartnersPage onNavigate={navigate} />;
      case '/contact':
        return <ContactPage onNavigate={navigate} />;
      case '/':
      default:
        return <HomePage onNavigate={navigate} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fafafa] text-slate-900 font-sans antialiased selection:bg-emerald-100 selection:text-emerald-900">
      <Navbar currentPath={currentPath} onNavigate={navigate} />
      <main className="flex-1">{renderView()}</main>
      <Footer onNavigate={navigate} />
    </div>
  );
}
