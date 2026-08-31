'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Leaf, 
  Download, 
  FileText, 
  Search, 
  BookOpen, 
  GraduationCap, 
  ExternalLink, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles,
  Layers,
  FlaskConical,
  Award,
  Filter
} from 'lucide-react';

const RESOURCES_DATA = [
  {
    id: 1,
    title: '4th SIET International Conference Official Brochure',
    category: 'Brochures',
    type: 'PDF',
    size: '1.2 MB',
    desc: 'Complete conference schedule, keynote profiles (Prof. Jan De Waters), themes on STEAM in Education, and registration guidelines.',
    date: 'March 2025',
    downloadUrl: '#'
  },
  {
    id: 2,
    title: 'Call for Papers: SIET & LEnSE Annual Educational Technology Proceedings',
    category: 'Submissions',
    type: 'PDF',
    size: '876 KB',
    desc: 'Paper formatting guidelines, submission tracks, peer review criteria, and deadlines for scholars and educational researchers.',
    date: 'February 2025',
    downloadUrl: '#'
  },
  {
    id: 3,
    title: 'FYUGP Semester II Extended Learning Module: Selected Literary Terms',
    category: 'Courseware',
    type: 'PDF / Interactive',
    size: '2.4 MB',
    desc: 'Technology-enabled supplementary coursework developed by Ms. Greeshma Raveendran with Dr. Divya C. Senan under University of Kerala.',
    date: 'January 2025',
    downloadUrl: '#'
  },
  {
    id: 4,
    title: 'Hands-on Activity Toolkit: School STEM Learning Lab Curriculum',
    category: 'Toolkits',
    type: 'PDF',
    size: '3.8 MB',
    desc: 'Comprehensive manual containing 50+ experiential lab activities, microcontroller coding tutorials, and robotics experiments for K-12 educators.',
    date: 'May 2025',
    downloadUrl: '#'
  },
  {
    id: 5,
    title: 'Prompt Engineering for Higher Education Educators: Instructional Guide',
    category: 'Guides',
    type: 'PDF',
    size: '1.5 MB',
    desc: 'Curated handbook from Dr. Briju Tankachan (EdTech Society & IIT Mumbai) on leveraging generative AI tools to improve classroom instruction quality.',
    date: 'January 2025',
    downloadUrl: '#'
  },
  {
    id: 6,
    title: 'Institutional Annual Report & Policy Document (LEnSE / CLESE 2024-2025)',
    category: 'Reports',
    type: 'PDF',
    size: '4.2 MB',
    desc: 'Comprehensive review of state camp series, gift student programs, international grants, and social inclusion reinvestment metrics.',
    date: 'August 2025',
    downloadUrl: '#'
  }
];

export default function ResourcesPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'Brochures', 'Submissions', 'Courseware', 'Toolkits', 'Guides', 'Reports'];

  const filteredResources = RESOURCES_DATA.filter(res => {
    const matchesCat = selectedCategory === 'All' || res.category === selectedCategory;
    const matchesSearch = searchQuery === '' || 
      res.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      res.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      res.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

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
          <div className="absolute top-0 right-0 w-full lg:w-[56%] h-[440px] sm:h-[500px] pointer-events-none z-0 rounded-l-[4rem] overflow-hidden select-none hidden lg:block">
            <img 
              src="/home/bg.png" 
              alt="LEnSE Resources & Downloads" 
              className="w-full h-full object-cover object-center scale-[1.03]" 
              onError={(e) => {
                e.currentTarget.src = "/events/events_book_plant.jpg";
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#f3f5ed] via-[#f3f5ed]/80 via-[20%] to-transparent to-[55%]" />
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#f3f5ed] via-[#f3f5ed]/60 to-transparent" />
            <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-[#f3f5ed] to-transparent" />
          </div>

          {/* Left Hero Content */}
          <div className="relative z-10 max-w-xl space-y-5 pt-2 pb-6">
            
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs font-semibold text-[#485b4d]">
              <Leaf size={14} className="text-[#2d5a3c] fill-[#2d5a3c]" />
              <Link href="/" className="hover:text-[#1b3726] transition-colors">Home</Link>
              <span className="text-[#879b8c]">&gt;</span>
              <span className="text-[#1b3726] font-bold">Academic Resources</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[3.8rem] font-normal text-[#122016] leading-[1.1] tracking-tight font-serif">
              Resources &amp;<br />
              <span className="italic text-[#243d2c]">Downloads</span>
            </h1>

            <p className="text-[#405245] text-sm sm:text-[14.5px] leading-[1.7] max-w-lg font-normal">
              Access digital courseware, conference proceedings, STEM learning toolkits, educator handbooks, and institutional reports published by LEnSE.
            </p>

            {/* Quick Badges */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <span className="px-3.5 py-1.5 rounded-full bg-white/90 border border-[#d5e2d6] text-xs font-bold text-[#1b3726] shadow-xs">
                Open Access Digital Courseware
              </span>
              <span className="px-3.5 py-1.5 rounded-full bg-white/90 border border-[#d5e2d6] text-xs font-medium text-[#4b5d50] shadow-xs">
                Peer-Reviewed Toolkits
              </span>
            </div>

          </div>

        </div>

        {/* ========================================================================= */}
        {/* 2. SEARCH & FILTER CONTROLS */}
        {/* ========================================================================= */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-2">
          
          {/* Category Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto no-scrollbar py-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#1b3726] text-white shadow-sm'
                    : 'bg-white/80 hover:bg-white text-[#384c3e] border border-[#dbe6dc]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full sm:w-64 shrink-0">
            <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#7f9484]" />
            <input 
              type="text" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search downloads..."
              className="w-full pl-10 pr-4 py-2 rounded-full bg-white border border-[#d5e2d6] text-xs font-medium text-[#19241c] placeholder:text-[#7f9484] focus:outline-none focus:ring-2 focus:ring-[#2d5a3c]/30 shadow-xs"
            />
          </div>

        </div>

        {/* ========================================================================= */}
        {/* 3. DOWNLOADABLE RESOURCES GRID */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResources.map((res) => (
            <div 
              key={res.id} 
              className="rounded-[2.2rem] bg-white/90 backdrop-blur-xl border border-white/95 p-6 space-y-4 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-lg hover:-translate-y-1 transition-all flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded-md bg-[#eaf1e4] text-[#2d5a3c] text-[9.5px] font-bold uppercase tracking-wider">
                    {res.category}
                  </span>
                  <span className="text-[11px] font-bold text-[#718476]">
                    {res.type} • {res.size}
                  </span>
                </div>

                <h3 className="text-[16px] font-serif font-bold text-[#14261a] leading-snug group-hover:text-[#2d5a3c] transition-colors">
                  {res.title}
                </h3>

                <p className="text-[12px] text-[#4d6052] leading-relaxed font-normal">
                  {res.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-[#f0f4ef] flex items-center justify-between">
                <span className="text-[11px] text-[#718476] font-medium">
                  {res.date}
                </span>

                <button 
                  onClick={() => alert(`Downloading: ${res.title}`)}
                  className="px-4 py-2 rounded-full bg-[#f4f7f2] group-hover:bg-[#1b3726] group-hover:text-white text-[#1b3726] text-xs font-bold flex items-center gap-2 transition-all shadow-xs cursor-pointer"
                >
                  <span>Download</span>
                  <Download size={13} />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

    </div>
  );
}
