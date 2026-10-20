import React, { useState } from 'react';
import { 
  ArrowUpRight, 
  ExternalLink, 
  Download, 
  FileSpreadsheet, 
  Sparkles, 
  Terminal, 
  Bot, 
  TrendingUp, 
  CheckCircle2, 
  Layers, 
  Database,
  BarChart3,
  Calendar,
  Zap
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { projectsData } from '../data/projectsData';
import ProjectModal from './ProjectModal';

export default function ProjectShowcase({ onSelectProjectFromParent, externalSelectedProject }) {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState('ALL');

  const categories = [
    { id: 'ALL', label: 'All Projects', count: 4 },
    { id: 'AI', label: 'AI Systems', count: 2 },
    { id: 'FINANCE', label: 'DCF Valuation', count: 1 },
    { id: 'EDTECH', label: 'EdTech & Analytics', count: 1 },
  ];

  const filteredProjects = projectsData.filter((p) => {
    if (filter === 'ALL') return true;
    if (filter === 'AI') return p.category.includes('AI') || p.category.includes('Healthcare');
    if (filter === 'FINANCE') return p.category.includes('Valuation') || p.category.includes('DCF');
    if (filter === 'EDTECH') return p.category.includes('EdTech') || p.category.includes('Analytics') || p.category.includes('Simulation');
    return true;
  });

  const activeModalProject = selectedProject || externalSelectedProject;

  return (
    <section 
      id="work" 
      className="py-16 sm:py-24 bg-[#F8FAFC] dark:bg-[#08090C] text-slate-900 dark:text-white relative border-t border-slate-200 dark:border-[#1E2536] transition-colors duration-200 overflow-hidden"
    >
      {/* Ambient background glow accents */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-amber-500/5 dark:bg-[#DEC396]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-blue-500/5 dark:bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header: Redesigned with guaranteed single-row filter bar */}
        <div className="mb-12 sm:mb-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-slate-200 dark:border-[#1E2536]">
            
            {/* Title & Description */}
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 dark:bg-[#DEC396]/10 dark:border-[#DEC396]/20 mb-3.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 dark:bg-[#DEC396] animate-pulse" />
                <span className="font-mono text-[11px] font-bold text-amber-800 dark:text-[#DEC396] uppercase tracking-wider">
                  Case Studies, Models & Live Apps
                </span>
              </div>

              <h2 className="font-grotesk font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 dark:text-white tracking-tight leading-tight">
                My recent projects
              </h2>
              <p className="font-sans text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-2.5 leading-relaxed">
                Empirical analytics projects featuring live deployed web applications, downloadable Excel DCF models, and automated SQL pipelines.
              </p>
            </div>

            {/* Filter Pills - Strictly One Row with smooth active glider and horizontal scroll fallback */}
            <div className="shrink-0 w-full md:w-auto">
              <div className="flex items-center gap-1.5 sm:gap-2 p-1.5 bg-slate-100/90 dark:bg-[#111522] rounded-full border border-slate-200 dark:border-[#1E2536] overflow-x-auto no-scrollbar flex-nowrap whitespace-nowrap shadow-xs">
                {categories.map((cat) => {
                  const isActive = filter === cat.id;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => setFilter(cat.id)}
                      className={`relative px-3.5 sm:px-4 py-2 rounded-full font-sans text-xs font-semibold tracking-wide transition-all duration-200 shrink-0 flex items-center gap-1.5 select-none ${
                        isActive
                          ? 'text-white font-bold'
                          : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
                      }`}
                    >
                      {isActive && (
                        <motion.div
                          layoutId="activeProjectFilter"
                          className="absolute inset-0 bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 dark:from-[#B58448] dark:to-[#9B6D36] rounded-full shadow-md shadow-amber-600/25 dark:shadow-[#B58448]/30"
                          transition={{ type: 'spring', stiffness: 450, damping: 35 }}
                        />
                      )}
                      <span className="relative z-10">{cat.label}</span>
                      <span 
                        className={`relative z-10 text-[10px] font-mono px-1.5 py-0.2 rounded-full ${
                          isActive 
                            ? 'bg-black/20 text-white' 
                            : 'bg-slate-200 dark:bg-[#1A2030] text-slate-500 dark:text-slate-400'
                        }`}
                      >
                        {cat.count}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>
        </div>

        {/* Projects Grid: Balanced 2x2 layout with 2 cards per row on desktop/tablet */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-7 lg:gap-8 max-w-6xl mx-auto">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 24, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                onClick={() => setSelectedProject(project)}
                className="group bg-white hover:bg-slate-50/80 dark:bg-[#101420] dark:hover:bg-[#131929] rounded-2xl sm:rounded-3xl border border-slate-200 dark:border-[#1E2536] hover:border-amber-500/50 dark:hover:border-[#DEC396]/40 p-5 sm:p-6 shadow-sm hover:shadow-2xl hover:shadow-amber-500/5 dark:hover:shadow-[#DEC396]/5 transition-all duration-300 flex flex-col justify-between cursor-pointer relative overflow-hidden"
              >
                <div>
                  
                  {/* Visual Preview Container */}
                  <div className="w-full h-56 sm:h-60 rounded-xl sm:rounded-2xl bg-gradient-to-br from-slate-100 via-slate-50 to-slate-200 dark:from-[#0B0E17] dark:via-[#0E1320] dark:to-[#141A2B] border border-slate-200/90 dark:border-[#1E2536] flex flex-col justify-between relative overflow-hidden mb-5 group-hover:border-amber-500/40 dark:group-hover:border-[#DEC396]/30 transition-all duration-300">
                    
                    {/* Window Title Bar Mockup */}
                    <div className="flex items-center justify-between px-3.5 py-2.5 bg-slate-200/60 dark:bg-[#070A11]/70 border-b border-slate-200 dark:border-[#1E2536] backdrop-blur-xs z-20">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-red-400/80 dark:bg-red-500/70" />
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80 dark:bg-amber-500/70" />
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80 dark:bg-emerald-500/70" />
                        <span className="ml-2 font-mono text-[10px] text-slate-500 dark:text-slate-400 font-semibold truncate max-w-[170px] sm:max-w-[220px]">
                          {project.title.toLowerCase().replace(/\s+/g, '-')}.app
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="font-mono text-[9px] sm:text-[10px] font-bold text-amber-700 bg-amber-500/10 dark:text-[#DEC396] dark:bg-[#DEC396]/10 px-2 py-0.5 rounded-full border border-amber-500/20 dark:border-[#DEC396]/20">
                          {project.highlightBadge}
                        </span>
                        <div className="w-6 h-6 rounded-full bg-white dark:bg-[#161C2C] border border-slate-200 dark:border-[#222B3F] flex items-center justify-center text-slate-700 dark:text-slate-300 group-hover:bg-amber-500 group-hover:text-white dark:group-hover:bg-[#B58448] dark:group-hover:text-white transition-all shadow-xs">
                          <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </div>
                      </div>
                    </div>

                    {/* Preview Body - Project Specific High Fidelity Content */}
                    <div className="relative flex-1 p-3.5 sm:p-4 flex flex-col justify-between overflow-hidden z-10">

                      {/* Project 1: Case Craft - Live Screenshot with Gradient Blend */}
                      {project.id === 'case-craft' && project.image && (
                        <>
                          <div className="absolute inset-0 z-0 overflow-hidden">
                            <img 
                              src={project.image} 
                              alt="Case Craft Live Platform Interface"
                              className="w-full h-full object-cover object-top opacity-60 dark:opacity-45 group-hover:opacity-75 dark:group-hover:opacity-65 group-hover:scale-105 transition-all duration-500"
                              loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-100 via-slate-100/70 to-transparent dark:from-[#0B0E17] dark:via-[#0B0E17]/80 dark:to-transparent pointer-events-none" />
                          </div>

                          <div className="relative z-10 flex justify-between items-start">
                            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[10px] font-mono font-bold bg-white/95 dark:bg-[#0E1422]/90 border border-slate-200 dark:border-[#222B3F] text-amber-700 dark:text-[#DEC396] backdrop-blur-xs">
                              <Sparkles className="w-3 h-3 text-amber-500" />
                              A MindSaar Product
                            </span>
                          </div>

                          <div className="relative z-10 bg-white/95 dark:bg-[#0E1422]/95 rounded-xl p-2.5 border border-slate-200 dark:border-[#222B3F] backdrop-blur-md shadow-xs">
                            <div className="flex justify-between items-center text-[10px] font-mono">
                              <span className="font-bold text-slate-800 dark:text-white">Learn • Analyse • Decide</span>
                              <span className="text-amber-600 dark:text-[#DEC396] font-bold">72+ MBA Cases</span>
                            </div>
                            <div className="mt-1.5 flex items-center gap-1.5 text-[9px] font-sans text-slate-500 dark:text-slate-400">
                              <span className="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-[#1A2234] border border-slate-200 dark:border-slate-800 font-mono">12 Corporate Sectors</span>
                              <span className="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-[#1A2234] border border-slate-200 dark:border-slate-800 font-mono">Real-Time Scoring</span>
                            </div>
                          </div>
                        </>
                      )}

                      {/* Project 2: Cancer Sakhi - Conversational Health AI Mockup */}
                      {project.id === 'cancer-sakhi' && (
                        <div className="relative z-10 h-full flex flex-col justify-between py-1">
                          {/* Live Bot Header Indicator */}
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <div className="w-6 h-6 rounded-full bg-rose-500/20 text-rose-500 flex items-center justify-center text-xs">
                                <Bot className="w-3.5 h-3.5" />
                              </div>
                              <span className="text-[11px] font-grotesk font-bold text-slate-800 dark:text-slate-200">
                                Multilingual Triage Assistant
                              </span>
                            </div>
                            <span className="inline-flex items-center gap-1 text-[9px] font-mono text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                              Active Agent
                            </span>
                          </div>

                          {/* Chat Bubbles */}
                          <div className="space-y-2 my-auto">
                            <div className="flex justify-end">
                              <div className="bg-amber-500/15 dark:bg-[#DEC396]/15 border border-amber-500/30 dark:border-[#DEC396]/30 text-slate-800 dark:text-slate-200 text-[10px] font-sans px-2.5 py-1.5 rounded-xl rounded-tr-xs max-w-[85%]">
                                "What early signs should I monitor, in Hindi or English?"
                              </div>
                            </div>
                            <div className="flex justify-start">
                              <div className="bg-white/95 dark:bg-[#121828]/95 border border-slate-200 dark:border-[#1E2536] text-slate-700 dark:text-slate-300 text-[10px] font-sans px-2.5 py-1.5 rounded-xl rounded-tl-xs max-w-[90%] shadow-xs flex items-center gap-2">
                                <CheckCircle2 className="w-3 h-3 text-emerald-500 shrink-0" />
                                <span>Guided clinical triage with localized screening locator.</span>
                              </div>
                            </div>
                          </div>

                          {/* Latency & Metric strip */}
                          <div className="flex items-center justify-between text-[9px] font-mono text-slate-500 dark:text-slate-400 bg-white/70 dark:bg-[#070A11]/60 px-2.5 py-1 rounded-lg border border-slate-200/60 dark:border-[#1E2536]">
                            <span>Claude LLM + Supabase</span>
                            <span className="text-amber-600 dark:text-[#DEC396] font-bold">&lt;1.2s Response Latency</span>
                          </div>
                        </div>
                      )}

                      {/* Project 3: DCF Model - Financial Terminal & Sensitivity Matrix */}
                      {project.id === 'dcf-model-unlisted' && (
                        <div className="relative z-10 h-full flex flex-col justify-between py-1">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <div className="w-6 h-6 rounded-lg bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                                <FileSpreadsheet className="w-3.5 h-3.5" />
                              </div>
                              <span className="text-[11px] font-grotesk font-bold text-slate-800 dark:text-slate-200">
                                5-Year DCF & Dark Store Model
                              </span>
                            </div>
                            <span className="text-[9px] font-mono font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                              .XLSX Workbook
                            </span>
                          </div>

                          {/* Mini Sensitivity Matrix */}
                          <div className="my-auto bg-white/95 dark:bg-[#0C101C]/95 rounded-xl p-2 border border-slate-200 dark:border-[#1E2536] shadow-xs">
                            <div className="flex justify-between items-center text-[9px] font-mono text-slate-500 dark:text-slate-400 pb-1 border-b border-slate-100 dark:border-slate-800">
                              <span>WACC vs Terminal g</span>
                              <span>Enterprise Value</span>
                            </div>
                            <div className="grid grid-cols-3 gap-1 pt-1.5 text-center font-mono text-[10px]">
                              <div className="p-1 rounded bg-slate-50 dark:bg-[#141B2D]">
                                <div className="text-[8px] text-slate-400">Bear (4%)</div>
                                <div className="font-bold text-slate-700 dark:text-slate-300">$4.1B</div>
                              </div>
                              <div className="p-1 rounded bg-amber-500/15 dark:bg-[#DEC396]/15 border border-amber-500/30 dark:border-[#DEC396]/30">
                                <div className="text-[8px] text-amber-700 dark:text-[#DEC396] font-bold">Base (5.5%)</div>
                                <div className="font-bold text-amber-700 dark:text-[#DEC396]">$4.7B</div>
                              </div>
                              <div className="p-1 rounded bg-slate-50 dark:bg-[#141B2D]">
                                <div className="text-[8px] text-slate-400">Bull (6%)</div>
                                <div className="font-bold text-slate-700 dark:text-slate-300">$5.3B</div>
                              </div>
                            </div>
                          </div>

                          <div className="flex items-center justify-between text-[9px] font-mono text-slate-500 dark:text-slate-400 bg-white/70 dark:bg-[#070A11]/60 px-2.5 py-1 rounded-lg border border-slate-200/60 dark:border-[#1E2536]">
                            <span>WACC 13.2% Benchmark</span>
                            <span className="text-emerald-600 dark:text-emerald-400 font-bold">+₹14 Unit Contrib.</span>
                          </div>
                        </div>
                      )}

                      {/* Project 4: Swiftkart AI Assistant - Natural Language to SQL Pipeline */}
                      {project.id === 'swiftkart-ai-assistant' && (
                        <div className="relative z-10 h-full flex flex-col justify-between py-1">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <div className="w-6 h-6 rounded-lg bg-blue-500/20 text-blue-500 flex items-center justify-center">
                                <Terminal className="w-3.5 h-3.5" />
                              </div>
                              <span className="text-[11px] font-grotesk font-bold text-slate-800 dark:text-slate-200">
                                NL to SQL Query Engine
                              </span>
                            </div>
                            <span className="text-[9px] font-mono font-bold text-blue-700 dark:text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded-full border border-blue-500/20">
                              96.5% Accuracy
                            </span>
                          </div>

                          {/* Code Snippet & Mini Chart Bars */}
                          <div className="my-auto bg-white/95 dark:bg-[#0C101C]/95 rounded-xl p-2.5 border border-slate-200 dark:border-[#1E2536] shadow-xs space-y-2">
                            <div className="font-mono text-[9px] text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-[#141A28] px-2 py-1 rounded border border-slate-200/60 dark:border-slate-800 truncate">
                              <span className="text-amber-600 dark:text-[#DEC396]">SELECT</span> category, SUM(rev) <span className="text-amber-600 dark:text-[#DEC396]">FROM</span> orders...
                            </div>
                            
                            <div className="space-y-1">
                              <div className="flex justify-between text-[8px] font-mono text-slate-500">
                                <span>Ad-Hoc Request Volume</span>
                                <span className="text-emerald-500 font-bold">-70% engineering load</span>
                              </div>
                              <div className="w-full h-2 bg-slate-100 dark:bg-[#161C2C] rounded-full overflow-hidden flex">
                                <div className="bg-amber-500 dark:bg-[#DEC396] h-full" style={{ width: '68%' }} />
                                <div className="bg-blue-500 h-full" style={{ width: '32%' }} />
                              </div>
                            </div>
                          </div>

                          <div className="flex items-center justify-between text-[9px] font-mono text-slate-500 dark:text-slate-400 bg-white/70 dark:bg-[#070A11]/60 px-2.5 py-1 rounded-lg border border-slate-200/60 dark:border-[#1E2536]">
                            <span>FastAPI + DuckDB + Groq</span>
                            <span className="text-blue-600 dark:text-blue-400 font-bold">Auto-Correcting SQL</span>
                          </div>
                        </div>
                      )}

                    </div>

                    {/* Ambient subtle corner glow inside preview */}
                    <div className="absolute -bottom-10 -right-10 w-28 h-28 bg-amber-500/10 dark:bg-[#DEC396]/10 rounded-full blur-xl pointer-events-none" />
                  </div>

                  {/* Category Pill & Optional Sub-Badge */}
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="font-sans text-[11px] font-bold text-amber-700 dark:text-[#DEC396] uppercase tracking-wider">
                      {project.category}
                    </span>
                    {project.badgeLabel && (
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[9px] font-mono font-bold tracking-wider text-amber-800 dark:text-amber-300 bg-amber-500/10 border border-amber-500/30 uppercase">
                        {project.badgeLabel}
                      </span>
                    )}
                  </div>

                  {/* Project Title */}
                  <h3 className="font-grotesk font-extrabold text-xl sm:text-2xl text-slate-900 dark:text-white mb-1.5 group-hover:text-amber-600 dark:group-hover:text-[#DEC396] transition-colors">
                    {project.title}
                  </h3>

                  {/* Subtitle / Tagline */}
                  {project.subtitle && (
                    <p className="font-grotesk font-bold text-xs text-amber-700 dark:text-amber-400 mb-2.5 tracking-wide">
                      {project.subtitle}
                    </p>
                  )}

                  {/* Short Description */}
                  <p className="font-sans text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-3 mb-4 font-normal">
                    {project.shortDesc}
                  </p>

                  {/* Feature Tags */}
                  {project.featureTags && (
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.featureTags.slice(0, 4).map((tag, tIdx) => (
                        <span 
                          key={tIdx} 
                          className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-slate-100 dark:bg-[#151B2B] text-slate-600 dark:text-slate-300 border border-slate-200/90 dark:border-[#222B3F]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                </div>

                {/* Bottom Row: Verified Metric & Direct CTAs */}
                <div className="pt-4 border-t border-slate-200 dark:border-[#1E2536] flex flex-wrap items-center justify-between gap-3">
                  <span className="font-sans text-xs font-bold text-amber-800 dark:text-[#DEC396] bg-amber-500/10 dark:bg-[#DEC396]/10 px-3 py-1 rounded-full border border-amber-500/20 dark:border-[#DEC396]/20">
                    {project.metrics[0]?.value} {project.metrics[0]?.label}
                  </span>

                  {/* Direct Actions */}
                  <div className="flex items-center gap-2">
                    {project.fileUrl && (
                      <a
                        href={project.fileUrl}
                        download={project.fileName || true}
                        onClick={(e) => e.stopPropagation()}
                        className="font-sans text-xs font-bold text-white bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-700 hover:to-amber-600 dark:from-[#B58448] dark:to-[#9B6D36] px-3.5 py-1.5 rounded-full shadow-xs flex items-center gap-1.5 transition-all hover:scale-[1.02]"
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
                        className="font-sans text-xs font-bold text-white bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-700 hover:to-amber-600 dark:from-[#B58448] dark:to-[#9B6D36] px-3.5 py-1.5 rounded-full shadow-xs flex items-center gap-1.5 transition-all hover:scale-[1.02]"
                        title={project.actionLabel || "Open Live Application"}
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>{project.actionLabel || 'Live App'}</span>
                      </a>
                    )}

                    <span className="font-sans text-xs font-semibold text-slate-600 dark:text-slate-300 group-hover:text-amber-600 dark:group-hover:text-[#DEC396] flex items-center gap-1 transition-colors pl-1">
                      Case Study <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

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
