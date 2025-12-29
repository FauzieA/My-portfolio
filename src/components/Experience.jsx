import React, { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import FloatingShapes from "../components/FloatingShapes";
import { FaBriefcase, FaChalkboardTeacher, FaDatabase, FaLeaf } from "react-icons/fa";

const experiences = [
  {
    title: "Web Developer Intern",
    company: "Avidity International",
    period: "MAR 2025 – AUG 2025",
    description: "Spearheaded the optimization of Moodle LMS and WordPress platforms. Enhanced UI/UX for diverse user cohorts and ensured 99.9% platform uptime through backend troubleshooting.",
    skills: ["Moodle", "WordPress", "PHP", "UI/UX"],
    icon: FaBriefcase,
    color: "#C2A878", 
  },
  {
    title: "Co-Founder & Lead Instructor",
    company: "TechNexus",
    period: "JAN 2025 – PRESENT",
    description: "Directing a global initiative to democratize tech education. Designed and taught MERN Stack and Database bootcamps to 200+ students. Hosted the 'Swiss Innovation Challenge' team.",
    skills: ["Leadership", "MERN Stack", "Teaching"],
    icon: FaChalkboardTeacher,
    color: "#3776AB", 
  },
  {
    title: "Library Associate (DB Admin)",
    company: "Albukhary Int. University",
    period: "AUG 2024 – MAY 2025",
    description: "Managed library database systems and research resource allocation. Organized academic engagement events like 'AIU Peers' for Probability & Statistics.",
    skills: ["SQL", "Data Mgmt", "Logistics"],
    icon: FaDatabase,
    color: "#E8EAEF", 
  },
  {
    title: "COO & Deputy Key Person",
    company: "3Zero Club & Po-Stitch",
    period: "JAN 2024 – PRESENT",
    description: "Co-managing a sustainable social business focused on upcycling. Represented the initiative at high-profile university showcases and international collaborations.",
    skills: ["Operations", "Strategy", "Social Biz"],
    icon: FaLeaf,
    color: "#38B2AC", 
  },
];

const Card = ({ data, index }) => {
  const isEven = index % 2 === 0;

  return (
    <div className={`flex items-center justify-between w-full mb-16 md:mb-24 ${isEven ? "flex-row-reverse" : ""}`}>
      
      {/* --- EMPTY SPACE --- */}
      <div className="hidden md:block w-5/12" />

      {/* --- CENTER NODE (The Diamond) --- */}
      <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 flex items-center justify-center z-20">
        {/* Glow */}
        <div 
            className="absolute w-6 h-6 bg-[#C2A878] rotate-45 blur-md opacity-40"
        />
        {/* The Diamond Node */}
        <div 
            className="w-8 h-8 md:w-10 md:h-10 rotate-45 bg-[#07131d] border-2 flex items-center justify-center shadow-lg"
            style={{ borderColor: data.color }}
        >
          {/* Un-rotate the icon so it looks straight */}
          <div className="-rotate-45 text-[#C9CCD3]">
            <data.icon size={14} />
          </div>
        </div>
      </div>

      {/* --- CONTENT CARD (Tech Panel) --- */}
      <motion.div
        initial={{ opacity: 0, x: isEven ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className={`w-full md:w-5/12 pl-16 md:pl-0 ${isEven ? "md:pr-16 text-left" : "md:pl-16 text-left"}`}
      >
        <div className="relative bg-[#0d1b27] border-l-2 border-[#C2A878] border-y border-r border-white/5 p-6 hover:border-r-[#C2A878]/50 transition-all group">
          
          {/* Tech Corner Accent */}
          <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-[#C2A878]/30 group-hover:border-[#C2A878] transition-colors" />

          {/* Header */}
          <div className="flex flex-col mb-4">
            <div className="flex items-center gap-2 mb-2">
               <span className="text-[10px] font-mono text-[#C2A878] bg-[#C2A878]/10 px-2 py-0.5 border border-[#C2A878]/20 uppercase tracking-widest">
                 {data.period}
               </span>
            </div>
            <h3 className="text-xl font-bold text-[#E8EAEF] leading-tight group-hover:text-[#C2A878] transition-colors">
              {data.title}
            </h3>
            <span className="text-sm text-[#C9CCD3]/60 font-mono mt-1">
              // {data.company}
            </span>
          </div>

          {/* Description */}
          <p className="text-sm text-[#C9CCD3] leading-relaxed mb-6 border-l border-white/10 pl-4">
            {data.description}
          </p>

          {/* Skills Tags (Terminal Style) */}
          <div className="flex flex-wrap gap-2">
            {data.skills.map((skill, i) => (
              <span 
                key={i} 
                className="px-2 py-1 text-[10px] uppercase font-mono tracking-wide text-[#C9CCD3]/80 bg-[#132636] border border-white/5 hover:border-[#C2A878]/50 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default function Experience() {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section id="experience" className="w-full py-24 bg-[#07131d] relative overflow-hidden px-4">
      
      {/* --- BACKGROUND GRID --- */}
      <div className="absolute inset-0 flex justify-between pointer-events-none opacity-5">
        <div className="w-[1px] h-full bg-white"></div>
        <div className="w-[1px] h-full bg-white hidden md:block"></div>
        <div className="w-[1px] h-full bg-white hidden lg:block"></div>
        <div className="w-[1px] h-full bg-white"></div>
      </div>

      <FloatingShapes />

      {/* --- HEADER --- */}
      <div className="text-center mb-20 relative z-10">
        <div className="flex items-center justify-center gap-4 mb-4">
          <span className="h-[1px] w-8 bg-[#C2A878]"></span>
          <span className="text-[#C2A878] font-mono text-sm tracking-widest uppercase">
            // Career History
          </span>
          <span className="h-[1px] w-8 bg-[#C2A878]"></span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-bold text-[#E8EAEF] tracking-tight">
          Professional Experience<span className="text-[#C2A878]">.</span>
        </h2>
      </div>

      {/* --- TIMELINE CONTAINER --- */}
      <div ref={containerRef} className="relative max-w-[1400px] mx-auto min-h-screen">
        
        {/* THE LINE (Background Grey) */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] bg-white/10 transform md:-translate-x-1/2" />
        
        {/* THE LINE (Lightup Gold - Animated) */}
        <motion.div 
            className="absolute left-4 md:left-1/2 top-0 w-[2px] bg-[#C2A878] origin-top transform md:-translate-x-1/2 shadow-[0_0_15px_#C2A878] z-0"
            style={{ scaleY, bottom: 0 }}
        />

        {/* CARDS */}
        <div className="relative z-10 pb-24">
          {experiences.map((exp, index) => (
            <Card key={index} data={exp} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
}