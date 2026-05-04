import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Contact from '../components/Contact';
import Certifications from '../components/Certifications'; 

export default function Home() {
  return (
    <main className="relative transition-colors duration-700 overflow-x-hidden bg-white">
      <Hero />
      <About />
      <Projects />
      
      <Experience />
      <Skills />
      <Contact />
    </main>
  );
}