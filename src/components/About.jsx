import React from "react";
import { motion } from "framer-motion";
import mainPic from "../assets/headshot.jpg";
import { FaDownload, FaCode, FaChartBar, FaGraduationCap, FaCircle } from "react-icons/fa"; 
import resumePdf from "../assets/resume.pdf";

const stats = [
  { label: "Certifications", value: "08+", icon: <FaGraduationCap />, color: "text-blue-400" }, 
  { label: "Projects", value: "15+", icon: <FaChartBar />, color: "text-pink-400" },
  { label: "Stack", value: "Py & React", icon: <FaCode />, color: "text-[#C2A878]" },
];

export default function About() {
  return (
    <section id="about" className="w-full min-h-screen bg-[#07131d] relative overflow-hidden py-24 flex items-center">
      
      {/* Background Grid Accent */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: `linear-gradient(#C2A878 1px, transparent 1px), linear-gradient(90deg, #C2A878 1px, transparent 1px)`, backgroundSize: '50px 50px' }} 
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* --- LEFT: CONTENT MODULE (8 Columns) --- */}
          <div className="lg:col-span-8 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#0d1b27]/80 border border-white/5 p-8 md:p-12 backdrop-blur-md rounded-sm relative"
            >
              {/* Header Bar */}
              <div className="flex items-center gap-2 mb-8 opacity-40">
                <FaCircle size={8} className="text-red-400" />
                <FaCircle size={8} className="text-yellow-400" />
                <FaCircle size={8} className="text-green-400" />
                <span className="ml-4 text-[10px] font-mono tracking-[0.3em] uppercase">System.Identity_Module</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-[#E8EAEF] leading-tight mb-8">
                Building data-driven applications <br />
                <span className="text-[#C2A878]">with purpose.</span>
              </h2>

              <div className="text-lg text-[#C9CCD3] leading-relaxed space-y-6 mb-12">
                <p>
                  I am <strong className="text-white">Fauziyya Abdullahi Ahmed</strong>, a Computer Science senior specializing in 
                  <span className="text-[#C2A878]"> Data Science</span> and <span className="text-[#C2A878]"> Web Development</span>.
                  I don't just build models in a notebook; I build the applications that make those insights accessible.
                </p>
                <p>
                  My workflow is Python-centric: extracting insights with <span className="text-white font-bold">Pandas</span>, architecting backends with <span className="text-white font-bold">Django</span>, and creating interactive frontends with <span className="text-white font-bold">React</span>.
                </p>
              </div>

              {/* --- INTEGRATED STATS (Filling the bottom space) --- */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-8 border-t border-white/5">
                {stats.map((stat, index) => (
                  <div key={index} className="flex flex-col">
                    <div className={`text-xl font-bold text-white flex items-center gap-2`}>
                      <span className={stat.color}>{stat.icon}</span>
                      {stat.value}
                    </div>
                    <span className="text-[10px] text-[#C9CCD3]/40 uppercase tracking-widest mt-1 font-mono">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Bottom Action Row */}
            <div className="flex items-center gap-6 pl-4">
              <a href={resumePdf} target="_blank" rel="noopener noreferrer"
                 className="px-8 py-4 bg-[#C2A878] text-[#07131d] font-bold text-xs uppercase tracking-widest hover:bg-white transition-all">
                Download_CV.exe
              </a>
              <span className="h-[1px] flex-grow bg-white/5"></span>
            </div>
          </div>

          {/* --- RIGHT: VISUAL MODULE (4 Columns) --- */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="lg:col-span-4 relative group"
          >
            {/* The "Scanner" Frame */}
            <div className="relative border border-white/10 p-3 bg-[#0d1b27]">
              <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-[#C2A878]" />
              <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-[#C2A878]" />
              
              <div className="overflow-hidden relative aspect-[3/4]">
                <img 
                  src={mainPic} 
                  alt="Fauziyya Profile" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                />
                {/* Visual Overlay Scanlines */}
                <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%] opacity-20" />
              </div>
            </div>

            {/* Subtitle Badge */}
            <div className="mt-4 font-mono text-[10px] text-[#C2A878] flex justify-between items-center px-2">
              <span>STATUS: ACTIVE</span>
              <span>DEV_COORD: 40.7128° N</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}