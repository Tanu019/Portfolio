import React, { useState } from 'react';
import { Mail, Phone, Linkedin, Github, ArrowUpRight, Copy, Check, Send, MapPin, AlertCircle, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { bioData } from '../data/projectsData';

export default function ContactSection({ onOpenResume }) {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = (e) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(bioData.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = (e) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(bioData.phone.replace(/\s+/g, ''));
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your full name';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email address';
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address (e.g. name@company.com)';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please provide details on your inquiry or opportunity';
    } else if (formData.message.trim().length < 5) {
      newErrors.message = 'Message must be at least 5 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleQuickSend = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const subject = encodeURIComponent(`Inquiry for Tanu Chaudhary from ${formData.name}`);
    const body = encodeURIComponent(`Hi Tanu,\n\n${formData.message}\n\nFrom: ${formData.name} (${formData.email})`);
    window.location.href = `mailto:${bioData.email}?subject=${subject}&body=${body}`;

    setSubmitted(true);
    setErrors({});
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 6000);
  };

  return (
    <section id="contact" className="py-12 sm:py-16 bg-[#F1F5F9]/60 dark:bg-[#0B0E17] text-slate-900 dark:text-white relative border-t border-slate-200 dark:border-[#1E2536] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <span className="font-mono text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider block mb-1.5">
            Get In Touch
          </span>
          <h2 className="font-grotesk font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 dark:text-white tracking-tight mb-3">
            Let's talk
          </h2>
          <p className="font-sans text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-normal leading-relaxed">
            Open to full-time Business Analyst roles, commercial strategy engagements, and high-impact analytics initiatives.
          </p>
        </div>

        {/* 2-Column Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-5xl mx-auto">
          
          {/* Left Column: Direct Channels */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="lg:col-span-6 bg-white dark:bg-[#111522] rounded-3xl border border-slate-200 dark:border-[#1E2536] p-6 sm:p-8 shadow-xs dark:shadow-xl flex flex-col justify-between space-y-6"
          >
            <div>
              <h3 className="font-grotesk font-extrabold text-2xl text-slate-900 dark:text-white mb-2">
                Fastest way to reach out
              </h3>
              <p className="font-sans text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6 font-normal">
                Whether you're hiring for an analyst role, exploring quick-commerce unit economics, or collaborating on models, reach out directly.
              </p>

              {/* Clickable Direct Email Box */}
              <div className="p-4 bg-slate-50 dark:bg-[#08090C] hover:border-emerald-500/50 rounded-2xl border border-slate-200 dark:border-[#1E2536] flex items-center justify-between gap-3 mb-4 transition-colors">
                <a 
                  href={`mailto:${bioData.email}`}
                  className="flex items-center gap-3 overflow-hidden group flex-1"
                  title="Click to email Tanu Chaudhary"
                >
                  <div className="p-2.5 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 rounded-xl shrink-0 border border-emerald-200 dark:border-emerald-900/40 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="truncate">
                    <span className="font-sans text-[11px] text-slate-500 dark:text-slate-400 block group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">Direct Email (Click to Open)</span>
                    <span className="font-mono text-xs sm:text-sm font-bold text-slate-900 dark:text-white truncate block group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      {bioData.email}
                    </span>
                  </div>
                </a>

                <button
                  onClick={handleCopyEmail}
                  className="flex items-center gap-1.5 px-3.5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-sans text-xs font-bold rounded-full transition-all shrink-0 shadow-xs shadow-emerald-600/20"
                  title="Copy email to clipboard"
                  aria-label="Copy email address"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-200" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Clickable Direct Phone Box */}
              <div className="p-4 bg-slate-50 dark:bg-[#08090C] hover:border-emerald-500/50 rounded-2xl border border-slate-200 dark:border-[#1E2536] flex items-center justify-between gap-3 mb-6 transition-colors">
                <a 
                  href={`tel:${bioData.phone.replace(/\s+/g, '')}`}
                  className="flex items-center gap-3 overflow-hidden group flex-1"
                  title="Click to call Tanu Chaudhary"
                >
                  <div className="p-2.5 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 rounded-xl shrink-0 border border-emerald-200 dark:border-emerald-900/40 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="truncate">
                    <span className="font-sans text-[11px] text-slate-500 dark:text-slate-400 block group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">Phone Number (Click to Call)</span>
                    <span className="font-mono text-xs sm:text-sm font-bold text-slate-900 dark:text-white truncate block group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      {bioData.phone}
                    </span>
                  </div>
                </a>

                <button
                  onClick={handleCopyPhone}
                  className="flex items-center gap-1.5 px-3.5 py-2 bg-slate-200 hover:bg-slate-300 dark:bg-[#1E2536] dark:hover:bg-[#2A344A] text-slate-800 dark:text-white font-sans text-xs font-bold rounded-full transition-all shrink-0"
                  title="Copy phone to clipboard"
                  aria-label="Copy phone number"
                >
                  {copiedPhone ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-500" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Social Channels */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                <a
                  href={bioData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 bg-slate-50 dark:bg-[#08090C] hover:border-emerald-500 rounded-2xl border border-slate-200 dark:border-[#1E2536] transition-colors group shadow-xs"
                >
                  <div className="flex items-center gap-3">
                    <Linkedin className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                    <div>
                      <span className="font-grotesk font-bold text-xs text-slate-900 dark:text-white block group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">LinkedIn</span>
                      <span className="font-sans text-[11px] text-slate-500 dark:text-slate-400">Profile</span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors" />
                </a>

                <a
                  href={bioData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 bg-slate-50 dark:bg-[#08090C] hover:border-emerald-500 rounded-2xl border border-slate-200 dark:border-[#1E2536] transition-colors group shadow-xs"
                >
                  <div className="flex items-center gap-3">
                    <Github className="w-5 h-5 text-slate-700 dark:text-slate-300 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors" />
                    <div>
                      <span className="font-grotesk font-bold text-xs text-slate-900 dark:text-white block group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">GitHub</span>
                      <span className="font-sans text-[11px] text-slate-500 dark:text-slate-400">Repositories</span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors" />
                </a>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200 dark:border-[#1E2536] flex items-center justify-between text-xs font-sans text-slate-500 dark:text-slate-400">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-slate-500 dark:text-slate-400" />
                <span>New Delhi / Ambedkar Nagar, India</span>
              </span>
              <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Immediate Availability</span>
            </div>
          </motion.div>

          {/* Right Column: Inquiry Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="lg:col-span-6 bg-white dark:bg-[#111522] rounded-3xl border border-slate-200 dark:border-[#1E2536] p-6 sm:p-8 shadow-xs dark:shadow-xl flex flex-col justify-between"
          >
            <div>
              <h3 className="font-grotesk font-extrabold text-2xl text-slate-900 dark:text-white mb-4">
                Send a Message
              </h3>

              {/* Success Notification Alert */}
              <AnimatePresence>
                {submitted && (
                  <motion.div 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mb-5 p-4 bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-300 dark:border-emerald-800 rounded-2xl flex items-start gap-3 text-emerald-800 dark:text-emerald-200 text-xs sm:text-sm font-sans"
                  >
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold block font-grotesk text-sm text-emerald-700 dark:text-emerald-300">Message Draft Prepared!</span>
                      <span>Your email client was opened to transmit your message directly to <strong>{bioData.email}</strong>. Looking forward to connecting!</span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={handleQuickSend} noValidate className="space-y-4">
                <div>
                  <label className="block font-sans text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                    Your Name <span className="text-emerald-600">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Priya Sharma"
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                      if (errors.name) setErrors({ ...errors, name: '' });
                    }}
                    className={`w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-[#08090C] border text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none font-sans text-sm transition-colors ${
                      errors.name 
                        ? 'border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500/30' 
                        : 'border-slate-200 dark:border-[#1E2536] focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600/30'
                    }`}
                  />
                  {errors.name && (
                    <div className="flex items-center gap-1.5 mt-1.5 text-xs text-red-600 dark:text-red-400">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.name}</span>
                    </div>
                  )}
                </div>

                <div>
                  <label className="block font-sans text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                    Email Address <span className="text-emerald-600">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. priya@company.com"
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      if (errors.email) setErrors({ ...errors, email: '' });
                    }}
                    className={`w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-[#08090C] border text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none font-sans text-sm transition-colors ${
                      errors.email 
                        ? 'border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500/30' 
                        : 'border-slate-200 dark:border-[#1E2536] focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600/30'
                    }`}
                  />
                  {errors.email && (
                    <div className="flex items-center gap-1.5 mt-1.5 text-xs text-red-600 dark:text-red-400">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.email}</span>
                    </div>
                  )}
                </div>

                <div>
                  <label className="block font-sans text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                    Message / Inquiry <span className="text-emerald-600">*</span>
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell me about the role, analytical problem, or valuation project..."
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      if (errors.message) setErrors({ ...errors, message: '' });
                    }}
                    className={`w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-[#08090C] border text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none font-sans text-sm transition-colors resize-none ${
                      errors.message 
                        ? 'border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500/30' 
                        : 'border-slate-200 dark:border-[#1E2536] focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600/30'
                    }`}
                  />
                  {errors.message && (
                    <div className="flex items-center gap-1.5 mt-1.5 text-xs text-red-600 dark:text-red-400">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.message}</span>
                    </div>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 sm:py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-sans font-bold text-sm rounded-full transition-all shadow-lg shadow-emerald-600/30 hover:shadow-xl hover:shadow-emerald-600/40 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4 text-white" />
                  <span>{submitted ? 'Email Client Opened!' : 'Send Message'}</span>
                </button>
              </form>
            </div>

            <p className="font-sans text-xs text-slate-500 dark:text-slate-400 mt-4 text-center">
              Response turnaround typically within 24 hours.
            </p>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
