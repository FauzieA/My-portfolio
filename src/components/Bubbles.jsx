import React from 'react';
import { motion } from 'framer-motion';

export default function Bubbles() {
  return (
    <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden bg-[#FDFBF7]">
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -100, 0],
            x: [0, 50, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8 + i * 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute rounded-full opacity-30 blur-[80px]"
          style={{
            width: 300 + i * 50,
            height: 300 + i * 50,
            backgroundColor: i % 2 === 0 ? '#FFD6BA' : '#BDE0FE',
            left: `${i * 20}%`,
            top: `${i * 15}%`,
          }}
        />
      ))}
    </div>
  );
}