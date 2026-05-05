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
    window.location.hash = sectionId;
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <motion.nav 
      layout
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className={`fixed z-[100] ${
        isScrolled 
          ? "top-0 left-0 w-full bg-white/90 backdrop-blur-md border-b border-black/5 py-4 px-10" 
          : "top-1/2 right-6 -translate-y-1/2 hidden lg:flex flex-col items-center"
      }`}
    >
      <motion.div 
        layout
        className={`flex items-center ${
          isScrolled ? "max-w-6xl mx-auto w-full justify-between flex-row" : "flex-col gap-12"
        }`}
      >
        
        {/* Logo Morph */}
        <AnimatePresence mode="wait">
          {isScrolled && (
            <motion.span 
              initial={{ opacity: 0, x: -10 }} 
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              className="text-[10px] font-black uppercase tracking-[0.4em] text-[#001F3F]"
            >
              F. Ahmed
            </motion.span>
          )}
        </AnimatePresence>

        {/* Links Container */}
        <motion.div 
          layout
          className={`flex items-center ${isScrolled ? "flex-row gap-8" : "flex-col gap-2"}`}
        >
          {/* Top Decor Line */}
          {!isScrolled && (
            <motion.div layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="h-10 w-[1px] bg-[#001F3F]/10 mb-4" />
          )}
          
          {navLinks.map((link) => (
            <motion.button 
              layout
              key={link} 
              onClick={() => handleNavClick(link)}
              className={`text-[9px] uppercase tracking-[0.4em] font-bold transition-colors hover:text-[#FFB6C1] cursor-pointer whitespace-nowrap flex items-center justify-center ${
                isScrolled 
                  ? "text-[#001F3F]/60 rotate-0" 
                
                  : "text-[#001F3F]/30 -rotate-90 h-24 w-18"
              }`}
            >
              {link}
            </motion.button>
          ))}

          {/* Bottom Decor Line */}
          {!isScrolled && (
            <motion.div layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="h-10 w-[1px] bg-[#001F3F]/10 mt-4" />
          )}
        </motion.div>

        {/* Action Button */}
        <AnimatePresence>
          {isScrolled && (
            <motion.button 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="text-[9px] font-black uppercase tracking-[0.3em] border border-[#001F3F] px-4 py-2 hover:bg-[#001F3F] hover:text-white transition-all"
            >
              CV
            </motion.button>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.nav>
  );
}