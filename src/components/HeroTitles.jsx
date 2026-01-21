import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Typewriter from "typewriter-effect";

const titles = [
  "Data Scientist",
  "Software Engineer",
  "Full-Stack Developer",
  "TechNexus Co-Founder",
];

export default function HeroTitles() {
  const [index, setIndex] = useState(0);
  const [key, setKey] = useState(0);

  // Rotate titles every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % titles.length);
      setKey((prev) => prev + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-12 md:h-14 flex items-center">
      <AnimatePresence mode="wait">
        <motion.span
          key={key}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.5 }}
          className="absolute text-[#C2A878] font-bold text-lg md:text-2xl whitespace-nowrap"
        >
          {titles[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}