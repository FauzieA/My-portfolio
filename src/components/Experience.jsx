import React, { useRef, useState, useEffect } from "react";
import FloatingShapes from "../components/FloatingShapes";

const experiences = [
  {
    role: "Web Developer Intern",
    company: "Avidity International",
    date: "March 2025 – August 2025",
    bullets: [
      "Built Moodle LMS platforms with structured learning paths",
      "Added interactive LMS features (chat, cohorts, secure content access)",
      "Improved WordPress site UI/UX, responsiveness, and component animations",
    ],
  },
  {
    role: "Co-Founder & Instructor",
    company: "TechNexus (Global Student-Led Initiative)",
    date: "January 2025 – Present",
    bullets: [
      "Taught MERN stack, Django, and CS fundamentals to 200+ students",
      "Led development of internal platforms including the Business Hub and 3Zero website",
      "Organized technical training programs for university students",
    ],
  },
  {
    role: "COO",
    company: "Po Stitch",
    date: "2024 – Present",
    bullets: [
      "Managed operations and coordinated team deliverables",
      "Implemented process improvements for better workflow",
    ],
  },
  {
    role: "Secretary",
    company: "AIU Peers",
    date: "2023 – 2024",
    bullets: ["Organized events and meetings", "Handled member communications"],
  },
  {
    role: "Secretary",
    company: "Nigerian Students Community",
    date: "2023 – 2024",
    bullets: ["Managed community outreach", "Coordinated social and cultural events"],
  },
  {
    role: "Library Associate",
    company: "AIU Library",
    date: "2022 – 2023",
    bullets: ["Managed book loans and returns", "Assisted students with research queries"],
  },
];

export default function Experience() {
  const sectionRef = useRef(null);
  const itemRefs = useRef([]);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || itemRefs.current.length === 0) return;

      const sectionTop = sectionRef.current.getBoundingClientRect().top;
      const lastItem = itemRefs.current[itemRefs.current.length - 1];
      const lastItemTop =
        lastItem.getBoundingClientRect().top - sectionTop;

      const windowHeight = window.innerHeight;
      const scrollY = windowHeight * 0.6 - sectionTop;

      let p = scrollY / lastItemTop;
      p = Math.max(0, Math.min(1, p));

      setProgress(p);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const activeIndex = Math.floor(progress * experiences.length);

  return (
    <section
      ref={sectionRef}
      className="w-full py-20 bg-[#07131dff] flex justify-center relative"
    >
        <FloatingShapes />
      <div className="max-w-4xl w-full relative">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="tracking-[0.25em] text-sm mb-2 text-[#C2A878]">
            EXPERIENCE
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#E8EAEF]">
            My Journey
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Base Line */}
          <div className="absolute left-1/2 -translate-x-1/2 h-full w-[2px] bg-white/20" />

          {/* Fill Line */}
          <div
            className="absolute left-1/2 -translate-x-1/2 h-full w-[2px] bg-[#C2A878] origin-top transition-transform duration-300 ease-out"
            style={{ transform: `scaleY(${progress})` }}
          />

          {experiences.map((exp, i) => {
            const isLeft = i % 2 === 0;
            const isActive = i <= activeIndex;

            return (
              <div
                key={i}
                ref={(el) => (itemRefs.current[i] = el)}
                className={`mb-16 w-full flex ${
                  isLeft ? "justify-start" : "justify-end"
                }`}
              >
                <div className="relative w-1/2 ">
                  <div
                    className={`p-6 w-11/12 transition-all duration-500 bg-[#0d1b27]
                      ${isLeft ? "ml-auto" : "mr-auto"}
                      ${
                        isActive
                          ? "border-2 border-[#C2A878] shadow-[0_0_30px_rgba(194,168,120,0.35)]"
                          : "border border-white/10"
                      }
                    `}
                  >
                    <p className="text-sm text-[#C2A878]">{exp.date}</p>
                    <h3 className="text-xl font-semibold text-white">
                      {exp.role}
                    </h3>
                    <p className="text-[#E8EAEF] font-medium">
                      {exp.company}
                    </p>
                    <ul className="mt-2 list-disc list-inside text-sm text-[#C9CCD3]">
                      {exp.bullets.map((b, idx) => (
                        <li key={idx}>{b}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
