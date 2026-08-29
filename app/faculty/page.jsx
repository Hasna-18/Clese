'use client';
import React from 'react';
import { UserCheck, Mail, Award, BookOpen, GraduationCap, Sparkles } from 'lucide-react';

export default function FacultyPage() {
  const facultyMembers = [
    {
      name: "Dr. Divya C. Senan",
      photo: "https://upload.wikimedia.org/wikipedia/commons/5/5f/University_of_Kerala.jpg",
      designation: "Honorary Director, CLESE & Associate Professor",
      department: "Department of Education, University of Kerala",
      qualification: "Ph.D. Education (Univ of Kerala), Postdoc (Univ of Alabama in Huntsville, USA)",
      specialization: "Learning Engineering, STEM Education, Energy & Climate Literacy, Educational Policy",
      contact: "divyasenan@keralauniversity.ac.in",
      bio: "Associate Professor at Department of Education and Honorary Director of CLESE. Served as Visiting Professor at University of Southampton, UK. Fulbright-Nehru & UGC-Raman Fellow with 18+ years academic leadership.",
      honors: ["Fulbright-Nehru Postdoctoral Fellow (USA)", "UGC-Raman Fellow", "Best Teacher Educator Award (NCTE, MHRD)"]
    },
    {
      name: "Ms. Greeshma Raveendran",
      photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600",
      designation: "Extended Learning Course Developer & Research Fellow",
      department: "CLESE & Department of Education",
      qualification: "M.Ed, M.A. English Literature",
      specialization: "Technology-Enabled Pedagogy, FYUGP Extended Learning, Literary Terms Course Development",
      contact: "lenseedu24@gmail.com",
      bio: "Developed the two-month course on Selected Literary Terms for FYUGP Semester II learners under University of Kerala, combining interactive video lessons, quizzes, and self-directed assessments under Dr. Divya C. Senan's guidance.",
      honors: ["FYUGP Course Development Award", "CLESE Technology-Enabled Pedagogy Fellow"]
    },
    {
      name: "Prof. Jan De Waters",
      photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=600",
      designation: "Honorary International Visiting Scholar",
      department: "STEM Centre, Clarkson University, USA",
      qualification: "Ph.D. Energy Education & Engineering",
      specialization: "International STEM Collaboration, Energy Literacy Metrics, Clean Tech Pedagogy",
      contact: "jwaters@clarkson.edu",
      bio: "Directs international academic engagement between Clarkson University USA and CLESE University of Kerala. Chief Guest at the 4th SIET International Conference on STEAM Education.",
      honors: ["Chief Guest 4th SIET Conference 2025", "Clarkson STEM Leadership Award"]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 transition-colors duration-300 pb-20">
      
      {/* Banner */}
      <div className="relative pt-16 pb-12 overflow-hidden text-center max-w-5xl mx-auto px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-b from-amber-300/30 via-amber-100/20 to-transparent blur-3xl -z-10 rounded-full pointer-events-none" />

        <span className="text-[11px] font-extrabold tracking-widest text-amber-700 dark:text-amber-400 uppercase bg-amber-100 dark:bg-amber-900/40 px-3.5 py-1 rounded-full border border-amber-300 dark:border-amber-700">
          SECTION 5 • DEDICATED FACULTY MANAGEMENT SYSTEM
        </span>

        <h1 className="font-outfit text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white tracking-tight mt-4">
          Faculty Profiles & Leadership
        </h1>

        <p className="text-slate-600 dark:text-slate-300 text-sm max-w-2xl mx-auto mt-3 leading-relaxed">
          Dynamic faculty profiles capturing designations, academic qualifications, areas of specialization, professional bios, and direct institutional contacts.
        </p>
      </div>

      {/* Faculty Cards */}
      <div className="max-w-5xl mx-auto px-6 space-y-8">
        {facultyMembers.map((fac, idx) => (
          <div key={idx} className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xl flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-56 h-56 rounded-2xl overflow-hidden shadow border border-slate-100 shrink-0">
              {/* eslint-disable-next-html-for-img */}
              <img src={fac.photo} alt={fac.name} className="w-full h-full object-cover" />
            </div>

            <div className="space-y-3 text-left flex-1">
              <div>
                <h2 className="font-outfit font-extrabold text-2xl text-slate-900 dark:text-white">{fac.name}</h2>
                <span className="text-xs font-bold text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/50 px-2.5 py-0.5 rounded-md inline-block mt-1">
                  {fac.designation}
                </span>
              </div>

              <div className="space-y-1 text-xs text-slate-600 dark:text-slate-300">
                <p><strong>Department:</strong> {fac.department}</p>
                <p><strong>Qualification:</strong> {fac.qualification}</p>
                <p><strong>Specialization:</strong> {fac.specialization}</p>
              </div>

              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed bg-slate-50 dark:bg-slate-800/40 p-3 rounded-xl">
                {fac.bio}
              </p>

              <div className="flex items-center justify-between pt-2">
                <a
                  href={`mailto:${fac.contact}`}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs shadow transition-all"
                >
                  <Mail size={14} />
                  <span>{fac.contact}</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
