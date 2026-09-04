'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { 
  Calendar, 
  Layers, 
  Settings, 
  Plus, 
  LogOut, 
  ExternalLink, 
  ShieldCheck, 
  Database, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2,
  LayoutDashboard,
  FileText,
  Loader2
} from 'lucide-react';

export default function AdminDashboardPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [adminUser, setAdminUser] = useState('admin');
  const [eventsCount, setEventsCount] = useState(0);

  useEffect(() => {
    async function verifyAuthAndFetch() {
      try {
        const checkRes = await fetch('/api/admin/check');
        if (!checkRes.ok) {
          router.replace('/admin/login');
          return;
        }
        const data = await checkRes.json();
        if (data.user?.username) {
          setAdminUser(data.user.username);
        }

        // Fetch counts
        const eventsRes = await fetch('/api/events');
        if (eventsRes.ok) {
          const eventsData = await eventsRes.json();
          if (Array.isArray(eventsData)) {
            setEventsCount(eventsData.length);
          }
        }
      } catch (err) {
        console.error("Auth check failed", err);
        router.replace('/admin/login');
      } finally {
        setLoading(false);
      }
    }

    verifyAuthAndFetch();
  }, [router]);

  const handleLogout = async () => {
    try {
      await fetch('/api/admin/logout', { method: 'POST' });
    } catch (err) {
      console.error("Logout error", err);
    } finally {
      if (typeof window !== 'undefined') {
        localStorage.removeItem('lense_admin_user');
      }
      router.push('/admin/login');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center font-outfit">
        <div className="text-center space-y-3 bg-white p-8 rounded-2xl shadow-sm border border-slate-200/80">
          <Loader2 className="animate-spin text-[#2d5a3c] mx-auto" size={32} />
          <p className="text-slate-600 text-xs font-semibold tracking-wide">Loading Admin Console...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-outfit pb-24 relative overflow-hidden">
      
      {/* Background subtle ambiance */}
      <div className="absolute top-0 left-1/3 w-[600px] h-[350px] bg-emerald-100/50 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-emerald-100/40 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* TOP HEADER CONTROLLER */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-xl border-b border-slate-200/80 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex flex-wrap items-center justify-between gap-3">
          
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-emerald-50 border border-emerald-200/80 flex items-center justify-center text-[#2d5a3c] shadow-xs">
              <ShieldCheck size={20} />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-sm font-black tracking-wider uppercase text-slate-900">LEnSE Admin Hub</h1>
                <span className="text-[10px] bg-emerald-50 text-[#2d5a3c] font-bold px-2 py-0.5 rounded-full border border-emerald-200/80">
                  Signed in as {adminUser}
                </span>
              </div>
              <p className="text-[11px] text-slate-500 font-medium">University of Kerala Management Console</p>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <Link
              href="/admin/events"
              className="bg-[#2d5a3c] hover:bg-[#23462f] text-white font-extrabold text-xs px-4 py-2 rounded-xl flex items-center gap-1.5 shadow-xs transition-all active:scale-95"
            >
              <Calendar size={15} />
              <span>Manage Events</span>
            </Link>

            <Link
              href="/events"
              target="_blank"
              className="px-3.5 py-2 bg-white hover:bg-slate-50 text-slate-700 hover:text-slate-900 font-bold text-xs rounded-xl flex items-center gap-1.5 border border-slate-200 shadow-xs transition-colors"
            >
              <ExternalLink size={14} />
              <span className="hidden sm:inline">Public View</span>
            </Link>

            <button
              onClick={handleLogout}
              className="px-3.5 py-2 bg-rose-50 hover:bg-rose-100 text-rose-700 font-bold text-xs rounded-xl flex items-center gap-1.5 border border-rose-200 transition-colors"
              title="Sign out of Admin"
            >
              <LogOut size={14} />
              <span>Logout</span>
            </button>
          </div>

        </div>
      </header>

      {/* MAIN HUB CONTENT */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-8">
        
        {/* Welcome Banner */}
        <div className="bg-gradient-to-br from-[#2d5a3c] via-[#23462f] to-[#173020] text-white rounded-3xl p-6 sm:p-10 shadow-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-emerald-100 text-xs font-bold uppercase tracking-wider mb-4">
              <Sparkles size={13} />
              <span>Central Admin Dashboard</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight">
              Welcome back, <span className="text-[#a2d45e]">{adminUser}</span>.
            </h2>
            <p className="text-emerald-100/90 text-sm sm:text-base mt-3 leading-relaxed">
              From this secure panel, you can add, edit, and delete events directly on the live site, upload media from your device, update featured STEM initiatives, and modify stats and hero banners in real-time.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Link
                href="/admin/events"
                className="px-5 py-3 rounded-xl bg-white hover:bg-emerald-50 text-[#2d5a3c] text-xs font-black flex items-center gap-2 shadow-md transition-all active:scale-95"
              >
                <Plus size={16} strokeWidth={3} />
                <span>Add / Edit Events Now</span>
                <ArrowRight size={14} />
              </Link>

              <Link
                href="/events"
                target="_blank"
                className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold flex items-center gap-2 border border-white/25 transition-all"
              >
                <span>Preview Public Events Page</span>
                <ExternalLink size={14} />
              </Link>
            </div>
          </div>
        </div>

        {/* Status Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-white border border-slate-200/80 rounded-2xl p-5 flex items-center gap-4 shadow-xs">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200/80 flex items-center justify-center text-[#2d5a3c] shrink-0">
              <Calendar size={22} />
            </div>
            <div>
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">Live Published Events</span>
              <span className="text-2xl font-black text-slate-900">{eventsCount} Events</span>
            </div>
          </div>

          <div className="bg-white border border-slate-200/80 rounded-2xl p-5 flex items-center gap-4 shadow-xs">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200/80 flex items-center justify-center text-[#2d5a3c] shrink-0">
              <Database size={22} />
            </div>
            <div>
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">Database Status</span>
              <div className="flex items-center gap-1.5 mt-0.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-sm font-black text-slate-900">PostgreSQL Connected</span>
              </div>
            </div>
          </div>

          <div className="bg-white border border-slate-200/80 rounded-2xl p-5 flex items-center gap-4 shadow-xs">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200/80 flex items-center justify-center text-[#2d5a3c] shrink-0">
              <ShieldCheck size={22} />
            </div>
            <div>
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">Admin Security</span>
              <span className="text-sm font-black text-emerald-700">Active HTTP-Only Session</span>
            </div>
          </div>
        </div>

        {/* Modules Grid */}
        <div>
          <h3 className="text-sm font-black uppercase tracking-wider text-slate-500 mb-4 flex items-center gap-2">
            <LayoutDashboard size={18} className="text-[#2d5a3c]" />
            <span>Admin Management Modules</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Card 1: Events Management */}
            <div className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-8 flex flex-col justify-between hover:border-[#2d5a3c]/50 hover:shadow-md transition-all group shadow-xs">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200/80 flex items-center justify-center text-[#2d5a3c] group-hover:scale-105 transition-transform">
                    <Calendar size={24} />
                  </div>
                  <span className="text-[11px] font-bold uppercase px-2.5 py-1 rounded-full bg-emerald-50 text-[#2d5a3c] border border-emerald-200/80">
                    Live Timeline
                  </span>
                </div>
                <h4 className="text-xl font-black text-slate-900 mb-2 group-hover:text-[#2d5a3c] transition-colors">
                  Events & Conferences
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  Add new conferences, workshops, lectures, courses, and STEM camps directly to PostgreSQL. Upload poster images from your device, inline editing, and deep details management.
                </p>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <Link
                  href="/admin/events"
                  className="flex-1 py-3 rounded-xl bg-[#2d5a3c] hover:bg-[#23462f] text-white text-xs font-black text-center flex items-center justify-center gap-2 shadow-xs transition-all active:scale-98"
                >
                  <span>Open Events Manager</span>
                  <ArrowRight size={14} />
                </Link>
                <Link
                  href="/events"
                  target="_blank"
                  className="p-3 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-600 hover:text-slate-900 border border-slate-200 transition-colors"
                  title="View Public Events"
                >
                  <ExternalLink size={16} />
                </Link>
              </div>
            </div>

            {/* Card 2: Featured Initiatives & Sidebar Settings */}
            <div className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-8 flex flex-col justify-between hover:border-[#2d5a3c]/50 hover:shadow-md transition-all group shadow-xs">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200/80 flex items-center justify-center text-[#2d5a3c] group-hover:scale-105 transition-transform">
                    <Layers size={24} />
                  </div>
                  <span className="text-[11px] font-bold uppercase px-2.5 py-1 rounded-full bg-emerald-50 text-[#2d5a3c] border border-emerald-200/80">
                    Carousel & Stats
                  </span>
                </div>
                <h4 className="text-xl font-black text-slate-900 mb-2 group-hover:text-[#2d5a3c] transition-colors">
                  Initiatives & Page Settings
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  Manage the auto-scrolling Featured Initiatives carousel, upload initiative photos from device, update student/school impact statistics, and edit the events hero banner subtitle and tag.
                </p>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <Link
                  href="/admin/events"
                  className="flex-1 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200 text-xs font-black text-center flex items-center justify-center gap-2 transition-all"
                >
                  <span>Edit Initiatives & Stats</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* Card 3: News & Resources */}
            <div className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-8 flex flex-col justify-between hover:border-[#2d5a3c]/50 hover:shadow-md transition-all group shadow-xs md:col-span-2 lg:col-span-1">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200/80 flex items-center justify-center text-[#2d5a3c] group-hover:scale-105 transition-transform">
                    <FileText size={24} />
                  </div>
                  <span className="text-[11px] font-bold uppercase px-2.5 py-1 rounded-full bg-emerald-50 text-[#2d5a3c] border border-emerald-200/80">
                    Publications
                  </span>
                </div>
                <h4 className="text-xl font-black text-slate-900 mb-2 group-hover:text-[#2d5a3c] transition-colors">
                  News & Resources
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  Manage the latest university news, research articles, and educational resources for public download. Upload cover images directly from your device.
                </p>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <Link
                  href="/admin/news"
                  className="flex-1 py-3 rounded-xl bg-[#2d5a3c] hover:bg-[#23462f] text-white text-xs font-black text-center flex items-center justify-center gap-2 shadow-xs transition-all active:scale-98"
                >
                  <span>Open News & Resources</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>

          </div>
        </div>

      </main>

    </div>
  );
}
