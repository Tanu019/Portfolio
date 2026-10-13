import React from 'react';
import { Sparkles, Database, BarChart3, Calculator, BriefcaseBusiness, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { skillsData } from '../data/projectsData';

export default function SkillsSection() {
  const categoryIcons = {
    data: Database,
    visualization: BarChart3,
    finance: Calculator,
    business: BriefcaseBusiness,
  };

  const categoryList = Object.entries(skillsData);

  return (
    <section id="skills" className="py-24 bg-[#0A0F16] text-[#F1F5F9] relative pearl-grid border-b border-[#223245]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#223245] gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#111923] text-sky-300 rounded-md font-mono text-xs font-bold uppercase mb-3 border border-sky-500/30 shadow-md">
              <Sparkles className="w-3.5 h-3.5 text-sky-400" />
              <span>CORE COMPETENCY MATRIX</span>
            </div>
            <h2 className="font-grotesk font-extrabold text-5xl sm:text-6xl lg:text-7xl tracking-tight text-white leading-none">
              TOOLS OF <br className="hidden sm:inline" />
              <span className="text-sky-400 underline decoration-sky-500 decoration-4 underline-offset-8">
                THE TRADE.
              </span>
            </h2>
          </div>

          <p className="font-sans text-base sm:text-lg text-slate-300 max-w-md font-normal md:text-right">
            Curated analytical and strategic capabilities backed by hands-on execution and commercial rigor.
          </p>
        </div>

        {/* 4 Category Compact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categoryList.map(([key, cat], idx) => {
            const Icon = categoryIcons[key] || Database;
            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="bg-[#111923] rounded-2xl border border-[#223245] p-6 shadow-xl hover:shadow-2xl hover:border-sky-400 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between pb-4 border-b border-[#223245] mb-4">
                    <div className="flex items-center gap-2.5">
                      <div className="w-10 h-10 rounded-xl bg-[#0A0F16] text-sky-400 flex items-center justify-center border border-[#223245] shadow-sm">
                        <Icon className="w-5 h-5 text-sky-400" />
                      </div>
                      <span className="font-mono text-xs font-extrabold text-white uppercase tracking-wider">
                        {cat.category}
                      </span>
                    </div>
                    <span className="font-mono text-xs text-slate-400 font-bold">0{idx + 1}</span>
                  </div>

                  <h3 className="font-grotesk font-extrabold text-xl text-white mb-4">
                    {cat.title}
                  </h3>

                  {/* Skills List */}
                  <div className="space-y-3">
                    {cat.skills.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className="p-3 bg-[#0A0F16] rounded-xl border border-[#223245] hover:border-sky-400 hover:bg-[#182332] transition-all group"
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-grotesk font-bold text-sm text-white group-hover:text-sky-300 transition-colors">
                            {skill.name}
                          </span>
                          <span className="font-mono text-[10px] uppercase font-extrabold text-sky-300 px-2 py-0.5 bg-[#111923] rounded border border-sky-500/30">
                            {skill.level}
                          </span>
                        </div>
                        <p className="font-sans text-xs text-slate-300 leading-snug font-normal">
                          {skill.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Verification Seal */}
                <div className="pt-4 mt-4 border-t border-[#223245] flex items-center justify-between text-xs font-mono font-bold text-slate-300">
                  <span>Applied in Projects</span>
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

