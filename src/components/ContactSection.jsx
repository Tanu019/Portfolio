import React, { useState } from 'react';
import { Mail, Linkedin, Github, FileText, ArrowUpRight, Copy, Check, Sparkles, Send } from 'lucide-react';
import { motion } from 'framer-motion';
import { bioData } from '../data/projectsData';

export default function ContactSection({ onOpenResume }) {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(bioData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handleQuickSend = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    const subject = encodeURIComponent(`Inquiry for Tanu Chaudhary from ${formData.name}`);
    const body = encodeURIComponent(`Hi Tanu,\n\n${formData.message}\n\nFrom: ${formData.name} (${formData.email})`);
    window.location.href = `mailto:${bioData.email}?subject=${subject}&body=${body}`;

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="py-24 bg-[#0A0F16] text-[#F1F5F9] relative pearl-grid border-b border-[#223245] overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute -top-24 right-10 w-96 h-96 bg-sky-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 left-10 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#111923] text-sky-300 border border-sky-500/30 rounded-md font-mono text-xs font-bold uppercase tracking-wider mb-6 shadow-md">
            <Sparkles className="w-3.5 h-3.5 text-sky-400" />
            <span>CONNECT & COLLABORATE</span>
          </div>

          <h2 className="font-grotesk font-extrabold text-5xl sm:text-6xl lg:text-7xl tracking-tight text-white leading-[0.96] mb-6">
            LET'S MAKE <br />
            <span className="text-sky-400 underline decoration-sky-500 decoration-4 underline-offset-8">
              SOMETHING MEANINGFUL.
            </span>
          </h2>

          <p className="font-sans text-lg sm:text-xl text-slate-300 font-normal">
            Open to Business Analyst and analytical strategy opportunities across high-growth and impact teams.
          </p>
        </div>

        {/* Action Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Direct Action Buttons & Card */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-6 bg-[#111923] rounded-2xl border border-[#223245] p-6 sm:p-8 shadow-xl flex flex-col justify-between space-y-8"
          >
            <div>
              <span className="font-mono text-xs text-sky-400 uppercase tracking-wider block mb-2 font-bold">
                DIRECT CHANNELS
              </span>
              <h3 className="font-grotesk font-extrabold text-3xl sm:text-4xl text-white mb-4">
                Fastest way to reach out
              </h3>
              <p className="font-sans text-base text-slate-300 leading-relaxed mb-6 font-normal">
                Whether you have an open role, want to discuss a business case study, or explore data collaborations, I'd love to chat.
              </p>

              {/* Copy Email Box */}
              <div className="p-4 bg-[#0A0F16] rounded-xl border border-[#223245] flex items-center justify-between gap-3 mb-4">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="p-2.5 bg-[#182332] text-sky-400 rounded-lg shrink-0 border border-[#223245]">
                    <Mail className="w-4 h-4 text-sky-400" />
                  </div>
                  <span className="font-mono text-sm sm:text-base font-bold text-white truncate">
                    {bioData.email}
                  </span>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="flex items-center gap-1.5 px-4 py-2 bg-sky-500 hover:bg-sky-400 text-slate-950 font-mono text-xs font-bold rounded-lg transition-all shrink-0 shadow"
                  title="Copy email to clipboard"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-slate-950" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* View Resume Button Card */}
              <div className="p-4 bg-[#0A0F16] rounded-xl border border-[#223245] flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-[#182332] text-sky-400 rounded-lg border border-[#223245]">
                    <FileText className="w-4 h-4 text-sky-400" />
                  </div>
                  <div>
                    <h5 className="font-grotesk font-extrabold text-base text-white">
                      Curriculum Vitae (PDF)
                    </h5>
                    <p className="font-mono text-xs text-slate-400">
                      Printable & downloadable summary
                    </p>
                  </div>
                </div>

                <button
                  onClick={onOpenResume}
                  className="flex items-center gap-1.5 px-4 py-2 bg-[#182332] hover:bg-[#223245] text-sky-300 font-grotesk font-extrabold text-xs uppercase rounded-lg border border-[#223245] transition-all shadow-sm"
                >
                  <span>Open CV</span>
                  <ArrowUpRight className="w-4 h-4 text-sky-400" />
                </button>
              </div>
            </div>

            {/* Social Links Row */}
            <div className="pt-6 border-t border-[#223245] flex items-center gap-4">
              <a
                href={bioData.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#0A0F16] text-slate-200 border border-[#223245] hover:border-sky-400 font-mono text-xs font-bold transition-all shadow-sm"
              >
                <Linkedin className="w-4 h-4 text-sky-400" />
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
              </a>

              <a
                href={bioData.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#0A0F16] text-slate-200 border border-[#223245] hover:border-sky-400 font-mono text-xs font-bold transition-all shadow-sm"
              >
                <Github className="w-4 h-4 text-sky-400" />
                <span>GitHub</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Quick Inquiry Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="lg:col-span-6 bg-[#111923] rounded-2xl border border-[#223245] p-6 sm:p-8 shadow-xl flex flex-col justify-between"
          >
            <div>
              <span className="font-mono text-xs text-sky-400 uppercase tracking-wider block mb-2 font-bold">
                INQUIRY DISPATCH
              </span>
              <h3 className="font-grotesk font-extrabold text-3xl sm:text-4xl text-white mb-2">
                Send a quick note
              </h3>
              <p className="font-sans text-sm text-slate-300 leading-relaxed mb-6 font-normal">
                Directly opens your mail client with pre-formatted details.
              </p>

              <form onSubmit={handleQuickSend} className="space-y-4">
                <div>
                  <label className="block font-mono text-xs font-bold text-slate-300 uppercase mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alex Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 bg-[#0A0F16] border border-[#223245] rounded-xl font-sans text-sm text-white focus:outline-none focus:border-sky-400 transition-colors font-medium"
                  />
                </div>

                <div>
                  <label className="block font-mono text-xs font-bold text-slate-300 uppercase mb-1">
                    Your Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. alex@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 bg-[#0A0F16] border border-[#223245] rounded-xl font-sans text-sm text-white focus:outline-none focus:border-sky-400 transition-colors font-medium"
                  />
                </div>

                <div>
                  <label className="block font-mono text-xs font-bold text-slate-300 uppercase mb-1">
                    Message / Opportunity Details
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell me about the role, project, or opportunity..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 bg-[#0A0F16] border border-[#223245] rounded-xl font-sans text-sm text-white focus:outline-none focus:border-sky-400 transition-colors resize-none font-medium"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-4 bg-sky-500 hover:bg-sky-400 text-slate-950 font-grotesk font-extrabold text-base uppercase tracking-wider rounded-xl transition-all shadow-lg"
                >
                  <Send className="w-5 h-5" />
                  <span>{submitted ? 'Launching Mail Client...' : 'Send Message Via Email'}</span>
                </button>
              </form>
            </div>

            <div className="mt-6 pt-4 border-t border-[#223245] text-center">
              <span className="font-mono text-xs font-bold text-slate-400">
                Typically responds within 24 business hours • Lucknow / Remote
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

