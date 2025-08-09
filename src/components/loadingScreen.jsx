import React, { useState, useEffect } from "react";
import "../style/components/loadingScreen.css";

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);
  const [messageIndex, setMessageIndex] = useState(0);

  const messages = [
    "Loading portfolio...",
    "Preparing projects...",
    "Almost ready...",
    "Welcome!",
  ];

  useEffect(() => {
    const duration = 1500;
    const interval = 50;
    const increment = 100 / (duration / interval);

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return Math.min(prev + increment + Math.random() * 2, 100);
      });
    }, interval);

    const messageInterval = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % messages.length);
    }, 800);

    return () => {
      clearInterval(progressInterval);
      clearInterval(messageInterval);
    };
  }, []);

  return (
    <div className="loading-wrapper">
      <div className="bg-particles">
        {[...Array(5)].map((_, i) => (
          <div key={i} className={`particle particle-${i + 1}`}></div>
        ))}
      </div>

      <div className="loading-container">
        <div className="logo">Diep's Portfolio</div>

        <div className="spinner-container">
          <div className="spinner"></div>
        </div>

        <div className="progress-container">
          <div className="progress-bar" style={{ width: `${progress}%` }}></div>
        </div>

        <div className="loading-text">{messages[messageIndex]}</div>
        <div className="loading-subtext">Crafting your experience</div>
        <div className="percentage">{Math.floor(progress)}%</div>
      </div>
    </div>
  );
};

export default LoadingScreen;
