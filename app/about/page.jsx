'use client';
import React from 'react';
import Link from 'next/link';
import {
  Home,
  ArrowRight,
  Play,
  FlaskConical,
  Leaf,
  Lightbulb,
  Users,
  Calendar,
  Building2,
  MapPin,
  Eye,
  GraduationCap,
  BookOpen,
  HeartHandshake,
  CheckSquare,
  ShieldCheck,
  Mail,
  Globe,
  Brain,
  Wrench,
  UserCheck
} from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#f8fafc] dark:bg-[#090d16] text-slate-800 dark:text-slate-100 transition-colors duration-300 pb-24 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">


        {/* ============================================================ */}
        {/* HERO SECTION: Title & e1.png with 4 Floating Cards          */}
        {/* ============================================================ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-2">

          {/* Left Column: Text Content */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-[11px] font-extrabold tracking-widest text-emerald-600 dark:text-emerald-400 uppercase bg-emerald-50 dark:bg-emerald-950/60 px-3 py-1 rounded-md border border-emerald-200 dark:border-emerald-800/60">
                ABOUT CLESE
              </span>
            </div>

            <h1 className="font-outfit text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white leading-[1.1] tracking-tight">
              Engineering <br />
              <span className="text-slate-900 dark:text-white">Learning.</span> <br />
              <span className="text-emerald-600 dark:text-emerald-400">Sustaining</span> Tomorrow.
            </h1>

            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl">
              Established in 2024, CLESE promotes innovative, inclusive and sustainable approaches to education with a special focus on STEM (Science, Technology, Engineering and Mathematics) education.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#who-we-are"
                className="bg-emerald-700 hover:bg-emerald-800 text-white font-semibold px-6 py-3 rounded-full text-sm flex items-center gap-2 shadow-lg shadow-emerald-700/25 transition-all hover:-translate-y-0.5"
              >
                <span>Our Journey</span>
                <ArrowRight size={16} />
              </a>

              <button
                onClick={() => alert("Watch Overview Video coming soon!")}
                className="bg-white dark:bg-slate-800/80 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 font-semibold px-6 py-3 rounded-full text-sm border border-slate-200 dark:border-slate-700 flex items-center gap-2 shadow-sm transition-all hover:-translate-y-0.5"
              >
                <div className="w-5 h-5 rounded-full bg-emerald-100 dark:bg-emerald-900/50 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                  <Play size={10} className="fill-current ml-0.5" />
                </div>
                <span>Watch Overview</span>
              </button>
            </div>
          </div>

          {/* Right Column: e1.png Hero Graphic with 4 floating cards */}
          <div className="lg:col-span-6 relative flex items-center justify-center pt-6 lg:pt-0">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-200/30 via-sky-200/20 to-indigo-200/20 dark:from-emerald-900/20 dark:via-sky-900/10 dark:to-indigo-900/10 blur-3xl rounded-full -z-10" />

            {/* Central e1.png image container */}
            <div className="relative w-full max-w-lg rounded-3xl overflow-hidden shadow-2xl border border-slate-100 dark:border-slate-800 bg-white/40 dark:bg-slate-900/40 backdrop-blur-sm p-2">
              <img
                src="/e1.png"
                alt="CLESE Eco Island STEM World"
                className="w-full h-auto object-cover rounded-2xl transition-transform duration-700 hover:scale-[1.02]"
              />

              {/* Floating Badge 1: Top Left - STEM Education */}
              <div className="absolute top-4 left-4 sm:-left-3 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md p-3 rounded-2xl shadow-xl border border-slate-200/70 dark:border-slate-800 flex items-center gap-3 max-w-[210px] sm:max-w-[230px]">
                <div className="w-9 h-9 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0">
                  <FlaskConical size={18} />
                </div>
                <div>
                  <h4 className="font-outfit font-bold text-xs text-slate-900 dark:text-white">STEM Education</h4>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400 leading-tight mt-0.5">Hands-on & experiential learning for all</p>
                </div>
              </div>

              {/* Floating Badge 2: Top Right - Sustainability */}
              <div className="absolute top-4 right-4 sm:-right-3 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md p-3 rounded-2xl shadow-xl border border-slate-200/70 dark:border-slate-800 flex items-center gap-3 max-w-[210px] sm:max-w-[230px]">
                <div className="w-9 h-9 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                  <Leaf size={18} />
                </div>
                <div>
                  <h4 className="font-outfit font-bold text-xs text-slate-900 dark:text-white">Sustainability</h4>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400 leading-tight mt-0.5">Learning today for a sustainable tomorrow</p>
                </div>
              </div>

              {/* Floating Badge 3: Bottom Left - Innovation */}
              <div className="absolute bottom-4 left-4 sm:-left-3 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md p-3 rounded-2xl shadow-xl border border-slate-200/70 dark:border-slate-800 flex items-center gap-3 max-w-[210px] sm:max-w-[230px]">
                <div className="w-9 h-9 rounded-xl bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0">
                  <Lightbulb size={18} />
                </div>
                <div>
                  <h4 className="font-outfit font-bold text-xs text-slate-900 dark:text-white">Innovation</h4>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400 leading-tight mt-0.5">Encouraging creativity and problem solving</p>
                </div>
              </div>

              {/* Floating Badge 4: Bottom Right - Inclusion */}
              <div className="absolute bottom-4 right-4 sm:-right-3 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md p-3 rounded-2xl shadow-xl border border-slate-200/70 dark:border-slate-800 flex items-center gap-3 max-w-[210px] sm:max-w-[230px]">
                <div className="w-9 h-9 rounded-xl bg-sky-50 dark:bg-sky-950/60 text-sky-600 dark:text-sky-400 flex items-center justify-center shrink-0">
                  <Users size={18} />
                </div>
                <div>
                  <h4 className="font-outfit font-bold text-xs text-slate-900 dark:text-white">Inclusion</h4>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400 leading-tight mt-0.5">Bringing equal opportunities to all</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* ============================================================ */}
        {/* ROW 2: WHO WE ARE & AT A GLANCE                             */}
        {/* ============================================================ */}
        <div id="who-we-are" className="grid grid-cols-1 lg:grid-cols-12 gap-8">

          {/* Left Box: WHO WE ARE */}
          <div className="lg:col-span-7 bg-white dark:bg-slate-900/80 rounded-3xl p-7 sm:p-9 border border-slate-200/80 dark:border-slate-800 shadow-sm flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <span className="text-[11px] font-extrabold tracking-widest text-emerald-600 dark:text-emerald-400 uppercase bg-emerald-50 dark:bg-emerald-950/50 px-3 py-1 rounded-md border border-emerald-200 dark:border-emerald-800/60">
                WHO WE ARE
              </span>

              <h2 className="font-outfit text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                About the Centre
              </h2>

              <div className="space-y-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                <p>
                  CLESE serves as a platform for academic engagement, capacity building, knowledge sharing and collaborative initiatives aimed at strengthening learning and teaching practices.
                </p>
                <p>
                  The Centre organizes seminars, workshops, conferences, training programmes and academic activities in emerging areas of education, learning engineering, sustainability and STEM.
                </p>
                <p>
                  We provide hands-on and experiential STEM learning opportunities for school students, teachers, prospective teachers, scholars and other stakeholders.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => {
                  const el = document.getElementById('what-makes-us-unique');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs font-bold text-slate-700 dark:text-slate-200 hover:bg-emerald-50 dark:hover:bg-slate-700 hover:text-emerald-700 transition-colors"
              >
                <span>Explore More</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </div>

          {/* Right Box: AT A GLANCE */}
          <div className="lg:col-span-5 bg-white dark:bg-slate-900/80 rounded-3xl p-7 sm:p-9 border border-slate-200/80 dark:border-slate-800 shadow-sm flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <span className="text-[11px] font-extrabold tracking-widest text-emerald-600 dark:text-emerald-400 uppercase bg-emerald-50 dark:bg-emerald-950/50 px-3 py-1 rounded-md border border-emerald-200 dark:border-emerald-800/60">
                AT A GLANCE
              </span>

              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 gap-6 pt-2">

                {/* Stat 1 */}
                <div className="space-y-1">
                  <div className="w-10 h-10 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                    <Calendar size={20} />
                  </div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider pt-1">EST.</div>
                  <div className="font-outfit text-3xl font-black text-slate-900 dark:text-white">2024</div>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">The Journey Has Begun</p>
                </div>

                {/* Stat 2 */}
                <div className="space-y-1">
                  <div className="w-10 h-10 rounded-2xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
                    <Building2 size={20} />
                  </div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider pt-1">SCHOOLS</div>
                  <div className="font-outfit text-3xl font-black text-slate-900 dark:text-white">44</div>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">Schools in Kerala</p>
                </div>

                {/* Stat 3 */}
                <div className="space-y-1">
                  <div className="w-10 h-10 rounded-2xl bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 flex items-center justify-center">
                    <Users size={20} />
                  </div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider pt-1">STUDENTS</div>
                  <div className="font-outfit text-3xl font-black text-slate-900 dark:text-white">56+</div>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">Gifted Students Supported</p>
                </div>

                {/* Stat 4 */}
                <div className="space-y-1">
                  <div className="w-10 h-10 rounded-2xl bg-sky-50 dark:bg-sky-950/60 text-sky-600 dark:text-sky-400 flex items-center justify-center">
                    <MapPin size={20} />
                  </div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider pt-1">DISTRICTS</div>
                  <div className="font-outfit text-3xl font-black text-slate-900 dark:text-white">41</div>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">Educational Districts Engaged</p>
                </div>

              </div>
            </div>

            {/* Bottom Dotted Connector */}
            <div className="pt-2 flex justify-center">
              <svg className="w-full h-4 text-emerald-400/40" viewBox="0 0 300 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 6 Q 75 12, 150 6 T 300 6" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" fill="none" />
                <circle cx="150" cy="6" r="3" fill="currentColor" />
              </svg>
            </div>
          </div>

        </div>

        {/* ============================================================ */}
        {/* ROW 3: e2.png Image (Left) & OUR MISSION / OUR VISION (Right)*/}
        {/* ============================================================ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

          {/* Left Column: e2.png 3D Platform Graphic */}
          <div className="lg:col-span-6 rounded-3xl overflow-hidden bg-white dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 shadow-sm p-3 flex items-center justify-center">
            <img
              src="/e2.png"
              alt="CLESE Learning Platform & Ecosystem"
              className="w-full h-auto object-cover rounded-2xl transition-transform duration-700 hover:scale-[1.01]"
            />
          </div>

          {/* Right Column: OUR MISSION & OUR VISION */}
          <div className="lg:col-span-6 flex flex-col gap-6 justify-between">

            {/* Mission Box */}
            <div className="bg-white dark:bg-slate-900/80 rounded-3xl p-7 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-3 flex-1 flex flex-col justify-center">
              <span className="text-[11px] font-extrabold tracking-widest text-emerald-600 dark:text-emerald-400 uppercase bg-emerald-50 dark:bg-emerald-950/50 px-3 py-1 rounded-md border border-emerald-200 dark:border-emerald-800/60 w-max">
                OUR MISSION
              </span>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed pt-1">
                To build a strong ecosystem for innovative education, promote equitable access to STEM learning, empower teachers and learners, and contribute to the development of a scientifically literate, creative and sustainable society.
              </p>
            </div>

            {/* Vision Box */}
            <div className="bg-emerald-50/60 dark:bg-emerald-950/30 rounded-3xl p-7 border border-emerald-200/70 dark:border-emerald-900/50 shadow-sm flex items-center justify-between gap-4 flex-1">
              <div className="space-y-3 max-w-md">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-emerald-600 text-white flex items-center justify-center">
                    <Eye size={16} />
                  </div>
                  <span className="text-[11px] font-extrabold tracking-widest text-emerald-700 dark:text-emerald-300 uppercase">
                    OUR VISION
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed font-medium">
                  To be a leading centre that transforms education through learning engineering and sustainability, creating impact locally and globally.
                </p>
              </div>

              {/* Plant Graphic inside glass dish */}
              <div className="hidden sm:flex shrink-0 w-20 h-20 rounded-2xl bg-white/80 dark:bg-slate-900/80 border border-emerald-200 dark:border-emerald-800 items-center justify-center shadow-md">
                <Leaf size={36} className="text-emerald-500 animate-pulse" />
              </div>
            </div>

          </div>

        </div>

        {/* ============================================================ */}
        {/* ROW 4: WHAT MAKES US UNIQUE & OUR SUSTAINABILITY MODEL       */}
        {/* ============================================================ */}
        <div id="what-makes-us-unique" className="grid grid-cols-1 lg:grid-cols-12 gap-8">

          {/* Left Column: WHAT MAKES US UNIQUE */}
          <div className="lg:col-span-7 bg-white dark:bg-slate-900/80 rounded-3xl p-7 sm:p-9 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-6">
            <div>
              <span className="text-[11px] font-extrabold tracking-widest text-emerald-600 dark:text-emerald-400 uppercase bg-emerald-50 dark:bg-emerald-950/50 px-3 py-1 rounded-md border border-emerald-200 dark:border-emerald-800/60">
                WHAT MAKES US UNIQUE
              </span>
              <h2 className="font-outfit text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-3">
                A Different Approach to Education
              </h2>
            </div>

            {/* 6 Feature Items */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-1">

              <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 space-y-1.5">
                <div className="w-8 h-8 rounded-xl bg-emerald-100 dark:bg-emerald-900/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                  <FlaskConical size={16} />
                </div>
                <h4 className="font-outfit font-bold text-xs text-slate-900 dark:text-white">Hands-on STEM Learning Lab</h4>
                <p className="text-[10px] text-slate-500 dark:text-slate-400 leading-tight">Practical, activity-based STEM training</p>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 space-y-1.5">
                <div className="w-8 h-8 rounded-xl bg-sky-100 dark:bg-sky-900/60 text-sky-600 dark:text-sky-400 flex items-center justify-center">
                  <Building2 size={16} />
                </div>
                <h4 className="font-outfit font-bold text-xs text-slate-900 dark:text-white">Collaborative Partnerships</h4>
                <p className="text-[10px] text-slate-500 dark:text-slate-400 leading-tight">Working with reputed institutions & organizations</p>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 space-y-1.5">
                <div className="w-8 h-8 rounded-xl bg-indigo-100 dark:bg-indigo-900/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
                  <Globe size={16} />
                </div>
                <h4 className="font-outfit font-bold text-xs text-slate-900 dark:text-white">Global Academic Engagement</h4>
                <p className="text-[10px] text-slate-500 dark:text-slate-400 leading-tight">International collaboration with Clarkson University, USA</p>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 space-y-1.5">
                <div className="w-8 h-8 rounded-xl bg-amber-100 dark:bg-amber-900/60 text-amber-600 dark:text-amber-400 flex items-center justify-center">
                  <GraduationCap size={16} />
                </div>
                <h4 className="font-outfit font-bold text-xs text-slate-900 dark:text-white">Teacher Capacity Building</h4>
                <p className="text-[10px] text-slate-500 dark:text-slate-400 leading-tight">Empowering teachers with skills & innovative practices</p>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 space-y-1.5">
                <div className="w-8 h-8 rounded-xl bg-purple-100 dark:bg-purple-900/60 text-purple-600 dark:text-purple-400 flex items-center justify-center">
                  <BookOpen size={16} />
                </div>
                <h4 className="font-outfit font-bold text-xs text-slate-900 dark:text-white">Research & Knowledge Sharing</h4>
                <p className="text-[10px] text-slate-500 dark:text-slate-400 leading-tight">Scholar connect series, lectures & joint projects</p>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 space-y-1.5">
                <div className="w-8 h-8 rounded-xl bg-rose-100 dark:bg-rose-900/60 text-rose-600 dark:text-rose-400 flex items-center justify-center">
                  <HeartHandshake size={16} />
                </div>
                <h4 className="font-outfit font-bold text-xs text-slate-900 dark:text-white">Social Responsibility & Inclusion</h4>
                <p className="text-[10px] text-slate-500 dark:text-slate-400 leading-tight">Supporting rural & disadvantaged students</p>
              </div>

            </div>

            {/* Bottom Quote Banner */}
            <div className="p-4 rounded-2xl bg-emerald-50/70 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60 flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 font-serif font-black text-lg">
                &ldquo;
              </div>
              <p className="text-xs text-slate-700 dark:text-slate-200 font-medium flex-1">
                Programme fees are utilized to support STEM education for socially and economically disadvantaged students in rural schools across Kerala.
              </p>
              <div className="w-6 h-6 text-emerald-500 font-serif font-black text-xl flex items-center justify-center opacity-40">
                &rdquo;
              </div>
            </div>
          </div>

          {/* Right Column: OUR SUSTAINABILITY MODEL */}
          <div className="lg:col-span-5 bg-white dark:bg-slate-900/80 rounded-3xl p-7 sm:p-9 border border-slate-200/80 dark:border-slate-800 shadow-sm flex flex-col justify-between space-y-6">
            <div>
              <span className="text-[11px] font-extrabold tracking-widest text-emerald-600 dark:text-emerald-400 uppercase bg-emerald-50 dark:bg-emerald-950/50 px-3 py-1 rounded-md border border-emerald-200 dark:border-emerald-800/60">
                OUR SUSTAINABILITY MODEL
              </span>
            </div>

            {/* Circular Model Graphic */}
            <div className="relative py-8 flex items-center justify-center">

              {/* Outer Decorative Ring */}
              <div className="w-64 h-64 rounded-full border-2 border-dashed border-emerald-400/40 dark:border-emerald-600/40 flex items-center justify-center relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-emerald-500 rounded-full shadow-md" />
              </div>

              {/* Center Plant Sprout */}
              <div className="absolute inset-0 m-auto w-24 h-24 rounded-full bg-gradient-to-tr from-emerald-100 to-sky-100 dark:from-emerald-950 dark:to-slate-900 border-2 border-emerald-300 dark:border-emerald-700 flex items-center justify-center shadow-inner">
                <Leaf size={38} className="text-emerald-600 dark:text-emerald-400" />
              </div>

              {/* Node 1: Top Left - Learn */}
              <div className="absolute -top-1 left-2 sm:left-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm p-3 rounded-2xl shadow-md border border-slate-200 dark:border-slate-800 flex items-center gap-2.5 max-w-[150px]">
                <div className="w-7 h-7 rounded-lg bg-indigo-100 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0">
                  <Brain size={14} />
                </div>
                <div>
                  <h4 className="font-outfit font-bold text-xs text-slate-900 dark:text-white">Learn</h4>
                  <p className="text-[9px] text-slate-500 leading-tight">Building knowledge and skills</p>
                </div>
              </div>

              {/* Node 2: Top Right - Apply */}
              <div className="absolute -top-1 right-2 sm:right-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm p-3 rounded-2xl shadow-md border border-slate-200 dark:border-slate-800 flex items-center gap-2.5 max-w-[150px]">
                <div className="w-7 h-7 rounded-lg bg-sky-100 dark:bg-sky-950 text-sky-600 dark:text-sky-400 flex items-center justify-center shrink-0">
                  <Wrench size={14} />
                </div>
                <div>
                  <h4 className="font-outfit font-bold text-xs text-slate-900 dark:text-white">Apply</h4>
                  <p className="text-[9px] text-slate-500 leading-tight">Using technology for real-world solutions</p>
                </div>
              </div>

              {/* Node 3: Bottom Left - Empower */}
              <div className="absolute -bottom-1 left-2 sm:left-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm p-3 rounded-2xl shadow-md border border-slate-200 dark:border-slate-800 flex items-center gap-2.5 max-w-[150px]">
                <div className="w-7 h-7 rounded-lg bg-amber-100 dark:bg-amber-950 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0">
                  <UserCheck size={14} />
                </div>
                <div>
                  <h4 className="font-outfit font-bold text-xs text-slate-900 dark:text-white">Empower</h4>
                  <p className="text-[9px] text-slate-500 leading-tight">Empowering communities and future leaders</p>
                </div>
              </div>

              {/* Node 4: Bottom Right - Sustain */}
              <div className="absolute -bottom-1 right-2 sm:right-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm p-3 rounded-2xl shadow-md border border-slate-200 dark:border-slate-800 flex items-center gap-2.5 max-w-[150px]">
                <div className="w-7 h-7 rounded-lg bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                  <ShieldCheck size={14} />
                </div>
                <div>
                  <h4 className="font-outfit font-bold text-xs text-slate-900 dark:text-white">Sustain</h4>
                  <p className="text-[9px] text-slate-500 leading-tight">Creating long-term social & environmental impact</p>
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* ============================================================ */}
        {/* ROW 5: "Be a Part of the Change" CTA Banner                  */}
        {/* ============================================================ */}
        <div className="relative rounded-[2rem] overflow-hidden shadow-sm bg-gradient-to-r from-[#eef4fc] to-[#f4f9ff] flex flex-col xl:flex-row items-stretch min-h-[350px]">

          {/* Left Content (Text) */}
          <div className="w-full xl:w-[35%] shrink-0 flex flex-col justify-center items-center xl:items-start p-10 sm:p-12 lg:pl-16 z-10 space-y-4 text-center xl:text-left">
            <h2 className="font-outfit text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Be a Part of the <br className="hidden xl:block" />
              <span className="text-emerald-700">Change</span>
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed max-w-xs font-medium">
              Together, let's build a future where education drives innovation and sustainability.
            </p>
            <div className="pt-4">
              <Link
                href="/contact"
                className="bg-emerald-700 hover:bg-emerald-800 text-white font-semibold px-7 py-3 rounded-full text-sm inline-flex items-center gap-2 shadow-xl shadow-emerald-700/20 transition-all hover:-translate-y-1"
              >
                <span>Get Involved</span>
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>

          {/* Right Content (Image + Icons) */}
          <div className="relative flex-1 w-full min-h-[250px] xl:min-h-[350px] flex flex-col justify-start xl:overflow-visible overflow-hidden">

            {/* Background Image e33.png anchored to the bottom right */}
            <img
              src="/e33.png"
              alt="Futuristic Eco Green Landscape"
              className="absolute bottom-0 right-0 w-full xl:w-[120%] max-w-none h-auto object-contain object-bottom pointer-events-none z-0"
            />

            {/* The 4 Floating Icons */}
            <div className="relative z-10 w-full flex flex-row items-start justify-around px-2 pt-8 xl:pt-14 pb-10 xl:pb-0">

              {/* Inspiration */}
              <div className="flex flex-col items-center text-center group">
                <div className="mb-3 p-2.5 sm:p-3 rounded-xl bg-white/70 backdrop-blur-sm shadow-sm border border-white/60 text-slate-800 transition-transform duration-300 group-hover:-translate-y-1">
                  <GraduationCap size={24} strokeWidth={1.5} />
                </div>
                <h4 className="font-outfit font-extrabold text-[11px] sm:text-sm text-slate-900 mb-0.5">Inspiration</h4>
                <p className="hidden sm:block text-[9px] sm:text-[11px] text-slate-600 font-medium leading-tight max-w-[100px]">Igniting curiosity and creativity</p>
              </div>

              {/* Collaboration */}
              <div className="flex flex-col items-center text-center group">
                <div className="mb-3 p-2.5 sm:p-3 rounded-xl bg-white/70 backdrop-blur-sm shadow-sm border border-white/60 text-slate-800 transition-transform duration-300 group-hover:-translate-y-1">
                  <Users size={24} strokeWidth={1.5} />
                </div>
                <h4 className="font-outfit font-extrabold text-[11px] sm:text-sm text-slate-900 mb-0.5">Collaboration</h4>
                <p className="hidden sm:block text-[9px] sm:text-[11px] text-slate-600 font-medium leading-tight max-w-[100px]">Stronger together for greater impact</p>
              </div>

              {/* Innovation */}
              <div className="flex flex-col items-center text-center group">
                <div className="mb-3 p-2.5 sm:p-3 rounded-xl bg-white/70 backdrop-blur-sm shadow-sm border border-white/60 text-emerald-700 transition-transform duration-300 group-hover:-translate-y-1">
                  <BookOpen size={24} strokeWidth={1.5} />
                </div>
                <h4 className="font-outfit font-extrabold text-[11px] sm:text-sm text-slate-900 mb-0.5">Innovation</h4>
                <p className="hidden sm:block text-[9px] sm:text-[11px] text-slate-600 font-medium leading-tight max-w-[100px]">Shaping the future with new ideas</p>
              </div>

              {/* Sustainability */}
              <div className="flex flex-col items-center text-center group">
                <div className="mb-3 p-2.5 sm:p-3 rounded-xl bg-white/70 backdrop-blur-sm shadow-sm border border-white/60 text-emerald-700 transition-transform duration-300 group-hover:-translate-y-1">
                  <Leaf size={24} strokeWidth={1.5} />
                </div>
                <h4 className="font-outfit font-extrabold text-[11px] sm:text-sm text-slate-900 mb-0.5">Sustainability</h4>
                <p className="hidden sm:block text-[9px] sm:text-[11px] text-slate-600 font-medium leading-tight max-w-[100px]">Building a better world for all</p>
              </div>

            </div>

          </div>
        </div>

        {/* ============================================================ */}
        {/* ROW 6: Our Collaborations & Let's Connect                    */}
        {/* ============================================================ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

          {/* Left Column: Our Collaborations */}
          <div className="lg:col-span-8 bg-white dark:bg-slate-900/80 rounded-3xl p-7 sm:p-9 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-6">
            <h3 className="font-outfit text-xl font-extrabold text-slate-900 dark:text-white">
              Our Collaborations
            </h3>

            {/* Institutional partner badges grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">

              <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 text-center flex flex-col items-center justify-center space-y-1">
                <div className="w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300 font-extrabold text-xs flex items-center justify-center">
                  SIET
                </div>
                <span className="text-[10px] font-bold text-slate-700 dark:text-slate-300">Govt. of Kerala</span>
              </div>

              <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 text-center flex flex-col items-center justify-center space-y-1">
                <div className="w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300 font-extrabold text-xs flex items-center justify-center">
                  RF
                </div>
                <span className="text-[10px] font-bold text-slate-700 dark:text-slate-300">REFORM</span>
              </div>

              <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 text-center flex flex-col items-center justify-center space-y-1">
                <div className="w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300 font-extrabold text-xs flex items-center justify-center">
                  CDC
                </div>
                <span className="text-[10px] font-bold text-slate-700 dark:text-slate-300">Child Dev. Centre</span>
              </div>

              <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 text-center flex flex-col items-center justify-center space-y-1">
                <div className="w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300 font-extrabold text-xs flex items-center justify-center">
                  CU
                </div>
                <span className="text-[10px] font-bold text-slate-700 dark:text-slate-300">Clarkson Univ. USA</span>
              </div>

            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2 border-t border-slate-100 dark:border-slate-800">
              <div>
                <h4 className="font-outfit font-bold text-xs text-slate-900 dark:text-white">Global Collaborations</h4>
                <p className="text-[11px] text-slate-500 dark:text-slate-400">Expanding knowledge, sharing expertise and shaping the future of STEM education.</p>
              </div>
              <Link
                href="/outreach"
                className="text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline flex items-center gap-1 shrink-0"
              >
                <span>View All Collaborations</span>
                <ArrowRight size={12} />
              </Link>
            </div>
          </div>

          {/* Right Column: Let's Connect */}
          <div className="lg:col-span-4 bg-white dark:bg-slate-900/80 rounded-3xl p-7 sm:p-9 border border-slate-200/80 dark:border-slate-800 shadow-sm flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                <Mail size={20} />
              </div>
              <h3 className="font-outfit text-xl font-extrabold text-slate-900 dark:text-white">
                Let's Connect
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                Have questions or ideas? We'd love to hear from you.
              </p>
            </div>

            <div>
              <Link
                href="/contact"
                className="w-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-white font-bold py-3 rounded-full text-xs flex items-center justify-center gap-2 border border-slate-200 dark:border-slate-700 transition-colors"
              >
                <span>Contact Us</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
