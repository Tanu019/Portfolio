import React from 'react';
import { ExternalLink, ArrowUpRight, Sparkles, Layers, Cpu, Compass, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function MindSaarSection() {
  const mindsaarUrl = 'https://mindsaar.onrender.com';
  const caseCraftUrl = 'https://casecraft-mba.onrender.com/';

  const startupPillars = [
    {
      icon: Compass,
      title: 'Problem-First Thinking',
      desc: 'Grounding every digital tool in real operational friction, user economics, and business metrics.'
    },
    {
      icon: Layers,
      title: 'Structured Learning',
      desc: 'Developing simulation platforms like Case Craft that make complex decision analysis intuitive.'
    },
    {
      icon: Cpu,
      title: 'Intelligent Technology',
      desc: 'Pairing modern full-stack web architectures with automated workflows and AI companions.'
    }
  ];

  return (
    <section 
      id="mindsaar" 
      className="py-12 sm:py-16 bg-[#F8FAFC] dark:bg-[#08090C] text-slate-900 dark:text-white relative border-t border-slate-200 dark:border-[#1E2536] transition-colors duration-200 overflow-hidden"
    >
      {/* Subtle warm sand ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-r from-amber-500/5 via-amber-200/5 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Startup Showcase Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.01 }}
          transition={{ duration: 0.45 }}
          className="bg-white dark:bg-[#111522] rounded-3xl border border-slate-200 dark:border-[#1E2536] hover:border-amber-500/40 dark:hover:border-amber-400/30 p-6 sm:p-10 lg:p-12 shadow-sm dark:shadow-2xl transition-all duration-300 relative overflow-hidden"
        >
          {/* Top Banner Accent */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-200 dark:border-[#1E2536]">
            <div className="flex items-center gap-2.5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider text-amber-800 dark:text-amber-300 bg-amber-50 dark:bg-amber-950/60 border border-amber-300/80 dark:border-amber-800/80 uppercase">
                <Sparkles className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
                Building with MindSaar
              </span>
              <span className="font-mono text-xs text-slate-500 dark:text-slate-400 hidden sm:inline">
                • Startup Venture
              </span>
            </div>

            <span className="font-mono text-xs font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-3 py-1 rounded-full border border-emerald-200/60 dark:border-emerald-900/40">
              Live Production
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Heading, Subheading, Description, & CTAs */}
            <div className="lg:col-span-7 space-y-5">
              <div>
                <h2 className="font-grotesk font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 dark:text-white tracking-tight leading-tight">
                  MindSaar
                </h2>
                <p className="font-grotesk font-bold text-lg sm:text-xl text-amber-700 dark:text-amber-400 mt-2">
                  From business problems to practical digital products.
                </p>
              </div>

              <p className="font-sans text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                MindSaar is my startup, where I develop digital products shaped by business needs, structured thinking, and technology. Through products such as Case Craft, I aim to make business learning and problem-solving more accessible and practical.
              </p>

              {/* Startup Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                {startupPillars.map((pillar, idx) => {
                  const Icon = pillar.icon;
                  return (
                    <div 
                      key={idx} 
                      className="p-3.5 rounded-2xl bg-slate-50 dark:bg-[#0A0F16] border border-slate-200/80 dark:border-[#1E2536] space-y-1.5"
                    >
                      <div className="w-7 h-7 rounded-lg bg-amber-500/10 dark:bg-amber-400/10 flex items-center justify-center text-amber-700 dark:text-amber-300">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h4 className="font-grotesk font-bold text-xs text-slate-900 dark:text-white">
                        {pillar.title}
                      </h4>
                      <p className="font-sans text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed font-normal">
                        {pillar.desc}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* Action Buttons Row */}
              <div className="flex flex-wrap items-center gap-3 pt-3">
                <a
                  href={mindsaarUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-sans font-bold text-xs uppercase tracking-wider rounded-full transition-all shadow-md shadow-emerald-600/30 hover:scale-[1.02] active:scale-[0.98]"
                  title="Explore MindSaar Website"
                >
                  <span>Explore MindSaar</span>
                  <ExternalLink className="w-4 h-4" />
                </a>

                <a
                  href={caseCraftUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-white dark:bg-[#182332] hover:bg-slate-50 dark:hover:bg-[#202E42] text-slate-800 dark:text-white font-sans font-bold text-xs uppercase tracking-wider rounded-full transition-all border border-slate-200 dark:border-[#1E2536] hover:scale-[1.02] active:scale-[0.98]"
                  title="Explore Case Craft MBA Platform"
                >
                  <span>Explore Case Craft</span>
                  <ArrowUpRight className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                </a>
              </div>
            </div>

            {/* Right Column: Genuine Live Product Preview */}
            <div className="lg:col-span-5">
              <div className="bg-slate-50 dark:bg-[#0A0F16] rounded-2xl border border-slate-200 dark:border-[#1E2536] p-4 sm:p-5 relative overflow-hidden group shadow-md">
                
                {/* Mock Browser Header */}
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-200 dark:border-[#1E2536]">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  </div>
                  <div className="font-mono text-[10px] text-slate-600 dark:text-slate-300 bg-white dark:bg-[#111522] px-3 py-0.5 rounded-full border border-slate-200 dark:border-[#1E2536] truncate max-w-[200px]">
                    https://mindsaar.onrender.com
                  </div>
                  <a 
                    href={mindsaarUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-slate-600 hover:text-emerald-600 dark:text-slate-300 dark:hover:text-emerald-400 transition-colors"
                    aria-label="Open MindSaar in new tab"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* Live Product Screenshot Preview */}
                <div className="relative rounded-xl overflow-hidden border border-slate-200 dark:border-[#1E2536] bg-slate-900 group-hover:border-amber-500/40 transition-colors">
                  <img
                    src="/images/mindsaar/mindsaar-preview.png"
                    alt="MindSaar live platform screenshot"
                    className="w-full h-48 sm:h-56 object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Floating Product Badge */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs">
                    <div className="flex items-center gap-2">
                      <img 
                        src="/images/mindsaar/emblem.png" 
                        alt="MindSaar Emblem" 
                        className="w-5 h-5 rounded-md object-contain bg-slate-950/80 p-0.5" 
                      />
                      <span className="font-grotesk font-bold text-xs text-white drop-shadow">
                        MindSaar Digital Products
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-amber-300 bg-slate-950/80 px-2 py-0.5 rounded-md border border-amber-500/30">
                      Live App
                    </span>
                  </div>
                </div>

                {/* Featured Products Mini-List */}
                <div className="mt-3.5 pt-3 border-t border-slate-200 dark:border-[#1E2536] flex items-center justify-between text-xs">
                  <span className="font-sans text-[11px] font-semibold text-slate-500 dark:text-slate-400">
                    Flagship Products:
                  </span>
                  <div className="flex items-center gap-2 font-mono text-[11px]">
                    <span className="text-amber-700 dark:text-amber-400 font-bold">Case Craft</span>
                    <span className="text-slate-300 dark:text-slate-600">•</span>
                    <span className="text-emerald-600 dark:text-emerald-400 font-bold">Cancer Sakhi</span>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
