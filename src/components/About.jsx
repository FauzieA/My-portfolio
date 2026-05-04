import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChartLine, FaCode, FaChalkboardTeacher, FaTimes } from "react-icons/fa";

const services = [
  {
    id: "data-ai",
    title: "Data & AI Solutions",
    icon: <FaChartLine />,
    tagline: "I transform raw data into clear, actionable insights and develop practical machine learning models for real-world problems.",
    alignment: [
      "Data-Driven Transformations: Leveraging existing data to drive high-level strategy.",
      "Automated Innovation: Implementing predictive models to solve complex challenges.",
      "Insight Clarity: Translating complex datasets into clear, visual narratives."
    ],
    offerings: [
      { sub: "Data Analytics", text: "Dashboards, reports, and exploratory analysis to help informed decision-making." },
      { sub: "Machine Learning", text: "Practical models for prediction and automation applicable to real-world problems." }
    ]
  },
  {
    id: "build-dev",
    title: "Build & Develop",
    icon: <FaCode />,
    tagline: "I design and build responsive, user-focused web interfaces where technical precision meets clean, intuitive design.",
    alignment: [
      "User-Centric Architecture: Designing modern interfaces prioritizing intuitive navigation.",
      "System Synergy: Bridging the gap between front-end and robust back-end systems.",
      "Performance Engineering: Building responsive, high-speed platforms using modern tech."
    ],
    offerings: [
      { sub: "Frontend Web Development", text: "Building responsive web interfaces with a focus on clean, intuitive experiences." }
    ]
  },
  {
    id: "teach-speak",
    title: "Teach & Facilitate",
    icon: <FaChalkboardTeacher />,
    tagline: "I specialize in simplifying complex technical concepts and building practical, hands-on skills for diverse audiences.",
    alignment: [
      "Mentorship: Providing structured guidance in programming and data science.",
      "Facilitation: Moderating interactive sessions and tech talks for organizations.",
      "Skill-Building: Delivering workshops that simplify complex concepts into actionable skills."
    ],
    offerings: [
      { sub: "Technical Tutoring", text: "Mentored 400+ students through hands-on tutoring to build practical skills." },
      { sub: "Workshops & Talks", text: "Engaging tech workshops and moderated sessions tailored for your audience." }
    ]
  }
];

export default function Services() {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <section id="services" className="py-20 bg-white relative px-8 md:px-24 lg:px-40 font-sans">
      
      {/* Centered Header */}
      <div className="max-w-4xl mx-auto mb-32 text-center">
        <h2 className="text-[#001F3F] text-4xl md:text-4xl font-serif mb-4 tracking-tight uppercase">Services</h2>
        <div className="h-[1px] w-12 bg-[#FFB6C1] mx-auto mb-6"></div>
        <p className="text-[#001F3F]/60 text-lg font-light max-w-xl mx-auto">
          Technical strategy meets educational clarity.
        </p>
      </div>

      {/* Service Grid - Pure Whitespace */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-20">
        {services.map((service) => (
          <div 
            key={service.id} 
            className="flex flex-col items-center text-center group cursor-pointer"
            onClick={() => setSelectedId(service.id)}
          >
            {/* Smaller, Elegant Icon Circle */}
            <motion.div 
              layoutId={`icon-bg-${service.id}`}
              className="w-20 h-20 rounded-full border border-[#FFB6C1] flex items-center justify-center mb-8 group-hover:bg-[#FFB6C1] transition-all duration-300"
            >
              <div className="text-xl text-[#FFB6C1] group-hover:text-white transition-colors">
                {service.icon}
              </div>
            </motion.div>
            
            <motion.h3 
              layoutId={`title-${service.id}`}
              className="text-[#001F3F] text-xl font-serif font-bold mb-4"
            >
              {service.title}
            </motion.h3>
            
            <p className="text-[14px] text-[#001F3F]/70 leading-relaxed font-light mb-6">
              {service.tagline}
            </p>

            {/* Replaced + with a Minimalist Underline Link */}
            <span className="text-[10px] uppercase tracking-[0.3em] font-black text-[#FFB6C1] border-b border-transparent group-hover:border-[#FFB6C1] transition-all">
              View Alignment
            </span>
          </div>
        ))}
      </div>

      {/* Fixed Click-to-Expand Logic */}
      <AnimatePresence>
        {selectedId && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedId(null)}
              className="absolute inset-0 bg-[#001F3F]/10 backdrop-blur-md"
            />

            {/* Modal Content */}
            <motion.div
              layoutId={`icon-bg-${selectedId}`}
              className="bg-white w-full max-w-4xl max-h-[85vh] overflow-y-auto relative z-10 shadow-2xl p-10 md:p-20 rounded-sm"
            >
              <button 
                onClick={() => setSelectedId(null)} 
                className="absolute top-10 right-10 text-[#001F3F]/30 hover:text-[#001F3F]"
              >
                <FaTimes size={20} />
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                <div className="lg:col-span-5">
                  <motion.h2 
                    layoutId={`title-${selectedId}`}
                    className="text-4xl font-serif text-[#001F3F] mb-6 italic"
                  >
                    {services.find(s => s.id === selectedId).title}
                  </motion.h2>
                  <p className="text-[#001F3F]/60 text-[15px] font-light leading-relaxed">
                    {services.find(s => s.id === selectedId).tagline}
                  </p>
                </div>

                <div className="lg:col-span-7 space-y-12">
                  <div className="space-y-6">
                    <h4 className="text-[10px] font-black tracking-[0.3em] uppercase text-[#FFB6C1]">The Strategy</h4>
                    {services.find(s => s.id === selectedId).alignment.map((item, i) => (
                      <p key={i} className="text-[14px] text-[#001F3F] border-l border-[#FFB6C1] pl-4 font-light">
                        {item}
                      </p>
                    ))}
                  </div>

                  <div className="space-y-6">
                    <h4 className="text-[10px] font-black tracking-[0.3em] uppercase text-[#FFB6C1]">Key Offerings</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                      {services.find(s => s.id === selectedId).offerings.map((offering, i) => (
                        <div key={i}>
                          <h5 className="font-bold text-[13px] text-[#001F3F] mb-1">{offering.sub}</h5>
                          <p className="text-[12px] text-[#001F3F]/50">{offering.text}</p>
                        </div>
                      ))}
                    </div>
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