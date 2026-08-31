'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Leaf, 
  Search, 
  Calendar, 
  ArrowRight, 
  FlaskConical, 
  Globe, 
  Award, 
  Users, 
  Building2, 
  BookOpen, 
  Sparkles, 
  CheckCircle2, 
  ChevronRight, 
  FileText, 
  GraduationCap, 
  Compass, 
  Atom, 
  Cpu, 
  ShieldCheck, 
  Lightbulb, 
  Layers,
  MapPin,
  ExternalLink,
  School,
  Landmark
} from 'lucide-react';

const RESEARCH_THEMES = [
  {
    icon: Atom,
    title: 'AI & Cognitive Learning Models',
    desc: 'Constructing mathematical models and integrating psychological learning principles with AI computational methods for career guidance and aptitude development.'
  },
  {
    icon: Globe,
    title: 'Global STEM & Sustainability',
    desc: 'International collaboration with the STEM Centre at Clarkson University, USA, advancing zero-carbon pedagogy and clean technology education.'
  },
  {
    icon: Users,
    title: 'Gifted Student Outreach',
    desc: 'State-wide initiatives with SIET, Government of Kerala, delivering experiential STEM training across 44 schools and 41 educational districts.'
  },
  {
    icon: Sparkles,
    title: 'Inclusive STEM 4 Girls',
    desc: 'ICSSR New Delhi funded state-wide camp series empowering young women from economically and socially disadvantaged backgrounds in science.'
  }
];

const OBJECTIVES = [
  'To create educational environments using advanced computing capabilities to address career guidance at secondary level and professional employability at higher education level, to all irrespective of social, economic, cultural, gender and accessibility barriers.',
  'To build new innovative digital tools that catalyze measurable improvements in student learning outcomes.',
  'To initiate a comprehensive programme constructing mathematical models for use in education, integrating psychological principles of human learning and AI with computational methods.',
  'To create and support opportunities for learning about sustainability through course work, research, co-curricular activities and civic engagement.',
  'To improve opportunities for students to connect sustainability, global interdependence, equity and civic action in their academic studies and provide research-informed professional development for teachers and school leaders.'
];

const PROJECTS_DATA = [
  {
    id: 1,
    category: 'International Collaboration',
    tag: 'GLOBAL PARTNERSHIP',
    title: 'LEnSE – Clarkson University International STEM Collaboration',
    partner: 'Clarkson University STEM Centre, USA',
    lead: 'Dr. Divya C. Senan & Prof. Jan De Waters',
    desc: 'Promoting international faculty exchange, joint research in educational technology, clean energy curriculum benchmarks, and innovative learning engineering practices.',
    outcomes: 'Global research symposia, joint publications, sustainable curriculum exchange.',
    img: '/events/conference.jpg',
    status: 'Active Partnership'
  },
  {
    id: 2,
    category: 'State Initiative',
    tag: 'ICSSR FUNDED',
    title: "State-wide 'STEM 4 Girls' Camp Series & Skill Evaluation",
    partner: 'Indian Council for Social Science Research (ICSSR), New Delhi',
    lead: 'Department of Education, University of Kerala',
    desc: 'State-level initiative offering robotics workbench tools, coding kits, and scientific skill evaluation to empower young women from disadvantaged families in Kollam, Thiruvananthapuram, and Idukki.',
    outcomes: 'Inaugurated by Finance Minister Sri. K. N. Balagopal; over 500+ female students empowered.',
    img: '/events/workshop.jpg',
    status: 'State-wide Active'
  },
  {
    id: 3,
    category: 'School Outreach',
    tag: 'SIET COLLABORATION',
    title: 'Gifted Students STEM Training Across 41 Educational Districts',
    partner: 'State Institute of Educational Technology (SIET), Govt. of Kerala',
    lead: 'LEnSE & Department of General Education',
    desc: 'Organizing residential STEM camps and distributing activity kits for gifted learners across 44 schools and 41 educational districts of Kerala to foster scientific curiosity.',
    outcomes: 'Inaugurated by Hon’ble Education Minister Sri. V. Sivankutty at ASTI Manvila.',
    img: '/events/events_book_plant.jpg',
    status: 'State Level'
  },
  {
    id: 4,
    category: 'Pedagogy & AI',
    tag: 'AI INSTRUCTION',
    title: 'Prompt Engineering & Generative AI for Higher Education Educators',
    partner: 'EdTech Society & IIT Mumbai',
    lead: 'Dr. Briju Tankachan & Dr. Divya C. Senan',
    desc: 'Research and lecture series investigating prompt engineering frameworks, generative AI assistance, and instructional design quality improvements.',
    outcomes: 'Specialized educator training framework and digital instruction guidelines.',
    img: '/events/scholar.jpg',
    status: 'Curriculum Published'
  },
  {
    id: 5,
    category: 'Language Pedagogy',
    tag: 'INTERNATIONAL WORKSHOP',
    title: 'Transformative English Language Pedagogy for Secondary Educators',
    partner: 'ELTAI & The Hornby Trust (UK)',
    lead: 'Centre for Undergraduate Studies, University of Kerala',
    desc: 'Collaborative research and workshop series aimed at bringing impactful pedagogical changes to secondary English language teaching across India.',
    outcomes: 'National secondary school educator capacity enhancement and digital courseware.',
    img: '/events/sustainability.jpg',
    status: 'Completed / Ongoing Phase II'
  },
  {
    id: 6,
    category: 'Academic Courseware',
    tag: 'FYUGP INNOVATION',
    title: 'Interactive Technology-Enabled Courseware: Selected Literary Terms',
    partner: 'Ability Enhancement Course (AEC), University of Kerala',
    lead: 'Ms. Greeshma Raveendran & Dr. Divya C. Senan',
    desc: 'Two-month technology-enabled extended learning course combining interactive video lessons, quizzes, and self-directed digital assessments for Four Year Undergraduate Programme (FYUGP) learners.',
    outcomes: 'Scalable digital learning module adopted across university colleges.',
    img: '/events/events_globe_books.jpg',
    status: 'Courseware Live'
  }
];

export default function ResearchPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'International Collaboration', 'State Initiative', 'School Outreach', 'Pedagogy & AI', 'Academic Courseware'];

  const filteredProjects = PROJECTS_DATA.filter(proj => {
    const matchesCat = selectedCategory === 'All' || proj.category === selectedCategory;
    const matchesSearch = searchQuery === '' || 
      proj.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.partner.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#f3f5ed] text-[#19241c] font-sans pb-28 pt-28 sm:pt-36 relative overflow-hidden selection:bg-[#a2d45e]/30">
      
      {/* Ambient glows */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[25%] -left-40 w-[600px] h-[600px] bg-[#e2edd8]/40 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-8 w-[650px] h-[650px] bg-[#dbe8d0]/40 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 sm:space-y-28">

        {/* ========================================================================= */}
        {/* 1. HERO SECTION */}
        {/* ========================================================================= */}
        <div className="relative">
          
          {/* Hero Visual on Right */}
          <div className="absolute top-0 right-0 w-full lg:w-[56%] h-[480px] sm:h-[540px] pointer-events-none z-0 rounded-l-[4rem] overflow-hidden select-none hidden lg:block">
            <img 
              src="/home/bg.png" 
              alt="LEnSE Research & Innovation" 
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
          <div className="relative z-10 max-w-xl space-y-6 pt-2 pb-6">
            
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs font-semibold text-[#485b4d]">
              <Leaf size={14} className="text-[#2d5a3c] fill-[#2d5a3c]" />
              <Link href="/" className="hover:text-[#1b3726] transition-colors">Home</Link>
              <span className="text-[#879b8c]">&gt;</span>
              <span className="text-[#1b3726] font-bold">Research & Initiatives</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[4rem] font-normal text-[#122016] leading-[1.08] tracking-tight font-serif">
              Research &amp;<br />
              <span className="italic text-[#243d2c]">Initiatives</span>
            </h1>

            <p className="text-xl sm:text-2xl font-serif italic text-[#243d2c] leading-snug">
              Advancing learning engineering, sustainability and STEM pedagogy.
            </p>

            <p className="text-[#405245] text-sm sm:text-[14.5px] leading-[1.7] max-w-lg font-normal">
              LEnSE conducts multidisciplinary research, state-wide school outreach initiatives, and international collaborative programs to create scalable, inclusive learning ecosystems.
            </p>

            {/* Quick Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 max-w-lg">
              {[
                { count: '41', label: 'Districts Reached', icon: MapPin },
                { count: '44', label: 'Partner Schools', icon: School },
                { count: '10+', label: 'Collaborators', icon: Landmark },
                { count: '100%', label: 'Social Inclusion', icon: ShieldCheck }
              ].map((m, i) => (
                <div key={i} className="p-3 rounded-2xl bg-white/80 backdrop-blur-md border border-[#dce6dd] shadow-xs text-center">
                  <span className="block text-xl font-serif font-bold text-[#14261a]">{m.count}</span>
                  <span className="block text-[10px] text-[#556758] font-medium leading-tight">{m.label}</span>
                </div>
              ))}
            </div>

          </div>

        </div>

        {/* ========================================================================= */}
        {/* 2. CORE RESEARCH THEMES (4 Pillars) */}
        {/* ========================================================================= */}
        <div className="p-4 sm:p-6 rounded-[2.5rem] bg-gradient-to-b from-white/70 via-white/50 to-white/30 backdrop-blur-2xl border border-white/95 shadow-[inset_0_2px_4px_rgba(255,255,255,1),0_15px_35px_rgba(0,25,12,0.04)]">
          <div className="text-center mb-6 space-y-1">
            <span className="text-[10.5px] font-bold tracking-[0.2em] text-[#4d5e50] uppercase">
              STRATEGIC RESEARCH DOMAINS
            </span>
            <h3 className="text-2xl font-serif text-[#122016]">
              Core Pillars of Scientific Inquiry
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {RESEARCH_THEMES.map((theme, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-white/80 border border-white shadow-xs hover:bg-white transition-all group">
                <div className="w-11 h-11 rounded-2xl bg-[#eaf1e4] text-[#2d5a3c] flex items-center justify-center mb-3.5 group-hover:scale-110 transition-transform">
                  <theme.icon size={20} strokeWidth={1.5} />
                </div>
                <h4 className="text-[14px] font-bold text-[#14261a] mb-2 leading-snug">
                  {theme.title}
                </h4>
                <p className="text-[12px] text-[#4d6052] leading-relaxed font-normal">
                  {theme.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 3. INSTITUTIONAL RESEARCH OBJECTIVES */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          <div className="lg:col-span-4 rounded-[2.2rem] bg-gradient-to-br from-[#1b3726] via-[#142e1f] to-[#0d2216] p-7 sm:p-8 text-white flex flex-col justify-between shadow-lg relative overflow-hidden">
            <div className="space-y-4 relative z-10">
              <span className="inline-flex px-3 py-1 rounded-md bg-[#a2d45e]/20 text-[#c2ec8b] border border-[#a2d45e]/30 text-[10px] font-bold uppercase tracking-widest">
                MANDATE & VISION
              </span>
              <h2 className="text-3xl font-serif leading-snug">
                Institutional Objectives
              </h2>
              <p className="text-xs text-[#b8d1be] leading-relaxed">
                Formally established at the University of Kerala in 2024 to pioneer learning engineering, AI computational pedagogy, and sustainable education frameworks.
              </p>
            </div>

            <div className="pt-6 relative z-10">
              <Link href="/contact">
                <button className="px-6 py-3 rounded-full bg-white text-[#122016] hover:bg-slate-100 text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all shadow-md cursor-pointer">
                  <span>Collaborate With Us</span>
                  <ArrowRight size={13} />
                </button>
              </Link>
            </div>

            {/* Botanical overlay */}
            <div className="absolute right-0 bottom-0 pointer-events-none opacity-20 translate-x-4 translate-y-4">
              <Leaf size={180} />
            </div>
          </div>

          <div className="lg:col-span-8 rounded-[2.2rem] bg-white/85 backdrop-blur-xl border border-white/95 p-6 sm:p-8 shadow-xs space-y-4 flex flex-col justify-center">
            {OBJECTIVES.map((obj, idx) => (
              <div key={idx} className="flex items-start gap-3.5 pb-3 border-b border-[#f0f4ef] last:border-none last:pb-0">
                <div className="w-6 h-6 rounded-full bg-[#eaf1e4] text-[#2d5a3c] flex items-center justify-center shrink-0 font-serif font-bold text-xs mt-0.5">
                  {idx + 1}
                </div>
                <p className="text-xs sm:text-[13px] text-[#3e5043] leading-relaxed font-normal">
                  {obj}
                </p>
              </div>
            ))}
          </div>

        </div>

        {/* ========================================================================= */}
        {/* 4. ACTIVE RESEARCH INITIATIVES & PROJECTS */}
        {/* ========================================================================= */}
        <div className="space-y-8">
          
          <div className="flex flex-col sm:flex-row justify-between sm:items-end gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#2d5a3c]" />
                <span className="text-[10.5px] font-bold tracking-[0.2em] text-[#4d5e50] uppercase">
                  FUNDED INITIATIVES & PROGRAMMES
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif text-[#122016]">
                Featured Research Projects
              </h2>
            </div>

            {/* Search Input */}
            <div className="relative w-full sm:w-64">
              <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#7f9484]" />
              <input 
                type="text" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search projects..."
                className="w-full pl-10 pr-4 py-2 rounded-full bg-white border border-[#d5e2d6] text-xs font-medium text-[#19241c] placeholder:text-[#7f9484] focus:outline-none focus:ring-2 focus:ring-[#2d5a3c]/30 shadow-xs"
              />
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#1b3726] text-white shadow-sm'
                    : 'bg-white/70 hover:bg-white text-[#384c3e] border border-[#dbe6dc]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Projects Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((proj) => (
              <div 
                key={proj.id} 
                className="rounded-[2rem] bg-white/90 backdrop-blur-xl border border-white/95 p-5 space-y-4 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-lg hover:-translate-y-1 transition-all flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  <div className="h-44 rounded-2xl overflow-hidden bg-slate-100 relative shadow-xs">
                    <img 
                      src={proj.img} 
                      alt={proj.title} 
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700" 
                      onError={(e) => { e.currentTarget.src = "/events/events_book_plant.jpg"; }}
                    />
                    <div className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full bg-[#0d2216]/85 backdrop-blur-md text-[#a2d45e] text-[9px] font-bold uppercase tracking-wider">
                      {proj.tag}
                    </div>
                  </div>

                  <div className="space-y-1">
                    <span className="text-[10.5px] font-bold text-[#2d5a3c] uppercase tracking-wider block">
                      {proj.partner}
                    </span>
                    <h3 className="text-[16px] font-serif font-semibold text-[#14261a] leading-snug group-hover:text-[#2d5a3c] transition-colors">
                      {proj.title}
                    </h3>
                  </div>

                  <p className="text-[12px] text-[#4d6052] leading-relaxed line-clamp-3 font-normal">
                    {proj.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#f0f4ef] space-y-2">
                  <div className="text-[11px] text-[#556758] flex items-center justify-between">
                    <span className="font-semibold">{proj.lead}</span>
                    <span className="px-2 py-0.5 rounded bg-[#eaf1e4] text-[#2d5a3c] text-[9px] font-bold">
                      {proj.status}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* ========================================================================= */}
        {/* 5. SCHOLAR CONNECT BANNER */}
        {/* ========================================================================= */}
        <div className="rounded-[2.4rem] bg-[#eaf0e6] border border-[#dce8d8] p-6 sm:p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xs relative overflow-hidden">
          <div className="flex items-center gap-4 relative z-10">
            <div className="w-14 h-14 rounded-2xl bg-[#1b3726] text-white flex items-center justify-center shrink-0 shadow-sm">
              <FlaskConical size={24} />
            </div>
            <div className="space-y-1">
              <h3 className="text-xl sm:text-2xl font-serif text-[#122016]">
                Scholar Connect Research Series
              </h3>
              <p className="text-xs sm:text-[13px] text-[#4d6052] max-w-lg">
                Are you a scholar, educator or researcher? Join our Scholar Connect platform to share research ideas, participate in symposia, and collaborate on funded research projects.
              </p>
            </div>
          </div>

          <div className="relative z-10 shrink-0">
            <Link href="/contact">
              <button className="px-7 py-3.5 rounded-full bg-[#1b3726] hover:bg-[#254d35] text-white text-xs font-bold tracking-wider flex items-center gap-2.5 transition-all shadow-md cursor-pointer">
                <span>Submit Research Proposal</span>
                <ArrowRight size={14} />
              </button>
            </Link>
          </div>
        </div>

      </div>

    </div>
  );
}
