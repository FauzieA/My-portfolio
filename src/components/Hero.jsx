import React from "react";
import { motion } from "framer-motion";
import bgImage from "../assets/hero-bg.jpg"; 
import HeroTitles from "./HeroTitles";
import { FloatingStar } from "./floatingstar";


export default function Hero() {
  return (
    <section
      className="relative w-full min-h-170 flex items-center justify-center px-6 md:px-14 overflow-hidden bg-[#08131d]"
    >
      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0"
        style={{ background: `url(${bgImage}) center/85% no-repeat`, opacity: 0.65 }}
      ></div>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/75"></div>

      {/* BOTTOM GRADIENT */}
      <div
        className="absolute bottom-0 left-0 w-full h-[250px]"
        style={{ background: "linear-gradient(to bottom, transparent 0%, #08131d 100%)" }}
      />

      {/* CONTENT */}
      <motion.div
        className="relative z-10 max-w-3xl text-center text-white"
        initial="hidden"
        animate="visible"
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.25 } } }}
      >
        {/* NAME */}
        <motion.h1
          variants={{ hidden: { y: -20, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-5xl md:text-6xl font-bold mb-5 mt-10"
        >
          Fauziyya Abdullahi Ahmed
        </motion.h1>

        {/* TITLES + TAGLINE */}
        <motion.div
          variants={{ hidden: { y: -20, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-xl mx-auto mt-8"
        >
          <div className="text-lg font-normal tracking-wide uppercase opacity-90">
            <HeroTitles />
          </div>

          <p className="mt-6 text-[#ECECEC] text-base leading-relaxed opacity-90">
            Building data-driven solutions and interactive web experiences
          </p>
        </motion.div>

        {/* BUTTONS */}
        <motion.div
          variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mt-12 flex gap-4 md:gap-6 justify-center flex-wrap"
        >
          <a
            href="#projects"
            className=" cursor-hover px-5 md:px-6 py-3 bg-[#C2A878] text-[#0a1a28] border border-[#C2A878] hover:bg-transparent hover:text-[#C2A878] transition rounded-lg font-medium"
          >
            View My Work
          </a>

          <a
            href="#contact"
            className=" cursor-hover px-5 md:px-6 py-3 border border-white/30 text-white hover:bg-[#C2A878] hover:text-[#0a1a28] transition rounded-lg font-medium"
          >
            Contact Me
          </a>
        </motion.div>
      </motion.div>

      {/* FLOATING INTERACTIVE SOCIAL STARS */}
<div className="cursor-hover absolute bottom-10 w-full flex justify-center gap-16 z-20">
  <FloatingStar
    icon="github"
    url="https://github.com/FauzieA"
  />
  <FloatingStar
    icon="linkedin"
    url="https://www.linkedin.com/in/fauziyya-ahmed/"
  />
  <FloatingStar
    icon="mail"
    url="mailto:fauxieahmed22@gmail.com"
  />
</div>

    </section>
  );
}
