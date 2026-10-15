import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SkillsSection from './components/SkillsSection';
import ProjectShowcase from './components/ProjectShowcase';
import MindSaarSection from './components/MindSaarSection';
import DecisionSandbox from './components/DecisionSandbox';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';
import CommandPalette from './components/CommandPalette';
import NotFound from './components/NotFound';

export default function App() {
  const [resumeOpen, setResumeOpen] = useState(false);
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
  const [selectedModalProject, setSelectedModalProject] = useState(null);

  // 404 Route Detection
  const [isNotFound, setIsNotFound] = useState(() => {
    if (typeof window !== 'undefined') {
      const path = window.location.pathname;
      return path !== '/' && path !== '' && !path.endsWith('/index.html');
    }
    return false;
  });

  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      setIsNotFound(path !== '/' && path !== '' && !path.endsWith('/index.html'));
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Theme state: defaults to dark matching Titanium aesthetic
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved) return saved;
      return 'dark';
    }
    return 'dark';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  // Global keyboard shortcut listener for Command Palette (Ctrl+K / Cmd+K or '/')
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setCommandPaletteOpen((prev) => !prev);
      } else if (e.key === '/' && !['INPUT', 'TEXTAREA'].includes(document.activeElement?.tagName)) {
        e.preventDefault();
        setCommandPaletteOpen(true);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Top scroll progress indicator (Brushed Silver / Platinum)
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (isNotFound) {
    return (
      <NotFound
        onGoHome={() => {
          window.history.pushState(null, '', '/');
          setIsNotFound(false);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenResume={() => setResumeOpen(true)}
      />
    );
  }

  return (
    <div className="min-h-screen bg-[#F8FAFC] dark:bg-[#08090C] text-slate-900 dark:text-white font-sans selection:bg-emerald-600 selection:text-white transition-colors duration-200 relative overflow-x-hidden max-w-full w-full">
      {/* Top Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-700 via-amber-500 to-amber-200 z-50 origin-left"
        style={{ scaleX }}
      />

      {/* Navigation */}
      <Navbar
        theme={theme}
        onToggleTheme={toggleTheme}
        onOpenResume={() => setResumeOpen(true)}
        onOpenCommandPalette={() => setCommandPaletteOpen(true)}
      />

      {/* Hero Section with Titanium Arch & Stacked Stats */}
      <Hero
        onExploreWork={() => scrollToSection('work')}
        onConnect={() => scrollToSection('contact')}
        onOpenResume={() => setResumeOpen(true)}
      />

      {/* "What do I help" - Horizontal Service Cards */}
      <SkillsSection />

      {/* "My recent projects" - Projects Grid */}
      <ProjectShowcase 
        onSelectProjectFromParent={(proj) => setSelectedModalProject(proj)}
        externalSelectedProject={selectedModalProject}
      />

      {/* "Building with MindSaar" - Startup Section */}
      <MindSaarSection />

      {/* Interactive Decision Sandbox */}
      <DecisionSandbox />

      {/* About Section */}
      <AboutSection onOpenResume={() => setResumeOpen(true)} />

      {/* Contact Section: "Let's talk" */}
      <ContactSection onOpenResume={() => setResumeOpen(true)} />

      {/* Footer */}
      <Footer onOpenResume={() => setResumeOpen(true)} />

      {/* Global Resume Modal */}
      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />

      {/* Global Command Palette Spotlight Search (Ctrl + K) */}
      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
        onOpenResume={() => setResumeOpen(true)}
        onSelectProject={(proj) => {
          setSelectedModalProject(proj);
          document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
        }}
      />
    </div>
  );
}
