'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { 
  ArrowRight, 
  Leaf, 
  Calendar, 
  Clock, 
  MapPin, 
  Users, 
  CalendarPlus,
  User,
  Projector,
  FlaskConical,
  Network,
  GraduationCap,
  Briefcase,
  Monitor,
  Building,
  Microscope,
  Sparkles,
  Download,
  Mail,
  CheckCircle2,
  ChevronRight
} from 'lucide-react';

export default function EventDetailPage({ params }) {
  const resolvedParams = params && typeof params.then === 'function' ? React.use(params) : params;
  const eventId = resolvedParams?.id || '1';

  // Using dummy data based on the mockup. In a real app, we'd fetch based on params.id
  const event = {
    title: 'Fourth SIET International Conference on Educational Technology',
    subtitle: '"Educational Technology in STEAM Education"',
    category: 'CONFERENCE',
    description: 'A premier international conference bringing together educators, researchers, policymakers, and innovators to explore the role of educational technology in advancing STEAM education and building future-ready learning ecosystems.',
    dates: '14 - 15 March 2025',
    time: '09:30 AM Onwards',
    venue: 'Thiruvananthapuram, Kerala, India',
    mode: 'Hybrid (Offline & Online)',
    organizedBy: 'State Institute of Educational Technology (SIET) in collaboration with LEnSE',
    chiefGuest: 'Prof. Jan De Waters, Clarkson University, USA',
    inauguration: 'Hon\'ble Minister for Education, Sri. V. Sivankutty',
    closingDate: '10 March 2025'
  };

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

  return (
    <div className="min-h-screen bg-[#f9faf7] text-[#19241c] font-sans pb-28 pt-28 sm:pt-36 relative overflow-hidden">
      
      {/* ============================================================ */}
      {/* 1. HERO SECTION WITH IMAGE */}
      {/* ============================================================ */}
      <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Background Image Container inside Hero */}
        <div className="absolute top-0 right-0 w-full lg:w-[55%] h-full min-h-[500px] lg:h-[600px] xl:h-[650px] pointer-events-none z-0 rounded-l-[3rem] overflow-hidden hidden lg:block">
          <img 
            src="/events/events_globe_books.jpg" 
            alt="Event Background" 
            className="w-full h-full object-cover object-left" 
            onError={(e) => { e.currentTarget.src = "/events/conference.jpg"; }}
          />
          {/* Fades for blending */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#f9faf7] via-[#f9faf7]/90 via-[15%] to-transparent to-[50%]" />
          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#f9faf7] to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#f9faf7] to-transparent" />
        </div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 min-h-[500px] lg:min-h-[600px] xl:min-h-[650px] items-center pb-12 lg:pb-0">
          
          <div className="lg:col-span-7 space-y-6 lg:pr-10 pt-4">
            
            {/* Breadcrumb */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-[#485b4d]">
              <Leaf size={14} className="text-[#2d5a3c] fill-[#2d5a3c]" />
              <Link href="/" className="hover:text-[#1b3726] transition-colors">Home</Link>
              <span className="text-[#879b8c]">&gt;</span>
              <Link href="/events" className="hover:text-[#1b3726] transition-colors">Events</Link>
              <span className="text-[#879b8c]">&gt;</span>
              <span className="text-[#1b3726] font-bold line-clamp-1 max-w-[200px] sm:max-w-xs">{event.title}</span>
            </div>
            
            {/* Category Tag */}
            <div className="inline-flex px-3 py-1 rounded-md bg-[#eaf1e4] text-[#2d5a3c] text-[10.5px] font-bold uppercase tracking-widest">
              {event.category}
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-normal text-[#131f17] leading-[1.1] tracking-tight font-serif max-w-2xl">
              {event.title}
            </h1>

            <p className="text-xl sm:text-2xl font-serif italic text-[#2d5a3c]">
              {event.subtitle}
            </p>

            <p className="text-[#405245] text-sm leading-[1.7] max-w-xl font-normal">
              {event.description}
            </p>

            {/* Meta Stats Bar */}
            <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-3 sm:gap-4 pt-2 pb-4">
              <div className="flex items-center gap-3 bg-white/70 backdrop-blur-md px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-2xl border border-[#d2e0d3]/60 shadow-xs">
                <div className="text-[#2d5a3c] shrink-0"><Calendar size={18} /></div>
                <div>
                  <div className="text-xs sm:text-[13px] font-bold text-[#19241c]">14 - 15</div>
                  <div className="text-[10px] sm:text-[11px] text-[#556758] font-medium">March 2025</div>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white/70 backdrop-blur-md px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-2xl border border-[#d2e0d3]/60 shadow-xs">
                <div className="text-[#2d5a3c] shrink-0"><Clock size={18} /></div>
                <div>
                  <div className="text-xs sm:text-[13px] font-bold text-[#19241c]">09:30 AM</div>
                  <div className="text-[10px] sm:text-[11px] text-[#556758] font-medium">Onwards</div>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white/70 backdrop-blur-md px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-2xl border border-[#d2e0d3]/60 shadow-xs">
                <div className="text-[#2d5a3c] shrink-0"><MapPin size={18} /></div>
                <div>
                  <div className="text-xs sm:text-[13px] font-bold text-[#19241c] truncate max-w-[110px] sm:max-w-none">Trivandrum</div>
                  <div className="text-[10px] sm:text-[11px] text-[#556758] font-medium">Kerala, India</div>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white/70 backdrop-blur-md px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-2xl border border-[#d2e0d3]/60 shadow-xs">
                <div className="text-[#2d5a3c] shrink-0"><Users size={18} /></div>
                <div>
                  <div className="text-xs sm:text-[13px] font-bold text-[#19241c]">Hybrid</div>
                  <div className="text-[10px] sm:text-[11px] text-[#556758] font-medium">Mode</div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button className="px-7 py-3.5 rounded-full bg-gradient-to-b from-[#1b3726] to-[#11261a] hover:from-[#234631] hover:to-[#173323] text-white text-[11.5px] font-bold uppercase tracking-wider flex items-center gap-3 transition-all duration-500 shadow-[0_8px_20px_rgba(15,35,22,0.25)] hover:scale-[1.03] group">
                <span>Register Now</span>
                <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
              </button>
              
              <button className="px-6 py-3.5 rounded-full bg-white border border-[#c1d1c4] hover:bg-[#f3f6f1] text-[#1b3726] text-[11.5px] font-bold tracking-wider flex items-center gap-2.5 transition-all duration-300 shadow-sm hover:shadow-md">
                <span>Add to Calendar</span>
                <CalendarPlus size={15} className="text-[#2d5a3c]" />
              </button>
            </div>
            
          </div>
        </div>
      </div>

      {/* Hero bottom divider line */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-4">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#d2e0d3] to-transparent opacity-80" />
      </div>

      {/* ============================================================ */}
      {/* 2. MAIN CONTENT AREA (Two Columns) */}
      {/* ============================================================ */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 sm:mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Main Content */}
          <div className="lg:col-span-8 space-y-16">
            
            {/* About the Event */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-serif text-[#122016] mb-5">About the Event</h2>
              <div className="space-y-4 text-[#445548] text-sm leading-[1.8]">
                <p>
                  The Fourth SIET International Conference on Educational Technology focuses on the theme "Educational Technology in STEAM Education". The conference aims to bring together thought leaders, practitioners, researchers, and students to share insights, innovations, and best practices in the use of technology to enhance STEAM learning.
                </p>
                <p>
                  The event will feature keynote addresses, paper presentations, panel discussions, and workshops designed to foster collaboration and inspire transformative change in education.
                </p>
              </div>
            </section>

            {/* Highlights */}
            <section className="bg-white rounded-[2rem] p-8 border border-[#e8efe9] shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
              <h3 className="text-xl font-serif text-[#122016] mb-8 text-center sm:text-left">Highlights</h3>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-6 sm:gap-4 divide-x-0 sm:divide-x divide-[#e8efe9]">
                {[
                  { icon: User, title: 'Keynote Addresses', desc: 'Insights from international experts' },
                  { icon: Projector, title: 'Paper Presentations', desc: 'Research and innovations in educational tech' },
                  { icon: Users, title: 'Panel Discussions', desc: 'Engaging dialogues on emerging trends and challenges' },
                  { icon: FlaskConical, title: 'Workshops', desc: 'Hands-on sessions and capacity building' },
                  { icon: Network, title: 'Networking', desc: 'Connect and collaborate with global peers' }
                ].map((item, idx) => (
                  <div key={idx} className="flex flex-col items-center text-center px-2 group">
                    <div className="w-12 h-12 rounded-2xl bg-[#f5f8f3] border border-[#e4ebe5] flex items-center justify-center text-[#2d5a3c] mb-4 group-hover:-translate-y-1 transition-transform duration-300">
                      <item.icon size={22} strokeWidth={1.5} />
                    </div>
                    <h4 className="text-[12px] font-bold text-[#19241c] leading-tight mb-2">{item.title}</h4>
                    <p className="text-[11px] text-[#637667] leading-snug">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Who Should Attend */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-serif text-[#122016] mb-6">Who Should Attend</h2>
              <div className="flex flex-wrap gap-4 justify-center sm:justify-start">
                {[
                  { icon: Monitor, label: 'Educators &\nTeachers' },
                  { icon: Microscope, label: 'Researchers &\nAcademics' },
                  { icon: GraduationCap, label: 'Students &\nScholars' },
                  { icon: Building, label: 'Policymakers &\nAdministrators' },
                  { icon: FlaskConical, label: 'EdTech\nInnovators' },
                  { icon: Briefcase, label: 'Industry\nProfessionals' }
                ].map((item, idx) => (
                  <div key={idx} className="flex flex-col items-center justify-center text-center w-[120px] h-[110px] rounded-[1.5rem] bg-white border border-[#e8efe9] hover:border-[#2d5a3c]/30 shadow-[0_2px_10px_rgba(0,0,0,0.02)] transition-colors group">
                    <item.icon size={22} strokeWidth={1.5} className="text-[#2d5a3c] mb-2 group-hover:scale-110 transition-transform" />
                    <span className="text-[10.5px] font-semibold text-[#3b4c40] whitespace-pre-line leading-tight">{item.label}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Key Speakers */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-serif text-[#122016] mb-6">Key Speakers</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                
                {/* Speaker 1 */}
                <div className="flex items-center gap-5 p-5 rounded-[1.8rem] bg-white border border-[#e8efe9] shadow-[0_2px_15px_rgba(0,0,0,0.02)] hover:-translate-y-1 transition-transform duration-300">
                  <div className="w-24 h-24 rounded-full overflow-hidden bg-slate-100 shrink-0 border-2 border-white shadow-sm">
                    <img src="/events/speaker1.jpg" alt="Prof. Jan De Waters" className="w-full h-full object-cover" onError={(e) => { e.currentTarget.src = 'https://i.pravatar.cc/150?u=a042581f4e29026704d'; }} />
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 mb-0.5">
                      <h4 className="text-[16px] font-bold text-[#19241c]">Prof. Jan De Waters</h4>
                    </div>
                    <span className="inline-block px-2 py-0.5 rounded text-[9.5px] font-bold uppercase tracking-wider bg-[#eaf1e4] text-[#2d5a3c] mb-1">
                      Chief Guest
                    </span>
                    <p className="text-[12px] text-[#556758] font-medium leading-snug">Clarkson University, USA</p>
                    <p className="text-[11px] text-[#6c7d70] leading-tight pt-1">Professor and expert in educational technology and sustainable learning systems.</p>
                  </div>
                </div>

                {/* Speaker 2 */}
                <div className="flex items-center gap-5 p-5 rounded-[1.8rem] bg-white border border-[#e8efe9] shadow-[0_2px_15px_rgba(0,0,0,0.02)] hover:-translate-y-1 transition-transform duration-300">
                  <div className="w-24 h-24 rounded-full overflow-hidden bg-slate-100 shrink-0 border-2 border-white shadow-sm">
                    <img src="/events/speaker2.jpg" alt="Sri. V. Sivankutty" className="w-full h-full object-cover" onError={(e) => { e.currentTarget.src = 'https://i.pravatar.cc/150?u=a042581f4e29026704e'; }} />
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 mb-0.5">
                      <h4 className="text-[16px] font-bold text-[#19241c]">Sri. V. Sivankutty</h4>
                    </div>
                    <span className="inline-block px-2 py-0.5 rounded text-[9.5px] font-bold uppercase tracking-wider bg-[#f3efe6] text-[#6b5833] mb-1">
                      Inaugurator
                    </span>
                    <p className="text-[12px] text-[#556758] font-medium leading-snug">Hon'ble Minister for Education, Kerala</p>
                    <p className="text-[11px] text-[#6c7d70] leading-tight pt-1">Inaugurating the conference and championing quality education for all.</p>
                  </div>
                </div>

              </div>
              
              <div className="flex justify-center sm:justify-start">
                <button className="px-5 py-2.5 rounded-full bg-white border border-[#d2e0d3] text-[#1b3726] text-[11px] font-bold flex items-center gap-2 hover:bg-[#f3f6f1] transition-colors shadow-sm">
                  <span>View All Speakers</span>
                  <ArrowRight size={13} />
                </button>
              </div>
            </section>
            
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-4 space-y-8">
            
            {/* Event at a Glance */}
            <div className="bg-white rounded-[2rem] border border-[#e8efe9] shadow-[0_10px_30px_rgba(0,0,0,0.03)] overflow-hidden">
              <div className="px-7 pt-7 pb-4">
                <h3 className="text-xl font-serif text-[#122016]">Event at a Glance</h3>
              </div>
              
              <div className="px-7 pb-7 space-y-5">
                {[
                  { icon: Calendar, label: 'Dates', value: '14 - 15 March 2025' },
                  { icon: Clock, label: 'Time', value: '09:30 AM onwards' },
                  { icon: MapPin, label: 'Venue', value: 'Thiruvananthapuram, Kerala, India' },
                  { icon: Users, label: 'Mode', value: 'Hybrid (Offline & Online)' },
                  { icon: Building, label: 'Organized by', value: 'State Institute of Educational Technology (SIET)\nin collaboration with LEnSE' },
                  { icon: User, label: 'Chief Guest', value: 'Prof. Jan De Waters\nClarkson University, USA' },
                  { icon: Sparkles, label: 'Inauguration', value: 'Hon\'ble Minister for Education\nSri. V. Sivankutty' },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="text-[#2d5a3c] shrink-0 mt-0.5">
                      <item.icon size={20} strokeWidth={1.5} />
                    </div>
                    <div>
                      <h4 className="text-[11.5px] font-bold text-[#19241c] mb-0.5">{item.label}</h4>
                      <p className="text-[12px] text-[#556758] whitespace-pre-line leading-snug">{item.value}</p>
                    </div>
                  </div>
                ))}

                <div className="pt-4 border-t border-[#f0f4f1]">
                  <button className="w-full py-4 rounded-full bg-[#1b3726] hover:bg-[#234631] text-white text-[12px] font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-[0_8px_20px_rgba(27,55,38,0.2)]">
                    <span>Register Now</span>
                    <ArrowRight size={14} />
                  </button>
                  <p className="text-[10px] text-center text-[#6c7d70] mt-3 font-medium">
                    Registration closes on 10 March 2025
                  </p>
                </div>
              </div>
            </div>

            {/* Event Resources */}
            <div className="bg-[#f2f6f0] rounded-[2rem] border border-[#e4ede6] p-7">
              <h3 className="text-xl font-serif text-[#122016] mb-5">Event Resources</h3>
              
              <div className="space-y-3">
                {[
                  { title: 'Conference Brochure', size: 'PDF • 1.2 MB' },
                  { title: 'Call for Papers', size: 'PDF • 876 KB' },
                  { title: 'Submission Guidelines', size: 'PDF • 945 KB' }
                ].map((doc, idx) => (
                  <div key={idx} className="flex items-center justify-between p-4 rounded-2xl bg-white border border-[#e4ede6] hover:border-[#c9dacd] hover:shadow-sm transition-all group cursor-pointer">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[#f4f7f2] flex items-center justify-center text-[#2d5a3c]">
                        <Download size={18} strokeWidth={1.5} />
                      </div>
                      <div>
                        <h4 className="text-[13px] font-bold text-[#19241c]">{doc.title}</h4>
                        <p className="text-[11px] text-[#6c7d70]">{doc.size}</p>
                      </div>
                    </div>
                    <div className="text-[#a4b6aa] group-hover:text-[#2d5a3c] transition-colors">
                      <Download size={16} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ============================================================ */}
      {/* 3. RELATED EVENTS & BOTTOM CTA */}
      {/* ============================================================ */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        
        {/* You May Also Be Interested In */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl sm:text-3xl font-serif text-[#122016]">You May Also Be Interested In</h2>
            <Link href="/events" className="text-[12px] font-bold text-[#2d5a3c] hover:text-[#1b3726] flex items-center gap-1.5 transition-colors group">
              <span>View All Events</span>
              <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 relative">
            
            {/* Nav button right */}
            <div className="absolute -right-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-md border border-[#e8efe9] flex items-center justify-center text-[#19241c] cursor-pointer hover:bg-[#f9faf7] hidden xl:flex z-10">
              <ChevronRight size={20} />
            </div>

            {[
              {
                category: 'WORKSHOP',
                title: 'Hands-on STEM Learning Workshop for Teachers',
                date: '25 Apr 2025',
                img: '/events/workshop.jpg'
              },
              {
                category: 'TRAINING PROGRAMME',
                title: 'Sustainability Education and Green Futures',
                date: '10 May 2025',
                img: '/events/sustainability.jpg'
              },
              {
                category: 'SCHOLAR CONNECT',
                title: 'Scholar Connect: Research Ideas & Collaborations',
                date: '28 Jun 2025',
                img: '/events/scholar.jpg'
              },
              {
                category: 'WEBINAR',
                title: 'AI in Education: Opportunities and Challenges',
                date: '05 Jul 2025',
                img: '/events/conference.jpg' // Using fallback
              }
            ].map((evt, idx) => (
              <Link href={`/events/1`} key={idx} className="group flex flex-col bg-white rounded-2xl border border-[#e8efe9] overflow-hidden hover:shadow-[0_8px_25px_rgba(0,0,0,0.04)] transition-all duration-300">
                <div className="h-36 w-full overflow-hidden bg-slate-100">
                  <img src={evt.img} alt={evt.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" onError={(e) => { e.currentTarget.src = "/events/conference.jpg"; }} />
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="inline-block px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-widest bg-[#eaf1e4] text-[#2d5a3c] mb-3">
                      {evt.category}
                    </span>
                    <h3 className="text-[14px] font-bold text-[#19241c] leading-snug mb-4 group-hover:text-[#2d5a3c] transition-colors line-clamp-2">
                      {evt.title}
                    </h3>
                  </div>
                  <div className="text-[11.5px] font-medium text-[#6c7d70]">
                    {evt.date}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Stay Updated Footer Card */}
        <div className="rounded-[2rem] bg-[#eef1eb] border border-[#e4ede6] flex flex-col sm:flex-row items-center justify-between p-6 sm:p-8 md:p-10 gap-8 relative overflow-hidden">
          
          {/* Left visual */}
          <div className="hidden sm:block absolute left-0 bottom-0 w-[40%] h-[120%] opacity-90 pointer-events-none origin-bottom-left scale-110">
            <img 
              src="/events/events_book_plant.jpg" 
              alt="Books and Plant" 
              className="w-full h-full object-cover object-right"
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
            />
            {/* Fade to background color */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#eef1eb]/70 to-[#eef1eb]" />
          </div>

          <div className="w-full sm:w-1/2 sm:ml-auto relative z-10 space-y-2">
            <h3 className="text-2xl sm:text-3xl font-serif text-[#122016]">Stay Updated</h3>
            <p className="text-[12.5px] text-[#556758] max-w-sm pb-2">
              Subscribe to get the latest updates about our upcoming events and programmes.
            </p>
          </div>

          <div className="w-full sm:w-auto relative z-10 shrink-0">
            {subscribed ? (
              <div className="flex items-center gap-2 text-xs font-bold text-[#2d5a3c] bg-white px-5 py-3 rounded-full shadow-sm">
                <CheckCircle2 size={16} />
                <span>Subscribed successfully!</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="bg-white rounded-full p-1.5 pl-5 pr-1.5 flex items-center shadow-sm w-full sm:w-[320px]">
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="Your email address" 
                  className="text-[13px] text-slate-800 placeholder:text-[#8a9d90] bg-transparent outline-none flex-1 font-medium min-w-0"
                />
                <button 
                  type="submit" 
                  className="px-5 py-2.5 rounded-full bg-[#3d5b45] hover:bg-[#2d4734] text-white text-[11px] font-bold flex items-center gap-2 transition-colors cursor-pointer shrink-0"
                >
                  <span>Subscribe</span>
                  <ArrowRight size={14} />
                </button>
              </form>
            )}
          </div>
          
          {/* Right decoration */}
          <div className="absolute right-0 bottom-0 pointer-events-none opacity-40">
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
