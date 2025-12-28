import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

const icons = {
  github: <Github size={22} />,
  linkedin: <Linkedin size={22} />,
  mail: <Mail size={22} />,
};

export function FloatingStar({ icon, url }) {
  const handleClick = (event) => {
    // Open the target link immediately without playing burst/particle animations.
    // This avoids the full-screen explosion / DOM particle creation.
    window.open(url, "_blank");
  };

  return (
    <motion.div
      className="relative cursor-pointer select-none"
      initial={{ y: 0, opacity: 0.9 }}
      animate={{
        y: [0, -12, 0],
        transition: { duration: 4 + Math.random() * 2, repeat: Infinity, ease: "easeInOut" },
      }}
      whileHover={{ scale: 1.18 }}
      whileTap={{ scale: 0.92 }}
      onClick={handleClick}
    >
      {/* Glow */}
      <div className="absolute inset-0 blur-xl bg-white/20 rounded-full"></div>

      {/* Icon */}
      <div className="w-12 h-12 flex items-center justify-center rounded-full 
                      bg-white/10 backdrop-blur-md border border-white/20
                      text-white hover:text-[#C2A878] transition">
        {icons[icon]}
      </div>
    </motion.div>
  );
}
