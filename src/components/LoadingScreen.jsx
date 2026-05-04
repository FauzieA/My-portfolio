import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        const increment = Math.floor(Math.random() * 8) + 4;
        return Math.min(prev + increment, 100);
      });
    }, 150);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      const timeout = setTimeout(() => {
        onComplete();
      }, 800); 
      return () => clearTimeout(timeout);
    }
  }, [progress, onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] bg-white flex flex-col items-center justify-center font-sans px-8 md:px-24 lg:px-40"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
    >
      <div className="relative z-10 flex flex-col items-center w-full max-w-5xl">
        
        {/* --- MINIMAL INDICATOR --- */}
        <div className="relative w-16 h-16 mb-12">
          {/* Rotating Ring - Very thin, very light */}
          <motion.div 
            className="absolute inset-0 border-[0.5px] border-[#001F3F]/10 rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          />
          {/* Percentage Counter - Serif Italic for elegance */}
          <div className="absolute inset-0 flex items-center justify-center font-serif italic text-2xl text-[#001F3F]">
            {progress}
          </div>
        </div>

        {/* --- PROGRESS BAR --- */}
        <div className="w-full max-w-[180px] text-center">
          {/* Razor Thin Progress Line */}
          <div className="w-full h-[1px] bg-[#f5f5f5] relative overflow-hidden mb-4">
            <motion.div
              className="absolute top-0 left-0 h-full bg-[#FFB6C1]"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ ease: "easeOut" }}
            />
          </div>

          {/* Minimal Status Text - Swapped to "Access" for a less techy feel */}
          <div className="flex justify-between items-center text-[8px] font-black uppercase tracking-[0.5em] text-[#001F3F]">
             <span>
               {progress < 100 ? "Portfolio.Access" : "Welcome"}
             </span>
             <span className="text-[#FFB6C1]">/ 100</span>
          </div>
        </div>
      </div>

      {/* --- FOOTER NAME (Editorial Spine) --- */}
      <div className="absolute bottom-12 flex flex-col items-center">
        {/* The Vertical Spine - Consistent with your Timeline sections */}
        <div className="h-10 w-[1px] bg-[#FFB6C1] mb-6" />
        <div className="text-[10px] uppercase tracking-[0.6em] text-[#001F3F] font-bold">
          Fauziyya Ahmed
        </div>
      </div>
    </motion.div>
  );
}