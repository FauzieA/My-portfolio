import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaExternalLinkAlt, FaCode } from "react-icons/fa";
import { projects } from "../data/Projects"; // Using your 6-project lineup

export default function PortfolioGrid() {
  const [selectedId, setSelectedId] = useState(null);
  const [filter, setFilter] = useState("Show all");
  const activeProject = projects.find((p) => p.id === selectedId);

  // Derive unique categories for the filter bar
  const categories = ["Show all", ...new Set(projects.map((p) => p.category))];

  const filteredProjects = filter === "Show all" 
    ? projects 
    : projects.filter((p) => p.category === filter);

  return (
    <section id="portfolio" className="w-full py-24 bg-white font-sans">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Title & Subtitle matching the screenshot style */}
        <div className="text-center mb-12">
          <h2 className="text-[#001F3F] text-4xl md:text-4xl font-serif mb-4 tracking-tight uppercase">Portfolio</h2>
          <p className="text-[#001F3F]/50 italic text-sm mb-10 font-serif">A glimpse of the projects I've been working on</p>
          
          {/* Filter Bar */}
          <div className="flex flex-wrap justify-center gap-2 mb-16">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-1.5 text-[10px] uppercase tracking-widest border transition-all duration-300 ${
                  filter === cat 
                  ? "bg-[#FFB6C1] border-[#FFB6C1] text-white" 
                  : "bg-transparent border-[#001F3F]/10 text-[#001F3F]/60 hover:border-[#FFB6C1]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* --- MINIMALIST THUMBNAIL GRID --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                key={project.id}
                onClick={() => setSelectedId(project.id)}
                className="group cursor-pointer"
              >
                {/* Thumbnail Container */}
                <div className="relative aspect-[4/5] bg-[#f9f9f9] border border-[#f0f0f0] overflow-hidden p-4 group-hover:border-[#FFB6C1]/50 transition-colors">
                  <img 
                    src={project.cardImage} 
                    alt={project.title} 
                    className="w-full h-full object-contain mix-blend-multiply opacity-90 group-hover:opacity-100 transition-all"
                  />
                  
                  {/* Hover Info Overlay (Minimalist) */}
                  <div className="absolute inset-0 bg-white/95 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <span className="text-[#FFB6C1] text-[8px] font-bold tracking-[0.3em] uppercase mb-1">{project.category}</span>
                    <h3 className="text-[#001F3F] text-sm font-bold mb-2 uppercase leading-tight">{project.title}</h3>
                    <p className="text-[#001F3F]/60 text-[10px] leading-relaxed line-clamp-3 mb-4">{project.description}</p>
                    <span className="text-[9px] font-bold text-[#001F3F] border-b border-[#001F3F] w-fit">Read more</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* --- POPUP CARD (Services Style) --- */}
      <AnimatePresence>
        {selectedId && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-[#001F3F]/20 backdrop-blur-sm">
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              className="bg-white max-w-4xl w-full max-h-[85vh] overflow-y-auto relative shadow-2xl rounded-lg p-8 md:p-12"
            >
              <button onClick={() => setSelectedId(null)} className="absolute top-6 right-6 text-[#001F3F]/30 hover:text-[#FFB6C1]">
                <FaTimes size={20} />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <span className="text-[#FFB6C1] text-[10px] font-bold tracking-widest uppercase">{activeProject.category}</span>
                  <h2 className="text-[#001F3F] text-3xl font-serif mt-2 mb-6 uppercase tracking-tight">{activeProject.title}</h2>
                  <p className="text-[#001F3F]/70 text-sm leading-relaxed font-light mb-8 italic">
                    {activeProject.detailedDescription}
                  </p>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-[10px] font-bold text-[#001F3F] uppercase tracking-widest mb-3">Stack</h4>
                      <div className="flex flex-wrap gap-2">
                        {activeProject.stack.map(s => (
                          <span key={s} className="px-2 py-1 bg-[#f5f5f5] text-[#001F3F]/60 text-[9px] font-bold">{s}</span>
                        ))}
                      </div>
                    </div>
                    {activeProject.link && (
                      <a href={activeProject.link} className="inline-flex items-center gap-2 text-[10px] font-bold text-[#FFB6C1] uppercase tracking-widest border-b-2 border-[#FFB6C1] pb-1 hover:text-[#001F3F] hover:border-[#001F3F] transition-all">
                        Launch Project <FaExternalLinkAlt size={10} />
                      </a>
                    )}
                  </div>
                </div>

                <div className="space-y-4">
                  {activeProject.images.map((img, i) => (
                    <div key={i} className="border border-[#f0f0f0] p-2 bg-[#fdfdfd]">
                      <img src={img.src} alt={img.caption} className="w-full h-auto grayscale-[0.5] hover:grayscale-0 transition-all" />
                      <p className="text-[8px] mt-2 text-[#001F3F]/40 uppercase text-center tracking-tighter">{img.caption}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}