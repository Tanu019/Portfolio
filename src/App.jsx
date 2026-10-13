import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ValueStrip from './components/ValueStrip';
import ProjectShowcase from './components/ProjectShowcase';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';
import CommandPalette from './components/CommandPalette';

export default function App() {
  const [resumeOpen, setResumeOpen] = useState(false);
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
  const [selectedModalProject, setSelectedModalProject] = useState(null);

  // Default to dark theme permanently
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

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

  // Top scroll progress indicator
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

  return (
    <div className="min-h-screen bg-[#0A0F16] text-[#F1F5F9] font-sans selection:bg-sky-500 selection:text-slate-950 relative">
      {/* Top Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-sky-600 via-sky-400 to-cyan-300 z-50 origin-left"
        style={{ scaleX }}
      />

      {/* Navigation */}
      <Navbar
        onOpenResume={() => setResumeOpen(true)}
        onOpenCommandPalette={() => setCommandPaletteOpen(true)}
      />

      {/* Hero Section */}
      <Hero
        onExploreWork={() => scrollToSection('work')}
        onConnect={() => scrollToSection('contact')}
      />

      {/* Marquee Value Strip */}
      <ValueStrip />

      {/* Project Showcase */}
      <ProjectShowcase 
        onSelectProjectFromParent={(proj) => setSelectedModalProject(proj)}
        externalSelectedProject={selectedModalProject}
      />

      {/* About Section */}
      <AboutSection onOpenResume={() => setResumeOpen(true)} />

      {/* Skills Matrix */}
      <SkillsSection />

      {/* Contact Section */}
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
