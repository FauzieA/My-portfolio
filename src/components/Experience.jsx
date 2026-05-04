import React, { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

const experiences = [
  {
    title: "Technical Presales & IoT Solutions",
    company: "Altel Communications",
    period: "PRESENT",
    description: "Architecting IoT frameworks and industrial automation logic. Collaborating with technical teams to bridge the gap between complex engineering solutions and enterprise-level business requirements.",
    skills: ["IoT Architecture", "Technical Pitching", "Solution Design"],
  },
  {
    title: "Web Developer Intern",
    company: "Avidity International",
    period: "MAR 2025 – AUG 2025",
    description: "Spearheaded the optimization of Moodle LMS and WordPress platforms. Enhanced UI/UX for diverse user cohorts and ensured high platform reliability through proactive backend troubleshooting.",
    skills: ["Moodle", "WordPress", "PHP", "UI/UX"],
  },
  {
    title: "Co-Founder & Lead Instructor",
    company: "TechNexus",
    period: "JAN 2025 – PRESENT",
    description: "Co-leading a tech education initiative. Developed curriculum and instructed intensive bootcamps on MERN Stack and Database Management. Represented the startup in the Swiss Innovation Challenge pitching rounds.",
    skills: ["MERN Stack", "Database Mgmt", "Public Speaking"],
  },
  {
    title: "Library Associate (Operations)",
    company: "AIU Operations",
    period: "AUG 2024 – MAY 2025",
    description: "Managed technical resource distribution and university hardware lifecycle. Coordinated academic engagement events and moderated professional 'Corpy Talk' sessions.",
    skills: ["Hardware Mgmt", "Logistics", "Moderation"],
  },
  {
    title: "COO & Deputy Key Person",
    company: "Po-Stitch Initiative",
    period: "JAN 2024 – PRESENT",
    description: "Co-managing a sustainable social business focused on upcycling. Facilitated international collaborations and represented the initiative at high-profile university showcases.",
    skills: ["Operations", "Strategy", "Sustainability"],
  },
];

const ExperienceCard = ({ data, index }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative pl-12 md:pl-0 mb-24 group"
    >
      {/* Centered Timeline Dot (Desktop) */}
      <div className="absolute left-0 md:left-1/2 top-0 w-[10px] h-[10px] bg-white border-2 border-[#FFB6C1] rounded-full z-10 transform -translate-x-1/2 group-hover:scale-150 transition-transform duration-300" />
      
      <div className={`flex flex-col ${index % 2 === 0 ? "md:items-end md:text-right" : "md:items-start md:text-left"}`}>
        <div className="w-full md:w-[42%] p-8 bg-white border border-[#f0f0f0] hover:border-[#FFB6C1]/30 transition-all shadow-sm">
          <div className={`flex flex-col mb-4 ${index % 2 === 0 ? "md:items-end" : "md:items-start"}`}>
            <span className="text-[#FFB6C1] text-[9px] font-bold tracking-[0.4em] uppercase mb-2">
              {data.period === "PRESENT" ? "● Active" : data.period}
            </span>
            <h3 className="text-[#001F3F] text-2xl font-serif italic">{data.title}</h3>
            <span className="text-[10px] text-[#001F3F]/40 font-bold uppercase tracking-widest mt-1">
              // {data.company}
            </span>
          </div>
          
          <p className="text-xs text-[#001F3F]/60 leading-relaxed font-light mb-8 italic">
            {data.description}
          </p>
          
          <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? "md:justify-end" : "md:justify-start"}`}>
            {data.skills.map((s, i) => (
              <span key={i} className="px-3 py-1 text-[8px] uppercase tracking-widest font-bold text-[#001F3F]/40 bg-[#f9f9f9] border border-[#f0f0f0]">
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function Experience() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end end"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <section id="experience" className="w-full py-32 bg-white px-6 font-sans overflow-hidden">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto mb-32 border-b border-[#f0f0f0] pb-16">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-[#FFB6C1] text-[10px] tracking-[0.5em] font-bold uppercase">Deployment.History</span>
          <div className="h-px w-12 bg-[#FFB6C1]" />
        </div>
        <h2 className="text-[#001F3F] font-serif text-5xl md:text-7xl italic leading-tight">
          Professional <br /> Experience
        </h2>
      </div>

      <div ref={containerRef} className="relative max-w-7xl mx-auto">
        {/* Timeline Line */}
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[1px] bg-[#f0f0f0] transform -translate-x-1/2" />
        <motion.div 
          className="absolute left-0 md:left-1/2 top-0 w-[1px] bg-[#FFB6C1] origin-top transform -translate-x-1/2" 
          style={{ scaleY, bottom: 0 }} 
        />
        
        <div className="relative z-10">
          {experiences.map((exp, index) => <ExperienceCard key={index} data={exp} index={index} />)}
        </div>
      </div>
    </section>
  );
}