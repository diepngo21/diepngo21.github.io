import { Footer, Navbar, ScrollToTop } from "./components";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { MainPage, ContactPage } from "./pages";
import React, { useState, useEffect } from "react";
import LoadingScreen from "./components/loadingScreen";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  if (isLoading) {
    return <LoadingScreen onDone={() => setIsLoading(false)} />;
  }

  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
