import React, { useState } from 'react';
import { ArrowUpRight, TrendingUp, BarChart2, CheckCircle2, ExternalLink, Download, FileSpreadsheet, Code2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { projectsData } from '../data/projectsData';
import ProjectModal from './ProjectModal';

export default function ProjectShowcase({ onSelectProjectFromParent, externalSelectedProject }) {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState('ALL');

  const categories = [
    { id: 'ALL', label: 'All Projects (4)' },
    { id: 'AI', label: 'AI Systems' },
    { id: 'FINANCE', label: 'DCF Valuation' },
    { id: 'EDTECH', label: 'EdTech & Analytics' },
  ];

  const filteredProjects = projectsData.filter((p) => {
    if (filter === 'ALL') return true;
    if (filter === 'AI') return p.category.includes('AI') || p.category.includes('Healthcare');
    if (filter === 'FINANCE') return p.category.includes('Valuation') || p.category.includes('DCF');
    if (filter === 'EDTECH') return p.category.includes('EdTech') || p.category.includes('Analytics');
    return true;
  });

  const activeModalProject = selectedProject || externalSelectedProject;

  return (
    <section id="work" className="py-12 sm:py-16 bg-[#F8FAFC] dark:bg-[#08090C] text-slate-900 dark:text-white relative border-t border-slate-200 dark:border-[#1E2536] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header: "My recent projects" + Filter Pills */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 sm:mb-10 gap-6 pb-6 border-b border-slate-200 dark:border-[#1E2536]">
          <div>
            <span className="font-mono text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider block mb-1">
              Case Studies, Models & Live Apps
            </span>
            <h2 className="font-grotesk font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 dark:text-white tracking-tight">
              My recent projects
            </h2>
            <p className="font-sans text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-2">
              Empirical analytics projects featuring live deployed web applications, downloadable Excel DCF models, and automated SQL pipelines.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`px-4 py-2 rounded-full font-sans text-xs font-semibold tracking-wide transition-all ${
                  filter === cat.id
                    ? 'bg-emerald-600 text-white font-bold shadow-md shadow-emerald-600/30'
                    : 'bg-white text-slate-600 hover:text-emerald-600 border border-slate-200 dark:bg-[#111522] dark:text-slate-400 dark:hover:text-emerald-400 dark:border-[#1E2536]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid: 2x2 Layout for 4 Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <AnimatePresence>
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                onClick={() => setSelectedProject(project)}
                className="group bg-white hover:bg-slate-50 dark:bg-[#111522] dark:hover:bg-[#161B2B] rounded-3xl border border-slate-200 dark:border-[#1E2536] hover:border-emerald-500/60 dark:hover:border-emerald-500/60 p-6 sm:p-7 shadow-xs hover:shadow-xl hover:shadow-emerald-950/20 transition-all duration-300 flex flex-col justify-between cursor-pointer"
              >
                <div>
                  {/* Preview Box */}
                  <div className="w-full h-52 rounded-2xl bg-gradient-to-br from-emerald-50/50 via-slate-50 to-slate-100 border border-slate-200 dark:from-[#0E1F1A] dark:via-[#0A1613] dark:to-[#111522] dark:border-[#1E2536] p-5 flex flex-col justify-between relative overflow-hidden mb-5 group-hover:border-emerald-500/40 transition-colors">
                    
                    {/* Top row inside preview */}
                    <div className="flex items-center justify-between z-10">
                      <span className="font-mono text-[11px] font-bold text-emerald-700 bg-emerald-50/80 border border-emerald-200 dark:text-emerald-300 dark:bg-emerald-950/60 dark:border-emerald-900/50 px-3 py-1 rounded-full">
                        {project.category}
                      </span>

                      <div className="w-8 h-8 rounded-full bg-white dark:bg-[#08090C] border border-slate-200 dark:border-[#1E2536] flex items-center justify-center text-slate-700 group-hover:bg-emerald-600 group-hover:text-white group-hover:border-emerald-600 dark:text-white transition-all shadow-xs">
                        <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </div>
                    </div>

                    {/* Visual 2D Data Preview Graphic */}
                    <div className="z-10 bg-white/95 dark:bg-[#08090C]/95 rounded-xl p-3 border border-slate-200 dark:border-[#1E2536] shadow-xs backdrop-blur-xs">
                      <div className="flex justify-between items-center mb-1.5">
                        <span className="font-sans text-[11px] font-semibold text-slate-800 dark:text-slate-300 truncate">
                          {project.title}
                        </span>
                        <span className="font-mono text-[10px] text-emerald-600 dark:text-emerald-400 font-bold">
                          {project.highlightBadge}
                        </span>
                      </div>

                      {project.visualData?.type === 'chart' && (
                        <div className="space-y-1.5">
                          {project.visualData.dataPoints?.slice(0, 2).map((dp, dIdx) => (
                            <div key={dIdx} className="w-full h-2 bg-slate-200 dark:bg-[#1A2030] rounded-full overflow-hidden flex">
                              <div className="bg-emerald-600 h-full" style={{ width: `${dp.value}%` }} />
                              <div className="bg-emerald-400/60 h-full" style={{ width: `${dp.margin || 20}%` }} />
                            </div>
                          ))}
                        </div>
                      )}

                      {project.visualData?.type === 'valuation' && (
                        <div className="grid grid-cols-3 text-center text-[10px] font-mono py-0.5 text-slate-600 dark:text-slate-300">
                          <span>WACC 13.2%</span>
                          <span className="text-emerald-600 dark:text-emerald-400 font-bold">$4.7B EV</span>
                          <span>g 5.5%</span>
                        </div>
                      )}

                      {project.visualData?.type !== 'chart' && project.visualData?.type !== 'valuation' && (
                        <div className="flex items-center gap-2 text-[10px] font-sans text-slate-600 dark:text-slate-300">
                          <CheckCircle2 className="w-3 h-3 text-emerald-500 shrink-0" />
                          <span className="truncate">{project.subtitle}</span>
                        </div>
                      )}
                    </div>

                    {/* Bottom metric callout */}
                    <div className="flex items-center justify-between text-[11px] font-sans font-semibold text-slate-500 dark:text-slate-400 z-10">
                      <span>Verified Output</span>
                      <span className="text-slate-700 dark:text-slate-300">{project.tools[0]} • {project.tools[1]}</span>
                    </div>

                    {/* Subtle corner emerald light */}
                    <div className="absolute -bottom-8 -right-8 w-28 h-28 bg-emerald-500/10 dark:bg-emerald-600/15 rounded-full blur-xl pointer-events-none" />
                  </div>

                  {/* Category Subtitle */}
                  <span className="font-sans text-xs font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider block mb-1">
                    {project.category}
                  </span>

                  {/* Project Title */}
                  <h3 className="font-grotesk font-extrabold text-xl text-slate-900 dark:text-white mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="font-sans text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-2 mb-4 font-normal">
                    {project.shortDesc}
                  </p>
                </div>

                {/* Bottom Row: Key Metric Badge & Direct Link/File CTA */}
                <div className="pt-4 border-t border-slate-200 dark:border-[#1E2536] flex flex-wrap items-center justify-between gap-2">
                  <span className="font-sans text-xs font-bold text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/40 px-3 py-1 rounded-full border border-emerald-200/60 dark:border-emerald-900/40">
                    {project.metrics[0]?.value} {project.metrics[0]?.label}
                  </span>

                  {/* Direct Link or File Asset Actions */}
                  <div className="flex items-center gap-2">
                    {project.fileUrl && (
                      <a
                        href={project.fileUrl}
                        download={project.fileName || true}
                        onClick={(e) => e.stopPropagation()}
                        className="font-sans text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 px-3 py-1.5 rounded-full shadow-xs flex items-center gap-1.5 transition-all"
                        title={`Download ${project.fileName}`}
                      >
                        <Download className="w-3.5 h-3.5" />
                        <span>{project.actionLabel || 'Download'}</span>
                      </a>
                    )}

                    {project.liveUrl && !project.liveUrl.startsWith('#') && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="font-sans text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 px-3 py-1.5 rounded-full shadow-xs flex items-center gap-1.5 transition-all"
                        title="Open Live Application"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>{project.actionLabel || 'Live App'}</span>
                      </a>
                    )}

                    <span className="font-sans text-xs font-semibold text-slate-600 dark:text-slate-300 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 flex items-center gap-1 transition-colors pl-1">
                      Case Study <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>

      {/* Project Details Modal */}
      {activeModalProject && (
        <ProjectModal
          project={activeModalProject}
          isOpen={!!activeModalProject}
          onClose={() => {
            setSelectedProject(null);
            if (onSelectProjectFromParent) onSelectProjectFromParent(null);
          }}
        />
      )}
    </section>
  );
}
