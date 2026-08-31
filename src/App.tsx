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
    // Check initial window location path or hash for GitHub Pages fallback
    if (typeof window !== 'undefined') {
      const hash = window.location.hash.replace('#', '');
      if (hash) return hash;
      return window.location.pathname || '/';
    }
    return '/';
  });

  // Handle route change
  const navigate = (path: string) => {
    setCurrentPath(path);
    if (typeof window !== 'undefined') {
      window.location.hash = path;
    }
  };

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash) {
        setCurrentPath(hash);
      } else {
        setCurrentPath(window.location.pathname || '/');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Determine view component
  const renderView = () => {
    if (currentPath.startsWith('/projects/')) {
      const slug = currentPath.replace('/projects/', '');
      return <ProjectDetailPage slug={slug} onNavigate={navigate} />;
    }

    switch (currentPath) {
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
