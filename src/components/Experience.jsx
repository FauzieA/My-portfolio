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
  const isEven = index % 2 === 0;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      className="relative pl-10 md:pl-0 mb-32 group"
    >
      {/* Centered Timeline Dot */}
      <div className="absolute left-0 md:left-1/2 top-2 w-3 h-3 bg-white border-2 border-[#FFB6C1] rounded-full z-10 transform -translate-x-1/2 group-hover:bg-[#FFB6C1] transition-all duration-300 shadow-[0_0_10px_rgba(255,182,193,0.5)]" />
      
      <div className={`flex flex-col ${isEven ? "md:items-end md:text-right" : "md:items-start md:text-left"}`}>
        {/* Tightened width from 42% to 45% for less "gap" in the middle */}
        <div className="w-full md:w-[45%] p-0 md:p-4 bg-transparent transition-all">
          <div className={`flex flex-col mb-4 ${isEven ? "md:items-end" : "md:items-start"}`}>
            <span className="text-[#FFB6C1] text-[9px] font-black tracking-[0.4em] uppercase mb-3">
              {data.period === "PRESENT" ? "● Active" : data.period}
            </span>
            <h3 className="text-[#001F3F] text-2xl md:text-3xl font-serif italic mb-1">{data.title}</h3>
            <span className="text-[10px] text-[#001F3F] font-bold uppercase tracking-widest bg-[#fcfcfc] px-2 py-1 border border-[#f0f0f0]">
              {data.company}
            </span>
          </div>
          
          <p className="text-[13px] text-[#001F3F] leading-relaxed font-light mb-6">
            {data.description}
          </p>
          
          <div className={`flex flex-wrap gap-2 ${isEven ? "md:justify-end" : "md:justify-start"}`}>
            {data.skills.map((s, i) => (
              <span key={i} className="text-[9px] uppercase tracking-widest font-black text-[#FFB6C1]">
                #{s.replace(/\s/g, '')}
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
    /* Increased lateral padding to pull content inward */
    <section id="experience" className="w-full py-14 bg-white px-8 md:px-24 lg:px-40 font-sans overflow-hidden">
      
      {/* Tightened Section Header */}
      <div className="max-w-5xl mx-auto mb-24 text-center">
        <h2 className="text-[#001F3F] text-4xl md:text-4xl font-serif mb-4 tracking-tight uppercase">Work Experience</h2>
        <div className="h-[1px] w-12 bg-[#FFB6C1] mx-auto mb-6"></div>
        <p className="text-[#001F3F]/60 text-lg font-light max-w-2xl mx-auto">
          Professional journey and key roles in tech, education, and impact
        </p>
      </div>

      <div ref={containerRef} className="relative max-w-5xl mx-auto">
        {/* Timeline Line: Slightly thicker and colored for "Tight" feel */}
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[1px] bg-[#f0f0f0] transform -translate-x-1/2" />
        <motion.div 
          className="absolute left-0 md:left-1/2 top-0 w-[1px] bg-[#001F3F] origin-top transform -translate-x-1/2 z-0" 
          style={{ scaleY, bottom: 0 }} 
        />
        
        <div className="relative z-10">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} data={exp} index={index} />
          ))}
        </div>
      </div>

      {/* Subtle Footer for the section */}
      <div className="max-w-5xl mx-auto mt-20 text-center">
        <div className="inline-block h-px w-24 bg-[#f0f0f0]" />
      </div>
    </section>
  );
}