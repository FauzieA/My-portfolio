import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ProjectCard = ({ project, isDragging }) => {
  const cardRef = useRef(null);
  const [flipped, setFlipped] = useState(false);

  const handleMouseMove = (e) => {
    if (flipped || isDragging) return;
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateX = ((y - rect.height / 2) / 20) * -1;
    const rotateY = (x - rect.width / 2) / 20;
    card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const resetTilt = () => {
    if (flipped || isDragging) return;
    cardRef.current.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg)";
  };

  const handleClick = () => {
    if (!isDragging) setFlipped(!flipped);
  };

  return (
    <motion.div
      className="relative min-w-[550px] md:min-w-[460px] cursor-pointer"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 160, damping: 18 }}
      onClick={handleClick}
      animate={{ y: flipped ? -12 : 0 }}
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={resetTilt}
        className="relative w-full h-[380px] rounded-2xl"
        style={{ transformStyle: "preserve-3d" }}
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ type: "spring", stiffness: 180, damping: 15 }}
      >
        {/* FRONT */}
        <div className="absolute inset-0 rounded-2xl overflow-hidden bg-[#0d1b26]" style={{ backfaceVisibility: "hidden" }}>
          <img
            src={project.cardImage}
            className="w-full h-56 object-cover rounded-xl shadow-lg"
            draggable={false}
          />
          <div className="p-5">
            <p className="text-xs tracking-widest mb-2" style={{ color: "#C2A878" }}>
              {project.tag}
            </p>
            <h3 className="text-xl font-bold mb-2" style={{ color: "#E8EAEF" }}>
              {project.title}
            </h3>
          </div>
        </div>

        {/* BACK */}
        <div className="absolute inset-0 rounded-2xl overflow-hidden bg-[#0d1b26] p-5 flex flex-col justify-between" style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}>
          <div>
            <p className="text-xs tracking-widest mb-2" style={{ color: "#C2A878" }}>
              {project.tag}
            </p>
            <h3 className="text-xl font-bold mb-3" style={{ color: "#E8EAEF" }}>
              {project.title}
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: "#C9CCD3" }}>
              {project.description}
            </p>
          </div>
          <Link to={`/projects/${project.id}`} className="text-[#C2A878] hover:underline">
            See More →
          </Link>
        </div>

        {/* SOFT GLOW */}
        <div className="absolute inset-0 blur-3xl opacity-25 -z-10" style={{ background: "radial-gradient(circle, #C2A87833, transparent)" }} />
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;
