import mainPic from "../assets/project-filler.webp"; 
import fyp0 from "../assets/fyp0.png";
import fyp1 from "../assets/fyp1.png";
import fyp2 from "../assets/fyp2.png";
import fyp3 from "../assets/fyp3.png";
import fyp4 from "../assets/fyp4.png";
import techNexus1 from "../assets/technexus1.png";
import techNexus2 from "../assets/technexus2.png";
import techNexus3 from "../assets/technexus3.png";  
import techNexus4 from "../assets/technexus4.png";
import techNexus5 from "../assets/technexus5.png";
import churn1 from "../assets/churn1.png";
import churn2 from "../assets/churn2.png";
import churn3 from "../assets/churn3.png";
import churn4 from "../assets/churn4.png";
import traffic1 from "../assets/traffic1.png";
import traffic2 from "../assets/traffic2.png";
import traffic3 from "../assets/traffic3.png";
import traffic4 from "../assets/traffic4.png";
import traffic5 from "../assets/traffic5.png";
import traffic6 from "../assets/traffic6.png";
import traffic7 from "../assets/traffic7.png";
import nurture1 from "../assets/nurture1.png";
import nurture2 from "../assets/nurture2.png";
import nurture3 from "../assets/nurture3.png";
import hand1 from "../assets/hand1.png";
import hand2 from "../assets/hand2.png";


export const projects = [
  // --- 1. TRAFFIC PREDICTION (Data Science) ---
  {
    id: "traffic-congestion",
    title: "Traffic Congestion Prediction",
    category: "Data Science",
    tag: "PYTHON / ML / RESEARCH",
    description: "Award-winning research evaluating classical ML models vs. Deep Learning for urban traffic forecasting.",
    detailedDescription: "Investigated whether classical machine learning models achieve competitive performance for short-term traffic forecasting. This research won the Best Paper Award (June 2025) for its contribution to efficient, interpretable urban management systems.",
    features: [
      "Winner: Best Paper Award 2025",
      "Comparative analysis: Classical ML vs. Neural Networks",
      "Engineered temporal and environmental features",
      "High-accuracy short-term forecasting",
    ],
    stack: ["Python", "scikit-learn", "Pandas", "Matplotlib"],
    images: [
      { src: traffic1, caption: "Methodology flow" },
      { src: traffic6, caption: "Model accuracy comparison" },
      { src: traffic7, caption: "Real-time prediction output" },
    ],
    cardImage: traffic6,
    link: null,
  },

  // --- 2. NURTUREHER (Web Dev) ---
  {
    id: "nurtureher-platform",
    title: "NurtureHer Support Initiative",
    category: "Web Dev",
    tag: "REACT / TAILWIND / SOCIAL IMPACT",
    description: "A live community platform dedicated to empowering and supporting young women through digital resources.",
    detailedDescription: "Designed and deployed a responsive web ecosystem for NurtureHer. The platform facilitates community engagement through a secure space for resource sharing and event tracking. Focused on high-accessibility and an empowering UI/UX design.",
    features: [
      "Live production deployment",
      "Community resource integration",
      "Accessibility-focused UI/UX design",
      "Mobile-optimized performance",
    ],
    stack: ["React", "Tailwind CSS", "Vite", "Framer Motion"],
    images: [
      { src: nurture1, caption: "Home page" },
      { src: nurture2, caption: "Strategic Objectives" },
      { src: nurture3, caption: "Team Directory" },
    ],
    cardImage: nurture1, 
    link: "https://www.nurtureher.org", 
  },

  // --- 3. FYP (Pivoted to Software Engineering) ---
  {
    id: "unified-monitoring-system",
    title: "Unified Monitoring & Automation Ecosystem",
    category: "Software Engineering",
    tag: "PYTHON / REST APIs / ARCHITECTURE",
    description: "A centralized software platform unifying disparate security and utility systems via a secure four-layer architecture.",
    detailedDescription: "Engineered a centralized monitoring platform that unifies security (CCTV) and utility (Lighting) systems into a single dashboard. The core of the project is a secure four-layer system architecture that manages real-time data communication and automated logic via REST APIs, ensuring cross-platform compatibility and system reliability.",
    features: [
      "Secure 4-layer system architecture",
      "Centralized monitoring & logic control",
      "REST API integration for cross-platform data",
      "Automated energy & security scheduling",
    ],
    stack: ["Python", "REST APIs", "System Architecture", "Cloud"],
    images: [
      { src: fyp1, caption: "Centralized monitoring dashboard" },
      { src: fyp4, caption: "4-Layer System Architecture Diagram" },
      { src: fyp3, caption: "Camera Interface Module" },
    ],
    cardImage: fyp0,
    link: null,
  },

  // --- 4. TECHNEXUS (Web Dev) ---
  {
    id: "technexus-website",
    title: "TechNexus Official Platform",
    category: "Web Dev",
    tag: "REACT / TAILWIND / UX",
    description: "A responsive web platform showcasing global student initiatives, bootcamps, and resources.",
    detailedDescription: "The central hub for a global student-led initiative. Features a high-performance UI ensuring fast load times and seamless mobile compatibility. Demonstrates best practices in component-based architecture.",
    features: [
      "Responsive, mobile-first UI",
      "Component-based architecture",
      "Optimized performance & accessibility",
      "Hub for global student outreach",
    ],
    stack: ["React", "Tailwind CSS", "JavaScript"],
    images: [
      { src: techNexus1, caption: "Landing page hero" },
      { src: techNexus3, caption: "Events sections" },
    ],
    cardImage: techNexus1,
    link: "https://www.technexus.club",
  },

  // --- 5. WRITER IDENTIFICATION (Data Science) ---
  {
    id: "writer-identification",
    title: "Deep Learning Handwriting Recognition",
    category: "Data Science",
    tag: "TENSORFLOW / CV / FASTAPI",
    description: "A CNN-based writer identification system achieving 87% accuracy across 70 distinct styles.",
    detailedDescription: "Developed a robust writer identification system using Convolutional Neural Networks (CNNs). The project involved a custom preprocessing pipeline using OpenCV for line segmentation and word extraction, deployed via FastAPI for real-time inference.",
    features: [
      "Custom CNN Architecture",
      "87% Accuracy on 70 unique styles",
      "OpenCV pipeline for segmentation",
      "Real-time API deployment via FastAPI",
    ],
    stack: ["Python", "TensorFlow", "OpenCV", "FastAPI"],
    images: [
      { src: hand1, caption: "CNN Architecture" },
    ],
    cardImage: hand2,
    link: null,
  },

  // --- 6. CHURN PREDICTION (Data Science) ---
  {
    id: "customer-churn",
    title: "Customer Churn Prediction",
    category: "Data Science",
    tag: "ML / SHAP / ANALYTICS",
    description: "Supervised ML model to identify high-risk customers with explainable AI insights using SHAP values.",
    detailedDescription: "Focused on predicting customer churn with a bridge between raw prediction and business insight. Used SHAP values to explain specific risk factors, allowing for targeted retention strategies.",
    features: [
      "High-accuracy risk classification",
      "SHAP values for model explainability",
      "Handling of imbalanced datasets",
      "Actionable business insights",
    ],
    stack: ["Python", "scikit-learn", "SHAP", "Matplotlib"],
    images: [
      { src: churn1, caption: "Model Accuracy" },
      { src: churn4, caption: "SHAP summary plot" },
    ],
    cardImage: churn1,
    link: null,
  },
];