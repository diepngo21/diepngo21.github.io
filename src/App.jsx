import { Footer, Navbar, ScrollToTop } from "./components";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { MainPage, ContactPage, ProjectsPage } from "./pages";
import React, { useState, useEffect } from "react";
import LoadingScreen from "./components/loadingScreen";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Set loading duration to 2.5 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  // Show loading screen for 2.5 seconds
  if (isLoading) {
    return <LoadingScreen />;
  }

  // Show main app after loading
  return (
    <>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
