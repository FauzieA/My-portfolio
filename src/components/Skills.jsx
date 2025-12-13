// src/components/Skills.jsx
import React from "react";
import FlipCard from "./FlipCard";

// Heroicons
import { ChartBarIcon, LightBulbIcon, AcademicCapIcon, UsersIcon, ChatBubbleBottomCenterTextIcon, BoltIcon } from "@heroicons/react/24/outline";

// React-icons
import { FaPython, FaReact, FaHtml5, FaCss3Alt, FaGitAlt, FaNodeJs, FaFigma } from "react-icons/fa";
import { SiJavascript, SiTailwindcss, SiNextdotjs, SiExpress, SiPostman, SiDjango, SiMysql, SiSqlite, SiPandas, SiNumpy, SiScikitlearn } from "react-icons/si";
import { MdMemory } from "react-icons/md";
import FloatingShapes from "../components/FloatingShapes";

const skills = [
  { name: "Python", icon: FaPython },
  { name: "JavaScript", icon: SiJavascript },
  { name: "React.js", icon: FaReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "HTML/CSS", icon: FaHtml5 },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Node.js", icon: FaNodeJs },
  { name: "Express.js", icon: SiExpress },
  { name: "Django", icon: SiDjango },
  { name: "SQL", icon: SiMysql },
  { name: "SQLite", icon: SiSqlite },
  { name: "Pandas", icon: SiPandas },
  { name: "NumPy", icon: SiNumpy },
  { name: "scikit-learn", icon: SiScikitlearn },
  { name: "EDA", icon: ChartBarIcon },
  { name: "CNN/RNN", icon: MdMemory },
  { name: "NLP", icon: ChatBubbleBottomCenterTextIcon },
  { name: "Smart Lighting", icon: LightBulbIcon },
  { name: "Automation Workflows", icon: BoltIcon },
  { name: "Git/GitHub", icon: FaGitAlt },
  { name: "VS Code", icon: FaReact },
  { name: "Postman", icon: SiPostman },
  { name: "Figma", icon: FaFigma },
  { name: "Communication", icon: ChatBubbleBottomCenterTextIcon },
  { name: "Teamwork", icon: UsersIcon },
  { name: "Teaching", icon: AcademicCapIcon },
  { name: "Analytical Thinking", icon: ChartBarIcon },
];


export default function Skills() {
  return (
    <section className="w-full py-16 flex flex-col items-center bg-[#07131dff] relative overflow-hidden">
      <FloatingShapes />

      {/* --- HEADER --- */}
      <div className="text-center mb-12">
        <p className="tracking-[0.25em] text-sm mb-2" style={{ color: "#C2A878" }}>
          SKILLS
        </p>
        <h2 className="text-4xl sm:text-5xl font-bold text-[#E8EAEF]">
          What I Bring to the Table
        </h2>
      </div>

      {/* --- CLUSTERED SKILL CARDS --- */}
      <div className="flex flex-wrap justify-center gap-6 max-w-6xl mt-6">
        {skills.map((s, i) => (
          <FlipCard key={i} name={s.name} Icon={s.icon} />
        ))}
      </div>
    </section>
  );
}
