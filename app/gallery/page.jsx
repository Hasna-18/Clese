'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Leaf, 
  Image as ImageIcon, 
  Sparkles, 
  Filter, 
  X, 
  ArrowRight, 
  Calendar, 
  MapPin, 
  ChevronRight,
  Maximize2
} from 'lucide-react';

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeCategory, setActiveCategory] = useState('All');

  const galleryCategories = ['All', 'Conferences', 'Camps', 'Labs', 'Workshops', 'Campus'];

  const galleryItems = [
    {
      id: 1,
      title: "4th SIET International Conference on Educational Technology",
      category: "Conferences",
      image: "/events/conference.jpg",
      description: "Inauguration by Minister Sri. V. Sivankutty & Chief Guest Prof. Jan De Waters (Clarkson University, USA)."
    },
    {
      id: 2,
      title: "State-wide 'STEM 4 Girls' Camp Series",
      category: "Camps",
      image: "/events/workshop.jpg",
      description: "Inauguration by Hon'ble Minister for Finance Sri. K. N. Balagopal for ICSSR funded STEM camps."
    },
    {
      id: 3,
      title: "Residential STEM Camp for Gifted Students at Manvila",
      category: "Camps",
      image: "/events/events_book_plant.jpg",
      description: "Residential STEM training held at Agriculture Cooperative Staff Training Institute, Manvila, Thiruvananthapuram."
    },
    {
      id: 4,
      title: "LEnSE Dedicated STEM Learning Lab & Robotics Workbenches",
      category: "Labs",
      image: "/events/scholar.jpg",
      description: "Hands-on experiential STEM learning lab providing activity-based robotics and microcontroller training."
    },
    {
      id: 5,
      title: "ELTAI & Hornby Trust (UK) Secondary Teacher Workshop",
      category: "Workshops",
      image: "/events/sustainability.jpg",
      description: "Secondary level English teacher transformation workshop at Centre for Under Graduate Studies."
    },
    {
      id: 6,
      title: "University of Kerala Kariavattom Campus Architecture",
      category: "Campus",
      image: "/about/about4.png",
      description: "Department of Education & LEnSE Headquarters, Kariavattom Campus, Thiruvananthapuram."
    }
  ];

  const filteredGallery = activeCategory === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#f3f5ed] text-[#19241c] font-sans pb-28 pt-28 sm:pt-36 relative overflow-hidden selection:bg-[#a2d45e]/30">
      
      {/* Ambient glows */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[20%] -left-40 w-[600px] h-[600px] bg-[#e2edd8]/40 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-8 w-[650px] h-[650px] bg-[#dbe8d0]/40 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">

        {/* ========================================================================= */}
        {/* 1. HERO SECTION */}
        {/* ========================================================================= */}
        <div className="relative">
          
          <div className="relative z-10 max-w-2xl space-y-4 pt-2">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs font-semibold text-[#485b4d]">
              <Leaf size={14} className="text-[#2d5a3c] fill-[#2d5a3c]" />
              <Link href="/" className="hover:text-[#1b3726] transition-colors">Home</Link>
              <span className="text-[#879b8c]">&gt;</span>
              <span className="text-[#1b3726] font-bold">Media &amp; Gallery</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[3.8rem] font-normal text-[#122016] leading-[1.1] tracking-tight font-serif">
              Media &amp; Image Gallery
            </h1>

            <p className="text-[#405245] text-sm sm:text-[14.5px] leading-[1.7] max-w-xl font-normal">
              Explore dynamic photographs, laboratory facilities, state camp workshops, and conference memories across LEnSE initiatives.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="pt-6 flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
            {galleryCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#1b3726] text-white shadow-sm'
                    : 'bg-white/80 hover:bg-white text-[#384c3e] border border-[#dbe6dc]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

        </div>

        {/* ========================================================================= */}
        {/* 2. GALLERY PHOTO GRID */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGallery.map((item) => (
            <div 
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="group rounded-[2rem] bg-white/90 backdrop-blur-xl border border-white/95 p-4 space-y-3 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-lg hover:-translate-y-1 transition-all cursor-pointer"
            >
              <div className="h-56 rounded-2xl overflow-hidden bg-slate-100 relative shadow-xs">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700" 
                  onError={(e) => { e.currentTarget.src = "/events/events_book_plant.jpg"; }}
                />
                
                {/* Category Badge */}
                <div className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full bg-[#0d2216]/85 backdrop-blur-md text-[#a2d45e] text-[9px] font-bold uppercase tracking-wider">
                  {item.category}
                </div>

                {/* Maximize Icon */}
                <div className="absolute bottom-2.5 right-2.5 w-8 h-8 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-[#1b3726] shadow-sm group-hover:scale-110 transition-transform">
                  <Maximize2 size={13} />
                </div>
              </div>

              <div className="space-y-1 px-1">
                <h3 className="text-[15px] font-serif font-semibold text-[#14261a] leading-snug group-hover:text-[#2d5a3c] transition-colors">
                  {item.title}
                </h3>
                <p className="text-[12px] text-[#4d6052] leading-relaxed line-clamp-2">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* ========================================================================= */}
      {/* 3. LIGHTBOX MODAL */}
      {/* ========================================================================= */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-[#0d2216]/80 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div 
            className="rounded-[2rem] bg-white max-w-2xl w-full p-6 space-y-4 shadow-2xl animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              <span className="px-2.5 py-0.5 rounded-md bg-[#eaf1e4] text-[#2d5a3c] text-[10px] font-bold uppercase tracking-wider">
                {selectedImage.category}
              </span>
              <button 
                onClick={() => setSelectedImage(null)}
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors cursor-pointer"
              >
                <X size={16} />
              </button>
            </div>

            <div className="h-72 sm:h-96 rounded-2xl overflow-hidden bg-slate-100">
              <img 
                src={selectedImage.image} 
                alt={selectedImage.title} 
                className="w-full h-full object-cover" 
                onError={(e) => { e.currentTarget.src = "/events/events_book_plant.jpg"; }}
              />
            </div>

            <div className="space-y-1">
              <h3 className="text-xl font-serif font-bold text-[#14261a]">
                {selectedImage.title}
              </h3>
              <p className="text-xs text-[#526656] leading-relaxed">
                {selectedImage.description}
              </p>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
