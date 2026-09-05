'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import {
  FileText,
  Plus,
  Edit3,
  Trash2,
  X,
  CheckCircle2,
  AlertCircle,
  Loader2,
  ExternalLink,
  RefreshCw,
  Search,
  Filter,
  Download,
  BookOpen,
  Layers,
  Sparkles,
  FileCode,
  Calendar,
  HardDrive,
  Check,
  UploadCloud
} from 'lucide-react';
import PdfUploader from '../../../components/admin/PdfUploader';

export default function AdminResourcesPage() {
  const router = useRouter();
  const [authChecking, setAuthChecking] = useState(true);
  const [loading, setLoading] = useState(true);
  const [resourcesList, setResourcesList] = useState([]);
  
  // Search and filter
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Modal / Form state
  const [showModal, setShowModal] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [saving, setSaving] = useState(false);
  const [deleteConfirmId, setDeleteConfirmId] = useState(null);
  const [toast, setToast] = useState({ show: false, type: '', message: '' });

  // Form fields
  const [formData, setFormData] = useState({
    title: '',
    category: 'Brochures',
    type: 'PDF',
    size: '1.2 MB',
    desc: '',
    date: 'March 2025',
    downloadUrl: '#'
  });

  const categories = ['All', 'Brochures', 'Submissions', 'Courseware', 'Toolkits', 'Guides', 'Reports'];
  const formCategories = ['Brochures', 'Submissions', 'Courseware', 'Toolkits', 'Guides', 'Reports'];

  const showToast = (type, message) => {
    setToast({ show: true, type, message });
    setTimeout(() => setToast({ show: false, type: '', message: '' }), 3500);
  };

  const fetchResources = async () => {
    try {
      setLoading(true);
      const res = await fetch('/api/resources');
      if (res.ok) {
        const data = await res.json();
        if (Array.isArray(data)) {
          setResourcesList(data);
        }
      } else {
        showToast('error', 'Failed to retrieve academic resources');
      }
    } catch (err) {
      console.error('Fetch error:', err);
      showToast('error', 'Network error while contacting database');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    async function verifyAuthAndLoad() {
      try {
        const res = await fetch('/api/admin/check');
        if (!res.ok) {
          router.replace('/admin/login');
          return;
        }
        await fetchResources();
      } catch (err) {
        router.replace('/admin/login');
      } finally {
        setAuthChecking(false);
      }
    }
    verifyAuthAndLoad();
  }, [router]);

  const handleOpenAdd = () => {
    setEditingId(null);
    setFormData({
      title: '',
      category: 'Brochures',
      type: 'PDF',
      size: '1.2 MB',
      desc: '',
      date: new Date().toLocaleString('en-US', { month: 'long', year: 'numeric' }),
      downloadUrl: '#'
    });
    setShowModal(true);
  };

  const handleOpenEdit = (item) => {
    setEditingId(item.id);
    setFormData({
      title: item.title || '',
      category: item.category || 'Brochures',
      type: item.type || 'PDF',
      size: item.size || '1.0 MB',
      desc: item.desc || '',
      date: item.date || '',
      downloadUrl: item.downloadUrl || '#'
    });
    setShowModal(true);
  };

  const handleSaveResource = async (e) => {
    e.preventDefault();
    if (!formData.title.trim()) {
      showToast('error', 'Resource Title is required');
      return;
    }

    setSaving(true);
    try {
      if (editingId) {
        // Update existing resource
        const res = await fetch('/api/resources', {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ id: editingId, ...formData })
        });
        if (!res.ok) throw new Error('Update failed');
        showToast('success', 'Academic resource updated successfully');
      } else {
        // Add new resource
        const res = await fetch('/api/resources', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
        });
        if (!res.ok) throw new Error('Creation failed');
        showToast('success', 'New academic resource published successfully');
      }

      setShowModal(false);
      await fetchResources();
    } catch (err) {
      console.error('Save error:', err);
      showToast('error', 'Failed to save resource in database');
    } finally {
      setSaving(false);
    }
  };

  const handleDeleteResource = async (id) => {
    try {
      const res = await fetch(`/api/resources?id=${id}`, { method: 'DELETE' });
      if (!res.ok) throw new Error('Delete failed');
      showToast('success', 'Resource permanently removed');
      setDeleteConfirmId(null);
      await fetchResources();
    } catch (err) {
      console.error('Delete error:', err);
      showToast('error', 'Failed to delete resource');
    }
  };

  // Filtered resources
  const filtered = resourcesList.filter(item => {
    const matchesCat = selectedCategory === 'All' || item.category === selectedCategory;
    const q = searchQuery.toLowerCase().trim();
    const matchesSearch = !q || 
      (item.title && item.title.toLowerCase().includes(q)) ||
      (item.desc && item.desc.toLowerCase().includes(q)) ||
      (item.category && item.category.toLowerCase().includes(q)) ||
      (item.type && item.type.toLowerCase().includes(q));
    return matchesCat && matchesSearch;
  });

  // Calculate quick metrics
  const totalCount = resourcesList.length;
  const brochuresCount = resourcesList.filter(r => r.category === 'Brochures').length;
  const toolkitsCount = resourcesList.filter(r => r.category === 'Toolkits' || r.category === 'Courseware').length;
  const guidesCount = resourcesList.filter(r => r.category === 'Guides' || r.category === 'Reports').length;

  if (authChecking) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] gap-3">
        <Loader2 className="animate-spin text-[#2d5a3c]" size={32} />
        <span className="text-xs font-semibold uppercase tracking-wider text-[#556959]">
          Verifying Console Authorization...
        </span>
      </div>
    );
  }

  return (
    <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 space-y-8 animate-in fade-in duration-300">
      
      {/* Toast Notification */}
      {toast.show && (
        <div className={`fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-5 py-3.5 rounded-2xl shadow-xl border text-xs font-bold animate-in slide-in-from-bottom duration-300 ${
          toast.type === 'error'
            ? 'bg-rose-50 text-rose-800 border-rose-200'
            : 'bg-emerald-50 text-emerald-800 border-emerald-200'
        }`}>
          {toast.type === 'error' ? <AlertCircle size={16} /> : <CheckCircle2 size={16} />}
          <span>{toast.message}</span>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 1. TOP HEADER & BREADCRUMB */}
      {/* ========================================================================= */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#e2ece3]">
        <div>
          <div className="flex items-center gap-2 text-[11px] font-bold text-[#5c7361] uppercase tracking-wider mb-1.5">
            <Link href="/admin" className="hover:text-[#1b3726] transition-colors">Admin Console</Link>
            <span>/</span>
            <span className="text-[#132418]">Academic Resources &amp; Downloads</span>
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-normal text-[#122417] tracking-tight">
            Academic Resources &amp; Downloads
          </h1>
          <p className="text-xs sm:text-sm text-[#546b59] font-normal mt-1 max-w-2xl leading-relaxed">
            Manage official conference brochures, syllabus courseware, experiential STEM toolkits, research proceedings, and university policy documents.
          </p>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2.5 shrink-0 flex-wrap">
          <button
            onClick={fetchResources}
            disabled={loading}
            className="p-2.5 rounded-xl bg-white border border-[#d8e5da] text-[#2d4032] hover:bg-[#f1f6f1] transition-all cursor-pointer shadow-xs disabled:opacity-50"
            title="Refresh database records"
          >
            <RefreshCw size={16} className={loading ? 'animate-spin' : ''} />
          </button>

          <Link
            href="/resources"
            target="_blank"
            className="px-4 py-2.5 rounded-xl bg-white border border-[#d8e5da] text-[#1b3726] hover:bg-[#f1f6f1] text-xs font-bold transition-all shadow-xs flex items-center gap-2"
          >
            <span>Public Site View</span>
            <ExternalLink size={14} />
          </Link>

          <button
            onClick={handleOpenAdd}
            className="px-5 py-2.5 rounded-xl bg-[#1b3726] hover:bg-[#254d35] text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-sm transition-all active:scale-98 cursor-pointer"
          >
            <Plus size={16} />
            <span>Upload Resource</span>
          </button>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 2. STATS OVERVIEW CARDS */}
      {/* ========================================================================= */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        
        <div className="p-5 sm:p-6 rounded-2xl bg-white border border-[#e2ece3] shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-[#eef5ee] border border-[#d6e6d8] flex items-center justify-center text-[#2d5a3c] shrink-0">
            <BookOpen size={22} />
          </div>
          <div>
            <span className="text-[10.5px] font-bold text-[#627766] uppercase tracking-wider block">Total Resources</span>
            <span className="text-xl sm:text-2xl font-serif font-normal text-[#122417] leading-tight block mt-0.5">
              {totalCount} <span className="text-xs font-sans text-[#485e4d]">Files</span>
            </span>
          </div>
        </div>

        <div className="p-5 sm:p-6 rounded-2xl bg-white border border-[#e2ece3] shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-[#eef5ee] border border-[#d6e6d8] flex items-center justify-center text-[#2d5a3c] shrink-0">
            <FileText size={22} />
          </div>
          <div>
            <span className="text-[10.5px] font-bold text-[#627766] uppercase tracking-wider block">Brochures</span>
            <span className="text-xl sm:text-2xl font-serif font-normal text-[#122417] leading-tight block mt-0.5">
              {brochuresCount} <span className="text-xs font-sans text-[#485e4d]">Documents</span>
            </span>
          </div>
        </div>

        <div className="p-5 sm:p-6 rounded-2xl bg-white border border-[#e2ece3] shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-[#eef5ee] border border-[#d6e6d8] flex items-center justify-center text-[#2d5a3c] shrink-0">
            <Layers size={22} />
          </div>
          <div>
            <span className="text-[10.5px] font-bold text-[#627766] uppercase tracking-wider block">Courseware &amp; Kits</span>
            <span className="text-xl sm:text-2xl font-serif font-normal text-[#122417] leading-tight block mt-0.5">
              {toolkitsCount} <span className="text-xs font-sans text-[#485e4d]">Toolkits</span>
            </span>
          </div>
        </div>

        <div className="p-5 sm:p-6 rounded-2xl bg-white border border-[#e2ece3] shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-[#eef5ee] border border-[#d6e6d8] flex items-center justify-center text-[#2d5a3c] shrink-0">
            <HardDrive size={22} />
          </div>
          <div>
            <span className="text-[10.5px] font-bold text-[#627766] uppercase tracking-wider block">Guides &amp; Reports</span>
            <span className="text-xl sm:text-2xl font-serif font-normal text-[#122417] leading-tight block mt-0.5">
              {guidesCount} <span className="text-xs font-sans text-[#485e4d]">Handbooks</span>
            </span>
          </div>
        </div>

      </div>

      {/* ========================================================================= */}
      {/* 3. SEARCH & CATEGORY FILTER BAR */}
      {/* ========================================================================= */}
      <div className="p-4 sm:p-5 rounded-2xl bg-white border border-[#e2ece3] shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
        
        {/* Search Input */}
        <div className="relative flex-1 max-w-md">
          <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#738a79]" />
          <input
            type="text"
            placeholder="Search resources by title, format, or description..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-xl bg-[#f8faf8] border border-[#d8e5da] text-xs font-medium text-[#19241c] placeholder:text-[#889b8d] focus:outline-none focus:border-[#2d5a3c] focus:bg-white transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[#889b8d] hover:text-[#19241c]"
            >
              <X size={14} />
            </button>
          )}
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#1b3726] text-white shadow-xs'
                  : 'bg-[#f0f5f0] text-[#3f5444] hover:bg-[#e4ece4] hover:text-[#19241c]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

      </div>

      {/* ========================================================================= */}
      {/* 4. RESOURCE ITEMS LIST / CARDS */}
      {/* ========================================================================= */}
      {loading ? (
        <div className="flex flex-col items-center justify-center py-20 gap-3">
          <Loader2 className="animate-spin text-[#2d5a3c]" size={28} />
          <span className="text-xs font-semibold text-[#667d6c]">Loading database repository...</span>
        </div>
      ) : filtered.length === 0 ? (
        <div className="p-12 rounded-2xl bg-white border border-[#e2ece3] text-center space-y-3">
          <BookOpen size={36} className="mx-auto text-[#94a899]" />
          <h3 className="text-base font-bold text-[#142618]">No Academic Resources Found</h3>
          <p className="text-xs text-[#637667] max-w-sm mx-auto">
            {searchQuery || selectedCategory !== 'All'
              ? 'No resources match your current search or category filter. Try clearing filters.'
              : 'Your resources repository is currently empty. Click "Upload Resource" above to add the first document.'}
          </p>
          {(searchQuery || selectedCategory !== 'All') && (
            <button
              onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
              className="mt-2 text-xs font-bold text-[#2d5a3c] hover:underline"
            >
              Reset Filters
            </button>
          )}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl bg-white border border-[#e2ece3] p-6 flex flex-col justify-between shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_10px_28px_rgba(20,40,25,0.06)] hover:border-[#2d5a3c]/40 transition-all duration-300 group"
            >
              <div className="space-y-4">
                
                {/* Header info badge & actions */}
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#eef5ee] text-[#2d5a3c] border border-[#d6e6d8]">
                    {item.category || 'General'}
                  </span>
                  
                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={() => handleOpenEdit(item)}
                      className="p-1.5 rounded-lg text-[#556959] hover:text-[#1b3726] hover:bg-[#f1f6f1] transition-colors cursor-pointer"
                      title="Edit this resource"
                    >
                      <Edit3 size={15} />
                    </button>
                    <button
                      onClick={() => setDeleteConfirmId(item.id)}
                      className="p-1.5 rounded-lg text-[#889b8d] hover:text-rose-600 hover:bg-rose-50 transition-colors cursor-pointer"
                      title="Delete this resource"
                    >
                      <Trash2 size={15} />
                    </button>
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-serif font-normal text-lg sm:text-xl text-[#142618] group-hover:text-[#2d5a3c] transition-colors leading-snug">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-[#526656] leading-relaxed line-clamp-3 font-normal">
                  {item.desc || 'No detailed description specified.'}
                </p>

                {/* Meta details strip */}
                <div className="flex items-center flex-wrap gap-x-4 gap-y-2 pt-3 border-t border-[#f0f5f0] text-[11px] font-medium text-[#657a69]">
                  <div className="flex items-center gap-1.5">
                    <FileCode size={13} className="text-[#2d5a3c]" />
                    <span>{item.type || 'PDF'}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <HardDrive size={13} className="text-[#2d5a3c]" />
                    <span>{item.size || 'N/A'}</span>
                  </div>
                  {item.date && (
                    <div className="flex items-center gap-1.5">
                      <Calendar size={13} className="text-[#2d5a3c]" />
                      <span>{item.date}</span>
                    </div>
                  )}
                </div>

                {/* PDF Attachment Status Banner */}
                {item.downloadUrl && item.downloadUrl !== '#' ? (
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-emerald-50/80 border border-emerald-200/80 text-[11px] font-bold text-emerald-900">
                    <div className="flex items-center gap-1.5 min-w-0">
                      <CheckCircle2 size={13} className="text-emerald-700 shrink-0" />
                      <span className="truncate font-mono text-[10.5px]">PDF Attached</span>
                    </div>
                    <span className="text-[10px] font-mono text-emerald-800 bg-white/80 px-2 py-0.5 rounded-md border border-emerald-200 shrink-0">
                      {item.size || 'PDF'}
                    </span>
                  </div>
                ) : (
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-amber-50/80 border border-amber-200/80 text-[11px] font-bold text-amber-900">
                    <div className="flex items-center gap-1.5">
                      <AlertCircle size={13} className="text-amber-700 shrink-0" />
                      <span>No PDF Attached</span>
                    </div>
                    <button
                      onClick={() => handleOpenEdit(item)}
                      className="text-[10.5px] font-bold text-amber-800 underline hover:text-amber-950 cursor-pointer"
                    >
                      Upload Now
                    </button>
                  </div>
                )}

              </div>

              {/* Bottom Action Footer */}
              <div className="pt-4 mt-5 border-t border-[#edf3ee] flex items-center justify-between gap-3">
                {item.downloadUrl && item.downloadUrl !== '#' ? (
                  <a
                    href={item.downloadUrl}
                    download
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2d5a3c] hover:underline"
                    title="Download / Preview attached PDF"
                  >
                    <Download size={13} />
                    <span>Download PDF</span>
                  </a>
                ) : (
                  <button
                    onClick={() => handleOpenEdit(item)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-800 hover:underline cursor-pointer"
                  >
                    <UploadCloud size={13} />
                    <span>Attach PDF</span>
                  </button>
                )}

                <button
                  onClick={() => handleOpenEdit(item)}
                  className="px-3.5 py-1.5 rounded-xl bg-[#f4f7f2] hover:bg-[#eaf1e5] text-[#1b3726] border border-[#d8e5da] text-xs font-bold transition-colors cursor-pointer"
                >
                  Edit Details
                </button>
              </div>

            </div>
          ))}
        </div>
      )}

      {/* ========================================================================= */}
      {/* 5. ADD / EDIT RESOURCE MODAL */}
      {/* ========================================================================= */}
      {showModal && (
        <div className="fixed inset-0 z-50 bg-[#07170e]/50 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-200">
          <div className="w-full max-w-xl bg-white rounded-3xl border border-[#e2ece3] shadow-2xl overflow-hidden my-8">
            
            {/* Modal Header */}
            <div className="p-6 border-b border-[#e8f0e9] flex items-center justify-between bg-[#f8faf8]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#eef5ee] border border-[#d6e6d8] flex items-center justify-center text-[#2d5a3c]">
                  <BookOpen size={20} />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-[#142618]">
                    {editingId ? 'Edit Academic Resource' : 'Publish Academic Resource'}
                  </h3>
                  <span className="text-[11px] text-[#637667]">
                    Fill in document metadata to synchronize with public download page.
                  </span>
                </div>
              </div>
              <button
                onClick={() => setShowModal(false)}
                className="p-2 rounded-xl text-[#718575] hover:text-[#142618] hover:bg-[#ebf2ec] transition-colors cursor-pointer"
              >
                <X size={18} />
              </button>
            </div>

            {/* Modal Body Form */}
            <form onSubmit={handleSaveResource} className="p-6 space-y-4">
              
              {/* Title */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-[#1c2e21] block">
                  Document / Resource Title *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. 4th SIET International Conference Official Brochure"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#fbfdfb] border border-[#d5e2d6] text-xs font-medium text-[#19241c] focus:outline-none focus:border-[#2d5a3c] focus:bg-white"
                />
              </div>

              {/* Category & Type */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-[#1c2e21] block">
                    Category *
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#fbfdfb] border border-[#d5e2d6] text-xs font-medium text-[#19241c] focus:outline-none focus:border-[#2d5a3c]"
                  >
                    {formCategories.map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-[#1c2e21] block">
                    File Type / Format *
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. PDF, PDF / Interactive, ZIP"
                    value={formData.type}
                    onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#fbfdfb] border border-[#d5e2d6] text-xs font-medium text-[#19241c] focus:outline-none focus:border-[#2d5a3c]"
                  />
                </div>
              </div>

              {/* Size & Date */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-[#1c2e21] block">
                    File Size
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 1.2 MB, 876 KB"
                    value={formData.size}
                    onChange={(e) => setFormData({ ...formData, size: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#fbfdfb] border border-[#d5e2d6] text-xs font-medium text-[#19241c] focus:outline-none focus:border-[#2d5a3c]"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-[#1c2e21] block">
                    Publication / Term Date
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. March 2025, Semester II 2025"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#fbfdfb] border border-[#d5e2d6] text-xs font-medium text-[#19241c] focus:outline-none focus:border-[#2d5a3c]"
                  />
                </div>
              </div>

              {/* PDF Document Upload */}
              <div className="pt-2 pb-1">
                <PdfUploader
                  value={formData.downloadUrl}
                  onChange={(url) => setFormData(prev => ({ ...prev, downloadUrl: url }))}
                  onFileDetails={({ size, type, filename }) => {
                    setFormData(prev => ({
                      ...prev,
                      size: size || prev.size,
                      type: type || prev.type,
                      title: prev.title.trim() ? prev.title : filename.replace(/\.[^/.]+$/, '').replace(/[-_]/g, ' ')
                    }));
                  }}
                  category="resources"
                  label="Attach Downloadable PDF Document"
                  helperText="Upload official PDF file from your device (stored in public/admin/resources/) so students & educators can download it."
                />
              </div>

              {/* Description */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-[#1c2e21] block">
                  Description / Synopsis
                </label>
                <textarea
                  rows={3}
                  placeholder="Outline key topics covered, intended audience, authors or mentors..."
                  value={formData.desc}
                  onChange={(e) => setFormData({ ...formData, desc: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#fbfdfb] border border-[#d5e2d6] text-xs font-medium text-[#19241c] focus:outline-none focus:border-[#2d5a3c]"
                />
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-[#e8f0e9] flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2.5 rounded-xl border border-[#d8e5da] text-xs font-bold text-[#4e6453] hover:bg-[#f1f6f1] transition-colors cursor-pointer"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  disabled={saving}
                  className="px-5 py-2.5 rounded-xl bg-[#1b3726] hover:bg-[#254d35] text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-sm transition-all active:scale-98 disabled:opacity-50 cursor-pointer"
                >
                  {saving ? <Loader2 size={15} className="animate-spin" /> : <Check size={15} />}
                  <span>{saving ? 'Saving...' : editingId ? 'Save Changes' : 'Publish Resource'}</span>
                </button>
              </div>

            </form>

          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 6. DELETE CONFIRMATION MODAL */}
      {/* ========================================================================= */}
      {deleteConfirmId && (
        <div className="fixed inset-0 z-50 bg-[#07170e]/50 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="w-full max-w-md bg-white rounded-3xl border border-[#e2ece3] shadow-2xl p-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-rose-50 border border-rose-200 flex items-center justify-center text-rose-600">
                <Trash2 size={20} />
              </div>
              <div>
                <h3 className="font-serif text-base font-bold text-[#142618]">
                  Delete Academic Resource?
                </h3>
                <span className="text-xs text-[#667d6c]">
                  This action is permanent and will remove the file from the portal.
                </span>
              </div>
            </div>

            <div className="pt-3 border-t border-[#edf3ee] flex items-center justify-end gap-2.5">
              <button
                onClick={() => setDeleteConfirmId(null)}
                className="px-4 py-2 rounded-xl border border-[#d8e5da] text-xs font-bold text-[#4e6453] hover:bg-[#f1f6f1] transition-colors cursor-pointer"
              >
                Keep Resource
              </button>
              <button
                onClick={() => handleDeleteResource(deleteConfirmId)}
                className="px-4 py-2 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold transition-colors cursor-pointer"
              >
                Confirm Delete
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
