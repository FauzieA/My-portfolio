import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChartLine, FaCode, FaChalkboardTeacher, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";

const services = [
  {
    id: 1,
    title: "Data & AI Solutions",
    icon: <FaChartLine />,
    tagline: "I transform raw data into clear, actionable insights and develop practical machine learning models for real-world problems.",
    alignment: [
      "Data-Driven Transformations: Leveraging existing data to drive high-level strategy and decision-making.",
      "Automated Innovation: Implementing predictive models to solve complex operational challenges.",
      "Insight Clarity: Translating complex datasets into clear, actionable, and visual narratives."
    ],
    offerings: [
      {
        sub: "Data Analytics & Visualization",
        text: "I transform raw data into insights through dashboards, reports, and exploratory analysis—helping organizations make informed decisions."
      },
      {
        sub: "Machine Learning Solutions",
        text: "I develop practical models for prediction and automation, focusing on solutions that are applicable to real-world problems."
      }
    ]
  },
  {
    id: 2,
    title: "Build & Develop",
    icon: <FaCode />,
    tagline: "I design and build responsive, user-focused web interfaces where technical precision meets clean, intuitive design.",
    alignment: [
      "User-Centric Architecture: Designing modern interfaces that prioritize intuitive navigation and professional aesthetics.",
      "System Synergy: Bridging the gap between front-end experiences and robust back-end systems.",
      "Performance Engineering: Building responsive, high-speed platforms using modern technologies like React and Vite."
    ],
    offerings: [
      {
        sub: "Frontend Web Development",
        text: "I design and build responsive web interfaces focusing on creating clean, intuitive experiences while integrating with backend systems."
      }
    ]
  },
  {
    id: 3,
    title: "Teach, Speak & Facilitate",
    icon: <FaChalkboardTeacher />,
    tagline: "I specialize in simplifying complex technical concepts and building practical, hands-on skills for diverse audiences.",
    alignment: [
      "Empowerment through Mentorship: Providing structured guidance in programming and data science for students and professionals.",
      "Technical Facilitation: Moderating interactive sessions and tech talks for schools and professional organizations.",
      "Practical Skill-Building: Delivering workshops that simplify complex concepts into actionable, real-world skills."
    ],
    offerings: [
      {
        sub: "Technical Tutoring & Mentorship",
        text: "Having taught over 400 students, I provide structured, hands-on tutoring to simplify complex concepts and build practical skills."
      },
      {
        sub: "Workshops, Talks & Moderation",
        text: "I deliver engaging tech workshops and moderated sessions for schools and organizations that are interactive and tailored."
      }
    ]
  }
];

export default function Services() {
  const [selectedId, setSelectedId] = useState(null);
  const activeService = services.find(s => s.id === selectedId);

  return (
    <section className="py-32 bg-white relative px-6 md:px-24 font-sans">
      <div className="max-w-7xl mx-auto mb-20 text-center">
        <h2 className="text-[#001F3F] font-serif text-5xl md:text-7xl mb-4 italic">Services</h2>
        <div className="h-[2px] w-24 bg-[#FFB6C1] mx-auto"></div>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {services.map((service) => (
          <motion.div
            layoutId={`card-${service.id}`}
            key={service.id}
            onClick={() => setSelectedId(service.id)}
            className="cursor-pointer group bg-white border border-[#f0f0f0] p-10 shadow-sm hover:shadow-xl transition-all"
          >
            <div className="text-4xl text-[#FFB6C1] mb-6">{service.icon}</div>
            <h3 className="text-[#001F3F] text-xl font-serif font-bold mb-4">{service.title}</h3>
            <p className="text-sm text-[#001F3F]/60 leading-relaxed line-clamp-3">{service.tagline}</p>
            <div className="mt-8 text-[10px] font-bold uppercase tracking-[0.2em] text-[#FFB6C1]">Explore Alignment +</div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedId && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-10 bg-[#001F3F]/40 backdrop-blur-md">
            <motion.div
              layoutId={`card-${selectedId}`}
              className="bg-white max-w-4xl w-full max-h-[90vh] overflow-y-auto p-8 md:p-16 relative shadow-2xl rounded-sm"
            >
              <button onClick={() => setSelectedId(null)} className="absolute top-8 right-8 text-[#001F3F]/30 hover:text-[#001F3F]">
                <FaTimes size={24} />
              </button>

              <div className="flex flex-col items-center text-center mb-16">
                <div className="w-20 h-20 rounded-full border border-[#FFB6C1] flex items-center justify-center text-[#FFB6C1] text-3xl mb-6">
                  {activeService.icon}
                </div>
                <h2 className="text-[#001F3F] font-serif text-4xl mb-4">{activeService.title}</h2>
                <p className="max-w-xl text-[#001F3F]/70 text-lg leading-relaxed">{activeService.tagline}</p>
              </div>

              <div className="space-y-16">
                {/* Strategic Alignment Section */}
                <div>
                  <h4 className="text-[#001F3F] text-xs font-bold tracking-[0.3em] uppercase mb-8 pb-3 border-b border-[#f0f0f0]">Strategic Alignment</h4>
                  <ul className="space-y-6">
                    {activeService.alignment.map((item, i) => (
                      <li key={i} className="flex items-start gap-4 text-[#001F3F]/80 leading-relaxed">
                        <span className="text-[#FFB6C1] font-bold text-lg leading-none">/</span> <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Core Offerings Section */}
                <div>
                  <h4 className="text-[#001F3F] text-xs font-bold tracking-[0.3em] uppercase mb-8 pb-3 border-b border-[#f0f0f0]">Core Offerings</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {activeService.offerings.map((item, i) => (
                      <div key={i}>
                        <h5 className="text-[#001F3F] font-bold text-sm mb-3">{item.sub}</h5>
                        <p className="text-[#001F3F]/60 text-sm leading-relaxed">{item.text}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Contact Section - Restored to Old Style */}
                <div className="pt-12 border-t border-[#f0f0f0]">
                  <h4 className="text-[#001F3F] text-xs font-bold tracking-[0.2em] uppercase mb-6">Contact me</h4>
                  <p className="text-sm text-[#001F3F]/60 mb-6">
                    Tell me more about your project at <span className="text-[#001F3F] font-semibold underline decoration-[#FFB6C1]">fauxieahmed22@gmail.com</span> to see if we can work together.
                  </p>
                  <div className="flex gap-4">
                    <a 
                      href="https://github.com/FauzieA" 
                      target="_blank" 
                      rel="noreferrer"
                      className="px-6 py-2 border border-[#FFB6C1] text-[#FFB6C1] text-[10px] font-bold uppercase tracking-widest hover:bg-[#FFB6C1] hover:text-white transition-all"
                    >
                      GitHub
                    </a>
                    <a 
                      href="https://linkedin.com/in/fauzivva-ahmed" 
                      target="_blank" 
                      rel="noreferrer"
                      className="px-6 py-2 border border-[#FFB6C1] text-[#FFB6C1] text-[10px] font-bold uppercase tracking-widest hover:bg-[#FFB6C1] hover:text-white transition-all"
                    >
                      LinkedIn
                    </a>
                    <a 
                      href="mailto:fauxieahmed22@gmail.com" 
                      className="px-6 py-2 border border-[#FFB6C1] text-[#FFB6C1] text-[10px] font-bold uppercase tracking-widest hover:bg-[#FFB6C1] hover:text-white transition-all"
                    >
                      Mail
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}