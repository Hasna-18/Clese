'use client';
import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Globe, Calendar, MapPin, Users, Sparkles, CheckCircle2, Mail } from 'lucide-react';
import { DEFAULT_OUTREACH, getStoredData } from '../../lib/data';

export default function OutreachPage() {
  const [outreachItems] = useState(getStoredData('outreach', DEFAULT_OUTREACH));
  const [sliderIndex, setSliderIndex] = useState(0);

  const eventsList = [
    {
      title: "National Conference on Learning Engineering & Climate Literacy",
      date: "October 14-16, 2026",
      location: "Senate Hall, University of Kerala, Thiruvananthapuram",
      desc: "Bringing international researchers, policy makers, and educators together to establish NEP 2020 energy education benchmarks."
    },
    {
      title: "Mobile STEM Van Rural School Workshop Series",
      date: "September 05-20, 2026",
      location: "44+ Schools in Wayanad & Idukki Districts",
      desc: "Hands-on robotics, solar power kits, and digital optics experiments delivered directly to rural secondary school students."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pb-20 transition-colors duration-300">
      {/* Top Ambient Glow & Hero Section */}
      <div className="relative pt-16 pb-12 overflow-hidden text-center max-w-5xl mx-auto px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-b from-amber-300/30 via-amber-100/20 to-transparent blur-3xl -z-10 rounded-full pointer-events-none" />

        <span className="text-[11px] font-extrabold tracking-widest text-amber-700 uppercase bg-amber-100 px-3.5 py-1 rounded-full border border-amber-300">
          FIELD INITIATIVES & EVENT MANAGEMENT
        </span>

        <h1 className="font-outfit text-5xl sm:text-6xl lg:text-7xl font-black text-slate-900 tracking-tight mt-4">
          OUTREACH
        </h1>

        <p className="text-slate-600 text-xs sm:text-sm max-w-xl mx-auto mt-3 leading-relaxed">
          Connecting academic research to rural schools, community energy literacy, and national teacher capacity building bootcamps.
        </p>
      </div>

      {/* Featured Outreach Spotlight Card (Academy Page Style) */}
      <div className="max-w-4xl mx-auto px-6 mb-20">
        <div className="relative p-6 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-2xl shadow-slate-200/60 flex flex-col md:flex-row items-center gap-8">
          <div className="relative w-full md:w-72 h-72 rounded-2xl overflow-hidden shadow-lg border border-slate-100 shrink-0">
            {/* eslint-disable-next-html-for-img */}
            <img
              src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800"
              alt="CLESE Mobile STEM Van"
              className="w-full h-full object-cover"
            />
            <span className="absolute bottom-3 left-3 bg-amber-400 text-slate-950 text-[10px] font-extrabold px-3 py-1 rounded-md uppercase tracking-wider shadow">
              FLAGSHIP OUTREACH
            </span>
          </div>

          <div className="space-y-4 text-left">
            <div>
              <h2 className="font-outfit font-extrabold text-3xl text-slate-900">Mobile Experiential STEM Van Fleet</h2>
              <span className="text-xs font-bold text-amber-600 bg-amber-50 px-2.5 py-0.5 rounded-md inline-block mt-1">
                44+ Rural Schools • 1,200+ Students Reached
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Equipped with solar power micro-grid demo models, robotics workbench kits, micro-controller coding tools, and optics packages delivered straight to rural classrooms.
            </p>

            <div className="grid grid-cols-2 gap-4 py-3 border-y border-slate-100 text-center">
              <div>
                <span className="font-outfit font-black text-xl text-slate-900 block">44+</span>
                <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block">Schools Visited</span>
              </div>
              <div>
                <span className="font-outfit font-black text-xl text-slate-900 block">1,200+</span>
                <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block">Student Beneficiaries</span>
              </div>
            </div>

            <a
              href="mailto:clese@keralauniversity.ac.in"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs shadow-lg shadow-amber-500/25 transition-all hover:scale-105"
            >
              <Mail size={14} />
              <span>Request School Visit</span>
            </a>
          </div>
        </div>
      </div>

      {/* Events Portal Section (PDF Spec Section 6) */}
      <div className="max-w-4xl mx-auto px-6 space-y-16">
        <section className="space-y-6">
          <div className="flex items-center justify-between border-b border-slate-200 pb-3">
            <h2 className="font-outfit font-extrabold text-2xl text-slate-900 flex items-center gap-2">
              <span>Event Management Portal</span>
              <span className="text-amber-500 font-normal">|</span>
            </h2>
            <span className="text-xs text-slate-500 font-semibold">
              0{sliderIndex + 1} / 0{eventsList.length}
            </span>
          </div>

          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-xl flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-64 h-64 rounded-2xl overflow-hidden shadow border border-slate-100 shrink-0">
              {/* eslint-disable-next-html-for-img */}
              <img
                src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=800"
                alt={eventsList[sliderIndex].title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-4 text-left flex-1">
              <div>
                <h3 className="font-outfit font-bold text-2xl text-slate-900">{eventsList[sliderIndex].title}</h3>
                <span className="text-xs font-bold text-amber-600 bg-amber-50 px-2.5 py-0.5 rounded-md inline-block mt-1">
                  {eventsList[sliderIndex].date}
                </span>
              </div>
              <p className="text-xs text-slate-500 flex items-center gap-1 font-semibold">
                <MapPin size={14} className="text-amber-600" /> {eventsList[sliderIndex].location}
              </p>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {eventsList[sliderIndex].desc}
              </p>
              <div className="flex items-center justify-end gap-2 pt-2">
                <button
                  onClick={() => setSliderIndex((prev) => (prev === 0 ? eventsList.length - 1 : prev - 1))}
                  className="w-9 h-9 rounded-full bg-slate-100 text-slate-800 flex items-center justify-center hover:bg-amber-500 hover:text-slate-950 transition-colors"
                >
                  <ArrowLeft size={16} />
                </button>
                <button
                  onClick={() => setSliderIndex((prev) => (prev === eventsList.length - 1 ? 0 : prev + 1))}
                  className="w-9 h-9 rounded-full bg-slate-100 text-slate-800 flex items-center justify-center hover:bg-amber-500 hover:text-slate-950 transition-colors"
                >
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
