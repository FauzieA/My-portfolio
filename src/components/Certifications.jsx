import React from "react";
import { motion } from "framer-motion";
import FloatingShapes from "../components/FloatingShapes";

// Icons - Safe imports
import { 
  FaTrophy, 
  FaAward, 
  FaMedal, 
  FaCertificate, 
  FaMicrosoft,
  FaDatabase, 
  FaChartPie, 
  FaBrain     
} from "react-icons/fa";

import { 
  SiPython 
} from "react-icons/si";

const awards = [
  {
    title: "Winner, Hult Prize (On-Campus)",
    organization: "Hult Prize Foundation",
    year: "2025",
    description: "Secured 1st place for social entrepreneurship, leading a team to ideate scalable business solutions for global impact.",
    icon: FaTrophy,
    color: "#C2A878", 
  },
  {
    title: "Best Paper Award",
    organization: "Traffic Prediction Research",
    year: "JUN 2025",
    description: "Awarded for 'Predictive AI Models for Traffic Prediction', comparing Classical ML vs. Neural Networks.",
    icon: FaAward,
    color: "#C2A878",
  },
  {
    title: "Best Project Award (Social Cluster)",
    organization: "Albukhary International University",
    year: "FEB 2024",
    description: "Recognized for the most impactful project in the Sustainability and Society category.",
    icon: FaMedal,
    color: "#C9CCD3", 
  },
  {
    title: "Grand Heritage Ambassador",
    organization: "AIU Cultural Week",
    year: "FEB 2025",
    description: "Awarded for outstanding representation and community leadership.",
    icon: FaAward,
    color: "#C2A878",
  },
];

const certifications = [
  {
    name: "PCEP: Certified Entry-Level Python Programmer",
    issuer: "Python Institute",
    icon: SiPython,
    color: "#3776AB",
  },
  {
    name: "Advanced SQL",
    issuer: "Kaggle",
    icon: FaDatabase, 
    color: "#20BEFF",
  },
  {
    name: "Data Visualization",
    issuer: "Kaggle",
    icon: FaChartPie, 
    color: "#20BEFF",
  },
  {
    name: "Intro to Machine Learning",
    issuer: "Kaggle",
    icon: FaBrain, 
    color: "#20BEFF",
  },
  {
    name: "IBM Data Fundamentals",
    issuer: "IBM",
    icon: FaCertificate, 
    color: "#052FAD",
  },
  {
    name: "IBM Cloud Essentials",
    issuer: "IBM",
    icon: FaCertificate, 
    color: "#052FAD",
  },
  {
    name: "Azure Quantum Winter School",
    issuer: "Qubit x Microsoft",
    icon: FaMicrosoft,
    color: "#00A4EF",
  },
  {
    name: "C for Beginners",
    issuer: "Great Learning Academy",
    icon: FaCertificate,
    color: "#E8EAEF",
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="w-full py-24 bg-[#07131d] relative overflow-hidden flex flex-col items-center px-6">
      
      {/* --- BACKGROUND GRID --- */}
      <div className="absolute inset-0 flex justify-between pointer-events-none opacity-5">
        <div className="w-[1px] h-full bg-white"></div>
        <div className="w-[1px] h-full bg-white hidden md:block"></div>
        <div className="w-[1px] h-full bg-white hidden lg:block"></div>
        <div className="w-[1px] h-full bg-white"></div>
      </div>

      <FloatingShapes />

      {/* --- HEADER --- */}
      <div className="relative z-10 text-center mb-20">
        <div className="flex items-center justify-center gap-4 mb-4">
          <span className="h-[1px] w-12 bg-[#C2A878]"></span>
          <span className="text-[#C2A878] font-mono text-sm tracking-widest uppercase">
            // Recognition Log
          </span>
          <span className="h-[1px] w-12 bg-[#C2A878]"></span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-bold text-[#E8EAEF] tracking-tight">
          Achievements<span className="text-[#C2A878]">.</span>
        </h2>
      </div>

      <div className="relative z-10 max-w-[1400px] w-full grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* === LEFT COLUMN: AWARDS (System Logs) === */}
        <div>
          <h3 className="text-xl font-bold text-[#E8EAEF] mb-8 flex items-center gap-3 font-mono uppercase tracking-wider border-b border-white/10 pb-4">
            <FaTrophy className="text-[#C2A878]" /> Honors & Awards
          </h3>
          
          <div className="flex flex-col gap-4">
            {awards.map((award, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-[#0d1b27] border-l-2 border-[#C2A878] border-y border-r border-white/5 p-6 hover:bg-[#C2A878]/5 transition-colors"
              >
                 {/* Corner Accent */}
                <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-[#C2A878]/30 group-hover:border-[#C2A878] transition-colors"></div>

                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-lg font-bold text-[#E8EAEF] group-hover:text-[#C2A878] transition-colors leading-tight">
                    {award.title}
                  </h4>
                  <span className="text-xs font-mono text-[#C2A878] border border-[#C2A878]/30 px-2 py-1 bg-[#C2A878]/5">
                    {award.year}
                  </span>
                </div>
                <p className="text-xs text-[#C9CCD3] font-mono uppercase tracking-wide mb-3 opacity-60">
                  // {award.organization}
                </p>
                <p className="text-sm text-[#C9CCD3] leading-relaxed border-l border-white/10 pl-3">
                  {award.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>


        {/* === RIGHT COLUMN: CERTIFICATIONS (File Directory) === */}
        <div>
          <h3 className="text-xl font-bold text-[#E8EAEF] mb-8 flex items-center gap-3 font-mono uppercase tracking-wider border-b border-white/10 pb-4">
            <FaCertificate className="text-[#C2A878]" /> Credential Index
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {certifications.map((cert, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 bg-[#0d1b27] p-4 border border-white/5 hover:border-[#C2A878]/50 hover:bg-[#132636] transition-all group"
              >
                {/* Icon Container (Square) */}
                <div 
                  className="w-10 h-10 flex items-center justify-center bg-[#07131d] border border-white/10 shrink-0 group-hover:border-[#C2A878]/30 transition-colors"
                  style={{ color: cert.color }}
                >
                  <cert.icon size={18} />
                </div>
                
                {/* Text */}
                <div className="overflow-hidden">
                  <h4 className="text-xs font-bold text-[#E8EAEF] leading-tight mb-1 font-mono uppercase truncate">
                    {cert.name}
                  </h4>
                  <p className="text-[10px] text-[#C9CCD3]/50 font-mono uppercase tracking-widest">
                    ISSUED_BY: {cert.issuer}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}