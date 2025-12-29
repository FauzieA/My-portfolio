import mainPic from "../assets/project-filler.webp"; // Using this as placeholder for new projects
import library1 from "../assets/library1.png";
import library2 from "../assets/library2.png";
import library3 from "../assets/library3.png";
import library4 from "../assets/library4.png";
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
import iot1 from "../assets/iot1.png";
import iot2 from "../assets/iot2.png";


export const projects = [
  // --- 1. FYP (IoT) ---
  {
    id: "smart-lighting-cctv",
    title: "Unified Smart Lighting & CCTV Integration",
    category: "IoT & Robotics",
    tag: "IoT / PYTHON / APIs",
    description: "A brand-agnostic IoT platform unifying lighting and CCTV systems with automation and energy efficiency.",
    detailedDescription: `
This project developed a unified IoT platform that integrates lighting and CCTV systems across multiple brands. The platform allows centralized monitoring, automated scheduling, and real-time control of devices to improve energy efficiency and operational safety. It features a secure four-layer architecture for reliable communication and supports remote management via dashboards. The system was implemented using Python, IoT protocols, and REST APIs, and tested with real devices to ensure cross-device compatibility and automation reliability.
    `,
    features: [
      "Cross-device lighting and CCTV automation",
      "Centralized monitoring dashboard",
      "Secure four-layer system architecture",
      "Energy efficiency optimization",
    ],
    stack: ["Python", "IoT", "APIs", "Cloud"],
    images: [
      { src: fyp1, caption: "Centralized dashboard" },
      { src: fyp2, caption: "Lighting control panel" },
      { src: fyp3, caption: "Camera control panel" },
      { src: fyp4, caption: "System architecture diagram" },
    ],
    cardImage: fyp0,
    link: null,
  },

  // --- 2. TRAFFIC PREDICTION (Data Science - Award Winner) ---
  {
    id: "traffic-congestion",
    title: "Traffic Congestion Prediction",
    category: "Data Science",
    tag: "PYTHON / ML / RESEARCH",
    description: "Award-winning research evaluating classical ML models vs. Deep Learning for urban traffic forecasting.",
    detailedDescription: `
This research investigated whether classical machine learning models can achieve competitive performance for short-term traffic congestion prediction compared to complex deep learning models. Four models were implemented: Logistic Regression, Random Forest, SVM, and KNN. Extensive preprocessing, feature engineering, and time-based transformations were applied. Models were evaluated using accuracy, precision, recall, F1-score, and confusion matrices. Random Forest and SVM achieved the highest predictive performance. This paper won the Best Paper Award (June 2025) for its contribution to efficient, interpretable urban traffic management.
    `,
    features: [
      "Winner: Best Paper Award 2025",
      "Comparative analysis: Classical ML vs. Neural Networks",
      "Engineered temporal and environmental features",
      "High-accuracy short-term forecasting",
    ],
    stack: ["Python", "scikit-learn", "Pandas", "Matplotlib"],
    images: [
      { src: traffic1, caption: "Methodology flow" },
      { src: traffic2, caption: "Dataset overview" },
      { src: traffic3, caption: "Feature engineering" },
      { src: traffic4, caption: "Training workflow" },
      { src: traffic5, caption: "Confusion matrices" },
      { src: traffic6, caption: "Model accuracy comparison" },
      { src: traffic7, caption: "Real-time prediction output" },
    ],
    cardImage: traffic6,
    link: null,
  },

  // --- 3. WRITER IDENTIFICATION (Data Science / CV) - NEW ADDITION ---
  {
    id: "writer-identification",
    title: "Deep Learning Handwriting Recognition",
    category: "Data Science",
    tag: "TENSORFLOW / CV / FASTAPI",
    description: "A CNN-based writer identification system achieving 87% accuracy across 70 distinct handwriting styles.",
    detailedDescription: `
Developed a robust writer identification system using Convolutional Neural Networks (CNNs) to analyze and classify handwriting patterns. The model was trained on a dataset of 70 distinct handwriting styles, achieving an 87% test accuracy. The project involved building a custom preprocessing pipeline using OpenCV for line segmentation, word extraction, and data augmentation. The final model was deployed as a REST API using FastAPI, enabling real-time inference on uploaded document images.
    `,
    features: [
      "Custom CNN Architecture for pattern recognition",
      "87% Accuracy on 70 unique handwriting styles",
      "OpenCV pipeline for segmentation & augmentation",
      "Real-time API deployment via FastAPI",
    ],
    stack: ["Python", "TensorFlow", "OpenCV", "FastAPI"],
    images: [
      { src: mainPic, caption: "System Architecture" }, // Placeholder
      { src: mainPic, caption: "Preprocessing Pipeline" }, // Placeholder
      { src: mainPic, caption: "Accuracy Graphs" }, // Placeholder
    ],
    cardImage: mainPic, // Placeholder
    link: null,
  },

  // --- 4. AUTONOMOUS ROBOT (IoT / Robotics) - NEW ADDITION ---
 {
    id: "autonomous-robot",
    title: "IoT Line-Following Robot (Simulation)",
    category: "IoT & Robotics",
    tag: "C++ / WOKWI / ESP32",
    description: "A high-fidelity Wokwi simulation of an autonomous robot with PID control and live telemetry.",
    detailedDescription: `
Designed and engineered a complete simulation of an autonomous line-following robot within the Wokwi environment. The system utilizes a virtual ESP32 to process signals from simulated infrared sensors using PID control logic for precise navigation. It integrates with a real-time MQTT dashboard to transmit telemetry data (speed, battery status, sensor readings) over Wi-Fi, demonstrating complex hardware-software interaction and logic validation in a virtualized setting without the need for physical prototypes.
    `,
    features: [
      "Wokwi-based hardware simulation",
      "PID Control Logic implementation",
      "Real-time Telemetry via MQTT",
      "Virtual Sensor Integration",
    ],
    stack: ["C++", "Wokwi", "ESP32", "MQTT"],
    images: [
      { src: iot1, caption: "Telemetry Dashboard" }, 
      { src: iot2, caption: "Wokwi Simulation Environment" }, 
    ],
    cardImage: iot1, 
    link: null,
  },

  // --- 5. TECHNEXUS (Web Dev) ---
  {
    id: "technexus-website",
    title: "TechNexus Official Platform",
    category: "Web Dev",
    tag: "REACT / TAILWIND / UX",
    description: "A responsive web platform showcasing global student initiatives, bootcamps, and resources.",
    detailedDescription: `
The TechNexus website serves as the central hub for a global student-led initiative, showcasing programs, workshops, and services for university students entering tech. The platform features a high-performance UI built with React and Tailwind CSS, ensuring fast load times and seamless mobile compatibility. Key sections include dynamic event listings, project showcases, and resource libraries. The project demonstrates best practices in component-based architecture and accessible modern web design.
    `,
    features: [
      "Responsive, mobile-first UI",
      "Component-based architecture",
      "Optimized performance & accessibility",
      "Hub for global student outreach",
    ],
    stack: ["React", "Tailwind CSS", "JavaScript"],
    images: [
      { src: techNexus1, caption: "Landing page hero" },
      { src: techNexus2, caption: "About Section" },
      { src: techNexus3, caption: "Events sections" },
      { src: techNexus4, caption: "Bootcamps section" },
      { src: techNexus5, caption: "Projects section" },
    ],
    cardImage: techNexus1,
    link: "https://www.technexus.club",
  },

  // --- 6. PERSONAL LIBRARY (Web Dev / Data Science) ---
  {
    id: "personal-library",
    title: "Personal Library & Recommendation Engine",
    category: "Data Science",
    tag: "STREAMLIT / NLP / TF-IDF",
    description: "A reading tracking app with a hybrid recommendation engine using metadata and NLP.",
    detailedDescription: `
Built a full-stack personal library application using Streamlit that allows users to track reading habits and receive intelligent book suggestions. The core feature is a hybrid recommendation system that combines metadata filtering with TF-IDF text vectorization to analyze book summaries. This allows the system to suggest books based on both genre and textual similarity. The application also visualizes reading trends through interactive analytics dashboards.
    `,
    features: [
      "Hybrid Recommender (Metadata + NLP)",
      "Interactive Analytics Dashboards",
      "Personal Reading History Tracking",
      "Streamlit-based Rapid Prototyping",
    ],
    stack: ["Python", "Streamlit", "NLP", "Pandas"],
    images: [
      { src: library1, caption: "Library dashboard" },
      { src: library2, caption: "Analytics dashboard" },
      { src: library3, caption: "Recommendation results" },
      { src: library4, caption: "Add Book" },
    ],
    cardImage: library1,
    link: null,
  },

  // --- 7. CHURN PREDICTION (Data Science) ---
  {
    id: "customer-churn",
    title: "Customer Churn Prediction",
    category: "Data Science",
    tag: "ML / SHAP / ANALYTICS",
    description: "Supervised ML model to identify high-risk customers with explainable AI insights.",
    detailedDescription: `
Focused on predicting customer churn using classical supervised machine learning techniques. Multiple models were trained including Logistic Regression, KNN, Decision Trees, and SVM, with a focus on handling class imbalance. A key component of this project was interpretability; Random Forest feature importance and SHAP (SHapley Additive exPlanations) values were used to explain *why* specific customers were flagged as high-risk. This bridge between raw prediction and business insight allows for targeted retention strategies.
    `,
    features: [
      "High-accuracy churn risk classification",
      "SHAP values for model explainability",
      "Handling of imbalanced datasets",
      "Actionable business insights",
    ],
    stack: ["Python", "scikit-learn", "SHAP", "Matplotlib"],
    images: [
      { src: churn1, caption: "Model Accuracy & F1 comparison" },
      { src: churn2, caption: "KNN performance metrics" },
      { src: churn3, caption: "Feature importance analysis" },
      { src: churn4, caption: "SHAP summary plot" },
    ],
    cardImage: churn1,
    link: null,
  },
];