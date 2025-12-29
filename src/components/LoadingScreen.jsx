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
        return prev + 1;
      });
    }, 20); // Smooth, steady crawl
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (progress === 100) setTimeout(onComplete, 500);
  }, [progress, onComplete]);

  return (
    <motion.div 
      className="fixed inset-0 z-[9999] bg-[#07131d] flex flex-col items-center justify-center"
      exit={{ opacity: 0 }}
    >
      {/* The Diamond Node (Matches Experience Page) */}
      <div className="relative w-16 h-16 mb-8">
        <motion.div 
          className="absolute inset-0 border-2 border-[#C2A878] rotate-45"
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <div className="absolute inset-0 flex items-center justify-center font-mono text-[#C2A878] text-xs font-bold">
          {progress}%
        </div>
      </div>

      {/* Thin, Precise Progress Line */}
      <div className="w-40 h-[1px] bg-white/5 relative">
        <motion.div 
          className="absolute top-0 left-0 h-full bg-[#C2A878]"
          style={{ width: `${progress}%` }}
        />
      </div>

      <p className="mt-4 font-mono text-[9px] uppercase tracking-[0.5em] text-[#C2A878]/40">
        Fauziyya Ahmed
      </p>
    </motion.div>
  );
}