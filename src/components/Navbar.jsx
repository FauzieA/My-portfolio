import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = ["Intro", "Services", "Portfolio", "Experience", "Skills", "Contact"];

  const handleNavClick = (link) => {
    const sectionId = link.toLowerCase();
    // Use hash navigation for GitHub Pages compatibility
    window.location.hash = sectionId;
    // Ensure smooth scroll after hash changes
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <nav className={`fixed z-[100] transition-all duration-700 ease-in-out ${
      isScrolled 
        ? "top-0 left-0 w-full bg-white/90 backdrop-blur-md border-b border-black/5 py-4 px-10 flex-row" 
        : "top-1/2 right-10 -translate-y-1/2 flex-col hidden lg:flex"
    }`}>
      <div className={`flex items-center gap-8 ${isScrolled ? "max-w-6xl mx-auto w-full justify-between" : "flex-col"}`}>
        
        {/* Logo only appears when scrolled for that "Yan" minimalist header */}
        <AnimatePresence>
          {isScrolled && (
            <motion.span 
              initial={{ opacity: 0, x: -10 }} 
              animate={{ opacity: 1, x: 0 }}
              className="text-[10px] font-black uppercase tracking-[0.4em] text-[#001F3F]"
            >
              F. Ahmed
            </motion.span>
          )}
        </AnimatePresence>

        <div className={`flex items-center gap-8 ${isScrolled ? "flex-row" : "flex-col"}`}>
          {!isScrolled && <div className="h-12 w-[1px] bg-[#001F3F]/10 mb-4" />}
          
          {navLinks.map((link) => (
            <button 
              key={link} 
              onClick={() => handleNavClick(link)}
              className={`text-[9px] uppercase tracking-[0.4em] font-bold transition-all hover:text-[#FFB6C1] cursor-pointer ${
                isScrolled ? "text-[#001F3F]/60" : "text-[#001F3F]/30 [writing-mode:vertical-lr] rotate-180"
              }`}
            >
              {link}
            </button>
          ))}

          {!isScrolled && <div className="h-12 w-[1px] bg-[#001F3F]/10 mt-4" />}
        </div>

        {isScrolled && (
          <button className="text-[9px] font-black uppercase tracking-[0.3em] border border-[#001F3F] px-4 py-2 hover:bg-[#001F3F] hover:text-white transition-all">
            CV
          </button>
        )}
      </div>
    </nav>
  );
}