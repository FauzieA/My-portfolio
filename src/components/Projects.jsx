import React from "react";
import ProjectCard from "./ProjectCard.jsx";
import FloatingShapes from "../components/FloatingShapes";
import { projects } from "../data/Projects";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-28 relative overflow-hidden"
      style={{ background: "#07131dff" }}
    >
      <FloatingShapes />

      {/* HEADER */}
      <div className="text-center mb-20">
        <p
          className="tracking-[0.25em] text-sm mb-4"
          style={{ color: "#C2A878" }}
        >
          PROJECTS
        </p>
        <h2
          className="text-4xl sm:text-5xl font-bold"
          style={{ color: "#E8EAEF" }}
        >
          Things I’ve Built
        </h2>
      </div>
      

      {/* HORIZONTAL SCROLL */}
      <div className="relative">
        <div
          className="
            flex gap-6 px-6 py-10
            overflow-x-auto
            scroll-smooth
            snap-x snap-mandatory
          "
        >
          {projects.map((project) => (
            <div key={project.id} className="snap-start">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        {/* SCROLL HINT */}
        <p className="text-center text-sm text-[#C2A878]/60 mt-4">
          Scroll →
        </p>
      </div>
    </section>
  );
};

export default Projects;
