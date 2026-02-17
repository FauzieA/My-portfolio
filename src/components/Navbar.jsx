import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes, FaDownload, FaSun, FaMoon } from "react-icons/fa";
import { HiOutlineHome, HiOutlineBriefcase, HiOutlineChatBubbleLeftRight } from "react-icons/hi2";
import { useNavigate, useLocation } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

import resumePdf from "../assets/resume.pdf";

const darkModeNavLinks = [
  { name: "About", id: "about", index: "01" },
  { name: "Projects", id: "projects", index: "02" },
  { name: "Experience", id: "experience", index: "03" },
  { name: "Skills", id: "skills", index: "04" },
  { name: "Contact", id: "contact", index: "05" },
];

const lightModeNavItems = [
  { name: 'INDEX', path: '#hero', icon: HiOutlineHome },
  { name: 'WORKS', path: '#projects', icon: HiOutlineBriefcase },
  { name: 'TALK', path: '#contact', icon: HiOutlineChatBubbleLeftRight },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();
  
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

  const handleScroll = (e, id) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, null, id);
    }
  };

  return (
    <>
      {/* DARK MODE NAVBAR (System) */}
      {isDarkMode ? (
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
                {darkModeNavLinks.map((link) => (
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
                
                {/* THEME TOGGLE BUTTON */}
                <button
                  onClick={toggleTheme}
                  className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#C2A878]/10 hover:bg-[#C2A878]/20 text-[#C2A878] transition-all"
                  title="Switch to light mode"
                >
                  <FaSun size={16} />
                </button>
                
                {/* SHARP RESUME BUTTON */}
                <a
                  href={resumePdf} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-6 py-2.5 bg-transparent border border-[#C2A878] text-[#C2A878] text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-[#C2A878]/10 transition-all relative group"
                >
                  Resume 
                  <FaDownload size={10} className="group-hover:translate-y-0.5 transition-transform" />
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

          {/* MOBILE MENU OVERLAY - Dark Mode */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, x: "100%" }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: "100%" }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="fixed inset-0 z-40 bg-[#07131d] flex flex-col justify-center px-10 md:hidden font-mono"
              >
                <div className="absolute inset-0 opacity-5 pointer-events-none">
                    <div className="absolute left-10 top-0 w-px h-full bg-white"></div>
                    <div className="absolute right-10 top-0 w-px h-full bg-white"></div>
                </div>

                <div className="flex flex-col gap-10 relative z-10">
                  {darkModeNavLinks.map((link) => (
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
                  
                  <button
                    onClick={toggleTheme}
                    className="mt-4 flex items-center gap-3 text-xl font-bold text-[#C2A878]"
                  >
                    <FaSun size={24} />
                    Light Mode
                  </button>
                  
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
      ) : (
        /* LIGHT MODE NAVBAR (Creative) */
        <nav className="fixed top-1/2 -translate-y-1/2 left-6 z-50 flex flex-col gap-4 hidden lg:flex">
          <a 
            href="#hero" 
            onClick={(e) => handleScroll(e, '#hero')}
            className="mb-6 flex flex-col items-center group cursor-pointer"
          >
            <div className="font-quicksand font-black text-xl tracking-tighter text-[#4A4E69] group-hover:text-[#FFB7C5] transition-colors">
              FAA<span className="text-[#FFB7C5]">.</span>
            </div>
            <div className="w-4 h-px bg-[#4A4E69]/20 mt-1 group-hover:w-8 transition-all" />
          </a>

          {lightModeNavItems.map((item, index) => {
            const Icon = item.icon;
            const isActive = location.hash === item.path;

            return (
              <motion.div
                key={item.name}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <a
                  href={item.path}
                  onClick={(e) => handleScroll(e, item.path)}
                  className={`
                    group relative flex items-center justify-center w-12 h-12 rounded-2xl transition-all duration-500
                    ${isActive 
                      ? 'bg-[#4A4E69] text-white shadow-lg shadow-[#4A4E69]/20 scale-110' 
                      : 'bg-white text-[#4A4E69]/60 border border-[#4A4E69]/5 hover:border-[#FFB7C5] hover:text-[#4A4E69] shadow-sm'}
                  `}
                >
                  <div className="absolute left-16 px-3 py-1.5 bg-[#4A4E69] text-white text-[9px] font-black tracking-[0.2em] rounded opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all pointer-events-none whitespace-nowrap">
                    {item.name}
                    <div className="absolute top-1/2 -left-1 -translate-y-1/2 w-2 h-2 bg-[#4A4E69] rotate-45" />
                  </div>
                  
                  <Icon size={20} strokeWidth={1.5} />
                </a>
              </motion.div>
            );
          })}

          {/* THEME TOGGLE - Light Mode */}
          <motion.button
            onClick={toggleTheme}
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="w-12 h-12 bg-[#FFB7C5]/10 border border-[#FFB7C5]/20 rounded-2xl flex items-center justify-center hover:bg-[#FFB7C5] hover:text-white group transition-all duration-500 mt-2"
            title="Switch to dark mode"
          >
            <FaMoon className="text-[#FFB7C5] group-hover:text-white text-lg" />
          </motion.button>

          <motion.a
            href={resumePdf}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="w-12 h-20 bg-[#FFB7C5]/10 border border-[#FFB7C5]/20 rounded-2xl flex items-center justify-center hover:bg-[#FFB7C5] hover:text-white group transition-all duration-500 mt-2"
          >
            <span className="rotate-90 text-[9px] font-black tracking-[0.2em] text-[#FFB7C5] group-hover:text-white">
              RESUME
            </span>
          </motion.a>
        </nav>
      )}
    </>
  );
}