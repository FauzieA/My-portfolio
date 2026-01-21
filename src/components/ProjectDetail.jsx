import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import { projects } from "../data/Projects";
import { FaArrowLeft, FaExternalLinkAlt, FaCode, FaCheckSquare, FaLayerGroup, FaImage } from "react-icons/fa";

const ProjectDetail = () => {
  const { projectId } = useParams();
  const project = projects.find((p) => p.id === projectId);
  const [galleryOpen, setGalleryOpen] = useState(false);

  useEffect(() => { 
    window.scrollTo(0, 0); 
  }, []);

  if (!project) return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#FDFBF7] text-[#4A4E69]">
      <p className="font-bold text-xl mb-4 text-pink-400">// ERROR: Project Not Found</p>
      <Link to="/" className="underline font-bold">Return Home</Link>
    </div>
  );

  return (
    <section className="w-full min-h-screen relative bg-[#FDFBF7] overflow-hidden pb-20">
      
      {/* --- CUTE BACK NAVIGATION --- */}
      <div className="fixed top-0 left-0 w-full z-[60] px-6 py-6 bg-[#FDFBF7]/80 backdrop-blur-md border-b border-pink-50 flex justify-between items-center">
        <Link
          to="/"
          className="flex items-center gap-2 text-[#4A4E69] hover:text-pink-400 transition-colors text-xs font-bold uppercase tracking-widest group"
        >
          <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" /> 
          Back to Portfolio
        </Link>
        
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-2 bg-[#4A4E69] text-white font-bold text-xs uppercase tracking-wider rounded-full hover:bg-gray-700 transition-all shadow-sm"
          >
            Live Demo <FaExternalLinkAlt size={10}/>
          </a>
        )}
      </div>

      {/* --- HERO HEADER --- */}
      <div className="max-w-6xl mx-auto px-6 pt-40 pb-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col gap-6"
        >
          <div className="flex items-center gap-3">
             <span className="px-4 py-1 bg-blue-50 text-blue-500 text-[10px] font-bold rounded-full uppercase tracking-widest">
               {project.category}
             </span>
             <span className="text-gray-300 font-bold text-xs">// REF: {project.id}</span>
          </div>
          <h1 className="text-4xl md:text-7xl font-bold text-[#4A4E69] leading-tight max-w-4xl">
            {project.title}
          </h1>
          <p className="text-pink-400 font-bold text-sm md:text-lg italic">{project.tag}</p>
        </motion.div>
      </div>

      {/* --- MAIN CONTENT GRID --- */}
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-12">
        
        {/* LEFT: STORY & GALLERY */}
        <div className="lg:col-span-2 space-y-16">
          <section>
            <h3 className="text-2xl font-bold text-[#4A4E69] mb-6 flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-pink-50 flex items-center justify-center text-pink-400 text-sm">✨</div>
              Project Background
            </h3>
            <div className="bg-white p-8 md:p-12 rounded-[50px] shadow-sm border-2 border-white">
              <p className="text-gray-500 text-lg leading-loose font-medium">
                {project.detailedDescription}
              </p>
            </div>
          </section>

          <section>
            <h3 className="text-2xl font-bold text-[#4A4E69] mb-8 flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-blue-50 flex items-center justify-center text-blue-400 text-sm"><FaImage /></div>
              Visual Gallery
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.images.map((img, i) => (
                <motion.div 
                  key={i} 
                  whileHover={{ scale: 1.02 }}
                  className="group relative cursor-zoom-in rounded-[40px] overflow-hidden bg-white shadow-sm border-4 border-white" 
                  onClick={() => setGalleryOpen(true)}
                >
                  <img src={img.src} alt={img.caption} className="w-full h-64 object-cover" />
                  <div className="absolute bottom-0 left-0 w-full p-4 bg-white/90 backdrop-blur-sm text-[10px] text-[#4A4E69] font-bold text-center border-t border-gray-50">
                    {img.caption}
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        </div>

        {/* RIGHT: SIDEBAR (STACK & FEATURES) */}
        <div className="lg:col-span-1">
          <div className="sticky top-32 space-y-8">
            {/* Tech Stack Box */}
            <div className="bg-white p-8 rounded-[40px] border-2 border-white shadow-sm">
              <h4 className="text-[#4A4E69] font-bold mb-6 flex items-center gap-2 text-sm uppercase tracking-wider">
                <FaCode className="text-blue-400" /> Technologies
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech, i) => (
                  <span key={i} className="px-4 py-2 bg-gray-50 text-gray-500 text-xs font-bold rounded-2xl border border-gray-100">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Features Box */}
            <div className="bg-white p-8 rounded-[40px] border-2 border-white shadow-sm">
              <h4 className="text-[#4A4E69] font-bold mb-6 flex items-center gap-2 text-sm uppercase tracking-wider">
                <FaLayerGroup className="text-pink-400" /> Core Features
              </h4>
              <ul className="space-y-4">
                {project.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-500 font-medium">
                    <FaCheckSquare className="mt-1 text-green-400 text-xs flex-shrink-0" /> 
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* --- FULLSCREEN GALLERY MODAL --- */}
      <AnimatePresence>
        {galleryOpen && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }} 
            className="fixed inset-0 z-[100] bg-white/95 backdrop-blur-xl flex items-center justify-center p-4"
          >
            <button 
              className="absolute top-8 right-8 text-[#4A4E69] font-bold text-sm z-50 bg-white px-6 py-3 rounded-full shadow-lg border border-gray-100" 
              onClick={() => setGalleryOpen(false)}
            >
              CLOSE GALLERY
            </button>
            <div className="w-full max-w-6xl h-full overflow-y-auto py-20 px-4 flex flex-col items-center">
               {project.images.map((img, i) => (
                 <div key={i} className="mb-20 w-full flex flex-col items-center">
                    <img src={img.src} alt={img.caption} className="max-w-full max-h-[85vh] rounded-[40px] shadow-2xl border-8 border-white" />
                    <p className="mt-6 text-[#4A4E69] font-bold text-sm uppercase tracking-widest border-b-4 border-pink-100 pb-2">
                      {img.caption}
                    </p>
                 </div>
               ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectDetail;