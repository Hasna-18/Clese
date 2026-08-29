'use client';
import React from 'react';
import { Newspaper, Calendar, ArrowRight, Tag, Sparkles } from 'lucide-react';

export default function NewsPage() {
  const newsItems = [
    {
      id: 1,
      title: "State-wide 'STEM 4 Girls' Camp Series Inaugurated by Finance Minister Sri. K. N. Balagopal",
      date: "August 2025",
      category: "ICSSR State Initiative",
      desc: "Supported by funding from the Indian Council for Social Science Research (ICSSR), New Delhi, CLESE launched STEM camps empowering young women from economically disadvantaged families in Kollam, Thiruvananthapuram, and Idukki districts."
    },
    {
      id: 2,
      title: "SIET & CLESE Collaborative Project Expands STEM Training to 44 Schools & 41 Districts",
      date: "July 2025",
      category: "School Outreach",
      desc: "Delivering hands-on activity kits, micro-controller coding tools, and robotics workbench equipment to gifted students across 44 schools and 41 educational districts of Kerala."
    },
    {
      id: 3,
      title: "4th SIET International Conference on STEAM Education Featuring Clarkson University Chief Guest",
      date: "March 2025",
      category: "International Conference",
      desc: "Inaugurated by Hon'ble Minister for Education Sri. V. Sivankutty with Prof. Jan De Waters of Clarkson University, USA as Chief Guest focusing on clean technology and learning engineering."
    },
    {
      id: 4,
      title: "FYUGP Semester II Extended Learning Course on 'Selected Literary Terms' Released",
      date: "January 2025",
      category: "Academic Courseware",
      desc: "Aligned with the Ability Enhancement Course under University of Kerala, developed by Ms. Greeshma Raveendran with guidance from Dr. Divya C. Senan."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 transition-colors duration-300 pb-20">
      
      {/* Header */}
      <div className="relative pt-16 pb-12 overflow-hidden text-center max-w-5xl mx-auto px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-b from-amber-300/30 via-amber-100/20 to-transparent blur-3xl -z-10 rounded-full pointer-events-none" />

        <span className="text-[11px] font-extrabold tracking-widest text-amber-700 dark:text-amber-400 uppercase bg-amber-100 dark:bg-amber-900/40 px-3.5 py-1 rounded-full border border-amber-300 dark:border-amber-700">
          SECTION 8 & 9 • NEWS, ANNOUNCEMENTS & ADVANCED SEO
        </span>

        <h1 className="font-outfit text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white tracking-tight mt-4">
          News & Announcements
        </h1>

        <p className="text-slate-600 dark:text-slate-300 text-sm max-w-2xl mx-auto mt-3 leading-relaxed">
          Latest institutional news, press releases, state level launch events, and academic updates published through the CLESE Administration System.
        </p>
      </div>

      <div className="max-w-5xl mx-auto px-6 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {newsItems.map((item) => (
            <div key={item.id} className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xl space-y-3 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded bg-amber-100 dark:bg-amber-900/40 text-amber-800 dark:text-amber-300 text-[10px] font-extrabold uppercase">
                    {item.category}
                  </span>
                  <span className="text-xs text-slate-400 font-semibold">{item.date}</span>
                </div>
                <h3 className="font-outfit font-extrabold text-lg text-slate-900 dark:text-white leading-snug">{item.title}</h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
