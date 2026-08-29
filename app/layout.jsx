'use client';
import React from 'react';
import '../src/style.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ToastProvider } from '../components/Toast';

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark" className="dark">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>CLESE • Centre for Learning Engineering & Sustainability Education</title>
        <meta 
          name="description" 
          content="CLESE - Pioneering inclusive, tech-driven, and sustainability-focused educational research and innovation." 
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body className="bg-[#031008] text-slate-100 min-h-screen antialiased selection:bg-[#a2d45e]/30 selection:text-white">
        <ToastProvider>
          <div id="app" className="relative min-h-screen flex flex-col justify-between bg-[#031008]">
            {/* Top Navigation */}
            <Navbar />

            {/* Page Content */}
            <main className="main-content-wrapper flex-grow">
              {children}
            </main>

            {/* Global Footer */}
            <Footer />
          </div>
        </ToastProvider>
      </body>
    </html>
  );
}
