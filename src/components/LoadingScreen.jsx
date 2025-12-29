import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // We use a functional update to ensure we always have the latest 'prev' value
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        // Increment by a fixed amount to avoid logic errors
        const increment = Math.floor(Math.random() * 10) + 5;
        return Math.min(prev + increment, 100);
      });
    }, 150);

    return () => clearInterval(timer);
  }, []);

  // Listen for the moment progress hits 100
  useEffect(() => {
    if (progress === 100) {
      const timeout = setTimeout(() => {
        onComplete();
      }, 600); // Give the user a moment to see 100%
      return () => clearTimeout(timeout);
    }
  }, [progress, onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] bg-[#07131d] flex flex-col items-center justify-center font-mono text-[#C2A878]"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
    >
      <div className="relative z-10 text-center">
        <div className="text-6xl md:text-8xl font-bold mb-4 flex items-baseline justify-center">
          {progress}<span className="text-2xl opacity-40 ml-2">%</span>
        </div>

        <div className="w-64 h-[2px] bg-white/5 overflow-hidden mx-auto mb-6 relative">
          <motion.div
            className="h-full bg-[#C2A878] shadow-[0_0_15px_#C2A878]"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
          />
        </div>

        <div className="text-[10px] uppercase tracking-[0.3em] opacity-60">
           {progress < 100 ? "// Loading Resources" : "// Environment Ready"}
        </div>
      </div>
    </motion.div>
  );
}