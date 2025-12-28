import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import FloatingShapes from "../components/FloatingShapes";
import { projects } from "../data/Projects";

const ProjectDetail = () => {
  const { projectId } = useParams();
  const project = projects.find((p) => p.id === projectId);

  const [galleryOpen, setGalleryOpen] = useState(false);
  const [startIndex, setStartIndex] = useState(0);

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

      {/* Back */}
      <Link
        to="/#projects"
        className="text-[#C2A878] hover:underline mb-8 inline-block"
      >
        ← Back to Projects
      </Link>

      {/* Header */}
      <div className="max-w-5xl mx-auto text-center mb-14">
        <p className="tracking-widest text-sm mb-2 text-[#C2A878]">
          {project.tag}
        </p>
        <h1 className="text-4xl sm:text-5xl font-bold text-[#E8EAEF]">
          {project.title}
        </h1>
        <p className="mt-4 text-lg text-[#C9CCD3]">
          {project.detailedDescription}
        </p>
      </div>

      {/* Features & Stack */}
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 mb-20">
        <div>
          <h3 className="text-2xl font-semibold text-[#E8EAEF] mb-4">
            Key Features
          </h3>
          <ul className="list-disc list-inside space-y-2 text-[#C9CCD3]">
            {project.features.map((f, i) => (
              <li key={i}>{f}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-[#E8EAEF] mb-4">
            Tech Stack
          </h3>
          <div className="flex flex-wrap gap-3">
            {project.stack.map((tech, i) => (
              <span
                key={i}
                className="bg-[#C2A878]/20 text-[#C2A878] px-4 py-2 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Preview images */}
      <div className="max-w-6xl mx-auto">
        <motion.div className="flex gap-6 overflow-x-auto py-6">
          {project.images.map((img, i) => (
            <div key={i} className="flex flex-col">
              <motion.img
                src={img.src}
                alt={`Screenshot ${i + 1}`}
                onClick={() => {
                  setStartIndex(i);
                  setGalleryOpen(true);
                }}
                className="
                  w-[420px] md:w-[520px]
                  rounded-xl shadow-xl flex-shrink-0
                  cursor-zoom-in
                "
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
              />
              {img.caption && (
                <p className="text-sm text-[#C2A878] mt-2">
                  {img.caption}
                </p>
              )}
            </div>
          ))}
        </motion.div>

        <p className="text-center text-sm text-[#C2A878]/70 mt-4">
          Click an image to view fullscreen gallery
        </p>
      </div>

      {project.link && (
  <div className="max-w-5xl mx-auto mt-28 text-center">
  
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="
        inline-flex items-center gap-2
        bg-[#C2A878] text-[#07131dff]
        font-semibold px-10 py-4 rounded-full
        hover:bg-[#d3b977] transition
      "
    >
      View Live Project →
    </a>
  </div>
)}

     
      {/* FULLSCREEN VERTICAL GALLERY */}
      <AnimatePresence>
        {galleryOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-black overflow-y-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Close */}
            <button
              className="fixed top-6 right-6 z-50 text-white text-4xl"
              onClick={() => setGalleryOpen(false)}
            >
              ×
            </button>

            {/* Images */}
            <div className="flex flex-col">
              {project.images.map((img, i) => (
                <section
                  key={i}
                  className="relative min-h-screen flex flex-col items-center justify-center px-6"
                >
                  <motion.img
                    src={img.src}
                    className="max-h-[90vh] max-w-full rounded-xl shadow-2xl"
                    initial={{ opacity: 0, scale: 0.96 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.45 }}
                  />

                  {img.caption && (
                    <p className="mt-6 text-[#C2A878] text-sm text-center max-w-xl">
                      {img.caption}
                    </p>
                  )}

                  {/* Scroll hint — FIRST IMAGE ONLY */}
                  { i === 0 && (
  <motion.div
    className="mt-8 text-[#C2A878]/60 text-sm tracking-widest"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{
      delay: 1,
      repeat: Infinity,
      repeatType: "reverse",
      duration: 1.4,
    }}
  >
    Scroll ↓
  </motion.div>
)}

                </section>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

  

    </section>
  );
};

export default ProjectDetail;
