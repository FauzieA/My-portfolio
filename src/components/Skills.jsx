import React from "react";
import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Data & Analysis",
    skills: ["Python", "R", "SQL", "Machine Learning", "Data Visualization", "Pandas/NumPy"]
  },
  {
    title: "Frontend Development",
    skills: ["React.js", "Next.js", "Tailwind CSS", "Framer Motion", "JavaScript (ES6+)", "UI/UX Design"]
  },
  {
    title: "Tools & Systems",
    skills: ["Git/GitHub", "Docker", "AWS", "WordPress", "Moodle LMS", "Linux/Bash"]
  },
  {
    title: "Soft Skills",
    skills: ["Technical Writing", "Public Speaking", "Project Management", "Curriculum Design", "Mentorship"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="w-full py-12 bg-white px-8 md:px-24 lg:px-40 font-sans overflow-hidden">
      
      {/* Tightened Header - Consistently aligned with Services/Portfolio */}
      <div className="max-w-5xl mx-auto mb-24 text-center">
        <h2 className="text-[#001F3F] text-4xl md:text-4xl font-serif mb-4 tracking-tight uppercase">Technical Skills</h2>
        <div className="h-[1px] w-12 bg-[#FFB6C1] mx-auto mb-6"></div>
        <p className="text-[#001F3F]/60 text-lg font-light max-w-2xl mx-auto">
          Expertise across data science, backend systems, and modern web technologies
        </p>
      </div>

      {/* Centered Technical Grid */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-16">
        {skillCategories.map((category, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="border-t border-[#f0f0f0] pt-8"
          >
            {/* Category Title - High Contrast */}
            <h3 className="text-[#001F3F] text-xs font-black uppercase tracking-[0.3em] mb-8 flex items-center gap-4">
              <span className="w-2 h-2 bg-[#FFB6C1] rounded-full"></span>
              {category.title}
            </h3>

            {/* Skills List - Dense and solid */}
            <div className="flex flex-wrap gap-x-6 gap-y-4">
              {category.skills.map((skill, i) => (
                <div key={i} className="group relative">
                  <span className="text-[14px] text-[#001F3F] font-light cursor-default hover:text-[#FFB6C1] transition-colors">
                    {skill}
                  </span>
                  {/* Subtle underline that appears on hover */}
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#FFB6C1] group-hover:w-full transition-all duration-300"></span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  );
}