import React, { useState, useMemo } from 'react';
import { 
  ArrowUpRight, 
  TrendingUp, 
  Sparkles, 
  RotateCcw
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero({ onExploreWork, onConnect }) {
  const [activeTab, setActiveTab] = useState('retail');

  // Interactive slider parameters
  const [retailDiscount, setRetailDiscount] = useState(14);
  const [retailAOV, setRetailAOV] = useState(480);

  const [dcfOrders, setDcfOrders] = useState(1150);
  const [dcfRiderCost, setDcfRiderCost] = useState(52);

  const [aiRequests, setAiRequests] = useState(240);
  const [aiHourlyRate, setAiHourlyRate] = useState(1200);

  // Real-time calculated simulation logic
  const calculatedRetail = useMemo(() => {
    const marginBase = 32.0;
    const discountEffect = (22 - retailDiscount) * 0.55;
    const aovBonus = ((retailAOV - 300) / 600) * 4.2;
    const grossMargin = Math.max(18, Math.min(58, marginBase + discountEffect + aovBonus));
    const profitRecovered = Math.round(grossMargin * 11500 * (retailAOV / 480));
    
    const bars = [
      Math.min(100, Math.round(grossMargin * 1.1)),
      Math.min(100, Math.round(grossMargin * 1.35)),
      Math.min(100, Math.round(grossMargin * 1.8)),
      Math.min(100, Math.round(grossMargin * 1.45)),
      Math.min(100, Math.round(grossMargin * 1.65)),
      Math.min(100, Math.round(grossMargin * 1.95)),
      Math.min(100, Math.round(grossMargin * 1.6)),
    ];

    return {
      grossMargin: `${grossMargin.toFixed(1)}%`,
      profitRecovered: `+₹${(profitRecovered / 100000).toFixed(1)}L`,
      bars
    };
  }, [retailDiscount, retailAOV]);

  const calculatedDCF = useMemo(() => {
    const baseMarginPerOrder = (dcfOrders * 0.038) - (dcfRiderCost * 0.48);
    const ebitdaPerOrder = Math.round(baseMarginPerOrder);
    const valuationEstimate = (2.5 + (dcfOrders / 1150) * 2.2 - ((dcfRiderCost - 45) * 0.035)).toFixed(1);
    
    const bars = [
      Math.max(10, Math.min(100, Math.round((dcfOrders / 18) * 0.3))),
      Math.max(15, Math.min(100, Math.round((dcfOrders / 18) * 0.5))),
      Math.max(25, Math.min(100, Math.round((dcfOrders / 18) * 0.75))),
      Math.max(35, Math.min(100, Math.round((dcfOrders / 18) * 0.95))),
      Math.max(45, Math.min(100, Math.round((dcfOrders / 18) * 1.15))),
      Math.max(55, Math.min(100, Math.round((dcfOrders / 18) * 1.35))),
      Math.max(65, Math.min(100, Math.round((dcfOrders / 18) * 1.55))),
    ];

    return {
      ebitdaText: `${ebitdaPerOrder >= 0 ? '+₹' : '-₹'}${Math.abs(ebitdaPerOrder)}/ord`,
      valuationText: `$${valuationEstimate}B Valuation`,
      bars
    };
  }, [dcfOrders, dcfRiderCost]);

  const calculatedAI = useMemo(() => {
    const hoursSaved = Math.round(aiRequests * 1.75);
    const costSavedK = Math.round((hoursSaved * aiHourlyRate) / 1000);
    const accuracy = (95.0 + Math.min(4.5, (aiRequests / 500) * 4.2)).toFixed(1);
    
    const bars = [
      92, 94, 91, 96, 98, Math.min(100, Math.round(accuracy)), 99
    ];

    return {
      hoursSaved: `${hoursSaved} hrs/mo`,
      costSaved: `₹${costSavedK}k saved`,
      accuracy: `${accuracy}%`,
      bars
    };
  }, [aiRequests, aiHourlyRate]);

  const resetToDefault = () => {
    setRetailDiscount(14);
    setRetailAOV(480);
    setDcfOrders(1150);
    setDcfRiderCost(52);
    setAiRequests(240);
    setAiHourlyRate(1200);
  };

  return (
    <section className="relative min-h-[92vh] bg-[#0A0F16] text-[#F1F5F9] overflow-hidden pt-28 pb-16 flex flex-col justify-between pearl-grid border-b border-[#223245]">
      {/* Background Ambient Glows */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-sky-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Monogram Watermark */}
      <div className="absolute right-4 bottom-8 select-none pointer-events-none opacity-[0.05] hidden xl:block">
        <span className="font-grotesk font-extrabold text-[220px] leading-none tracking-tighter text-sky-400">
          TC
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 flex-1 flex flex-col justify-center">
        {/* Top Tagline Strip */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#111923] text-sky-300 border border-sky-500/30 rounded-md font-mono text-xs font-bold uppercase tracking-wider mb-6 w-fit shadow-md"
        >
          <Sparkles className="w-3.5 h-3.5 text-sky-400" />
          <span>BUSINESS ANALYTICS / FINANCIAL MODELING / STRATEGIC PROBLEM SOLVING</span>
        </motion.div>

        {/* Main Editorial Headline Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Typography & CTAs */}
          <motion.div 
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            <h1 className="font-grotesk font-extrabold text-5xl sm:text-6xl lg:text-7xl tracking-tight leading-[0.96] text-white mb-3">
              I MAKE SENSE <br />
              <span className="text-sky-400 inline-block hover:translate-x-1 transition-transform duration-200">
                OF DATA.
              </span>
            </h1>

            <h2 className="font-grotesk font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[0.96] text-slate-200 mb-6">
              AND TURN IT <br />
              <span className="text-white underline decoration-sky-400 decoration-4 underline-offset-8">
                INTO ACTION.
              </span>
            </h2>

            <p className="font-sans text-lg sm:text-xl text-slate-300 max-w-xl leading-relaxed mb-8 font-normal">
              Hey, I'm <strong className="font-bold text-white underline decoration-sky-400 decoration-2 underline-offset-4">Tanu</strong>. An aspiring Business Analyst exploring the intersection of data analysis, financial valuation, and actionable business strategy.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={onExploreWork}
                className="group flex items-center gap-3 px-7 py-4 bg-sky-500 text-slate-950 font-grotesk font-extrabold text-base uppercase tracking-wider rounded-xl border border-sky-400 shadow-lg hover:bg-sky-400 hover:shadow-sky-500/25 transition-all duration-200"
              >
                <span>VIEW MY WORK</span>
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>

              <button
                onClick={onConnect}
                className="flex items-center gap-2 px-6 py-4 bg-[#111923] text-white font-grotesk font-bold text-base uppercase tracking-wider rounded-xl border border-[#223245] hover:border-sky-400 hover:bg-[#182332] transition-all duration-200 shadow-md"
              >
                <span>LET'S CONNECT</span>
                <span className="w-2.5 h-2.5 rounded-full bg-sky-400" />
              </button>
            </div>

            {/* Quick Stat Highlights */}
            <div className="grid grid-cols-3 gap-4 pt-8 mt-8 border-t border-[#223245]">
              <div>
                <p className="font-grotesk font-extrabold text-3xl sm:text-4xl text-white">1.2M+</p>
                <p className="font-mono text-xs font-bold uppercase tracking-wider text-slate-400 mt-1">Data Rows Analyzed</p>
              </div>
              <div>
                <p className="font-grotesk font-extrabold text-3xl sm:text-4xl text-sky-400">MBA '25</p>
                <p className="font-mono text-xs font-bold uppercase tracking-wider text-slate-400 mt-1">Business Analytics</p>
              </div>
              <div>
                <p className="font-grotesk font-extrabold text-3xl sm:text-4xl text-white">5+ Live</p>
                <p className="font-mono text-xs font-bold uppercase tracking-wider text-slate-400 mt-1">Analytical Models</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Live Dark Analytical Canvas */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-5"
          >
            <div className="bg-[#111923] text-white rounded-2xl border border-[#223245] p-6 shadow-2xl hover:border-sky-500/50 transition-all duration-300">
              {/* Terminal Header */}
              <div className="flex items-center justify-between pb-4 border-b border-[#223245] mb-5">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-rose-500 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-amber-500 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block" />
                  </div>
                  <span className="font-mono text-xs font-bold text-slate-300 ml-2">tanu_analytics_core.v2</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <button 
                    onClick={resetToDefault}
                    title="Reset simulation parameters"
                    className="p-1.5 hover:bg-[#182332] rounded-lg text-slate-400 hover:text-white transition-colors"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                  </button>
                  <span className="font-mono text-[11px] font-bold text-sky-400 uppercase bg-[#0A0F16] px-2.5 py-1 rounded border border-sky-500/30">
                    LIVE MODEL
                  </span>
                </div>
              </div>

              {/* Simulation Switcher Tabs */}
              <div className="grid grid-cols-3 gap-1.5 p-1 bg-[#0A0F16] rounded-xl mb-5 border border-[#223245]">
                <button
                  onClick={() => setActiveTab('retail')}
                  className={`py-2 text-xs font-mono font-bold rounded-lg transition-all ${
                    activeTab === 'retail' 
                      ? 'bg-sky-500 text-slate-950 shadow-md font-extrabold' 
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  RETAIL
                </button>
                <button
                  onClick={() => setActiveTab('valuation')}
                  className={`py-2 text-xs font-mono font-bold rounded-lg transition-all ${
                    activeTab === 'valuation' 
                      ? 'bg-sky-500 text-slate-950 shadow-md font-extrabold' 
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  DCF MODEL
                </button>
                <button
                  onClick={() => setActiveTab('ai')}
                  className={`py-2 text-xs font-mono font-bold rounded-lg transition-all ${
                    activeTab === 'ai' 
                      ? 'bg-sky-500 text-slate-950 shadow-md font-extrabold' 
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  AI SQL
                </button>
              </div>

              {/* Tab Content 1: Retail Margin Optimizer */}
              {activeTab === 'retail' && (
                <div className="space-y-4">
                  <div className="bg-[#0A0F16] p-5 rounded-xl border border-[#223245]">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <span className="font-mono text-xs font-bold text-sky-400 uppercase tracking-wider block">
                          GROCERY MARGIN OPTIMIZER
                        </span>
                        <h4 className="font-grotesk font-bold text-xl text-white">
                          Margin & Velocity Model
                        </h4>
                      </div>
                      <span className="font-grotesk font-extrabold text-3xl sm:text-4xl text-sky-400">
                        {calculatedRetail.grossMargin}
                      </span>
                    </div>

                    <p className="font-mono text-xs font-medium text-slate-300 mb-3">
                      Gross Margin Capture • <span className="text-emerald-400 font-bold">{calculatedRetail.profitRecovered} Recovered</span>
                    </p>

                    {/* Interactive Sliders */}
                    <div className="space-y-3 pt-3 border-t border-[#223245]">
                      <div>
                        <div className="flex justify-between text-xs font-mono font-semibold mb-1">
                          <span className="text-slate-300">Discount Sensitivity:</span>
                          <span className="font-bold text-sky-400">{retailDiscount}%</span>
                        </div>
                        <input
                          type="range"
                          min="5"
                          max="30"
                          value={retailDiscount}
                          onChange={(e) => setRetailDiscount(Number(e.target.value))}
                          className="w-full h-2"
                        />
                      </div>

                      <div>
                        <div className="flex justify-between text-xs font-mono font-semibold mb-1">
                          <span className="text-slate-300">Average Order Value (AOV):</span>
                          <span className="font-bold text-sky-400">₹{retailAOV}</span>
                        </div>
                        <input
                          type="range"
                          min="200"
                          max="900"
                          step="20"
                          value={retailAOV}
                          onChange={(e) => setRetailAOV(Number(e.target.value))}
                          className="w-full h-2"
                        />
                      </div>
                    </div>

                    {/* Chart Bars */}
                    <div className="pt-3 border-t border-[#223245] mt-3">
                      <div className="flex items-end justify-between h-16 gap-2 pt-1">
                        {calculatedRetail.bars.map((val, idx) => (
                          <div key={idx} className="flex-1 flex flex-col items-center gap-1 h-full justify-end">
                            <div
                              className="w-full bg-sky-500 rounded-t hover:bg-white transition-all duration-200 group relative cursor-pointer"
                              style={{ height: `${val}%` }}
                            >
                              <span className="opacity-0 group-hover:opacity-100 absolute -top-6 left-1/2 -translate-x-1/2 font-mono text-[10px] font-bold bg-slate-950 text-sky-300 border border-sky-500/50 px-1.5 py-0.5 rounded transition-opacity pointer-events-none z-20">
                                {val}%
                              </span>
                            </div>
                            <span className="font-mono text-[10px] font-bold text-slate-400">M{idx + 1}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="p-3.5 bg-[#182332] rounded-xl border-l-4 border-sky-400 text-xs text-slate-200 leading-relaxed font-sans font-medium">
                    <strong className="text-sky-300 font-mono text-xs block uppercase mb-0.5 font-bold">
                      Key Strategic Insight:
                    </strong>
                    Reducing blanket discounting by {22 - retailDiscount}% lifts bottom-line gross recovery to {calculatedRetail.profitRecovered} without suppressing velocity.
                  </div>
                </div>
              )}

              {/* Tab Content 2: DCF Valuation Matrix */}
              {activeTab === 'valuation' && (
                <div className="space-y-4">
                  <div className="bg-[#0A0F16] p-5 rounded-xl border border-[#223245]">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <span className="font-mono text-xs font-bold text-sky-400 uppercase tracking-wider block">
                          5-YR FINANCIAL DCF MODEL
                        </span>
                        <h4 className="font-grotesk font-bold text-xl text-white">
                          Zepto Quick-Commerce Model
                        </h4>
                      </div>
                      <span className="font-grotesk font-extrabold text-3xl text-sky-400">
                        {calculatedDCF.ebitdaText}
                      </span>
                    </div>

                    <p className="font-mono text-xs font-medium text-slate-300 mb-3">
                      Unit Contribution • <span className="text-emerald-400 font-bold">{calculatedDCF.valuationText}</span>
                    </p>

                    {/* Interactive Sliders */}
                    <div className="space-y-3 pt-3 border-t border-[#223245]">
                      <div>
                        <div className="flex justify-between text-xs font-mono font-semibold mb-1">
                          <span className="text-slate-300">Dark Store Orders / Day:</span>
                          <span className="font-bold text-sky-400">{dcfOrders.toLocaleString()} orders</span>
                        </div>
                        <input
                          type="range"
                          min="600"
                          max="2000"
                          step="50"
                          value={dcfOrders}
                          onChange={(e) => setDcfOrders(Number(e.target.value))}
                          className="w-full h-2"
                        />
                      </div>

                      <div>
                        <div className="flex justify-between text-xs font-mono font-semibold mb-1">
                          <span className="text-slate-300">Rider Cost / Delivery:</span>
                          <span className="font-bold text-sky-400">₹{dcfRiderCost}</span>
                        </div>
                        <input
                          type="range"
                          min="35"
                          max="80"
                          step="1"
                          value={dcfRiderCost}
                          onChange={(e) => setDcfRiderCost(Number(e.target.value))}
                          className="w-full h-2"
                        />
                      </div>
                    </div>

                    {/* Chart Bars */}
                    <div className="pt-3 border-t border-[#223245] mt-3">
                      <div className="flex items-end justify-between h-16 gap-2 pt-1">
                        {calculatedDCF.bars.map((val, idx) => (
                          <div key={idx} className="flex-1 flex flex-col items-center gap-1 h-full justify-end">
                            <div
                              className="w-full bg-sky-500 rounded-t hover:bg-white transition-all duration-200 group relative cursor-pointer"
                              style={{ height: `${val}%` }}
                            >
                              <span className="opacity-0 group-hover:opacity-100 absolute -top-6 left-1/2 -translate-x-1/2 font-mono text-[10px] font-bold bg-slate-950 text-sky-300 border border-sky-500/50 px-1.5 py-0.5 rounded transition-opacity pointer-events-none z-20">
                                Y{idx + 1}
                              </span>
                            </div>
                            <span className="font-mono text-[10px] font-bold text-slate-400">Y{idx + 1}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="p-3.5 bg-[#182332] rounded-xl border-l-4 border-sky-400 text-xs text-slate-200 leading-relaxed font-sans font-medium">
                    <strong className="text-sky-300 font-mono text-xs block uppercase mb-0.5 font-bold">
                      DCF Sensitivity Takeaway:
                    </strong>
                    At {dcfOrders} orders/day throughput, the dark store achieves sustainable cash breakeven and supports healthy unit margins.
                  </div>
                </div>
              )}

              {/* Tab Content 3: AI SQL Query Assistant */}
              {activeTab === 'ai' && (
                <div className="space-y-4">
                  <div className="bg-[#0A0F16] p-5 rounded-xl border border-[#223245]">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <span className="font-mono text-xs font-bold text-sky-400 uppercase tracking-wider block">
                          SWIFTKART AI SQL ENGINE
                        </span>
                        <h4 className="font-grotesk font-bold text-xl text-white">
                          Automated BI Assistant
                        </h4>
                      </div>
                      <span className="font-grotesk font-extrabold text-3xl text-sky-400">
                        {calculatedAI.hoursSaved}
                      </span>
                    </div>

                    <p className="font-mono text-xs font-medium text-slate-300 mb-3">
                      Data Backlog Slashed • <span className="text-emerald-400 font-bold">{calculatedAI.costSaved}</span>
                    </p>

                    {/* Interactive Sliders */}
                    <div className="space-y-3 pt-3 border-t border-[#223245]">
                      <div>
                        <div className="flex justify-between text-xs font-mono font-semibold mb-1">
                          <span className="text-slate-300">Monthly Ad-Hoc Data Requests:</span>
                          <span className="font-bold text-sky-400">{aiRequests} requests</span>
                        </div>
                        <input
                          type="range"
                          min="50"
                          max="500"
                          step="10"
                          value={aiRequests}
                          onChange={(e) => setAiRequests(Number(e.target.value))}
                          className="w-full h-2"
                        />
                      </div>

                      <div>
                        <div className="flex justify-between text-xs font-mono font-semibold mb-1">
                          <span className="text-slate-300">Analyst Cost Benchmark:</span>
                          <span className="font-bold text-sky-400">₹{aiHourlyRate}/hr</span>
                        </div>
                        <input
                          type="range"
                          min="500"
                          max="2500"
                          step="100"
                          value={aiHourlyRate}
                          onChange={(e) => setAiHourlyRate(Number(e.target.value))}
                          className="w-full h-2"
                        />
                      </div>
                    </div>

                    {/* Chart Bars */}
                    <div className="pt-3 border-t border-[#223245] mt-3">
                      <div className="flex items-end justify-between h-16 gap-2 pt-1">
                        {calculatedAI.bars.map((val, idx) => (
                          <div key={idx} className="flex-1 flex flex-col items-center gap-1 h-full justify-end">
                            <div
                              className="w-full bg-sky-500 rounded-t hover:bg-white transition-all duration-200 group relative cursor-pointer"
                              style={{ height: `${val}%` }}
                            >
                              <span className="opacity-0 group-hover:opacity-100 absolute -top-6 left-1/2 -translate-x-1/2 font-mono text-[10px] font-bold bg-slate-950 text-sky-300 border border-sky-500/50 px-1.5 py-0.5 rounded transition-opacity pointer-events-none z-20">
                                {val}%
                              </span>
                            </div>
                            <span className="font-mono text-[10px] font-bold text-slate-400">Q{idx + 1}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="p-3.5 bg-[#182332] rounded-xl border-l-4 border-sky-400 text-xs text-slate-200 leading-relaxed font-sans font-medium">
                    <strong className="text-sky-300 font-mono text-xs block uppercase mb-0.5 font-bold">
                      Business Intelligence Impact:
                    </strong>
                    Natural language queries generate instant charts with {calculatedAI.accuracy} accuracy, eliminating data reporting bottlenecks.
                  </div>
                </div>
              )}

              {/* Bottom Proof Strip */}
              <div className="mt-4 pt-3 border-t border-[#223245] flex items-center justify-between text-xs font-mono font-bold text-slate-400">
                <span>Drag sliders to simulate outcomes</span>
                <span className="text-sky-400 flex items-center gap-1 font-extrabold">
                  <TrendingUp className="w-4 h-4" /> Real-Time Model
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
