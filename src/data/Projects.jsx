import mainPic from "../assets/project-filler.webp";
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

export const projects = [
  {
    id: "smart-lighting-cctv",
    title: "Unified Smart Lighting & CCTV Integration",
    tag: "IoT / PYTHON / APIs",
    description: "A brand-agnostic IoT platform unifying lighting and CCTV systems with automation and energy efficiency.",
    detailedDescription: `
This project developed a unified IoT platform that integrates lighting and CCTV systems across multiple brands. The platform allows centralized monitoring, automated scheduling, and real-time control of devices to improve energy efficiency and operational safety. It features a secure four-layer architecture for reliable communication and supports remote management via dashboards. The system was implemented using Python, IoT protocols, and REST APIs, and tested with simulated devices to ensure cross-device compatibility and automation reliability.
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

  {
    id: "personal-library",
    title: "Personal Library & Book Recommendation",
    tag: "PYTHON / STREAMLIT / NLP",
    description: "Streamlit-based reading tracker with a hybrid metadata + TF-IDF recommendation engine.",
    detailedDescription: `
This project built a personal library application using Streamlit that allows users to track reading history and receive book recommendations. A hybrid recommendation system was implemented using both metadata similarity and TF-IDF text vectorization. The system suggests books based on user preferences, reading history, and textual similarity, providing both personalized and serendipitous recommendations. The app also includes analytics dashboards to visualize reading patterns and supports adding new books seamlessly.
    `,
    features: [
      "Hybrid metadata + TF-IDF recommender",
      "Personal reading history tracking",
      "Automated book suggestions",
      "Clean Streamlit UI",
    ],
    stack: ["Python", "Streamlit", "NLP", "TF-IDF"],
    images: [
      { src: library1, caption: "Library dashboard" },
      { src: library2, caption: "Analytics dashboard" },
      { src: library3, caption: "Recommendation results" },
      { src: library4, caption: "Add Book" },
    ],
    cardImage: library1,
    link: null,
  },

  {
    id: "technexus-website",
    title: "TechNexus Website",
    tag: "REACT / TAILWIND / JAVASCRIPT",
    description: "A responsive web platform showcasing TechNexus programs, missions, and student services.",
    detailedDescription: `
The TechNexus website serves as a hub for the global student-led initiative, showcasing its programs, workshops, and services for university students entering tech. The website features a responsive UI built with React and Tailwind CSS, interactive sections, and clear program information. It supports smooth navigation and highlights TechNexus events, projects, and bootcamps. The website also demonstrates best practices for modular React development and responsive design for user engagement.
    `,
    features: [
      "Responsive, modern UI",
      "Animated interactions",
      "Clear service and program sections",
      "Optimized for student engagement",
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

  {
    id: "customer-churn",
    title: "Customer Churn Prediction",
    tag: "PYTHON / ML / DATA SCIENCE",
    description: "A supervised ML model predicting high-risk customers with feature engineering and SHAP interpretability.",
    detailedDescription: `
This project focused on predicting customer churn using classical supervised machine learning techniques. Multiple models were trained including Logistic Regression, KNN, Decision Trees, and SVM. Performance metrics such as accuracy, precision, recall, and F1-score were evaluated, with a particular focus on the minority churn class. Feature importance was analyzed using Random Forest and SHAP values to provide interpretability. The model identifies high-risk customers and provides actionable business recommendations, bridging the gap between predictive modeling and practical retention strategies.
    `,
    features: [
      "Churn risk prediction for high-value customers",
      "Feature engineering and model evaluation pipeline",
      "SHAP explainability for interpreting predictions",
      "Data-driven business recommendations"
    ],
    stack: ["Python", "scikit-learn", "SHAP"],
    images: [
      { src: churn1, caption: "Model Accuracy & F1 comparison" },
      { src: churn2, caption: "KNN performance for different k values" },
      { src: churn3, caption: "Random Forest feature importance" },
      { src: churn4, caption: "SHAP summary plot" },
    ],
    cardImage: churn1,
    link: null,
  },

  {
    id: "traffic-congestion",
    title: "Traffic Congestion Prediction",
    tag: "PYTHON / ML / DATA SCIENCE",
    description: "Research evaluating classical ML models for urban traffic congestion prediction.",
    detailedDescription: `
This research investigated whether classical machine learning models can achieve competitive performance for short-term traffic congestion prediction compared to deep learning models. Four models were implemented: Logistic Regression, Random Forest, SVM, and KNN. Extensive preprocessing, feature engineering, and time-based transformations were applied. Models were evaluated using accuracy, precision, recall, F1-score, and confusion matrices. Random Forest and SVM achieved the highest predictive performance. The study highlights the feasibility of interpretable, efficient classical models for real-time deployment in urban traffic management, addressing a research gap in existing literature.
    `,
    features: [
      "Short-term traffic congestion prediction",
      "Extensive feature engineering including time, mobility, and environmental data",
      "Comparison of classical ML models with multi-metric evaluation",
      "Emphasis on interpretability and real-time usability",
      "Filling research gap versus deep learning approaches",
    ],
    stack: ["Python", "scikit-learn", "Pandas", "Seaborn", "Matplotlib"],
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
];
