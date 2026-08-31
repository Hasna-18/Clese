'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Leaf, 
  Search, 
  Calendar, 
  ArrowRight, 
  ChevronLeft, 
  ChevronRight, 
  CheckCircle2, 
  GraduationCap, 
  Trophy, 
  Handshake, 
  FlaskConical, 
  Users, 
  Radio, 
  Bell, 
  FileText,
  Mail,
  ExternalLink,
  BookOpen,
  Globe
} from 'lucide-react';

const CATEGORIES = [
  'All',
  'Achievements',
  'Partnerships',
  'Research',
  'Initiatives',
  'Community',
  'Media',
  'Announcements'
];

const FEATURED_NEWS = {
  id: 'featured-1',
  tag: 'FEATURED STORY',
  title: 'LEnSE and Clarkson University Strengthen Global Collaboration',
  desc: 'A major step towards advancing STEM education through joint research, faculty exchange and innovative learning initiatives.',
  date: '18 May 2025',
  category: 'Partnerships',
  link: '#'
};

const NEWS_LIST = [
  {
    id: 1,
    tag: 'ACHIEVEMENT',
    category: 'Achievements',
    title: 'LEnSE Receives Outstanding STEM Outreach Initiative Award 2025',
    desc: 'Recognized for impactful contribution to bringing quality STEM learning opportunities to school students across Kerala.',
    date: '12 May 2025',
    imageUrl: '/events/events_book_plant.jpg'
  },
  {
    id: 2,
    tag: 'INITIATIVE',
    category: 'Initiatives',
    title: 'New STEM Learning Lab Inaugurated at Kazhakkoottam',
    desc: 'The new lab will support hands-on, experiential STEM learning for students, teachers and prospective educators.',
    date: '5 May 2025',
    imageUrl: '/events/workshop.jpg'
  },
  {
    id: 3,
    tag: 'PARTNERSHIP',
    category: 'Partnerships',
    title: 'MoU Signed with SIET for Academic Collaboration',
    desc: 'A collaborative step to enhance teacher training, digital learning and academic resource development.',
    date: '22 Apr 2025',
    imageUrl: '/events/conference.jpg'
  },
  {
    id: 4,
    tag: 'RESEARCH',
    category: 'Research',
    title: 'Research Highlight: AI in Education for Personalized Learning',
    desc: 'LEnSE researchers explore AI-driven approaches to create adaptive and inclusive learning experiences.',
    date: '10 Apr 2025',
    imageUrl: '/events/scholar.jpg'
  },
  {
    id: 5,
    tag: 'COMMUNITY',
    category: 'Community',
    title: 'State-wide STEM 4 Girls Camp Concludes with 500+ Participants',
    desc: 'Empowering young women from underserved schools in Kollam and Thiruvananthapuram with practical robotics and coding.',
    date: '28 Mar 2025',
    imageUrl: '/events/sustainability.jpg'
  },
  {
    id: 6,
    tag: 'ANNOUNCEMENTS',
    category: 'Announcements',
    title: 'Call for Papers: SIET & LEnSE Annual STEM Conference 2025',
    desc: 'Scholars, educators and postgraduate researchers are invited to submit original research papers on emerging pedagogy.',
    date: '15 Mar 2025',
    imageUrl: '/events/events_globe_books.jpg'
  }
];

const GLANCE_STATS = [
  { label: 'Total News', count: '48', icon: FileText },
  { label: 'Achievements', count: '12', icon: Trophy },
  { label: 'Partnerships', count: '09', icon: Handshake },
  { label: 'Research Updates', count: '11', icon: FlaskConical },
  { label: 'Initiatives', count: '08', icon: Globe },
  { label: 'Community Stories', count: '05', icon: Users },
  { label: 'Media Features', count: '03', icon: Radio }
];

const MEDIA_MENTIONS = [
  {
    id: 1,
    source: 'The Hindu',
    badge: 'THE HINDU',
    badgeBg: 'bg-slate-900 text-white font-serif',
    title: "LEnSE's STEM Camp Featured in The Hindu",
    date: '15 May 2025'
  },
  {
    id: 2,
    source: 'Mathrubhumi News',
    badge: 'm',
    badgeSub: 'MATHRUBHUMI',
    badgeBg: 'bg-[#0f4c81] text-white font-bold',
    title: 'Innovative Teacher Training Initiative by LEnSE',
    subtitle: 'Mathrubhumi News',
    date: '28 Apr 2025'
  },
  {
    id: 3,
    source: 'News Bytes',
    badge: 'NEWS BYTES',
    badgeBg: 'bg-slate-100 text-slate-800 font-bold border border-slate-300',
    title: 'LEnSE Clarkson Collaboration in News Bytes',
    date: '21 Apr 2025'
  }
];

export default function NewsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setTimeout(() => {
      setEmail('');
      setSubscribed(false);
    }, 4000);
  };

  const filteredNews = NEWS_LIST.filter(item => {
    const matchesCategory = selectedCategory === 'All' || item.category.toLowerCase() === selectedCategory.toLowerCase();
    const matchesSearch = searchQuery === '' || 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      item.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tag.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#f3f5ed] text-[#19241c] font-sans pb-28 pt-28 sm:pt-36 relative overflow-hidden selection:bg-[#a2d45e]/30">
      
      {/* ============================================================ */}
      {/* 0. HERO TOP SECTION */}
      {/* ============================================================ */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Background Visual Graphic on the Right */}
        <div className="absolute top-0 right-0 w-full lg:w-[58%] h-[420px] sm:h-[460px] pointer-events-none z-0 rounded-l-[3.5rem] overflow-hidden select-none hidden lg:block">
          <img 
            src="/events/events_book_plant.jpg" 
            alt="LEnSE News & Insights" 
            className="w-full h-full object-cover object-center scale-[1.04]" 
            onError={(e) => {
              e.currentTarget.src = "/events/events_globe_books.jpg";
            }}
          />
          {/* Organic masking gradients */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#f3f5ed] via-[#f3f5ed]/80 via-[20%] to-transparent to-[55%]" />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#f3f5ed] via-[#f3f5ed]/60 to-transparent" />
          <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-[#f3f5ed] to-transparent" />
        </div>

        {/* Hero Text Content */}
        <div className="relative z-10 max-w-2xl pt-2 pb-8 lg:pb-12 space-y-4">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs font-semibold text-[#485b4d]">
            <Leaf size={14} className="text-[#2d5a3c] fill-[#2d5a3c]" />
            <Link href="/" className="hover:text-[#1b3726] transition-colors">Home</Link>
            <span className="text-[#879b8c]">&gt;</span>
            <span className="text-[#1b3726] font-bold">News</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal text-[#131f17] tracking-tight font-serif">
            News & Insights
          </h1>

          <p className="text-xl sm:text-2xl font-serif italic text-[#243a29] leading-snug">
            Stories that inform. Updates that inspire.
          </p>

          <p className="text-[#405245] text-[13.5px] sm:text-sm leading-relaxed max-w-xl font-normal pt-1">
            Stay updated with the latest achievements, initiatives, partnerships, research highlights and community stories from LEnSE.
          </p>
        </div>

        {/* ============================================================ */}
        {/* 1. SEARCH & CATEGORY FILTER DOCK */}
        {/* ============================================================ */}
        <div className="relative z-20 mt-6 sm:mt-8 flex flex-col lg:flex-row items-center gap-3.5 pb-8">
          
          {/* Search Input Box */}
          <div className="relative w-full lg:w-72 shrink-0">
            <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#647969]" />
            <input 
              type="text" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search news..."
              className="w-full pl-11 pr-4 py-2.5 rounded-full bg-white/90 backdrop-blur-md border border-[#d5e2d6] text-xs font-medium text-[#19241c] placeholder:text-[#7f9484] focus:outline-none focus:ring-2 focus:ring-[#2d5a3c]/30 shadow-[0_2px_8px_rgba(0,0,0,0.03)]"
            />
          </div>

          {/* Category Filter Pills (Scrollable on mobile) */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full no-scrollbar py-1">
            {CATEGORIES.map((category) => {
              const isSelected = selectedCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => {
                    setSelectedCategory(category);
                    setCurrentPage(1);
                  }}
                  className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-300 cursor-pointer ${
                    isSelected
                      ? 'bg-[#1b3726] text-white shadow-[0_4px_12px_rgba(27,55,38,0.25)] scale-[1.02]'
                      : 'bg-white/70 hover:bg-white text-[#384c3e] border border-[#dbe6dc] hover:border-[#b8cdbe]'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

        </div>

        {/* ============================================================ */}
        {/* 2. MAIN TWO-COLUMN CONTENT GRID */}
        {/* ============================================================ */}
        <div className="mt-4 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
          
          {/* Left Column (8 cols): Featured Card + Latest News List + Pagination */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* FEATURED STORY HERO CARD */}
            <div className="relative rounded-[2.2rem] bg-gradient-to-br from-[#1b3726] via-[#142e1f] to-[#0d2216] p-7 sm:p-9 text-white overflow-hidden shadow-[0_20px_45px_rgba(10,30,18,0.2)] group">
              
              {/* World Map Connected Network Overlay */}
              <div 
                className="absolute inset-0 bg-cover bg-right opacity-35 pointer-events-none mix-blend-screen scale-105 group-hover:scale-100 transition-transform duration-1000"
                style={{ 
                  backgroundImage: "radial-gradient(circle at center, rgba(162,212,94,0.15) 0%, transparent 70%), url('/events/conference.jpg')"
                }}
              />
              
              {/* Soft Gradient Mask */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#1b3726] via-[#1b3726]/85 to-transparent pointer-events-none" />

              <div className="relative z-10 max-w-xl space-y-4">
                <span className="inline-flex px-3 py-1 rounded-md bg-[#a2d45e]/20 text-[#c2ec8b] border border-[#a2d45e]/30 text-[10px] font-bold uppercase tracking-widest">
                  {FEATURED_NEWS.tag}
                </span>

                <h2 className="text-2xl sm:text-3xl lg:text-[2rem] font-serif font-normal leading-snug tracking-tight text-white">
                  {FEATURED_NEWS.title}
                </h2>

                <p className="text-[13px] text-[#b8d1be] leading-relaxed font-normal">
                  {FEATURED_NEWS.desc}
                </p>

                <div className="pt-2 flex flex-wrap items-center gap-5 text-xs text-[#c5ddcc]">
                  <Link href="/news/1">
                    <button className="px-6 py-3 rounded-full bg-white text-[#122016] hover:bg-slate-100 text-[11px] font-bold uppercase tracking-wider flex items-center gap-2.5 transition-all shadow-md group/btn cursor-pointer">
                      <span>Read Full Story</span>
                      <ArrowRight size={13} className="group-hover/btn:translate-x-0.5 transition-transform" />
                    </button>
                  </Link>

                  <span className="flex items-center gap-1.5 font-medium text-white/80">
                    <Calendar size={14} className="text-[#a2d45e]" />
                    {FEATURED_NEWS.date}
                  </span>
                </div>
              </div>
            </div>

            {/* LATEST NEWS HEADER */}
            <div className="pt-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-2 h-2 rounded-full bg-[#2d5a3c]" />
                <h3 className="text-xl sm:text-2xl font-serif text-[#122016]">
                  Latest News
                </h3>
              </div>

              {/* NEWS CARDS LIST */}
              {filteredNews.length === 0 ? (
                <div className="text-center py-16 bg-white/60 backdrop-blur-xl rounded-[2rem] border border-white/90 p-8 shadow-sm">
                  <div className="w-14 h-14 bg-[#eaf1e4] rounded-full flex items-center justify-center text-[#2d5a3c] mx-auto mb-3 shadow-inner">
                    <FileText size={24} />
                  </div>
                  <h4 className="text-base font-serif text-[#122016] mb-1">No news found</h4>
                  <p className="text-xs text-[#526656] max-w-xs mx-auto mb-4">
                    Try adjusting your search query or selecting a different category filter.
                  </p>
                  <button 
                    onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
                    className="px-5 py-2 rounded-full bg-[#1b3726] text-white text-[11px] font-bold uppercase tracking-wider hover:bg-[#244833] transition-colors cursor-pointer"
                  >
                    Show All News
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  {filteredNews.map((item) => (
                    <Link key={item.id} href={`/news/${item.id}`} className="block">
                      <div className="group rounded-[1.8rem] bg-white/80 hover:bg-white backdrop-blur-xl border border-white/95 p-4 sm:p-5 flex flex-col sm:flex-row gap-5 items-center shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_30px_rgba(0,25,12,0.06)] hover:-translate-y-0.5 transition-all duration-300 cursor-pointer">
                        {/* Image Thumbnail */}
                        <div className="w-full sm:w-[175px] h-[130px] rounded-[1.3rem] overflow-hidden shrink-0 bg-slate-100 shadow-sm relative">
                          <img 
                            src={item.imageUrl} 
                            alt={item.title} 
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                            onError={(e) => {
                              e.currentTarget.src = "/events/events_book_plant.jpg";
                            }}
                          />
                        </div>

                        {/* Content */}
                        <div className="flex-1 w-full space-y-1.5">
                          <span className="inline-block px-2.5 py-0.5 rounded-md bg-[#eaf1e4] text-[#2d5a3c] text-[9.5px] font-bold uppercase tracking-widest">
                            {item.tag}
                          </span>

                          <h4 className="text-[15px] sm:text-[16px] font-serif font-semibold text-[#122016] leading-snug group-hover:text-[#2d5a3c] transition-colors">
                            {item.title}
                          </h4>

                          <p className="text-[12px] text-[#485b4d] leading-relaxed line-clamp-2 font-normal">
                            {item.desc}
                          </p>

                          {/* Meta & Read More */}
                          <div className="flex items-center justify-between text-[11px] text-[#637667] pt-2 border-t border-[#f0f4ef]/80">
                            <span className="flex items-center gap-1.5 font-medium">
                              <Calendar size={13} className="text-[#2d5a3c]" />
                              {item.date}
                            </span>

                            <span className="flex items-center gap-1 font-bold text-[#1b3726] group-hover:text-[#2d5a3c] transition-colors">
                              <span>Read More</span>
                              <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
                            </span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* PAGINATION */}
            <div className="pt-6 flex items-center justify-center gap-2 select-none">
              <button 
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                className="w-8 h-8 rounded-full bg-white border border-[#d5e2d6] text-[#2d5a3c] flex items-center justify-center hover:bg-[#eaf1e4] transition-colors shadow-sm disabled:opacity-40 cursor-pointer"
                disabled={currentPage === 1}
              >
                <ChevronLeft size={16} />
              </button>

              {[1, 2, 3, 4, 5].map((pageNum) => (
                <button
                  key={pageNum}
                  onClick={() => setCurrentPage(pageNum)}
                  className={`w-8 h-8 rounded-full text-xs font-bold transition-all cursor-pointer ${
                    currentPage === pageNum
                      ? 'bg-[#1b3726] text-white shadow-sm scale-105'
                      : 'bg-white hover:bg-[#eaf1e4] text-[#384c3e] border border-[#d5e2d6]'
                  }`}
                >
                  {pageNum}
                </button>
              ))}

              <span className="text-xs text-[#7f9484] px-1 font-bold">...</span>

              <button
                onClick={() => setCurrentPage(10)}
                className={`w-8 h-8 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  currentPage === 10
                    ? 'bg-[#1b3726] text-white shadow-sm'
                    : 'bg-white hover:bg-[#eaf1e4] text-[#384c3e] border border-[#d5e2d6]'
                }`}
              >
                10
              </button>

              <button 
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, 10))}
                className="w-8 h-8 rounded-full bg-white border border-[#d5e2d6] text-[#2d5a3c] flex items-center justify-center hover:bg-[#eaf1e4] transition-colors shadow-sm cursor-pointer"
              >
                <ChevronRight size={16} />
              </button>
            </div>

          </div>

          {/* Right Sidebar Column (4 cols): News at a Glance + Media Mentions + Stay Updated */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* CARD 1: NEWS AT A GLANCE */}
            <div className="rounded-[2rem] bg-white/90 backdrop-blur-xl border border-white/95 p-6 sm:p-7 shadow-[0_8px_30px_rgba(0,0,0,0.03)] space-y-5">
              <div className="flex items-center gap-2.5 pb-2 border-b border-[#f0f4ef]">
                <div className="w-8 h-8 rounded-xl bg-[#eaf1e4] flex items-center justify-center text-[#2d5a3c]">
                  <GraduationCap size={18} />
                </div>
                <h3 className="text-lg font-serif text-[#122016]">
                  News at a Glance
                </h3>
              </div>

              <div className="space-y-3">
                {GLANCE_STATS.map((stat, idx) => (
                  <div 
                    key={idx} 
                    onClick={() => setSelectedCategory(stat.label.includes('News') ? 'All' : stat.label.split(' ')[0])}
                    className="flex items-center justify-between text-xs py-1.5 px-2 rounded-xl hover:bg-[#f3f6f0] transition-colors cursor-pointer group"
                  >
                    <div className="flex items-center gap-2.5 text-[#3b4e41] group-hover:text-[#1b3726] font-medium">
                      <stat.icon size={15} className="text-[#2d5a3c] shrink-0" />
                      <span>{stat.label}</span>
                    </div>
                    <span className="px-2 py-0.5 rounded-md bg-[#eaf1e4] text-[#2d5a3c] font-bold text-[11px]">
                      {stat.count}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-2 border-t border-[#f0f4ef]">
                <button 
                  onClick={() => setSelectedCategory('All')}
                  className="w-full text-[11.5px] font-bold text-[#1b3726] hover:text-[#2d5a3c] flex items-center justify-center gap-1.5 transition-colors py-1 cursor-pointer group"
                >
                  <span>View All News</span>
                  <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>

            {/* CARD 2: MEDIA MENTIONS */}
            <div className="rounded-[2rem] bg-white/90 backdrop-blur-xl border border-white/95 p-6 sm:p-7 shadow-[0_8px_30px_rgba(0,0,0,0.03)] space-y-5">
              <div className="flex items-center gap-2 pb-2 border-b border-[#f0f4ef]">
                <h3 className="text-lg font-serif text-[#122016]">
                  Media Mentions
                </h3>
              </div>

              <div className="space-y-4">
                {MEDIA_MENTIONS.map((media) => (
                  <div key={media.id} className="flex items-start gap-3.5 group cursor-pointer">
                    {/* Media Publication Badge */}
                    <div className="w-12 h-12 rounded-xl bg-[#f4f7f2] border border-[#e2ece4] flex flex-col items-center justify-center text-center shrink-0 p-1 group-hover:scale-105 transition-transform shadow-xs">
                      {media.id === 1 && (
                        <span className="text-[7.5px] font-serif font-black tracking-tight leading-tight text-slate-800 uppercase">
                          THE<br />HINDU
                        </span>
                      )}
                      {media.id === 2 && (
                        <div className="flex flex-col items-center">
                          <span className="text-xs font-black text-[#0f4c81] leading-none">m</span>
                          <span className="text-[5.5px] font-bold text-slate-600 tracking-tighter">MATHRUBHUMI</span>
                        </div>
                      )}
                      {media.id === 3 && (
                        <span className="text-[7px] font-bold text-slate-800 leading-tight text-center">
                          NEWS<br />BYTES
                        </span>
                      )}
                    </div>

                    {/* Mentions Content */}
                    <div className="space-y-0.5 flex-1">
                      <h4 className="text-[13px] font-bold text-[#19241c] leading-snug group-hover:text-[#2d5a3c] transition-colors">
                        {media.title}
                      </h4>
                      {media.subtitle && (
                        <p className="text-[10.5px] text-[#556758]">{media.subtitle}</p>
                      )}
                      <p className="text-[10.5px] text-[#788e7f] font-medium">{media.date}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-2 border-t border-[#f0f4ef]">
                <button 
                  onClick={() => setSelectedCategory('Media')}
                  className="w-full text-[11.5px] font-bold text-[#1b3726] hover:text-[#2d5a3c] flex items-center justify-center gap-1.5 transition-colors py-1 cursor-pointer group"
                >
                  <span>View All Media</span>
                  <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>

            {/* CARD 3: STAY UPDATED NEWSLETTER */}
            <div className="rounded-[2rem] bg-gradient-to-b from-[#eef3eb] to-[#e4eee0] border border-[#dbe6d7] p-6 sm:p-7 shadow-[0_8px_30px_rgba(0,0,0,0.03)] space-y-4 relative overflow-hidden">
              
              <div className="space-y-1 relative z-10">
                <h3 className="text-xl font-serif text-[#122016]">
                  Stay Updated
                </h3>
                <p className="text-[11.5px] text-[#4d6052] leading-relaxed">
                  Subscribe to our newsletter and never miss an update.
                </p>
              </div>

              <div className="relative z-10 pt-1">
                {subscribed ? (
                  <div className="flex items-center gap-2 text-xs font-bold text-[#2d5a3c] bg-white px-4 py-2.5 rounded-full shadow-sm">
                    <CheckCircle2 size={15} />
                    <span>Subscribed! Thank you.</span>
                  </div>
                ) : (
                  <form onSubmit={handleSubscribe} className="space-y-2.5">
                    <input 
                      type="email" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      placeholder="Your email address" 
                      className="w-full px-4 py-2.5 rounded-full bg-white border border-[#cddcd0] text-xs font-medium text-slate-800 placeholder:text-[#8aa091] focus:outline-none focus:ring-2 focus:ring-[#2d5a3c]/30 shadow-xs"
                    />
                    <button 
                      type="submit" 
                      className="w-full py-2.5 rounded-full bg-[#1b3726] hover:bg-[#244b34] text-white text-[11px] font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-[0_4px_12px_rgba(27,55,38,0.2)] cursor-pointer"
                    >
                      <span>Subscribe</span>
                      <ArrowRight size={13} />
                    </button>
                  </form>
                )}
              </div>

              {/* Botanical Envelope Illustration at bottom right */}
              <div className="absolute right-0 bottom-0 pointer-events-none opacity-50 scale-95 translate-x-2 translate-y-2">
                <svg width="120" height="90" viewBox="0 0 100 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 25L50 50L90 25V70C90 75.5228 85.5228 80 80 80H20C14.4772 80 10 75.5228 10 70V25Z" fill="#cfe1d1" />
                  <path d="M90 25L50 50L10 25L45.5279 2.76393C48.2936 1.38107 51.7064 1.38107 54.4721 2.76393L90 25Z" fill="#bcd4bf" />
                  <path d="M70 70C70 50 85 40 85 40C85 40 70 30 70 10C70 30 55 40 55 40C55 40 70 50 70 70Z" fill="#a4c7a8" />
                </svg>
              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}
