import React from "react";
import { motion } from "framer-motion";
import { 
  FaPython, FaReact, FaGitAlt, FaNodeJs, FaFigma, FaAws, FaChartBar, FaCode 
} from "react-icons/fa";
import { 
  SiJavascript, SiTailwindcss, SiNextdotjs, SiDjango, SiMysql, SiPandas, 
  SiScikitlearn, SiTensorflow, SiOpencv, SiCplusplus, SiPhp 
} from "react-icons/si";

const skillCategories = [
  {
    title: "Languages",
    skills: [
      { name: "Python", icon: FaPython },
      { name: "JavaScript", icon: SiJavascript },
      { name: "C / C++", icon: SiCplusplus },
      { name: "SQL", icon: SiMysql }, 
      { name: "PHP", icon: SiPhp },   
    ],
  },
  {
    title: "Full-Stack Dev",
    skills: [
      { name: "React.js", icon: FaReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Node.js", icon: FaNodeJs },
      { name: "Django", icon: SiDjango },
      { name: "Tailwind", icon: SiTailwindcss },
    ],
  },
  {
    title: "Data Science & AI",
    skills: [
      { name: "TensorFlow", icon: SiTensorflow },
      { name: "Scikit-Learn", icon: SiScikitlearn },
      { name: "Pandas", icon: SiPandas },
      { name: "OpenCV", icon: SiOpencv },
    ],
  },
  {
    title: "Systems & Cloud",
    skills: [
      { name: "Git / GitHub", icon: FaGitAlt },
      { name: "AWS", icon: FaAws },            
      { name: "Power BI", icon: FaChartBar },
      { name: "Figma", icon: FaFigma },
    ],
  },
];

export default function Skills() {
    return (
      <section id="skills" className="w-full py-32 bg-white px-6 font-sans">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8 border-b-2 border-[#001F3F] pb-16">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="text-[#FFB6C1] text-[10px] tracking-[0.5em] font-bold uppercase">System.Capability</span>
                <div className="h-px w-12 bg-[#FFB6C1]" />
              </div>
              <h2 className="text-[#001F3F] font-serif text-5xl md:text-7xl italic leading-tight">
                Technical <br /> Expertise
              </h2>
            </div>
            <p className="max-w-xs text-[11px] text-[#001F3F] leading-relaxed uppercase tracking-[0.2em] font-bold">
              High-performance tools for enterprise-level deployment.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-[#f0f0f0] border border-[#f0f0f0]">
            {skillCategories.map((category, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0 }} 
                whileInView={{ opacity: 1 }} 
                viewport={{ once: true }}
                className="bg-white p-12 group"
              >
                <div className="flex items-center justify-between mb-12">
                  <h3 className="text-sm font-bold text-[#001F3F] uppercase tracking-[0.3em]">
                    {category.title}
                  </h3>
                  <FaCode className="text-[#FFB6C1]" size={14} />
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-10 gap-x-6">
                  {category.skills.map((skill, i) => (
                    <div key={i} className="flex flex-col gap-4 group/skill">
                      <div className="flex items-center gap-3">
                        {/* ICON IS NOW SOLID NAVY */}
                        <skill.icon className="text-[#001F3F] group-hover/skill:text-[#FFB6C1] transition-colors duration-300" size={20} />
                        {/* TEXT IS NOW SOLID NAVY */}
                        <span className="text-[10px] font-black text-[#001F3F] uppercase tracking-tighter">
                          {skill.name}
                        </span>
                      </div>
                      {/* BOLD PINK ACCENT LINE */}
                      <div className="w-full h-[3px] bg-[#f0f0f0]">
                        <div className="w-1/3 h-full bg-[#FFB6C1] group-hover/skill:w-full transition-all duration-500 ease-in-out" />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
}