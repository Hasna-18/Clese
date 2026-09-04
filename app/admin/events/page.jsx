'use client';

import React, { useState, useEffect } from 'react';
import { 
  Search, 
  ArrowRight, 
  Users, 
  Building2, 
  MapPin, 
  Calendar, 
  LayoutGrid, 
  MonitorPlay, 
  MessageSquare, 
  GraduationCap, 
  Tent, 
  Mail, 
  Plus, 
  Edit3, 
  Trash2, 
  Settings, 
  X, 
  CheckCircle2, 
  AlertCircle, 
  Loader2, 
  ExternalLink, 
  RefreshCw, 
  Sparkles, 
  Save,
  ChevronLeft,
  ChevronRight,
  Layers
} from 'lucide-react';
import Link from 'next/link';

export default function AdminEventsPage() {
  const [filterCategory, setFilterCategory] = useState('All Events');
  const [searchQuery, setSearchQuery] = useState('');
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  // Settings & Initiatives
  const [currentInitiativeIndex, setCurrentInitiativeIndex] = useState(0);
  const [isCarouselPaused, setIsCarouselPaused] = useState(false);

  const [settings, setSettings] = useState({
    heroTag: 'EVENTS',
    heroTitle: 'Discover. Learn.\nConnect.',
    heroSubtitle: 'Explore our conferences, workshops, lectures, courses and STEM initiatives that inspire learning and create sustainable impact.',
    heroImage: '/events/e1.png',
    featuredInitiatives: [
      {
        id: "init-1",
        tag: "FEATURED INITIATIVE",
        title: "STEM 4 Girls",
        subtitle: "Creating opportunities.<br/>Inspiring futures.",
        imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600&auto=format&fit=crop",
        link: "#"
      },
      {
        id: "init-2",
        tag: "UPCOMING INITIATIVE",
        title: "Experiential STEM Labs",
        subtitle: "Interactive robotics & AI education across 44+ schools in Kerala.",
        imageUrl: "/events/e1.png",
        link: "#"
      },
      {
        id: "init-3",
        tag: "SPECIAL PROGRAMME",
        title: "Gifted Student STEM Camp",
        subtitle: "Empowering young innovators through hands-on science & technology.",
        imageUrl: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=600&auto=format&fit=crop",
        link: "#"
      }
    ],
    stat1Number: '56+',
    stat1Text: 'Gifted Students<br/>Supported',
    stat2Number: '44',
    stat2Text: 'Schools in<br/>Kerala',
    stat3Number: '41',
    stat3Text: 'Educational<br/>Districts',
    stat4Number: '6+',
    stat4Text: 'Programmes<br/>Organized',
    newsletterTitle: 'Stay Updated',
    newsletterText: 'Subscribe to our newsletter and never miss an update on our events and programmes.'
  });

  // Modal / Inline Add state
  const [showAddForm, setShowAddForm] = useState(false);
  const [showSettingsModal, setShowSettingsModal] = useState(false);
  const [showInitiativeModal, setShowInitiativeModal] = useState(false);
  const [editingEventId, setEditingEventId] = useState(null);
  const [editingInitiativeId, setEditingInitiativeId] = useState(null);
  const [saving, setSaving] = useState(false);
  const [toast, setToast] = useState({ show: false, type: '', message: '' });

  // Event Form State
  const [eventForm, setEventForm] = useState({
    title: '',
    subtitle: '',
    dateDay: '15',
    dateMonth: 'MAR',
    dateYear: '2025',
    category: 'CONFERENCE',
    imageUrl: '/events/e1.png',
    filterType: 'Conferences'
  });

  // Initiative Form State
  const [initiativeForm, setInitiativeForm] = useState({
    tag: 'FEATURED INITIATIVE',
    title: '',
    subtitle: '',
    imageUrl: '/events/e1.png',
    link: '#'
  });

  const categories = [
    { name: 'All Events', icon: LayoutGrid },
    { name: 'Conferences', icon: Users },
    { name: 'Workshops', icon: MonitorPlay },
    { name: 'Lectures', icon: MessageSquare },
    { name: 'Courses', icon: GraduationCap },
    { name: 'STEM Camps', icon: Tent },
  ];

  const filterCategories = ['Conferences', 'Workshops', 'Lectures', 'Courses', 'STEM Camps'];

  const imagePresets = [
    { name: 'Default Event (e1.png)', url: '/events/e1.png' },
    { name: 'AI & Tech', url: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=600&auto=format&fit=crop' },
    { name: 'Conference Hall', url: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=600&auto=format&fit=crop' },
    { name: 'Workshop Classroom', url: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=600&auto=format&fit=crop' },
    { name: 'STEM 4 Girls', url: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600&auto=format&fit=crop' },
    { name: 'Science Laboratory', url: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=600&auto=format&fit=crop' },
  ];

  const showToast = (type, message) => {
    setToast({ show: true, type, message });
    setTimeout(() => setToast({ show: false, type: '', message: '' }), 3500);
  };

  // Carousel timer
  useEffect(() => {
    const inits = settings.featuredInitiatives || [];
    if (inits.length <= 1 || isCarouselPaused) return;

    const interval = setInterval(() => {
      setCurrentInitiativeIndex((prev) => (prev + 1) % inits.length);
    }, 4500);

    return () => clearInterval(interval);
  }, [settings.featuredInitiatives, isCarouselPaused]);

  // Fetch all live data from PostgreSQL
  const fetchData = async () => {
    try {
      setLoading(true);
      const [eventsRes, settingsRes] = await Promise.all([
        fetch('/api/events'),
        fetch('/api/event-settings')
      ]);

      if (eventsRes.ok) {
        const eventsData = await eventsRes.json();
        if (Array.isArray(eventsData)) setEvents(eventsData);
      }

      if (settingsRes.ok) {
        const settingsData = await settingsRes.json();
        if (settingsData && settingsData.heroTag) {
          setSettings(prev => ({ ...prev, ...settingsData }));
        }
      }
    } catch (error) {
      console.error("Fetch error:", error);
      showToast('error', 'Error syncing with PostgreSQL database');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Open inline add form for Event
  const handleOpenAdd = (tab) => {
    setEditingEventId(null);
    const cat = tab && tab !== 'All Events' ? tab : 'Conferences';
    setEventForm({
      title: '',
      subtitle: '',
      dateDay: '15',
      dateMonth: 'MAR',
      dateYear: '2025',
      category: cat.toUpperCase(),
      imageUrl: '/events/e1.png',
      filterType: cat
    });
    setShowAddForm(true);
    const el = document.getElementById('admin-event-form-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  // Open edit mode for Event
  const handleStartEdit = (evt) => {
    setEditingEventId(evt.id);
    setEventForm({
      title: evt.title || '',
      subtitle: evt.subtitle || '',
      dateDay: evt.dateDay || '',
      dateMonth: evt.dateMonth || '',
      dateYear: evt.dateYear || '',
      category: evt.category || 'CONFERENCE',
      imageUrl: evt.imageUrl || '/events/e1.png',
      filterType: evt.filterType || 'Conferences'
    });
    setShowAddForm(true);
    const el = document.getElementById('admin-event-form-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    showToast('info', `Editing event: "${evt.title}"`);
  };

  // Submit Event Add / Update
  const handleEventSubmit = async (e) => {
    e.preventDefault();
    if (!eventForm.title.trim()) {
      showToast('error', 'Please enter an event title');
      return;
    }

    setSaving(true);
    try {
      const isEditing = Boolean(editingEventId);
      const method = isEditing ? 'PUT' : 'POST';
      const payload = isEditing ? { ...eventForm, id: editingEventId } : eventForm;

      const res = await fetch('/api/events', {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to save event');

      showToast('success', isEditing ? 'Event updated successfully in database!' : 'New event published to database!');
      setShowAddForm(false);
      setEditingEventId(null);
      fetchData();
    } catch (err) {
      showToast('error', err.message);
    } finally {
      setSaving(false);
    }
  };

  // Delete event from DB
  const handleDeleteEvent = async (id, title) => {
    if (!confirm(`Are you sure you want to delete "${title}"?`)) return;

    try {
      const res = await fetch(`/api/events?id=${id}`, { method: 'DELETE' });
      if (!res.ok) throw new Error('Failed to delete event');
      showToast('success', 'Event deleted from PostgreSQL database');
      if (editingEventId === id) {
        setShowAddForm(false);
        setEditingEventId(null);
      }
      fetchData();
    } catch (err) {
      showToast('error', err.message);
    }
  };

  // ==========================================
  // INITIATIVES MANAGEMENT (Add, Edit, Delete)
  // ==========================================
  const handleOpenAddInitiative = () => {
    setEditingInitiativeId(null);
    setInitiativeForm({
      tag: 'FEATURED INITIATIVE',
      title: '',
      subtitle: '',
      imageUrl: '/events/e1.png',
      link: '#'
    });
    setShowInitiativeModal(true);
  };

  const handleStartEditInitiative = (init) => {
    setEditingInitiativeId(init.id);
    setInitiativeForm({
      tag: init.tag || 'FEATURED INITIATIVE',
      title: init.title || '',
      subtitle: init.subtitle || '',
      imageUrl: init.imageUrl || '/events/e1.png',
      link: init.link || '#'
    });
    setShowInitiativeModal(true);
  };

  const handleSaveInitiative = async (e) => {
    e.preventDefault();
    if (!initiativeForm.title.trim()) {
      showToast('error', 'Please enter initiative title');
      return;
    }

    setSaving(true);
    try {
      let currentList = settings.featuredInitiatives ? [...settings.featuredInitiatives] : [];
      
      if (editingInitiativeId) {
        // Update existing
        currentList = currentList.map(item => 
          item.id === editingInitiativeId 
            ? { ...item, ...initiativeForm }
            : item
        );
      } else {
        // Add new
        const newInit = {
          id: `init-${Date.now()}`,
          ...initiativeForm
        };
        currentList.push(newInit);
      }

      const updatedSettings = {
        ...settings,
        featuredInitiatives: currentList
      };

      const res = await fetch('/api/event-settings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedSettings)
      });

      if (!res.ok) throw new Error('Failed to save initiative');

      setSettings(updatedSettings);
      setShowInitiativeModal(false);
      setEditingInitiativeId(null);
      showToast('success', editingInitiativeId ? 'Initiative updated in database!' : 'New initiative added to carousel!');
      fetchData();
    } catch (err) {
      showToast('error', err.message);
    } finally {
      setSaving(false);
    }
  };

  const handleDeleteInitiative = async (id, title) => {
    if (!confirm(`Are you sure you want to delete initiative "${title}"?`)) return;

    setSaving(true);
    try {
      const currentList = (settings.featuredInitiatives || []).filter(item => item.id !== id);
      const updatedSettings = {
        ...settings,
        featuredInitiatives: currentList
      };

      const res = await fetch('/api/event-settings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedSettings)
      });

      if (!res.ok) throw new Error('Failed to delete initiative');

      setSettings(updatedSettings);
      setCurrentInitiativeIndex(0);
      showToast('success', 'Initiative removed from carousel');
      fetchData();
    } catch (err) {
      showToast('error', err.message);
    } finally {
      setSaving(false);
    }
  };

  // Save General Settings
  const handleSettingsSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    try {
      const res = await fetch('/api/event-settings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(settings)
      });

      if (!res.ok) throw new Error('Failed to save settings');
      showToast('success', 'Sidebar, Hero & Statistics settings saved live!');
      setShowSettingsModal(false);
      fetchData();
    } catch (err) {
      showToast('error', err.message);
    } finally {
      setSaving(false);
    }
  };

  // Filter events
  const filteredEvents = events.filter(e => {
    const matchesCategory = filterCategory === 'All Events' || e.filterType === filterCategory;
    const matchesSearch = searchQuery.trim() === '' || 
      (e.title && e.title.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (e.subtitle && e.subtitle.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (e.category && e.category.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const initiatives = settings.featuredInitiatives && settings.featuredInitiatives.length > 0 
    ? settings.featuredInitiatives 
    : [
      {
        id: "default-1",
        tag: "FEATURED INITIATIVE",
        title: "STEM 4 Girls",
        subtitle: "Creating opportunities.<br/>Inspiring futures.",
        imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600&auto=format&fit=crop",
        link: "#"
      }
    ];

  const activeInitiative = initiatives[currentInitiativeIndex] || initiatives[0];

  const handleNextInitiative = () => {
    setCurrentInitiativeIndex((prev) => (prev + 1) % initiatives.length);
  };

  const handlePrevInitiative = () => {
    setCurrentInitiativeIndex((prev) => (prev - 1 + initiatives.length) % initiatives.length);
  };

  return (
    <div className="min-h-screen bg-[#F5F9FA] dark:bg-[#031008] text-slate-900 dark:text-slate-100 pb-32 font-outfit relative transition-colors duration-300">
      
      {/* Toast Notification Alert */}
      {toast.show && (
        <div className={`fixed bottom-6 right-6 z-50 px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-3 border transition-all transform animate-bounce ${
          toast.type === 'success' ? 'bg-emerald-900 text-white border-emerald-600' :
          toast.type === 'error' ? 'bg-red-900 text-white border-red-600' :
          'bg-slate-900 text-white border-slate-700'
        }`}>
          {toast.type === 'success' ? <CheckCircle2 size={22} className="text-emerald-400" /> : <AlertCircle size={22} className="text-red-400" />}
          <span className="font-bold text-sm">{toast.message}</span>
        </div>
      )}

      {/* ADMIN FLOATING TOP CONTROLLER */}
      <div className="bg-slate-950/95 text-white backdrop-blur-md sticky top-0 z-40 border-b border-slate-800 shadow-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-wrap items-center justify-between gap-3">
          
          <div className="flex items-center gap-3">
            <span className="flex h-3 w-3 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
            <div className="flex items-center gap-2.5">
              <span className="text-xs sm:text-sm font-black tracking-wider uppercase">Live Events Admin</span>
              <span className="text-[10px] bg-emerald-950 text-emerald-300 font-black px-2.5 py-0.5 rounded-full border border-emerald-800">
                PostgreSQL • {events.length} Events • {initiatives.length} Initiatives
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            {/* Direct Quick Add Button */}
            <button 
              onClick={() => handleOpenAdd(filterCategory)}
              className="bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs px-4 py-2 rounded-xl flex items-center gap-1.5 shadow-md shadow-emerald-900/30 transition-all active:scale-95"
            >
              <Plus size={16} strokeWidth={3} />
              <span>Add Event Directly</span>
            </button>

            {/* Manage Initiatives Button */}
            <button 
              onClick={handleOpenAddInitiative}
              className="bg-emerald-800 hover:bg-emerald-700 text-white font-bold text-xs px-3.5 py-2 rounded-xl flex items-center gap-1.5 border border-emerald-700 transition-colors"
            >
              <Layers size={15} />
              <span>+ Add Initiative</span>
            </button>

            {/* Sidebar & Settings */}
            <button 
              onClick={() => setShowSettingsModal(true)}
              className="bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white font-bold text-xs px-3.5 py-2 rounded-xl flex items-center gap-1.5 border border-slate-700 transition-colors"
            >
              <Settings size={15} />
              <span className="hidden md:inline">Edit Stats & Hero</span>
            </button>

            {/* Refresh */}
            <button 
              onClick={fetchData}
              title="Refresh Data from DB"
              className="p-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl transition-colors"
            >
              <RefreshCw size={15} className={loading ? "animate-spin text-emerald-400" : ""} />
            </button>

            {/* View Live Public Page */}
            <Link 
              href="/events" 
              target="_blank"
              className="px-3 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white font-bold text-xs rounded-xl flex items-center gap-1.5 border border-slate-700 transition-colors"
              title="View Public Page"
            >
              <span>Public View</span>
              <ExternalLink size={14} />
            </Link>
          </div>
        </div>
      </div>

      {/* HERO SECTION */}
      <div className="relative min-h-[460px] lg:min-h-[500px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={settings.heroImage || "/events/e1.png"} 
            alt="Events Hero illustration" 
            className="w-full h-full object-cover object-center lg:object-right"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 to-transparent md:via-white/70"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#F5F9FA] via-transparent to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-10 pb-12">
          
          <div className="flex items-center gap-2 mb-3">
            <span className="inline-block text-emerald-700 font-black tracking-widest text-xs uppercase bg-emerald-100/80 border border-emerald-300/60 px-3 py-1 rounded-full shadow-xs">
              {settings.heroTag || 'EVENTS'}
            </span>
            <button 
              onClick={() => setShowSettingsModal(true)}
              className="text-[10px] font-bold bg-white/90 hover:bg-white text-slate-700 px-2.5 py-1 rounded-full border border-slate-200 transition-colors flex items-center gap-1 shadow-xs"
            >
              <Edit3 size={11} className="text-emerald-700" /> Edit Hero Text
            </button>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-slate-900 leading-[1.1] tracking-tight">
            Discover. Learn. <br />
            <span className="text-emerald-600">Connect.</span>
          </h1>

          <p className="text-slate-600 text-base sm:text-lg max-w-lg mt-4 sm:mt-5 leading-relaxed font-medium">
            {settings.heroSubtitle}
          </p>

          {/* Search bar */}
          <div className="mt-7 relative max-w-md">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
            <input 
              type="text" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search events, workshops, conferences..." 
              className="w-full pl-14 pr-6 py-4 rounded-full bg-white/95 backdrop-blur-md shadow-lg border border-white/60 focus:ring-2 focus:ring-emerald-500 outline-none text-slate-800 font-medium placeholder:text-slate-400 transition-all text-sm sm:text-base"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs bg-slate-100 hover:bg-slate-200 text-slate-600 px-2.5 py-1 rounded-full font-bold transition-colors"
              >
                Clear
              </button>
            )}
          </div>
        </div>
      </div>

      {/* MAIN CONTENT AREA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-20">
        
        {/* Navigation Tabs with Category Filter */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 mb-10">
          <div className="bg-white rounded-full shadow-md border border-slate-100 p-2 flex overflow-x-auto hide-scrollbar gap-2 items-center justify-start flex-1">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = filterCategory === cat.name;
              const count = cat.name === 'All Events' 
                ? events.length 
                : events.filter(e => e.filterType === cat.name).length;

              return (
                <button
                  key={cat.name}
                  onClick={() => setFilterCategory(cat.name)}
                  className={`flex items-center gap-2 px-5 sm:px-6 py-3 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-300 ${
                    isActive 
                      ? 'bg-emerald-700 text-white shadow-md' 
                      : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900 bg-transparent'
                  }`}
                >
                  <Icon size={18} strokeWidth={isActive ? 2.5 : 2} />
                  <span>{cat.name}</span>
                  <span className={`text-[10px] px-2 py-0.5 rounded-full font-black ${isActive ? 'bg-emerald-900/60 text-white' : 'bg-slate-100 text-slate-500'}`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          <button 
            onClick={() => handleOpenAdd(filterCategory)}
            className="bg-emerald-700 hover:bg-emerald-800 text-white px-6 py-3 rounded-full font-black text-xs transition-all shadow-md flex items-center justify-center gap-2 active:scale-95 shrink-0"
          >
            <Plus size={16} strokeWidth={3} />
            <span>Add Event to {filterCategory === 'All Events' ? 'List' : filterCategory}</span>
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          
          {/* Left Column: Timeline Events (8 cols) */}
          <div className="lg:col-span-8 space-y-6 relative pb-10">
            {/* Continuous Vertical Timeline Line */}
            <div className="absolute left-[39px] top-6 bottom-0 w-[2px] bg-emerald-100 hidden sm:block"></div>

            {/* INLINE ADD / EDIT EVENT FORM CARD */}
            {showAddForm && (
              <div id="admin-event-form-section" className="sm:ml-20 mb-8 animate-fade-in">
                <div className="bg-white rounded-[2rem] p-6 sm:p-8 shadow-xl border-2 border-emerald-500/40 relative">
                  
                  <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
                    <div>
                      <h3 className="text-xl font-black text-slate-900 flex items-center gap-2">
                        {editingEventId ? <Edit3 className="text-emerald-600" size={22} /> : <Plus className="text-emerald-600" size={24} />}
                        {editingEventId ? 'Edit Event in Database' : 'Add New Event Live'}
                      </h3>
                      <p className="text-xs text-slate-500 font-medium mt-0.5">
                        {editingEventId ? `Updating Event ID #${editingEventId}` : `Adding event into "${eventForm.filterType}"`}
                      </p>
                    </div>
                    <button 
                      onClick={() => { setShowAddForm(false); setEditingEventId(null); }}
                      className="p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-700 transition-colors"
                    >
                      <X size={20} />
                    </button>
                  </div>

                  <form onSubmit={handleEventSubmit} className="space-y-4">
                    
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Event Title *
                      </label>
                      <input 
                        type="text" 
                        required
                        value={eventForm.title}
                        onChange={(e) => setEventForm({ ...eventForm, title: e.target.value })}
                        placeholder="e.g. SIET International Conference"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-emerald-500 outline-none text-sm font-semibold"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Subtitle / Short Description
                      </label>
                      <textarea 
                        rows={2}
                        value={eventForm.subtitle}
                        onChange={(e) => setEventForm({ ...eventForm, subtitle: e.target.value })}
                        placeholder="e.g. Educational Technology in STEAM Education"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:ring-2 focus:ring-emerald-500 outline-none text-sm font-medium"
                      />
                    </div>

                    {/* Date fields */}
                    <div className="grid grid-cols-3 gap-3">
                      <div>
                        <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                          Day(s) *
                        </label>
                        <input 
                          type="text" 
                          required
                          value={eventForm.dateDay}
                          onChange={(e) => setEventForm({ ...eventForm, dateDay: e.target.value })}
                          placeholder="15 or 18-20"
                          className="w-full px-3 py-2.5 rounded-xl border border-slate-200 focus:ring-2 focus:ring-emerald-500 outline-none text-sm font-black text-center text-emerald-800"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                          Month *
                        </label>
                        <input 
                          type="text" 
                          required
                          value={eventForm.dateMonth}
                          onChange={(e) => setEventForm({ ...eventForm, dateMonth: e.target.value })}
                          placeholder="MAR"
                          className="w-full px-3 py-2.5 rounded-xl border border-slate-200 focus:ring-2 focus:ring-emerald-500 outline-none text-sm font-black text-center uppercase text-emerald-600"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                          Year
                        </label>
                        <input 
                          type="text" 
                          value={eventForm.dateYear}
                          onChange={(e) => setEventForm({ ...eventForm, dateYear: e.target.value })}
                          placeholder="2025"
                          className="w-full px-3 py-2.5 rounded-xl border border-slate-200 focus:ring-2 focus:ring-emerald-500 outline-none text-sm font-bold text-center text-slate-500"
                        />
                      </div>
                    </div>

                    {/* Category Selection */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                          Card Badge Tag *
                        </label>
                        <input 
                          type="text" 
                          required
                          value={eventForm.category}
                          onChange={(e) => setEventForm({ ...eventForm, category: e.target.value })}
                          placeholder="CONFERENCE"
                          className="w-full px-3 py-2.5 rounded-xl border border-slate-200 focus:ring-2 focus:ring-emerald-500 outline-none text-xs font-black uppercase text-emerald-700"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                          Category Filter Tab *
                        </label>
                        <select 
                          value={eventForm.filterType}
                          onChange={(e) => setEventForm({ ...eventForm, filterType: e.target.value })}
                          className="w-full px-3 py-2.5 rounded-xl border border-slate-200 focus:ring-2 focus:ring-emerald-500 outline-none text-xs font-bold bg-white"
                        >
                          {filterCategories.map(c => (
                            <option key={c} value={c}>{c}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Image Selection with Presets */}
                    <div>
                      <div className="flex flex-wrap items-center justify-between gap-1 mb-1.5">
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                          Image URL or Path *
                        </label>
                        <span className="text-[10px] text-slate-500 font-medium">Click a preset below or paste URL</span>
                      </div>

                      {/* Presets badges */}
                      <div className="flex flex-wrap gap-1.5 mb-2">
                        {imagePresets.map(preset => (
                          <button
                            key={preset.name}
                            type="button"
                            onClick={() => setEventForm({ ...eventForm, imageUrl: preset.url })}
                            className={`text-[10px] px-2.5 py-1 rounded-lg font-bold border transition-colors ${
                              eventForm.imageUrl === preset.url 
                                ? 'bg-emerald-700 text-white border-emerald-700' 
                                : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-200'
                            }`}
                          >
                            {preset.name}
                          </button>
                        ))}
                      </div>

                      <input 
                        type="text" 
                        required
                        value={eventForm.imageUrl}
                        onChange={(e) => setEventForm({ ...eventForm, imageUrl: e.target.value })}
                        placeholder="/events/e1.png or https://images.unsplash.com/..."
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:ring-2 focus:ring-emerald-500 outline-none text-xs font-mono"
                      />
                    </div>

                    {/* Image Preview */}
                    {eventForm.imageUrl && (
                      <div className="rounded-2xl overflow-hidden h-32 relative border border-slate-200 bg-slate-100">
                        <img 
                          src={eventForm.imageUrl} 
                          alt="Preview" 
                          className="w-full h-full object-cover"
                          onError={(e) => { e.currentTarget.src = "/events/e1.png"; }}
                        />
                        <span className="absolute bottom-2 left-2 bg-black/70 text-white text-[10px] font-bold px-2 py-0.5 rounded-md backdrop-blur-xs">
                          Live Card Image Preview
                        </span>
                      </div>
                    )}

                    <div className="pt-3 flex gap-3">
                      <button 
                        type="button"
                        onClick={() => { setShowAddForm(false); setEditingEventId(null); }}
                        className="flex-1 py-3 rounded-xl border border-slate-200 text-slate-600 font-bold text-sm hover:bg-slate-50 transition-colors"
                      >
                        Cancel
                      </button>
                      <button 
                        type="submit"
                        disabled={saving}
                        className="flex-1 py-3 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-black text-sm flex items-center justify-center gap-2 transition-all shadow-md shadow-emerald-900/20 disabled:opacity-50"
                      >
                        {saving ? <Loader2 className="animate-spin" size={16} /> : <Save size={16} />}
                        {saving ? 'Saving...' : editingEventId ? 'Save Event Updates' : 'Add Event to Database'}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}

            {/* DIRECT ADD EVENT BUTTON CARD AT TOP OF TIMELINE */}
            {!showAddForm && (
              <div 
                onClick={() => handleOpenAdd(filterCategory)}
                className="border-2 border-dashed border-emerald-300/80 bg-emerald-50/40 hover:bg-emerald-50 hover:border-emerald-500 rounded-[2rem] p-6 text-center cursor-pointer transition-all flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 group shadow-xs sm:ml-20"
              >
                <div className="w-11 h-11 rounded-full bg-emerald-600 text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                  <Plus size={24} strokeWidth={2.5} />
                </div>
                <div className="text-center sm:text-left">
                  <h4 className="text-base font-black text-emerald-900">Click to Add an Event to this Timeline</h4>
                  <p className="text-xs text-emerald-700/80 font-medium">Add dates, categories, title, and image directly into PostgreSQL</p>
                </div>
              </div>
            )}

            {/* TIMELINE LISTING */}
            {loading ? (
              <div className="text-center py-20 bg-white rounded-[2rem] border border-slate-100 shadow-sm sm:ml-20">
                <div className="inline-block animate-spin w-8 h-8 border-4 border-emerald-600 border-t-transparent rounded-full mb-3"></div>
                <div className="text-slate-500 font-bold">Syncing live events from PostgreSQL...</div>
              </div>
            ) : filteredEvents.length === 0 ? (
              <div className="text-center py-16 bg-white rounded-[2rem] border border-slate-100 shadow-sm p-8 sm:ml-20">
                <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-1">No events in this view</h3>
                <p className="text-sm text-slate-500 max-w-sm mx-auto mb-5">
                  {searchQuery ? `No results matching "${searchQuery}".` : `No events currently assigned to category "${filterCategory}".`}
                </p>
                <button 
                  onClick={() => handleOpenAdd(filterCategory)}
                  className="px-5 py-2.5 bg-emerald-700 text-white rounded-xl text-xs font-bold hover:bg-emerald-800 transition-colors inline-flex items-center gap-1.5 shadow-md"
                >
                  <Plus size={16} /> Add First Event in {filterCategory}
                </button>
              </div>
            ) : (
              filteredEvents.map((evt) => (
                <div key={evt.id} className="relative flex flex-col sm:flex-row gap-4 sm:gap-8 items-stretch group pt-1">
                  
                  {/* Timeline Date (Left of line) */}
                  <div className="hidden sm:flex flex-col items-center w-[80px] shrink-0 relative z-10 pt-4 text-center">
                    <span className="block text-2xl font-black text-emerald-800 leading-none">{evt.dateDay}</span>
                    <span className="block text-xs font-black text-emerald-600 mt-1 uppercase tracking-wider">{evt.dateMonth}</span>
                    <span className="block text-xs font-bold text-slate-400 mt-0.5">{evt.dateYear}</span>
                  </div>

                  {/* Dot on the Line */}
                  <div className="hidden sm:flex absolute left-[40px] top-8 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-[3px] border-emerald-500 bg-white ring-4 ring-[#F5F9FA] z-20 group-hover:scale-125 transition-transform duration-300">
                    <div className="m-auto w-1 h-1 bg-emerald-500 rounded-full"></div>
                  </div>

                  {/* Event Card with Admin Controls */}
                  <div className="flex-1 bg-white rounded-[2rem] p-4 sm:pr-6 flex flex-col sm:flex-row gap-5 items-center shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 w-full group-hover:-translate-y-0.5 relative">
                    
                    {/* Admin Action Badges (Top Right of Card) */}
                    <div className="absolute top-3 right-4 z-20 flex items-center gap-1.5 bg-white/95 backdrop-blur-sm p-1 rounded-xl shadow-md border border-slate-200">
                      <button 
                        onClick={(e) => { e.stopPropagation(); handleStartEdit(evt); }}
                        className="px-2.5 py-1 bg-emerald-50 hover:bg-emerald-600 hover:text-white text-emerald-700 rounded-lg text-xs font-bold flex items-center gap-1 transition-colors"
                        title="Edit event"
                      >
                        <Edit3 size={13} />
                        <span>Edit</span>
                      </button>
                      <button 
                        onClick={(e) => { e.stopPropagation(); handleDeleteEvent(evt.id, evt.title); }}
                        className="px-2.5 py-1 bg-red-50 hover:bg-red-600 hover:text-white text-red-600 rounded-lg text-xs font-bold flex items-center gap-1 transition-colors"
                        title="Delete event"
                      >
                        <Trash2 size={13} />
                        <span>Delete</span>
                      </button>
                    </div>

                    {/* Mobile Date Header */}
                    <div className="sm:hidden w-full flex items-center justify-between border-b border-slate-100 pb-2 mb-1 pr-24">
                      <span className="text-xs font-bold text-emerald-700 flex items-center gap-1">
                        <Calendar size={14} /> {evt.dateDay} {evt.dateMonth} {evt.dateYear}
                      </span>
                    </div>

                    {/* Image */}
                    <div className="w-full sm:w-[210px] h-[150px] rounded-[1.4rem] overflow-hidden shrink-0 relative bg-slate-100">
                      <img 
                        src={evt.imageUrl} 
                        alt={evt.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        onError={(e) => {
                          e.currentTarget.src = "/events/e1.png";
                        }}
                      />
                    </div>

                    {/* Content */}
                    <div className="flex-1 py-1 w-full flex flex-col justify-center pr-2">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="inline-flex px-3 py-1 rounded-md bg-emerald-50 text-emerald-700 text-[10px] font-extrabold uppercase tracking-widest">
                          {evt.category}
                        </span>
                        <span className="text-[10px] font-bold text-slate-400 bg-slate-100 px-2 py-0.5 rounded">
                          Tab: {evt.filterType}
                        </span>
                      </div>
                      <h3 className="text-lg sm:text-xl font-black text-slate-900 leading-snug mb-1.5 pr-20">{evt.title}</h3>
                      <p className="text-xs sm:text-sm font-medium text-slate-500 line-clamp-2 leading-relaxed">{evt.subtitle}</p>
                    </div>

                  </div>
                </div>
              ))
            )}

          </div>

          {/* Right Column: Sidebar (4 cols) with Auto-Scroll Carousel & Controls */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* FEATURED INITIATIVES AUTO-SCROLL CAROUSEL */}
            <div 
              onMouseEnter={() => setIsCarouselPaused(true)}
              onMouseLeave={() => setIsCarouselPaused(false)}
              className="bg-white rounded-[2rem] p-6 shadow-sm border border-slate-100 relative overflow-hidden group hover:shadow-xl transition-all duration-300"
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-emerald-100/50 to-transparent rounded-full blur-3xl -z-10 translate-x-1/3 -translate-y-1/3"></div>
              
              {/* Top Controls: Tag + Admin Quick Action Badges */}
              <div className="flex items-center justify-between mb-3">
                <div className="text-[10px] font-extrabold text-emerald-600 tracking-widest uppercase flex items-center gap-1.5">
                  <Sparkles size={13} />
                  <span>{activeInitiative.tag || 'FEATURED INITIATIVE'}</span>
                </div>

                <div className="flex items-center gap-1">
                  <button 
                    onClick={() => handleStartEditInitiative(activeInitiative)}
                    className="p-1 rounded-lg bg-emerald-50 hover:bg-emerald-600 hover:text-white text-emerald-700 transition-colors text-xs font-bold flex items-center gap-1 px-2"
                    title="Edit this initiative"
                  >
                    <Edit3 size={11} /> Edit
                  </button>

                  <button 
                    onClick={() => handleDeleteInitiative(activeInitiative.id, activeInitiative.title)}
                    className="p-1 rounded-lg bg-red-50 hover:bg-red-600 hover:text-white text-red-600 transition-colors text-xs"
                    title="Delete this initiative"
                  >
                    <Trash2 size={12} />
                  </button>

                  <button 
                    onClick={handleOpenAddInitiative}
                    className="p-1 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white transition-colors text-xs font-bold flex items-center gap-1 px-2"
                    title="Add new initiative to carousel"
                  >
                    <Plus size={11} /> Add
                  </button>
                </div>
              </div>

              {/* Slide Content */}
              <div className="transition-all duration-500 animate-fade-in">
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mb-1.5">{activeInitiative.title}</h3>
                <p 
                  className="text-xs sm:text-sm font-medium text-slate-500 mb-5 leading-relaxed min-h-[38px]"
                  dangerouslySetInnerHTML={{ __html: activeInitiative.subtitle || '' }}
                />
                
                <div className="relative h-48 w-full rounded-[1.4rem] overflow-hidden mb-5 bg-slate-100">
                  <img 
                    src={activeInitiative.imageUrl || "/events/e1.png"} 
                    alt={activeInitiative.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    onError={(e) => { e.currentTarget.src = "/events/e1.png"; }}
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="bg-emerald-700 text-white px-6 py-3 rounded-xl text-xs sm:text-sm font-bold inline-flex items-center gap-2 shadow-md shadow-emerald-900/10 cursor-pointer">
                    Learn More <ArrowRight size={16} />
                  </div>

                  {/* Carousel Controls & Index */}
                  {initiatives.length > 1 && (
                    <div className="flex items-center gap-1.5">
                      <button 
                        onClick={handlePrevInitiative}
                        className="w-7 h-7 rounded-full bg-slate-100 hover:bg-emerald-100 text-slate-600 hover:text-emerald-700 flex items-center justify-center transition-colors text-xs"
                        title="Previous initiative"
                      >
                        <ChevronLeft size={16} />
                      </button>
                      
                      {/* Dots */}
                      <div className="flex items-center gap-1">
                        {initiatives.map((_, idx) => (
                          <button
                            key={idx}
                            onClick={() => setCurrentInitiativeIndex(idx)}
                            className={`h-2 rounded-full transition-all ${
                              currentInitiativeIndex === idx ? 'w-5 bg-emerald-600' : 'w-2 bg-slate-200 hover:bg-slate-300'
                            }`}
                            title={`Go to slide ${idx + 1}`}
                          />
                        ))}
                      </div>

                      <button 
                        onClick={handleNextInitiative}
                        className="w-7 h-7 rounded-full bg-slate-100 hover:bg-emerald-100 text-slate-600 hover:text-emerald-700 flex items-center justify-center transition-colors text-xs"
                        title="Next initiative"
                      >
                        <ChevronRight size={16} />
                      </button>
                    </div>
                  )}
                </div>
              </div>

            </div>

            {/* Stats Grid */}
            <div className="relative group">
              <button 
                onClick={() => setShowSettingsModal(true)}
                className="absolute -top-3 right-2 z-20 bg-white hover:bg-emerald-600 hover:text-white text-slate-600 text-xs font-bold px-2.5 py-1 rounded-xl shadow border border-slate-200 flex items-center gap-1 transition-colors"
              >
                <Edit3 size={12} /> Edit Numbers
              </button>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="bg-white p-5 sm:p-6 rounded-[2rem] shadow-sm border border-slate-100 flex flex-col items-center text-center justify-center hover:shadow-md transition-shadow">
                  <div className="w-13 h-13 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 mb-3 ring-4 ring-emerald-50/50">
                    <Users size={22} />
                  </div>
                  <h4 className="text-2xl sm:text-3xl font-black text-slate-900">{settings.stat1Number}</h4>
                  <p 
                    className="text-[10px] sm:text-[11px] font-bold text-slate-500 mt-1.5 uppercase tracking-wide leading-tight"
                    dangerouslySetInnerHTML={{ __html: settings.stat1Text || '' }}
                  />
                </div>
                
                <div className="bg-white p-5 sm:p-6 rounded-[2rem] shadow-sm border border-slate-100 flex flex-col items-center text-center justify-center hover:shadow-md transition-shadow">
                  <div className="w-13 h-13 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 mb-3 ring-4 ring-blue-50/50">
                    <Building2 size={22} />
                  </div>
                  <h4 className="text-2xl sm:text-3xl font-black text-slate-900">{settings.stat2Number}</h4>
                  <p 
                    className="text-[10px] sm:text-[11px] font-bold text-slate-500 mt-1.5 uppercase tracking-wide leading-tight"
                    dangerouslySetInnerHTML={{ __html: settings.stat2Text || '' }}
                  />
                </div>
                
                <div className="bg-white p-5 sm:p-6 rounded-[2rem] shadow-sm border border-slate-100 flex flex-col items-center text-center justify-center hover:shadow-md transition-shadow">
                  <div className="w-13 h-13 rounded-full bg-cyan-50 flex items-center justify-center text-cyan-600 mb-3 ring-4 ring-cyan-50/50">
                    <MapPin size={22} />
                  </div>
                  <h4 className="text-2xl sm:text-3xl font-black text-slate-900">{settings.stat3Number}</h4>
                  <p 
                    className="text-[10px] sm:text-[11px] font-bold text-slate-500 mt-1.5 uppercase tracking-wide leading-tight"
                    dangerouslySetInnerHTML={{ __html: settings.stat3Text || '' }}
                  />
                </div>
                
                <div className="bg-white p-5 sm:p-6 rounded-[2rem] shadow-sm border border-slate-100 flex flex-col items-center text-center justify-center hover:shadow-md transition-shadow">
                  <div className="w-13 h-13 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 mb-3 ring-4 ring-emerald-50/50">
                    <Calendar size={22} />
                  </div>
                  <h4 className="text-2xl sm:text-3xl font-black text-slate-900">{settings.stat4Number}</h4>
                  <p 
                    className="text-[10px] sm:text-[11px] font-bold text-slate-500 mt-1.5 uppercase tracking-wide leading-tight"
                    dangerouslySetInnerHTML={{ __html: settings.stat4Text || '' }}
                  />
                </div>
              </div>
            </div>

            {/* Newsletter */}
            <div className="bg-white rounded-[2rem] p-6 sm:p-8 shadow-sm border border-slate-100 flex flex-col items-center text-center relative overflow-hidden group">
              <button 
                onClick={() => setShowSettingsModal(true)}
                className="absolute top-4 right-4 z-20 bg-white/90 hover:bg-emerald-600 hover:text-white text-slate-600 text-xs font-bold px-2.5 py-1 rounded-xl shadow border border-slate-200 flex items-center gap-1 transition-colors"
              >
                <Edit3 size={12} /> Edit
              </button>

              <div className="absolute top-0 right-0 w-48 h-48 bg-blue-50/50 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2"></div>
              
              <div className="w-14 sm:w-16 h-14 sm:h-16 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 mb-4 relative shadow-inner">
                 <div className="absolute inset-0 rounded-full border border-blue-200/50 scale-110"></div>
                 <Mail size={26} />
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-2">{settings.newsletterTitle}</h3>
              <p className="text-xs sm:text-sm font-medium text-slate-500 mb-6 leading-relaxed">
                {settings.newsletterText}
              </p>
              
              <div className="flex w-full gap-2 p-1.5 bg-slate-50 rounded-2xl border border-slate-200 shadow-inner opacity-80">
                <input 
                  type="email" 
                  disabled
                  placeholder="admin@preview.com" 
                  className="flex-1 bg-transparent border-none focus:ring-0 px-3 sm:px-4 text-xs font-bold outline-none text-slate-500 cursor-not-allowed"
                />
                <button disabled className="bg-emerald-700 text-white px-5 py-2 rounded-xl text-xs font-bold opacity-90">
                  Subscribe
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ======================================================== */}
      {/* MODAL 1: ADD / EDIT INITIATIVE MODAL */}
      {/* ======================================================== */}
      {showInitiativeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fade-in overflow-y-auto">
          <div className="bg-white rounded-[2rem] max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 my-8">
            
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-5">
              <div>
                <h3 className="text-xl font-black text-slate-900 flex items-center gap-2">
                  <Layers className="text-emerald-600" size={22} />
                  {editingInitiativeId ? 'Edit Featured Initiative' : 'Add New Initiative to Carousel'}
                </h3>
                <p className="text-xs text-slate-500 font-medium mt-0.5">
                  Initiatives auto-scroll in the right sidebar carousel.
                </p>
              </div>
              <button 
                onClick={() => { setShowInitiativeModal(false); setEditingInitiativeId(null); }}
                className="p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-700 transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleSaveInitiative} className="space-y-4">
              
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Tag Badge *
                </label>
                <input 
                  type="text" 
                  required
                  value={initiativeForm.tag}
                  onChange={(e) => setInitiativeForm({ ...initiativeForm, tag: e.target.value })}
                  placeholder="e.g. FEATURED INITIATIVE or UPCOMING PROGRAMME"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:ring-2 focus:ring-emerald-500 outline-none text-xs font-extrabold uppercase text-emerald-800"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Initiative Title *
                </label>
                <input 
                  type="text" 
                  required
                  value={initiativeForm.title}
                  onChange={(e) => setInitiativeForm({ ...initiativeForm, title: e.target.value })}
                  placeholder="e.g. STEM 4 Girls"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:ring-2 focus:ring-emerald-500 outline-none text-sm font-black"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Subtitle / Slogan (HTML supported)
                </label>
                <textarea 
                  rows={2}
                  value={initiativeForm.subtitle}
                  onChange={(e) => setInitiativeForm({ ...initiativeForm, subtitle: e.target.value })}
                  placeholder="Creating opportunities.<br/>Inspiring futures."
                  className="w-full px-4 py-2 rounded-xl border border-slate-200 focus:ring-2 focus:ring-emerald-500 outline-none text-xs font-medium"
                />
              </div>

              {/* Image selection with presets */}
              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                    Initiative Image URL *
                  </label>
                </div>

                <div className="flex flex-wrap gap-1 mb-2">
                  {imagePresets.map(preset => (
                    <button
                      key={preset.name}
                      type="button"
                      onClick={() => setInitiativeForm({ ...initiativeForm, imageUrl: preset.url })}
                      className="text-[10px] px-2 py-0.5 rounded bg-slate-100 hover:bg-emerald-50 hover:text-emerald-700 font-bold border border-slate-200"
                    >
                      {preset.name}
                    </button>
                  ))}
                </div>

                <input 
                  type="text" 
                  required
                  value={initiativeForm.imageUrl}
                  onChange={(e) => setInitiativeForm({ ...initiativeForm, imageUrl: e.target.value })}
                  placeholder="/events/e1.png or https://images.unsplash.com/..."
                  className="w-full px-4 py-2 rounded-xl border border-slate-200 focus:ring-2 focus:ring-emerald-500 outline-none text-xs font-mono"
                />
              </div>

              {/* Image Preview */}
              {initiativeForm.imageUrl && (
                <div className="rounded-2xl overflow-hidden h-28 relative border border-slate-200 bg-slate-100">
                  <img 
                    src={initiativeForm.imageUrl} 
                    alt="Preview" 
                    className="w-full h-full object-cover"
                    onError={(e) => { e.currentTarget.src = "/events/e1.png"; }}
                  />
                  <span className="absolute bottom-2 left-2 bg-black/70 text-white text-[10px] font-bold px-2 py-0.5 rounded-md backdrop-blur-xs">
                    Image Preview
                  </span>
                </div>
              )}

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Learn More Link
                </label>
                <input 
                  type="text" 
                  value={initiativeForm.link}
                  onChange={(e) => setInitiativeForm({ ...initiativeForm, link: e.target.value })}
                  placeholder="#"
                  className="w-full px-4 py-2 rounded-xl border border-slate-200 focus:ring-2 focus:ring-emerald-500 outline-none text-xs"
                />
              </div>

              <div className="pt-2 flex gap-3">
                <button 
                  type="button"
                  onClick={() => { setShowInitiativeModal(false); setEditingInitiativeId(null); }}
                  className="flex-1 py-3 rounded-xl border border-slate-200 text-slate-600 font-bold text-xs hover:bg-slate-50 transition-colors"
                >
                  Cancel
                </button>
                <button 
                  type="submit"
                  disabled={saving}
                  className="flex-1 py-3 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-black text-xs flex items-center justify-center gap-2 transition-all shadow-md disabled:opacity-50"
                >
                  {saving ? <Loader2 className="animate-spin" size={15} /> : <Save size={15} />}
                  {saving ? 'Saving...' : editingInitiativeId ? 'Update Initiative' : 'Add to Carousel'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* MODAL 2: EDIT SIDEBAR & HERO SETTINGS MODAL */}
      {/* ======================================================== */}
      {showSettingsModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 overflow-y-auto">
          <div className="bg-white rounded-[2rem] max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 my-8">
            
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
              <div>
                <h3 className="text-xl font-black text-slate-900 flex items-center gap-2">
                  <Settings className="text-emerald-600" size={20} />
                  Edit Sidebar, Hero & Stats Settings
                </h3>
                <p className="text-xs text-slate-500 font-medium mt-0.5">
                  Update statistics numbers, labels, newsletter, and hero banner.
                </p>
              </div>
              <button 
                onClick={() => setShowSettingsModal(false)}
                className="p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-700 transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleSettingsSubmit} className="space-y-6 max-h-[70vh] overflow-y-auto pr-2">
              
              {/* Hero Banner settings */}
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-3">
                <h4 className="text-xs font-black uppercase text-emerald-800 flex items-center gap-1.5">
                  <Sparkles size={14} /> Hero Banner Section
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 mb-1">Tag (e.g. EVENTS)</label>
                    <input 
                      type="text" 
                      value={settings.heroTag} 
                      onChange={(e) => setSettings({ ...settings, heroTag: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs font-bold"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 mb-1">Hero Image Path</label>
                    <input 
                      type="text" 
                      value={settings.heroImage} 
                      onChange={(e) => setSettings({ ...settings, heroImage: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs font-mono"
                      placeholder="/events/e1.png"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 mb-1">Subtitle</label>
                  <textarea 
                    rows={2}
                    value={settings.heroSubtitle} 
                    onChange={(e) => setSettings({ ...settings, heroSubtitle: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs font-medium"
                  />
                </div>
              </div>

              {/* 4 Impact Stats */}
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-3">
                <h4 className="text-xs font-black uppercase text-emerald-800 flex items-center gap-1.5">
                  <Sparkles size={14} /> 4 Statistics Boxes (Numbers & Labels)
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 bg-white rounded-xl border border-slate-200 space-y-1.5">
                    <span className="text-[10px] font-black text-emerald-700">Stat 1 (Students)</span>
                    <input 
                      type="text" 
                      placeholder="56+"
                      value={settings.stat1Number} 
                      onChange={(e) => setSettings({ ...settings, stat1Number: e.target.value })}
                      className="w-full px-2 py-1.5 rounded-lg border border-slate-200 text-xs font-black"
                    />
                    <input 
                      type="text" 
                      placeholder="Gifted Students<br/>Supported"
                      value={settings.stat1Text} 
                      onChange={(e) => setSettings({ ...settings, stat1Text: e.target.value })}
                      className="w-full px-2 py-1 rounded-lg border border-slate-200 text-[10px] font-bold"
                    />
                  </div>

                  <div className="p-3 bg-white rounded-xl border border-slate-200 space-y-1.5">
                    <span className="text-[10px] font-black text-blue-700">Stat 2 (Schools)</span>
                    <input 
                      type="text" 
                      placeholder="44"
                      value={settings.stat2Number} 
                      onChange={(e) => setSettings({ ...settings, stat2Number: e.target.value })}
                      className="w-full px-2 py-1.5 rounded-lg border border-slate-200 text-xs font-black"
                    />
                    <input 
                      type="text" 
                      placeholder="Schools in<br/>Kerala"
                      value={settings.stat2Text} 
                      onChange={(e) => setSettings({ ...settings, stat2Text: e.target.value })}
                      className="w-full px-2 py-1 rounded-lg border border-slate-200 text-[10px] font-bold"
                    />
                  </div>

                  <div className="p-3 bg-white rounded-xl border border-slate-200 space-y-1.5">
                    <span className="text-[10px] font-black text-cyan-700">Stat 3 (Districts)</span>
                    <input 
                      type="text" 
                      placeholder="41"
                      value={settings.stat3Number} 
                      onChange={(e) => setSettings({ ...settings, stat3Number: e.target.value })}
                      className="w-full px-2 py-1.5 rounded-lg border border-slate-200 text-xs font-black"
                    />
                    <input 
                      type="text" 
                      placeholder="Educational<br/>Districts"
                      value={settings.stat3Text} 
                      onChange={(e) => setSettings({ ...settings, stat3Text: e.target.value })}
                      className="w-full px-2 py-1 rounded-lg border border-slate-200 text-[10px] font-bold"
                    />
                  </div>

                  <div className="p-3 bg-white rounded-xl border border-slate-200 space-y-1.5">
                    <span className="text-[10px] font-black text-emerald-700">Stat 4 (Programmes)</span>
                    <input 
                      type="text" 
                      placeholder="6+"
                      value={settings.stat4Number} 
                      onChange={(e) => setSettings({ ...settings, stat4Number: e.target.value })}
                      className="w-full px-2 py-1.5 rounded-lg border border-slate-200 text-xs font-black"
                    />
                    <input 
                      type="text" 
                      placeholder="Programmes<br/>Organized"
                      value={settings.stat4Text} 
                      onChange={(e) => setSettings({ ...settings, stat4Text: e.target.value })}
                      className="w-full px-2 py-1 rounded-lg border border-slate-200 text-[10px] font-bold"
                    />
                  </div>
                </div>
              </div>

              {/* Newsletter Text */}
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-3">
                <h4 className="text-xs font-black uppercase text-emerald-800 flex items-center gap-1.5">
                  <Sparkles size={14} /> Newsletter Text
                </h4>
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 mb-1">Title</label>
                  <input 
                    type="text" 
                    value={settings.newsletterTitle} 
                    onChange={(e) => setSettings({ ...settings, newsletterTitle: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs font-bold"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 mb-1">Description</label>
                  <textarea 
                    rows={2}
                    value={settings.newsletterText} 
                    onChange={(e) => setSettings({ ...settings, newsletterText: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs font-medium"
                  />
                </div>
              </div>

              <div className="pt-2 flex gap-3">
                <button 
                  type="button"
                  onClick={() => setShowSettingsModal(false)}
                  className="flex-1 py-3 rounded-xl border border-slate-200 text-slate-600 font-bold text-sm hover:bg-slate-50 transition-colors"
                >
                  Cancel
                </button>
                <button 
                  type="submit"
                  disabled={saving}
                  className="flex-1 py-3 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-black text-sm flex items-center justify-center gap-2 transition-all shadow-md disabled:opacity-50"
                >
                  {saving ? <Loader2 className="animate-spin" size={16} /> : <Save size={16} />}
                  {saving ? 'Saving...' : 'Save Settings Live'}
                </button>
              </div>

            </form>
          </div>
        </div>
      )}

    </div>
  );
}
