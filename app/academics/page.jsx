'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import {
  Leaf,
  GraduationCap,
  Users,
  Landmark,
  Globe,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  FlaskConical,
  BookOpen,
  Monitor,
  HeartHandshake,
  Atom,
  Calendar,
  Sparkles,
  School,
  Clock,
  User,
  Compass,
  CheckCircle2,
  Cpu
} from 'lucide-react';

export default function ProgramsPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const stats = [
    { count: '20+', label: 'Programs Offered', icon: GraduationCap },
    { count: '1000+', label: 'Learners Engaged', icon: Users },
    { count: '10+', label: 'Partner Institutions', icon: Landmark },
    { count: '5+', label: 'Focus Areas', icon: Globe }
  ];

  const programCategories = [
    {
      id: 'stem-learning',
      title: 'STEM Learning Programs',
      desc: 'Hands-on, activity-based programs that ignite curiosity and strengthen STEM skills.',
      img: '/events/workshop.jpg',
      link: '/events'
    },
    {
      id: 'teacher-dev',
      title: 'Teacher Development Programs',
      desc: 'Capacity building programs for educators to enhance teaching and learning.',
      img: '/events/events_book_plant.jpg',
      link: '/events'
    },
    {
      id: 'workshops-training',
      title: 'Workshops & Training',
      desc: 'Short-term workshops and training sessions on emerging topics and technologies.',
      img: '/events/scholar.jpg',
      link: '/events'
    },
    {
      id: 'outreach-community',
      title: 'Outreach & Community Programs',
      desc: 'Community-focused initiatives promoting inclusion and social impact.',
      img: '/events/events_globe_books.jpg',
      link: '/events'
    },
    {
      id: 'sustainability-edu',
      title: 'Sustainability Education',
      desc: 'Programs that build awareness and drive action towards a sustainable future.',
      img: '/events/sustainability.jpg',
      link: '/events'
    }
  ];

  const featuredPrograms = [
    {
      id: 1,
      badge: 'POPULAR',
      badgeClass: 'bg-[#1b3726] text-[#a2d45e]',
      icon: FlaskConical,
      title: 'STEM Learning Lab Programme',
      desc: 'Experiential learning through innovative lab activities.',
      audience: 'Students',
      duration: 'School & Teachers',
      img: '/events/workshop.jpg'
    },
    {
      id: 2,
      badge: 'NEW',
      badgeClass: 'bg-[#1b3726] text-[#a2d45e]',
      icon: School,
      title: 'Innovative Teaching Practices Workshop',
      desc: 'Enhancing pedagogical skills through practical strategies.',
      audience: 'Teachers',
      duration: '2 Days Workshop',
      img: '/events/conference.jpg'
    },
    {
      id: 3,
      badge: 'ONGOING',
      badgeClass: 'bg-[#1b3726] text-[#a2d45e]',
      icon: Cpu,
      title: 'Robotics & AI Exploration Camp',
      desc: 'Hands-on exploration of robotics, AI and problem solving.',
      audience: 'Students',
      duration: '5 Days Camp',
      img: '/events/scholar.jpg'
    },
    {
      id: 4,
      badge: 'FEATURED',
      badgeClass: 'bg-[#1b3726] text-[#a2d45e]',
      icon: Compass,
      title: 'Sustainability Leadership Program',
      desc: 'Empowering young leaders to drive sustainable change.',
      audience: 'Students',
      duration: '3 Days Program',
      img: '/events/sustainability.jpg'
    }
  ];

  return (
    <div className="min-h-screen bg-[#f3f5ed] dark:bg-[#031008] text-[#19241c] dark:text-slate-100 font-sans pb-28 pt-28 sm:pt-36 relative overflow-hidden selection:bg-[#a2d45e]/30 transition-colors duration-300">
      
      {/* Ambient background glows */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[20%] -left-40 w-[600px] h-[600px] bg-[#e2edd8]/40 dark:bg-[#0f301d]/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-8 w-[650px] h-[650px] bg-[#dbe8d0]/40 dark:bg-[#082214]/30 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 sm:space-y-28">

        {/* ========================================================================= */}
        {/* 1. HERO SECTION */}
        {/* ========================================================================= */}
        <div className="relative">
          
          {/* Hero Visual on the Right */}
          <div className="absolute top-0 right-0 w-full lg:w-[58%] h-[480px] sm:h-[540px] pointer-events-none z-0 rounded-l-[4rem] overflow-hidden select-none hidden lg:block">
            <img 
              src="/home/bg.png" 
              alt="LEnSE Programs & STEM Laboratory" 
              className="w-full h-full object-cover object-center scale-[1.03]" 
              onError={(e) => {
                e.currentTarget.src = "/events/events_book_plant.jpg";
              }}
            />
            {/* Soft Organic Fade Masks */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#f3f5ed] dark:from-[#031008] via-[#f3f5ed]/80 dark:via-[#031008]/85 via-[20%] to-transparent to-[55%]" />
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#f3f5ed] dark:from-[#031008] via-[#f3f5ed]/60 dark:via-[#031008]/60 to-transparent" />
            <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-[#f3f5ed] dark:from-[#031008] to-transparent" />
          </div>

          {/* Left Content */}
          <div className="relative z-10 max-w-xl space-y-6 pt-2 pb-6">
            
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs font-semibold text-[#485b4d] dark:text-slate-400">
              <Leaf size={14} className="text-[#2d5a3c] dark:text-[#a2d45e] fill-[#2d5a3c] dark:fill-[#a2d45e]" />
              <Link href="/" className="hover:text-[#1b3726] dark:hover:text-white transition-colors">Home</Link>
              <span className="text-[#879b8c] dark:text-slate-500">&gt;</span>
              <span className="text-[#1b3726] dark:text-[#a2d45e] font-bold">Programs</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[4rem] font-normal text-[#122016] dark:text-white leading-[1.08] tracking-tight font-serif">
              Our Programs
            </h1>

            {/* Subtext */}
            <p className="text-xl sm:text-2xl font-serif italic text-[#243d2c] dark:text-[#a2d45e] leading-snug">
              Learning today. Leading tomorrow.
            </p>

            <p className="text-[#405245] dark:text-slate-300 text-sm sm:text-[14.5px] leading-[1.7] max-w-lg font-normal">
              At LEnSE, our programs are designed to inspire curiosity, strengthen skills, and foster innovation. From hands-on STEM learning to teacher development and community outreach, we create meaningful learning experiences for all.
            </p>

            {/* Stat Pills Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 pt-4 max-w-lg">
              {stats.map((item, idx) => (
                <div key={idx} className="p-3.5 rounded-2xl bg-white/80 dark:bg-[#0b1c14]/80 backdrop-blur-md border border-[#dce6dd] dark:border-[#183a27] shadow-xs flex flex-col items-center text-center group hover:bg-white dark:hover:bg-[#11261a] transition-all">
                  <div className="w-9 h-9 rounded-xl bg-[#eaf1e4] dark:bg-[#11261a] text-[#2d5a3c] dark:text-[#a2d45e] flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                    <item.icon size={18} strokeWidth={1.5} />
                  </div>
                  <span className="text-xl font-serif font-bold text-[#14261a] dark:text-white leading-none mb-0.5">
                    {item.count}
                  </span>
                  <span className="text-[10px] text-[#556758] dark:text-slate-400 font-medium leading-tight">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>

          </div>

        </div>

        {/* ========================================================================= */}
        {/* 2. EXPLORE OUR PROGRAM CATEGORIES */}
        {/* ========================================================================= */}
        <div className="space-y-8">
          <div className="text-center space-y-1.5 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-1">
              <div className="w-1.5 h-1.5 rounded-full bg-[#2d5a3c] dark:bg-[#a2d45e]" />
              <span className="text-[10.5px] font-bold tracking-[0.2em] text-[#4d5e50] dark:text-[#a2d45e] uppercase">
                EXPLORE OUR PROGRAM CATEGORIES
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-serif text-[#122016] dark:text-white">
              Empowering minds through <span className="italic text-[#243d2c] dark:text-[#a2d45e]">meaningful learning</span>
            </h2>
          </div>

          {/* 5 Cards Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5">
            {programCategories.map((item, idx) => (
              <div 
                key={idx} 
                className="p-5 rounded-[2rem] bg-white/85 dark:bg-[#0b1c14]/85 backdrop-blur-xl border border-white/95 dark:border-[#183a27] shadow-[0_4px_20px_rgba(0,0,0,0.02)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.3)] flex flex-col justify-between hover:shadow-md hover:-translate-y-1 hover:bg-white dark:hover:bg-[#10271c] dark:hover:border-[#245437] transition-all duration-300 group"
              >
                <div className="space-y-3">
                  <div className="w-full h-32 rounded-2xl overflow-hidden bg-slate-100 dark:bg-[#05110a] shadow-xs relative">
                    <img 
                      src={item.img} 
                      alt={item.title} 
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700" 
                    />
                  </div>
                  <h3 className="text-[15px] font-serif font-semibold text-[#14261a] dark:text-white leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-[11.5px] text-[#4d6052] dark:text-slate-300 leading-snug font-normal">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 flex items-center justify-between">
                  <Link href={item.link} className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1b3726] dark:text-[#a2d45e] group-hover:text-[#2d5a3c] dark:group-hover:text-[#b8e874] transition-colors">
                    <span>Explore Programs</span>
                    <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
                  </Link>

                  <div className="w-7 h-7 rounded-full bg-[#f4f7f2] dark:bg-[#11261a] group-hover:bg-[#1b3726] dark:group-hover:bg-[#a2d45e] group-hover:text-white dark:group-hover:text-[#031008] text-[#1b3726] dark:text-[#a2d45e] flex items-center justify-center transition-colors shadow-xs">
                    <ArrowRight size={12} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 3. FEATURED PROGRAMS */}
        {/* ========================================================================= */}
        <div className="space-y-8">
          <div className="flex flex-col sm:flex-row justify-between sm:items-end gap-4">
            <div className="space-y-1">
              <span className="text-[10.5px] font-bold tracking-[0.2em] text-[#4d5e50] dark:text-[#a2d45e] uppercase block">
                FEATURED PROGRAMS
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif text-[#122016] dark:text-white">
                Signature programs making an <span className="italic text-[#243d2c] dark:text-[#a2d45e]">impact</span>
              </h2>
            </div>

            <Link href="/events" className="text-xs font-bold text-[#1b3726] dark:text-[#a2d45e] hover:text-[#2d5a3c] dark:hover:text-[#b8e874] flex items-center gap-1.5 transition-colors group">
              <span>View All Programs</span>
              <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          {/* 4 Cards Carousel / Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 relative">
            {featuredPrograms.map((prog) => (
              <div 
                key={prog.id} 
                className="group rounded-[2rem] bg-white/90 dark:bg-[#0b1c14]/90 backdrop-blur-xl border border-white/95 dark:border-[#183a27] p-4 space-y-4 shadow-[0_4px_20px_rgba(0,0,0,0.02)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-lg hover:-translate-y-1 hover:bg-white dark:hover:bg-[#10271c] dark:hover:border-[#245437] transition-all duration-300"
              >
                {/* Image Thumbnail with Tag & Circle Icon Badge */}
                <div className="h-40 rounded-2xl overflow-hidden bg-slate-100 dark:bg-[#05110a] relative shadow-xs">
                  <img 
                    src={prog.img} 
                    alt={prog.title} 
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700" 
                  />

                  {/* Top Left Tag */}
                  <div className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full bg-[#0d2216]/85 backdrop-blur-md text-[#a2d45e] text-[9px] font-bold uppercase tracking-wider shadow-sm border border-[#1e422c]/50">
                    {prog.badge}
                  </div>

                  {/* Bottom Left Floating Round Icon Badge */}
                  <div className="absolute bottom-2.5 left-2.5 w-9 h-9 rounded-full bg-white/95 dark:bg-[#0b1c14] border border-white/80 dark:border-[#183a27] shadow-md flex items-center justify-center text-[#2d5a3c] dark:text-[#a2d45e]">
                    <prog.icon size={17} strokeWidth={1.5} />
                  </div>
                </div>

                {/* Details */}
                <div className="space-y-2 px-1">
                  <h3 className="text-[15px] font-serif font-semibold text-[#14261a] dark:text-white leading-snug group-hover:text-[#2d5a3c] dark:group-hover:text-[#a2d45e] transition-colors line-clamp-2">
                    {prog.title}
                  </h3>

                  <p className="text-[12px] text-[#4d6052] dark:text-slate-300 leading-relaxed line-clamp-2 font-normal">
                    {prog.desc}
                  </p>

                  {/* Meta footer */}
                  <div className="flex items-center justify-between text-[11px] text-[#637667] dark:text-slate-400 pt-2 border-t border-[#f0f4ef] dark:border-[#183a27]">
                    <span className="flex items-center gap-1 font-medium">
                      <User size={13} className="text-[#2d5a3c] dark:text-[#a2d45e]" />
                      {prog.audience}
                    </span>
                    <span className="flex items-center gap-1 font-medium">
                      <Clock size={13} className="text-[#2d5a3c] dark:text-[#a2d45e]" />
                      {prog.duration}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 4. CUSTOM PROGRAM CTA BANNER */}
        {/* ========================================================================= */}
        <div className="rounded-[2.4rem] bg-[#eaf0e6] dark:bg-[#0b1c14] border border-[#dce8d8] dark:border-[#183a27] p-6 sm:p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xs relative overflow-hidden transition-all duration-300">
          
          {/* Left Vignette Artwork */}
          <div className="flex items-center gap-4 relative z-10">
            <div className="w-20 h-16 rounded-2xl overflow-hidden bg-white/80 dark:bg-[#05110a] shadow-xs hidden sm:block shrink-0 border border-white/60 dark:border-[#1e422c]">
              <img 
                src="/events/events_book_plant.jpg" 
                alt="LEnSE Custom Programs" 
                className="w-full h-full object-cover" 
              />
            </div>

            <div className="w-12 h-12 rounded-2xl bg-white dark:bg-[#11261a] border border-[#d8e5d8] dark:border-[#1e422c] text-[#2d5a3c] dark:text-[#a2d45e] flex items-center justify-center shrink-0 shadow-xs">
              <Calendar size={22} />
            </div>

            <div className="space-y-1">
              <h3 className="text-xl sm:text-2xl font-serif text-[#122016] dark:text-white">
                Can't find what you're looking for?
              </h3>
              <p className="text-xs sm:text-[13px] text-[#4d6052] dark:text-slate-300 max-w-md">
                We design customized programs for schools, colleges, educators and communities.
              </p>
            </div>
          </div>

          {/* Right Action Button */}
          <div className="relative z-10 shrink-0">
            <Link href="/contact">
              <button className="px-7 py-3.5 rounded-full bg-[#1b3726] dark:bg-[#154628] hover:bg-[#254d35] dark:hover:bg-[#1c5c34] text-white text-xs font-bold tracking-wider flex items-center gap-2.5 transition-all shadow-md cursor-pointer">
                <span>Let's Collaborate</span>
                <ArrowRight size={14} />
              </button>
            </Link>
          </div>

          {/* Background Botanical Sketch */}
          <div className="absolute right-0 bottom-0 pointer-events-none opacity-30 dark:opacity-20 translate-x-4 translate-y-4">
            <svg width="150" height="150" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M80 100C80 70 100 50 100 50C100 50 80 30 80 0C80 30 60 50 60 50C60 50 80 70 80 100Z" fill="#2d5a3c" className="dark:fill-[#a2d45e]" />
            </svg>
          </div>

        </div>

      </div>

    </div>
  );
}
