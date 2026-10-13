import React, { useState, useEffect } from 'react';
import { 
  FileText, 
  ArrowUpRight, 
  Menu, 
  X, 
  Sparkles, 
  Search 
} from 'lucide-react';

export default function Navbar({ onOpenResume, onOpenCommandPalette }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Work', href: '#work' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'bg-[#0A0F16]/90 backdrop-blur-md py-3 text-white border-b border-[#223245] shadow-xl'
          : 'bg-transparent py-5 text-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo & TC Monogram */}
          <a
            href="#"
            className="group flex items-center gap-3 focus:outline-none"
            aria-label="Tanu Chaudhary Homepage"
          >
            <div className="relative flex items-center justify-center w-10 h-10 bg-sky-500 text-slate-950 rounded-xl font-grotesk font-extrabold text-base border-2 border-sky-400 group-hover:bg-white transition-all duration-200 shadow-md">
              <span>TC</span>
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-sky-400 rounded-full animate-ping" />
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-sky-400 rounded-full border border-[#0A0F16]" />
            </div>

            <div className="flex flex-col">
              <span className="font-grotesk font-extrabold tracking-tight text-xl leading-none text-white group-hover:text-sky-400 transition-colors">
                TANU CHAUDHARY
              </span>
              <span className="font-mono text-[11px] font-bold tracking-widest uppercase text-sky-400/90 mt-0.5">
                Analytics & Strategy
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="font-grotesk font-bold text-sm tracking-wider uppercase transition-all duration-200 relative py-1 text-slate-200 hover:text-white group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-sky-400 transition-all duration-200 group-hover:w-full" />
                </a>
              ))}
            </div>

            <div className="flex items-center gap-3 pl-4 border-l border-[#223245]">
              {/* Quick Search Button (Command Palette) */}
              <button
                onClick={onOpenCommandPalette}
                className="flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-mono font-bold bg-[#111923] text-sky-300 border border-[#223245] hover:border-sky-400 transition-all shadow-sm"
                title="Search commands, projects, skills (Ctrl + K)"
              >
                <Search className="w-3.5 h-3.5 text-sky-400" />
                <span className="hidden lg:inline">Search</span>
                <kbd className="font-mono text-[10px] px-1.5 py-0.5 bg-[#182332] text-slate-300 rounded border border-[#223245] font-bold">
                  ⌘K
                </kbd>
              </button>

              {/* Status Pill */}
              <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-mono font-bold bg-[#111923] text-emerald-400 border border-emerald-500/30">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Open for Roles</span>
              </div>

              {/* Resume Button */}
              <button
                onClick={onOpenResume}
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl font-grotesk font-extrabold text-xs uppercase tracking-wider transition-all duration-200 bg-sky-500 text-slate-950 hover:bg-sky-400 shadow-md hover:shadow-sky-500/20"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Resume</span>
              </button>
            </div>
          </nav>

          {/* Mobile Menu Controls */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={onOpenCommandPalette}
              className="p-2 rounded-lg bg-[#111923] text-sky-300 border border-[#223245]"
              aria-label="Open search"
            >
              <Search className="w-4 h-4" />
            </button>
            <button
              onClick={onOpenResume}
              className="p-2 rounded-md font-grotesk font-bold text-xs bg-sky-500 text-slate-950"
              title="View Resume"
            >
              <FileText className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-white hover:bg-[#111923] transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#111923] text-white border-b border-[#223245] px-6 py-6 transition-all duration-200 shadow-2xl">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#0A0F16] text-sky-300 font-mono text-xs font-bold w-fit mb-2 border border-sky-500/30">
              <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
              <span>Seeking Business Analyst Opportunities</span>
            </div>

            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-grotesk font-extrabold text-lg uppercase tracking-wider text-white hover:text-sky-400 py-2 border-b border-[#223245] flex items-center justify-between"
              >
                <span>{link.name}</span>
                <ArrowUpRight className="w-4 h-4 text-sky-400" />
              </a>
            ))}

            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCommandPalette();
                }}
                className="flex items-center justify-center gap-2 w-full py-3 bg-[#0A0F16] text-sky-300 font-mono text-xs uppercase font-bold rounded-xl border border-[#223245]"
              >
                <Search className="w-4 h-4" />
                <span>Search Everything (⌘K)</span>
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="flex items-center justify-center gap-2 w-full py-3.5 bg-sky-500 text-slate-950 font-grotesk font-bold text-sm uppercase rounded-xl shadow-lg hover:bg-sky-400"
              >
                <FileText className="w-4 h-4" />
                <span>View Full Resume (PDF)</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
