import React from 'react';
import { Sparkles, GraduationCap, Briefcase, CheckCircle2, FileText } from 'lucide-react';
import { motion } from 'framer-motion';
import { bioData } from '../data/projectsData';

export default function AboutSection({ onOpenResume }) {
  return (
    <section id="about" className="py-24 bg-[#0A0F16] text-[#F1F5F9] relative pearl-grid border-b border-[#223245] overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-sky-600/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="mb-16 pb-6 border-b border-[#223245]">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#111923] text-sky-300 rounded-md font-mono text-xs font-bold uppercase mb-3 border border-sky-500/30 shadow-md">
            <Sparkles className="w-3.5 h-3.5 text-sky-400" />
            <span>EXECUTIVE PROFILE</span>
          </div>
          <h2 className="font-grotesk font-extrabold text-5xl sm:text-6xl lg:text-7xl tracking-tight text-white leading-none">
            THE PERSON BEHIND <br />
            <span className="text-sky-400 underline decoration-sky-500 decoration-4 underline-offset-8">
              THE THINKING.
            </span>
          </h2>
        </div>

        {/* 2-Column Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Personal Statement & Keyword Badges */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-6 space-y-8"
          >
            {/* Core Bio Block */}
            <div className="p-8 bg-[#111923] rounded-2xl border border-[#223245] shadow-xl relative">
              <span className="font-mono text-xs font-bold text-sky-400 uppercase tracking-wider block mb-4">
                STATEMENT // PROFESSIONAL IDENTITY
              </span>
              <p className="font-sans text-xl sm:text-2xl text-white font-semibold leading-relaxed mb-6">
                "{bioData.shortBio}"
              </p>

              {/* Identity Tags */}
              <div className="pt-4 border-t border-[#223245] flex flex-wrap gap-2 text-xs font-mono font-bold">
                <span className="px-3 py-1.5 bg-[#0A0F16] text-slate-200 rounded-lg border border-[#223245]">
                  📍 {bioData.location}
                </span>
                <span className="px-3 py-1.5 bg-[#0A0F16] text-sky-300 rounded-lg border border-sky-500/30">
                  🎯 Business Analyst Focus
                </span>
                <span className="px-3 py-1.5 bg-[#0A0F16] text-slate-200 rounded-lg border border-[#223245]">
                  🎓 B.Com (Hons) + MBA
                </span>
              </div>
            </div>

            {/* 3 Visual Keywords */}
            <div>
              <span className="font-mono text-xs font-bold text-slate-300 uppercase tracking-wider block mb-3">
                Core Cognitive Pillars
              </span>
              <div className="grid grid-cols-3 gap-3 sm:gap-4">
                {bioData.keywords.map((word, idx) => (
                  <div
                    key={idx}
                    className="p-4 bg-[#111923] rounded-xl border border-[#223245] text-center shadow-lg hover:border-sky-400 hover:bg-[#182332] transition-all duration-200"
                  >
                    <span className="font-mono text-xs font-bold text-sky-400 block mb-1">0{idx + 1}</span>
                    <span className="font-grotesk font-extrabold text-lg sm:text-xl text-white">
                      {word}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Strategic Business Acumen Banner */}
            <div className="p-6 bg-[#111923] text-white rounded-2xl border border-[#223245] shadow-xl flex items-center justify-between">
              <div>
                <span className="font-mono text-xs font-bold text-sky-400 uppercase tracking-wider block mb-1">
                  COMMERCE + ANALYTICS
                </span>
                <h4 className="font-grotesk font-extrabold text-2xl text-white">
                  Strategic Business Acumen
                </h4>
                <p className="font-sans text-sm text-slate-300 max-w-xs mt-1 leading-relaxed">
                  Bridging commercial unit economics with deep exploratory data analytics.
                </p>
              </div>
              <button
                onClick={onOpenResume}
                className="px-4 py-2.5 bg-sky-500 hover:bg-sky-400 text-slate-950 rounded-xl font-grotesk font-extrabold text-xs uppercase transition-colors shrink-0 ml-4 flex items-center gap-1.5 shadow-md"
              >
                <FileText className="w-4 h-4" />
                <span>Resume</span>
              </button>
            </div>
          </motion.div>

          {/* Right Column: Education & Experience Timeline */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="lg:col-span-6 space-y-8"
          >
            {/* Experience Section */}
            <div className="bg-[#111923] p-6 sm:p-8 rounded-2xl border border-[#223245] shadow-xl space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-[#223245]">
                <div className="flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-sky-400" />
                  <h3 className="font-grotesk font-extrabold text-2xl text-white">
                    Practical Experience
                  </h3>
                </div>
                <span className="font-mono text-xs font-bold text-sky-400 bg-[#0A0F16] px-2.5 py-1 rounded border border-sky-500/30">
                  Internships
                </span>
              </div>

              <div className="space-y-6">
                {bioData.experience.map((exp, idx) => (
                  <div key={idx} className="relative pl-6 border-l-2 border-sky-400 space-y-2">
                    <span className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-sky-400" />
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                      <h4 className="font-grotesk font-extrabold text-lg text-white">
                        {exp.role}
                      </h4>
                      <span className="font-mono text-xs font-bold text-sky-300 bg-[#0A0F16] px-2.5 py-0.5 rounded border border-sky-500/30 w-fit mt-1 sm:mt-0">
                        {exp.period}
                      </span>
                    </div>
                    <p className="font-sans text-sm font-semibold text-sky-200">
                      {exp.company}
                    </p>
                    <ul className="space-y-2 pt-1">
                      {exp.points.map((pt, pIdx) => (
                        <li key={pIdx} className="font-sans text-sm text-slate-300 leading-relaxed flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Education Section */}
            <div className="bg-[#111923] p-6 sm:p-8 rounded-2xl border border-[#223245] shadow-xl space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-[#223245]">
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-sky-400" />
                  <h3 className="font-grotesk font-extrabold text-2xl text-white">
                    Academic Background
                  </h3>
                </div>
                <span className="font-mono text-xs font-bold text-slate-300">Credentials</span>
              </div>

              <div className="space-y-4">
                {bioData.education.map((edu, idx) => (
                  <div key={idx} className="p-4 bg-[#0A0F16] rounded-xl border border-[#223245] space-y-1.5">
                    <div className="flex justify-between items-start">
                      <h4 className="font-grotesk font-bold text-base text-white">
                        {edu.degree}
                      </h4>
                      <span className="font-mono text-xs font-bold text-sky-400">
                        {edu.period}
                      </span>
                    </div>
                    <p className="font-sans text-sm font-medium text-slate-300">
                      {edu.institution}
                    </p>
                    <p className="font-sans text-xs text-slate-400 pt-1">
                      {edu.highlight}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

