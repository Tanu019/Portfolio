import React, { useState, useEffect, useRef } from 'react';
import { 
  Search, 
  FileText, 
  Mail, 
  Linkedin, 
  Github, 
  ArrowRight, 
  Sparkles, 
  BarChart2, 
  Calculator, 
  Compass, 
  X,
  Code2
} from 'lucide-react';
import { projectsData } from '../data/projectsData';

export default function CommandPalette({ 
  isOpen, 
  onClose, 
  onOpenResume, 
  onSelectProject
}) {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef(null);
  const listRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  const navigationItems = [
    {
      id: 'sec-work',
      title: 'Explore Case Studies',
      category: 'Navigation',
      icon: BarChart2,
      action: () => {
        document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      }
    },
    {
      id: 'sec-about',
      title: 'Executive Profile & Story',
      category: 'Navigation',
      icon: Compass,
      action: () => {
        document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      }
    },
    {
      id: 'sec-skills',
      title: 'Core Competency Matrix',
      category: 'Navigation',
      icon: Calculator,
      action: () => {
        document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      }
    },
    {
      id: 'sec-contact',
      title: 'Get In Touch / Hire Tanu',
      category: 'Navigation',
      icon: Mail,
      action: () => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      }
    }
  ];

  const actionItems = [
    {
      id: 'act-resume',
      title: 'View & Download Resume PDF',
      category: 'Quick Action',
      icon: FileText,
      badge: 'PDF',
      action: () => {
        onClose();
        onOpenResume();
      }
    },
    {
      id: 'act-email',
      title: 'Email Tanu Chaudhary (ctanu608@gmail.com)',
      category: 'Quick Action',
      icon: Mail,
      badge: 'Direct',
      action: () => {
        window.location.href = 'mailto:ctanu608@gmail.com?subject=Inquiry%20for%20Tanu%20Chaudhary';
        onClose();
      }
    },
    {
      id: 'act-linkedin',
      title: 'Open LinkedIn Profile',
      category: 'Social',
      icon: Linkedin,
      badge: 'External',
      action: () => {
        window.open('https://www.linkedin.com/in/tanu-chaudhary-380863276', '_blank');
        onClose();
      }
    },
    {
      id: 'act-github',
      title: 'Open GitHub Profile (@Tanu019)',
      category: 'Social',
      icon: Github,
      badge: 'External',
      action: () => {
        window.open('https://github.com/Tanu019', '_blank');
        onClose();
      }
    }
  ];

  const projectItems = projectsData.map((p) => ({
    id: `proj-${p.id}`,
    title: `${p.title} — ${p.subtitle}`,
    category: 'Case Studies',
    icon: Code2,
    badge: p.tools.slice(0, 2).join(', '),
    action: () => {
      onClose();
      if (onSelectProject) onSelectProject(p);
    }
  }));

  const allItems = [...projectItems, ...actionItems, ...navigationItems];

  const filteredItems = allItems.filter((item) => {
    const q = query.toLowerCase().trim();
    if (!q) return true;
    return (
      item.title.toLowerCase().includes(q) ||
      item.category.toLowerCase().includes(q) ||
      (item.badge && item.badge.toLowerCase().includes(q))
    );
  });

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % (filteredItems.length || 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filteredItems.length) % (filteredItems.length || 1));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (filteredItems[selectedIndex]) {
        filteredItems[selectedIndex].action();
      }
    } else if (e.key === 'Escape') {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-slate-950/85 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="w-full max-w-2xl bg-[#111923] text-white rounded-2xl border border-[#223245] shadow-2xl overflow-hidden flex flex-col max-h-[80vh]"
        onClick={(e) => e.stopPropagation()}
        onKeyDown={handleKeyDown}
      >
        {/* Search Header */}
        <div className="flex items-center gap-3 px-5 py-4 border-b border-[#223245] bg-[#0A0F16]">
          <Search className="w-5 h-5 text-sky-400" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Type a command, project name, tool (SQL, Tableau, DCF)..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 bg-transparent border-none outline-none font-sans text-base font-semibold text-white placeholder:text-slate-500"
          />
          <div className="flex items-center gap-1.5">
            <kbd className="hidden sm:inline-block font-mono text-xs font-bold px-2 py-0.5 rounded bg-[#182332] text-sky-300 border border-[#223245]">
              ESC
            </kbd>
            <button 
              onClick={onClose}
              className="p-1 rounded-md text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Results List */}
        <div ref={listRef} className="overflow-y-auto p-3 space-y-1 bg-[#111923]">
          {filteredItems.length === 0 ? (
            <div className="py-12 text-center">
              <Sparkles className="w-8 h-8 text-sky-400 mx-auto mb-2" />
              <p className="font-grotesk font-bold text-lg text-white">
                No matching actions found
              </p>
              <p className="font-mono text-xs text-slate-400 mt-1">
                Try searching for "Tableau", "Zepto", "Resume", "SQL", or "Contact"
              </p>
            </div>
          ) : (
            filteredItems.map((item, idx) => {
              const Icon = item.icon;
              const isSelected = idx === selectedIndex;
              return (
                <div
                  key={item.id}
                  onClick={() => item.action()}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl cursor-pointer transition-all duration-150 ${
                    isSelected
                      ? 'bg-sky-500 text-slate-950 shadow-md font-bold'
                      : 'hover:bg-[#182332] text-slate-200'
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className={`p-2 rounded-lg ${
                      isSelected 
                        ? 'bg-slate-950/20 text-slate-950' 
                        : 'bg-[#0A0F16] text-sky-400 border border-[#223245]'
                    }`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="truncate">
                      <span className={`font-grotesk font-bold text-sm block truncate ${
                        isSelected ? 'text-slate-950' : 'text-white'
                      }`}>
                        {item.title}
                      </span>
                      <span className={`font-mono text-[10px] uppercase font-bold tracking-wider block ${
                        isSelected ? 'text-slate-900' : 'text-slate-400'
                      }`}>
                        {item.category}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0 ml-3">
                    {item.badge && (
                      <span className={`font-mono text-[11px] font-bold px-2 py-0.5 rounded border ${
                        isSelected 
                          ? 'bg-slate-950/20 text-slate-950 border-slate-950/30' 
                          : 'bg-[#0A0F16] text-sky-300 border-[#223245]'
                      }`}>
                        {item.badge}
                      </span>
                    )}
                    <ArrowRight className={`w-4 h-4 ${
                      isSelected ? 'text-slate-950 translate-x-0.5' : 'text-slate-500 opacity-0 group-hover:opacity-100'
                    } transition-all`} />
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Footer shortcuts helper */}
        <div className="px-5 py-3 bg-[#0A0F16] border-t border-[#223245] flex items-center justify-between text-xs font-mono font-bold text-slate-400">
          <div className="flex items-center gap-3">
            <span><kbd className="px-1.5 py-0.5 bg-[#182332] text-slate-300 rounded border border-[#223245]">↑</kbd> <kbd className="px-1.5 py-0.5 bg-[#182332] text-slate-300 rounded border border-[#223245]">↓</kbd> to navigate</span>
            <span><kbd className="px-1.5 py-0.5 bg-[#182332] text-slate-300 rounded border border-[#223245]">↵</kbd> to select</span>
          </div>
          <span className="text-sky-400 font-extrabold">Tanu Chaudhary Portfolio</span>
        </div>
      </div>
    </div>
  );
}

