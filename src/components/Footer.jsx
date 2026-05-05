import React from "react";
import { FaArrowUp } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#001F3F] pt-24 pb-12 px-8 md:px-24 lg:px-40 font-sans overflow-hidden">
      
      {/* Decorative Background Text - Creates an "Editorial Logo" look */}
      <div className="absolute -bottom-10 -left-10 text-[15vw] font-serif italic text-white/[0.03] pointer-events-none select-none">
        Ahmed
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end pb-16 border-b border-white/10">
          
          {/* Left Side: The "Sign-off" */}
          <div>
            <h2 className="text-white text-3xl font-serif italic mb-6">
              Let's build something <br /> 
              <span className="text-[#FFB6C1] non-italic font-sans font-black uppercase tracking-tighter">remarkable.</span>
            </h2>
            <p className="text-white/40 text-[10px] tracking-[0.3em] uppercase font-bold">
              DATA • WEB • AI • EDUCATION
            </p>
          </div>

          {/* Right Side: Back to top and Year */}
          <div className="flex flex-col md:items-end gap-8">
            <button
              onClick={scrollToTop}
              className="group flex items-center gap-4 text-white text-[10px] tracking-[0.4em] uppercase font-black"
            >
              <span className="border-b border-white/20 group-hover:border-[#FFB6C1] transition-all pb-1">
                Back to Top
              </span>
              <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-[#FFB6C1] group-hover:border-[#FFB6C1] transition-all">
                <FaArrowUp className="text-white group-hover:text-[#001F3F] transition-colors" size={12} />
              </div>
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex gap-8 text-[9px] tracking-[0.2em] uppercase font-black text-white/30">
            <span>{currentYear} © Fauziyya Ahmed</span>
            
          </div>
          
          <div className="flex gap-6">
            {['LinkedIn', 'GitHub', 'Email'].map((link) => (
              <a 
                key={link} 
                href="#" // Replace with actual links
                className="text-[9px] tracking-[0.2em] uppercase font-black text-white/30 hover:text-[#FFB6C1] transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}