'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  Leaf,
  Users,
  GraduationCap,
  Landmark,
  Globe,
  FlaskConical,
  Calendar,
  Sparkles,
  Atom,
  Building,
  School,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Clock,
  Monitor,
  HeartHandshake,
  Sprout,
  UserCheck
} from 'lucide-react';

export default function HomePage() {
  const [currentEventIdx, setCurrentEventIdx] = useState(0);

  const upcomingEvents = [
    {
      id: 1,
      day: '14',
      month: 'MAR',
      year: '2025',
      tag: 'CONFERENCE',
      title: 'Fourth SIET International Conference on Educational Technology',
      location: 'Thiruvananthapuram, Kerala',
      duration: '2 Days Event',
      img: '/events/conference.jpg',
      link: '/events/1'
    },
    {
      id: 2,
      day: '25',
      month: 'APR',
      year: '2025',
      tag: 'WORKSHOP',
      title: 'Hands-on STEM Learning Workshop for School Teachers',
      location: 'Kazhakkoottam, Kerala',
      duration: '1 Day Workshop',
      img: '/events/workshop.jpg',
      link: '/events/1'
    },
    {
      id: 3,
      day: '10',
      month: 'MAY',
      year: '2025',
      tag: 'TRAINING PROGRAMME',
      title: 'Sustainability Education and Green Futures',
      location: 'Online / Offline',
      duration: '3 Days Programme',
      img: '/events/sustainability.jpg',
      link: '/events/1'
    },
    {
      id: 4,
      day: '28',
      month: 'JUN',
      year: '2025',
      tag: 'SCHOLAR CONNECT',
      title: 'Scholar Connect: Research Ideas & Collaborations',
      location: 'Kazhakkoottam, Kerala',
      duration: 'Half Day Session',
      img: '/events/scholar.jpg',
      link: '/events/1'
    }
  ];

  return (
    <div className="min-h-screen bg-[#f3f5ed] dark:bg-[#031008] text-[#19241c] dark:text-slate-100 font-sans pb-28 pt-28 sm:pt-36 relative overflow-hidden transition-colors duration-300">
      
      {/* Ambient background glows matching About page */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[20%] -left-40 w-[600px] h-[600px] bg-[#e2edd8]/50 dark:bg-[#0f301d]/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-8 w-[650px] h-[650px] bg-[#dbe8d0]/50 dark:bg-[#082214]/30 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 sm:space-y-32">

        {/* ========================================================================= */}
        {/* 1. HERO AREA: TEXT & OVERLAPPING GLASS PANEL */}
        {/* ========================================================================= */}
        <div className="relative flex items-center min-h-[480px] sm:min-h-[560px] w-full">
          
          {/* Background Art Image */}
          <div className="absolute top-1/2 -translate-y-1/2 right-[-5%] sm:right-[-2%] md:right-0 w-[120%] sm:w-[100%] lg:w-[70%] xl:w-[65%] z-0 pointer-events-none flex justify-end">
            <img
              src="/image.png"
              alt="LEnSE Science & Sustainability"
              className="w-full h-auto object-contain object-right"
              onError={(e) => {
                e.currentTarget.src = "/events/events_book_plant.jpg";
              }}
            />
          </div>
          
          {/* Main Hero Content (Grid) */}
          <div className="w-full flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10 relative z-10">
            
            {/* Left Hero Content */}
            <div className="w-full lg:w-[54%] xl:w-[50%] space-y-6 lg:pr-2">
              
              {/* Category / Eyebrow Badge */}
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#2d5a3c] dark:bg-[#a2d45e]" />
                <span className="text-[11px] font-bold tracking-[0.22em] text-[#455748] dark:text-[#a2d45e] uppercase">
                  LEARNING TODAY, SUSTAINING TOMORROW
                </span>
              </div>

              {/* Headline */}
              <h1 className="text-5xl sm:text-6xl lg:text-[4.5rem] font-normal text-[#131f17] dark:text-white leading-[1.05] tracking-tight font-serif">
                Empowering minds.<br />
                Building a <span className="italic text-[#243a29] dark:text-[#a2d45e] font-serif font-normal">sustainable future.</span>
              </h1>

              {/* Subtext */}
              <p className="text-[#405245] dark:text-slate-300 text-[13.5px] leading-[1.72] max-w-[460px] font-normal">
                Advancing innovative, inclusive, and sustainable approaches to education with a special focus on STEM. Together, let&apos;s create impactful learning experiences and a better tomorrow.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link href="/about" className="inline-flex">
                  <button className="px-7 py-3.5 rounded-full bg-gradient-to-b from-[#1b3726] to-[#11261a] hover:from-[#234631] hover:to-[#173323] text-white text-[11px] font-bold uppercase tracking-wider flex items-center gap-3 transition-all duration-500 shadow-[0_12px_28px_rgba(15,35,22,0.32),inset_0_1px_1px_rgba(255,255,255,0.25)] hover:scale-[1.03] group cursor-pointer dark:bg-gradient-to-b dark:from-[#1b432a] dark:to-[#112c1b] dark:border dark:border-[#245437]">
                    <span>Explore Our Journey</span>
                    <div className="w-5 h-5 rounded-full border border-white/35 flex items-center justify-center">
                      <ArrowRight size={10} className="text-white group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </button>
                </Link>

                <Link href="/events" className="inline-flex">
                  <button className="px-7 py-3.5 rounded-full bg-white/60 hover:bg-white/90 dark:bg-[#0b1c14] dark:hover:bg-[#11261a] backdrop-blur-xl border-[1.5px] border-white dark:border-[#183a27] shadow-[inset_0_1.5px_2px_rgba(255,255,255,1),0_8px_20px_rgba(0,0,0,0.04)] dark:shadow-none text-[#162d1f] dark:text-[#a2d45e] text-[11px] font-bold uppercase tracking-wider flex items-center gap-3 transition-all duration-500 hover:scale-[1.03] group cursor-pointer">
                    <span>Upcoming Events</span>
                    <div className="w-5 h-5 rounded-full border border-slate-300 dark:border-[#1e422c] flex items-center justify-center">
                      <Calendar size={10} className="text-[#162d1f] dark:text-[#a2d45e]" />
                    </div>
                  </button>
                </Link>
              </div>

            </div>

            {/* Right Glass Panel (Overlapping Image) */}
            <div className="hidden lg:flex flex-col gap-4 w-[290px] xl:w-[310px] p-6 rounded-[2.2rem] bg-gradient-to-br from-white/60 via-white/40 to-white/20 dark:from-[#0b1c14]/90 dark:via-[#08180f]/85 dark:to-[#040e08]/80 backdrop-blur-2xl border-[1.5px] border-white/95 dark:border-[#183a27] shadow-[inset_0_2px_4px_rgba(255,255,255,1),inset_0_-2px_4px_rgba(255,255,255,0.3),0_25px_50px_-10px_rgba(0,30,15,0.2)] dark:shadow-[0_25px_50px_-10px_rgba(0,0,0,0.5)] relative z-20 xl:-translate-x-2">
              {[
                { title: 'STEM Education', desc: 'Hands-on learning\nfor all', icon: Atom },
                { title: 'Sustainability', desc: 'Building a better,\ngreener future', icon: Leaf },
                { title: 'Teacher Empowerment', desc: 'Training and supporting\neducators', icon: UserCheck },
                { title: 'Inclusive Learning', desc: 'Opportunities for every\nlearner', icon: Users }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3.5 group cursor-default">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-b from-white/95 via-white/60 to-white/30 dark:from-[#132c1e] dark:to-[#0b1c14] backdrop-blur-2xl border-[1.5px] border-white dark:border-[#1e422c] shadow-[inset_0_2px_4px_rgba(255,255,255,1),0_6px_14px_rgba(0,25,12,0.08)] text-[#122418] dark:text-[#a2d45e] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-500">
                    <item.icon size={19} strokeWidth={1.5} />
                  </div>
                  <div className="flex flex-col">
                    <h4 className="text-[14px] font-serif font-semibold text-[#14261a] dark:text-white leading-tight">
                      {item.title}
                    </h4>
                    <p className="text-[11.5px] text-[#405245] dark:text-slate-300 leading-snug mt-0.5 whitespace-pre-line font-medium">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* ========================================================================= */}
        {/* 2. STATS DOCK */}
        {/* ========================================================================= */}
        <div className="p-3 sm:p-4 rounded-[2.8rem] bg-gradient-to-b from-white/40 via-white/25 to-white/15 dark:from-[#0b1c14]/85 dark:via-[#08180f]/80 dark:to-[#040e08]/75 backdrop-blur-3xl border-[1.5px] border-white/90 dark:border-[#183a27] shadow-[inset_0_2px_4px_rgba(255,255,255,1),inset_0_-2px_4px_rgba(255,255,255,0.3),0_25px_60px_-10px_rgba(0,25,12,0.15)] dark:shadow-[0_25px_60px_-10px_rgba(0,0,0,0.4)] relative z-20 transition-all duration-500">
          
          {/* Top Specular Edge Highlight Beam */}
          <div className="absolute top-0 left-8 right-8 h-[1.5px] bg-gradient-to-r from-transparent via-white dark:via-white/20 to-transparent opacity-95 pointer-events-none" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-white/70 dark:divide-[#183a27] relative z-10">
            {[
              { titleTop: 'Hands-on STEM', titleBottom: 'Learning', desc: 'For students & teachers', icon: GraduationCap },
              { titleTop: '44+', titleBottom: 'Schools Impacted', desc: 'Across Kerala', icon: Users },
              { titleTop: 'Global', titleBottom: 'Collaboration', desc: 'With Clarkson University, USA', icon: Globe },
              { titleTop: 'Social Impact', titleBottom: '', desc: 'Supporting rural &\nunderprivileged learners', icon: Sprout }
            ].map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center text-center p-6 sm:p-8 group hover:bg-white/30 dark:hover:bg-white/5 transition-all duration-500 rounded-[2.2rem] relative">
                
                {/* 3D Transparent Glass Lens Sphere */}
                <div className="w-16 h-16 rounded-full bg-gradient-to-b from-white/95 via-white/60 to-white/25 dark:from-[#132c1e] dark:to-[#0b1c14] backdrop-blur-2xl border-[1.5px] border-white dark:border-[#1e422c] shadow-[inset_0_3px_6px_rgba(255,255,255,1),inset_0_-3px_5px_rgba(0,0,0,0.1),0_12px_24px_rgba(0,25,12,0.12)] dark:shadow-[0_12px_24px_rgba(0,0,0,0.3)] flex items-center justify-center text-[#112417] dark:text-[#a2d45e] mb-4 group-hover:scale-110 transition-all duration-500">
                  <stat.icon size={24} strokeWidth={1.5} />
                </div>
                
                <h4 className="text-[17px] font-serif font-normal text-[#101e14] dark:text-white mb-2 leading-snug whitespace-pre-line drop-shadow-[0_1px_1px_rgba(255,255,255,0.7)] dark:drop-shadow-none">
                  {stat.titleTop} {stat.titleBottom}
                </h4>
                
                <p className="text-[11.5px] text-[#3f5244] dark:text-slate-300 leading-relaxed whitespace-pre-line font-medium drop-shadow-[0_1px_1px_rgba(255,255,255,0.7)] dark:drop-shadow-none">
                  {stat.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 3. OUR TRUSTED COLLABORATORS */}
        {/* ========================================================================= */}
        <div className="w-full relative z-20">
          
          {/* Centered Heading with Line Dividers */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-[1px] bg-gradient-to-r from-transparent via-[#2d5a3c]/30 dark:via-[#a2d45e]/30 to-transparent flex-1 max-w-[160px]" />
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#2d5a3c] dark:bg-[#a2d45e]" />
              <span className="text-[11px] font-bold tracking-[0.22em] text-[#455748] dark:text-[#a2d45e] uppercase">
                OUR TRUSTED COLLABORATORS
              </span>
            </div>
            <div className="h-[1px] bg-gradient-to-r from-transparent via-[#2d5a3c]/30 dark:via-[#a2d45e]/30 to-transparent flex-1 max-w-[160px]" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                name: 'SIET',
                desc: 'Govt. of Kerala',
                icon: Building,
                iconBg: 'bg-[#154628] dark:bg-[#0d3822]',
                iconColor: 'text-white'
              },
              {
                name: 'REFORM',
                desc: 'Advancing Education',
                icon: Leaf,
                iconBg: 'bg-white/80 dark:bg-[#11261a]',
                iconColor: 'text-[#154628] dark:text-[#a2d45e]'
              },
              {
                name: 'Child Development Centre',
                desc: 'Kazhakkoottam',
                icon: Atom,
                iconBg: 'bg-white/80 dark:bg-[#11261a]',
                iconColor: 'text-[#154628] dark:text-[#a2d45e]'
              },
              {
                name: 'Clarkson University',
                desc: 'USA',
                icon: () => <span className="font-serif font-bold text-[18px]">C</span>,
                iconBg: 'bg-[#154628] dark:bg-[#007040]',
                iconColor: 'text-white'
              }
            ].map((collab, idx) => (
              <div key={idx} className="bg-gradient-to-b from-white/60 via-white/35 to-white/20 dark:from-[#0b1c14]/90 dark:via-[#08180f]/85 dark:to-[#040e08]/80 backdrop-blur-2xl border-[1.5px] border-white/95 dark:border-[#183a27] rounded-[2.2rem] py-3.5 px-5 shadow-[inset_0_2px_4px_rgba(255,255,255,1),0_10px_25px_rgba(0,25,12,0.05)] dark:shadow-[0_10px_25px_rgba(0,0,0,0.3)] hover:-translate-y-1 transition-all duration-500 flex items-center gap-4 group">
                <div className={`w-11 h-11 rounded-full ${collab.iconBg} ${collab.iconColor} flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform shadow-sm`}>
                  {typeof collab.icon === 'function' ? <collab.icon /> : <collab.icon size={19} strokeWidth={1.5} />}
                </div>
                <div className="flex flex-col">
                  <span className="text-[14px] font-serif font-semibold text-[#14261a] dark:text-white leading-tight">
                    {collab.name}
                  </span>
                  {collab.desc && (
                    <span className="text-[11px] text-[#4d5e51] dark:text-slate-400 font-medium mt-0.5">
                      {collab.desc}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 4. ABOUT LEnSE SECTION */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch relative z-20">
          
          {/* Left Description (4 cols) */}
          <div className="lg:col-span-4 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#2d5a3c] dark:bg-[#a2d45e]" />
                <span className="text-[11px] font-bold tracking-[0.2em] text-[#4d5e50] dark:text-[#a2d45e] uppercase">
                  ABOUT LEnSE
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-[#142218] dark:text-white leading-[1.12] tracking-tight">
                Driving <span className="italic text-[#243d2c] dark:text-[#a2d45e] font-serif font-normal">meaningful change</span> through education.
              </h2>

              <p className="text-[#455649] dark:text-slate-300 text-[13.5px] leading-[1.7] font-normal">
                Established in 2024, the Centre for Learning Engineering and Sustainability Education (LEnSE) promotes innovative, inclusive and sustainable approaches to education, with a special focus on STEM education.
              </p>

              <p className="text-[#455649] dark:text-slate-300 text-[13.5px] leading-[1.7] font-normal">
                We organize seminars, workshops, conferences, training programmes and academic activities that inspire learners, empower educators and strengthen communities.
              </p>
            </div>

            <div className="pt-2">
              <Link href="/about" className="inline-flex">
                <button className="px-7 py-3.5 rounded-full bg-white/60 hover:bg-white/90 dark:bg-[#0b1c14] dark:hover:bg-[#11261a] backdrop-blur-xl border-[1.5px] border-white dark:border-[#183a27] shadow-[inset_0_1.5px_2px_rgba(255,255,255,1),0_8px_20px_rgba(0,0,0,0.04)] dark:shadow-none text-[#162d1f] dark:text-[#a2d45e] text-[11px] font-bold uppercase tracking-wider flex items-center gap-3 transition-all duration-500 hover:scale-[1.03] group cursor-pointer">
                  <span>Learn more about us</span>
                  <div className="w-5 h-5 rounded-full border border-slate-300 dark:border-[#1e422c] flex items-center justify-center">
                    <ArrowRight size={10} className="group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </button>
              </Link>
            </div>
          </div>

          {/* Center 2x2 Metric Grid (4 cols) */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-4">
            {[
              { label: 'Established in', value: '2024', icon: Calendar },
              { label: 'Events Organised', value: '18+', icon: Users },
              { label: 'Collaborations with', value: '10+', sub: 'Institutions', icon: Landmark },
              { label: 'Impacting', value: '1000+', sub: 'Learners', icon: Globe }
            ].map((card, i) => (
              <div key={i} className="p-6 rounded-[2rem] bg-gradient-to-b from-white/60 via-white/35 to-white/20 dark:from-[#0b1c14]/90 dark:via-[#08180f]/85 dark:to-[#040e08]/80 backdrop-blur-2xl border-[1.5px] border-white/95 dark:border-[#183a27] shadow-[inset_0_2px_4px_rgba(255,255,255,1),0_12px_28px_rgba(0,25,12,0.04)] dark:shadow-[0_12px_28px_rgba(0,0,0,0.3)] flex flex-col justify-between hover:-translate-y-1 transition-all duration-500 group">
                <div className="w-12 h-12 rounded-full bg-gradient-to-b from-white/95 via-white/60 to-white/30 dark:from-[#132c1e] dark:to-[#0b1c14] backdrop-blur-2xl border-[1.5px] border-white dark:border-[#1e422c] shadow-[inset_0_2px_4px_rgba(255,255,255,1),0_6px_14px_rgba(0,25,12,0.08)] text-[#14261a] dark:text-[#a2d45e] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500">
                  <card.icon size={19} strokeWidth={1.5} />
                </div>
                <div>
                  <span className="block text-[10.5px] font-bold text-[#637567] dark:text-[#a2d45e] uppercase tracking-wider mb-1">{card.label}</span>
                  <span className="block text-3xl sm:text-4xl font-serif font-normal text-[#0f1d13] dark:text-white leading-none tracking-tight">{card.value}</span>
                  {card.sub && <span className="block text-[11px] text-[#4d5e51] dark:text-slate-400 font-medium mt-1">{card.sub}</span>}
                </div>
              </div>
            ))}
          </div>

          {/* Right University Campus Card (4 cols) */}
          <div className="lg:col-span-4 rounded-[2.2rem] overflow-hidden bg-slate-900 border-[1.5px] border-white/90 dark:border-[#183a27] shadow-[0_15px_35px_rgba(0,25,12,0.06)] dark:shadow-[0_15px_35px_rgba(0,0,0,0.4)] relative group flex flex-col justify-end min-h-[260px]">
            <img 
              src="/about/about4.png" 
              alt="LEnSE Campus Solar Facility" 
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
              onError={(e) => {
                e.currentTarget.src = "/events/sustainability.jpg";
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d2216]/95 via-[#0d2216]/40 to-transparent" />
            
            <div className="relative z-10 p-7 text-white space-y-1.5">
              <div className="flex items-center justify-between">
                <h4 className="text-[17px] font-serif font-semibold text-white">Creating a better tomorrow</h4>
                <Leaf size={16} className="text-[#a2d45e]" />
              </div>
              <p className="text-[12px] text-[#c2d8c7] leading-relaxed font-normal">
                through education, innovation and sustainability.
              </p>
            </div>
          </div>

        </div>

        {/* ========================================================================= */}
        {/* 5. WHAT WE DO SECTION */}
        {/* ========================================================================= */}
        <div className="space-y-10 relative z-20">
          <div className="text-center space-y-2 max-w-xl mx-auto">
            <div className="flex items-center justify-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#2d5a3c] dark:bg-[#a2d45e]" />
              <span className="text-[11px] font-bold tracking-[0.2em] text-[#4d5e50] dark:text-[#a2d45e] uppercase">
                WHAT WE DO
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-serif font-normal text-[#142218] dark:text-white leading-[1.12] tracking-tight">
              Empowering through <span className="italic text-[#243d2c] dark:text-[#a2d45e] font-serif font-normal">learning and discovery</span>
            </h2>
          </div>

          {/* 5 Cards Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              {
                title: 'Conferences',
                desc: 'Global conversations on education and innovation.',
                img: '/events/conference.jpg',
                link: '/events'
              },
              {
                title: 'Workshops',
                desc: 'Hands-on learning experiences and skill building.',
                img: '/events/workshop.jpg',
                link: '/events'
              },
              {
                title: 'Training Programmes',
                desc: 'Capacity building for educators and learners.',
                img: '/events/events_book_plant.jpg',
                link: '/events'
              },
              {
                title: 'STEM Labs',
                desc: 'Experiential learning through practical exploration.',
                img: '/events/scholar.jpg',
                link: '/events'
              },
              {
                title: 'Outreach & Community',
                desc: 'Engaging communities for a sustainable future.',
                img: '/events/events_globe_books.jpg',
                link: '/events'
              }
            ].map((item, idx) => (
              <div key={idx} className="p-5 sm:p-6 rounded-[2.2rem] bg-gradient-to-b from-white/60 via-white/35 to-white/20 dark:from-[#0b1c14]/90 dark:via-[#08180f]/85 dark:to-[#040e08]/80 backdrop-blur-2xl border-[1.5px] border-white/95 dark:border-[#183a27] shadow-[inset_0_2px_4px_rgba(255,255,255,1),0_15px_35px_rgba(0,0,0,0.04)] dark:shadow-[0_15px_35px_rgba(0,0,0,0.4)] flex flex-col justify-between hover:-translate-y-1.5 transition-all duration-500 group">
                <div className="space-y-3.5">
                  <div className="w-full h-32 rounded-2xl overflow-hidden bg-slate-100 dark:bg-[#05110a] relative shadow-xs">
                    <img 
                      src={item.img} 
                      alt={item.title} 
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700" 
                    />
                  </div>
                  <h3 className="text-[17px] font-serif font-semibold text-[#142217] dark:text-white leading-snug drop-shadow-[0_1px_1px_rgba(255,255,255,0.8)] dark:drop-shadow-none">
                    {item.title}
                  </h3>
                  <p className="text-[12px] text-[#4d5e51] dark:text-slate-300 leading-[1.65] font-normal">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-5 flex justify-end">
                  <Link href={item.link} className="w-9 h-9 rounded-full bg-white dark:bg-[#11261a] border border-white/90 dark:border-[#1e422c] shadow-[0_4px_12px_rgba(0,0,0,0.08)] flex items-center justify-center text-[#14261a] dark:text-[#a2d45e] hover:scale-110 transition-all duration-500 cursor-pointer">
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 6. OUR FOCUS AREAS & OUR IMPACT */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-20">
          
          {/* Left Column (8 cols): Focus Areas + Upcoming Events */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* FOCUS AREAS */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#2d5a3c] dark:bg-[#a2d45e]" />
                <span className="text-[11px] font-bold tracking-[0.2em] text-[#4d5e50] dark:text-[#a2d45e] uppercase">
                  OUR FOCUS AREAS
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                {[
                  { title: 'STEM\nEducation', icon: Atom },
                  { title: 'Digital Learning\n& AI', icon: Monitor },
                  { title: 'Sustainability\nEducation', icon: Leaf },
                  { title: 'Teacher Capacity\nBuilding', icon: Users },
                  { title: 'Research &\nInnovation', icon: GraduationCap },
                  { title: 'Equity & Inclusive\nEducation', icon: HeartHandshake }
                ].map((area, idx) => (
                  <div key={idx} className="p-4 rounded-[1.8rem] bg-gradient-to-b from-white/60 via-white/35 to-white/20 dark:from-[#0b1c14]/90 dark:via-[#08180f]/85 dark:to-[#040e08]/80 backdrop-blur-2xl border-[1.5px] border-white/95 dark:border-[#183a27] text-center flex flex-col items-center justify-center hover:-translate-y-1 transition-all duration-500 shadow-[inset_0_2px_4px_rgba(255,255,255,1),0_8px_20px_rgba(0,25,12,0.04)] dark:shadow-[0_8px_20px_rgba(0,0,0,0.3)] group">
                    <div className="w-11 h-11 rounded-full bg-gradient-to-b from-white/95 via-white/60 to-white/30 dark:from-[#132c1e] dark:to-[#0b1c14] backdrop-blur-2xl border-[1.5px] border-white dark:border-[#1e422c] shadow-[inset_0_2px_4px_rgba(255,255,255,1),0_6px_14px_rgba(0,25,12,0.08)] text-[#14261a] dark:text-[#a2d45e] flex items-center justify-center mb-2.5 group-hover:scale-110 transition-transform duration-500">
                      <area.icon size={18} strokeWidth={1.5} />
                    </div>
                    <span className="text-[11.5px] font-serif font-semibold text-[#14261a] dark:text-slate-100 whitespace-pre-line leading-tight">
                      {area.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* UPCOMING EVENTS */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#2d5a3c] dark:bg-[#a2d45e]" />
                  <span className="text-[11px] font-bold tracking-[0.2em] text-[#4d5e50] dark:text-[#a2d45e] uppercase">
                    UPCOMING EVENTS
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button 
                    onClick={() => setCurrentEventIdx(prev => Math.max(prev - 1, 0))}
                    className="w-8 h-8 rounded-full bg-white dark:bg-[#11261a] border border-white/90 dark:border-[#1e422c] text-[#14261a] dark:text-[#a2d45e] flex items-center justify-center hover:scale-110 transition-all shadow-xs cursor-pointer disabled:opacity-40"
                    disabled={currentEventIdx === 0}
                  >
                    <ChevronLeft size={15} />
                  </button>
                  <button 
                    onClick={() => setCurrentEventIdx(prev => Math.min(prev + 1, upcomingEvents.length - 1))}
                    className="w-8 h-8 rounded-full bg-white dark:bg-[#11261a] border border-white/90 dark:border-[#1e422c] text-[#14261a] dark:text-[#a2d45e] flex items-center justify-center hover:scale-110 transition-all shadow-xs cursor-pointer"
                  >
                    <ChevronRight size={15} />
                  </button>
                </div>
              </div>

              {/* 4 Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {upcomingEvents.map((evt) => (
                  <Link key={evt.id} href={evt.link} className="block group">
                    <div className="rounded-[2rem] bg-gradient-to-b from-white/60 via-white/35 to-white/20 dark:from-[#0b1c14]/90 dark:via-[#08180f]/85 dark:to-[#040e08]/80 backdrop-blur-2xl border-[1.5px] border-white/95 dark:border-[#183a27] p-4 space-y-3 shadow-[inset_0_2px_4px_rgba(255,255,255,1),0_12px_28px_rgba(0,25,12,0.04)] dark:shadow-[0_12px_28px_rgba(0,0,0,0.3)] hover:-translate-y-1.5 transition-all duration-500">
                      
                      {/* Image Thumbnail with Date Tag overlay */}
                      <div className="h-32 rounded-2xl overflow-hidden bg-slate-100 dark:bg-[#05110a] relative shadow-xs">
                        <img 
                          src={evt.img} 
                          alt={evt.title} 
                          className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700" 
                        />
                        {/* Top Left Date Badge */}
                        <div className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-xl bg-[#0f2417]/85 backdrop-blur-md text-white border border-[#1e422c]/50 text-center shadow-md">
                          <span className="block text-sm font-serif font-bold leading-none">{evt.day}</span>
                          <span className="block text-[8px] font-bold tracking-wider text-[#a2d45e] uppercase">{evt.month}</span>
                        </div>
                      </div>

                      {/* Event Details */}
                      <div className="space-y-1.5 px-1">
                        <span className="inline-block px-2 py-0.5 rounded-full text-[8.5px] font-bold uppercase tracking-widest bg-[#eaf1e4] dark:bg-[#11261a] text-[#2d5a3c] dark:text-[#a2d45e]">
                          {evt.tag}
                        </span>

                        <h4 className="text-[14px] font-serif font-semibold text-[#14261a] dark:text-white leading-snug line-clamp-2 group-hover:text-[#2d5a3c] dark:group-hover:text-[#a2d45e] transition-colors">
                          {evt.title}
                        </h4>

                        <div className="space-y-1 pt-1 text-[11px] text-[#4d5e51] dark:text-slate-400 font-medium">
                          <div className="flex items-center gap-1.5">
                            <MapPin size={12} className="text-[#2d5a3c] dark:text-[#a2d45e] shrink-0" />
                            <span className="truncate">{evt.location}</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <Clock size={12} className="text-[#2d5a3c] dark:text-[#a2d45e] shrink-0" />
                            <span>{evt.duration}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column (4 cols): Our Impact Card */}
          <div className="lg:col-span-4 rounded-[2.2rem] bg-gradient-to-b from-white/60 via-white/40 to-white/20 dark:from-[#0b1c14]/90 dark:via-[#08180f]/85 dark:to-[#040e08]/80 backdrop-blur-3xl border-[1.5px] border-white/95 dark:border-[#183a27] p-7 shadow-[inset_0_2px_4px_rgba(255,255,255,1),0_20px_45px_rgba(0,25,12,0.05)] dark:shadow-[0_20px_45px_rgba(0,0,0,0.4)] space-y-6 relative overflow-hidden transition-all duration-500">
            <h3 className="text-2xl sm:text-3xl font-serif font-normal text-[#122016] dark:text-white pb-3 border-b border-white/80 dark:border-[#183a27]">
              Our Impact
            </h3>

            <div className="space-y-5">
              {[
                { count: '44', label: 'Schools Reached', sub: '(Gifted Students Programme)', icon: School },
                { count: '500+', label: 'Teachers Empowered', icon: Users },
                { count: '1000+', label: 'Students Impacted', icon: GraduationCap },
                { count: '1', label: 'Global Collaboration', sub: 'Clarkson University, USA', icon: Globe }
              ].map((stat, idx) => (
                <div key={idx} className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-b from-white/95 via-white/60 to-white/30 dark:from-[#132c1e] dark:to-[#0b1c14] backdrop-blur-2xl border-[1.5px] border-white dark:border-[#1e422c] shadow-[inset_0_2px_4px_rgba(255,255,255,1),0_6px_14px_rgba(0,25,12,0.08)] text-[#14261a] dark:text-[#a2d45e] flex items-center justify-center shrink-0">
                    <stat.icon size={20} strokeWidth={1.5} />
                  </div>
                  <div>
                    <span className="block text-3xl font-serif font-normal text-[#14261a] dark:text-white leading-none mb-0.5 tracking-tight">
                      {stat.count}
                    </span>
                    <span className="block text-[12.5px] font-medium text-[#485b4d] dark:text-slate-200">
                      {stat.label}
                    </span>
                    {stat.sub && (
                      <span className="block text-[10.5px] text-[#718476] dark:text-slate-400 font-normal">{stat.sub}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-white/80 dark:border-[#183a27] relative z-10">
              <Link href="/projects" className="inline-flex">
                <button className="px-6 py-3 rounded-full bg-white/60 hover:bg-white/90 dark:bg-[#0b1c14] dark:hover:bg-[#11261a] backdrop-blur-xl border-[1.5px] border-white dark:border-[#183a27] text-[#162d1f] dark:text-[#a2d45e] text-[11px] font-bold uppercase tracking-wider flex items-center gap-2.5 transition-all duration-500 hover:scale-[1.03] group cursor-pointer">
                  <span>Explore Our Initiatives</span>
                  <div className="w-5 h-5 rounded-full border border-slate-300 dark:border-[#1e422c] flex items-center justify-center">
                    <ArrowRight size={10} className="group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </button>
              </Link>
            </div>
          </div>

        </div>

        {/* ========================================================================= */}
        {/* 7. BUILDING PARTNERSHIPS. DRIVING CHANGE. SHOWCASE */}
        {/* ========================================================================= */}
        <div className="rounded-[2.4rem] bg-gradient-to-b from-white/55 via-white/40 to-white/20 dark:from-[#0b1c14]/90 dark:via-[#08180f]/85 dark:to-[#040e08]/80 backdrop-blur-3xl border-[1.5px] border-white/95 dark:border-[#183a27] p-6 sm:p-8 lg:p-10 shadow-[inset_0_2px_4px_rgba(255,255,255,1),0_20px_45px_rgba(0,25,12,0.05)] dark:shadow-[0_20px_45px_rgba(0,0,0,0.4)] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-20 transition-all duration-500">
          
          {/* Left Visual (3 cols) */}
          <div className="lg:col-span-3 h-48 rounded-[2rem] overflow-hidden border border-white/80 dark:border-[#183a27] shadow-sm relative">
            <img 
              src="/events/events_book_plant.jpg" 
              alt="Innovation and Collaboration" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" 
            />
            <div className="absolute inset-0 bg-[#1b3726]/30 flex items-center justify-center">
              <div className="w-14 h-14 rounded-full bg-gradient-to-b from-white/95 via-white/60 to-white/30 dark:from-[#132c1e] dark:to-[#0b1c14] backdrop-blur-2xl border-[1.5px] border-white dark:border-[#1e422c] shadow-[inset_0_2px_4px_rgba(255,255,255,1),0_6px_14px_rgba(0,25,12,0.08)] flex items-center justify-center text-[#2d5a3c] dark:text-[#a2d45e]">
                <Sparkles size={22} />
              </div>
            </div>
          </div>

          {/* Center Copy (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-1.5">
              <Leaf size={12} className="text-[#2d5a3c] dark:text-[#a2d45e] fill-[#2d5a3c] dark:fill-[#a2d45e]" />
              <span className="text-[10.5px] font-bold tracking-[0.18em] text-[#3d5042] dark:text-[#a2d45e] uppercase">
                PARTNERSHIPS & IMPACT
              </span>
            </div>

            <h3 className="text-3xl sm:text-4xl font-serif font-normal text-[#122016] dark:text-white leading-tight tracking-tight whitespace-pre-line drop-shadow-[0_1px_1px_rgba(255,255,255,0.7)] dark:drop-shadow-none">
              Building partnerships.<br />
              <span className="italic text-[#243d2c] dark:text-[#a2d45e] font-serif font-normal">Driving change.</span>
            </h3>

            <p className="text-[12.5px] text-[#445548] dark:text-slate-300 leading-[1.7] max-w-sm font-normal">
              We collaborate with institutions, educators and communities to create meaningful learning experiences and a brighter, sustainable future for all.
            </p>

            <div className="pt-2">
              <Link href="/projects" className="inline-flex">
                <button className="px-7 py-3.5 rounded-full bg-gradient-to-b from-[#1b3726] to-[#11261a] hover:from-[#234631] hover:to-[#173323] text-white text-[11px] font-bold uppercase tracking-wider flex items-center gap-3 transition-all duration-500 shadow-[0_12px_28px_rgba(15,35,22,0.32),inset_0_1px_1px_rgba(255,255,255,0.25)] hover:scale-[1.03] group cursor-pointer dark:bg-gradient-to-b dark:from-[#1b432a] dark:to-[#112c1b] dark:border dark:border-[#245437]">
                  <span>Our Initiatives</span>
                  <div className="w-5 h-5 rounded-full border border-white/35 flex items-center justify-center">
                    <ArrowRight size={10} className="text-white group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </button>
              </Link>
            </div>
          </div>

          {/* Right 2 Feature Cards (4 cols) */}
          <div className="lg:col-span-4 space-y-3.5">
            <div className="p-5 rounded-[2rem] bg-gradient-to-br from-white/60 via-white/40 to-white/20 dark:from-[#11261a]/90 dark:via-[#0c1f15]/80 dark:to-[#08160f]/80 backdrop-blur-2xl border-[1.5px] border-white/95 dark:border-[#183a27] shadow-[inset_0_2px_4px_rgba(255,255,255,1),0_10px_25px_rgba(0,25,12,0.04)] dark:shadow-[0_10px_25px_rgba(0,0,0,0.3)] flex items-center gap-4 group hover:-translate-y-1 transition-all duration-500">
              <div className="w-12 h-12 rounded-full bg-gradient-to-b from-white/95 via-white/60 to-white/30 dark:from-[#183d28] dark:to-[#112c1d] backdrop-blur-xl border border-white dark:border-[#1e422c] shadow-[inset_0_2px_3px_rgba(255,255,255,1),0_6px_14px_rgba(0,20,10,0.08)] flex items-center justify-center text-[#162d1f] dark:text-[#a2d45e] shrink-0 group-hover:scale-110 transition-transform">
                <GraduationCap size={20} strokeWidth={1.5} />
              </div>
              <div>
                <h4 className="text-[14px] font-serif font-semibold text-[#14261a] dark:text-white leading-tight">STEM Learning Lab</h4>
                <p className="text-[11.5px] text-[#4d5e51] dark:text-slate-300 leading-snug mt-0.5">Hands-on, activity-based STEM learning.</p>
              </div>
            </div>

            <div className="p-5 rounded-[2rem] bg-gradient-to-br from-white/60 via-white/40 to-white/20 dark:from-[#11261a]/90 dark:via-[#0c1f15]/80 dark:to-[#08160f]/80 backdrop-blur-2xl border-[1.5px] border-white/95 dark:border-[#183a27] shadow-[inset_0_2px_4px_rgba(255,255,255,1),0_10px_25px_rgba(0,25,12,0.04)] dark:shadow-[0_10px_25px_rgba(0,0,0,0.3)] flex items-center gap-4 group hover:-translate-y-1 transition-all duration-500">
              <div className="w-12 h-12 rounded-full bg-gradient-to-b from-white/95 via-white/60 to-white/30 dark:from-[#183d28] dark:to-[#112c1d] backdrop-blur-xl border border-white dark:border-[#1e422c] shadow-[inset_0_2px_3px_rgba(255,255,255,1),0_6px_14px_rgba(0,20,10,0.08)] flex items-center justify-center text-[#162d1f] dark:text-[#a2d45e] shrink-0 group-hover:scale-110 transition-transform">
                <Users size={20} strokeWidth={1.5} />
              </div>
              <div>
                <h4 className="text-[14px] font-serif font-semibold text-[#14261a] dark:text-white leading-tight">Scholar Connect</h4>
                <p className="text-[11.5px] text-[#4d5e51] dark:text-slate-300 leading-snug mt-0.5">A platform for research exchange and collaboration.</p>
              </div>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
