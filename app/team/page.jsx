'use client';
import React, { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight, Mail, Award, BookOpen, Sparkles, X, Phone } from 'lucide-react';
import { DEFAULT_TEAM, DEFAULT_DIRECTOR, getStoredData } from '../../lib/data';

export default function TeamPage() {
  const [team, setTeam] = useState([]);
  const [director, setDirector] = useState(DEFAULT_DIRECTOR);
  const [selectedMember, setSelectedMember] = useState(null);

  // Category indices for sliders
  const [associateIndex, setAssociateIndex] = useState(0);
  const [postdocIndex, setPostdocIndex] = useState(0);
  const [scholarIndex, setScholarIndex] = useState(0);

  useEffect(() => {
    setTeam(getStoredData('team', DEFAULT_TEAM));
  }, []);

  // Filter team members into categories
  const associates = [
    {
      name: "Ajai K.",
      role: "Project Associate",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600",
      bio: "Contributes to CLESE experiential lab modules & rural STEM outreach deployment across secondary schools in Kerala.",
      email: "ajai@clese.edu"
    },
    {
      name: "Prof. Marcus Sterling",
      role: "Associate Professor",
      photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=600",
      bio: "Directs the Advanced Robotics & Automation Facility. Specializes in mechatronics and adaptive learning engineering.",
      email: "msterling@clese.edu"
    }
  ];

  const postdocs = [
    {
      name: "Dr. Shila Jasmine L S",
      role: "Postdoctoral Research Fellow",
      photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600",
      bio: "Specializes in environmental education policy, climate literacy frameworks, and gender-responsive STEM pedagogy.",
      email: "shilajasmine@clese.edu"
    },
    {
      name: "Dr. Aris Thorne",
      role: "Postdoctoral Research Chair",
      photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=600",
      bio: "Leads research in AI analytics, predictive learning engineering models, and digital classroom metrics.",
      email: "athorne@clese.edu"
    }
  ];

  const internationalScholars = [
    {
      name: "Ann Liliana Escarraga Forero",
      role: "International Doctoral Scholar",
      photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=600",
      bio: "Visiting research scholar from Colombia investigating cross-cultural energy literacy and inclusive digital learning.",
      email: "ann.escarraga@clese.edu"
    },
    {
      name: "Dr. Elena Rostova",
      role: "Visiting Research Fellow",
      photo: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&q=80&w=600",
      bio: "Focuses on bio-remediation literacy and sustainable environmental policy in higher education curricula.",
      email: "erostova@clese.edu"
    }
  ];

  const doctoralScholars = [
    {
      name: "Greeshma Raveendran",
      role: "Doctoral Research Scholar",
      photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=600",
      bio: "Researching interactive physics simulation kits and cognitive learning outcomes in secondary education.",
      email: "greeshma@clese.edu"
    },
    {
      name: "Divya Martin",
      role: "Senior Research Fellow",
      photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600",
      bio: "Investigating teacher capacity building frameworks and energy literacy integration in vocational training.",
      email: "divyamartin@clese.edu"
    }
  ];

  const allTeamMembers = [...team, ...associates, ...postdocs, ...internationalScholars, ...doctoralScholars];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 transition-colors duration-300 pb-20">
      {/* Top Glow & Hero Section */}
      <div className="relative pt-16 pb-12 overflow-hidden text-center max-w-5xl mx-auto px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-b from-amber-300/30 via-amber-100/20 to-transparent blur-3xl -z-10 rounded-full pointer-events-none" />

        <span className="text-[11px] font-extrabold tracking-widest text-amber-700 dark:text-amber-400 uppercase bg-amber-100 dark:bg-amber-900/40 px-3.5 py-1 rounded-full border border-amber-300 dark:border-amber-700">
          OUR ACADEMIC COMMUNITY
        </span>

        <h1 className="font-outfit text-5xl sm:text-6xl lg:text-7xl font-black text-slate-900 dark:text-white tracking-tight mt-4">
          TEAM
        </h1>

        <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm max-w-xl mx-auto mt-3 leading-relaxed">
          The multidisciplinary team of professors, postdoctoral fellows, international scholars, and research associates leading educational engineering and sustainability research.
        </p>
      </div>

      {/* Featured Director Card */}
      <div className="max-w-4xl mx-auto px-6 mb-20">
        <div className="relative p-6 sm:p-10 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-2xl shadow-slate-200/60 dark:shadow-slate-950/50 flex flex-col md:flex-row items-center gap-8">
          <div className="relative w-full md:w-72 h-72 rounded-2xl overflow-hidden shadow-lg border border-slate-100 shrink-0">
            {/* eslint-disable-next-html-for-img */}
            <img
              src={director.photo}
              alt={director.name}
              className="w-full h-full object-cover"
            />
            <span className="absolute bottom-3 left-3 bg-amber-400 text-slate-950 text-[10px] font-extrabold px-3 py-1 rounded-md uppercase tracking-wider shadow">
              HONORARY DIRECTOR
            </span>
          </div>

          <div className="space-y-4 text-left">
            <div>
              <h2 className="font-outfit font-extrabold text-3xl text-slate-900 dark:text-white">{director.name}</h2>
              <span className="text-xs font-bold text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/50 px-2.5 py-0.5 rounded-md inline-block mt-1">
                Honorary Director, CLESE
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {director.bio}
            </p>

            <div className="grid grid-cols-2 gap-4 py-3 border-y border-slate-100 dark:border-slate-800 text-center">
              <div>
                <span className="font-outfit font-black text-xl text-slate-900 dark:text-white block">20+</span>
                <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block">Research Papers</span>
              </div>
              <div>
                <span className="font-outfit font-black text-xl text-slate-900 dark:text-white block">18+</span>
                <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block">Years Experience</span>
              </div>
            </div>

            <a
              href="mailto:divyasenan@keralauniversity.ac.in"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs shadow-lg shadow-amber-500/25 transition-all hover:scale-105"
            >
              <Mail size={14} />
              <span>Contact Director</span>
            </a>
          </div>
        </div>
      </div>

      {/* Categorized Showcase Sections */}
      <div className="max-w-4xl mx-auto px-6 space-y-20">
        {/* Section 1: Project Associates */}
        <section className="space-y-6">
          <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
            <h2 className="font-outfit font-extrabold text-2xl text-slate-900 dark:text-white flex items-center gap-2">
              <span>Project Associates</span>
              <span className="text-amber-500 font-normal">|</span>
            </h2>
            <span className="text-xs text-slate-500 font-semibold">01 / 02</span>
          </div>

          <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xl flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-64 h-64 rounded-2xl overflow-hidden shadow border border-slate-100 shrink-0">
              {/* eslint-disable-next-html-for-img */}
              <img
                src={associates[associateIndex].photo}
                alt={associates[associateIndex].name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-4 text-left flex-1">
              <div>
                <h3 className="font-outfit font-bold text-2xl text-slate-900 dark:text-white">{associates[associateIndex].name}</h3>
                <span className="text-xs font-bold text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/50 px-2.5 py-0.5 rounded-md inline-block mt-1">
                  {associates[associateIndex].role}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {associates[associateIndex].bio}
              </p>
              <div className="flex items-center justify-between pt-2">
                <button
                  onClick={() => setSelectedMember(associates[associateIndex])}
                  className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white text-xs font-bold hover:bg-slate-200 transition-colors"
                >
                  Read Bio
                </button>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setAssociateIndex((prev) => (prev === 0 ? associates.length - 1 : prev - 1))}
                    className="w-9 h-9 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 flex items-center justify-center hover:bg-amber-500 hover:text-white transition-colors"
                  >
                    <ArrowLeft size={16} />
                  </button>
                  <button
                    onClick={() => setAssociateIndex((prev) => (prev === associates.length - 1 ? 0 : prev + 1))}
                    className="w-9 h-9 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 flex items-center justify-center hover:bg-amber-500 hover:text-white transition-colors"
                  >
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Postdoctoral Fellows */}
        <section className="space-y-6">
          <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
            <h2 className="font-outfit font-extrabold text-2xl text-slate-900 dark:text-white flex items-center gap-2">
              <span>Postdoctoral Fellows</span>
              <span className="text-amber-500 font-normal">|</span>
            </h2>
            <span className="text-xs text-slate-500 font-semibold">01 / 02</span>
          </div>

          <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xl flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-64 h-64 rounded-2xl overflow-hidden shadow border border-slate-100 shrink-0">
              {/* eslint-disable-next-html-for-img */}
              <img
                src={postdocs[postdocIndex].photo}
                alt={postdocs[postdocIndex].name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-4 text-left flex-1">
              <div>
                <h3 className="font-outfit font-bold text-2xl text-slate-900 dark:text-white">{postdocs[postdocIndex].name}</h3>
                <span className="text-xs font-bold text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/50 px-2.5 py-0.5 rounded-md inline-block mt-1">
                  {postdocs[postdocIndex].role}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {postdocs[postdocIndex].bio}
              </p>
              <div className="flex items-center justify-between pt-2">
                <button
                  onClick={() => setSelectedMember(postdocs[postdocIndex])}
                  className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white text-xs font-bold hover:bg-slate-200 transition-colors"
                >
                  Read Bio
                </button>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setPostdocIndex((prev) => (prev === 0 ? postdocs.length - 1 : prev - 1))}
                    className="w-9 h-9 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 flex items-center justify-center hover:bg-amber-500 hover:text-white transition-colors"
                  >
                    <ArrowLeft size={16} />
                  </button>
                  <button
                    onClick={() => setPostdocIndex((prev) => (prev === postdocs.length - 1 ? 0 : prev + 1))}
                    className="w-9 h-9 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 flex items-center justify-center hover:bg-amber-500 hover:text-white transition-colors"
                  >
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Doctoral Scholars */}
        <section className="space-y-6">
          <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
            <h2 className="font-outfit font-extrabold text-2xl text-slate-900 dark:text-white flex items-center gap-2">
              <span>Doctoral Research Scholars</span>
              <span className="text-amber-500 font-normal">|</span>
            </h2>
            <span className="text-xs text-slate-500 font-semibold">01 / 02</span>
          </div>

          <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xl flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-64 h-64 rounded-2xl overflow-hidden shadow border border-slate-100 shrink-0">
              {/* eslint-disable-next-html-for-img */}
              <img
                src={doctoralScholars[scholarIndex].photo}
                alt={doctoralScholars[scholarIndex].name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-4 text-left flex-1">
              <div>
                <h3 className="font-outfit font-bold text-2xl text-slate-900 dark:text-white">{doctoralScholars[scholarIndex].name}</h3>
                <span className="text-xs font-bold text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/50 px-2.5 py-0.5 rounded-md inline-block mt-1">
                  {doctoralScholars[scholarIndex].role}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {doctoralScholars[scholarIndex].bio}
              </p>
              <div className="flex items-center justify-between pt-2">
                <button
                  onClick={() => setSelectedMember(doctoralScholars[scholarIndex])}
                  className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white text-xs font-bold hover:bg-slate-200 transition-colors"
                >
                  Read Bio
                </button>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setScholarIndex((prev) => (prev === 0 ? doctoralScholars.length - 1 : prev - 1))}
                    className="w-9 h-9 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 flex items-center justify-center hover:bg-amber-500 hover:text-white transition-colors"
                  >
                    <ArrowLeft size={16} />
                  </button>
                  <button
                    onClick={() => setScholarIndex((prev) => (prev === doctoralScholars.length - 1 ? 0 : prev + 1))}
                    className="w-9 h-9 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 flex items-center justify-center hover:bg-amber-500 hover:text-white transition-colors"
                  >
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Bottom Horizontal Team Member Carousel */}
      <div className="max-w-6xl mx-auto px-6 mt-24 space-y-6">
        <div className="text-center space-y-1">
          <h3 className="font-outfit font-extrabold text-2xl text-slate-900 dark:text-white">All Academic Members</h3>
          <p className="text-xs text-slate-500">Explore researchers, associate professors, and visiting scholars</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {allTeamMembers.slice(0, 5).map((m, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedMember(m)}
              className="group cursor-pointer p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-md hover:shadow-xl transition-all duration-300 text-center space-y-3 flex flex-col items-center justify-between"
            >
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-amber-400 shadow group-hover:scale-105 transition-transform">
                {/* eslint-disable-next-html-for-img */}
                <img src={m.photo} alt={m.name} className="w-full h-full object-cover" />
              </div>

              <div>
                <h4 className="font-outfit font-bold text-sm text-slate-900 dark:text-white group-hover:text-amber-600 transition-colors">{m.name}</h4>
                <span className="text-[10px] font-bold text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/40 px-2 py-0.5 rounded inline-block mt-1">
                  {m.role || m.designation}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Member Detail Modal */}
      {selectedMember && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4" onClick={() => setSelectedMember(null)}>
          <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 max-w-lg w-full space-y-6" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-amber-400 shrink-0">
                  {/* eslint-disable-next-html-for-img */}
                  <img src={selectedMember.photo} alt={selectedMember.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="font-outfit font-bold text-xl text-slate-900 dark:text-white">{selectedMember.name}</h3>
                  <p className="text-xs font-bold text-amber-600 dark:text-amber-400">{selectedMember.role || selectedMember.designation}</p>
                </div>
              </div>
              <button onClick={() => setSelectedMember(null)} className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-900">
                <X size={18} />
              </button>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 space-y-2 text-xs">
              <p className="text-slate-700 dark:text-slate-300"><strong className="text-slate-900 dark:text-white">Email:</strong> {selectedMember.email}</p>
            </div>

            <div className="space-y-2">
              <h4 className="font-outfit font-bold text-sm text-amber-600 dark:text-amber-400">Biography & Academic Background</h4>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">{selectedMember.bio}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
