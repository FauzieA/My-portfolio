import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "./ProjectCard.jsx";
import FloatingShapes from "../components/FloatingShapes";
import { useTheme } from "../context/ThemeContext";
import { projects } from "../data/Projects";
import { FaArrowRight } from "react-icons/fa";

const CATEGORIES = ["All", "Data Science", "Web Dev", "IoT & Robotics"];

const categoryColors = {
  'Data Science': '#BDE0FE',
  'Web Dev': '#FFD1DC',
  'IoT & Robotics': '#FFD6BA',
};

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const { isDarkMode } = useTheme();

  const filteredProjects = projects.filter((project) => {
    if (activeCategory === "All") return true;
    return project.category === activeCategory || project.tag.includes(activeCategory);
  });

  if (isDarkMode) {
    return (
    <section
      id="projects"
      className="w-full py-24 relative overflow-hidden bg-[#07131d]"
    >
      <div className="absolute inset-0 flex justify-between pointer-events-none opacity-5">
        <div className="w-[1px] h-full bg-white"></div>
        <div className="w-[1px] h-full bg-white hidden md:block"></div>
        <div className="w-[1px] h-full bg-white hidden lg:block"></div>
        <div className="w-[1px] h-full bg-white"></div>
      </div>

      <FloatingShapes />

      <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-12 mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12 border-b border-white/10 pb-8">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <span className="h-[2px] w-12 bg-[#C2A878]"></span>
              <span className="text-[#C2A878] font-mono text-sm tracking-widest uppercase">
                // Portfolio
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#E8EAEF] tracking-tight">
              Technical Projects<span className="text-[#C2A878]">.</span>
            </h2>
          </div>

          <div className="flex flex-wrap gap-6">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`
                  relative pb-2 text-sm font-mono tracking-wide uppercase transition-all duration-300
                  ${
                    activeCategory === cat
                      ? "text-[#C2A878]"
                      : "text-[#C9CCD3]/60 hover:text-[#C9CCD3]"
                  }
                `}
              >
                <span className="relative z-10">
                   {activeCategory === cat ? `> ${cat}` : cat}
                </span>

                {activeCategory === cat && (
                  <motion.div 
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 w-full h-[2px] bg-[#C2A878]"
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 justify-items-center">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="w-full"
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center text-[#C9CCD3] mt-20 font-mono border border-dashed border-white/10 p-12">
            <p className="text-xl opacity-50"> // No projects found in this sector</p>
          </div>
        )}
      </div>
    </section>
    );
  } else {
    /* LIGHT MODE PROJECTS */
    return (
      <section id="projects" className="py-12 lg:py-20 px-4 md:px-10 bg-[#FCFCFA] relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative">
          
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10 relative z-30 mb-8 lg:mb-12">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-1.5 h-1.5 bg-[#FFD1DC] rotate-45" />
                <span className="text-[8px] lg:text-[10px] font-bold text-[#4A4E69]/40 uppercase tracking-[0.4em]">The Archive</span>
              </div>
              <h2 className="font-quicksand text-3xl md:text-5xl lg:text-6xl font-bold text-[#4A4E69] leading-tight">
                Featured<br/><span className="italic underline decoration-[#FFD1DC] decoration-[3px]">projects.</span>
              </h2>
            </div>

            <div className="flex flex-wrap gap-3">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                    activeCategory === cat
                      ? "bg-[#4A4E69] text-white"
                      : "bg-[#4A4E69]/10 text-[#4A4E69] hover:bg-[#4A4E69]/20"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 relative z-10">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => {
                const accentColor = categoryColors[project.category] || '#BDE0FE';
                return (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className={`relative group cursor-pointer ${index === 0 || index === 3 ? 'lg:col-span-2' : ''}`}
                  >
                    <a href={`#/project/${project.id}`} className="block">
                      <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-[#4A4E69]/10 h-full">
                        <div className="aspect-video bg-gradient-to-br from-[#BDE0FE]/20 to-[#FFD1DC]/20 p-6 flex flex-col justify-between">
                          <div className="text-sm font-bold text-[#4A4E69]/60 uppercase tracking-widest">{project.category}</div>
                          <h3 className="text-xl font-bold text-[#4A4E69] group-hover:text-[#FFB7C5] transition-colors">{project.title}</h3>
                        </div>
                        <div className="p-4 border-t border-[#4A4E69]/10">
                          <p className="text-xs text-[#4A4E69]/60 font-mono">{project.tag}</p>
                        </div>
                      </div>
                    </a>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-[#4A4E69]/60 text-lg">No projects in this category</p>
            </div>
          )}
        </div>
      </section>
    );
  }
}