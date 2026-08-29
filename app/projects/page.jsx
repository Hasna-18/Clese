'use client';
import React, { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight, FlaskConical, Search, X, Award, CheckCircle2, ChevronRight, Mail, Sparkles } from 'lucide-react';
import { DEFAULT_PROJECTS, getStoredData } from '../../lib/data';

export default function ProjectsPage() {
  const [projects, setProjects] = useState([]);
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProject, setSelectedProject] = useState(null);
  const [sliderIndex, setSliderIndex] = useState(0);

  useEffect(() => {
    setProjects(getStoredData('projects', DEFAULT_PROJECTS));
  }, []);

  const categories = ['All', 'Running Projects', 'Closed Projects', 'Consultancy', 'Sustainability'];

  const filteredProjects = projects.filter((proj) => {
    const matchesCategory = activeCategory === 'All' || proj.status === activeCategory || proj.category === activeCategory;
    const matchesSearch = 
      proj.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.funder.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.lead.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredProject = projects[0] || {
    title: "Global Energy Literacy & Sustainable Pedagogy Initiative",
    funder: "Fulbright-Nehru & NSF Collaborative Grant",
    budget: "₹1.8 Crores ($220,000 USD)",
    lead: "Dr. Divya C. Senan (Principal Investigator)",
    status: "Running Projects",
    category: "Sustainability",
    image: "https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&q=80&w=800",
    description: "Developing climate-conscious learning modules, solar energy simulation kits, and interdisciplinary energy literacy benchmarks for 40+ institutions."
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pb-20 transition-colors duration-300">
      {/* Top Ambient Glow & Hero Section */}
      <div className="relative pt-16 pb-12 overflow-hidden text-center max-w-5xl mx-auto px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-b from-amber-300/30 via-amber-100/20 to-transparent blur-3xl -z-10 rounded-full pointer-events-none" />

        <span className="text-[11px] font-extrabold tracking-widest text-amber-700 uppercase bg-amber-100 px-3.5 py-1 rounded-full border border-amber-300">
          CLESE GRANTS & FUNDED RESEARCH
        </span>

        <h1 className="font-outfit text-5xl sm:text-6xl lg:text-7xl font-black text-slate-900 tracking-tight mt-4">
          RESEARCH
        </h1>

        <p className="text-slate-600 text-xs sm:text-sm max-w-xl mx-auto mt-3 leading-relaxed">
          Multidisciplinary grant-funded research projects advancing learning engineering, renewable energy education, and rural STEM outreach.
        </p>
      </div>

      {/* Featured Grant Spotlight Card (Academy Page Style) */}
      <div className="max-w-4xl mx-auto px-6 mb-20">
        <div className="relative p-6 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-2xl shadow-slate-200/60 flex flex-col md:flex-row items-center gap-8">
          <div className="relative w-full md:w-72 h-72 rounded-2xl overflow-hidden shadow-lg border border-slate-100 shrink-0">
            {/* eslint-disable-next-html-for-img */}
            <img
              src={featuredProject.image}
              alt={featuredProject.title}
              className="w-full h-full object-cover"
            />
            <span className="absolute bottom-3 left-3 bg-amber-400 text-slate-950 text-[10px] font-extrabold px-3 py-1 rounded-md uppercase tracking-wider shadow">
              FLAGSHIP GRANT
            </span>
          </div>

          <div className="space-y-4 text-left">
            <div>
              <h2 className="font-outfit font-extrabold text-3xl text-slate-900">{featuredProject.title}</h2>
              <span className="text-xs font-bold text-amber-600 bg-amber-50 px-2.5 py-0.5 rounded-md inline-block mt-1">
                {featuredProject.budget} • {featuredProject.funder}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {featuredProject.description}
            </p>

            <div className="grid grid-cols-2 gap-4 py-3 border-y border-slate-100 text-center">
              <div>
                <span className="font-outfit font-black text-xl text-slate-900 block">40+</span>
                <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block">Institutions Reached</span>
              </div>
              <div>
                <span className="font-outfit font-black text-xl text-slate-900 block">₹1.8Cr</span>
                <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block">Total Funding</span>
              </div>
            </div>

            <button
              onClick={() => setSelectedProject(featuredProject)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs shadow-lg shadow-amber-500/25 transition-all hover:scale-105"
            >
              <FlaskConical size={14} />
              <span>Project Details</span>
            </button>
          </div>
        </div>
      </div>

      {/* Categorized Showcase Section with Slider Controls */}
      <div className="max-w-4xl mx-auto px-6 space-y-16">
        <section className="space-y-6">
          <div className="flex items-center justify-between border-b border-slate-200 pb-3">
            <h2 className="font-outfit font-extrabold text-2xl text-slate-900 flex items-center gap-2">
              <span>Funded Research Initiatives</span>
              <span className="text-amber-500 font-normal">|</span>
            </h2>
            <span className="text-xs text-slate-500 font-semibold">
              0{sliderIndex + 1} / 0{projects.length || 1}
            </span>
          </div>

          {projects.length > 0 && (
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-xl flex flex-col md:flex-row items-center gap-8">
              <div className="w-full md:w-64 h-64 rounded-2xl overflow-hidden shadow border border-slate-100 shrink-0">
                {/* eslint-disable-next-html-for-img */}
                <img
                  src={projects[sliderIndex].image}
                  alt={projects[sliderIndex].title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-4 text-left flex-1">
                <div>
                  <h3 className="font-outfit font-bold text-2xl text-slate-900">{projects[sliderIndex].title}</h3>
                  <span className="text-xs font-bold text-amber-600 bg-amber-50 px-2.5 py-0.5 rounded-md inline-block mt-1">
                    {projects[sliderIndex].budget} — {projects[sliderIndex].funder}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {projects[sliderIndex].description}
                </p>
                <div className="flex items-center justify-between pt-2">
                  <button
                    onClick={() => setSelectedProject(projects[sliderIndex])}
                    className="px-4 py-2 rounded-xl bg-slate-100 text-slate-900 text-xs font-bold hover:bg-slate-200 transition-colors"
                  >
                    View Project Info
                  </button>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setSliderIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1))}
                      className="w-9 h-9 rounded-full bg-slate-100 text-slate-800 flex items-center justify-center hover:bg-amber-500 hover:text-slate-950 transition-colors"
                    >
                      <ArrowLeft size={16} />
                    </button>
                    <button
                      onClick={() => setSliderIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1))}
                      className="w-9 h-9 rounded-full bg-slate-100 text-slate-800 flex items-center justify-center hover:bg-amber-500 hover:text-slate-950 transition-colors"
                    >
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </section>
      </div>

      {/* Bottom Grid & Controls */}
      <div className="max-w-6xl mx-auto px-6 mt-20 space-y-8">
        <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-md flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeCategory === cat
                    ? 'bg-amber-500 text-slate-950 shadow-md border border-amber-400'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-72">
            <Search size={16} className="absolute left-3.5 top-3 text-slate-400" />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-9 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs placeholder-slate-400 focus:outline-none focus:border-amber-500"
            />
            {searchQuery && (
              <button onClick={() => setSearchQuery('')} className="absolute right-3 top-3 text-slate-400 hover:text-slate-700">
                <X size={14} />
              </button>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((proj) => (
            <div
              key={proj.id}
              onClick={() => setSelectedProject(proj)}
              className="group cursor-pointer p-6 rounded-3xl bg-white border border-slate-200 shadow-lg hover:shadow-xl transition-all space-y-4 text-left"
            >
              <div className="relative h-48 rounded-2xl overflow-hidden border border-slate-100">
                {/* eslint-disable-next-html-for-img */}
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 right-3 px-3 py-1 rounded-full bg-slate-900/80 text-white text-[10px] font-bold">
                  {proj.category}
                </span>
                <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-amber-500 text-slate-950 text-[10px] font-extrabold shadow">
                  {proj.status}
                </span>
              </div>

              <div className="space-y-2">
                <span className="text-xs font-black text-amber-700 bg-amber-50 px-2.5 py-1 rounded-md inline-block">{proj.budget}</span>
                <h3 className="font-outfit font-bold text-lg text-slate-900 group-hover:text-amber-600 transition-colors">{proj.title}</h3>
                <p className="text-xs text-slate-500"><strong className="text-slate-700">Grant Body:</strong> {proj.funder}</p>
                <p className="text-xs text-slate-600 leading-relaxed line-clamp-3 pt-1">{proj.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-sm flex items-center justify-center p-4" onClick={() => setSelectedProject(null)}>
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 max-w-2xl w-full space-y-6 max-h-[90vh] overflow-y-auto shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold">
                {selectedProject.category}
              </span>
              <button onClick={() => setSelectedProject(null)} className="p-2 rounded-xl bg-slate-100 text-slate-600 hover:text-slate-900">
                <X size={18} />
              </button>
            </div>

            <h2 className="font-outfit font-extrabold text-2xl text-slate-900">{selectedProject.title}</h2>

            <div className="h-60 rounded-2xl overflow-hidden">
              {/* eslint-disable-next-html-for-img */}
              <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover" />
            </div>

            <div className="grid grid-cols-2 gap-4 p-4 rounded-2xl bg-slate-50 text-xs">
              <div>
                <span className="text-slate-500 block">Granting Agency</span>
                <span className="font-bold text-slate-900 block">{selectedProject.funder}</span>
              </div>
              <div>
                <span className="text-slate-500 block">Budget Amount</span>
                <span className="font-bold text-amber-700 block">{selectedProject.budget}</span>
              </div>
              <div>
                <span className="text-slate-500 block">Lead Researchers</span>
                <span className="font-bold text-slate-900 block">{selectedProject.lead}</span>
              </div>
              <div>
                <span className="text-slate-500 block">Project Status</span>
                <span className="font-bold text-amber-600 block">{selectedProject.status}</span>
              </div>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed">{selectedProject.description}</p>
          </div>
        </div>
      )}
    </div>
  );
}
