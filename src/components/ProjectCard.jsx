import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowRight, FaCode } from "react-icons/fa";

const ProjectCard = ({ project }) => {
  const cardRef = useRef(null);
  const [flipped, setFlipped] = useState(false);

  const handleMouseMove = (e) => {
    if (flipped) return;
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateX = ((y - rect.height / 2) / 30) * -1;
    const rotateY = (x - rect.width / 2) / 30;
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const resetTilt = () => {
    if (flipped) return;
    cardRef.current.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg)";
  };

  return (
    <div 
      className="relative w-full h-[450px] cursor-pointer group perspective-1000"
      onClick={() => setFlipped(!flipped)}
      style={{ zIndex: flipped ? 50 : 1 }}
    >
      <motion.div
        ref={cardRef}
        className="w-full h-full relative preserve-3d transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]"
        animate={{ rotateY: flipped ? 180 : 0 }}
        onMouseMove={handleMouseMove}
        onMouseLeave={resetTilt}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* --- FRONT SIDE --- */}
        <div 
          className="absolute inset-0 w-full h-full bg-[#0d1b27] border border-white/5 overflow-hidden backface-hidden shadow-2xl"
          style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}
        >
          <div className="h-[60%] w-full overflow-hidden relative">
             <div className="absolute inset-0 bg-[#0d1b27]/20 group-hover:bg-transparent transition-colors z-10" />
             <div className="w-full h-full bg-[#1a2c3d]">
                <img src={project.cardImage} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="absolute top-4 left-4 z-20">
               <span className="px-3 py-1 bg-[#07131d]/90 border border-[#C2A878]/30 text-[#C2A878] text-[10px] font-mono uppercase tracking-wider backdrop-blur-md">
                 {project.category}
               </span>
            </div>
          </div>

          <div className="h-[40%] p-6 flex flex-col justify-between bg-[#0d1b27] relative">
            <div className="absolute top-0 left-6 right-6 h-[1px] bg-white/10" />
            <div>
               <h3 className="text-xl font-bold text-[#E8EAEF] leading-tight mb-2 group-hover:text-[#C2A878] transition-colors">{project.title}</h3>
               <p className="text-sm text-[#C9CCD3]/60 font-mono">// {project.tag}</p>
            </div>
            <div className="flex items-center justify-between mt-4">
               <div className="text-xs text-[#C9CCD3]/40 font-mono uppercase tracking-widest">Project Status: Completed</div>
               <span className="text-[#C2A878] text-xs font-bold font-mono group-hover:translate-x-1 transition-transform">[ View Details ]</span>
            </div>
          </div>
        </div>

        {/* --- BACK SIDE --- */}
        <div 
          className="absolute inset-0 w-full h-full bg-[#132636] border border-white/10 p-8 flex flex-col justify-between backface-hidden shadow-2xl"
          style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-[#C2A878]/50" />
          <div className="absolute top-4 right-4 w-4 h-4 border-t border-r border-[#C2A878]/50" />
          <div className="absolute bottom-4 left-4 w-4 h-4 border-b border-l border-[#C2A878]/50" />
          <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-[#C2A878]/50" />

          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-6 opacity-50">
               <FaCode className="text-[#C2A878]" />
               <span className="text-xs font-mono text-[#C2A878] uppercase tracking-widest">Project Overview</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
            <p className="text-sm text-[#C9CCD3] leading-relaxed border-l-2 border-[#C2A878]/30 pl-4">{project.description}</p>
          </div>

          <Link
            to={`/projects/${project.id}`}
            onClick={(e) => e.stopPropagation()} 
            className="relative z-10 w-full py-4 bg-[#C2A878] text-[#07131d] font-bold font-mono text-sm uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-white transition-colors"
          >
            Full Case Study <FaArrowRight />
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectCard;