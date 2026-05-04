import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaDownload, FaArrowRight } from "react-icons/fa";
import { HiMenuAlt4, HiX } from "react-icons/hi";

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", id: "about" },
    { name: "Portfolio", id: "portfolio" },
    { name: "Experience", id: "experience" },
    { name: "Skills", id: "skills" },
    { name: "Contact", id: "contact" },
  ];

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* --- Desktop: Minimalist Floating Frame --- */}
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 px-6 md:px-12 ${isScrolled ? "py-4" : "py-10"}`}>
        <div className="max-w-[1800px] mx-auto flex justify-between items-center">
          
          {/* Logo with Creative Bracket */}
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} 
            className="flex items-center gap-2 group"
          >
            <span className="text-[#001F3F] font-serif text-2xl italic group-hover:text-[#FFB6C1] transition-colors">Fauziyya</span>
            <div className="h-px w-8 bg-[#001F3F] group-hover:w-12 transition-all" />
          </button>

          {/* Centered Navigation Glass-morphism */}
          <div className={`hidden md:flex items-center gap-1 p-1 rounded-full border transition-all duration-500 ${
            isScrolled ? "bg-white/80 backdrop-blur-md border-[#f0f0f0] shadow-sm" : "bg-transparent border-transparent"
          }`}>
            {navLinks.map((link) => (
              <button 
                key={link.name} 
                onClick={() => scrollToSection(link.id)} 
                className="px-6 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-[#001F3F] hover:text-[#FFB6C1] transition-colors relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-[#FFB6C1] -translate-x-1/2 group-hover:w-4 transition-all" />
              </button>
            ))}
          </div>

          {/* Action Button: The "Brief" */}
          <div className="flex items-center gap-6">
            <a 
              href="/resume.pdf" 
              target="_blank" 
              className="hidden lg:flex items-center gap-3 group text-[#001F3F]"
            >
              <span className="text-[10px] font-black uppercase tracking-widest border-b border-[#001F3F] pb-1">Download CV</span>
              <FaDownload size={12} className="group-hover:translate-y-1 transition-transform" />
            </a>

            <button 
              className="md:hidden p-3 bg-[#001F3F] text-white" 
              onClick={() => setMobileMenuOpen(true)}
            >
              <HiMenuAlt4 size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* --- Creative Mobile Overlay --- */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }} 
            className="fixed inset-0 z-[100] bg-[#001F3F] flex flex-col p-8"
          >
            <div className="flex justify-between items-center mb-20">
              <span className="text-[#FFB6C1] font-serif italic text-2xl">Navigation</span>
              <button onClick={() => setMobileMenuOpen(false)} className="text-white p-2">
                <HiX size={30} />
              </button>
            </div>

            <div className="flex flex-col gap-8">
              {navLinks.map((link, i) => (
                <motion.button 
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                  key={link.name} 
                  onClick={() => scrollToSection(link.id)} 
                  className="flex items-center justify-between group"
                >
                  <span className="text-5xl font-serif italic text-white group-hover:text-[#FFB6C1] transition-colors">
                    {link.name}
                  </span>
                  <FaArrowRight className="text-[#FFB6C1] opacity-0 group-hover:opacity-100 transition-all -translate-x-4 group-hover:translate-x-0" />
                </motion.button>
              ))}
            </div>

            <div className="mt-auto border-t border-white/10 pt-8 flex justify-between items-end">
              <div>
                <p className="text-[#FFB6C1] text-[10px] uppercase tracking-widest mb-2 font-bold">Contact</p>
                <p className="text-white text-sm">fauxieahmed22@gmail.com</p>
              </div>
              <div className="flex gap-4">
                <span className="w-2 h-2 rounded-full bg-[#FFB6C1] animate-pulse" />
                <span className="text-white/40 text-[10px] uppercase tracking-widest font-bold">Available Now</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}