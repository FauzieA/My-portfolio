import React, { useState } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { ThemeProvider } from "./context/ThemeContext";

// Section Components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

// Page Components
import ProjectDetails from "./components/ProjectDetails";
import LoadingScreen from "./components/LoadingScreen";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <ThemeProvider>
      <>
        {/* 1. THE LOADING SCREEN */}
        <AnimatePresence mode="wait">
          {isLoading && (
            <LoadingScreen 
              key="loader" 
              onComplete={() => setIsLoading(false)} 
            />
          )}
        </AnimatePresence>

        {/* 2. THE MAIN APP */}
        {!isLoading && (
          <Router>
            <Routes>
              {/* MAIN HOME ROUTE */}
              <Route
                path="/"
                element={
                  <>
                    <Navbar />
                    <main>
                      <Hero />
                      <About />
                      <Projects />
                      <Skills />
                      <Certifications />
                      <Experience />
                      <Contact />
                    </main>
                  </>
                }
              />

              {/* PROJECT DETAIL ROUTE */}
              <Route path="/projects/:projectId" element={<ProjectDetails />} />
            </Routes>
          </Router>
        )}
      </>
    </ThemeProvider>
  );
}

export default App;