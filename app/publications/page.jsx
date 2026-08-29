'use client';
import React, { useState, useEffect } from 'react';
import { FileText, Search, X, Copy, ExternalLink, Check, BookOpen } from 'lucide-react';
import { DEFAULT_PUBLICATIONS, getStoredData } from '../../lib/data';
import { useToast } from '../../components/Toast';

export default function PublicationsPage() {
  const { showToast } = useToast();
  const [publications, setPublications] = useState([]);
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedId, setCopiedId] = useState(null);

  useEffect(() => {
    setPublications(getStoredData('publications', DEFAULT_PUBLICATIONS));
  }, []);

  const categories = ['All', 'Journals', 'Conferences', 'Books'];

  const filteredPubs = publications.filter((pub) => {
    const matchesCategory = activeCategory === 'All' || pub.category === activeCategory;
    const matchesSearch = 
      pub.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pub.authors.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pub.journal.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const copyCitation = (pub) => {
    const text = `${pub.authors} (${pub.year}). "${pub.title}." ${pub.journal}. ${pub.doi}`;
    navigator.clipboard.writeText(text);
    setCopiedId(pub.id);
    showToast('APA Citation copied to clipboard!', 'success');
    setTimeout(() => setCopiedId(null), 2500);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pb-20">
      {/* Top Hero Section */}
      <div className="relative pt-16 pb-12 overflow-hidden text-center max-w-5xl mx-auto px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[280px] bg-gradient-to-b from-amber-200/40 via-amber-100/20 to-transparent blur-3xl -z-10 rounded-full pointer-events-none" />

        <span className="text-[11px] font-extrabold tracking-widest text-amber-700 uppercase bg-amber-100 px-3.5 py-1 rounded-full border border-amber-300">
          SENAN EDUCATION LAB SCHOLARLY OUTPUT
        </span>

        <h1 className="font-outfit text-5xl sm:text-6xl font-black text-slate-900 tracking-tight mt-4 uppercase">
          PUBLICATIONS
        </h1>

        <p className="text-slate-600 text-xs sm:text-sm max-w-2xl mx-auto mt-3 leading-relaxed">
          Explore our publications showcasing research, insights, and innovations that advance education, sustainability, and inclusive learning practices.
        </p>
      </div>

      {/* Main Container */}
      <div className="max-w-5xl mx-auto px-6 space-y-8">
        <div className="text-left border-b border-slate-200 pb-4">
          <h2 className="font-outfit font-extrabold text-2xl text-slate-900">Publications</h2>
          <p className="text-xs text-slate-500 mt-1">
            Discover our curated collection of academic publications that reflect innovative research and impactful findings.
          </p>
        </div>

        {/* Control Bar */}
        <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-md flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeCategory === cat
                    ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/25 border border-amber-400'
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
              placeholder="Search papers or authors..."
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

        {/* List */}
        <div className="space-y-4">
          {filteredPubs.map((pub) => (
            <div
              key={pub.id}
              className="p-6 rounded-2xl bg-white border border-slate-200 shadow-md hover:shadow-lg transition-all flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
            >
              <div className="flex items-start gap-4">
                <div className="text-center min-w-[70px] p-2.5 rounded-xl bg-amber-50 border border-amber-200 shrink-0">
                  <span className="font-outfit font-black text-xl text-amber-700 block">{pub.year}</span>
                  <span className="text-[10px] font-bold text-amber-800 uppercase block">{pub.category}</span>
                </div>
                <div className="space-y-1 text-left">
                  <h3 className="font-outfit font-bold text-base sm:text-lg text-slate-900 leading-snug">{pub.title}</h3>
                  <p className="text-xs text-slate-600 font-medium">{pub.authors}</p>
                  <p className="text-xs text-slate-500 italic">{pub.journal}</p>
                </div>
              </div>

              <div className="flex items-center gap-2 shrink-0 self-end md:self-center">
                <button
                  onClick={() => copyCitation(pub)}
                  className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-200 text-xs font-bold text-slate-800 transition-colors"
                >
                  {copiedId === pub.id ? <Check size={14} className="text-emerald-600" /> : <Copy size={14} />}
                  <span>{copiedId === pub.id ? 'Copied' : 'Cite APA'}</span>
                </button>

                <a
                  href={pub.doi}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-amber-500 hover:bg-amber-600 text-xs font-bold text-slate-950 shadow-md shadow-amber-500/20 transition-all"
                >
                  <span>DOI</span>
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {filteredPubs.length === 0 && (
          <div className="text-center p-12 rounded-2xl bg-white border border-slate-200 shadow-md">
            <p className="text-sm text-slate-500">No publications found matching your search.</p>
          </div>
        )}
      </div>
    </div>
  );
}
