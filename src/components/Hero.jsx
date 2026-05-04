import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaArrowRight } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-white px-6 md:px-16 lg:px-32 overflow-hidden selection:bg-[#FFB6C1] selection:text-[#001F3F]">
      
      {/* --- VISUAL ARCHITECTURE --- */}
      {/* The Navy Anchor: A vertical column that defines the space */}
      <div className="absolute left-0 top-0 w-4 lg:w-12 h-full bg-[#001F3F] z-20" />
      
      {/* Pink Geometric Accents: Creating a "Blueprint" feel */}
      <div className="absolute top-[20%] right-0 w-[60%] h-[1px] bg-[#FFB6C1]/40" />
      <div className="absolute bottom-[20%] left-0 w-[40%] h-[1px] bg-[#FFB6C1]/40" />
      <div className="absolute top-0 right-[15%] w-[1px] h-full bg-[#FFB6C1]/20 hidden lg:block" />

      <div className="relative z-10 w-full max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* LEFT: The "Brand" Identity */}
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="mb-8 overflow-hidden">
              <motion.span 
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8 }}
                className="inline-block text-[#001F3F]/40 text-[10px] tracking-[0.8em] uppercase font-black"
              >
                Developer • Strategist • Mentor
              </motion.span>
            </div>

            <h1 className="text-6xl md:text-[100px] font-serif text-[#001F3F] leading-[0.8] mb-12 tracking-tighter">
              Fauziyya <br />
              <span className="italic font-light opacity-80">A. Ahmed</span>
            </h1>

            {/* The Mentorship "Flex" as a design element */}
            <div className="flex items-center gap-6">
              <div className="h-12 w-[2px] bg-[#FFB6C1]" />
              <p className="text-sm uppercase tracking-widest text-[#001F3F]/60 font-medium max-w-[250px]">
                Empowering the next generation through <span className="text-[#001F3F]">structured mentorship</span> for 400+ technologists.
              </p>
            </div>
          </motion.div>
        </div>

        {/* RIGHT: The Professional Profile Card */}
        <div className="lg:col-span-5 flex justify-end">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="relative bg-[#001F3F] p-10 md:p-14 text-white shadow-[60px_-40px_0px_-20px_#FFB6C1] group"
          >
            <div className="relative z-10">
              <h3 className="text-[#FFB6C1] text-[10px] font-bold tracking-[0.4em] uppercase mb-10">
                Core Philosophy
              </h3>
              
              <div className="space-y-8 font-light leading-relaxed text-sm md:text-base opacity-90">
                <p>
                  Specializing in <span className="font-bold italic">Machine Learning</span> and <span className="font-bold italic">Responsive Web Systems</span>. 
                  I focus on engineering solutions that are technically robust and visually spacious.
                </p>
                <p>
                  As the <span className="text-[#FFB6C1]">Co-Founder of TechNexus</span>, I bridge the gap between complex software architecture and actionable tech education.
                </p>
              </div>

              <div className="mt-12 flex items-center justify-between border-t border-white/10 pt-8">
                <div className="flex gap-5">
                  <a href="https://github.com/FauzieA" target="_blank" rel="noreferrer" className="hover:text-[#FFB6C1] transition-colors"><FaGithub size={20}/></a>
                  <a href="https://linkedin.com/in/fauzivva-ahmed" target="_blank" rel="noreferrer" className="hover:text-[#FFB6C1] transition-colors"><FaLinkedin size={20}/></a>
                </div>
                <button className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest hover:text-[#FFB6C1] transition-colors">
                  Case Studies <FaArrowRight />
                </button>
              </div>
            </div>
          </motion.div>
        </div>

      </div>

      {/* Aesthetic Navigation/Scroll Element */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-20">
        <div className="w-[1px] h-12 bg-gradient-to-t from-[#001F3F] to-transparent" />
        <span className="text-[8px] uppercase tracking-[1em] font-bold text-[#001F3F]">Explore</span>
      </div>
    </section>
  );
}