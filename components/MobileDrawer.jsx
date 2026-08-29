'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Home, Info, ShieldCheck, Building2, UserCheck, Calendar, 
  Newspaper, Image as ImageIcon, BookOpen, Mail, X, Search, ChevronRight, Lock
} from 'lucide-react';
import ThemeToggle from './ThemeToggle';

export default function MobileDrawer({ isOpen, onClose, onOpenSearch }) {
  const pathname = usePathname();

  const navItems = [
    { href: '/', label: 'Home', icon: Home, desc: 'Academic Portal Overview' },
    { href: '/about', label: 'About the Institution', icon: Info, desc: 'CLESE Vision 2024 & Objectives' },
    { href: '/administration', label: 'Administration', icon: ShieldCheck, desc: 'Centralized Single Admin Panel' },
    { href: '/departments', label: 'Departments', icon: Building2, desc: 'Learning Eng & STEM Depts' },
    { href: '/faculty', label: 'Faculty Management', icon: UserCheck, desc: 'Faculty Profiles & System' },
    { href: '/events', label: 'Events Portal', icon: Calendar, desc: 'Conferences, Camps & Workshops' },
    { href: '/news', label: 'News & Announcements', icon: Newspaper, desc: 'Institutional Updates & SEO' },
    { href: '/gallery', label: 'Media & Gallery', icon: ImageIcon, desc: 'Dynamic Image Collections' },
    { href: '/academics', label: 'Academic Information', icon: BookOpen, desc: 'M.Ed / Ph.D Courses & Framework' },
    { href: '/contact', label: 'Contact', icon: Mail, desc: 'Kariavattom Campus Location' }
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-md flex justify-end" onClick={onClose}>
      <div 
        className="w-80 max-w-[85vw] h-full bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 p-6 flex flex-col justify-between shadow-2xl overflow-y-auto animate-in slide-in-from-right duration-250 border-l border-slate-200 dark:border-slate-800"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="space-y-6">
          
          {/* Header & Close */}
          <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4">
            <div>
              <span className="font-outfit font-black text-lg text-slate-900 dark:text-white block">
                CLESE PORTAL
              </span>
              <span className="text-[9px] font-extrabold text-amber-600 dark:text-amber-400 tracking-widest block uppercase">
                10 PRIMARY PAGES
              </span>
            </div>
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <button 
                onClick={onClose} 
                className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {/* Search Trigger */}
          <button
            onClick={onOpenSearch}
            className="w-full flex items-center justify-between p-3 rounded-2xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700/80 transition-colors text-xs font-semibold"
          >
            <span className="flex items-center gap-2">
              <Search size={16} className="text-amber-500" />
              <span>Search Portal...</span>
            </span>
            <kbd className="px-1.5 py-0.5 text-[9px] font-bold bg-white dark:bg-slate-900 rounded border border-slate-200 dark:border-slate-700">⌘K</kbd>
          </button>

          {/* Navigation Items */}
          <div className="space-y-1">
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400 dark:text-slate-500 px-2 block mb-2">
              Primary Pages (CLESE Specification)
            </span>
            <ul className="space-y-1.5 list-none p-0 m-0">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = pathname === item.href;

                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={onClose}
                      className={`flex items-center justify-between p-2.5 rounded-2xl text-xs font-bold transition-all ${
                        isActive
                          ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                          : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/80 hover:text-slate-950 dark:hover:text-white'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <Icon size={16} className={isActive ? 'text-slate-950' : 'text-amber-500'} />
                        <div className="flex flex-col">
                          <span>{item.label}</span>
                          <span className={`text-[9px] font-medium ${isActive ? 'text-slate-800' : 'text-slate-400 dark:text-slate-500'}`}>
                            {item.desc}
                          </span>
                        </div>
                      </div>
                      <ChevronRight size={14} className={isActive ? 'text-slate-950' : 'text-slate-400'} />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

        </div>

        {/* Footer Admin Link */}
        <div className="pt-6 border-t border-slate-100 dark:border-slate-800 space-y-3">
          <Link
            href="/administration"
            onClick={onClose}
            className="w-full flex items-center justify-center gap-2 p-3 rounded-2xl bg-slate-900 dark:bg-slate-800 hover:bg-amber-500 hover:text-slate-950 text-white font-extrabold text-xs shadow-lg transition-all"
          >
            <Lock size={15} className="text-amber-400" />
            <span>Single Administrator CMS Panel</span>
          </Link>
        </div>

      </div>
    </div>
  );
}
