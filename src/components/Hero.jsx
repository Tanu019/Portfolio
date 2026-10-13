import React, { useState, useEffect } from 'react';
import { 
  Mail, 
  Linkedin, 
  Github, 
  ArrowUpRight, 
  FileText, 
  Mouse,
  Sparkles,
  ChevronDown
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero({ onExploreWork, onConnect, onOpenResume }) {
  const [localTime, setLocalTime] = useState('');

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

  const stats = [
    { number: '1.2M+', label: 'Data Rows Analyzed' },
    { number: '100%', label: 'Analytical Rigor' },
    { number: '4', label: 'Flagship Projects' },
  ];

  return (
    <section id="hero" className="relative min-h-0 bg-[#F8FAFC] dark:bg-[#08090C] text-slate-900 dark:text-white overflow-hidden pt-24 sm:pt-28 pb-10 sm:pb-14 flex flex-col justify-center transition-colors duration-200">
      
      {/* Subtle emerald ambient backlight glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-emerald-500/5 dark:bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hello Welcome + I'm Tanu + Hire Me + Follow Me */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-5 flex flex-col justify-center space-y-6"
          >
            {/* Live Local Time & Location Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white dark:bg-[#111522] border border-emerald-200/60 dark:border-emerald-900/40 text-xs font-mono shadow-xs w-fit">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="font-sans font-medium text-slate-600 dark:text-slate-300">New Delhi, IN</span>
              <span className="text-slate-300 dark:text-slate-600">•</span>
              <span className="font-semibold text-emerald-600 dark:text-emerald-400">{localTime || '09:15 PM'} IST</span>
            </div>

            {/* "Hello Welcome" tag */}
            <span className="font-sans text-sm sm:text-base text-slate-500 dark:text-slate-400 font-medium tracking-wide">
              Hello, Welcome
            </span>

            {/* Main Headline */}
            <h1 className="font-grotesk font-extrabold text-4xl sm:text-5xl lg:text-[56px] leading-[1.08] tracking-tight text-slate-900 dark:text-white">
              I'm Tanu <br />
              <span className="text-emerald-600 dark:text-emerald-400">Business Analyst</span>
            </h1>

            {/* Action Buttons row */}
            <div className="flex items-center gap-4 pt-2">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-sans font-bold text-sm rounded-full shadow-lg shadow-emerald-600/30 hover:shadow-xl hover:shadow-emerald-600/40 transition-all"
              >
                <Mail className="w-4 h-4 text-white" />
                <span>Hire Me</span>
              </a>

              {onOpenResume && (
                <button
                  onClick={onOpenResume}
                  className="inline-flex items-center gap-1.5 px-5 py-3.5 text-slate-700 hover:text-emerald-600 dark:text-slate-300 dark:hover:text-emerald-400 font-sans font-semibold text-sm transition-colors"
                >
                  <FileText className="w-4 h-4 text-slate-500 dark:text-slate-400" />
                  <span>View CV</span>
                </button>
              )}
            </div>

            {/* Short value statement with diamond sparkle icon */}
            <div className="flex items-start gap-3 pt-4 max-w-md">
              <div className="p-1.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0 border border-emerald-200 dark:border-emerald-800/40">
                <Sparkles className="w-4 h-4" />
              </div>
              <p className="font-sans text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
                I translate complex grocery retail transactions, 5-year DCF valuation models, and SQL pipelines into profitable executive roadmaps.
              </p>
            </div>

            {/* Follow Me Social Row */}
            <div className="pt-6 border-t border-slate-200 dark:border-slate-800 flex items-center gap-4">
              <span className="font-sans text-xs font-semibold text-slate-500 dark:text-slate-400">
                Follow Me:
              </span>
              <div className="flex items-center gap-2.5">
                <a
                  href="https://www.linkedin.com/in/tanu-chaudhary-380863276"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-white dark:bg-[#111522] hover:bg-emerald-600 hover:text-white dark:hover:bg-emerald-600 dark:hover:text-white text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 flex items-center justify-center transition-all shadow-xs"
                  title="LinkedIn"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                </a>

                <a
                  href="https://github.com/Tanu019"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-white dark:bg-[#111522] hover:bg-emerald-600 hover:text-white dark:hover:bg-emerald-600 dark:hover:text-white text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 flex items-center justify-center transition-all shadow-xs"
                  title="GitHub"
                >
                  <Github className="w-3.5 h-3.5" />
                </a>

                <a
                  href="mailto:ctanu608@gmail.com"
                  className="w-8 h-8 rounded-full bg-white dark:bg-[#111522] hover:bg-emerald-600 hover:text-white dark:hover:bg-emerald-600 dark:hover:text-white text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 flex items-center justify-center transition-all shadow-xs"
                  title="Email"
                >
                  <Mail className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Center Column: Sculpted Titanium & Emerald Arch with Portrait */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-4 flex flex-col items-center justify-center relative"
          >
            {/* Concentric thin orbital rings */}
            <div className="absolute w-[360px] h-[360px] sm:w-[420px] sm:h-[420px] rounded-full border border-emerald-400/20 dark:border-emerald-500/10 pointer-events-none -z-0" />
            <div className="absolute w-[420px] h-[420px] sm:w-[500px] sm:h-[500px] rounded-full border border-emerald-400/10 dark:border-emerald-500/5 pointer-events-none -z-0" />

            {/* The Sculpted Arch Backdrop */}
            <div className="w-[260px] sm:w-[310px] h-[350px] sm:h-[420px] bg-gradient-to-b from-slate-200 via-slate-100 to-slate-200 dark:from-[#1E293B] dark:via-[#0F172A] dark:to-[#08090C] rounded-t-full rounded-b-[48px] overflow-hidden relative shadow-2xl flex items-end justify-center z-10 border-2 border-slate-300 dark:border-slate-700/60 shadow-emerald-950/20">
              <img 
                src="/profile.jpg" 
                alt="Tanu Chaudhary" 
                className="w-full h-full object-cover object-[center_12%] scale-105 hover:scale-110 transition-transform duration-500"
              />
              
              {/* Subtle bottom gradient overlay for smooth integration */}
              <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-slate-400/30 dark:from-[#08090C] to-transparent pointer-events-none" />
            </div>

            {/* Mouse Scroll Down Icon beneath portrait */}
            <div className="mt-4 flex flex-col items-center gap-1 z-10">
              <a
                href="#services"
                className="w-7 h-11 rounded-full border-2 border-slate-300 hover:border-emerald-600 dark:border-slate-700 dark:hover:border-emerald-400 flex items-start justify-center p-1.5 transition-colors"
                title="Scroll down"
              >
                <motion.div 
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                  className="w-1.5 h-2 bg-emerald-600 dark:bg-emerald-400 rounded-full"
                />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Stacked Stats */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, delay: 0.15 }}
            className="lg:col-span-3 flex flex-row lg:flex-col justify-around lg:justify-center items-start lg:items-end gap-8 lg:gap-10"
          >
            {stats.map((stat, idx) => (
              <div key={idx} className="text-left lg:text-right">
                <span className="font-grotesk font-extrabold text-4xl sm:text-5xl text-slate-900 dark:text-white tracking-tight block">
                  {stat.number}
                </span>
                <span className="font-sans text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium block mt-1">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
