import React, { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import FloatingShapes from "../components/FloatingShapes";
import { useTheme } from "../context/ThemeContext";
import { FaBriefcase, FaChalkboardTeacher, FaDesktop, FaLeaf } from "react-icons/fa";

const experiences = [
  {
    title: "Web Developer Intern",
    company: "Avidity International",
    period: "MAR 2025 – AUG 2025",
    description: "Spearheaded the optimization of Moodle LMS and WordPress platforms. Enhanced UI/UX for diverse user cohorts and ensured high platform reliability through proactive backend troubleshooting.",
    skills: ["Moodle", "WordPress", "PHP", "UI/UX"],
    icon: FaBriefcase,
    color: "#C2A878", 
  },
  {
    title: "Co-Founder & Lead Instructor",
    company: "TechNexus",
    period: "JAN 2025 – PRESENT",
    description: "Co-leading a tech education initiative. Developed curriculum and instructed intensive bootcamps on MERN Stack and Database Management. Represented the startup in the Swiss Innovation Challenge pitching rounds.",
    skills: ["MERN Stack", "Database Mgmt", "Public Speaking"],
    icon: FaChalkboardTeacher,
    color: "#3776AB", 
  },
  {
    title: "Library Associate (Operations)",
    company: "Albukhary Int. University",
    period: "AUG 2024 – MAY 2025",
    description: "Managed technical resource distribution and university hardware lifecycle. Coordinated academic engagement events and moderated professional 'Corpy Talk' sessions for the student body.",
    skills: ["Hardware Mgmt", "Logistics", "Moderation"],
    icon: FaDesktop,
    color: "#E8EAEF", 
  },
  {
    title: "COO & Deputy Key Person",
    company: "3Zero Club & Po-Stitch",
    period: "JAN 2024 – PRESENT",
    description: "Co-managing a sustainable social business focused on upcycling. Facilitated international collaborations and represented the initiative at high-profile university showcases.",
    skills: ["Operations", "Strategy", "Sustainability"],
    icon: FaLeaf,
    color: "#38B2AC", 
  },
];

const Card = ({ data, index }) => {
  const isEven = index % 2 === 0;

  return (
    <div className={`flex items-center justify-between w-full mb-16 md:mb-24 ${isEven ? "flex-row-reverse" : ""}`}>
      
      {/* --- EMPTY SPACE --- */}
      <div className="hidden md:block w-5/12" />

      {/* --- CENTER NODE (The Diamond) --- */}
      <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 flex items-center justify-center z-20">
        <div className="absolute w-6 h-6 bg-[#C2A878] rotate-45 blur-md opacity-40" />
        <div 
            className="w-8 h-8 md:w-10 md:h-10 rotate-45 bg-[#07131d] border-2 flex items-center justify-center shadow-lg"
            style={{ borderColor: data.color }}
        >
          <div className="-rotate-45 text-[#C9CCD3]">
            <data.icon size={14} />
          </div>
        </div>
      </div>

      {/* --- CONTENT CARD --- */}
      <motion.div
        initial={{ opacity: 0, x: isEven ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className={`w-full md:w-5/12 pl-16 md:pl-0 ${isEven ? "md:pr-16 text-left" : "md:pl-16 text-left"}`}
      >
        <div className="relative bg-[#0d1b27] border-l-2 border-[#C2A878] border-y border-r border-white/5 p-6 hover:border-r-[#C2A878]/50 transition-all group">
          
          <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-[#C2A878]/30 group-hover:border-[#C2A878] transition-colors" />

          <div className="flex flex-col mb-4">
            <div className="flex items-center gap-2 mb-2">
               <span className="text-[10px] font-mono text-[#C2A878] bg-[#C2A878]/10 px-2 py-0.5 border border-[#C2A878]/20 uppercase tracking-widest">
                 {data.period}
               </span>
            </div>
            <h3 className="text-xl font-bold text-[#E8EAEF] leading-tight group-hover:text-[#C2A878] transition-colors">
              {data.title}
            </h3>
            <span className="text-sm text-[#C9CCD3]/60 font-mono mt-1">
              // {data.company}
            </span>
          </div>

          <p className="text-sm text-[#C9CCD3] leading-relaxed mb-6 border-l border-white/10 pl-4">
            {data.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {data.skills.map((skill, i) => (
              <span 
                key={i} 
                className="px-2 py-1 text-[10px] uppercase font-mono tracking-wide text-[#C9CCD3]/80 bg-[#132636] border border-white/5 hover:border-[#C2A878]/50 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default function Experience() {
  const { isDarkMode } = useTheme();
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  if (isDarkMode) {
    return (
    <section id="experience" className="w-full py-24 bg-[#07131d] relative overflow-hidden px-4">
      <div className="absolute inset-0 flex justify-between pointer-events-none opacity-5">
        <div className="w-[1px] h-full bg-white"></div>
        <div className="w-[1px] h-full bg-white hidden md:block"></div>
        <div className="w-[1px] h-full bg-white hidden lg:block"></div>
        <div className="w-[1px] h-full bg-white"></div>
      </div>

      <FloatingShapes />

      <div className="text-center mb-20 relative z-10">
        <div className="flex items-center justify-center gap-4 mb-4">
          <span className="h-[1px] w-8 bg-[#C2A878]"></span>
          <span className="text-[#C2A878] font-mono text-sm tracking-widest uppercase">
            // Professional Journey
          </span>
          <span className="h-[1px] w-8 bg-[#C2A878]"></span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-bold text-[#E8EAEF] tracking-tight">
          Experience History<span className="text-[#C2A878]">.</span>
        </h2>
      </div>

      <div ref={containerRef} className="relative max-w-[1400px] mx-auto min-h-screen">
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] bg-white/10 transform md:-translate-x-1/2" />
        <motion.div 
            className="absolute left-4 md:left-1/2 top-0 w-[2px] bg-[#C2A878] origin-top transform md:-translate-x-1/2 shadow-[0_0_15px_#C2A878] z-0"
            style={{ scaleY, bottom: 0 }}
        />

        <div className="relative z-10 pb-24">
          {experiences.map((exp, index) => (
            <Card key={index} data={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
    );
  } else {
    /* LIGHT MODE EXPERIENCE */
    return (
      <section id="experience" className="py-12 lg:py-20 px-4 md:px-10 bg-[#FCFCFA] relative overflow-hidden">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 lg:mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#BDE0FE]/20 border border-[#BDE0FE] mb-4">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#4A4E69]">Experience</span>
            </div>
            <h2 className="font-quicksand text-3xl md:text-5xl lg:text-6xl font-bold text-[#4A4E69] leading-tight">
              My Professional<br/><span className="italic underline decoration-[#FFD1DC] decoration-[3px]">Journey.</span>
            </h2>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 lg:p-8 border-l-4 border-[#FFB7C5] shadow-sm hover:shadow-md transition-all"
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl lg:text-2xl font-bold text-[#4A4E69] mb-1">{exp.title}</h3>
                    <p className="text-sm lg:text-base text-[#4A4E69]/60 font-medium">{exp.company}</p>
                  </div>
                  <span className="text-[10px] lg:text-xs font-mono font-bold text-[#FFB7C5] whitespace-nowrap px-3 py-1 bg-[#FFB7C5]/10 rounded-full">
                    {exp.period}
                  </span>
                </div>

                <p className="text-sm lg:text-base text-[#4A4E69]/80 leading-relaxed mb-6">{exp.description}</p>

                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 text-[11px] font-bold rounded-full bg-[#4A4E69]/5 text-[#4A4E69] border border-[#4A4E69]/10"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  }
}