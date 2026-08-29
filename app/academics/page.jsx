'use client';
import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, BookOpen, GraduationCap, Award, Globe, CheckCircle2, ChevronRight, Bookmark, Sparkles, X, Mail, FileText, Layers, Search, ShieldCheck } from 'lucide-react';
import { DEFAULT_DIRECTOR } from '../../lib/data';

export default function AcademicsPage() {
  const [director, setDirector] = useState(DEFAULT_DIRECTOR);
  const [selectedModule, setSelectedModule] = useState(null);

  // Showcase section slider indices
  const [overviewIndex, setOverviewIndex] = useState(0);
  const [facultyIndex, setFacultyIndex] = useState(0);
  const [eventsIndex, setEventsIndex] = useState(0);
  const [newsIndex, setNewsIndex] = useState(0);

  // PDF Content Data - Section 1: Overview & Core Requirements
  const overviewSlides = [
    {
      title: "1. Dynamic Academic Portal Overview",
      badge: "DYNAMIC PLATFORM",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800",
      description: "CLESE is envisioned as a modern, interactive, and scalable Academic Portal serving as the institution's central digital platform for presenting academic information, faculty details, events, news, announcements, media, and institutional content.",
      details: "Includes responsive layout across desktop, tablet, and mobile, user-friendly navigation, and up to 10 primary pages (Home, About, Administration, Departments, Faculty, Events, News, Media/Gallery, Academics, Contact)."
    },
    {
      title: "Core Portal Architecture",
      badge: "10 PRIMARY PAGES",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800",
      description: "Designed with modern UI/UX principles, clean visual hierarchy, consistent typography, spacing, and optimized user experience across all screen sizes.",
      details: "Combines modern design, dynamic content management, centralized administration, advanced SEO, and institutional communication."
    }
  ];

  // PDF Content Data - Section 2: Faculty Management Portal
  const facultySlides = [
    {
      title: "2. Dedicated Faculty Management System",
      badge: "FACULTY MODULE",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800",
      description: "Allows the single administrator (CLESE) to create, edit, delete, and organize faculty profiles dynamically without coding knowledge.",
      details: "Each profile captures: Faculty Name, Photograph, Designation, Department, Qualification, Specialization, Professional Bio, and Institutional Contact Info."
    },
    {
      title: "Departmental Organization & Categorization",
      badge: "PROFILE METRICS",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800",
      description: "Faculty members are organized according to departments and categories. Public-facing website pages automatically update live when changes are made.",
      details: "Includes photo uploads, publication metrics counter, experience badges, and direct email contact buttons."
    }
  ];

  // PDF Content Data - Section 3: Event & Media Management Systems
  const eventsSlides = [
    {
      title: "3. Complete Event Management Portal",
      badge: "EVENT SYSTEM",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=800",
      description: "Enables administrators to publish upcoming and past institutional events with titles, detailed descriptions, date/time, venue locations, and photo galleries.",
      details: "Features categorized event archives, upcoming symposia schedules, hybrid conference connect tools, and registration links."
    },
    {
      title: "Dynamic Media & Image Gallery",
      badge: "MEDIA GALLERY",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
      description: "Organizes institutional photos, laboratory facility tours, and workshop media into structured collections with titles and descriptions.",
      details: "Includes lightbox full-screen photo modal viewers, category filter pills (Campus, Labs, Outreach, Events), and image optimization."
    }
  ];

  // PDF Content Data - Section 4: News, SEO & Future Scalability
  const newsSlides = [
    {
      title: "4. News, SEO & System Administration",
      badge: "NEWS & SEO",
      image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&q=80&w=800",
      description: "Includes a News & Announcements Management system for publishing institutional updates, alongside Advanced SEO (Meta titles, Open Graph, Sitemaps, Schema data).",
      details: "Admin panel is protected through secure administrator authentication, input validation, and protected content management."
    },
    {
      title: "Future Scalability & Modular Expansion",
      badge: "MODULAR SCALABILITY",
      image: "https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&q=80&w=800",
      description: "Structured architecture allowing future expansion modules: Student Portal, Faculty Portal, Online Applications, Admissions Management, and Academic Calendars.",
      details: "Target delivery timeline designed within 2 months across 5 phases: Planning, UI/UX Design, Development, Optimization, and Testing."
    }
  ];

  // Degree Courses
  const coursesTaught = [
    { code: "EDU-701", title: "Learning Engineering & Digital Pedagogy", level: "M.Ed / Ph.D.", desc: "Integrating technology, cognitive science, and user-centered design in instruction." },
    { code: "EDU-704", title: "Environmental & Energy Literacy Education", level: "M.Ed Core", desc: "Curriculum models for climate action, zero-carbon education, and field learning." },
    { code: "EDU-802", title: "Advanced Research Methodology & Educational Statistics", level: "Ph.D. Coursework", desc: "Quantitative analytics, quasi-experimental research, and statistical modeling in SPSS & R." },
    { code: "EDU-809", title: "Gender-Responsive STEM Pedagogy", level: "Postgraduate Elective", desc: "Strategies for inclusive STEM participation in rural and underserved institutions." }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 transition-colors duration-300 pb-20">
      {/* Top Warm Glow Hero Section */}
      <div className="relative pt-16 pb-12 overflow-hidden text-center max-w-5xl mx-auto px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-b from-amber-300/30 via-amber-100/20 to-transparent blur-3xl -z-10 rounded-full pointer-events-none" />

        <span className="text-[11px] font-extrabold tracking-widest text-amber-700 dark:text-amber-400 uppercase bg-amber-100 dark:bg-amber-900/40 px-3.5 py-1 rounded-full border border-amber-300 dark:border-amber-700">
          CLESE ACADEMIC PORTAL & SPECIFICATIONS
        </span>

        <h1 className="font-outfit text-5xl sm:text-6xl lg:text-7xl font-black text-slate-900 dark:text-white tracking-tight mt-4">
          ACADEMICS
        </h1>

        <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm max-w-xl mx-auto mt-3 leading-relaxed">
          Official academic portal framework, degree programs, faculty management specifications, and research curricula for CLESE • University of Kerala.
        </p>
      </div>

      {/* Featured Director Card */}
      <div className="max-w-4xl mx-auto px-6 mb-20">
        <div className="relative p-6 sm:p-10 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-2xl shadow-slate-200/60 dark:shadow-slate-950/50 flex flex-col md:flex-row items-center gap-8">
          <div className="relative w-full md:w-72 h-72 rounded-2xl overflow-hidden shadow-lg border border-slate-100 shrink-0">
            {/* eslint-disable-next-html-for-img */}
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/5f/University_of_Kerala.jpg"
              alt="University of Kerala"
              className="w-full h-full object-cover"
            />
            <span className="absolute bottom-3 left-3 bg-amber-400 text-slate-950 text-[10px] font-extrabold px-3 py-1 rounded-md uppercase tracking-wider shadow">
              HONORARY DIRECTOR
            </span>
          </div>

          <div className="space-y-4 text-left">
            <div>
              <h2 className="font-outfit font-extrabold text-3xl text-slate-900 dark:text-white">{director.name}</h2>
              <span className="text-xs font-bold text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/50 px-2.5 py-0.5 rounded-md inline-block mt-1">
                {director.title}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {director.bio}
            </p>

            <div className="grid grid-cols-2 gap-4 py-3 border-y border-slate-100 dark:border-slate-800 text-center">
              <div>
                <span className="font-outfit font-black text-xl text-slate-900 dark:text-white block">20+</span>
                <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block">Indexed Papers</span>
              </div>
              <div>
                <span className="font-outfit font-black text-xl text-slate-900 dark:text-white block">18+</span>
                <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block">Years Leadership</span>
              </div>
            </div>

            <a
              href="mailto:divyasenan@keralauniversity.ac.in"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs shadow-lg shadow-amber-500/25 transition-all hover:scale-105"
            >
              <Mail size={14} />
              <span>Contact Director</span>
            </a>
          </div>
        </div>
      </div>

      {/* Categorized Showcase Sections (Matching Reference Image Layout & PDF Content) */}
      <div className="max-w-4xl mx-auto px-6 space-y-20">
        {/* Section 1: Overview & Core Requirements */}
        <section className="space-y-6">
          <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
            <h2 className="font-outfit font-extrabold text-2xl text-slate-900 dark:text-white flex items-center gap-2">
              <span>Core Requirements & Portal Scope</span>
              <span className="text-amber-500 font-normal">|</span>
            </h2>
            <span className="text-xs text-slate-500 font-semibold">0{overviewIndex + 1} / 0{overviewSlides.length}</span>
          </div>

          <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xl flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-72 h-64 rounded-2xl overflow-hidden shadow border border-slate-100 shrink-0">
              {/* eslint-disable-next-html-for-img */}
              <img
                src={overviewSlides[overviewIndex].image}
                alt={overviewSlides[overviewIndex].title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-4 text-left flex-1">
              <div>
                <h3 className="font-outfit font-bold text-2xl text-slate-900 dark:text-white">{overviewSlides[overviewIndex].title}</h3>
                <span className="text-xs font-bold text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/50 px-2.5 py-0.5 rounded-md inline-block mt-1">
                  {overviewSlides[overviewIndex].badge}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {overviewSlides[overviewIndex].description}
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed bg-slate-50 dark:bg-slate-800/50 p-3 rounded-xl">
                {overviewSlides[overviewIndex].details}
              </p>
              <div className="flex items-center justify-end gap-2 pt-2">
                <button
                  onClick={() => setOverviewIndex((prev) => (prev === 0 ? overviewSlides.length - 1 : prev - 1))}
                  className="w-9 h-9 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 flex items-center justify-center hover:bg-amber-500 hover:text-white transition-colors"
                >
                  <ArrowLeft size={16} />
                </button>
                <button
                  onClick={() => setOverviewIndex((prev) => (prev === overviewSlides.length - 1 ? 0 : prev + 1))}
                  className="w-9 h-9 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 flex items-center justify-center hover:bg-amber-500 hover:text-white transition-colors"
                >
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Faculty Management System */}
        <section className="space-y-6">
          <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
            <h2 className="font-outfit font-extrabold text-2xl text-slate-900 dark:text-white flex items-center gap-2">
              <span>Faculty Management System</span>
              <span className="text-amber-500 font-normal">|</span>
            </h2>
            <span className="text-xs text-slate-500 font-semibold">0{facultyIndex + 1} / 0{facultySlides.length}</span>
          </div>

          <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xl flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-72 h-64 rounded-2xl overflow-hidden shadow border border-slate-100 shrink-0">
              {/* eslint-disable-next-html-for-img */}
              <img
                src={facultySlides[facultyIndex].image}
                alt={facultySlides[facultyIndex].title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-4 text-left flex-1">
              <div>
                <h3 className="font-outfit font-bold text-2xl text-slate-900 dark:text-white">{facultySlides[facultyIndex].title}</h3>
                <span className="text-xs font-bold text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/50 px-2.5 py-0.5 rounded-md inline-block mt-1">
                  {facultySlides[facultyIndex].badge}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {facultySlides[facultyIndex].description}
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed bg-slate-50 dark:bg-slate-800/50 p-3 rounded-xl">
                {facultySlides[facultyIndex].details}
              </p>
              <div className="flex items-center justify-end gap-2 pt-2">
                <button
                  onClick={() => setFacultyIndex((prev) => (prev === 0 ? facultySlides.length - 1 : prev - 1))}
                  className="w-9 h-9 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 flex items-center justify-center hover:bg-amber-500 hover:text-white transition-colors"
                >
                  <ArrowLeft size={16} />
                </button>
                <button
                  onClick={() => setFacultyIndex((prev) => (prev === facultySlides.length - 1 ? 0 : prev + 1))}
                  className="w-9 h-9 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 flex items-center justify-center hover:bg-amber-500 hover:text-white transition-colors"
                >
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Event & Media Management */}
        <section className="space-y-6">
          <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
            <h2 className="font-outfit font-extrabold text-2xl text-slate-900 dark:text-white flex items-center gap-2">
              <span>Event & Media Gallery Portal</span>
              <span className="text-amber-500 font-normal">|</span>
            </h2>
            <span className="text-xs text-slate-500 font-semibold">0{eventsIndex + 1} / 0{eventsSlides.length}</span>
          </div>

          <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xl flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-72 h-64 rounded-2xl overflow-hidden shadow border border-slate-100 shrink-0">
              {/* eslint-disable-next-html-for-img */}
              <img
                src={eventsSlides[eventsIndex].image}
                alt={eventsSlides[eventsIndex].title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-4 text-left flex-1">
              <div>
                <h3 className="font-outfit font-bold text-2xl text-slate-900 dark:text-white">{eventsSlides[eventsIndex].title}</h3>
                <span className="text-xs font-bold text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/50 px-2.5 py-0.5 rounded-md inline-block mt-1">
                  {eventsSlides[eventsIndex].badge}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {eventsSlides[eventsIndex].description}
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed bg-slate-50 dark:bg-slate-800/50 p-3 rounded-xl">
                {eventsSlides[eventsIndex].details}
              </p>
              <div className="flex items-center justify-end gap-2 pt-2">
                <button
                  onClick={() => setEventsIndex((prev) => (prev === 0 ? eventsSlides.length - 1 : prev - 1))}
                  className="w-9 h-9 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 flex items-center justify-center hover:bg-amber-500 hover:text-white transition-colors"
                >
                  <ArrowLeft size={16} />
                </button>
                <button
                  onClick={() => setEventsIndex((prev) => (prev === eventsSlides.length - 1 ? 0 : prev + 1))}
                  className="w-9 h-9 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 flex items-center justify-center hover:bg-amber-500 hover:text-white transition-colors"
                >
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: News, SEO & Administration */}
        <section className="space-y-6">
          <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
            <h2 className="font-outfit font-extrabold text-2xl text-slate-900 dark:text-white flex items-center gap-2">
              <span>News, SEO & Administration</span>
              <span className="text-amber-500 font-normal">|</span>
            </h2>
            <span className="text-xs text-slate-500 font-semibold">0{newsIndex + 1} / 0{newsSlides.length}</span>
          </div>

          <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xl flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-72 h-64 rounded-2xl overflow-hidden shadow border border-slate-100 shrink-0">
              {/* eslint-disable-next-html-for-img */}
              <img
                src={newsSlides[newsIndex].image}
                alt={newsSlides[newsIndex].title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-4 text-left flex-1">
              <div>
                <h3 className="font-outfit font-bold text-2xl text-slate-900 dark:text-white">{newsSlides[newsIndex].title}</h3>
                <span className="text-xs font-bold text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/50 px-2.5 py-0.5 rounded-md inline-block mt-1">
                  {newsSlides[newsIndex].badge}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {newsSlides[newsIndex].description}
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed bg-slate-50 dark:bg-slate-800/50 p-3 rounded-xl">
                {newsSlides[newsIndex].details}
              </p>
              <div className="flex items-center justify-end gap-2 pt-2">
                <button
                  onClick={() => setNewsIndex((prev) => (prev === 0 ? newsSlides.length - 1 : prev - 1))}
                  className="w-9 h-9 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 flex items-center justify-center hover:bg-amber-500 hover:text-white transition-colors"
                >
                  <ArrowLeft size={16} />
                </button>
                <button
                  onClick={() => setNewsIndex((prev) => (prev === newsSlides.length - 1 ? 0 : prev + 1))}
                  className="w-9 h-9 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 flex items-center justify-center hover:bg-amber-500 hover:text-white transition-colors"
                >
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Bottom Courses & Modules Grid */}
      <div className="max-w-4xl mx-auto px-6 mt-20 space-y-6">
        <div className="text-center space-y-1">
          <h3 className="font-outfit font-extrabold text-2xl text-slate-900 dark:text-white">Postgraduate Academic Modules</h3>
          <p className="text-xs text-slate-500">Degree programs and coursework offered under CLESE Department of Education</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {coursesTaught.map((course, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedModule(course)}
              className="group cursor-pointer p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-md hover:shadow-xl transition-all space-y-2"
            >
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-0.5 rounded bg-amber-100 dark:bg-amber-900/40 text-amber-800 dark:text-amber-300 text-[11px] font-bold">
                  {course.code}
                </span>
                <span className="text-[10px] font-bold text-slate-400">{course.level}</span>
              </div>
              <h4 className="font-outfit font-bold text-base text-slate-900 dark:text-white group-hover:text-amber-600 transition-colors">
                {course.title}
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">{course.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Module Modal */}
      {selectedModule && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4" onClick={() => setSelectedModule(null)}>
          <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 max-w-md w-full space-y-4" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 rounded bg-amber-400 text-slate-950 font-bold text-xs">{selectedModule.code}</span>
              <button onClick={() => setSelectedModule(null)} className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-900">
                <X size={18} />
              </button>
            </div>
            <h3 className="font-outfit font-bold text-xl text-slate-900 dark:text-white">{selectedModule.title}</h3>
            <p className="text-xs font-semibold text-amber-600 dark:text-amber-400">Level: {selectedModule.level}</p>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">{selectedModule.desc}</p>
          </div>
        </div>
      )}
    </div>
  );
}
