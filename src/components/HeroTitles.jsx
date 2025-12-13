import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const titles = ["Computer Science", "Data Science", "Web Development"];

export default function HeroTitles() {
  const [index, setIndex] = useState(0);

  // Cycle titles every 2.5s
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % titles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-8 md:h-10 overflow-hidden relative mt-2">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="absolute w-full text-lg md:text-xl text-[#E0C68C] "
        >
          {titles[index]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
