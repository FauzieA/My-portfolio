import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard.jsx";
import FloatingShapes from "../components/FloatingShapes";
import { projects } from "../data/Projects";

const Projects = () => {
  const carouselRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [hintVisible, setHintVisible] = useState(() => !sessionStorage.getItem("projectsHintSeen"));

  const handleDragStart = () => {
    setIsDragging(true);
    if (hintVisible) {
      setHintVisible(false);
      sessionStorage.setItem("projectsHintSeen", "true");
    }
  };

  const handleDragEnd = () => {
    setTimeout(() => setIsDragging(false), 50);
  };

  return (
    <section
      id="projects"
      className="w-full py-28 relative overflow-hidden"
      style={{ background: "#07131dff" }}
    >
      <FloatingShapes />

      {/* HEADER */}
      <div className="text-center mb-20">
        <h2 className="tracking-[0.25em] text-xl mb-4" style={{ color: "#C2A878" }}>
          PROJECTS
        </h2>
        <h2 className="text-4xl sm:text-5xl font-bold" style={{ color: "#E8EAEF" }}>
          Work That Blends Beauty & Problem-Solving
        </h2>
      </div>

      {/* DRAGGABLE CAROUSEL */}
      <motion.div
        ref={carouselRef}
        className="flex gap-6 py-10 px-6 cursor-grab"
        drag="x"
        dragConstraints={{ left: -1200, right: 0 }}
        dragElastic={0.15}
        whileTap={{ cursor: "grabbing" }}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
      >
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} isDragging={isDragging} />
        ))}
      </motion.div>

      {/* HINT */}
      {hintVisible && (
        <p className="text-sm text-[#C2A878] opacity-70 mb-4 animate-pulse">
          Drag to explore →
        </p>
      )}
    </section>
  );
};

export default Projects;
