'use client';
import React from 'react';
import { Leaf, Sparkles } from 'lucide-react';

export default function LoadingSpinner({ message = 'Loading...', fullScreen = false }) {
  const content = (
    <div className="flex flex-col items-center justify-center gap-4 select-none">
      {/* Animated Glowing Ring Container */}
      <div className="relative flex items-center justify-center">
        {/* Ambient Glow */}
        <div className="absolute w-20 h-20 bg-[#a2d45e]/20 rounded-full blur-xl animate-pulse" />
        
        {/* Outer Rotating Gradient Ring */}
        <div className="w-16 h-16 rounded-full border-[3px] border-transparent border-t-[#2d5a3c] border-r-[#a2d45e] border-b-[#4ade80] animate-spin shadow-[0_0_15px_rgba(45,90,60,0.3)]" />
        
        {/* Inner Counter-Rotating Ring */}
        <div 
          className="absolute w-11 h-11 rounded-full border-[2px] border-transparent border-b-[#1b3726] border-l-[#22c55e] animate-spin" 
          style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}
        />
        
        {/* Center Organic Icon */}
        <div className="absolute flex items-center justify-center w-8 h-8 rounded-full bg-white/90 dark:bg-[#0c1e14]/90 backdrop-blur-md shadow-inner">
          <Leaf size={15} className="text-[#2d5a3c] dark:text-[#a2d45e] animate-pulse" />
        </div>
      </div>

      {/* Message and loading dots */}
      <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-[#2d5a3c] dark:text-[#a2d45e]">
        <span>{message}</span>
        <span className="inline-flex gap-0.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#2d5a3c] dark:bg-[#a2d45e] animate-bounce [animation-delay:-0.3s]" />
          <span className="w-1.5 h-1.5 rounded-full bg-[#2d5a3c] dark:bg-[#a2d45e] animate-bounce [animation-delay:-0.15s]" />
          <span className="w-1.5 h-1.5 rounded-full bg-[#2d5a3c] dark:bg-[#a2d45e] animate-bounce" />
        </span>
      </div>
    </div>
  );

  if (fullScreen) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#f3f5ed]/80 dark:bg-[#031008]/80 backdrop-blur-md transition-all duration-300">
        {content}
      </div>
    );
  }

  return (
    <div className="w-full py-16 flex items-center justify-center">
      {content}
    </div>
  );
}
