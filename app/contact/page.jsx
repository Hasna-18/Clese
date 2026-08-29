'use client';
import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send, CheckCircle2, Sparkles, Building2 } from 'lucide-react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 transition-colors duration-300 pb-20">
      
      {/* Header */}
      <div className="relative pt-16 pb-12 overflow-hidden text-center max-w-5xl mx-auto px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-b from-amber-300/30 via-amber-100/20 to-transparent blur-3xl -z-10 rounded-full pointer-events-none" />

        <span className="text-[11px] font-extrabold tracking-widest text-amber-700 dark:text-amber-400 uppercase bg-amber-100 dark:bg-amber-900/40 px-3.5 py-1 rounded-full border border-amber-300 dark:border-amber-700">
          SECTION 10 • INSTITUTIONAL CONTACT
        </span>

        <h1 className="font-outfit text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white tracking-tight mt-4">
          Contact & Location
        </h1>

        <p className="text-slate-600 dark:text-slate-300 text-sm max-w-2xl mx-auto mt-3 leading-relaxed">
          Official contact information for the Centre for Learning Engineering and Sustainability Education (CLESE / LEnSE).
        </p>
      </div>

      <div className="max-w-5xl mx-auto px-6 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Contact Details Card (Direct from PDF 2) */}
          <div className="md:col-span-5 p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xl space-y-6">
            <div>
              <h2 className="font-outfit font-extrabold text-2xl text-slate-900 dark:text-white">Director Office</h2>
              <span className="text-xs font-semibold text-amber-600 dark:text-amber-400">Dr. Divya C Senan</span>
            </div>

            <div className="space-y-4 text-xs text-slate-600 dark:text-slate-300">
              <div className="flex items-start gap-3">
                <Building2 size={18} className="text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-slate-900 dark:text-white">Centre Name:</strong>
                  <span>Centre for Learning Engineering and Sustainability Education (CLESE / LEnSE)</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-slate-900 dark:text-white">Campus Location:</strong>
                  <span>University of Kerala, Kariavattom Campus, Thiruvananthapuram-695581, Kerala, India</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail size={18} className="text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-slate-900 dark:text-white">Official Email:</strong>
                  <a href="mailto:lenseedu24@gmail.com" className="text-amber-600 dark:text-amber-400 underline font-bold">
                    lenseedu24@gmail.com
                  </a>
                  <span className="block text-[11px] text-slate-400">divyasenan@keralauniversity.ac.in</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:col-span-7 p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xl space-y-4">
            <h2 className="font-outfit font-extrabold text-2xl text-slate-900 dark:text-white">Send Inquiry / Academic Message</h2>
            <p className="text-xs text-slate-500">Reach out for STEM workshop collaborations, school camps, or Ph.D mentorship.</p>

            {submitted && (
              <div className="p-4 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-700 dark:text-emerald-300 text-xs font-bold flex items-center gap-2">
                <CheckCircle2 size={16} />
                <span>Message submitted successfully to CLESE Secretariat.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Your Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 outline-none focus:border-amber-500"
                  />
                </div>
                <div>
                  <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              <div>
                <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Subject</label>
                <input
                  type="text"
                  placeholder="e.g. Collaboration on STEM Camps"
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  className="w-full p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 outline-none focus:border-amber-500"
                />
              </div>

              <div>
                <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Message *</label>
                <textarea
                  rows={4}
                  required
                  placeholder="Write your message here..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 outline-none focus:border-amber-500 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-extrabold text-xs shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <Send size={15} />
                <span>Submit Inquiry</span>
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}
