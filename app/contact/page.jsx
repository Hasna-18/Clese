'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import {
  Leaf,
  Mail,
  MapPin,
  Phone,
  Send,
  CheckCircle2,
  Building2,
  User,
  Clock,
  Globe,
  ArrowRight,
  Sparkles,
  School,
  Landmark,
  ShieldCheck,
  MessageSquare,
  HelpCircle
} from 'lucide-react';

export default function ContactPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: 'General Enquiry',
    organization: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: '', email: '', subject: 'General Enquiry', organization: '', message: '' });
    }, 4500);
  };

  return (
    <div className="min-h-screen bg-[#f3f5ed] dark:bg-[#031008] text-[#19241c] dark:text-slate-100 font-sans pb-28 pt-28 sm:pt-36 relative overflow-hidden selection:bg-[#a2d45e]/30 transition-colors duration-300">
      
      {/* Ambient background glows */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[20%] -left-40 w-[600px] h-[600px] bg-[#e2edd8]/40 dark:bg-[#0f301d]/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-8 w-[650px] h-[650px] bg-[#dbe8d0]/40 dark:bg-[#082214]/30 rounded-full blur-3xl" />
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
              alt="LEnSE Campus & Contact" 
              className="w-full h-full object-cover object-center scale-[1.03]" 
              onError={(e) => {
                e.currentTarget.src = "/events/events_book_plant.jpg";
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#f3f5ed] dark:from-[#031008] via-[#f3f5ed]/80 dark:via-[#031008]/85 via-[20%] to-transparent to-[55%]" />
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#f3f5ed] dark:from-[#031008] via-[#f3f5ed]/60 dark:via-[#031008]/60 to-transparent" />
            <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-[#f3f5ed] dark:from-[#031008] to-transparent" />
          </div>

          {/* Left Hero Content */}
          <div className="relative z-10 max-w-xl space-y-5 pt-2 pb-6">
            
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs font-semibold text-[#485b4d] dark:text-slate-400">
              <Leaf size={14} className="text-[#2d5a3c] dark:text-[#a2d45e] fill-[#2d5a3c] dark:fill-[#a2d45e]" />
              <Link href="/" className="hover:text-[#1b3726] dark:hover:text-white transition-colors">Home</Link>
              <span className="text-[#879b8c] dark:text-slate-500">&gt;</span>
              <span className="text-[#1b3726] dark:text-[#a2d45e] font-bold">Contact &amp; Location</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[3.8rem] font-normal text-[#122016] dark:text-white leading-[1.1] tracking-tight font-serif">
              Get in Touch with <span className="italic text-[#243d2c] dark:text-[#a2d45e]">LEnSE</span>
            </h1>

            <p className="text-[#405245] dark:text-slate-300 text-sm sm:text-[14.5px] leading-[1.7] max-w-lg font-normal">
              We welcome academic collaborations, research partnerships, institutional inquiries, and invitations for school STEM camps across Kerala and beyond.
            </p>

            {/* Quick Contact Badges */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a 
                href="mailto:lenseedu24@gmail.com" 
                className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/90 dark:bg-[#0b1c14] border border-[#d5e2d6] dark:border-[#183a27] text-xs font-bold text-[#1b3726] dark:text-[#a2d45e] hover:bg-white dark:hover:bg-[#11261a] transition-all shadow-xs"
              >
                <Mail size={15} className="text-[#2d5a3c] dark:text-[#a2d45e]" />
                <span>lenseedu24@gmail.com</span>
              </a>

              <div className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/90 dark:bg-[#0b1c14] border border-[#d5e2d6] dark:border-[#183a27] text-xs font-medium text-[#495b4e] dark:text-slate-300 shadow-xs">
                <MapPin size={15} className="text-[#2d5a3c] dark:text-[#a2d45e]" />
                <span>Kariavattom Campus, TVM</span>
              </div>
            </div>

          </div>

        </div>

        {/* ============================================================ */}
        {/* 2. MAIN INTERACTIVE FORM & CONTACT DETAILS GRID */}
        {/* ============================================================ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Interactive Contact Form (7 cols) */}
          <div className="lg:col-span-7 rounded-[2.2rem] bg-white/90 dark:bg-[#0b1c14]/90 backdrop-blur-xl border border-white/95 dark:border-[#183a27] p-6 sm:p-8 lg:p-10 shadow-[0_8px_30px_rgba(0,0,0,0.03)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.3)] space-y-6">
            
            <div className="space-y-1 pb-2 border-b border-[#f0f4ef] dark:border-[#183a27]">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#2d5a3c] dark:bg-[#a2d45e]" />
                <span className="text-[10.5px] font-bold tracking-[0.2em] text-[#4d5e50] dark:text-[#a2d45e] uppercase">
                  DIRECT ENQUIRY
                </span>
              </div>
              <h3 className="text-2xl font-serif text-[#122016] dark:text-white">
                Send us a Message
              </h3>
            </div>

            {submitted ? (
              <div className="p-8 rounded-2xl bg-[#eaf1e4] dark:bg-[#11261a] border border-[#d0e0cf] dark:border-[#1e422c] text-center space-y-3 animate-in fade-in duration-300">
                <div className="w-12 h-12 bg-white dark:bg-[#1b432a] rounded-full flex items-center justify-center text-[#2d5a3c] dark:text-[#a2d45e] mx-auto shadow-sm">
                  <CheckCircle2 size={24} />
                </div>
                <h4 className="text-lg font-serif font-bold text-[#14261a] dark:text-white">Thank you for reaching out!</h4>
                <p className="text-xs text-[#526656] dark:text-slate-300 max-w-sm mx-auto">
                  Your message has been received by the Director's Office. We will get back to you shortly at {form.email || 'your email address'}.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  
                  {/* Full Name */}
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold text-[#2d3e31] dark:text-slate-300 uppercase tracking-wider">
                      Your Name *
                    </label>
                    <input 
                      type="text" 
                      required 
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="e.g. Dr. Ramesh Kumar" 
                      className="w-full px-4 py-3 rounded-xl bg-white dark:bg-[#05110a] border border-[#d5e2d6] dark:border-[#183a27] text-xs font-medium text-[#19241c] dark:text-white placeholder:text-[#889d8f] dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#2d5a3c]/30 shadow-xs"
                    />
                  </div>

                  {/* Email Address */}
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold text-[#2d3e31] dark:text-slate-300 uppercase tracking-wider">
                      Email Address *
                    </label>
                    <input 
                      type="email" 
                      required 
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="e.g. ramesh@university.edu" 
                      className="w-full px-4 py-3 rounded-xl bg-white dark:bg-[#05110a] border border-[#d5e2d6] dark:border-[#183a27] text-xs font-medium text-[#19241c] dark:text-white placeholder:text-[#889d8f] dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#2d5a3c]/30 shadow-xs"
                    />
                  </div>

                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  
                  {/* Organization / Institution */}
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold text-[#2d3e31] dark:text-slate-300 uppercase tracking-wider">
                      Organization / School
                    </label>
                    <input 
                      type="text" 
                      value={form.organization}
                      onChange={(e) => setForm({ ...form, organization: e.target.value })}
                      placeholder="e.g. Govt. HSS, Thiruvananthapuram" 
                      className="w-full px-4 py-3 rounded-xl bg-white dark:bg-[#05110a] border border-[#d5e2d6] dark:border-[#183a27] text-xs font-medium text-[#19241c] dark:text-white placeholder:text-[#889d8f] dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#2d5a3c]/30 shadow-xs"
                    />
                  </div>

                  {/* Subject Category */}
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold text-[#2d3e31] dark:text-slate-300 uppercase tracking-wider">
                      Inquiry Category
                    </label>
                    <select
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white dark:bg-[#05110a] border border-[#d5e2d6] dark:border-[#183a27] text-xs font-medium text-[#19241c] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#2d5a3c]/30 shadow-xs cursor-pointer"
                    >
                      <option value="General Enquiry" className="dark:bg-[#0b1c14] dark:text-white">General Enquiry</option>
                      <option value="Research Collaboration" className="dark:bg-[#0b1c14] dark:text-white">Research &amp; Academic Collaboration</option>
                      <option value="School STEM Camp Request" className="dark:bg-[#0b1c14] dark:text-white">School STEM Camp / Workshop Request</option>
                      <option value="Teacher Development" className="dark:bg-[#0b1c14] dark:text-white">Teacher Capacity Building Program</option>
                      <option value="Scholar Connect" className="dark:bg-[#0b1c14] dark:text-white">Scholar Connect Series Participation</option>
                    </select>
                  </div>

                </div>

                {/* Message Box */}
                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold text-[#2d3e31] dark:text-slate-300 uppercase tracking-wider">
                    Message Details *
                  </label>
                  <textarea 
                    required 
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell us about your proposal, query or institutional requirements..."
                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-[#05110a] border border-[#d5e2d6] dark:border-[#183a27] text-xs font-medium text-[#19241c] dark:text-white placeholder:text-[#889d8f] dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#2d5a3c]/30 shadow-xs resize-y"
                  />
                </div>

                <div className="pt-2">
                  <button 
                    type="submit" 
                    className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#1b3726] dark:bg-[#154628] hover:bg-[#254d35] dark:hover:bg-[#1c5c34] text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2.5 transition-all shadow-md cursor-pointer"
                  >
                    <span>Submit Message</span>
                    <Send size={13} />
                  </button>
                </div>
              </form>
            )}

          </div>

          {/* Right Column: Director Office Card & Institutional Details (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* DIRECTOR OFFICE CARD */}
            <div className="rounded-[2.2rem] bg-gradient-to-br from-[#1b3726] via-[#142e1f] to-[#0d2216] dark:from-[#0b1c14] dark:via-[#08180f] dark:to-[#040e08] p-7 text-white shadow-lg space-y-6 relative overflow-hidden border border-white/10 dark:border-[#183a27]">
              <div className="space-y-2 relative z-10">
                <span className="inline-flex px-3 py-1 rounded-md bg-[#a2d45e]/20 text-[#c2ec8b] border border-[#a2d45e]/30 text-[9.5px] font-bold uppercase tracking-widest">
                  DIRECTOR'S OFFICE
                </span>
                
                <h3 className="text-2xl font-serif leading-snug">
                  Dr. Divya C. Senan
                </h3>
                
                <p className="text-xs text-[#a8cfb0] font-medium">
                  Director, Centre for Learning Engineering &amp; Sustainability Education
                </p>
              </div>

              <div className="space-y-4 text-xs text-[#d0e6d5] relative z-10 pt-2 border-t border-white/10">
                
                {/* Centre Name */}
                <div className="flex items-start gap-3">
                  <Building2 size={16} className="text-[#a2d45e] shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-bold text-white">Centre:</span>
                    <span>Centre for Learning Engineering and Sustainability Education (LEnSE / CLESE)</span>
                  </div>
                </div>

                {/* Campus Address */}
                <div className="flex items-start gap-3">
                  <MapPin size={16} className="text-[#a2d45e] shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-bold text-white">Campus Location:</span>
                    <span>Department of Education, University of Kerala, Kariavattom Campus, Thiruvananthapuram - 695581, Kerala, India</span>
                  </div>
                </div>

                {/* Official Email */}
                <div className="flex items-start gap-3">
                  <Mail size={16} className="text-[#a2d45e] shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-bold text-white">Official Email:</span>
                    <a href="mailto:lenseedu24@gmail.com" className="text-[#a2d45e] hover:underline font-semibold">
                      lenseedu24@gmail.com
                    </a>
                  </div>
                </div>

                {/* Office Hours */}
                <div className="flex items-start gap-3">
                  <Clock size={16} className="text-[#a2d45e] shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-bold text-white">Office Hours:</span>
                    <span>Monday – Friday: 09:30 AM – 05:00 PM IST</span>
                  </div>
                </div>

              </div>

              {/* Decorative botanical artwork */}
              <div className="absolute right-0 bottom-0 pointer-events-none opacity-25 translate-x-4 translate-y-4">
                <Leaf size={140} />
              </div>
            </div>

            {/* INSTITUTIONAL COLLABORATORS CARD */}
            <div className="rounded-[2.2rem] bg-white/90 dark:bg-[#0b1c14]/90 backdrop-blur-xl border border-white/95 dark:border-[#183a27] p-6 sm:p-7 shadow-[0_8px_30px_rgba(0,0,0,0.03)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.3)] space-y-4">
              <h4 className="text-base font-serif font-bold text-[#14261a] dark:text-white pb-2 border-b border-[#f0f4ef] dark:border-[#183a27]">
                Academic &amp; Government Partners
              </h4>

              <div className="grid grid-cols-2 gap-3 text-xs">
                {[
                  { name: 'SIET Kerala', sub: 'Govt. of Kerala' },
                  { name: 'Clarkson University', sub: 'STEM Centre, USA' },
                  { name: 'ICSSR New Delhi', sub: 'Social Science Research' },
                  { name: 'Child Dev Centre', sub: 'Kazhakkoottam' },
                  { name: 'REFORM', sub: 'Educational Trust' },
                  { name: 'ELTAI & Hornby', sub: 'United Kingdom' }
                ].map((partner, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-[#f5f8f3] dark:bg-[#11261a] border border-[#e5efe4] dark:border-[#1e422c]">
                    <span className="block font-bold text-[#14261a] dark:text-white leading-tight">{partner.name}</span>
                    <span className="block text-[10px] text-[#607464] dark:text-slate-400">{partner.sub}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}
