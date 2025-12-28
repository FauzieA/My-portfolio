import React from "react";
import mainPic from "../assets/fauziyya.jpg";
import FloatingShapes from "../components/FloatingShapes";

const About = () => {
  return (
    <section
      id="about"
      className="w-full py-20 relative overflow-hidden px-4 md:px-8"
      style={{ background: "#07131dff" }}
    >
      <FloatingShapes />

      {/* --- TOP GRADIENT BLEND --- */}
      <div
        className="absolute top-0 left-0 w-full h-[150px]"
        style={{
          background: "linear-gradient(to top, transparent 0%, #08131d 100%)",
        }}
      ></div>

      {/* --- SECTION HEADER --- */}
      <div className="text-center mb-16 mt-15">
        <h2
          className="tracking-[0.25em] text-xl mb-4"
          style={{ color: "#C2A878" }}
        >
          ABOUT ME
        </h2>

        <h2
          className="text-4xl sm:text-5xl font-bold"
          style={{ color: "#E8EAEF" }}
        >
          Aspiring Data Scientist and Web Developer
        </h2>
      </div>

      {/* --- CONTENT GRID --- */}
      <div className="max-w-[1500px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center px-4 md:px-8">
        {/* ==== LEFT: PORTRAIT ==== */}
        <div className="relative flex justify-center">
          {/* Bigger Glow */}
          <div
            className="absolute w-[480px] h-[480px] rounded-full blur-3xl opacity-40"
            style={{
              background: "radial-gradient(circle, #00c6ff55, #00101a00)",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          ></div>

          {/* Blob + Border */}
          <div
            className="relative w-[430px] h-[440px] overflow-hidden rounded-[38%_62%_70%_45%/48%_40%_58%_52%]"
            style={{
              border: "1px solid #C2A87844",
              boxShadow: "0 0 55px #00c6ff44",
            }}
          >
            <img
              src={mainPic}
              alt="Portrait"
              className="w-full h-full object-cover scale-110"
            />
          </div>
        </div>

        {/* ==== RIGHT: TEXT ==== */}
        <div className="max-w-xl text-justify">
          <p
            className="text-lg leading-relaxed mb-6"
            style={{ color: "#C9CCD3" }}
          >
           I’m Fauziyya Abdullahi Ahmed, a Computer Science student who enjoys exploring how different areas of technology connect. I like understanding how things work, from building interactive web experiences to experimenting with data and machine learning, and using that understanding to create solutions that actually make sense.
          </p>

          <p
            className="text-lg leading-relaxed mb-6"
            style={{ color: "#C9CCD3" }}
          >
            Because I’m a curious person, I’ve dabbled across many fields, but my main focus has been web development, data-driven projects, and applied machine learning. I’m comfortable moving between code, logic, and design, and I enjoy the process as much as the result, breaking problems down, testing ideas, and refining details until everything clicks.
          </p>

          <p className="text-lg leading-relaxed" style={{ color: "#C9CCD3" }}>
            Beyond individual projects, I co-founded TechNexus, a global student-led initiative focused on helping university students, and anyone interested, build practical technical skills. Teaching, collaborating, and building alongside others has shaped how I see technology, and I’m drawn to spaces where curiosity is encouraged, ideas evolve, and building things actually makes a difference.
          </p>

         
        </div>
      </div>
    </section>
  );
};

export default About;
