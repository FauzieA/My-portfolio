import React from "react";
import { motion } from "framer-motion";

const shapes = ["◆", "▲", "—", "✦"]; // geometric and minimal

const Particles = ({ count = 25 }) => {
  const particles = Array.from({ length: count });

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {particles.map((_, i) => {
        const size = Math.random() * 16 + 12; // increased: 12–28px
        const startX = Math.random() * 100; 
        const duration = Math.random() * 8 + 10;
        const delay = Math.random() * 5;
        const rune = shapes[Math.floor(Math.random() * shapes.length)];

        return (
          <motion.div
            key={i}
            initial={{
              opacity: 0,
              x: `${startX}vw`,
              y: "110vh",
              rotate: 0,
            }}
            animate={{
              opacity: [0, 0.18, 0], // slightly stronger
              y: "-10vh",
              rotate: 360 * (Math.random() > 0.5 ? 1 : -1),
            }}
            transition={{
              duration,
              delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              position: "absolute",
              fontSize: size,
              color: "rgba(220, 235, 255, 0.22)", // slightly brighter
              textShadow: "0 0 6px rgba(180, 210, 255, 0.35)", // ✨ **glow**
              filter: "blur(0.2px)", // light blur
              userSelect: "none",
            }}
          >
            {rune}
          </motion.div>
        );
      })}
    </div>
  );
};

export default Particles;
