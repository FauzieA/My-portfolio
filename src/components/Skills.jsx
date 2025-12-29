import React from "react";
import { motion } from "framer-motion";
import FloatingShapes from "../components/FloatingShapes";

// Icons - Using stable imports from FontAwesome (fa)
import { 
  FaPython, 
  FaReact, 
  FaGitAlt, 
  FaNodeJs, 
  FaFigma, 
  FaAws,
  FaChartBar, 
  FaCloud,
  FaCode // Generic code icon for header
} from "react-icons/fa";

// Icons - Using stable imports from SimpleIcons (si)
import { 
  SiJavascript, 
  SiTailwindcss, 
  SiNextdotjs, 
  SiDjango, 
  SiMysql, 
  SiPandas, 
  SiNumpy, 
  SiScikitlearn, 
  SiTensorflow, 
  SiOpencv,
  SiCplusplus,
  SiPostman,
  SiPhp,
  SiStreamlit,
  SiExpress
} from "react-icons/si";


const skillCategories = [
  {
    title: "Languages",
    skills: [
      { name: "Python", icon: FaPython, color: "#3776AB" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "C / C++", icon: SiCplusplus, color: "#00599C" },
      { name: "SQL", icon: SiMysql, color: "#4479A1" }, 
      { name: "PHP", icon: SiPhp, color: "#777BB4" },   
    ],
  },
  {
    title: "Full-Stack Dev",
    skills: [
      { name: "React.js", icon: FaReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
      { name: "Node.js", icon: FaNodeJs, color: "#339933" },
      { name: "Express.js", icon: SiExpress, color: "#000000" }, 
      { name: "Django", icon: SiDjango, color: "#092E20" },
      { name: "Tailwind", icon: SiTailwindcss, color: "#38B2AC" },
    ],
  },
  {
    title: "Data Science & AI",
    skills: [
      { name: "TensorFlow", icon: SiTensorflow, color: "#FF6F00" },
      { name: "Scikit-Learn", icon: SiScikitlearn, color: "#F7931E" },
      { name: "Pandas", icon: SiPandas, color: "#150458" },
      { name: "NumPy", icon: SiNumpy, color: "#013243" },
      { name: "OpenCV", icon: SiOpencv, color: "#5C3EE8" },
      { name: "Streamlit", icon: SiStreamlit, color: "#FF4B4B" }, 
    ],
  },
  {
    title: "Tools & Cloud",
    skills: [
      { name: "Git / GitHub", icon: FaGitAlt, color: "#F05032" },
      { name: "AWS", icon: FaAws, color: "#FF9900" },            
      { name: "Power BI", icon: FaChartBar, color: "#F2C811" },
      { name: "Postman", icon: SiPostman, color: "#FF6C37" },
      { name: "IBM Cloud", icon: FaCloud, color: "#052FAD" },
      { name: "Figma", icon: FaFigma, color: "#F24E1E" },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="w-full py-24 bg-[#07131d] relative overflow-hidden flex flex-col items-center">
      
      {/* --- BACKGROUND GRID --- */}
      <div className="absolute inset-0 flex justify-between pointer-events-none opacity-5">
        <div className="w-[1px] h-full bg-white"></div>
        <div className="w-[1px] h-full bg-white hidden md:block"></div>
        <div className="w-[1px] h-full bg-white hidden lg:block"></div>
        <div className="w-[1px] h-full bg-white"></div>
      </div>

      <FloatingShapes />

      {/* --- HEADER --- */}
      <div className="relative z-10 text-center mb-20 px-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 border border-[#C2A878]/30 bg-[#C2A878]/5 rounded-none mb-6">
            <span className="w-2 h-2 bg-[#C2A878] rounded-full"></span>
            <span className="text-[#C2A878] text-xs font-mono uppercase tracking-widest">
                Expertise
            </span>
        </div>
        
        <h2 className="text-4xl sm:text-5xl font-bold text-[#E8EAEF] tracking-tight">
          Technical Proficiency<span className="text-[#C2A878]">.</span>
        </h2>
      </div>

      {/* --- CATEGORY GRID --- */}
      <div className="relative z-10 max-w-[1400px] w-full px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillCategories.map((category, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            className="group relative bg-[#0d1b27] border border-white/10 p-8 hover:border-[#C2A878]/50 transition-colors"
          >
            {/* Corner Brackets (Kept these because they look nice and structural) */}
            <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-[#C2A878]/30 group-hover:border-[#C2A878] transition-colors"></div>
            <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-[#C2A878]/30 group-hover:border-[#C2A878] transition-colors"></div>
            <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-[#C2A878]/30 group-hover:border-[#C2A878] transition-colors"></div>
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-[#C2A878]/30 group-hover:border-[#C2A878] transition-colors"></div>

            {/* Category Title Header (Simplified) */}
            <div className="flex items-center justify-between mb-8 border-b border-white/5 pb-4">
                <h3 className="text-lg font-bold text-[#E8EAEF] flex items-center gap-3 font-mono tracking-wider uppercase">
                  <FaCode className="text-[#C2A878] text-sm" />
                  {category.title}
                </h3>
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {category.skills.map((skill, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center justify-center gap-3 p-4 bg-[#132636]/50 border border-white/5 hover:bg-[#1a2c3d] hover:border-[#C2A878]/30 transition-all group/skill"
                >
                  {/* Icon */}
                  <div 
                    className="text-2xl text-[#C9CCD3] group-hover/skill:scale-110 transition-transform duration-300"
                    style={{ color:  skill.color }} 
                  >
                     {skill.icon ? <skill.icon /> : <span className="text-xs font-bold">FN</span>}
                  </div>
                  
                  {/* Name */}
                  <span className="text-xs font-medium text-[#C9CCD3] group-hover/skill:text-white font-mono uppercase tracking-wide">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}