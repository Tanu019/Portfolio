import React, { useState } from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { projectsData } from '../data/projectsData';
import ProjectModal from './ProjectModal';

export default function ProjectShowcase({ onSelectProjectFromParent, externalSelectedProject }) {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState('ALL');

  const categories = ['ALL', 'RETAIL & BI', 'FINANCE & DCF', 'AI & SYSTEMS'];

  const filteredProjects = projectsData.filter((p) => {
    if (filter === 'ALL') return true;
    if (filter === 'RETAIL & BI') return p.category.includes('Retail') || p.category.includes('BI');
    if (filter === 'FINANCE & DCF') return p.category.includes('Valuation') || p.category.includes('DCF');
    if (filter === 'AI & SYSTEMS') return p.category.includes('AI') || p.category.includes('EdTech');
    return true;
  });

  const featuredProject = projectsData.find((p) => p.featured) || projectsData[0];
  const regularProjects = filteredProjects.filter((p) => p.id !== featuredProject.id);

  const activeModalProject = selectedProject || externalSelectedProject;

  return (
    <section id="work" className="py-24 bg-[#0A0F16] text-[#F1F5F9] relative pearl-grid border-b border-[#223245]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#223245] gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#111923] text-sky-300 rounded-md font-mono text-xs font-bold uppercase mb-3 border border-sky-500/30 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-sky-400" />
              <span>SELECTED CASE STUDIES</span>
            </div>
            <h2 className="font-grotesk font-extrabold text-5xl sm:text-6xl lg:text-7xl tracking-tight text-white leading-none">
              PROOF, <br className="hidden sm:inline" />
              <span className="text-sky-400 underline decoration-sky-500 decoration-4 underline-offset-8">
                NOT PROMISES.
              </span>
            </h2>
          </div>

          <div className="flex flex-col md:items-end gap-4">
            <p className="font-sans text-base sm:text-lg text-slate-300 max-w-md font-normal md:text-right">
              A selection of projects where data analysis, financial models, and strategic problem-solving deliver measurable ROI.
            </p>

            {/* Filter Pills */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-4 py-2 rounded-xl font-mono text-xs font-bold uppercase tracking-wider transition-all duration-200 border ${
                    filter === cat
                      ? 'bg-sky-500 text-slate-950 border-sky-400 shadow-md font-extrabold'
                      : 'bg-[#111923] text-slate-300 border-[#223245] hover:border-sky-400 hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Asymmetrical Project Grid */}
        <div className="space-y-8">
          {/* Hero Featured Project */}
          {(filter === 'ALL' || filter === 'RETAIL & BI') && (
            <motion.div
              layout
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              onClick={() => setSelectedProject(featuredProject)}
              className="group cursor-pointer bg-[#111923] rounded-2xl border border-[#223245] shadow-2xl hover:border-sky-500/60 transition-all duration-300 overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12">
                {/* Left Visual Preview */}
                <div className="lg:col-span-7 bg-[#0E1520] p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden border-b lg:border-b-0 lg:border-r border-[#223245]">
                  {/* Card Badges */}
                  <div className="flex items-center justify-between z-10 mb-6">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-extrabold bg-sky-500 text-slate-950 px-3 py-1 rounded-md">
                        PROJECT {featuredProject.number}
                      </span>
                      <span className="font-mono text-xs font-bold text-slate-200 bg-[#182332] px-2.5 py-1 rounded-md border border-[#223245]">
                        {featuredProject.category}
                      </span>
                    </div>

                    <span className="font-mono text-xs font-bold text-sky-400 bg-[#111923] px-2.5 py-1 rounded border border-sky-500/30">
                      {featuredProject.highlightBadge}
                    </span>
                  </div>

                  {/* Simulated Visual Dashboard Graphic */}
                  <div className="my-4 bg-[#111923] p-5 rounded-xl border border-[#223245] shadow-sm">
                    <div className="flex justify-between items-center mb-3">
                      <span className="font-mono text-xs font-bold text-slate-200">
                        Blinkit SKU Velocity & Gross Margin Simulation
                      </span>
                      <span className="font-mono text-[11px] font-bold text-sky-300 px-2 py-0.5 bg-[#0A0F16] rounded border border-sky-500/30">
                        TABLEAU / EXCEL
                      </span>
                    </div>

                    <div className="space-y-2.5">
                      {featuredProject.visualData?.dataPoints?.slice(0, 3).map((item, idx) => (
                        <div key={idx} className="space-y-1">
                          <div className="flex justify-between font-mono text-xs text-slate-300 font-semibold">
                            <span>{item.label}</span>
                            <span className="text-sky-400 font-bold">{item.margin}% margin capture</span>
                          </div>
                          <div className="w-full h-3 bg-[#0A0F16] rounded-full overflow-hidden flex border border-[#223245]">
                            <div className="bg-sky-500 h-full rounded-l" style={{ width: `${item.value}%` }} />
                            <div className="bg-cyan-400 h-full rounded-r" style={{ width: `${item.margin}%` }} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Impact Highlight */}
                  <div className="flex items-center justify-between text-xs font-mono font-bold text-slate-400 z-10 pt-4 border-t border-[#223245]">
                    <span>Impact: <strong className="text-white">+₹4.2L Profit Recovered</strong></span>
                    <span className="text-sky-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform font-extrabold">
                      Open Case Study <ArrowUpRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>

                {/* Right Editorial Info */}
                <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                  <div>
                    <span className="font-mono text-xs font-bold text-sky-400 uppercase tracking-wider block mb-2">
                      {featuredProject.tag}
                    </span>
                    <h3 className="font-grotesk font-extrabold text-3xl sm:text-4xl text-white mb-3 group-hover:text-sky-400 transition-colors">
                      {featuredProject.title}
                    </h3>
                    <p className="font-sans text-base text-slate-300 leading-relaxed mb-6 font-normal">
                      {featuredProject.shortDesc}
                    </p>

                    {/* 3 Metric Pills */}
                    <div className="grid grid-cols-3 gap-2 p-3 bg-[#0A0F16] rounded-xl border border-[#223245] mb-6">
                      {featuredProject.metrics.map((m, i) => (
                        <div key={i} className="text-center">
                          <span className="font-grotesk font-extrabold text-xl text-sky-400 block">
                            {m.value}
                          </span>
                          <span className="font-mono text-[10px] uppercase font-bold text-slate-400 block leading-tight">
                            {m.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tools Badges & CTA */}
                  <div>
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {featuredProject.tools.map((t, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-[#182332] text-slate-200 font-mono text-xs font-bold rounded-md border border-[#223245]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <button className="flex items-center gap-2 font-grotesk font-bold text-sm uppercase tracking-wider text-white group-hover:text-sky-400 transition-colors">
                      <span>EXPLORE FULL METHODOLOGY & FINDINGS</span>
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Regular Projects Grid (2-Column Cards) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatePresence>
              {regularProjects.map((project, idx) => (
                <motion.div
                  layout
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  onClick={() => setSelectedProject(project)}
                  className="group cursor-pointer bg-[#111923] rounded-2xl border border-[#223245] p-6 sm:p-7 shadow-xl hover:border-sky-500/60 hover:shadow-sky-500/5 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Top Row Badges */}
                    <div className="flex items-center justify-between pb-4 border-b border-[#223245] mb-5">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs font-extrabold bg-sky-500 text-slate-950 px-2.5 py-1 rounded">
                          0{project.number}
                        </span>
                        <span className="font-mono text-xs font-bold text-slate-200">
                          {project.category}
                        </span>
                      </div>

                      <span className="font-mono text-xs font-bold text-sky-400 bg-[#0A0F16] px-2.5 py-1 rounded border border-sky-500/30">
                        {project.highlightBadge}
                      </span>
                    </div>

                    <h4 className="font-grotesk font-extrabold text-2xl text-white mb-2 group-hover:text-sky-400 transition-colors">
                      {project.title}
                    </h4>
                    <p className="font-sans text-sm text-slate-300 leading-relaxed mb-6 font-normal">
                      {project.shortDesc}
                    </p>

                    {/* Metric Quick Preview Bar */}
                    <div className="grid grid-cols-3 gap-2 p-3.5 bg-[#0A0F16] rounded-xl border border-[#223245] mb-6">
                      {project.metrics.map((m, i) => (
                        <div key={i} className="text-center">
                          <span className="font-grotesk font-extrabold text-lg text-sky-400 block">
                            {m.value}
                          </span>
                          <span className="font-mono text-[10px] uppercase font-bold text-slate-400 block leading-tight truncate">
                            {m.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    {/* Tools Row */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {project.tools.map((tool, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 bg-[#182332] text-slate-200 font-mono text-xs font-bold rounded border border-[#223245]"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>

                    {/* Bottom Action */}
                    <div className="pt-4 border-t border-[#223245] flex items-center justify-between text-xs font-mono font-bold">
                      <span className="text-slate-400">Click to view model</span>
                      <span className="flex items-center gap-1 font-extrabold text-sky-400 group-hover:translate-x-1 transition-transform">
                        <span>Read Case Study</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Global Project Detail Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => {
          setSelectedProject(null);
          if (onSelectProjectFromParent) onSelectProjectFromParent(null);
        }}
      />
    </section>
  );
}
