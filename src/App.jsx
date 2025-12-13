import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Certifications from "./components/Certifications";
import Experience from "./components/Experience";
import QuillCursor from "./components/QuillCursor";
import ProjectDetails from "./components/ProjectDetails";

function App() {
  return (
    <Router>
      <QuillCursor />

      <Routes>
        {/* Main homepage with all sections */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <Projects />
              <Skills />
              <Certifications />
              <Experience />
              <Contact />
            </>
          }
        />

        {/* Individual project detail page */}
        <Route path="/projects/:projectId" element={<ProjectDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
