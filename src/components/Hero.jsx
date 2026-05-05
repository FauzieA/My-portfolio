import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Hero() {
  return (
    <section id="intro" className="relative w-full min-h-screen flex items-center justify-center bg-white px-6 md:px-20 lg:px-32 overflow-visible selection:bg-[#FFB6C1] selection:text-[#001F3F]">
      
      {/* LEFT ACCENT: Thin vertical anchor */}
      <div className="absolute left-0 top-0 w-1 md:w-2 h-full bg-[#001F3F] z-20" />

      <div className="relative z-10 w-full max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* MAIN CONTENT AREA */}
        <div className="lg:col-span-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Tagline with Pink Accent */}
            <div className="mb-6 flex items-center gap-4">
              <span className="text-[#FFB6C1] text-[10px] tracking-[0.5em] font-black uppercase">
                Data, Web & AI Solutions
              </span>
              <div className="h-[1px] w-12 bg-[#FFB6C1]/30" />
            </div>

            {/* THE NAME - FIXED FOR CLIPPING */}
            <h1 className="text-6xl md:text-[85px] font-serif text-[#001F3F] leading-[1.2] mb-10 tracking-tighter pt-6 block">
              Fauziyya <br />
              <span className="italic font-light text-[#001F3F]/80">A. Ahmed</span>
            </h1>

            {/* Description - Editorial Style */}
            <div className="flex items-start gap-8 max-w-xl">
              <div className="h-16 w-[2px] bg-[#FFB6C1] shrink-0 mt-2" />
              <p className="text-[14px] md:text-[16px] leading-[1.8] text-[#001F3F]/60 font-light">
                Helping individuals and organizations turn data into 
                insight, ideas into products, and learners into confident technologists.
                </p>
            </div>
          </motion.div>
        </div>

        {/* RIGHT SIDE CONTENT - Fills the "Empty" space */}
        <div className="lg:col-span-4 flex flex-col items-start lg:items-end gap-12 lg:pl-12">
          
          {/* Monogram Badge */}
          <div className="w-16 h-16 border border-[#001F3F]/20 rounded-full flex items-center justify-center text-[#001F3F] font-serif italic text-2xl shadow-sm">
            F
          </div>

          {/* Harmonized Socials */}
          <div className="flex lg:flex-col gap-6 items-center lg:items-end">
            <h3 className="hidden lg:block text-[9px] font-black text-[#001F3F]/30 uppercase tracking-[0.3em] mb-2">Connect</h3>
            <div className="flex gap-6">
               <a href="https://github.com/FauzieA" target="_blank" rel="noreferrer" className="text-[#001F3F] hover:text-[#FFB6C1] transition-all"><FaGithub size={18}/></a>
               <a href="https://linkedin.com/in/fauziyya-ahmed" target="_blank" rel="noreferrer" className="text-[#001F3F] hover:text-[#FFB6C1] transition-all"><FaLinkedin size={18}/></a>
               <a href="mailto:fauxieahmed22@gmail.com" className="text-[#001F3F] hover:text-[#FFB6C1] transition-all"><FaEnvelope size={18}/></a>
            </div>
          </div>

          {/* Secondary CTA */}
          <button className="text-[10px] uppercase tracking-[0.4em] font-black text-[#001F3F] border-b-2 border-[#FFB6C1] pb-1 hover:text-[#FFB6C1] transition-all">
            Get in touch
          </button>
        </div>
      </div>

      {/* Background Detail (Fills right-side emptiness subtly) */}
      <div className="absolute right-[5%] bottom-[10%] opacity-[0.03] pointer-events-none hidden lg:block">
        <span className="text-[150px] font-serif italic font-black text-[#001F3F] select-none">
          Ahmed
        </span>
      </div>
    </section>
  );
}