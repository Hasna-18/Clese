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
  Lightbulb,
  Building,
  School,
  Award,
  ChevronLeft,
  ChevronRight,
  BookOpen,
  MapPin,
  Clock,
  Compass,
  Monitor,
  HeartHandshake,
  Layers,
  Cpu,
  Tv,
  CheckCircle2,
  Mail
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
    <div className="min-h-screen bg-[#f3f5ed] text-[#19241c] font-sans pb-28 pt-28 sm:pt-36 relative overflow-hidden selection:bg-[#a2d45e]/30">
      
      {/* Ambient background glows */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[20%] -left-40 w-[600px] h-[600px] bg-[#e2edd8]/40 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-8 w-[650px] h-[650px] bg-[#dbe8d0]/40 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 sm:space-y-28">

        {/* ========================================================================= */}
        {/* 1. HERO SECTION */}
        {/* ========================================================================= */}
        <div className="relative">
          
          {/* Hero Visual on the Right (Microscope, Flasks, Books, Tablet, Foliage) */}
          <div className="absolute top-0 right-0 w-full lg:w-[58%] h-[500px] sm:h-[580px] lg:h-[640px] pointer-events-none z-0 rounded-l-[4rem] overflow-hidden select-none hidden lg:block">
            <img 
              src="/home/bg.png" 
              alt="LEnSE Science & Sustainability" 
              className="w-full h-full object-cover object-center scale-[1.03]" 
              onError={(e) => {
                e.currentTarget.src = "/events/events_book_plant.jpg";
              }}
            />
            {/* Blending gradients */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#f3f5ed] via-[#f3f5ed]/80 via-[22%] to-transparent to-[55%]" />
            <div className="absolute bottom-0 left-0 right-0 h-36 bg-gradient-to-t from-[#f3f5ed] via-[#f3f5ed]/70 to-transparent" />
            <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#f3f5ed] to-transparent" />
          </div>

          {/* Left Hero Content */}
          <div className="relative z-10 max-w-xl space-y-6 pt-2 pb-6">
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-[#d5e2d6] text-[#2d5a3c] text-[11px] font-bold tracking-wide shadow-xs">
              <Leaf size={14} className="fill-[#2d5a3c]" />
              <span>Learning Today, Sustaining Tomorrow</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[4rem] font-normal text-[#122016] leading-[1.08] tracking-tight font-serif">
              Empowering minds.<br />
              Building a <span className="italic text-[#243d2c]">sustainable</span><br />
              future.
            </h1>

            {/* Subtext */}
            <p className="text-[#405245] text-sm sm:text-[14.5px] leading-[1.7] max-w-lg font-normal">
              Advancing innovative, inclusive and sustainable education with a special focus on STEM. Together, let's create impactful learning experiences and a better tomorrow.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link href="/about">
                <button className="px-7 py-3.5 rounded-full bg-gradient-to-b from-[#1b3726] to-[#11261a] hover:from-[#234631] hover:to-[#173323] text-white text-[11.5px] font-bold uppercase tracking-wider flex items-center gap-3 transition-all duration-500 shadow-[0_10px_25px_rgba(15,35,22,0.25)] hover:scale-[1.02] group cursor-pointer">
                  <span>Explore Our Journey</span>
                  <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
                </button>
              </Link>

              <Link href="/events">
                <button className="px-6 py-3.5 rounded-full bg-white/90 hover:bg-white border border-[#c6d7ca] text-[#1b3726] text-[11.5px] font-bold tracking-wider flex items-center gap-2.5 transition-all shadow-xs hover:shadow-md cursor-pointer">
                  <span>Upcoming Events</span>
                  <Calendar size={15} className="text-[#2d5a3c]" />
                </button>
              </Link>
            </div>

            {/* Our Trusted Collaborators */}
            <div className="pt-8 space-y-3">
              <p className="text-[11px] font-bold uppercase tracking-wider text-[#637667]">
                Our Trusted Collaborators
              </p>
              
              <div className="flex flex-wrap items-center gap-4 sm:gap-6 opacity-85">
                {/* SIET */}
                <div className="flex items-center gap-2 bg-white/60 px-3 py-1.5 rounded-xl border border-[#dce6dd] shadow-xs">
                  <div className="w-6 h-6 rounded-full bg-[#1b3726] text-white flex items-center justify-center text-[9px] font-bold">
                    S
                  </div>
                  <div>
                    <span className="block text-[11px] font-bold text-[#14261a] leading-tight">SIET</span>
                    <span className="block text-[8.5px] text-[#556758] leading-none">Govt. of Kerala</span>
                  </div>
                </div>

                {/* REFORM */}
                <div className="flex items-center gap-1.5 bg-white/60 px-3 py-1.5 rounded-xl border border-[#dce6dd] shadow-xs">
                  <Sparkles size={14} className="text-[#2d5a3c]" />
                  <span className="text-[11px] font-black text-[#14261a] tracking-wider">REFORM</span>
                </div>

                {/* Child Development Centre */}
                <div className="flex items-center gap-2 bg-white/60 px-3 py-1.5 rounded-xl border border-[#dce6dd] shadow-xs">
                  <div className="w-5 h-5 rounded-full bg-[#2d5a3c]/20 text-[#2d5a3c] flex items-center justify-center text-[9px] font-bold">
                    C
                  </div>
                  <div>
                    <span className="block text-[10px] font-bold text-[#14261a] leading-tight">Child Development Centre</span>
                    <span className="block text-[8px] text-[#556758] leading-none">Kazhakkoottam</span>
                  </div>
                </div>

                {/* Clarkson University */}
                <div className="flex items-center gap-2 bg-white/60 px-3 py-1.5 rounded-xl border border-[#dce6dd] shadow-xs">
                  <div className="w-5 h-5 rounded-full bg-[#004f2d] text-white flex items-center justify-center text-[9px] font-bold">
                    C
                  </div>
                  <div>
                    <span className="block text-[10.5px] font-bold text-[#14261a] leading-tight">Clarkson</span>
                    <span className="block text-[8.5px] text-[#556758] leading-none">University</span>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* ========================================================================= */}
        {/* 2. FIVE CORE VALUES RIBBON DOCK */}
        {/* ========================================================================= */}
        <div className="p-3 sm:p-4 rounded-[2.5rem] bg-gradient-to-b from-white/60 via-white/40 to-white/20 backdrop-blur-2xl border border-white/95 shadow-[inset_0_2px_4px_rgba(255,255,255,1),0_15px_35px_rgba(0,25,12,0.04)]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 divide-y sm:divide-y-0 sm:divide-x divide-white/80">
            {[
              {
                icon: Users,
                title: 'Inclusive by Purpose',
                desc: 'Creating opportunities for all learners.'
              },
              {
                icon: Leaf,
                title: 'Sustainability at Core',
                desc: 'Education that builds a better tomorrow.'
              },
              {
                icon: Atom,
                title: 'STEM Focused',
                desc: 'Hands-on learning for real-world impact.'
              },
              {
                icon: Globe,
                title: 'Global Connections',
                desc: 'Collaborating across borders for knowledge and growth.'
              },
              {
                icon: FlaskConical,
                title: 'Innovation Driven',
                desc: 'Inspiring curiosity and nurturing creativity.'
              }
            ].map((pillar, idx) => (
              <div key={idx} className="flex flex-col items-center text-center p-5 group hover:bg-white/40 rounded-2xl transition-all">
                <div className="w-12 h-12 rounded-full bg-white/90 border border-white shadow-sm flex items-center justify-center text-[#2d5a3c] mb-3 group-hover:scale-110 transition-transform">
                  <pillar.icon size={20} strokeWidth={1.5} />
                </div>
                <h4 className="text-[13.5px] font-bold text-[#14261a] mb-1">
                  {pillar.title}
                </h4>
                <p className="text-[11.5px] text-[#4d6052] leading-snug">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 3. ABOUT LEnSE SECTION */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Description (4 cols) */}
          <div className="lg:col-span-4 space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#2d5a3c]" />
                <span className="text-[10.5px] font-bold tracking-[0.2em] text-[#4d5e50] uppercase">
                  ABOUT LEnSE
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-serif text-[#122016] leading-snug">
                Driving <span className="italic text-[#243d2c]">meaningful change</span> through education.
              </h2>

              <p className="text-xs sm:text-[12.5px] text-[#455749] leading-relaxed font-normal">
                Established in 2024, the Centre for Learning Engineering and Sustainability Education (LEnSE) promotes innovative, inclusive and sustainable approaches to education, with a special focus on STEM education.
              </p>

              <p className="text-xs sm:text-[12.5px] text-[#455749] leading-relaxed font-normal">
                We organize seminars, workshops, conferences, training programmes and academic activities that inspire learners, empower educators and strengthen communities.
              </p>
            </div>

            <div className="pt-2">
              <Link href="/about" className="inline-flex items-center gap-2 text-xs font-bold text-[#1b3726] hover:text-[#2d5a3c] transition-colors group">
                <span>Learn more about us</span>
                <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
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
              <div key={i} className="p-5 rounded-3xl bg-white/70 backdrop-blur-xl border border-white/90 shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex flex-col justify-between hover:bg-white transition-all group">
                <div className="w-9 h-9 rounded-xl bg-[#eaf1e4] text-[#2d5a3c] flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                  <card.icon size={18} strokeWidth={1.5} />
                </div>
                <div>
                  <span className="block text-[10.5px] text-[#556758] font-medium leading-tight mb-1">{card.label}</span>
                  <span className="block text-2xl font-serif font-bold text-[#122016] leading-none">{card.value}</span>
                  {card.sub && <span className="block text-[10px] text-[#556758] font-medium mt-0.5">{card.sub}</span>}
                </div>
              </div>
            ))}
          </div>

          {/* Right University Campus Card (4 cols) */}
          <div className="lg:col-span-4 rounded-[2.2rem] overflow-hidden bg-slate-900 border border-white/90 shadow-md relative group flex flex-col justify-end min-h-[260px]">
            <img 
              src="/about/about4.png" 
              alt="LEnSE Campus Solar Facility" 
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
              onError={(e) => {
                e.currentTarget.src = "/events/sustainability.jpg";
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d2216]/95 via-[#0d2216]/40 to-transparent" />
            
            <div className="relative z-10 p-6 text-white space-y-1">
              <div className="flex items-center justify-between">
                <h4 className="text-[15px] font-bold text-white">Creating a better tomorrow</h4>
                <Leaf size={16} className="text-[#a2d45e]" />
              </div>
              <p className="text-[11px] text-[#c2d8c7] leading-tight font-normal">
                through education, innovation and sustainability.
              </p>
            </div>
          </div>

        </div>

        {/* ========================================================================= */}
        {/* 4. WHAT WE DO SECTION */}
        {/* ========================================================================= */}
        <div className="space-y-8">
          <div className="text-center space-y-1.5 max-w-xl mx-auto">
            <span className="text-[10.5px] font-bold tracking-[0.2em] text-[#4d5e50] uppercase block">
              WHAT WE DO
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#122016]">
              Empowering through <span className="italic text-[#243d2c]">learning and discovery</span>
            </h2>
          </div>

          {/* 5 Cards Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5">
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
              <div key={idx} className="p-5 rounded-[2rem] bg-white/80 backdrop-blur-xl border border-white/95 shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex flex-col justify-between hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
                <div className="space-y-3">
                  <div className="w-full h-32 rounded-2xl overflow-hidden bg-slate-100 shadow-xs relative">
                    <img 
                      src={item.img} 
                      alt={item.title} 
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700" 
                    />
                  </div>
                  <h3 className="text-[15px] font-serif font-semibold text-[#14261a]">
                    {item.title}
                  </h3>
                  <p className="text-[11.5px] text-[#4d6052] leading-snug">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 flex justify-end">
                  <Link href={item.link} className="w-8 h-8 rounded-full bg-[#f4f7f2] group-hover:bg-[#1b3726] group-hover:text-white text-[#1b3726] flex items-center justify-center transition-colors shadow-xs">
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 5. OUR FOCUS AREAS & OUR IMPACT */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column (8 cols): Focus Areas + Upcoming Events */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* FOCUS AREAS */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#2d5a3c]" />
                <span className="text-[10.5px] font-bold tracking-[0.2em] text-[#4d5e50] uppercase">
                  OUR FOCUS AREAS
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                {[
                  { title: 'STEM\nEducation', icon: Atom },
                  { title: 'Digital Learning\n& AI in Education', icon: Monitor },
                  { title: 'Sustainability\nEducation', icon: Leaf },
                  { title: 'Teacher Capacity\nBuilding', icon: Users },
                  { title: 'Research &\nInnovation', icon: GraduationCap },
                  { title: 'Equity & Inclusive\nEducation', icon: HeartHandshake }
                ].map((area, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-white/75 backdrop-blur-md border border-white/95 text-center flex flex-col items-center justify-center hover:bg-white transition-all shadow-xs group">
                    <div className="w-9 h-9 rounded-xl bg-[#eaf1e4] text-[#2d5a3c] flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                      <area.icon size={18} strokeWidth={1.5} />
                    </div>
                    <span className="text-[10.5px] font-bold text-[#14261a] whitespace-pre-line leading-tight">
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
                  <div className="w-1.5 h-1.5 rounded-full bg-[#2d5a3c]" />
                  <span className="text-[10.5px] font-bold tracking-[0.2em] text-[#4d5e50] uppercase">
                    UPCOMING EVENTS
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button 
                    onClick={() => setCurrentEventIdx(prev => Math.max(prev - 1, 0))}
                    className="w-7 h-7 rounded-full bg-white border border-[#d5e2d6] text-[#2d5a3c] flex items-center justify-center hover:bg-[#eaf1e4] transition-colors shadow-xs cursor-pointer disabled:opacity-40"
                    disabled={currentEventIdx === 0}
                  >
                    <ChevronLeft size={15} />
                  </button>
                  <button 
                    onClick={() => setCurrentEventIdx(prev => Math.min(prev + 1, upcomingEvents.length - 1))}
                    className="w-7 h-7 rounded-full bg-white border border-[#d5e2d6] text-[#2d5a3c] flex items-center justify-center hover:bg-[#eaf1e4] transition-colors shadow-xs cursor-pointer"
                  >
                    <ChevronRight size={15} />
                  </button>
                </div>
              </div>

              {/* 4 Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {upcomingEvents.map((evt) => (
                  <Link key={evt.id} href={evt.link} className="block group">
                    <div className="rounded-[1.8rem] bg-white/85 backdrop-blur-xl border border-white/95 p-3.5 space-y-3 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-md hover:-translate-y-1 transition-all">
                      {/* Image Thumbnail with Date Tag overlay */}
                      <div className="h-32 rounded-2xl overflow-hidden bg-slate-100 relative shadow-xs">
                        <img 
                          src={evt.img} 
                          alt={evt.title} 
                          className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700" 
                        />
                        {/* Top Left Date Badge */}
                        <div className="absolute top-2.5 left-2.5 px-2 py-1 rounded-xl bg-[#0f2417]/85 backdrop-blur-md text-white text-center shadow-md">
                          <span className="block text-sm font-bold leading-none">{evt.day}</span>
                          <span className="block text-[8px] tracking-wider text-[#a2d45e] uppercase">{evt.month}</span>
                        </div>
                      </div>

                      {/* Event Details */}
                      <div className="space-y-1.5 px-1">
                        <span className="inline-block px-2 py-0.5 rounded text-[8.5px] font-bold uppercase tracking-widest bg-[#eaf1e4] text-[#2d5a3c]">
                          {evt.tag}
                        </span>

                        <h4 className="text-[12.5px] font-bold text-[#14261a] leading-tight line-clamp-2 group-hover:text-[#2d5a3c] transition-colors">
                          {evt.title}
                        </h4>

                        <div className="space-y-1 pt-1 text-[10.5px] text-[#556758]">
                          <div className="flex items-center gap-1.5">
                            <MapPin size={12} className="text-[#2d5a3c] shrink-0" />
                            <span className="truncate">{evt.location}</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <Clock size={12} className="text-[#2d5a3c] shrink-0" />
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
          <div className="lg:col-span-4 rounded-[2.2rem] bg-white/90 backdrop-blur-xl border border-white/95 p-7 shadow-[0_8px_30px_rgba(0,0,0,0.03)] space-y-6 relative overflow-hidden">
            <h3 className="text-xl font-serif text-[#122016] pb-2 border-b border-[#f0f4ef]">
              Our Impact
            </h3>

            <div className="space-y-5">
              {[
                { count: '44', label: 'Schools Reached', sub: '(Gifted Students Programme)', icon: School },
                { count: '500+', label: 'Teachers Empowered', icon: Users },
                { count: '1000+', label: 'Students Impacted', icon: GraduationCap },
                { count: '1', label: 'Global Academic Collaboration', icon: Globe }
              ].map((stat, idx) => (
                <div key={idx} className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-[#eaf1e4] text-[#2d5a3c] flex items-center justify-center shrink-0 shadow-xs">
                    <stat.icon size={20} strokeWidth={1.5} />
                  </div>
                  <div>
                    <span className="block text-2xl font-serif font-bold text-[#14261a] leading-none mb-0.5">
                      {stat.count}
                    </span>
                    <span className="block text-xs font-semibold text-[#485b4d]">
                      {stat.label}
                    </span>
                    {stat.sub && (
                      <span className="block text-[10px] text-[#718476]">{stat.sub}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-[#f0f4ef] relative z-10">
              <Link href="/projects" className="inline-flex items-center gap-2 text-xs font-bold text-[#1b3726] hover:text-[#2d5a3c] transition-colors group">
                <span>Explore Our Initiatives</span>
                <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>

            {/* Botanical corner sketch */}
            <div className="absolute right-0 bottom-0 pointer-events-none opacity-30 translate-x-2 translate-y-2">
              <svg width="120" height="120" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M80 100C80 70 100 50 100 50C100 50 80 30 80 0C80 30 60 50 60 50C60 50 80 70 80 100Z" fill="#2d5a3c" />
              </svg>
            </div>
          </div>

        </div>

        {/* ========================================================================= */}
        {/* 6. BUILDING PARTNERSHIPS. DRIVING CHANGE. SHOWCASE */}
        {/* ========================================================================= */}
        <div className="rounded-[2.4rem] bg-gradient-to-r from-[#f7f9f5] via-white to-[#f4f8f2] border border-white/95 p-6 sm:p-8 lg:p-10 shadow-[0_10px_35px_rgba(0,0,0,0.03)] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Book / AI Visual (3 cols) */}
          <div className="lg:col-span-3 h-48 rounded-2xl overflow-hidden bg-slate-100 shadow-sm relative">
            <img 
              src="/events/events_book_plant.jpg" 
              alt="Innovation and Collaboration" 
              className="w-full h-full object-cover" 
            />
            <div className="absolute inset-0 bg-[#1b3726]/30 flex items-center justify-center">
              <div className="w-14 h-14 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-[#2d5a3c] shadow-lg">
                <Sparkles size={24} />
              </div>
            </div>
          </div>

          {/* Center Copy (5 cols) */}
          <div className="lg:col-span-5 space-y-3">
            <h3 className="text-2xl sm:text-3xl font-serif text-[#122016] leading-tight">
              Building partnerships.<br />
              <span className="italic text-[#243d2c]">Driving change.</span>
            </h3>
            <p className="text-xs sm:text-[12.5px] text-[#4d6052] leading-relaxed max-w-sm">
              We collaborate with institutions, educators and communities to create meaningful learning experiences and a brighter, sustainable future for all.
            </p>
            <div className="pt-2">
              <Link href="/projects">
                <button className="px-6 py-2.5 rounded-full bg-[#1b3726] hover:bg-[#254c35] text-white text-[11px] font-bold uppercase tracking-wider flex items-center gap-2 transition-all shadow-sm cursor-pointer">
                  <span>Our Initiatives</span>
                  <ArrowRight size={13} />
                </button>
              </Link>
            </div>
          </div>

          {/* Right 2 Feature Cards (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <div className="p-4 rounded-2xl bg-white border border-[#e4ede6] shadow-xs flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-[#eaf1e4] text-[#2d5a3c] flex items-center justify-center shrink-0">
                <GraduationCap size={20} strokeWidth={1.5} />
              </div>
              <div>
                <h4 className="text-[13px] font-bold text-[#14261a]">STEM Learning Lab</h4>
                <p className="text-[11px] text-[#556758] leading-tight">Hands-on, activity-based STEM learning.</p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-[#e4ede6] shadow-xs flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-[#eaf1e4] text-[#2d5a3c] flex items-center justify-center shrink-0">
                <Users size={20} strokeWidth={1.5} />
              </div>
              <div>
                <h4 className="text-[13px] font-bold text-[#14261a]">Scholar Connect</h4>
                <p className="text-[11px] text-[#556758] leading-tight">A platform for research exchange and collaboration.</p>
              </div>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
