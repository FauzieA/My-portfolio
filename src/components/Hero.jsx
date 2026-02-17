import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowRight } from "react-icons/fa"; 
import { useNavigate, useLocation } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import HeroTitles from "./HeroTitles"; 
import FloatingShapes from "../components/FloatingShapes";
import avatarImg from "../assets/fauziyyaa.jpg";
import headshot from "../assets/headshot.jpg"; 

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
  const navigate = useNavigate();
  const location = useLocation();
  const { isDarkMode } = useTheme();

  const handleScroll = (e, id) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, null, id);
    }
  };

  const scrollToSection = (id) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {isDarkMode ? (
        /* DARK MODE HERO */
        <section id="hero" className="relative w-full min-h-screen flex items-center px-6 md:px-14 lg:px-24 bg-[#07131d] overflow-hidden">
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
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
              className="lg:col-span-7 flex flex-col justify-center pt-32 md:pt-40 lg:pt-0"
            >
              <motion.div 
                variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}
                className="flex items-center gap-4 mb-6"
              >
                <span className="h-[1px] w-8 bg-[#C2A878]"></span>
                <span className="text-[#C2A878] font-mono text-sm tracking-widest uppercase">
                  Hello, I am
                </span>
              </motion.div>

              <motion.h1
                variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
                className="text-5xl sm:text-6xl md:text-7xl font-bold text-[#E8EAEF] mb-6 tracking-tight leading-none"
              >
                Fauziyya A. Ahmed<span className="text-[#C2A878]">.</span>
              </motion.h1>

              <motion.div
                variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
                className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#8892b0] mb-8 flex flex-wrap items-center gap-x-3 gap-y-2"
              >
                <span className="whitespace-nowrap">I am a</span>
                <HeroTitles />
              </motion.div>

              <motion.p 
                variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
                className="max-w-xl text-[#C9CCD3] text-lg leading-relaxed mb-10 border-l-2 border-white/10 pl-6"
              >
                A Computer Science Senior specializing in <span className="text-white font-bold">Data Science</span> and <span className="text-white font-bold">Software Engineering</span>. 
                I build intelligent, data-driven systems and scalable web applications.
              </motion.p>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8">
                <div className="flex gap-4">
                  <button
                    onClick={() => scrollToSection("projects")}
                    className="group px-8 py-4 bg-[#C2A878] text-[#07131d] font-bold font-mono text-sm uppercase tracking-widest hover:bg-white transition-colors"
                  >
                    View Work
                  </button>
                  <button
                    onClick={() => scrollToSection("contact")}
                    className="group px-8 py-4 border border-white/20 text-[#C2A878] font-bold font-mono text-sm uppercase tracking-widest hover:border-[#C2A878] hover:bg-[#C2A878]/5 transition-colors flex items-center gap-2"
                  >
                    Contact
                    <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>

                <div className="flex gap-2">
                  <SocialLink href="https://github.com/FauzieA" Icon={FaGithub} />
                  <SocialLink href="https://www.linkedin.com/in/fauziyya-ahmed/" Icon={FaLinkedin} />
                  <SocialLink href="mailto:fauxieahmed22@gmail.com" Icon={FaEnvelope} />
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2 }}
              className="lg:col-span-5 flex justify-center lg:justify-end relative pointer-events-none select-none"
            >
              <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px]">
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#C2A878]"></div>
                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#C2A878]"></div>
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#C2A878]"></div>
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#C2A878]"></div>

                <div className="absolute inset-4 border border-white/5 bg-[#0d1b27]/50 backdrop-blur-sm">
                    <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/10"></div>
                    <div className="absolute left-1/2 top-0 h-full w-[1px] bg-white/10"></div>
                </div>

                <div className="absolute inset-0 overflow-hidden">
                   <FloatingShapes />
                </div>

                <motion.div 
                    animate={{ top: ["0%", "100%", "0%"] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                    className="absolute left-0 w-full h-[2px] bg-[#C2A878]/50 shadow-[0_0_10px_#C2A878]"
                />
              </div>
            </motion.div>
          </div>
        </section>
      ) : (
        /* LIGHT MODE HERO */
        <section 
          id="hero" 
          className="relative min-h-[85vh] lg:min-h-screen w-full flex items-center bg-[#FCFCFA] overflow-hidden px-4 md:px-10 pt-24 lg:pt-32"
        >
          <div className="absolute inset-0 opacity-[0.15] pointer-events-none mix-blend-multiply bg-[url('https://www.transparenttextures.com/patterns/white-paper-board.png')] z-0" />
          <div className="absolute inset-0 opacity-[0.1] pointer-events-none z-0" 
               style={{ backgroundImage: 'radial-gradient(#4A4E69 0.5px, transparent 0.5px)', backgroundSize: '30px 30px' }} />

          <div className="max-w-7xl mx-auto w-full grid grid-cols-2 lg:grid-cols-12 gap-2 lg:gap-0 items-center relative z-10">
            <div className="col-span-1 lg:col-span-5 relative flex justify-center lg:justify-start">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="relative"
              >
                <img 
                  src={avatarImg} 
                  alt="Fauziyya" 
                  className="w-full max-w-[160px] md:max-w-full h-auto drop-shadow-[5px_5px_15px_rgba(74,78,105,0.05)]"
                />
                
                <motion.div 
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 6, repeat: Infinity }}
                  className="absolute -top-2 -right-2 lg:top-10 lg:-right-4 bg-white border border-[#4A4E69]/10 px-2 py-1 shadow-sm rotate-3"
                >
                  <span className="text-[7px] lg:text-[10px] font-bold tracking-widest text-[#4A4E69]/60 uppercase">Filing_01</span>
                </motion.div>
              </motion.div>
            </div>

            <div className="col-span-1 lg:col-span-7 text-left pl-2 lg:pl-0 flex flex-col">
              <motion.div
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                className="mb-4 lg:mb-2"
              >
                <p className="font-mono text-[7px] lg:text-[10px] tracking-[0.3em] text-[#4A4E69]/40 uppercase mb-2 lg:mb-8">
                  Ver. // 2026
                </p>

                <h1 className="font-quicksand leading-none select-none">
                  <span className="block text-3xl md:text-7xl lg:text-[110px] font-bold text-[#4A4E69] tracking-tighter">
                    FAUZIYYA
                  </span>
                  <span className="block text-3xl md:text-7xl lg:text-[130px] font-bold text-hollow -mt-1 lg:-mt-4 lg:ml-8">
                    AHMED.
                  </span>
                </h1>
              </motion.div>

              <div className="mt-0 lg:mt-0">
                <p className="font-outfit text-xs md:text-xl text-[#4A4E69]/80 leading-relaxed mb-4 lg:mb-6 max-w-md">
                  Crafting <span className="italic underline decoration-[#FFD1DC] decoration-[3px] lg:decoration-[6px] underline-offset-2">intelligent interfaces</span> for a modern web. 
                </p>

                <div className="flex items-center gap-4 lg:gap-10">
                  <motion.a
                    href="#projects"
                    onClick={(e) => handleScroll(e, '#projects')}
                    className="flex items-center justify-center px-6 lg:min-w-[180px] h-[40px] lg:h-[54px] border-2 border-[#4A4E69] rounded-full font-bold text-[#4A4E69] text-[9px] lg:text-sm tracking-widest uppercase transition-all"
                  >
                    Archive
                  </motion.a>

                  <a 
                    href="#contact" 
                    onClick={(e) => handleScroll(e, '#contact')}
                    className="font-bold text-[#4A4E69]/60 hover:text-[#4A4E69] border-b border-[#FFD6BA] tracking-widest text-[9px] lg:text-sm uppercase"
                  >
                    Contact
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}