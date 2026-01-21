import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import FloatingShapes from "../components/FloatingShapes";
import { projects } from "../data/Projects";
import { FaArrowLeft, FaExternalLinkAlt, FaCode, FaCheckSquare, FaLayerGroup } from "react-icons/fa";

const ProjectDetail = () => {
  const { projectId } = useParams();
  const project = projects.find((p) => p.id === projectId);
  const [galleryOpen, setGalleryOpen] = useState(false);

  useEffect(() => { window.scrollTo(0, 0); }, []);

  if (!project) return <div className="min-h-screen flex items-center justify-center bg-[#07131d] text-[#C2A878] font-mono">// ERROR: Project Not Found</div>;

  return (
    <section className="w-full min-h-screen relative bg-[#FDFBF7] overflow-hidden">
      <div className="absolute inset-0 flex justify-between pointer-events-none opacity-5">
        <div className="w-[1px] h-full bg-white"></div>
        <div className="w-[1px] h-full bg-white hidden md:block"></div>
        <div className="w-[1px] h-full bg-white"></div>
      </div>
      <FloatingShapes />

      {/* --- TOP NAV (Technical Bar) --- */}
<div className="fixed top-0 left-0 w-full z-[60] px-6 py-4 bg-[#FDFBF7] border-b border-white/5 flex justify-between items-center">
  {/* z-[60] ensures it sits ABOVE the global Navbar (which is usually z-50).
      Using solid bg-[#07131d] instead of transparency hides the main nav completely.
  */}
  <Link
    to="/"
    className="flex items-center gap-3 text-[#C9CCD3] hover:text-[#C2A878] transition-colors text-xs font-mono uppercase tracking-widest group"
  >
    <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" /> 
    Return to Portfolio
  </Link>
  
  {/* Desktop Action Button */}
  {project.link && (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="hidden md:flex items-center gap-2 px-6 py-2 bg-[#C2A878] text-[#07131d] font-bold font-mono text-xs uppercase tracking-wider hover:bg-white transition-colors"
    >
      Live Project <FaExternalLinkAlt size={12}/>
    </a>
  )}
</div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-32 pb-12 relative z-10">
        <div className="flex flex-col md:flex-row items-start justify-between gap-8 border-b border-white/10 pb-12">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-6">
               <span className="text-[#C2A878] font-mono text-sm">// REF: {project.id}</span>
               <span className="px-2 py-1 bg-[#C2A878]/10 text-[#C2A878] text-[10px] font-mono border border-[#C2A878]/20 uppercase">{project.category}</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-[#E8EAEF] leading-tight mb-6">{project.title}</h1>
            <p className="text-[#C9CCD3]/60 font-mono text-sm max-w-xl">{project.tag}</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-3 gap-16 pb-24 relative z-10">
        <div className="lg:col-span-2">
          <div className="mb-12">
            <h3 className="text-xl font-bold text-[#E8EAEF] mb-6 border-l-2 border-[#C2A878] pl-4">Project Background</h3>
            <p className="text-[#C9CCD3] text-lg leading-loose font-light">{project.detailedDescription}</p>
          </div>

          <div className="mb-12">
            <h3 className="text-xl font-bold text-[#E8EAEF] mb-8 border-l-2 border-[#C2A878] pl-4">Gallery</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.images.map((img, i) => (
                <div key={i} className="group relative cursor-zoom-in bg-[#0d1b27]" onClick={() => setGalleryOpen(true)}>
                  <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-[#C2A878] z-20" />
                  <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-[#C2A878] z-20" />
                  <img src={img.src} alt={img.caption} className="w-full h-56 object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-0 left-0 w-full p-2 bg-[#0d1b27]/90 text-[10px] text-[#C2A878] font-mono text-center border-t border-white/5">0{i + 1} // {img.caption}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="sticky top-32">
            <div className="bg-[#0d1b27] border border-white/10 p-6 mb-8 relative">
              <div className="absolute top-0 left-0 w-full h-[2px] bg-[#C2A878]" />
              <h4 className="text-[#E8EAEF] font-bold mb-6 flex items-center gap-2 font-mono text-sm uppercase tracking-wider"><FaCode className="text-[#C2A878]" /> Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech, i) => <span key={i} className="px-3 py-1 bg-[#1a2c3d] text-[#C9CCD3] text-xs font-mono border border-white/5 hover:border-[#C2A878]">{tech}</span>)}
              </div>
            </div>

            <div className="bg-[#0d1b27] border border-white/10 p-6 relative">
              <div className="absolute top-0 left-0 w-full h-[2px] bg-[#C2A878]" />
              <h4 className="text-[#E8EAEF] font-bold mb-6 flex items-center gap-2 font-mono text-sm uppercase tracking-wider"><FaLayerGroup className="text-[#C2A878]" /> Core Features</h4>
              <ul className="space-y-4">
                {project.features.map((f, i) => <li key={i} className="flex items-start gap-3 text-sm text-[#C9CCD3] font-light"><FaCheckSquare className="mt-1 text-[#C2A878] text-xs flex-shrink-0" /> {f}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {galleryOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] bg-[#07131d]/95 flex items-center justify-center p-4">
            <button className="absolute top-6 right-6 text-[#C2A878] font-mono text-sm z-50 border border-[#C2A878] px-4 py-2 hover:bg-[#C2A878]/10" onClick={() => setGalleryOpen(false)}>CLOSE_GALLERY [ESC]</button>
            <div className="w-full max-w-6xl h-full overflow-y-auto py-10 px-4 flex flex-col items-center">
               {project.images.map((img, i) => (
                 <div key={i} className="mb-20 w-full flex flex-col items-center">
                    <img src={img.src} alt={img.caption} className="max-w-full max-h-[85vh] border border-white/10" />
                    <p className="mt-4 text-[#C2A878] font-mono text-xs uppercase tracking-widest border-b border-[#C2A878] pb-1">0{i + 1} // {img.caption}</p>
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