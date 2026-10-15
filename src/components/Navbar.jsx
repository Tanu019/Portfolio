import React, { useState, useEffect } from 'react';
import { 
  FileText, 
  ArrowUpRight, 
  Menu, 
  X, 
  MessageSquare, 
  Search, 
  Sun, 
  Moon,
  Clock 
} from 'lucide-react';

export default function Navbar({ theme, onToggleTheme, onOpenResume, onOpenCommandPalette }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [localTime, setLocalTime] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setLocalTime(new Intl.DateTimeFormat('en-US', {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
      }).format(now));
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#work' },
    { name: 'MindSaar', href: '#mindsaar' },
    { name: 'Sandbox', href: '#sandbox' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 dark:bg-[#08090C]/95 backdrop-blur-md py-3 border-b border-slate-200 dark:border-[#1E2330] shadow-sm dark:shadow-2xl'
          : 'bg-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo & Avatar (Monogram T in Emerald Mint) */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-3 focus:outline-none group cursor-pointer"
            aria-label="Tanu Chaudhary"
          >
            {/* Monogram Circle */}
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-600 via-amber-700 to-stone-900 text-white font-grotesk font-extrabold text-lg flex items-center justify-center shadow-md shadow-emerald-600/30 group-hover:scale-105 transition-transform">
              T
            </div>

            <div className="flex flex-col">
              <span className="font-grotesk font-bold text-lg sm:text-xl text-slate-900 dark:text-white leading-none">
                Tanu
              </span>
              <span className="font-sans text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold mt-0.5 tracking-wide">
                Business Analyst
              </span>
            </div>
          </a>

          {/* Center Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-sans font-medium text-sm text-slate-600 hover:text-emerald-600 dark:text-slate-300 dark:hover:text-emerald-400 transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            {/* Live Local Time Badge */}
            <div className="hidden xl:flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-[#121620] border border-slate-200 dark:border-[#1E2536] text-[11px] font-mono text-slate-700 dark:text-slate-300">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>{localTime || '09:15 PM'} IST</span>
            </div>

            {/* Search Button (Command Palette) */}
            <button
              onClick={onOpenCommandPalette}
              className="p-2.5 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-[#121620] dark:hover:bg-[#1A2030] text-slate-600 hover:text-emerald-600 dark:text-slate-300 dark:hover:text-emerald-400 border border-slate-200 dark:border-[#1E2536] transition-colors"
              title="Search commands (⌘K)"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Theme Toggle Button (Light / Dark) */}
            <button
              onClick={onToggleTheme}
              className="p-2.5 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-[#121620] dark:hover:bg-[#1A2030] text-slate-600 hover:text-emerald-600 dark:text-slate-300 dark:hover:text-emerald-400 border border-slate-200 dark:border-[#1E2536] transition-colors"
              title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} mode`}
            >
              {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-emerald-600" />}
            </button>

            {/* Resume Button */}
            {onOpenResume && (
              <button
                onClick={onOpenResume}
                className="flex items-center gap-1.5 px-4 py-2 rounded-full font-sans font-semibold text-xs text-slate-700 dark:text-slate-200 bg-slate-100 hover:bg-slate-200 dark:bg-[#121620] dark:hover:bg-[#1A2030] border border-slate-200 dark:border-[#1E2536] hover:border-emerald-500/50 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Resume</span>
              </button>
            )}

            {/* Let's talk Button in Emerald Mint */}
            <a
              href="#contact"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full font-sans font-bold text-xs text-white bg-emerald-600 hover:bg-emerald-700 transition-all shadow-md shadow-emerald-600/30 hover:shadow-lg hover:shadow-emerald-600/40"
            >
              <MessageSquare className="w-3.5 h-3.5 text-white" />
              <span>Let's talk</span>
            </a>
          </div>

          {/* Mobile Menu Controls */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={onToggleTheme}
              className="p-2 rounded-full bg-slate-100 dark:bg-[#121620] text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-[#1E2536]"
              title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} mode`}
            >
              {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-emerald-600" />}
            </button>

            <button
              onClick={onOpenResume}
              className="p-2 rounded-full bg-slate-100 dark:bg-[#121620] text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-[#1E2536]"
              aria-label="View Resume"
            >
              <FileText className="w-4 h-4 text-slate-600 dark:text-slate-300" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-full text-slate-900 dark:text-white bg-slate-100 dark:bg-[#121620] border border-slate-200 dark:border-[#1E2536]"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-[#0B0E17] text-slate-900 dark:text-white border-b border-slate-200 dark:border-[#1E2536] px-6 py-6 shadow-2xl">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-grotesk font-semibold text-base text-slate-800 dark:text-slate-200 hover:text-emerald-600 dark:hover:text-emerald-400 py-2 border-b border-slate-200 dark:border-[#1E2536]/60 flex items-center justify-between"
              >
                <span>{link.name}</span>
                <ArrowUpRight className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              </a>
            ))}

            <div className="pt-2 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCommandPalette();
                }}
                className="flex items-center justify-center gap-2 w-full py-3 bg-slate-100 dark:bg-[#121620] text-slate-800 dark:text-slate-200 font-sans text-xs font-semibold rounded-full border border-slate-200 dark:border-[#1E2536]"
              >
                <Search className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>Search Portfolio (⌘K)</span>
              </button>

              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-sans font-bold text-sm rounded-full shadow-lg shadow-emerald-600/30"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Let's talk</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
