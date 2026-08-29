'use client';
import React, { useState, useEffect } from 'react';
import { 
  Search, 
  ArrowRight, 
  Users, 
  Building2, 
  MapPin, 
  Calendar,
  LayoutGrid,
  MonitorPlay,
  MessageSquare,
  GraduationCap,
  Tent,
  Mail,
  ChevronLeft,
  ChevronRight,
  Sparkles
} from 'lucide-react';
import Link from 'next/link';

export default function EventsPage() {
  const [filterCategory, setFilterCategory] = useState('All Events');
  const [searchQuery, setSearchQuery] = useState('');
  const [events, setEvents] = useState([]);
  const [currentInitiativeIndex, setCurrentInitiativeIndex] = useState(0);
  const [isCarouselPaused, setIsCarouselPaused] = useState(false);

  const [settings, setSettings] = useState({
    heroTag: 'EVENTS',
    heroTitle: 'Discover. Learn.\nConnect.',
    heroSubtitle: 'Explore our conferences, workshops, lectures, courses and STEM initiatives that inspire learning and create sustainable impact.',
    heroImage: '/events/e1.png',
    featuredInitiatives: [
      {
        id: "init-1",
        tag: "FEATURED INITIATIVE",
        title: "STEM 4 Girls",
        subtitle: "Creating opportunities.<br/>Inspiring futures.",
        imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600&auto=format&fit=crop",
        link: "#"
      },
      {
        id: "init-2",
        tag: "UPCOMING INITIATIVE",
        title: "Experiential STEM Labs",
        subtitle: "Interactive robotics & AI education across 44+ schools in Kerala.",
        imageUrl: "/events/e1.png",
        link: "#"
      },
      {
        id: "init-3",
        tag: "SPECIAL PROGRAMME",
        title: "Gifted Student STEM Camp",
        subtitle: "Empowering young innovators through hands-on science & technology.",
        imageUrl: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=600&auto=format&fit=crop",
        link: "#"
      }
    ],
    stat1Number: '56+',
    stat1Text: 'Gifted Students<br/>Supported',
    stat2Number: '44',
    stat2Text: 'Schools in<br/>Kerala',
    stat3Number: '41',
    stat3Text: 'Educational<br/>Districts',
    stat4Number: '6+',
    stat4Text: 'Programmes<br/>Organized',
    newsletterTitle: 'Stay Updated',
    newsletterText: 'Subscribe to our newsletter and never miss an update on our events and programmes.'
  });
  const [loading, setLoading] = useState(true);

  // Auto-scroll Carousel effect
  useEffect(() => {
    if (!settings.featuredInitiatives || settings.featuredInitiatives.length <= 1 || isCarouselPaused) return;

    const interval = setInterval(() => {
      setCurrentInitiativeIndex((prev) => 
        (prev + 1) % settings.featuredInitiatives.length
      );
    }, 4500);

    return () => clearInterval(interval);
  }, [settings.featuredInitiatives, isCarouselPaused]);

  useEffect(() => {
    async function fetchData() {
      try {
        const [eventsRes, settingsRes] = await Promise.all([
          fetch('/api/events'),
          fetch('/api/event-settings')
        ]);
        
        if (eventsRes.ok) {
          const eventsData = await eventsRes.json();
          if (Array.isArray(eventsData)) {
            setEvents(eventsData);
          }
        }
        
        if (settingsRes.ok) {
          const settingsData = await settingsRes.json();
          if (settingsData && settingsData.heroTag) {
            setSettings(prev => ({ ...prev, ...settingsData }));
          }
        }
      } catch (error) {
        console.error("Failed to fetch event data:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  const categories = [
    { name: 'All Events', icon: LayoutGrid },
    { name: 'Conferences', icon: Users },
    { name: 'Workshops', icon: MonitorPlay },
    { name: 'Lectures', icon: MessageSquare },
    { name: 'Courses', icon: GraduationCap },
    { name: 'STEM Camps', icon: Tent },
  ];

  const filteredEvents = events.filter(e => {
    const matchesCategory = filterCategory === 'All Events' || e.filterType === filterCategory;
    const matchesSearch = searchQuery.trim() === '' || 
      (e.title && e.title.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (e.subtitle && e.subtitle.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (e.category && e.category.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const initiatives = settings.featuredInitiatives && settings.featuredInitiatives.length > 0 
    ? settings.featuredInitiatives 
    : [
      {
        id: "default-1",
        tag: "FEATURED INITIATIVE",
        title: "STEM 4 Girls",
        subtitle: "Creating opportunities.<br/>Inspiring futures.",
        imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600&auto=format&fit=crop",
        link: "#"
      }
    ];

  const activeInitiative = initiatives[currentInitiativeIndex] || initiatives[0];

  const handleNextInitiative = () => {
    setCurrentInitiativeIndex((prev) => (prev + 1) % initiatives.length);
  };

  const handlePrevInitiative = () => {
    setCurrentInitiativeIndex((prev) => (prev - 1 + initiatives.length) % initiatives.length);
  };

  return (
    <div className="min-h-screen bg-[#F5F9FA] text-slate-900 pb-20 font-outfit">
      
      {/* Hero Section with e1.png Background */}
      <div className="relative min-h-[460px] lg:min-h-[500px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={settings.heroImage || "/events/e1.png"} 
            alt="Events Hero illustration" 
            className="w-full h-full object-cover object-center lg:object-right"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 to-transparent md:via-white/70"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#F5F9FA] via-transparent to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-12 pb-12">
          {/* Breadcrumb / Section Tag */}
          <div className="flex items-center gap-2 text-xs font-bold text-slate-400 mb-3">
            <span>Home</span>
            <span>/</span>
            <span className="text-emerald-700 font-extrabold">{settings.heroTag || 'EVENTS'}</span>
          </div>

          <span className="inline-block text-emerald-700 font-black tracking-widest text-xs uppercase bg-emerald-100/70 border border-emerald-300/60 px-3 py-1 rounded-full mb-3 shadow-xs">
            {settings.heroTag || 'EVENTS'}
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-slate-900 leading-[1.1] tracking-tight">
            Discover. Learn. <br />
            <span className="text-emerald-600">Connect.</span>
          </h1>

          <p className="text-slate-600 text-base sm:text-lg max-w-lg mt-4 sm:mt-5 leading-relaxed font-medium">
            {settings.heroSubtitle}
          </p>

          {/* Search bar */}
          <div className="mt-7 relative max-w-md">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
            <input 
              type="text" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search events, workshops, conferences..." 
              className="w-full pl-14 pr-6 py-4 rounded-full bg-white/95 backdrop-blur-md shadow-lg border border-white/60 focus:ring-2 focus:ring-emerald-500 outline-none text-slate-800 font-medium placeholder:text-slate-400 transition-all text-sm sm:text-base"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs bg-slate-100 hover:bg-slate-200 text-slate-600 px-2.5 py-1 rounded-full font-bold transition-colors"
              >
                Clear
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-20">
        
        {/* Navigation Tabs */}
        <div className="bg-white rounded-full shadow-md border border-slate-100 p-2 flex overflow-x-auto hide-scrollbar gap-2 mb-10 items-center justify-start">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = filterCategory === cat.name;
            return (
              <button
                key={cat.name}
                onClick={() => setFilterCategory(cat.name)}
                className={`flex items-center gap-2 px-5 sm:px-6 py-3 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-300 ${
                  isActive 
                    ? 'bg-emerald-700 text-white shadow-md' 
                    : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900 bg-transparent'
                }`}
              >
                <Icon size={18} strokeWidth={isActive ? 2.5 : 2} />
                {cat.name}
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          
          {/* Left Column: Timeline Events (8 cols) */}
          <div className="lg:col-span-8 space-y-6 relative pb-10">
            {/* Continuous Vertical Timeline Line */}
            <div className="absolute left-[39px] top-6 bottom-0 w-[2px] bg-emerald-100 hidden sm:block"></div>

            {loading ? (
              <div className="text-center py-20 bg-white rounded-[2rem] border border-slate-100 shadow-sm">
                <div className="inline-block animate-spin w-8 h-8 border-4 border-emerald-600 border-t-transparent rounded-full mb-3"></div>
                <div className="text-slate-500 font-bold">Loading live events from database...</div>
              </div>
            ) : filteredEvents.length === 0 ? (
              <div className="text-center py-16 bg-white rounded-[2rem] border border-slate-100 shadow-sm p-8">
                <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-1">No events found</h3>
                <p className="text-sm text-slate-500 max-w-sm mx-auto mb-5">
                  {searchQuery ? `No results matching "${searchQuery}". Try changing your search query or filter.` : 'No events available in this category yet.'}
                </p>
                <button 
                  onClick={() => { setFilterCategory('All Events'); setSearchQuery(''); }}
                  className="px-5 py-2.5 bg-emerald-700 text-white rounded-xl text-xs font-bold hover:bg-emerald-800 transition-colors"
                >
                  View All Events
                </button>
              </div>
            ) : (
              filteredEvents.map((evt) => (
                <div key={evt.id} className="relative flex flex-col sm:flex-row gap-4 sm:gap-8 items-stretch group pt-1">
                  
                  {/* Timeline Date (Left of line) */}
                  <div className="hidden sm:flex flex-col items-center w-[80px] shrink-0 relative z-10 pt-4 text-center">
                    <span className="block text-2xl font-black text-emerald-800 leading-none">{evt.dateDay}</span>
                    <span className="block text-xs font-black text-emerald-600 mt-1 uppercase tracking-wider">{evt.dateMonth}</span>
                    <span className="block text-xs font-bold text-slate-400 mt-0.5">{evt.dateYear}</span>
                  </div>

                  {/* Dot on the Line */}
                  <div className="hidden sm:flex absolute left-[40px] top-8 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-[3px] border-emerald-500 bg-white ring-4 ring-[#F5F9FA] z-20 group-hover:scale-125 transition-transform duration-300">
                    <div className="m-auto w-1 h-1 bg-emerald-500 rounded-full"></div>
                  </div>

                  {/* Event Card */}
                  <div className="flex-1 bg-white rounded-[2rem] p-4 sm:pr-14 flex flex-col sm:flex-row gap-5 items-center shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 w-full group-hover:-translate-y-0.5 relative">
                    
                    {/* Mobile Date Header */}
                    <div className="sm:hidden w-full flex items-center justify-between border-b border-slate-100 pb-2 mb-1">
                      <span className="text-xs font-bold text-emerald-700 flex items-center gap-1">
                        <Calendar size={14} /> {evt.dateDay} {evt.dateMonth} {evt.dateYear}
                      </span>
                      <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 bg-emerald-50 text-emerald-700 rounded-md">
                        {evt.category}
                      </span>
                    </div>

                    {/* Image */}
                    <div className="w-full sm:w-[210px] h-[150px] rounded-[1.4rem] overflow-hidden shrink-0 relative bg-slate-100">
                      <img 
                        src={evt.imageUrl} 
                        alt={evt.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        onError={(e) => {
                          e.currentTarget.src = "/events/e1.png";
                        }}
                      />
                    </div>

                    {/* Content */}
                    <div className="flex-1 py-1 w-full flex flex-col justify-center">
                      <div className="hidden sm:inline-flex px-3 py-1 rounded-md bg-emerald-50 text-emerald-700 text-[10px] font-extrabold uppercase tracking-widest mb-2.5 w-max">
                        {evt.category}
                      </div>
                      <h3 className="text-lg sm:text-xl font-black text-slate-900 leading-snug mb-1.5">{evt.title}</h3>
                      <p className="text-xs sm:text-sm font-medium text-slate-500 line-clamp-2 leading-relaxed">{evt.subtitle}</p>
                    </div>

                    {/* Right Arrow Button */}
                    <div className="hidden sm:flex absolute right-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-slate-200 items-center justify-center text-slate-400 group-hover:bg-emerald-600 group-hover:text-white group-hover:border-emerald-600 transition-all shrink-0 cursor-pointer shadow-xs">
                      <ArrowRight size={18} />
                    </div>
                  </div>
                </div>
              ))
            )}

            {/* View All Button at bottom */}
            {filteredEvents.length > 0 && (
              <div className="pt-4 text-center sm:pl-28">
                <button 
                  onClick={() => { setFilterCategory('All Events'); setSearchQuery(''); }}
                  className="px-8 py-3.5 rounded-full border-2 border-slate-200 inline-flex items-center gap-2 text-slate-600 font-bold hover:bg-emerald-50 hover:text-emerald-700 hover:border-emerald-300 transition-all group text-sm shadow-xs"
                >
                  View All Events <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            )}
          </div>

          {/* Right Column: Sidebar (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* FEATURED INITIATIVES AUTO-SCROLL CAROUSEL */}
            <div 
              onMouseEnter={() => setIsCarouselPaused(true)}
              onMouseLeave={() => setIsCarouselPaused(false)}
              className="bg-white rounded-[2rem] p-6 shadow-sm border border-slate-100 relative overflow-hidden group hover:shadow-xl transition-all duration-300"
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-emerald-100/50 to-transparent rounded-full blur-3xl -z-10 translate-x-1/3 -translate-y-1/3"></div>
              
              <div className="flex items-center justify-between mb-3">
                <div className="text-[10px] font-extrabold text-emerald-600 tracking-widest uppercase flex items-center gap-1.5">
                  <Sparkles size={13} />
                  <span>{activeInitiative.tag || 'FEATURED INITIATIVE'}</span>
                </div>

                {/* Carousel Controls & Index */}
                {initiatives.length > 1 && (
                  <div className="flex items-center gap-1.5">
                    <button 
                      onClick={handlePrevInitiative}
                      className="w-6 h-6 rounded-full bg-slate-100 hover:bg-emerald-100 text-slate-600 hover:text-emerald-700 flex items-center justify-center transition-colors text-xs"
                      title="Previous initiative"
                    >
                      <ChevronLeft size={14} />
                    </button>
                    <span className="text-[10px] font-bold text-slate-400">
                      {currentInitiativeIndex + 1}/{initiatives.length}
                    </span>
                    <button 
                      onClick={handleNextInitiative}
                      className="w-6 h-6 rounded-full bg-slate-100 hover:bg-emerald-100 text-slate-600 hover:text-emerald-700 flex items-center justify-center transition-colors text-xs"
                      title="Next initiative"
                    >
                      <ChevronRight size={14} />
                    </button>
                  </div>
                )}
              </div>

              {/* Slide Content */}
              <div className="transition-all duration-500 animate-fade-in key={currentInitiativeIndex}">
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mb-1.5">{activeInitiative.title}</h3>
                <p 
                  className="text-xs sm:text-sm font-medium text-slate-500 mb-5 leading-relaxed min-h-[38px]"
                  dangerouslySetInnerHTML={{ __html: activeInitiative.subtitle || '' }}
                />
                
                <div className="relative h-48 w-full rounded-[1.4rem] overflow-hidden mb-5 bg-slate-100">
                  <img 
                    src={activeInitiative.imageUrl || "/events/e1.png"} 
                    alt={activeInitiative.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    onError={(e) => { e.currentTarget.src = "/events/e1.png"; }}
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <Link 
                    href={activeInitiative.link || '#'}
                    className="bg-emerald-700 text-white px-6 py-3 rounded-xl text-xs sm:text-sm font-bold inline-flex items-center gap-2 hover:bg-emerald-800 transition-colors shadow-md shadow-emerald-900/10"
                  >
                    Learn More <ArrowRight size={16} />
                  </Link>

                  {/* Dot Indicators */}
                  {initiatives.length > 1 && (
                    <div className="flex items-center gap-1.5">
                      {initiatives.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => setCurrentInitiativeIndex(idx)}
                          className={`h-2 rounded-full transition-all ${
                            currentInitiativeIndex === idx ? 'w-6 bg-emerald-600' : 'w-2 bg-slate-200 hover:bg-slate-300'
                          }`}
                          title={`Go to slide ${idx + 1}`}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </div>

            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-5 sm:p-6 rounded-[2rem] shadow-sm border border-slate-100 flex flex-col items-center text-center justify-center hover:shadow-md transition-shadow">
                <div className="w-13 h-13 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 mb-3 ring-4 ring-emerald-50/50">
                  <Users size={22} />
                </div>
                <h4 className="text-2xl sm:text-3xl font-black text-slate-900">{settings.stat1Number}</h4>
                <p 
                  className="text-[10px] sm:text-[11px] font-bold text-slate-500 mt-1.5 uppercase tracking-wide leading-tight"
                  dangerouslySetInnerHTML={{ __html: settings.stat1Text || '' }}
                />
              </div>
              
              <div className="bg-white p-5 sm:p-6 rounded-[2rem] shadow-sm border border-slate-100 flex flex-col items-center text-center justify-center hover:shadow-md transition-shadow">
                <div className="w-13 h-13 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 mb-3 ring-4 ring-blue-50/50">
                  <Building2 size={22} />
                </div>
                <h4 className="text-2xl sm:text-3xl font-black text-slate-900">{settings.stat2Number}</h4>
                <p 
                  className="text-[10px] sm:text-[11px] font-bold text-slate-500 mt-1.5 uppercase tracking-wide leading-tight"
                  dangerouslySetInnerHTML={{ __html: settings.stat2Text || '' }}
                />
              </div>
              
              <div className="bg-white p-5 sm:p-6 rounded-[2rem] shadow-sm border border-slate-100 flex flex-col items-center text-center justify-center hover:shadow-md transition-shadow">
                <div className="w-13 h-13 rounded-full bg-cyan-50 flex items-center justify-center text-cyan-600 mb-3 ring-4 ring-cyan-50/50">
                  <MapPin size={22} />
                </div>
                <h4 className="text-2xl sm:text-3xl font-black text-slate-900">{settings.stat3Number}</h4>
                <p 
                  className="text-[10px] sm:text-[11px] font-bold text-slate-500 mt-1.5 uppercase tracking-wide leading-tight"
                  dangerouslySetInnerHTML={{ __html: settings.stat3Text || '' }}
                />
              </div>
              
              <div className="bg-white p-5 sm:p-6 rounded-[2rem] shadow-sm border border-slate-100 flex flex-col items-center text-center justify-center hover:shadow-md transition-shadow">
                <div className="w-13 h-13 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 mb-3 ring-4 ring-emerald-50/50">
                  <Calendar size={22} />
                </div>
                <h4 className="text-2xl sm:text-3xl font-black text-slate-900">{settings.stat4Number}</h4>
                <p 
                  className="text-[10px] sm:text-[11px] font-bold text-slate-500 mt-1.5 uppercase tracking-wide leading-tight"
                  dangerouslySetInnerHTML={{ __html: settings.stat4Text || '' }}
                />
              </div>
            </div>

            {/* Newsletter */}
            <div className="bg-white rounded-[2rem] p-6 sm:p-8 shadow-sm border border-slate-100 flex flex-col items-center text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-blue-50/50 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-emerald-50/50 rounded-full blur-3xl -z-10 -translate-x-1/2 translate-y-1/2"></div>
              
              <div className="w-14 sm:w-16 h-14 sm:h-16 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 mb-4 relative shadow-inner">
                 <div className="absolute inset-0 rounded-full border border-blue-200/50 scale-110"></div>
                 <div className="absolute inset-0 rounded-full border border-blue-200/30 scale-125"></div>
                 <Mail size={26} />
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-2">{settings.newsletterTitle}</h3>
              <p className="text-xs sm:text-sm font-medium text-slate-500 mb-6 leading-relaxed">
                {settings.newsletterText}
              </p>
              
              <form onSubmit={(e) => { e.preventDefault(); alert('Subscribed successfully!'); }} className="flex w-full gap-2 p-1.5 bg-slate-50 rounded-2xl border border-slate-200 shadow-inner">
                <input 
                  type="email" 
                  required
                  placeholder="Enter your email" 
                  className="flex-1 bg-transparent border-none focus:ring-0 px-3 sm:px-4 text-xs sm:text-sm font-bold outline-none text-slate-700 placeholder:text-slate-400 placeholder:font-medium"
                />
                <button type="submit" className="bg-emerald-700 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm font-bold hover:bg-emerald-800 transition-colors shadow-md">
                  Subscribe
                </button>
              </form>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
}
