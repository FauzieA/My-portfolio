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
        // Steady increments for a smooth experience
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
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [progress, onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] bg-[#07131d] flex flex-col items-center justify-center font-mono text-[#C2A878]"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.6 } }}
    >
      {/* Background Subtle Grid - Matches Hero */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(#C2A878 1px, transparent 1px)",
            backgroundSize: "40px 40px"
          }}
        />
      </div>

      <div className="relative z-10 flex flex-col items-center">
        
        {/* --- THE DIAMOND NODE --- */}
        <div className="relative w-20 h-20 mb-10">
          {/* Animated Diamond Frame */}
          <motion.div 
            className="absolute inset-0 border-2 border-[#C2A878] rotate-45"
            animate={{ 
              scale: [1, 1.1, 1], 
              opacity: [0.4, 1, 0.4],
              boxShadow: ["0 0 0px #C2A878", "0 0 20px #C2A878", "0 0 0px #C2A878"] 
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
          {/* Percentage Counter */}
          <div className="absolute inset-0 flex items-center justify-center font-bold text-xl tracking-tighter">
            {progress}%
          </div>
        </div>

        {/* --- MINIMAL PROGRESS LINE --- */}
        <div className="w-48 h-[1px] bg-white/10 relative overflow-hidden mb-6">
          <motion.div
            className="absolute top-0 left-0 h-full bg-[#C2A878]"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
          />
        </div>

        {/* --- STATUS TEXT --- */}
        <div className="text-[10px] uppercase tracking-[0.5em] text-[#C2A878] opacity-80 animate-pulse">
           {progress < 100 ? "Initializing" : "Ready"}
        </div>
      </div>

      {/* --- FOOTER NAME --- */}
      <div className="absolute bottom-10 text-[9px] uppercase tracking-[0.6em] opacity-30">
        Fauziyya Abdullahi Ahmed
      </div>
    </motion.div>
  );
}