import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

const icons = {
  github: <Github size={22} />,
  linkedin: <Linkedin size={22} />,
  mail: <Mail size={22} />,
};

export function FloatingStar({ icon, url }) {
  const handleClick = (event) => {
    const iconRect = event.currentTarget.getBoundingClientRect();
    const x = iconRect.left + iconRect.width / 2;
    const y = iconRect.top + iconRect.height / 2;

    // 1️⃣ Small particle burst
    for (let i = 0; i < 8; i++) {
      const particle = document.createElement("span");
      particle.className =
        "absolute w-2 h-2 bg-white rounded-full blur-sm animate-particle-dynamic";
      particle.style.top = `${y}px`;
      particle.style.left = `${x}px`;

      const angle = Math.random() * 2 * Math.PI;
      const distance = 40 + Math.random() * 20;
      particle.style.setProperty("--x", `${Math.cos(angle) * distance}px`);
      particle.style.setProperty("--y", `${Math.sin(angle) * distance}px`);

      const hue = 40 + Math.random() * 60;
      particle.style.backgroundColor = `hsl(${hue}, 80%, 70%)`;

      particle.style.position = "fixed";
      particle.style.pointerEvents = "none";
      document.body.appendChild(particle);
      setTimeout(() => particle.remove(), 800);
    }

    // 2️⃣ Full-screen explosion
    const explosion = document.createElement("div");
    explosion.style.position = "fixed";
    explosion.style.left = `${x}px`;
    explosion.style.top = `${y}px`;
    explosion.style.width = "20px";
    explosion.style.height = "20px";
    explosion.style.borderRadius = "50%";
    explosion.style.background = "radial-gradient(circle, #fff 0%, #c9c9c9ff 60%)";
    explosion.style.zIndex = "50";
    explosion.style.pointerEvents = "none";
    document.body.appendChild(explosion);

    explosion.animate(
      [
        { transform: "translate(-50%, -50%) scale(0)", opacity: 1 },
        { transform: "translate(-50%, -50%) scale(40)", opacity: 0 }
      ],
      {
        duration: 800,
        easing: "ease-out",
        fill: "forwards"
      }
    );

    // 3️⃣ Open link after animation
    setTimeout(() => {
      explosion.remove();
      window.open(url, "_blank");
    }, 800);
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
