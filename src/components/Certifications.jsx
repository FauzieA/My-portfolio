// src/components/Certifications.jsx
import React, { useRef } from "react";
import CertCard from "./CertCard";
import FloatingShapes from "../components/FloatingShapes";

import pcepImg from "../assets/certs/pcep.png";
import ibmDataImg from "../assets/certs/ibm-data.png";
import ibmCloudImg from "../assets/certs/ibm-cloud.png";
import kaggleSQLImg from "../assets/certs/kaggle-sql.png";
import kaggleVisImg from "../assets/certs/kaggle-vis.png";
import kaggleMLImg from "../assets/certs/kaggle-ml.png";
import qubitAzureImg from "../assets/certs/qubit-azure.png";
import cBeginnersImg from "../assets/certs/gla-c.png";



const certifications = [
  {
    name: "PCEP: Certified Entry-Level Python Programmer",
    img: pcepImg,
    issuer: "Python Institute",
    description: "Verified foundational Python programming skills."
  },
  {
    name: "IBM Data Fundamentals",
    img: ibmDataImg,
    issuer: "IBM",
    description: "Introduction to data concepts, databases, and analytics."
  },
  {
    name: "IBM Cloud Essentials",
    img: ibmCloudImg,
    issuer: "IBM",
    description: "Overview of core cloud concepts, services, and architecture."
  },
  {
    name: "Kaggle: Advanced SQL",
    img: kaggleSQLImg,
    issuer: "Kaggle",
    description: "Learned advanced SQL queries and database manipulation."
  },
  {
    name: "Kaggle: Data Visualization",
    img: kaggleVisImg,
    issuer: "Kaggle",
    description: "Built insightful visualizations from real-world datasets."
  },
  {
    name: "Kaggle: Intro to Machine Learning",
    img: kaggleMLImg,
    issuer: "Kaggle",
    description: "Applied basic ML algorithms to solve practical problems."
  },
  {
    name: "Qubit x Microsoft Azure: Quantum Winter School",
    img: qubitAzureImg,
    issuer: "Qubit & Microsoft Azure",
    description: "Hands-on introduction to quantum computing and Azure Quantum."
  },
  {
    name: "C for Beginners",
    img: cBeginnersImg,
    issuer: "Great Learning Academy",
    description: "Basic C programming concepts and beginner-level exercises."
  },
];


export default function Certifications() {
  const carouselRef = useRef(null);

  const scroll = (direction) => {
    if (carouselRef.current) {
      const width = carouselRef.current.offsetWidth * 0.7; // scroll 70% of container width
      carouselRef.current.scrollBy({ left: direction * width, behavior: "smooth" });
    }
  };

  return (
    <section className="w-full py-20 bg-[#07131dff] flex flex-col items-center relative">
      <FloatingShapes />
      {/* Header */}
      <div className="text-center mb-12">
        <p className="tracking-[0.25em] text-sm mb-2" style={{ color: "#C2A878" }}>
          CERTIFICATIONS
        </p>
        <h2 className="text-4xl sm:text-5xl font-bold" style={{ color: "#E8EAEF" }}>
          My Achievements
        </h2>
      </div>

      {/* Carousel */}
      {/* Carousel */}
<div className="relative w-full flex items-center">
  {/* Scroll Container */}
  <div
    ref={carouselRef}
    className="flex overflow-x-auto gap-6 snap-x snap-mandatory scrollbar-hide py-6 px-8"
  >
    {certifications.map((cert, i) => (
      <div key={i} className="flex-shrink-0 w-80 sm:w-96 h-80 snap-center cursor-pointer">
        <CertCard
  name={cert.name}
  img={cert.img}
  issuer={cert.issuer}
  description={cert.description}
/>
 
      </div>
    ))}
  </div>

  
  {/* SCROLL HINT */}
        
</div>
<p className="text-center text-sm text-[#C2A878]/60 mt-4">
          Scroll →
        </p>
    </section>
  );
}

