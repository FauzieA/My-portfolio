import React from "react";
import { motion } from "framer-motion";
import { 
  FaTrophy, FaCertificate, FaExternalLinkAlt, FaDatabase, 
  FaBrain, FaMicrosoft, FaGlobe 
} from "react-icons/fa";
import { SiPython } from "react-icons/si";

const honors = [
  {
    title: "Technical Excellence: Traffic Systems Research",
    org: "ML Symposium Board",
    year: "2025",
    summary: "Validated predictive modeling efficiency for urban logistics and traffic flow forecasting.",
    tag: "R&D_AWARD"
  },
  {
    title: "Hult Prize Strategic Lead",
    org: "Hult Global Initiative",
    year: "2025",
    summary: "Led the architectural development and feasibility modeling for a scalable social enterprise.",
    tag: "STRATEGY"
  },
  {
    title: "Sustainability Innovation Award",
    org: "Academic Review Board",
    year: "2024",
    summary: "Recognized for technical impact in environmental automation and logic-driven systems[cite: 4].",
    tag: "ENGINEERING"
  }
];

const credentials = [
  { name: "PCEP Python Certified", issuer: "Python Institute", icon: SiPython },
  { name: "IBM Data Fundamentals", issuer: "IBM", icon: FaDatabase },
  { name: "Advanced SQL Strategy", issuer: "Kaggle", icon: FaDatabase },
  { name: "Applied Machine Learning", issuer: "Kaggle", icon: FaBrain },
  { name: "Azure Quantum Module", issuer: "Microsoft", icon: FaMicrosoft },
  { name: "Global Citizenship", issuer: "AIU", icon: FaGlobe },
];

export default function Certifications() {
  return (
    <section id="certifications" className="w-full py-20 bg-white px-6 font-sans border-t border-[#f0f0f0]">
      <div className="max-w-7xl mx-auto">
        
        {/* --- HEADER: Consistent with Services/Portfolio --- */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8 border-b border-[#f0f0f0] pb-16">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-[#FFB6C1] text-[10px] tracking-[0.5em] font-bold uppercase">Industry.Validation</span>
              <div className="h-px w-12 bg-[#FFB6C1]" />
            </div>
            <h2 className="text-[#001F3F] font-serif text-5xl md:text-7xl italic leading-tight">
              Honors & <br /> Credentials
            </h2>
          </div>
          <p className="max-w-xs text-[10px] text-[#001F3F]/40 leading-relaxed uppercase tracking-[0.2em] font-bold italic">
            Peer-reviewed research and industry-standard certifications verifying technical proficiency[cite: 4].
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          
          {/* --- LEFT: Strategic Recognitions --- */}
          <div className="lg:col-span-5 space-y-10">
            <div className="flex items-center gap-4 text-[#001F3F]/20 text-[10px] font-bold tracking-[0.3em] mb-12">
              <FaTrophy className="text-[#FFB6C1]" /> <span>TECHNICAL_RECOGNITIONS</span>
            </div>
            
            {honors.map((award, i) => (
              <motion.div 
                key={i}
                whileHover={{ x: 10 }}
                className="relative p-8 border-l border-[#f0f0f0] hover:border-[#FFB6C1] transition-all group"
              >
                <div className="flex justify-between items-start mb-6">
                  <span className="text-[9px] text-[#FFB6C1] font-bold tracking-[0.3em] uppercase">
                    {award.tag}
                  </span>
                  <span className="text-[10px] text-[#001F3F]/20 font-bold">{award.year}</span>
                </div>
                <h4 className="text-2xl font-serif text-[#001F3F] mb-3 group-hover:text-[#FFB6C1] transition-colors">
                  {award.title}
                </h4>
                <p className="text-xs text-[#001F3F]/50 leading-relaxed font-light">
                  <span className="font-bold text-[#001F3F]/70">{award.org}</span> — {award.summary}
                </p>
              </motion.div>
            ))}
          </div>

          {/* --- RIGHT: Credential Index --- */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-4 text-[#001F3F]/20 text-[10px] font-bold tracking-[0.3em] mb-12">
              <FaCertificate className="text-[#FFB6C1]" /> <span>CREDENTIAL_INDEX</span>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-[#f0f0f0] border border-[#f0f0f0]">
              {credentials.map((cert, i) => (
                <div key={i} className="bg-white p-10 flex flex-col justify-between hover:bg-[#fcfcfc] transition-all group relative">
                  <div className="flex justify-between items-start mb-12">
                    <div className="w-14 h-14 border border-[#f0f0f0] flex items-center justify-center bg-white group-hover:border-[#FFB6C1]/40 transition-colors">
                      <cert.icon size={24} className="text-[#001F3F] group-hover:text-[#FFB6C1] transition-colors" />
                    </div>
                    <FaExternalLinkAlt className="text-[10px] text-[#001F3F]/10 group-hover:text-[#FFB6C1] transition-colors" />
                  </div>
                  <div>
                    <h4 className="text-[11px] font-bold text-[#001F3F] uppercase tracking-widest mb-2">{cert.name}[cite: 4]</h4>
                    <p className="text-[9px] text-[#001F3F]/30 font-bold tracking-widest uppercase">Verified By: {cert.issuer}</p>
                  </div>
                  
                  {/* Bottom Accent Line */}
                  <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#FFB6C1] group-hover:w-full transition-all duration-500" />
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}