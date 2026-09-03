'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Leaf, 
  Calendar, 
  User, 
  Clock, 
  Share2, 
  ArrowRight, 
  MapPin, 
  Users, 
  Building2, 
  FlaskConical, 
  Quote, 
  Info, 
  GraduationCap, 
  Sparkles, 
  Lightbulb, 
  HeartHandshake, 
  Layers, 
  CheckCircle2, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Mail,
  ChevronRight
} from 'lucide-react';

export default function NewsDetailPage({ params }) {
  const resolvedParams = params && typeof params.then === 'function' ? React.use(params) : params;
  const newsId = resolvedParams?.id || '1';

  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setTimeout(() => {
      setEmail('');
      setSubscribed(false);
    }, 4000);
  };

  const handleShare = () => {
    if (typeof window !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <div className="min-h-screen bg-[#f3f5ed] text-[#19241c] font-sans pb-28 pt-28 sm:pt-36 relative overflow-hidden selection:bg-[#a2d45e]/30">
      
      {/* ============================================================ */}
      {/* 1. HERO SECTION WITH TROPHY/DESK VISUAL */}
      {/* ============================================================ */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Background Visual Container inside Hero */}
        <div className="absolute top-0 right-0 w-full lg:w-[54%] h-full min-h-[460px] lg:h-[540px] pointer-events-none z-0 rounded-l-[3.5rem] overflow-hidden hidden lg:block select-none">
          <img 
            src="/events/events_book_plant.jpg" 
            alt="LEnSE Award Plaque" 
            className="w-full h-full object-cover object-center scale-[1.03]" 
            onError={(e) => { e.currentTarget.src = "/events/events_globe_books.jpg"; }}
          />
          {/* Fading gradient masks */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#f3f5ed] via-[#f3f5ed]/85 via-[18%] to-transparent to-[50%]" />
          <div className="absolute top-0 left-0 right-0 h-28 bg-gradient-to-b from-[#f3f5ed] to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[#f3f5ed] via-[#f3f5ed]/60 to-transparent" />
        </div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 min-h-[460px] lg:min-h-[540px] items-center pb-8 lg:pb-0">
          
          <div className="lg:col-span-7 space-y-5 lg:pr-6 pt-2">
            
            {/* Breadcrumb */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-[#485b4d]">
              <Leaf size={14} className="text-[#2d5a3c] fill-[#2d5a3c]" />
              <Link href="/" className="hover:text-[#1b3726] transition-colors">Home</Link>
              <span className="text-[#879b8c]">&gt;</span>
              <Link href="/news" className="hover:text-[#1b3726] transition-colors">News</Link>
              <span className="text-[#879b8c]">&gt;</span>
              <span className="text-[#1b3726] font-bold line-clamp-1 max-w-[240px] sm:max-w-md">
                LEnSE Receives Outstanding STEM Outreach Initiative Award 2025
              </span>
            </div>

            {/* Category Tag */}
            <div className="inline-flex px-3 py-1 rounded-md bg-[#eaf1e4] text-[#2d5a3c] text-[10px] font-bold uppercase tracking-widest">
              ACHIEVEMENT
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-[2.85rem] font-normal text-[#131f17] leading-[1.15] tracking-tight font-serif">
              LEnSE Receives Outstanding STEM Outreach Initiative Award 2025
            </h1>

            <p className="text-[#405245] text-sm sm:text-[15px] leading-[1.65] max-w-xl font-normal">
              Recognized for impactful contribution to bringing quality STEM learning opportunities to school students across Kerala.
            </p>

            {/* Meta Info Bar */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-3 text-xs text-[#526656] font-medium border-t border-[#d8e4d9] max-w-xl">
              <div className="flex items-center gap-1.5">
                <Calendar size={15} className="text-[#2d5a3c]" />
                <span>12 May 2025</span>
              </div>
              <span className="text-[#c2d3c5]">•</span>
              <div className="flex items-center gap-1.5">
                <User size={15} className="text-[#2d5a3c]" />
                <span>LEnSE Admin</span>
              </div>
              <span className="text-[#c2d3c5]">•</span>
              <div className="flex items-center gap-1.5">
                <Clock size={15} className="text-[#2d5a3c]" />
                <span>5 min read</span>
              </div>
              <span className="text-[#c2d3c5]">•</span>
              <button 
                onClick={handleShare}
                className="flex items-center gap-1.5 text-[#1b3726] hover:text-[#2d5a3c] font-bold transition-colors cursor-pointer"
              >
                <Share2 size={14} />
                <span>{copied ? 'Link Copied!' : 'Share'}</span>
              </button>
            </div>

          </div>

        </div>

      </div>

      {/* Hero Bottom Divider */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-2">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#d2e0d3] to-transparent opacity-80" />
      </div>

      {/* ============================================================ */}
      {/* 2. MAIN TWO-COLUMN CONTENT GRID */}
      {/* ============================================================ */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 sm:mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          
          {/* Left Column (8 cols): Overview, About, Highlights, Voices, Gallery */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Overview Section */}
            <section className="space-y-4">
              <h2 className="text-2xl sm:text-[26px] font-serif text-[#122016]">
                Overview
              </h2>
              <div className="space-y-3.5 text-[#3f5244] text-[13.5px] sm:text-sm leading-[1.8]">
                <p>
                  The Centre for Learning Engineering and Sustainability Education (LEnSE) is delighted to announce that it has been conferred with the Outstanding STEM Outreach Initiative Award 2025 in recognition of its exemplary efforts in expanding access to quality STEM education among school students across Kerala.
                </p>
                <p>
                  This award acknowledges LEnSE's commitment to creating engaging, hands-on STEM learning experiences and driving meaningful impact in communities, particularly in rural and underserved regions.
                </p>
              </div>
            </section>

            {/* About the Initiative Section */}
            <section className="space-y-5">
              <h2 className="text-2xl sm:text-[26px] font-serif text-[#122016]">
                About the Initiative
              </h2>
              <p className="text-[#3f5244] text-[13.5px] sm:text-sm leading-[1.8]">
                LEnSE's STEM outreach initiative focuses on organizing residential STEM camps, workshops, and lab-based learning programmes for school students. Conducted across 9 districts in Kerala, the initiative has empowered thousands of young learners by nurturing curiosity, creativity and problem-solving skills through experiential activities.
              </p>

              {/* Key Impact Highlights Card */}
              <div className="rounded-[2rem] bg-white border border-[#e4ede5] p-6 sm:p-7 shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
                <h4 className="text-xs font-bold text-[#2d5a3c] uppercase tracking-wider mb-6">
                  Key Impact Highlights
                </h4>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 divide-x-0 sm:divide-x divide-[#eaf0eb]">
                  {[
                    { count: '2000+', label: 'Students Reached', icon: Users },
                    { count: '9', label: 'Districts Covered', icon: MapPin },
                    { count: '150+', label: 'Schools Engaged', icon: Building2 },
                    { count: '50+', label: 'Hands-on Activities', icon: FlaskConical }
                  ].map((stat, idx) => (
                    <div key={idx} className="flex flex-col items-center text-center px-2">
                      <div className="w-11 h-11 rounded-2xl bg-[#f4f8f3] border border-[#e2ede4] flex items-center justify-center text-[#2d5a3c] mb-3 shadow-xs">
                        <stat.icon size={20} strokeWidth={1.5} />
                      </div>
                      <span className="text-2xl sm:text-3xl font-serif font-bold text-[#122016] leading-none mb-1">
                        {stat.count}
                      </span>
                      <span className="text-[11px] text-[#556958] font-medium leading-tight">
                        {stat.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Voices & Acknowledgements Section */}
            <section className="space-y-4">
              <h2 className="text-2xl sm:text-[26px] font-serif text-[#122016]">
                Voices & Acknowledgements
              </h2>

              {/* Styled Quote Box */}
              <div className="rounded-[2rem] bg-gradient-to-r from-white via-white to-[#f4f7f2] border border-[#e4ede5] p-6 sm:p-7 flex flex-col md:flex-row items-center gap-6 shadow-[0_4px_20px_rgba(0,0,0,0.02)] relative overflow-hidden">
                <div className="space-y-4 flex-1">
                  <div className="text-[#2d5a3c] opacity-40">
                    <Quote size={32} className="rotate-180" />
                  </div>
                  <blockquote className="text-[14px] sm:text-[15px] font-serif italic text-[#192b1f] leading-relaxed">
                    "This recognition inspires us to continue our mission of making STEM learning inclusive, innovative and impactful for every learner in the state."
                  </blockquote>
                  <div>
                    <p className="text-xs font-bold text-[#122016]">— Dr. S. Beena Jose</p>
                    <p className="text-[11px] text-[#637767]">Coordinator, LEnSE</p>
                  </div>
                </div>

                {/* Right side vignette image in quote card */}
                <div className="w-full md:w-48 h-36 rounded-2xl overflow-hidden shrink-0 bg-slate-100 shadow-inner">
                  <img 
                    src="/events/events_book_plant.jpg" 
                    alt="LEnSE Campus" 
                    className="w-full h-full object-cover" 
                    onError={(e) => { e.currentTarget.src = "/events/workshop.jpg"; }}
                  />
                </div>
              </div>

              <p className="text-[13px] text-[#4d6051] leading-relaxed pt-1">
                We extend our heartfelt gratitude to our partners, educators, volunteers and students whose support and enthusiasm make such achievements possible.
              </p>
            </section>

            {/* Gallery Section */}
            <section className="space-y-4">
              <h2 className="text-2xl sm:text-[26px] font-serif text-[#122016]">
                Gallery
              </h2>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
                {[
                  { img: '/events/events_book_plant.jpg', alt: 'Flasks with seedlings' },
                  { img: '/events/workshop.jpg', alt: 'Robotics Workshop Kit' },
                  { img: '/events/scholar.jpg', alt: 'STEM digital learning pad' },
                  { img: '/events/sustainability.jpg', alt: 'Solar clean energy' }
                ].map((item, idx) => (
                  <div key={idx} className="h-28 sm:h-32 rounded-2xl overflow-hidden bg-slate-100 border border-[#e2ece4] shadow-xs group cursor-pointer">
                    <img 
                      src={item.img} 
                      alt={item.alt} 
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500" 
                      onError={(e) => { e.currentTarget.src = "/events/conference.jpg"; }}
                    />
                  </div>
                ))}
              </div>

              {/* Info banner pill */}
              <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-white border border-[#e2ede5] text-xs text-[#526656] font-medium shadow-xs">
                <Info size={16} className="text-[#2d5a3c] shrink-0" />
                <span>Stay tuned for more updates on our initiatives and upcoming programmes.</span>
              </div>
            </section>

          </div>

          {/* Right Sidebar (4 cols): News Details, Key Takeaways, Related News */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* CARD 1: NEWS DETAILS */}
            <div className="rounded-[2rem] bg-white border border-[#e4ede5] p-6 sm:p-7 shadow-[0_8px_30px_rgba(0,0,0,0.03)] space-y-5">
              <h3 className="text-lg font-serif text-[#122016] pb-2 border-b border-[#f0f4ef]">
                News Details
              </h3>

              <div className="space-y-4">
                {[
                  { label: 'Category', value: 'Achievement', icon: GraduationCap },
                  { label: 'Date', value: '12 May 2025', icon: Calendar },
                  { label: 'Author', value: 'LEnSE Admin', icon: User },
                  { label: 'Read Time', value: '5 min read', icon: Clock }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3.5">
                    <div className="w-8 h-8 rounded-xl bg-[#f4f8f3] flex items-center justify-center text-[#2d5a3c] shrink-0 mt-0.5">
                      <item.icon size={16} strokeWidth={1.5} />
                    </div>
                    <div>
                      <span className="block text-[11px] text-[#6b7e70] font-medium">{item.label}</span>
                      <span className="block text-[13px] font-bold text-[#14261a] leading-snug">{item.value}</span>
                    </div>
                  </div>
                ))}

                {/* Social Share Row */}
                <div className="pt-2 border-t border-[#f0f4ef] flex items-center justify-between">
                  <span className="text-[11.5px] font-bold text-[#14261a]">Share</span>
                  <div className="flex items-center gap-2">
                    {[
                      { icon: Facebook, href: '#' },
                      { icon: Twitter, href: '#' },
                      { icon: Linkedin, href: '#' },
                      { icon: Mail, href: '#' }
                    ].map((s, i) => (
                      <a 
                        key={i} 
                        href={s.href} 
                        className="w-8 h-8 rounded-full bg-[#1b3726] hover:bg-[#254d35] text-white flex items-center justify-center transition-colors shadow-xs"
                      >
                        <s.icon size={13} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* CARD 2: KEY TAKEAWAYS */}
            <div className="rounded-[2rem] bg-white border border-[#e4ede5] p-6 sm:p-7 shadow-[0_8px_30px_rgba(0,0,0,0.03)] space-y-4">
              <h3 className="text-lg font-serif text-[#122016] pb-2 border-b border-[#f0f4ef]">
                Key Takeaways
              </h3>

              <div className="space-y-3.5">
                {[
                  { text: 'Strengthens STEM education outreach across Kerala', icon: Leaf },
                  { text: 'Encourages experiential and inclusive learning', icon: Lightbulb },
                  { text: 'Empowers students from rural and underserved areas', icon: Users },
                  { text: 'Builds a sustainable ecosystem for future innovators', icon: Layers }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 group">
                    <div className="w-7 h-7 rounded-lg bg-[#f0f6ee] flex items-center justify-center text-[#2d5a3c] shrink-0 mt-0.5 group-hover:bg-[#e4efe2] transition-colors">
                      <item.icon size={14} />
                    </div>
                    <p className="text-[12px] text-[#3d5042] leading-snug font-medium pt-0.5">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* CARD 3: RELATED NEWS */}
            <div className="rounded-[2rem] bg-white border border-[#e4ede5] p-6 sm:p-7 shadow-[0_8px_30px_rgba(0,0,0,0.03)] space-y-4">
              <h3 className="text-lg font-serif text-[#122016] pb-2 border-b border-[#f0f4ef]">
                Related News
              </h3>

              <div className="space-y-3.5">
                {[
                  {
                    title: 'New STEM Learning Lab Inaugurated at Kazhakkoottam',
                    date: '05 May 2025',
                    img: '/events/workshop.jpg'
                  },
                  {
                    title: 'MoU Signed with SIET for Academic Collaboration',
                    date: '22 Apr 2025',
                    img: '/events/conference.jpg'
                  },
                  {
                    title: 'Scholar Connect: A Platform for Research & Ideas',
                    date: '10 Apr 2025',
                    img: '/events/scholar.jpg'
                  }
                ].map((article, idx) => (
                  <Link 
                    key={idx} 
                    href="/news/1" 
                    className="flex items-center gap-3 group/art hover:bg-[#f6f9f4] p-1.5 rounded-xl transition-colors"
                  >
                    <div className="w-14 h-12 rounded-xl overflow-hidden bg-slate-100 shrink-0">
                      <img 
                        src={article.img} 
                        alt={article.title} 
                        className="w-full h-full object-cover group-hover/art:scale-108 transition-transform" 
                        onError={(e) => { e.currentTarget.src = "/events/events_book_plant.jpg"; }}
                      />
                    </div>
                    <div className="space-y-0.5 flex-1 min-w-0">
                      <h4 className="text-[12px] font-bold text-[#14261a] leading-tight group-hover/art:text-[#2d5a3c] transition-colors line-clamp-2">
                        {article.title}
                      </h4>
                      <span className="text-[10px] text-[#718476] font-medium block">
                        {article.date}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>

              <div className="pt-2 border-t border-[#f0f4ef]">
                <Link 
                  href="/news" 
                  className="w-full text-[11.5px] font-bold text-[#1b3726] hover:text-[#2d5a3c] flex items-center justify-center gap-1.5 transition-colors py-1 group"
                >
                  <span>View All News</span>
                  <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* ============================================================ */}
      {/* 3. BOTTOM STAY UPDATED NEWSLETTER */}
      {/* ============================================================ */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="rounded-[2rem] bg-[#eaf0e6] border border-[#dce8d8] flex flex-col sm:flex-row items-center justify-between p-6 sm:p-8 md:p-10 gap-8 relative overflow-hidden shadow-xs">
          
          <div className="flex items-center gap-4 relative z-10">
            <div className="w-12 h-12 rounded-2xl bg-[#2d5a3c] text-white flex items-center justify-center shrink-0 shadow-sm">
              <Mail size={22} />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-serif text-[#122016]">
                Stay Updated
              </h3>
              <p className="text-xs text-[#526656]">
                Subscribe to our newsletter and get the latest news, updates and stories from LEnSE.
              </p>
            </div>
          </div>

          <div className="w-full sm:w-auto relative z-10 shrink-0">
            {subscribed ? (
              <div className="flex items-center gap-2 text-xs font-bold text-[#2d5a3c] bg-white px-5 py-3 rounded-full shadow-sm">
                <CheckCircle2 size={16} />
                <span>Subscribed successfully!</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="bg-white rounded-full p-1.5 pl-5 pr-1.5 flex items-center shadow-sm w-full sm:w-[340px] border border-[#d2dfd2]">
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="Your email address" 
                  className="text-xs text-slate-800 placeholder:text-[#8a9d90] bg-transparent outline-none flex-1 font-medium min-w-0"
                />
                <button 
                  type="submit" 
                  className="px-5 py-2.5 rounded-full bg-[#1b3726] hover:bg-[#254c35] text-white text-[11px] font-bold flex items-center gap-2 transition-colors cursor-pointer shrink-0 shadow-xs"
                >
                  <span>Subscribe</span>
                  <ArrowRight size={13} />
                </button>
              </form>
            )}
          </div>

          {/* Right botanical illustration */}
          <div className="absolute right-0 bottom-0 pointer-events-none opacity-40 translate-x-3 translate-y-3">
            <svg width="150" height="150" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M80 100C80 70 100 50 100 50C100 50 80 30 80 0C80 30 60 50 60 50C60 50 80 70 80 100Z" fill="#a3bca7" />
              <path d="M30 100C30 85 40 75 40 75C40 75 30 65 30 50C30 65 20 75 20 75C20 75 30 85 30 100Z" fill="#88a88f" />
            </svg>
          </div>

        </div>
      </div>

    </div>
  );
}
 