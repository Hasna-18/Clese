'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Leaf, 
  Sparkles, 
  MapPin, 
  Users, 
  School, 
  Building2, 
  FlaskConical, 
  ArrowRight, 
  CheckCircle2, 
  Globe, 
  Award, 
  Calendar,
  Compass,
  Cpu,
  GraduationCap,
  Layers,
  HeartHandshake
} from 'lucide-react';

const INITIATIVES_DATA = [
  {
    id: 1,
    tag: 'STATE-WIDE FLAGSHIP',
    title: "State-wide 'STEM 4 Girls' Camp Series",
    partner: 'Indian Council for Social Science Research (ICSSR), New Delhi',
    lead: 'Department of Education, University of Kerala',
    locations: 'Puthoor (Kollam), Paruthippally (Thiruvananthapuram), Nedumkandam (Idukki)',
    desc: 'Supported by funding from ICSSR, this state-wide initiative empowers young women from economically and socially disadvantaged families across Kerala by delivering hands-on robotics, microcontroller coding, and scientific problem-solving camps.',
    outcomes: 'Inaugurated by Finance Minister Sri. K. N. Balagopal; over 500+ girls empowered.',
    stats: [
      { label: 'Districts Covered', val: '3 Selected' },
      { label: 'Participants', val: '500+ Girls' },
      { label: 'Support Model', val: '100% Free / Funded' }
    ],
    img: '/events/workshop.jpg'
  },
  {
    id: 2,
    tag: 'GOVERNMENT OF KERALA COLLABORATION',
    title: 'STEM Training for Gifted Students Across 41 Educational Districts',
    partner: 'State Institute of Educational Technology (SIET), Govt. of Kerala',
    lead: 'LEnSE & Department of General Education',
    locations: 'All 41 Educational Districts across Kerala',
    desc: 'A comprehensive state-level program identifying and nurturing gifted school students. Features 3-day residential STEM bootcamps, hands-on science kits, and mentorship from leading educators.',
    outcomes: 'Inaugurated by Hon’ble Education Minister Sri. V. Sivankutty at ASTI Manvila.',
    stats: [
      { label: 'Educational Districts', val: '41 Districts' },
      { label: 'Schools Engaged', val: '44 Schools' },
      { label: 'Gifted Cohort', val: 'State-wide Selection' }
    ],
    img: '/events/events_book_plant.jpg'
  },
  {
    id: 3,
    tag: 'GLOBAL ACADEMIC ENGAGEMENT',
    title: 'LEnSE – Clarkson University International STEM Partnership',
    partner: 'STEM Centre, Clarkson University, USA',
    lead: 'Dr. Divya C. Senan & Prof. Jan De Waters',
    locations: 'Kerala & New York, USA',
    desc: 'Brings international expertise, clean technology benchmarks, and advanced learning engineering to Kerala educators. Facilitates joint faculty exchange and sustainable curriculum frameworks.',
    outcomes: 'Keynote addresses at the 4th SIET International Conference on Educational Technology.',
    stats: [
      { label: 'Scope', val: 'International' },
      { label: 'Focus Area', val: 'Clean Tech & Pedagogy' },
      { label: 'Exchange', val: 'Faculty & Scholars' }
    ],
    img: '/events/conference.jpg'
  },
  {
    id: 4,
    tag: 'HANDS-ON INFRASTRUCTURE',
    title: 'Dedicated STEM Learning Lab at Kazhakkoottam',
    partner: 'LEnSE Innovation Facility',
    lead: 'Centre for Learning Engineering & Sustainability Education',
    locations: 'Kazhakkoottam Campus, Thiruvananthapuram',
    desc: 'A physical innovation hub equipped with robotics workbench gear, environmental sensors, 3D prototyping tools, and digital courseware designed for students, teachers, and prospective educators.',
    outcomes: 'Daily experiential learning workshops and teacher capacity building sessions.',
    stats: [
      { label: 'Facility Type', val: 'Activity Lab' },
      { label: 'Modules', val: '50+ Lab Activities' },
      { label: 'Audience', val: 'K-12 & Teacher Trainees' }
    ],
    img: '/events/scholar.jpg'
  }
];

export default function InitiativesPage() {
  return (
    <div className="min-h-screen bg-[#f3f5ed] text-[#19241c] font-sans pb-28 pt-28 sm:pt-36 relative overflow-hidden selection:bg-[#a2d45e]/30">
      
      {/* Ambient background glows */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[20%] -left-40 w-[600px] h-[600px] bg-[#e2edd8]/40 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-8 w-[650px] h-[650px] bg-[#dbe8d0]/40 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-24">

        {/* ========================================================================= */}
        {/* 1. HERO SECTION */}
        {/* ========================================================================= */}
        <div className="relative">
          
          {/* Hero Visual on Right */}
          <div className="absolute top-0 right-0 w-full lg:w-[56%] h-[480px] sm:h-[540px] pointer-events-none z-0 rounded-l-[4rem] overflow-hidden select-none hidden lg:block">
            <img 
              src="/home/bg.png" 
              alt="LEnSE Initiatives & Outreach" 
              className="w-full h-full object-cover object-center scale-[1.03]" 
              onError={(e) => {
                e.currentTarget.src = "/events/events_book_plant.jpg";
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#f3f5ed] via-[#f3f5ed]/80 via-[20%] to-transparent to-[55%]" />
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#f3f5ed] via-[#f3f5ed]/60 to-transparent" />
            <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-[#f3f5ed] to-transparent" />
          </div>

          {/* Left Content */}
          <div className="relative z-10 max-w-xl space-y-5 pt-2 pb-6">
            
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs font-semibold text-[#485b4d]">
              <Leaf size={14} className="text-[#2d5a3c] fill-[#2d5a3c]" />
              <Link href="/" className="hover:text-[#1b3726] transition-colors">Home</Link>
              <span className="text-[#879b8c]">&gt;</span>
              <span className="text-[#1b3726] font-bold">Initiatives & Outreach</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[3.8rem] font-normal text-[#122016] leading-[1.1] tracking-tight font-serif">
              Community &amp; State<br />
              <span className="italic text-[#243d2c]">Initiatives</span>
            </h1>

            <p className="text-xl sm:text-2xl font-serif italic text-[#243d2c] leading-snug">
              Creating equitable access to STEM learning across Kerala.
            </p>

            <p className="text-[#405245] text-sm sm:text-[14.5px] leading-[1.7] max-w-lg font-normal">
              LEnSE follows an inclusive, socially responsible model. Programme fees collected from training activities are channeled to support disadvantaged students in rural schools across Kerala.
            </p>

            {/* Impact Metric Pills */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 max-w-lg">
              {[
                { count: '41', label: 'Districts Reached', icon: MapPin },
                { count: '2000+', label: 'Students Reached', icon: Users },
                { count: '500+', label: 'Teachers Trained', icon: School },
                { count: '100%', label: 'Social Reinvestment', icon: Award }
              ].map((m, i) => (
                <div key={i} className="p-3 rounded-2xl bg-white/85 border border-[#dce6dd] shadow-xs text-center">
                  <span className="block text-xl font-serif font-bold text-[#14261a]">{m.count}</span>
                  <span className="block text-[10px] text-[#556758] font-medium leading-tight">{m.label}</span>
                </div>
              ))}
            </div>

          </div>

        </div>

        {/* ========================================================================= */}
        {/* 2. INITIATIVES CARDS LIST */}
        {/* ========================================================================= */}
        <div className="space-y-8">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#2d5a3c]" />
              <span className="text-[10.5px] font-bold tracking-[0.2em] text-[#4d5e50] uppercase">
                STATE &amp; NATIONAL IMPACT
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#122016]">
              Key Outreach Initiatives
            </h2>
          </div>

          <div className="space-y-8">
            {INITIATIVES_DATA.map((item, idx) => (
              <div 
                key={item.id}
                className="rounded-[2.4rem] bg-white/90 backdrop-blur-xl border border-white/95 p-6 sm:p-8 lg:p-10 shadow-[0_4px_25px_rgba(0,0,0,0.03)] hover:shadow-xl transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center group"
              >
                {/* Left Thumbnail */}
                <div className="lg:col-span-4 h-64 sm:h-72 rounded-[1.8rem] overflow-hidden bg-slate-100 relative shadow-sm">
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700" 
                    onError={(e) => { e.currentTarget.src = "/events/events_book_plant.jpg"; }}
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#0d2216]/85 backdrop-blur-md text-[#a2d45e] text-[9.5px] font-bold uppercase tracking-wider">
                    {item.tag}
                  </div>
                </div>

                {/* Right Content */}
                <div className="lg:col-span-8 space-y-4">
                  <div className="space-y-1">
                    <span className="text-[11px] font-bold text-[#2d5a3c] uppercase tracking-wider block">
                      Partner: {item.partner}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#14261a] leading-tight">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-[13px] text-[#4d6052] leading-relaxed font-normal">
                    {item.desc}
                  </p>

                  <div className="p-3.5 rounded-xl bg-[#f4f8f3] border border-[#e2ede4] text-xs text-[#334b38] flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-[#2d5a3c] shrink-0" />
                    <span>{item.outcomes}</span>
                  </div>

                  {/* Stats Bar */}
                  <div className="grid grid-cols-3 gap-3 pt-2">
                    {item.stats.map((s, i) => (
                      <div key={i} className="p-2.5 rounded-xl bg-white border border-[#e2ede4] text-center shadow-xs">
                        <span className="block text-sm font-bold text-[#14261a]">{s.val}</span>
                        <span className="block text-[10px] text-[#637667] font-medium">{s.label}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <span className="text-xs text-[#718476] flex items-center gap-1.5">
                      <MapPin size={13} className="text-[#2d5a3c]" />
                      {item.locations}
                    </span>

                    <Link href="/contact" className="inline-flex items-center gap-2 text-xs font-bold text-[#1b3726] hover:text-[#2d5a3c] transition-colors">
                      <span>Request Camp at Your School</span>
                      <ArrowRight size={13} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 3. CTA BANNER */}
        {/* ========================================================================= */}
        <div className="rounded-[2.4rem] bg-[#eaf0e6] border border-[#dce8d8] p-6 sm:p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xs relative overflow-hidden">
          <div className="flex items-center gap-4 relative z-10">
            <div className="w-14 h-14 rounded-2xl bg-[#1b3726] text-white flex items-center justify-center shrink-0 shadow-sm">
              <HeartHandshake size={24} />
            </div>
            <div className="space-y-1">
              <h3 className="text-xl sm:text-2xl font-serif text-[#122016]">
                Partner with LEnSE for School STEM Camps
              </h3>
              <p className="text-xs sm:text-[13px] text-[#4d6052] max-w-lg">
                Are you an educator, district administrator, or school principal? Invite LEnSE to conduct hands-on STEM workshops and activity camps for your students.
              </p>
            </div>
          </div>

          <div className="relative z-10 shrink-0">
            <Link href="/contact">
              <button className="px-7 py-3.5 rounded-full bg-[#1b3726] hover:bg-[#254d35] text-white text-xs font-bold tracking-wider flex items-center gap-2.5 transition-all shadow-md cursor-pointer">
                <span>Request Camp Partnership</span>
                <ArrowRight size={14} />
              </button>
            </Link>
          </div>
        </div>

      </div>

    </div>
  );
}
