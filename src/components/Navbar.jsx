import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes, FaDownload } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom"; 

import resumePdf from "../assets/resume.pdf";

const navLinks = [
  { name: "About", id: "about", index: "01" },
  { name: "Projects", id: "projects", index: "02" },
  { name: "Experience", id: "experience", index: "03" },
  { name: "Skills", id: "skills", index: "04" },
  { name: "Contact", id: "contact", index: "05" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled 
            ? "bg-[#07131d]/95 border-b border-white/10 py-3"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 flex justify-between items-center font-mono">
          
          {/* LOGO - Sharp & Monospace */}
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} 
            className="text-xl font-bold text-[#E8EAEF] tracking-tighter"
          >
            FAUZIYYA<span className="text-[#C2A878]">_</span>
          </button>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.id)}
                className="group flex flex-col items-start"
              >
                <span className="text-[9px] text-[#C2A878] mb-0.5 opacity-0 group-hover:opacity-100 transition-opacity">
                  {link.index}
                </span>
                <span className="text-xs font-bold text-[#C9CCD3] group-hover:text-white transition-colors uppercase tracking-widest">
                  {link.name}
                </span>
              </button>
            ))}
            
            {/* SHARP RESUME BUTTON */}
            <a
              href={resumePdf} 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-2.5 bg-transparent border border-[#C2A878] text-[#C2A878] text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-[#C2A878]/10 transition-all relative group"
            >
              Resume 
              <FaDownload size={10} className="group-hover:translate-y-0.5 transition-transform" />
              {/* Corner accent for the button */}
              <div className="absolute top-0 right-0 w-1.5 h-1.5 bg-[#C2A878]"></div>
            </a>
          </div>

          {/* MOBILE TOGGLE */}
          <button
            className="md:hidden text-[#C2A878] p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </nav>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 bg-[#07131d] flex flex-col justify-center px-10 md:hidden font-mono"
          >
            {/* Tech background lines for mobile menu */}
            <div className="absolute inset-0 opacity-5 pointer-events-none">
                <div className="absolute left-10 top-0 w-px h-full bg-white"></div>
                <div className="absolute right-10 top-0 w-px h-full bg-white"></div>
            </div>

            <div className="flex flex-col gap-10 relative z-10">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.id)}
                  className="flex flex-col items-start group"
                >
                  <span className="text-xs text-[#C2A878] mb-1 font-bold">
                    // {link.index}
                  </span>
                  <span className="text-4xl font-bold text-[#E8EAEF] group-hover:text-[#C2A878] transition-colors uppercase">
                    {link.name}
                  </span>
                </button>
              ))}
              
              <a
                href={resumePdf}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 text-xl font-bold text-[#07131d] bg-[#C2A878] px-6 py-4 flex items-center justify-between"
              >
                DOWNLOAD_RESUME <FaDownload />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}