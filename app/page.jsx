import React from 'react';
import {
  ArrowRight, Play, Leaf, Users, Sprout, GraduationCap, Landmark,
  BookOpen, User, FlaskConical, Monitor, Atom, Network
} from 'lucide-react';

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#031008] text-white font-['Plus_Jakarta_Sans',sans-serif] overflow-x-hidden selection:bg-[#a2d45e]/30 selection:text-white">
      
      {/* ========================================================================= */}
      {/* GLOBAL FIXED BACKGROUND: Seamless atmospheric dark forest & sunlight */}
      {/* ========================================================================= */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Dark Mode Background */}
        <img
          src="/home/bg.png"
          alt="Dark mode forest background"
          className="hidden dark:block w-full h-full object-cover opacity-85 object-top"
        />
        {/* Light Mode Background */}
        <img
          src="/home/light.png"
          alt="Light mode background"
          className="block dark:hidden w-full h-full object-cover opacity-85 object-top"
        />
        {/* Soft atmospheric gradient for pristine contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#03140c]/25 via-[#031008]/45 to-[#020b06]/95"></div>
      </div>

      {/* Main Page Content Wrapper */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 lg:pt-32 pb-24">
        
        {/* ========================================================================= */}
        {/* 1. HERO SECTION */}
        {/* ========================================================================= */}
        <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-2 relative min-h-[580px] lg:min-h-[660px]">

          {/* Left Hero Column */}
          <div className="flex-1 w-full flex z-20 pt-4">
            
            {/* Timeline Step Indicator */}
            <div className="hidden md:flex flex-col items-center mr-8 pt-4 select-none">
              <div className="w-2.5 h-2.5 rounded-full bg-[#a2d45e] shadow-[0_0_12px_#a2d45e] mb-3"></div>
              <div className="w-[1.5px] h-16 bg-gradient-to-b from-[#a2d45e] to-emerald-800/40 mb-3"></div>
              <span className="text-slate-400 text-xs font-medium mb-3">02</span>
              <span className="text-slate-400 text-xs font-medium">03</span>
            </div>

            {/* Hero Main Copy */}
            <div className="flex-1">
              <p className="text-[#c6db49] text-xs font-bold tracking-[0.2em] uppercase mb-4 font-['Outfit'] drop-shadow-md">
                Connecting Ideas. Engineering Learning.
              </p>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-normal text-white mb-6 leading-[1.08] font-serif tracking-tight">
                Shaping a <br />
                Sustainable <br />
                <span className="italic text-[#dcf4ba] drop-shadow-[0_0_30px_rgba(162,212,94,0.4)]">
                  Tomorrow.
                </span>
              </h1>
              
              <p className="text-slate-200 text-sm sm:text-base max-w-lg mb-10 leading-relaxed font-light drop-shadow-sm">
                CLESE is a platform for innovative STEM education, learning engineering, research and sustainability &mdash; empowering learners, teachers and communities for a better future.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4">
                <button className="pl-7 pr-3 py-2.5 rounded-full bg-gradient-to-r from-[#173a26]/90 to-[#102d1d]/90 hover:from-[#1f4e34] hover:to-[#173a26] border border-[#a2d45e] text-white text-[13px] font-medium tracking-wide flex items-center gap-4 transition-all duration-300 shadow-[0_0_25px_rgba(162,212,94,0.3)] group cursor-pointer backdrop-blur-md">
                  <span>Discover Our Vision</span>
                  <div className="w-8 h-8 rounded-full border border-[#a2d45e]/50 flex items-center justify-center">
                    <ArrowRight size={15} className="text-[#a2d45e] group-hover:translate-x-1 transition-transform" />
                  </div>
                </button>
                
                <button className="pl-7 pr-3 py-2.5 rounded-full bg-transparent hover:bg-white/5 border border-white/30 text-white text-[13px] font-medium tracking-wide flex items-center gap-4 transition-all duration-300 group cursor-pointer backdrop-blur-xl">
                  <span>Learn More</span>
                  <div className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center">
                    <ArrowRight size={15} className="text-white/90 group-hover:translate-x-1 transition-transform" />
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* Right Hero Column (Floating Earth Biosphere Dome with Badges & Play Button) */}
          <div className="flex-1 w-full relative flex items-center justify-center lg:justify-end z-30 select-none">
            <div className="relative w-full max-w-[560px] sm:max-w-[650px] lg:max-w-[760px] xl:max-w-[840px] lg:translate-x-6 xl:translate-x-10 translate-y-8 sm:translate-y-12 lg:translate-y-20 xl:translate-y-24">
              
              {/* Central Biosphere Artwork */}
              <img
                src="/home/g.png"
                alt="Sustainable Earth Biosphere"
                className="w-full h-auto object-contain relative z-20 drop-shadow-[0_25px_60px_rgba(0,0,0,0.85)] pointer-events-none"
              />

              {/* Floating Frosted Pill 1: INNOVATE */}
              <div className="absolute top-[8%] left-[22%] px-4 py-1.5 rounded-full bg-black/40 backdrop-blur-2xl border border-white/30 text-white text-[11px] font-bold tracking-widest z-30 shadow-[0_8px_25px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.4)]">
                INNOVATE
              </div>

              {/* Floating Frosted Pill 2: LEARN */}
              <div className="absolute top-[16%] right-[4%] px-4 py-1.5 rounded-full bg-black/40 backdrop-blur-2xl border border-white/30 text-white text-[11px] font-bold tracking-widest z-30 shadow-[0_8px_25px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.4)]">
                LEARN
              </div>

              {/* Floating Frosted Pill 3: ENGINEER */}
              <div className="absolute bottom-[28%] left-[2%] px-4 py-1.5 rounded-full bg-black/40 backdrop-blur-2xl border border-white/30 text-white text-[11px] font-bold tracking-widest z-30 shadow-[0_8px_25px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.4)]">
                ENGINEER
              </div>

              {/* Floating Frosted Pill 4: SUSTAIN */}
              <div className="absolute bottom-[10%] right-[10%] px-4 py-1.5 rounded-full bg-black/40 backdrop-blur-2xl border border-white/30 text-white text-[11px] font-bold tracking-widest z-30 shadow-[0_8px_25px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.4)]">
                SUSTAIN
              </div>

              {/* Floating Action: Watch Our Story */}
              <div className="absolute top-[48%] -right-2 sm:right-2 flex flex-col items-center gap-2 z-30 group cursor-pointer">
                <div className="w-13 h-13 rounded-full bg-black/40 backdrop-blur-2xl border border-white/40 flex items-center justify-center shadow-[0_0_25px_rgba(162,212,94,0.35),inset_0_1px_2px_rgba(255,255,255,0.5)] group-hover:scale-110 group-hover:border-[#a2d45e] transition-all duration-300">
                  <Play size={18} className="text-white fill-white ml-0.5" />
                </div>
                <span className="text-[10px] font-bold tracking-wider uppercase text-white/95 group-hover:text-white transition-colors max-w-[70px] text-center leading-tight drop-shadow">
                  Watch Our Story
                </span>
              </div>

            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 2. THREE SUMMARY GLASS CARDS DOCK */}
        {/* ========================================================================= */}
        <div className="-mt-8 sm:-mt-12 lg:-mt-20 xl:-mt-24 p-6 sm:p-7 rounded-[3rem] border border-white/20 bg-gradient-to-r from-white/[0.08] via-white/[0.04] to-white/[0.02] backdrop-blur-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5),inset_0_1px_2px_rgba(255,255,255,0.35)] grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4 relative z-20">
          
          {/* Card 1 */}
          <div className="flex items-center gap-5 px-3 sm:px-5">
            <div className="w-16 h-16 shrink-0 flex items-center justify-center rounded-[1.6rem] bg-emerald-950/60 border border-emerald-400/40 backdrop-blur-2xl shadow-[0_0_30px_rgba(162,212,94,0.35),inset_0_1px_2px_rgba(255,255,255,0.4)]">
              <Leaf size={26} className="text-[#a2d45e] drop-shadow-[0_0_8px_#a2d45e]" />
            </div>
            <p className="text-sm text-slate-100 leading-relaxed font-light drop-shadow-sm">
              Building an ecosystem for inclusive and sustainable STEM learning.
            </p>
          </div>

          {/* Card 2 */}
          <div className="flex items-center gap-5 px-3 sm:px-5 md:border-l md:border-white/15">
            <div className="w-16 h-16 shrink-0 flex items-center justify-center rounded-[1.6rem] bg-emerald-950/60 border border-emerald-400/40 backdrop-blur-2xl shadow-[0_0_30px_rgba(162,212,94,0.35),inset_0_1px_2px_rgba(255,255,255,0.4)]">
              <Users size={26} className="text-[#a2d45e]" />
            </div>
            <p className="text-sm text-slate-100 leading-relaxed font-light drop-shadow-sm">
              Collaborating with educators, researchers and institutions worldwide.
            </p>
          </div>

          {/* Card 3 */}
          <div className="flex items-center gap-5 px-3 sm:px-5 md:border-l md:border-white/15">
            <div className="w-16 h-16 shrink-0 flex items-center justify-center rounded-[1.6rem] bg-emerald-950/60 border border-emerald-400/40 backdrop-blur-2xl shadow-[0_0_30px_rgba(162,212,94,0.35),inset_0_1px_2px_rgba(255,255,255,0.4)]">
              <Sprout size={26} className="text-[#a2d45e]" />
            </div>
            <p className="text-sm text-slate-100 leading-relaxed font-light drop-shadow-sm">
              Promoting innovation, collaboration and sustainability in education and research.
            </p>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 3. STATISTICS & QUOTE SHOWCASE (2-Card Row Matching Reference Mockup) */}
        {/* ========================================================================= */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch relative z-20">

          {/* 4 Metrics Box in Liquid Glass (2 Cols) */}
          <div className="col-span-1 lg:col-span-2 grid grid-cols-2 md:grid-cols-4 gap-6 p-8 lg:p-10 rounded-[3rem] border border-white/20 bg-gradient-to-b from-white/[0.08] to-white/[0.02] backdrop-blur-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5),inset_0_1px_2px_rgba(255,255,255,0.35)]">
            
            {/* Stat 1 */}
            <div className="flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 mb-6 flex items-center justify-center rounded-[1.4rem] bg-emerald-950/60 border border-emerald-400/40 backdrop-blur-xl shadow-[0_0_20px_rgba(162,212,94,0.3)]">
                  <GraduationCap size={24} className="text-[#a2d45e]" />
                </div>
                <h3 className="text-4xl lg:text-5xl font-['Outfit'] font-normal text-white mb-2 tracking-tight">2024</h3>
                <h4 className="text-base font-semibold text-white mb-2">Established</h4>
              </div>
              <p className="text-xs text-slate-300 font-light leading-relaxed">
                Founded with a vision to transform education.
              </p>
            </div>

            {/* Stat 2 */}
            <div className="flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 mb-6 flex items-center justify-center rounded-[1.4rem] bg-emerald-950/60 border border-emerald-400/40 backdrop-blur-xl shadow-[0_0_20px_rgba(162,212,94,0.3)]">
                  <Users size={24} className="text-[#a2d45e]" />
                </div>
                <h3 className="text-4xl lg:text-5xl font-['Outfit'] font-normal text-white mb-2 tracking-tight">STEM</h3>
                <h4 className="text-base font-semibold text-white mb-2">Focused</h4>
              </div>
              <p className="text-xs text-slate-300 font-light leading-relaxed">
                Hands-on, experiential STEM learning for all.
              </p>
            </div>

            {/* Stat 3 */}
            <div className="flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 mb-6 flex items-center justify-center rounded-[1.4rem] bg-emerald-950/60 border border-emerald-400/40 backdrop-blur-xl shadow-[0_0_20px_rgba(162,212,94,0.3)]">
                  <Landmark size={24} className="text-[#a2d45e]" />
                </div>
                <h3 className="text-4xl lg:text-5xl font-['Outfit'] font-normal text-white mb-2 tracking-tight">41+</h3>
                <h4 className="text-base font-semibold text-white mb-2">Districts</h4>
              </div>
              <p className="text-xs text-slate-300 font-light leading-relaxed">
                Reaching schools and learners across Kerala.
              </p>
            </div>

            {/* Stat 4 */}
            <div className="flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 mb-6 flex items-center justify-center rounded-[1.4rem] bg-emerald-950/60 border border-emerald-400/40 backdrop-blur-xl shadow-[0_0_20px_rgba(162,212,94,0.3)]">
                  <User size={24} className="text-[#a2d45e]" />
                </div>
                <h3 className="text-4xl lg:text-5xl font-['Outfit'] font-normal text-white mb-2 tracking-tight">56+</h3>
                <h4 className="text-base font-semibold text-white mb-2">Schools</h4>
              </div>
              <p className="text-xs text-slate-300 font-light leading-relaxed">
                Collaborative programmes and outreach initiatives.
              </p>
            </div>

          </div>

          {/* Quote Card in Liquid Glass (1 Col) */}
          <div className="col-span-1 p-8 lg:p-10 rounded-[3rem] border border-white/20 bg-gradient-to-br from-white/[0.09] via-white/[0.04] to-white/[0.02] backdrop-blur-3xl relative overflow-hidden flex flex-col justify-center min-h-[280px] shadow-[0_20px_50px_rgba(0,0,0,0.5),inset_0_1px_2px_rgba(255,255,255,0.35)]">
            {/* Watermark Quote Icon */}
            <div className="text-5xl font-serif text-[#a2d45e] opacity-75 mb-3 select-none">
              “
            </div>

            <div className="relative z-10 px-1 mb-4">
              <p className="text-xl lg:text-2xl font-light text-white leading-snug font-['Outfit'] drop-shadow-sm">
                Empowering learners and educators through knowledge, technology and sustainability.
              </p>
            </div>

            {/* Decorative botanical leaf watermark */}
            <div className="absolute -bottom-6 -right-6 opacity-20 pointer-events-none">
              <svg width="140" height="140" viewBox="0 0 100 100" className="text-[#a2d45e] fill-current">
                <path d="M90 90 Q 90 20, 20 20 Q 90 20, 90 90 Z" />
                <path d="M80 90 Q 80 40, 40 40 Q 80 40, 80 90 Z" />
                <path d="M70 90 Q 70 60, 60 60 Q 70 60, 70 90 Z" />
              </svg>
            </div>
          </div>

        </div>

        {/* ========================================================================= */}
        {/* 4. WHAT WE DO SECTION */}
        {/* ========================================================================= */}
        <div className="mt-28 lg:mt-36 relative z-20">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-8 items-start">
            
            {/* Left side: Headers and 2x2 Feature Cards */}
            <div className="flex-1 w-full lg:max-w-[55%]">
              
              {/* Header Title */}
              <div className="mb-10">
                <div className="flex items-center gap-2 mb-4">
                   <Leaf size={16} className="text-[#a2d45e]" />
                   <span className="text-[#a2d45e] text-xs font-bold tracking-[0.2em] uppercase">What We Do</span>
                </div>
                <h2 className="text-4xl lg:text-5xl font-light text-white mb-6 leading-tight font-['Outfit']">
                   Driving Impact Through <br />
                   Education & <span className="font-serif italic text-[#dcf4ba]">Innovation</span>
                </h2>
                <p className="text-slate-200 text-sm max-w-md leading-relaxed font-light drop-shadow-sm">
                   CLESE works at the intersection of learning, engineering and sustainability to create meaningful change.
                </p>
              </div>

              {/* 2x2 Grid of Cards in Liquid Glass */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
                
                {/* Card 1: STEM Education */}
                <div className="p-6 rounded-[2rem] border border-white/15 bg-gradient-to-b from-white/[0.08] to-white/[0.02] backdrop-blur-2xl group hover:border-white/30 hover:bg-white/[0.12] transition-all cursor-pointer flex flex-col justify-between min-h-[190px] shadow-[0_12px_30px_rgba(0,0,0,0.35),inset_0_1px_1px_rgba(255,255,255,0.3)]">
                  <div>
                    <div className="w-13 h-13 rounded-2xl bg-emerald-950/60 border border-emerald-400/30 flex items-center justify-center shadow-inner mb-5 backdrop-blur-xl">
                       <FlaskConical size={22} className="text-[#a2d45e]" />
                    </div>
                    <h4 className="text-[15px] font-semibold text-white mb-2">STEM Education</h4>
                    <p className="text-[11px] text-slate-300 leading-relaxed pr-2">Hands-on learning experiences that ignite curiosity and build future-ready skills.</p>
                  </div>
                  <div className="flex justify-end mt-4">
                    <ArrowRight size={14} className="text-slate-400 group-hover:text-white group-hover:translate-x-1 transition-all" />
                  </div>
                </div>

                {/* Card 2: Learning Engineering */}
                <div className="p-6 rounded-[2rem] border border-white/15 bg-gradient-to-b from-white/[0.08] to-white/[0.02] backdrop-blur-2xl group hover:border-white/30 hover:bg-white/[0.12] transition-all cursor-pointer flex flex-col justify-between min-h-[190px] shadow-[0_12px_30px_rgba(0,0,0,0.35),inset_0_1px_1px_rgba(255,255,255,0.3)]">
                  <div>
                    <div className="w-13 h-13 rounded-2xl bg-emerald-950/60 border border-emerald-400/30 flex items-center justify-center shadow-inner mb-5 backdrop-blur-xl">
                       <Monitor size={22} className="text-[#a2d45e]" />
                    </div>
                    <h4 className="text-[15px] font-semibold text-white mb-2">Learning Engineering</h4>
                    <p className="text-[11px] text-slate-300 leading-relaxed pr-2">Innovative tools, technologies and models that enhance teaching and learning.</p>
                  </div>
                  <div className="flex justify-end mt-4">
                    <ArrowRight size={14} className="text-slate-400 group-hover:text-white group-hover:translate-x-1 transition-all" />
                  </div>
                </div>

                {/* Card 3: Research & Innovation */}
                <div className="p-6 rounded-[2rem] border border-white/15 bg-gradient-to-b from-white/[0.08] to-white/[0.02] backdrop-blur-2xl group hover:border-white/30 hover:bg-white/[0.12] transition-all cursor-pointer flex flex-col justify-between min-h-[190px] shadow-[0_12px_30px_rgba(0,0,0,0.35),inset_0_1px_1px_rgba(255,255,255,0.3)]">
                  <div>
                    <div className="w-13 h-13 rounded-2xl bg-emerald-950/60 border border-emerald-400/30 flex items-center justify-center shadow-inner mb-5 backdrop-blur-xl">
                       <Atom size={22} className="text-[#a2d45e]" />
                    </div>
                    <h4 className="text-[15px] font-semibold text-white mb-2">Research & Innovation</h4>
                    <p className="text-[11px] text-slate-300 leading-relaxed pr-2">Advancing knowledge through research, collaboration and evidence-based practices.</p>
                  </div>
                  <div className="flex justify-end mt-4">
                    <ArrowRight size={14} className="text-slate-400 group-hover:text-white group-hover:translate-x-1 transition-all" />
                  </div>
                </div>

                {/* Card 4: Sustainability */}
                <div className="p-6 rounded-[2rem] border border-white/15 bg-gradient-to-b from-white/[0.08] to-white/[0.02] backdrop-blur-2xl group hover:border-white/30 hover:bg-white/[0.12] transition-all cursor-pointer flex flex-col justify-between min-h-[190px] shadow-[0_12px_30px_rgba(0,0,0,0.35),inset_0_1px_1px_rgba(255,255,255,0.3)]">
                  <div>
                    <div className="w-13 h-13 rounded-2xl bg-emerald-950/60 border border-emerald-400/30 flex items-center justify-center shadow-inner mb-5 backdrop-blur-xl">
                       <Sprout size={22} className="text-[#a2d45e]" />
                    </div>
                    <h4 className="text-[15px] font-semibold text-white mb-2">Sustainability</h4>
                    <p className="text-[11px] text-slate-300 leading-relaxed pr-2">Promoting responsible practices for a sustainable and equitable future for all.</p>
                  </div>
                  <div className="flex justify-end mt-4">
                    <ArrowRight size={14} className="text-slate-400 group-hover:text-white group-hover:translate-x-1 transition-all" />
                  </div>
                </div>

              </div>

              {/* Explore Button */}
              <button className="px-7 py-3.5 rounded-full bg-white/5 border border-white/30 text-white text-xs font-semibold tracking-wide flex items-center gap-2 hover:bg-white/15 transition-all duration-300 group cursor-pointer backdrop-blur-xl shadow-lg">
                <span>Explore Our Work</span>
                <ArrowRight size={15} className="text-white group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Right side: Flask Image & Approach List */}
            <div className="flex-1 w-full relative mt-16 lg:mt-0 flex justify-center items-center">
              <div className="relative w-full max-w-[550px] lg:translate-x-6 xl:translate-x-12">
                <img 
                  src="/home/h3.png" 
                  alt="Plant in a flask" 
                  className="w-full h-auto object-contain relative z-10 scale-105 lg:scale-110 origin-center drop-shadow-[0_20px_50px_rgba(0,0,0,0.6)]"
                />

                {/* Floating Nodes */}
                <div className="hidden lg:flex absolute top-[15%] left-[5%] w-10 h-10 rounded-2xl border border-white/20 bg-white/5 backdrop-blur-xl items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.05)] z-20">
                  <Network size={16} className="text-white/60" />
                </div>
                <div className="hidden lg:flex absolute top-[45%] -left-[5%] w-10 h-10 rounded-2xl border border-white/20 bg-white/5 backdrop-blur-xl items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.05)] z-20">
                  <Network size={16} className="text-white/60" />
                </div>
                <div className="hidden lg:flex absolute bottom-[35%] left-[2%] w-10 h-10 rounded-2xl border border-white/20 bg-white/5 backdrop-blur-xl items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.05)] z-20">
                  <Network size={16} className="text-white/60" />
                </div>
                <div className="hidden lg:flex absolute top-[25%] right-[25%] w-10 h-10 rounded-2xl border border-white/20 bg-white/5 backdrop-blur-xl items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.05)] z-20">
                  <Network size={16} className="text-white/60" />
                </div>
                
                {/* Our Approach Side List in Liquid Glass */}
                <div className="hidden lg:flex flex-col gap-4 absolute top-12 -right-16 xl:-right-24 z-20 w-[145px]">
                  <span className="text-xs text-white mb-1 font-semibold tracking-wider uppercase">Our Approach</span>
                  
                  {['Collaborate', 'Innovate', 'Empower', 'Sustain'].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-2xl border border-white/25 bg-white/10 backdrop-blur-xl flex items-center justify-center shadow-md">
                        <Network size={15} className="text-[#a2d45e]" />
                      </div>
                      <span className="text-xs text-white font-medium">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Our Mission Box in Liquid Glass */}
                <div className="absolute -bottom-8 left-4 right-12 lg:-left-12 lg:right-16 p-8 rounded-[2.5rem] border border-white/25 bg-gradient-to-br from-white/[0.12] via-white/[0.05] to-black/60 backdrop-blur-3xl z-20 shadow-[0_25px_60px_rgba(0,0,0,0.6),inset_0_1px_2px_rgba(255,255,255,0.4)]">
                  <h4 className="text-base font-semibold text-white mb-3">Our Mission</h4>
                  <p className="text-xs text-slate-200 leading-[1.65] mb-5">
                     To create an inclusive, innovative and sustainable education ecosystem that empowers learners, educators and communities to thrive.
                  </p>
                  <a href="/about" className="inline-flex items-center gap-2 text-xs text-white font-semibold group cursor-pointer">
                     <span>Learn More</span>
                     <div className="w-7 h-7 rounded-full border border-white/30 flex items-center justify-center group-hover:bg-white/20 transition-all backdrop-blur-md">
                        <ArrowRight size={11} className="text-white group-hover:translate-x-0.5 transition-transform" />
                     </div>
                  </a>
                  
                  {/* Decorative faint leaf */}
                  <div className="absolute bottom-0 right-0 opacity-15 pointer-events-none overflow-hidden rounded-br-3xl">
                    <svg width="100" height="100" viewBox="0 0 100 100" className="text-[#a2d45e] fill-current translate-x-4 translate-y-4">
                      <path d="M90 90 Q 90 20, 20 20 Q 90 20, 90 90 Z" />
                      <path d="M80 90 Q 80 40, 40 40 Q 80 40, 80 90 Z" />
                    </svg>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>

        {/* ========================================================================= */}
        {/* 5. PROGRAMMES & INITIATIVES SECTION */}
        {/* ========================================================================= */}
        <div className="mt-28 lg:mt-36 relative z-20">
          <div className="rounded-[3rem] border border-white/20 bg-gradient-to-b from-white/[0.08] via-white/[0.03] to-white/[0.01] backdrop-blur-3xl p-8 lg:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.5),inset_0_1px_2px_rgba(255,255,255,0.35)] relative overflow-hidden">
            
            {/* Subtle background glow */}
            <div className="absolute top-0 left-1/4 w-1/2 h-full bg-[#a2d45e]/10 blur-[100px] pointer-events-none"></div>

            {/* Header Row */}
            <div className="flex flex-col md:flex-row justify-between md:items-end gap-6 mb-10 relative z-10">
              <div>
                <p className="text-[#c6db49] text-[10px] font-bold tracking-[0.2em] uppercase mb-3 font-['Outfit']">
                  Programmes & Initiatives
                </p>
                <h2 className="text-3xl lg:text-4xl font-light text-white leading-tight font-['Outfit']">
                  Empowering Minds. Enriching Futures.
                </h2>
              </div>
              <button className="shrink-0 px-6 py-3 rounded-full bg-white/5 border border-white/20 text-white text-xs font-medium flex items-center gap-2 hover:bg-white/15 transition-all duration-300 group cursor-pointer backdrop-blur-xl">
                <span>View All Programmes</span>
                <ArrowRight size={14} className="text-white group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Cards Grid in Liquid Glass */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 relative z-10">
              {[
                {
                  title: "STEM Learning\nLab",
                  desc: "Experiential STEM learning for students and teachers.",
                  img: "/home/e1.png"
                },
                {
                  title: "Teacher\nDevelopment",
                  desc: "Building capacity for innovative classroom practices.",
                  img: "/home/e2.png"
                },
                {
                  title: "Scholar\nConnect",
                  desc: "A platform for scholars to share ideas and collaborate.",
                  img: "/home/e3.png"
                },
                {
                  title: "STEM for\nCommunities",
                  desc: "Outreach initiatives for inclusive and equitable learning.",
                  img: "/home/e4.png"
                },
                {
                  title: "Research &\nInnovation",
                  desc: "Promoting research and innovation in education and STEM.",
                  img: "/home/e5.png" 
                }
              ].map((prog, idx) => (
                <div key={idx} className="p-4 rounded-3xl border border-white/15 bg-gradient-to-b from-white/[0.07] to-white/[0.02] backdrop-blur-xl group hover:border-white/30 hover:bg-white/[0.12] transition-all cursor-pointer relative overflow-hidden h-[200px] shadow-[0_10px_25px_rgba(0,0,0,0.3),inset_0_1px_1px_rgba(255,255,255,0.25)]">
                  
                  {/* Background Image (Left side) */}
                  <div className="absolute left-2 bottom-0 w-[55%] h-[85%] pointer-events-none">
                     <img 
                       src={prog.img} 
                       alt={prog.title.replace('\n', ' ')} 
                       className="w-full h-full object-contain object-bottom opacity-95 group-hover:scale-105 transition-transform duration-500 origin-bottom-left" 
                     />
                  </div>

                  {/* Text Content (Right side) */}
                  <div className="relative z-10 w-full h-full flex flex-col justify-between pointer-events-none">
                    <div className="w-full flex justify-end">
                      <div className="w-[55%] pl-1 flex flex-col pointer-events-auto mt-2">
                         <h4 className="text-[14px] font-semibold text-white mb-2 leading-[1.2] whitespace-pre-line">{prog.title}</h4>
                         <p className="text-[10px] text-slate-300 leading-[1.5]">{prog.desc}</p>
                      </div>
                    </div>
                    
                    {/* Arrow Icon */}
                    <div className="self-end pointer-events-auto">
                       <div className="w-7 h-7 rounded-full border border-white/25 flex items-center justify-center group-hover:bg-white/15 transition-colors backdrop-blur-md">
                          <ArrowRight size={11} className="text-white group-hover:translate-x-0.5 transition-transform" />
                       </div>
                    </div>
                  </div>

                </div>
              ))}
            </div>

          </div>
        </div>

        {/* ========================================================================= */}
        {/* 6. UPCOMING EVENTS & NEWS SECTION */}
        {/* ========================================================================= */}
        <div className="mt-28 lg:mt-36 relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* Card 1: UPCOMING EVENTS in Liquid Glass */}
            <div className="p-7 lg:p-8 rounded-[3rem] border border-white/20 bg-gradient-to-br from-white/[0.08] via-white/[0.03] to-white/[0.01] backdrop-blur-3xl flex flex-col shadow-[0_20px_50px_rgba(0,0,0,0.5),inset_0_1px_2px_rgba(255,255,255,0.35)]">
              <h3 className="text-[#c6db49] text-[11px] font-bold tracking-[0.2em] uppercase mb-8 font-['Outfit']">Upcoming Events</h3>
              
              <div className="flex flex-col gap-6 flex-1">
                {/* Event 1 */}
                <div className="flex items-start gap-5 group cursor-pointer border-b border-white/10 pb-6">
                  <div className="w-16 h-16 rounded-2xl flex flex-col items-center justify-center shrink-0 bg-gradient-to-br from-emerald-900/60 to-black/40 border border-white/15 shadow-inner backdrop-blur-xl">
                     <span className="text-2xl font-light text-white leading-none font-['Outfit']">15</span>
                     <span className="text-[10px] font-semibold text-slate-300 uppercase mt-1">Jun</span>
                  </div>
                  <div className="flex-1 pt-1">
                     <h4 className="text-[15px] font-semibold text-white mb-2 leading-snug">Scholar Connect Series</h4>
                     <p className="text-[11px] text-slate-300 leading-[1.5]">Interactive session with researchers and academicians.</p>
                  </div>
                  <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center shrink-0 group-hover:bg-white/15 transition-colors mt-2 backdrop-blur-md">
                     <ArrowRight size={13} className="text-white group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
                
                {/* Event 2 */}
                <div className="flex items-start gap-5 group cursor-pointer border-b border-white/10 pb-6">
                  <div className="w-16 h-16 rounded-2xl flex flex-col items-center justify-center shrink-0 bg-gradient-to-br from-amber-900/60 to-black/40 border border-white/15 shadow-inner backdrop-blur-xl">
                     <span className="text-2xl font-light text-white leading-none font-['Outfit']">28</span>
                     <span className="text-[10px] font-semibold text-slate-300 uppercase mt-1">Jun</span>
                  </div>
                  <div className="flex-1 pt-1">
                     <h4 className="text-[15px] font-semibold text-white mb-2 leading-snug">STEM Workshop for Teachers</h4>
                     <p className="text-[11px] text-slate-300 leading-[1.5]">Hands-on workshop on STEM tools and pedagogy.</p>
                  </div>
                  <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center shrink-0 group-hover:bg-white/15 transition-colors mt-2 backdrop-blur-md">
                     <ArrowRight size={13} className="text-white group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
                
                {/* Event 3 */}
                <div className="flex items-start gap-5 group cursor-pointer border-b border-white/10 pb-6">
                  <div className="w-16 h-16 rounded-2xl flex flex-col items-center justify-center shrink-0 bg-gradient-to-br from-blue-900/60 to-black/40 border border-white/15 shadow-inner backdrop-blur-xl">
                     <span className="text-2xl font-light text-white leading-none font-['Outfit']">10</span>
                     <span className="text-[10px] font-semibold text-slate-300 uppercase mt-1">Jul</span>
                  </div>
                  <div className="flex-1 pt-1">
                     <h4 className="text-[15px] font-semibold text-white mb-2 leading-snug">International Webinar</h4>
                     <p className="text-[11px] text-slate-300 leading-[1.5]">Global perspectives on STEM education and sustainability.</p>
                  </div>
                  <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center shrink-0 group-hover:bg-white/15 transition-colors mt-2 backdrop-blur-md">
                     <ArrowRight size={13} className="text-white group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-2">
                <a href="/events" className="inline-flex items-center gap-2 text-[11px] font-semibold text-white uppercase tracking-wider group">
                   <span>View All Events</span>
                   <div className="w-7 h-7 rounded-full border border-white/30 flex items-center justify-center group-hover:bg-white/20 transition-colors backdrop-blur-md">
                     <ArrowRight size={11} className="group-hover:translate-x-0.5 transition-transform" />
                   </div>
                </a>
              </div>
            </div>

            {/* Card 2: NEWS & ANNOUNCEMENTS (Featured) in Liquid Glass */}
            <div className="p-7 lg:p-8 rounded-[3rem] border border-white/20 bg-gradient-to-br from-white/[0.08] via-white/[0.03] to-white/[0.01] backdrop-blur-3xl flex flex-col shadow-[0_20px_50px_rgba(0,0,0,0.5),inset_0_1px_2px_rgba(255,255,255,0.35)]">
              <h3 className="text-[#c6db49] text-[11px] font-bold tracking-[0.2em] uppercase mb-8 font-['Outfit']">News & Announcements</h3>
              
              <div className="relative rounded-[2rem] overflow-hidden flex-1 group cursor-pointer shadow-inner min-h-[300px] border border-white/10">
                <img src="/home/e4.png" alt="Featured News" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                
                <div className="absolute top-5 left-5 z-10">
                  <span className="px-4 py-1.5 rounded-full bg-white/25 backdrop-blur-xl border border-white/40 text-[9px] font-bold tracking-[0.15em] text-white uppercase shadow-lg">Featured</span>
                </div>
                
                <div className="absolute bottom-6 left-6 right-6 z-10">
                  <h4 className="text-xl font-medium text-white mb-3 leading-snug font-['Outfit']">CLESE Partners with Global Institutions for STEM Excellence</h4>
                  <p className="text-xs text-slate-200 leading-relaxed mb-5 opacity-95">Strengthening global collaboration for research and capacity building.</p>
                  <a href="/news" className="inline-flex items-center gap-2 text-[11px] font-semibold text-white uppercase tracking-wider group/link">
                     <span>Read More</span>
                     <div className="w-7 h-7 rounded-full border border-white/30 flex items-center justify-center group-hover/link:bg-white/25 transition-colors backdrop-blur-md">
                       <ArrowRight size={11} className="group-hover/link:translate-x-0.5 transition-transform" />
                     </div>
                  </a>
                </div>
              </div>

              {/* Slider Dots */}
              <div className="flex justify-center gap-2 mt-6">
                <div className="w-2.5 h-2.5 rounded-full bg-[#c6db49] shadow-[0_0_8px_#c6db49]"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-white/20 hover:bg-white/40 cursor-pointer transition-colors"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-white/20 hover:bg-white/40 cursor-pointer transition-colors"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-white/20 hover:bg-white/40 cursor-pointer transition-colors"></div>
              </div>
            </div>

            {/* Card 3: News List in Liquid Glass */}
            <div className="p-7 lg:p-8 rounded-[3rem] border border-white/20 bg-gradient-to-br from-white/[0.08] via-white/[0.03] to-white/[0.01] backdrop-blur-3xl flex flex-col shadow-[0_20px_50px_rgba(0,0,0,0.5),inset_0_1px_2px_rgba(255,255,255,0.35)]">
              {/* Empty header for alignment */}
              <div className="h-6 mb-6"></div> 
              
              <div className="flex flex-col gap-6 flex-1 pt-2">
                {/* News Item 1 */}
                <div className="flex items-center gap-5 group cursor-pointer border-b border-white/10 pb-6">
                  <div className="w-24 h-16 rounded-2xl overflow-hidden shrink-0 border border-white/15 shadow-md">
                     <img src="/e1.png" alt="News" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="flex-1">
                     <h4 className="text-[14px] font-semibold text-white mb-2 leading-snug">New STEM Learning Lab Inaugurated</h4>
                     <p className="text-[10px] text-slate-300 leading-snug line-clamp-1 mb-2">Bringing advanced learning resources to students.</p>
                     <div className="flex items-center gap-2">
                       <div className="w-1.5 h-1.5 rounded-full bg-[#a2d45e]"></div>
                       <span className="text-[9px] text-slate-300 uppercase tracking-wider font-semibold">May 20, 2024</span>
                     </div>
                  </div>
                </div>
                
                {/* News Item 2 */}
                <div className="flex items-center gap-5 group cursor-pointer border-b border-white/10 pb-6">
                  <div className="w-24 h-16 rounded-xl overflow-hidden shrink-0 border border-white/15 shadow-md">
                     <img src="/e33.png" alt="News" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="flex-1">
                     <h4 className="text-[14px] font-semibold text-white mb-2 leading-snug">STEM Camp for Gifted Students</h4>
                     <p className="text-[10px] text-slate-300 leading-snug line-clamp-1 mb-2">Empowering young innovators across 41 schools.</p>
                     <div className="flex items-center gap-2">
                       <div className="w-1.5 h-1.5 rounded-full bg-[#a2d45e]"></div>
                       <span className="text-[9px] text-slate-300 uppercase tracking-wider font-semibold">May 15, 2024</span>
                     </div>
                  </div>
                </div>
                
                {/* News Item 3 */}
                <div className="flex items-center gap-5 group cursor-pointer border-b border-white/10 pb-6">
                  <div className="w-24 h-16 rounded-xl overflow-hidden shrink-0 border border-white/15 shadow-md">
                     <img src="/e34.png" alt="News" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="flex-1">
                     <h4 className="text-[14px] font-semibold text-white mb-2 leading-snug">Faculty Development Programme</h4>
                     <p className="text-[10px] text-slate-300 leading-snug line-clamp-1 mb-2">Enhancing skills for 21st century education.</p>
                     <div className="flex items-center gap-2">
                       <div className="w-1.5 h-1.5 rounded-full bg-[#a2d45e]"></div>
                       <span className="text-[9px] text-slate-300 uppercase tracking-wider font-semibold">May 10, 2024</span>
                     </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-2 flex justify-center">
                <a href="/news" className="inline-flex items-center gap-2 text-[11px] font-semibold text-white uppercase tracking-wider group">
                   <span>View All News</span>
                   <div className="w-7 h-7 rounded-full border border-white/30 flex items-center justify-center group-hover:bg-white/20 transition-colors backdrop-blur-md">
                     <ArrowRight size={11} className="group-hover:translate-x-0.5 transition-transform" />
                   </div>
                </a>
              </div>
            </div>
            
          </div>
        </div>

      </div>

    </div>
  );
}
