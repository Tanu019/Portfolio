import React from 'react';
import { GraduationCap, Briefcase, CheckCircle2, FileText } from 'lucide-react';
import { motion } from 'framer-motion';
import { bioData } from '../data/projectsData';

export default function AboutSection({ onOpenResume }) {
  const pillars = [
    {
      num: '01',
      title: 'Commercial Prudence',
      desc: 'Protecting unit contribution margins and cash runway before blindly accelerating customer acquisition.'
    },
    {
      num: '02',
      title: 'Quantitative Rigor',
      desc: 'Validating every strategic hypothesis with cleaned SQL datasets, exploratory trend analysis, and KPI dashboards.'
    },
    {
      num: '03',
      title: 'Executive Clarity',
      desc: 'Distilling millions of point-of-sale data records into single-slide C-suite decisions that drive action.'
    }
  ];

  return (
    <section id="about" className="py-12 sm:py-16 bg-[#F8FAFC] dark:bg-[#08090C] text-slate-900 dark:text-white relative border-t border-slate-200 dark:border-[#1E2536] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 pb-6 border-b border-slate-200 dark:border-[#1E2536] gap-8">
          <div>
            <span className="font-mono text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider block mb-1.5">
              Executive Profile
            </span>
            <h2 className="font-grotesk font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 dark:text-white tracking-tight leading-tight">
              About Tanu Chaudhary
            </h2>
          </div>

          <div className="flex flex-col md:items-end gap-4">
            <p className="font-sans text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-md font-normal md:text-right leading-relaxed">
              Combining a rigorous Commerce (Hons) finance background with modern MBA business analytics and automated data engineering.
            </p>

            {onOpenResume && (
              <button
                onClick={onOpenResume}
                className="flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-sans font-bold text-xs uppercase tracking-wider rounded-full transition-all shadow-md shadow-emerald-600/30"
              >
                <FileText className="w-4 h-4 text-white" />
                <span>View Full Executive Resume</span>
              </button>
            )}
          </div>
        </div>

        {/* 2-Column Story Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Portrait Card & Personal Statement */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="lg:col-span-6 space-y-8"
          >
            {/* Bio Card */}
            <div className="bg-white dark:bg-[#111522] rounded-3xl border border-slate-200 dark:border-[#1E2536] p-8 shadow-xs dark:shadow-xl">
              <div className="flex flex-col sm:flex-row sm:items-center gap-6 pb-6 border-b border-slate-200 dark:border-[#1E2536]">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-emerald-600/20 to-slate-200 dark:from-emerald-900/40 dark:to-slate-800 overflow-hidden border-2 border-emerald-500/40 shadow-md shrink-0">
                  <img 
                    src="/profile.jpg" 
                    alt="Tanu Chaudhary" 
                    className="w-full h-full object-cover object-[center_12%]"
                  />
                </div>

                <div>
                  <h3 className="font-grotesk font-extrabold text-2xl text-slate-900 dark:text-white">
                    Tanu Chaudhary
                  </h3>
                  <p className="font-sans text-xs font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mt-1">
                    Business & Data Analyst
                  </p>
                  <p className="font-sans text-xs text-emerald-600 dark:text-emerald-400 mt-1 flex items-center gap-1.5 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Open to Hybrid / Remote</span>
                  </p>
                </div>
              </div>

              {/* Personal Statement */}
              <div className="py-6">
                <span className="font-mono text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider block mb-2">
                  Statement of Intent
                </span>
                <p className="font-sans text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
                  "{bioData.shortBio}"
                </p>
              </div>

              {/* Badges Pill Row */}
              <div className="pt-6 border-t border-slate-200 dark:border-[#1E2536] flex flex-wrap gap-2 text-xs font-sans font-semibold">
                <span className="px-3.5 py-1.5 bg-slate-100 dark:bg-[#08090C] text-slate-700 dark:text-slate-300 rounded-full border border-slate-200 dark:border-[#1E2536]">
                  🎓 B.Com (Hons) + MBA '25
                </span>
                <span className="px-3.5 py-1.5 bg-emerald-600 text-white rounded-full shadow-xs">
                  🎯 Business Analyst Focus
                </span>
                <span className="px-3.5 py-1.5 bg-slate-100 dark:bg-[#08090C] text-slate-700 dark:text-slate-300 rounded-full border border-slate-200 dark:border-[#1E2536]">
                  ⚡ SQL & BI Dashboards
                </span>
              </div>
            </div>

            {/* 3 Core Philosophical Pillars */}
            <div className="space-y-4">
              <span className="font-mono text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider block">
                Analytical Philosophy:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {pillars.map((pillar) => (
                  <div 
                    key={pillar.num}
                    className="p-5 bg-white dark:bg-[#111522] rounded-2xl border border-slate-200 dark:border-[#1E2536] hover:border-emerald-500/60 dark:hover:border-emerald-500/60 transition-colors shadow-xs"
                  >
                    <span className="font-mono text-xs font-bold text-emerald-600 dark:text-emerald-400 block mb-1">
                      {pillar.num}
                    </span>
                    <h4 className="font-grotesk font-bold text-sm text-slate-900 dark:text-white mb-2">
                      {pillar.title}
                    </h4>
                    <p className="font-sans text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
                      {pillar.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Education & Experience Timeline */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="lg:col-span-6 space-y-8"
          >
            {/* Practical Experience Section */}
            <div className="bg-white dark:bg-[#111522] rounded-3xl border border-slate-200 dark:border-[#1E2536] p-8 shadow-xs dark:shadow-xl space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-[#1E2536]">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-400 flex items-center justify-center border border-emerald-200 dark:border-emerald-900/40">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <h3 className="font-grotesk font-extrabold text-xl text-slate-900 dark:text-white">
                    Practical Experience
                  </h3>
                </div>
                <span className="font-sans text-xs font-semibold text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/40 px-3 py-1 rounded-full border border-emerald-200/60 dark:border-emerald-900/40">
                  Track Record
                </span>
              </div>

              <div className="space-y-6">
                {bioData.experience.map((exp, idx) => (
                  <div key={idx} className="space-y-2 border-l-2 border-emerald-600/60 pl-4 py-1">
                    <div>
                      <h4 className="font-grotesk font-bold text-base text-slate-900 dark:text-white">
                        {exp.role}
                      </h4>
                      <p className="font-sans text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                        {exp.company} • {exp.period}
                      </p>
                    </div>
                    {exp.points && (
                      <ul className="space-y-1.5 pt-1">
                        {exp.points.map((pt, pIdx) => (
                          <li key={pIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-normal leading-relaxed">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Academic Pedigree Section */}
            <div className="bg-white dark:bg-[#111522] rounded-3xl border border-slate-200 dark:border-[#1E2536] p-8 shadow-xs dark:shadow-xl space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-[#1E2536]">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-400 flex items-center justify-center border border-emerald-200 dark:border-emerald-900/40">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <h3 className="font-grotesk font-extrabold text-xl text-slate-900 dark:text-white">
                    Academic Background
                  </h3>
                </div>
                <span className="font-sans text-xs font-semibold text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-[#08090C] px-3 py-1 rounded-full border border-slate-200 dark:border-[#1E2536]">
                  Degrees
                </span>
              </div>

              <div className="space-y-6">
                {bioData.education.map((edu, idx) => (
                  <div key={idx} className="space-y-1.5 border-l-2 border-slate-200 dark:border-[#1E2536] pl-4 py-1">
                    <h4 className="font-grotesk font-bold text-base text-slate-900 dark:text-white">
                      {edu.degree}
                    </h4>
                    <p className="font-sans text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                      {edu.institution} • {edu.period}
                    </p>
                    {(edu.highlight || edu.focus) && (
                      <p className="font-sans text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                        {edu.highlight || edu.focus}
                      </p>
                    )}
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
