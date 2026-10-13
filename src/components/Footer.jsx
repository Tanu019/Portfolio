import React, { useState, useEffect } from 'react';
import { ArrowUp, Clock, Mail, Phone, Linkedin, Github, FileText, ChevronRight } from 'lucide-react';
import { bioData } from '../data/projectsData';

export default function Footer({ onOpenResume }) {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      setTime(new Intl.DateTimeFormat('en-US', options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#work' },
    { label: 'Decision Sandbox', href: '#sandbox' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-slate-200/70 dark:bg-[#07080B] text-slate-900 dark:text-white border-t border-slate-300/70 dark:border-[#1E2536] py-10 sm:py-12 select-none transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-10 border-b border-slate-300/70 dark:border-[#1E2536]">
          
          {/* Brand Info & Clickable Logo */}
          <div className="lg:col-span-5 space-y-4">
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                scrollToTop();
              }}
              className="inline-flex items-center gap-3 group cursor-pointer focus:outline-none"
              title="Return to top of page"
            >
              <div className="w-11 h-11 rounded-full bg-gradient-to-br from-emerald-600 via-emerald-700 to-teal-900 text-white font-grotesk font-extrabold text-lg flex items-center justify-center shadow-md shadow-emerald-600/30 group-hover:scale-105 transition-transform">
                T
              </div>
              <div>
                <h4 className="font-grotesk font-extrabold text-xl text-slate-900 dark:text-white tracking-tight group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  Tanu Chaudhary
                </h4>
                <p className="font-sans text-xs text-slate-500 dark:text-slate-400">
                  Business Analytics • Financial Modeling • Data Strategy
                </p>
              </div>
            </a>

            <p className="font-sans text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-sm font-normal">
              Translating unstructured point-of-sale datasets, discounted cash flow valuations, and enterprise queries into high-conviction business decisions.
            </p>

            {/* Real-Time Status & IST Clock */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <div className="flex items-center gap-2 px-3 py-1.5 bg-white dark:bg-[#111522] rounded-full border border-slate-200 dark:border-[#1E2536] text-[11px] font-mono text-slate-700 dark:text-slate-300 shadow-xs">
                <Clock className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                <span>{time || '12:00:00 AM'} IST</span>
              </div>

              <div className="flex items-center gap-2 px-3 py-1.5 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 rounded-full border border-emerald-200 dark:border-emerald-900/40 text-[11px] font-sans font-semibold shadow-xs">
                <span className="w-2 h-2 rounded-full bg-emerald-600 dark:bg-emerald-400 animate-pulse" />
                <span>Open for Full-Time Roles</span>
              </div>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <h5 className="font-grotesk font-bold text-xs uppercase tracking-wider text-slate-900 dark:text-white">
              Navigation
            </h5>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-sans text-xs sm:text-sm text-slate-600 hover:text-emerald-600 dark:text-slate-400 dark:hover:text-emerald-400 transition-colors flex items-center gap-1.5 group"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 group-hover:translate-x-0.5 transition-transform" />
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Contact & Social Links */}
          <div className="lg:col-span-4 space-y-3">
            <h5 className="font-grotesk font-bold text-xs uppercase tracking-wider text-slate-900 dark:text-white">
              Direct Contact
            </h5>
            <div className="space-y-2.5 font-sans text-xs sm:text-sm">
              <a
                href={`mailto:${bioData.email}`}
                className="flex items-center gap-2.5 text-slate-600 hover:text-emerald-600 dark:text-slate-400 dark:hover:text-emerald-400 transition-colors"
                title="Email Tanu Chaudhary"
              >
                <Mail className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span className="truncate">{bioData.email}</span>
              </a>

              <a
                href={`tel:${bioData.phone.replace(/\s+/g, '')}`}
                className="flex items-center gap-2.5 text-slate-600 hover:text-emerald-600 dark:text-slate-400 dark:hover:text-emerald-400 transition-colors"
                title="Call Tanu Chaudhary"
              >
                <Phone className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span>{bioData.phone}</span>
              </a>

              <div className="flex items-center gap-3 pt-3">
                <a
                  href={bioData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl bg-white hover:bg-emerald-600 hover:text-white dark:bg-[#111522] dark:hover:bg-emerald-600 dark:hover:text-white text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-[#1E2536] transition-all shadow-xs"
                  title="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>

                <a
                  href={bioData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl bg-white hover:bg-emerald-600 hover:text-white dark:bg-[#111522] dark:hover:bg-emerald-600 dark:hover:text-white text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-[#1E2536] transition-all shadow-xs"
                  title="GitHub Repositories"
                >
                  <Github className="w-4 h-4" />
                </a>

                {onOpenResume && (
                  <button
                    onClick={onOpenResume}
                    className="flex items-center gap-1.5 px-3.5 py-2 bg-white hover:bg-emerald-50 dark:bg-[#111522] dark:hover:bg-[#182030] text-slate-800 dark:text-slate-200 hover:text-emerald-600 dark:hover:text-emerald-400 border border-slate-200 dark:border-[#1E2536] rounded-xl font-sans text-xs font-semibold transition-all shadow-xs"
                  >
                    <FileText className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                    <span>Resume</span>
                  </button>
                )}
              </div>
            </div>
          </div>

        </div>

        {/* Sub-Footer Row */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans text-slate-500">
          <p>© {new Date().getFullYear()} Tanu Chaudhary. Built with passion for data and business strategy.</p>
          
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full font-sans text-xs font-bold transition-all shadow-md shadow-emerald-600/30 hover:shadow-lg hover:shadow-emerald-600/40 cursor-pointer"
            aria-label="Back to Top"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-white" />
          </button>
        </div>

      </div>
    </footer>
  );
}
