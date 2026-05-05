import React, { useState } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

// Section Components
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import LoadingScreen from "./components/LoadingScreen";

// We create a wrapper so we can use the Router
function AppContent() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <LoadingScreen 
            key="loader" 
            onComplete={() => setIsLoading(false)} 
          />
        )}
      </AnimatePresence>

      {!isLoading && (
        // App.jsx
<Router>
  <Navbar />
  <Routes>
    <Route path="/" element={<Home />} />
    {/* This catches any other path and sends it home */}
    <Route path="*" element={<Home />} />
  </Routes>
</Router>
      )}
    </>
  );
}

// Final App component
function App() {
  return <AppContent />;
}

export default App;