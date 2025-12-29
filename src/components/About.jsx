import React from "react";
import { motion } from "framer-motion";
import mainPic from "../assets/fauziyya.jpg";
import { FaDownload } from "react-icons/fa"; 
import resumePdf from "../assets/resume.pdf";

// --- STATS ---
const stats = [
  { label: "Global Certifications", value: "08+" }, 
  { label: "Projects Completed", value: "15+" },
  { label: "Core Stack", value: "Python & React" }, // Honest and specific
];

export default function About() {
  return (
    <section id="about" className="w-full min-h-screen bg-[#07131d] relative overflow-hidden flex items-center">
      
      {/* Background Subtle Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#C2A878]/5 skew-x-12 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#3776AB]/10 rounded-full blur-[120px] pointer-events-none" />

      {/* --- MAIN GRID --- */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-0 items-center">
        
        {/* ==== LEFT COLUMN: TEXT ==== */}
        <div className="lg:col-span-7 px-6 md:px-16 lg:pl-24 lg:pr-12 py-12 lg:py-24 relative z-10">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="h-[2px] w-12 bg-[#C2A878]"></span>
              <span className="text-[#C2A878] font-bold tracking-[0.2em] uppercase text-sm">
                About Me
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#E8EAEF] leading-tight mb-8">
              Building data-driven applications <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C2A878] to-[#FFF]">
                with purpose.
              </span>
            </h2>

            <div className="text-lg text-[#C9CCD3] leading-relaxed space-y-6 max-w-2xl">
              <p>
                I am <strong className="text-white">Fauziyya Abdullahi Ahmed</strong>, a Computer Science senior with a dual focus on 
                <span className="text-[#C2A878]"> Data Science</span> and <span className="text-[#C2A878]"> Web Development</span>.
                I don't just build models in a notebook; I build the applications that make those insights accessible.
              </p>
              <p>
                My workflow is Python-centric: extracting insights with <span className="text-white font-bold">Pandas</span>, architecting robust backends with <span className="text-white font-bold">Django</span>, and creating interactive frontends with <span className="text-white font-bold">React</span>.
              </p>
              <p>
                Whether it's predicting traffic patterns or optimizing educational platforms, I aim to bridge the gap between complex algorithms and intuitive user experiences.
              </p>
            </div>

            {/* --- STATS ROW --- */}
            <div className="grid grid-cols-3 gap-6 mt-12 border-t border-white/10 pt-8 max-w-2xl">
              {stats.map((stat, index) => (
                <div key={index}>
                  <h4 className="text-2xl md:text-3xl font-bold text-[#E8EAEF]">{stat.value}</h4>
                  <p className="text-xs md:text-sm text-[#C9CCD3]/60 uppercase tracking-wider mt-1">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* --- SINGLE ACTION BUTTON --- */}
            <div className="mt-12">
              <a
                href={resumePdf}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex px-8 py-4 bg-[#C2A878] text-[#07131d] font-bold text-sm uppercase tracking-wide rounded-none items-center gap-3 hover:bg-[#d4b985] transition-all shadow-[0_0_20px_rgba(194,168,120,0.2)]"
              >
                Download Resume 
                <FaDownload className="group-hover:translate-y-1 transition-transform" />
              </a>
            </div>

          </motion.div>
        </div>

        {/* ==== RIGHT COLUMN: IMAGE ==== */}
        <div className="lg:col-span-5 relative h-full min-h-[500px] lg:min-h-screen w-full">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="absolute inset-0 w-full h-full"
          >
            <img 
              src={mainPic} 
              alt="Fauziyya Profile" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#07131d] via-[#07131d]/20 to-transparent lg:w-1/2"></div>
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#07131d] to-transparent lg:hidden"></div>
            <div className="absolute top-10 right-10 w-full h-full border-r border-t border-[#C2A878]/30 hidden lg:block translate-x-4 -translate-y-4"></div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}