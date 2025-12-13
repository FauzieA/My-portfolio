import React from "react";
import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import FloatingShapes from "../components/FloatingShapes";
import { projects } from "../data/Projects";

const ProjectDetail = () => {
  const { projectId } = useParams();
  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#07131dff] text-[#C2A878]">
        Project not found
      </div>
    );
  }

  return (
    <section className="w-full min-h-screen relative py-20 px-4 md:px-8 bg-[#07131dff] overflow-hidden">
      <FloatingShapes />

      <Link to="/#projects" className="text-[#C2A878] hover:underline mb-8 inline-block">
        ← Back to Projects
      </Link>

      {/* Header */}
      <div className="max-w-5xl mx-auto text-center mb-12">
        <p className="tracking-widest text-sm mb-2 text-[#C2A878]">{project.tag}</p>
        <h1 className="text-4xl sm:text-5xl font-bold text-[#E8EAEF]">{project.title}</h1>
        <p className="mt-4 text-lg text-[#C9CCD3]">{project.description}</p>
      </div>

      {/* Features & Stack */}
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 mb-16">
        <div>
          <h3 className="text-2xl font-semibold text-[#E8EAEF] mb-4">Key Features</h3>
          <ul className="list-disc list-inside space-y-2 text-[#C9CCD3]">
            {project.features.map((f, i) => (
              <li key={i}>{f}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-[#E8EAEF] mb-4">Tech Stack</h3>
          <div className="flex flex-wrap gap-3">
            {project.stack.map((tech, i) => (
              <span key={i} className="bg-[#C2A878]/20 text-[#C2A878] px-4 py-2 rounded-full text-sm">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Screenshots */}
      <motion.div className="flex gap-6 overflow-x-auto py-6">
        {project.images.map((img, i) => (
          <div key={i} className="flex flex-col">
            <motion.img
              src={img.src}
              alt={`Screenshot ${i + 1}`}
              className="w-[400px] md:w-[500px] rounded-xl shadow-xl flex-shrink-0"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
            />
            {img.caption && <p className="text-sm text-[#C2A878] mt-2">{img.caption}</p>}
          </div>
        ))}
      </motion.div>

      {/* Call-to-action */}
      {project.link && (
        <div className="text-center mb-12">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#C2A878] text-[#07131dff] font-semibold px-8 py-3 rounded-full hover:bg-[#d3b977] transition"
          >
            View Live / Demo
          </a>
        </div>
      )}
    </section>
  );
};

export default ProjectDetail;
