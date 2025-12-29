import React, { useState, useEffect } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion"; // Import this!

// Components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Certifications from "./components/Certifications";
import Experience from "./components/Experience";
import ProjectDetails from "./components/ProjectDetails";
import LoadingScreen from "./components/LoadingScreen"; // Import the loader

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {/* 1. THE LOADING SCREEN */}
      <AnimatePresence mode="wait">
        {isLoading && (
          <LoadingScreen onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {/* 2. THE MAIN APP (Only visible after loading starts fading) */}
      {!isLoading && (
        <Router>
          <Navbar />

          <Routes>
            <Route
              path="/"
              element={
                <>
                  <section id="hero"><Hero /></section>
                  <section id="about"><About /></section>
                  <section id="projects"><Projects /></section>
                  <section id="skills"><Skills /></section>
                  <section id="certifications"><Certifications /></section>
                  <section id="experience"><Experience /></section>
                  <section id="contact"><Contact /></section>
                </>
              }
            />

            <Route path="/projects/:projectId" element={<ProjectDetails />} />
          </Routes>
        </Router>
      )}
    </>
  );
}

export default App;