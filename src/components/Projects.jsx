import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "./ProjectCard.jsx";
import FloatingShapes from "../components/FloatingShapes";
import { projects } from "../data/Projects"; 

const CATEGORIES = ["All", "Data Science", "Web Dev", "IoT & Robotics"];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = projects.filter((project) => {
    if (activeCategory === "All") return true;
    return project.category === activeCategory || project.tag.includes(activeCategory);
  });

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
}