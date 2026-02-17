# CODE STRUCTURE - ProjectDetails.jsx & Navbar.jsx

## ProjectDetails.jsx - Exact Structure

```jsx
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";           ← ADDED
import FloatingShapes from "../components/FloatingShapes";
import { projects } from "../data/Projects";
import { FaArrowLeft, FaExternalLinkAlt, FaCode, FaCheckSquare, FaLayerGroup, FaHashtag } from "react-icons/fa";

const ProjectDetail = () => {
  const { projectId } = useParams();
  const project = projects.find((p) => p.id === projectId);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const { isDarkMode } = useTheme();                          ← ADDED

  useEffect(() => { window.scrollTo(0, 0); }, []);

  if (!project) return <div className={...}>{...}</div>;

  return (
    <>
      {/* CONDITIONAL RENDERING - Main Structure */}
      {isDarkMode ? (                                          ← ROOT CONDITIONAL
        
        /* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
        /* DARK MODE (System) */
        /* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
        <section className="w-full min-h-screen relative bg-[#07131d] overflow-hidden">
          
          {/* Background Grid Lines */}
          <div className="absolute inset-0 flex justify-between pointer-events-none opacity-5">
            <div className="w-[1px] h-full bg-white"></div>
            <div className="w-[1px] h-full bg-white hidden md:block"></div>
            <div className="w-[1px] h-full bg-white"></div>
          </div>
          
          {/* FloatingShapes - Dark Mode Only */}
          <FloatingShapes />

          {/* Fixed Top Navigation Bar */}
          <div className="fixed top-0 left-0 w-full z-[60] px-6 py-4 bg-[#07131d] border-b border-white/5 flex justify-between items-center">
            <Link to="/" className="flex items-center gap-3 text-[#C9CCD3] hover:text-[#C2A878] ...">
              <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" /> 
              Return to Portfolio
            </Link>
            
            {project.link && (
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="hidden md:flex items-center gap-2 px-6 py-2 bg-[#C2A878] text-[#07131d] ...">
                Live Project <FaExternalLinkAlt size={12}/>
              </a>
            )}
          </div>

          {/* Header with Project Title */}
          <div className="max-w-7xl mx-auto px-6 md:px-12 pt-32 pb-12 relative z-10">
            <div className="flex flex-col md:flex-row items-start justify-between gap-8 border-b border-white/10 pb-12">
              <div className="max-w-3xl">
                <div className="flex items-center gap-4 mb-6">
                   <span className="text-[#C2A878] font-mono text-sm">// REF: {project.id}</span>
                   <span className="px-2 py-1 bg-[#C2A878]/10 text-[#C2A878] text-[10px] font-mono border border-[#C2A878]/20 uppercase">{project.category}</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-[#E8EAEF] leading-tight mb-6">{project.title}</h1>
                <p className="text-[#C9CCD3]/60 font-mono text-sm max-w-xl">{project.tag}</p>
              </div>
            </div>
          </div>

          {/* Main Content Grid: 2/3 + 1/3 */}
          <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-3 gap-16 pb-24 relative z-10">
            
            {/* LEFT: 2/3 - Content */}
            <div className="lg:col-span-2">
              
              {/* Background Description */}
              <div className="mb-12">
                <h3 className="text-xl font-bold text-[#E8EAEF] mb-6 border-l-2 border-[#C2A878] pl-4">Project Background</h3>
                <p className="text-[#C9CCD3] text-lg leading-loose font-light">{project.detailedDescription}</p>
              </div>

              {/* Image Gallery */}
              <div className="mb-12">
                <h3 className="text-xl font-bold text-[#E8EAEF] mb-8 border-l-2 border-[#C2A878] pl-4">Gallery</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {project.images.map((img, i) => (
                    <div key={i} className="group relative cursor-zoom-in bg-[#0d1b27]" onClick={() => setGalleryOpen(true)}>
                      <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-[#C2A878] z-20" />
                      <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-[#C2A878] z-20" />
                      <img src={img.src} alt={img.caption} className="w-full h-56 object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                      <div className="absolute bottom-0 left-0 w-full p-2 bg-[#0d1b27]/90 text-[10px] text-[#C2A878] font-mono text-center border-t border-white/5">0{i + 1} // {img.caption}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT: 1/3 - Sticky Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-32">
                
                {/* Technologies */}
                <div className="bg-[#0d1b27] border border-white/10 p-6 mb-8 relative">
                  <div className="absolute top-0 left-0 w-full h-[2px] bg-[#C2A878]" />
                  <h4 className="text-[#E8EAEF] font-bold mb-6 flex items-center gap-2 font-mono text-sm uppercase tracking-wider"><FaCode className="text-[#C2A878]" /> Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech, i) => <span key={i} className="px-3 py-1 bg-[#1a2c3d] text-[#C9CCD3] text-xs font-mono border border-white/5 hover:border-[#C2A878]">{tech}</span>)}
                  </div>
                </div>

                {/* Features */}
                <div className="bg-[#0d1b27] border border-white/10 p-6 relative">
                  <div className="absolute top-0 left-0 w-full h-[2px] bg-[#C2A878]" />
                  <h4 className="text-[#E8EAEF] font-bold mb-6 flex items-center gap-2 font-mono text-sm uppercase tracking-wider"><FaLayerGroup className="text-[#C2A878]" /> Core Features</h4>
                  <ul className="space-y-4">
                    {project.features.map((f, i) => <li key={i} className="flex items-start gap-3 text-sm text-[#C9CCD3] font-light"><FaCheckSquare className="mt-1 text-[#C2A878] text-xs flex-shrink-0" /> {f}</li>)}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Fullscreen Gallery Modal */}
          <AnimatePresence>
            {galleryOpen && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] bg-[#07131d]/95 flex items-center justify-center p-4">
                <button className="absolute top-6 right-6 text-[#C2A878] font-mono text-sm z-50 border border-[#C2A878] px-4 py-2 hover:bg-[#C2A878]/10" onClick={() => setGalleryOpen(false)}>CLOSE_GALLERY [ESC]</button>
                <div className="w-full max-w-6xl h-full overflow-y-auto py-10 px-4 flex flex-col items-center">
                   {project.images.map((img, i) => (
                     <div key={i} className="mb-20 w-full flex flex-col items-center">
                        <img src={img.src} alt={img.caption} className="max-w-full max-h-[85vh] border border-white/10" />
                        <p className="mt-4 text-[#C2A878] font-mono text-xs uppercase tracking-widest border-b border-[#C2A878] pb-1">0{i + 1} // {img.caption}</p>
                     </div>
                   ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </section>

      ) : (                                                    ← ELSE CLAUSE
        
        /* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
        /* LIGHT MODE (Creative) */
        /* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          className="bg-[#FDFBF7] min-h-screen py-24 pl-4 md:pl-32 pr-4 md:pr-12 lg:pr-24 relative overflow-x-hidden"
        >
          {/* Felt Texture Background - Light Mode Only */}
          <div className="absolute inset-0 opacity-[0.3] pointer-events-none mix-blend-multiply bg-[url('https://www.transparenttextures.com/patterns/felt.png')]" />
          
          <div className="max-w-[1400px] mx-auto relative z-10">
            
            {/* Header: Back Button + File No */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-0 mb-16 md:mb-24">
              <Link to="/" className="group inline-flex items-center gap-4 text-[11px] font-bold uppercase tracking-[0.3em] text-[#4A4E69] bg-white px-6 md:px-8 py-2 md:py-3 rounded-full border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" /> 
                <span className="hidden sm:inline">Return to Archive</span>
                <span className="sm:hidden">Back</span>
              </Link>
              <div className="border border-[#4A4E69]/10 px-4 md:px-6 py-2 flex items-center rounded-full bg-[#4A4E69]/5">
                <span className="text-[10px] font-mono text-[#4A4E69] font-bold uppercase tracking-[0.2em]">
                  FILE_NO: {project.id?.toUpperCase()}
                </span>
              </div>
            </div>

            {/* Title Section: 8 cols + 4 cols */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16 mb-20 md:mb-24 items-end">
              <div className="lg:col-span-8">
                <div className="flex items-center gap-4 mb-6 md:mb-8"> 
                  <span className="h-[2px] w-12 bg-[#BDE0FE]" />
                  <span className="text-[12px] font-bold uppercase tracking-[0.5em] text-[#4A4E69]/50">{project.category}</span>
                </div>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#4A4E69] mb-8 md:mb-12 font-quicksand leading-tight tracking-tight">
                  {project.title}<span className="text-[#BDE0FE]">.</span>
                </h1>
                
                <div className="flex items-start">
                    {project.link && (
                    <a href={project.link} className="inline-flex items-center justify-center gap-5 text-[11px] font-bold uppercase tracking-[0.2em] text-white bg-[#4A4E69] px-8 md:px-10 py-4 md:py-5 rounded-xl shadow-xl hover:-translate-y-1 transition-transform">
                        View Live Site <FaExternalLinkAlt className="text-[10px]" />
                    </a>
                    )}
                </div>
              </div>

              <div className="lg:col-span-4 pb-2 md:pb-4">
                 <div className="border-l-4 border-[#BDE0FE] pl-6 md:pl-8 py-2">
                    <p className="font-mono text-[10px] text-[#4A4E69]/60 uppercase tracking-widest font-bold mb-2 md:mb-3">System Narrative:</p>
                    <p className="text-[#4A4E69] italic font-outfit text-base md:text-xl leading-relaxed">Precision logic meeting human-centric interface design.</p>
                 </div>
              </div>
            </div>

            {/* Main Content Grid: 7 cols + 5 cols */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-20">
              
              {/* LEFT: Overview + Images */}
              <div className="lg:col-span-7 flex flex-col gap-12 md:gap-16">
                
                {/* Overview Card */}
                <section className="bg-white p-6 md:p-8 lg:p-12 rounded-[2rem] shadow-sm border border-gray-100">
                    <h3 className="text-[11px] font-bold uppercase tracking-[0.4em] text-[#4A4E69] mb-6 md:mb-8 flex items-center gap-3 border-b border-gray-50 pb-4 md:pb-6">
                      <FaHashtag className="text-[#BDE0FE]" /> Project Overview
                    </h3>
                    <p className="text-base md:text-[16px] text-[#4A4E69]/80 leading-loose font-outfit">
                      {project.detailedDescription}
                    </p>
                </section>

                {/* Images Grid with Washi Tape */}
                {project.images && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
                    {project.images.map((img, i) => (
                      <div key={i} className="bg-white p-4 md:p-6 pb-8 md:pb-10 shadow-md rounded-[1.5rem] relative">
                        {/* Washi Tape Decoration */}
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-10 bg-[#BDE0FE]/40 -rotate-3" />
                        <img src={img.src} alt="" className="w-full h-auto rounded-lg grayscale-0 scale-105" />
                        <p className="mt-4 md:mt-6 text-[10px] font-mono text-gray-400">DATA_SET_REF_//_00{i+1}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* RIGHT: Tech Stack + Features + Note */}
              <div className="lg:col-span-5 flex flex-col gap-8 md:gap-12">
                
                {/* Tech Stack Card */}
                <div className="bg-[#4A4E69] p-6 md:p-8 lg:p-12 rounded-[2rem] text-white shadow-2xl">
                    <h3 className="text-[11px] font-bold uppercase tracking-[0.4em] mb-6 md:mb-8 text-[#BDE0FE]">Engine Stack</h3>
                    <div className="flex flex-wrap gap-3 md:gap-4">
                      {project.stack.map(s => (
                        <span key={s} className="px-4 md:px-5 py-2 md:py-3 bg-white/10 border border-white/10 rounded-lg text-[10px] font-mono uppercase tracking-widest">
                          {s}
                        </span>
                      ))}
                    </div>
                </div>

                {/* Features Card */}
                <div className="bg-white p-6 md:p-8 lg:p-12 border border-gray-100 rounded-[2rem] shadow-sm">
                    <h3 className="text-[11px] font-bold uppercase tracking-[0.4em] text-[#4A4E69] mb-6 md:mb-8">System Capabilities</h3>
                    <ul className="space-y-4 md:space-y-6"> 
                      {project.features?.map((f, i) => (
                        <li key={i} className="flex gap-4 md:gap-5 items-start">
                          <div className="w-6 h-6 rounded-full bg-[#BDE0FE]/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <div className="w-2 h-2 bg-[#4A4E69] rounded-full" />
                          </div>
                          <span className="text-base md:text-[16px] text-[#4A4E69]/90 font-medium leading-relaxed">{f}</span>
                        </li>
                      ))}
                    </ul>
                </div>

                {/* Project Note - Optional */}
                {project.note && (
                  <div className="p-6 md:p-8 lg:p-12 bg-[#FFD6BA]/20 rounded-[2rem] border-2 border-dashed border-[#FFD6BA]/40">
                       <p className="text-base md:text-[16px] italic text-[#4A4E69] leading-relaxed mb-6 md:mb-8">
                         "{project.note}"
                       </p>
                       <div className="font-mono text-[#4A4E69]/40 text-[10px] uppercase tracking-widest">— Auth_Ref: Ahmed</div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default ProjectDetail;
```

---

## Navbar.jsx - Exact Structure

```jsx
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes, FaDownload, FaSun, FaMoon } from "react-icons/fa";
import { HiOutlineHome, HiOutlineBriefcase, HiOutlineChatBubbleLeftRight } from "react-icons/hi2";  ← ADDED
import { useNavigate, useLocation } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";                                                   ← ADDED

import resumePdf from "../assets/resume.pdf";

// Dark Mode Navigation
const darkModeNavLinks = [                                                                            ← ADDED
  { name: "About", id: "about", index: "01" },
  { name: "Projects", id: "projects", index: "02" },
  { name: "Experience", id: "experience", index: "03" },
  { name: "Skills", id: "skills", index: "04" },
  { name: "Contact", id: "contact", index: "05" },
];

// Light Mode Navigation
const lightModeNavItems = [                                                                           ← ADDED
  { name: 'INDEX', path: '#hero', icon: HiOutlineHome },
  { name: 'WORKS', path: '#projects', icon: HiOutlineBriefcase },
  { name: 'TALK', path: '#contact', icon: HiOutlineChatBubbleLeftRight },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();                                                    ← ADDED
  
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

  // For Light Mode Navigation
  const handleScroll = (e, id) => {                                                                  ← ADDED
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, null, id);
    }
  };

  return (
    <>
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      {/* CONDITIONAL RENDERING - Main Structure */}
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      {isDarkMode ? (                                                                                 ← ROOT CONDITIONAL
        
        /* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
        /* DARK MODE (System) - Top Navbar */
        /* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
        <>
          {/* Fixed Top Navigation */}
          <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
              isScrolled 
                ? "bg-[#07131d]/95 border-b border-white/10 py-3"
                : "bg-transparent py-6"
            }`}
          >
            <div className="max-w-[1600px] mx-auto px-6 md:px-12 flex justify-between items-center font-mono">
              
              {/* LOGO */}
              <button 
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} 
                className="text-xl font-bold text-[#E8EAEF] tracking-tighter"
              >
                FAUZIYYA<span className="text-[#C2A878]">_</span>
              </button>

              {/* DESKTOP NAV (hidden on mobile) */}
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
                
                {/* THEME TOGGLE - Dark Mode */}
                <button
                  onClick={toggleTheme}
                  className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#C2A878]/10 hover:bg-[#C2A878]/20 text-[#C2A878] transition-all"
                  title="Switch to light mode"
                >
                  <FaSun size={16} />
                </button>
                
                {/* RESUME BUTTON */}
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

              {/* MOBILE MENU TOGGLE (visible on mobile) */}
              <button
                className="md:hidden text-[#C2A878] p-2"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
              </button>
            </div>
          </nav>

          {/* MOBILE MENU - Dark Mode */}
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

      ) : (                                                                                           ← ELSE CLAUSE
        
        /* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
        /* LIGHT MODE (Creative) - Side Navbar */
        /* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
        <nav className="fixed top-1/2 -translate-y-1/2 left-6 z-50 flex flex-col gap-4 hidden lg:flex">
          {/* Logo with Accent */}
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

          {/* Navigation Icons */}
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
                  {/* Hover Label Tooltip */}
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

          {/* RESUME BUTTON */}
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
```

---

## Key Observations

### ProjectDetails.jsx
1. Uses **single-level conditional**: `isDarkMode ?...:`
2. **Root wrapper** is the conditional (either `<section>` or `<motion.div>`)
3. Both versions use **identical props** structure
4. Dark: uses grid lines + floating shapes
5. Light: uses felt texture + washi tape decorations
6. Gallery modal works in both modes

### Navbar.jsx
1. Uses **single-level conditional**: `isDarkMode ?...:`
2. **Dark mode returns Fragment** (`<>...</>`) wrapping nav + mobile menu
3. **Light mode returns nav** (side navbar only)
4. Different navigation structures (horizontal vs vertical)
5. Dark mode supports mobile menu, light mode doesn't (lg:flex only)
6. Both have theme toggle buttons

### Pattern Consistency
- Both files follow same conditional pattern
- Both destructure `isDarkMode` from `useTheme()`
- Both import necessary icons/components for their versions
- Both handle responsive design internally

