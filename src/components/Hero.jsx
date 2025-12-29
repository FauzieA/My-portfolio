import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowRight } from "react-icons/fa"; 
import HeroTitles from "./HeroTitles"; 
import FloatingShapes from "../components/FloatingShapes"; 

// A sharp, technical social link
const SocialLink = ({ href, Icon }) => {
  return (
    <a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center justify-center w-12 h-12 border border-white/10 bg-[#0d1b27] hover:bg-[#C2A878] hover:border-[#C2A878] hover:text-[#07131d] text-[#C9CCD3] transition-all duration-300"
    >
      <Icon className="w-5 h-5" />
    </a>
  );
};

export default function Hero() {
  return (
    <section id="hero" className="relative w-full min-h-screen flex items-center px-6 md:px-14 lg:px-24 bg-[#07131d] overflow-hidden">
      
      {/* --- 1. TECHNICAL GRID BACKGROUND --- */}
      <div className="absolute inset-0 flex justify-between pointer-events-none opacity-10">
        <div className="w-[1px] h-full bg-white"></div>
        <div className="w-[1px] h-full bg-white hidden md:block"></div>
        <div className="w-[1px] h-full bg-white hidden lg:block"></div>
        <div className="w-[1px] h-full bg-white"></div>
      </div>
      
      <div 
        className="absolute inset-0 z-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#C2A878 1px, transparent 1px)",
          backgroundSize: "40px 40px"
        }}
      />
      
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#07131d] to-transparent z-10" />


      <div className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* --- LEFT COLUMN: CONTENT (Spans 7) --- */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
          className="lg:col-span-7 flex flex-col justify-center"
        >
          {/* Eyebrow */}
          <motion.div 
            variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}
            className="flex items-center gap-4 mb-6"
          >
            <span className="h-[1px] w-8 bg-[#C2A878]"></span>
            <span className="text-[#C2A878] font-mono text-sm tracking-widest uppercase">
              Hello, I am
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
            className="text-5xl sm:text-6xl md:text-7xl font-bold text-[#E8EAEF] mb-6 tracking-tight leading-none"
          >
            Fauziyya A. Ahmed<span className="text-[#C2A878]">.</span>
          </motion.h1>

          {/* Titles */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#8892b0] mb-8 flex items-center gap-3"
          >
            I am a <span className="text-[#C2A878]"><HeroTitles /></span>
          </motion.div>

          {/* Bio - UPDATED TO REFLECT DS > WEB > IOT */}
          <motion.p 
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
            className="max-w-xl text-[#C9CCD3] text-lg leading-relaxed mb-10 border-l-2 border-white/10 pl-6"
          >
            A Computer Science Senior specializing in <span className="text-white font-bold">Data Science</span> and <span className="text-white font-bold">Web Development</span>. 
            I engineer intelligent, data-driven systems, occasionally bridging the digital world with the physical via <span className="text-[#C2A878]">IoT</span>.
          </motion.p>

          {/* Buttons & Socials */}
          <motion.div 
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-8"
          >
            <div className="flex gap-4">
              <a
                href="#projects"
                className="group px-8 py-4 bg-[#C2A878] text-[#07131d] font-bold font-mono text-sm uppercase tracking-widest hover:bg-white transition-colors"
              >
                View Work
              </a>
              <a
                href="#contact"
                className="group px-8 py-4 border border-white/20 text-[#C2A878] font-bold font-mono text-sm uppercase tracking-widest hover:border-[#C2A878] hover:bg-[#C2A878]/5 transition-colors flex items-center gap-2"
              >
                Contact
                <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </div>

            <div className="flex gap-2">
              <SocialLink href="https://github.com/FauzieA" Icon={FaGithub} />
              <SocialLink href="https://www.linkedin.com/in/fauziyya-ahmed/" Icon={FaLinkedin} />
              <SocialLink href="mailto:fauxieahmed22@gmail.com" Icon={FaEnvelope} />
            </div>

          </motion.div>
        </motion.div>


        {/* --- RIGHT COLUMN: VISUAL --- */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="lg:col-span-5 flex justify-center lg:justify-end relative pointer-events-none select-none"
        >
          <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px]">
            {/* Frame Brackets */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#C2A878]"></div>
            <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#C2A878]"></div>
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#C2A878]"></div>
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#C2A878]"></div>

            {/* Inner Grid */}
            <div className="absolute inset-4 border border-white/5 bg-[#0d1b27]/50 backdrop-blur-sm">
                <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/10"></div>
                <div className="absolute left-1/2 top-0 h-full w-[1px] bg-white/10"></div>
            </div>

            {/* Shapes */}
            <div className="absolute inset-0 overflow-hidden">
               <FloatingShapes />
            </div>

            {/* Scan Line */}
            <motion.div 
                animate={{ top: ["0%", "100%", "0%"] }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                className="absolute left-0 w-full h-[2px] bg-[#C2A878]/50 shadow-[0_0_10px_#C2A878]"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}