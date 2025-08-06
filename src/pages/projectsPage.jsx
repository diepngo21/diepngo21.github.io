import React, { useState, useEffect } from "react";
import "../style/pages/projectsPage.css";

import forge from "../svg/forge_logo.png";
import netflix from "../svg/netflix.png";
import mapty from "../svg/mapty.png";
import weather from "../svg/weather.png";
import bankist from "../svg/bankist.png";

import shopee from "../svg/shopee.png";
import marketSystem from "../svg/marketsystem.png";
import theband from "../svg/theband.png";
import theband1 from "../svg/theband1.png";
import theband2 from "../svg/theband2.png";
import theband3 from "../svg/theband3.png";
import marketSystem1 from "../svg/marketsystem1.png";
import marketSystem2 from "../svg/marketsystem2.png";

import { Contact } from "../components";

const ImageCarousel = ({ images, projectName, projectLink }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const handleCarouselClick = (e) => {
    // Only trigger link if not clicking on navigation elements
    if (
      !e.target.closest(".carousel-btn") &&
      !e.target.closest(".carousel-dots")
    ) {
      if (projectLink) {
        window.open(projectLink, "_blank", "noopener,noreferrer");
      }
    }
  };

  return (
    <div className="carousel-container">
      <div
        className="carousel-wrapper clickable-carousel"
        onClick={handleCarouselClick}
        data-tooltip={`Click to visit ${projectName} project`}
      >
        <button
          className="carousel-btn carousel-btn-prev"
          onClick={prevSlide}
          data-tooltip="Previous image"
        >
          &#8249;
        </button>

        <div className="carousel-slide">
          <img
            className="projectsPg-img carousel-img"
            src={images[currentIndex]}
            alt={`${projectName} screenshot ${currentIndex + 1}`}
            data-tooltip={`${projectName} - Image ${currentIndex + 1} of ${
              images.length
            }`}
          />
        </div>

        <button
          className="carousel-btn carousel-btn-next"
          onClick={nextSlide}
          data-tooltip="Next image"
        >
          &#8250;
        </button>
      </div>

      <div className="carousel-dots">
        {images.map((_, index) => (
          <button
            key={index}
            className={`carousel-dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => goToSlide(index)}
            data-tooltip={`Go to image ${index + 1}`}
          />
        ))}
      </div>

      {/* Image counter */}
      <div className="carousel-counter">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
};

export function ProjectsPage() {
  const TheBandImages = [theband, theband1, theband2, theband3];
  const MarketSystemImages = [marketSystem, marketSystem1, marketSystem2];

  useEffect(() => {
    const tooltip = document.createElement("div");
    tooltip.className = "cursor-tooltip";
    tooltip.style.cssText = `
      position: fixed;
      background: rgba(0, 0, 0, 0.9);
      font-family: "Eczar", serif;
      color: white;
      padding: 10px 14px;
      border-radius: 6px;
      font-size: 15px;
      pointer-events: none;
      z-index: 9999;
      white-space: nowrap;
      opacity: 0;
      visibility: hidden;
      transition: opacity 0.2s ease;
      box-shadow: 0 4px 12px rgba(0,0,0,0.3);
    `;
    document.body.appendChild(tooltip);

    const handleMouseEnter = (e) => {
      const tooltipText = e.target.getAttribute("data-tooltip");
      if (tooltipText) {
        tooltip.textContent = tooltipText;
        tooltip.style.opacity = "1";
        tooltip.style.visibility = "visible";
      }
    };

    const handleMouseMove = (e) => {
      const tooltipText = e.target.getAttribute("data-tooltip");
      if (tooltipText) {
        tooltip.style.left = e.clientX + 15 + "px";
        tooltip.style.top = e.clientY - 10 + "px";
      }
    };

    const handleMouseLeave = (e) => {
      const tooltipText = e.target.getAttribute("data-tooltip");
      if (tooltipText) {
        tooltip.style.opacity = "0";
        tooltip.style.visibility = "hidden";
      }
    };

    document.addEventListener("mouseenter", handleMouseEnter, true);
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave, true);

    return () => {
      document.removeEventListener("mouseenter", handleMouseEnter, true);
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave, true);
      if (tooltip.parentNode) {
        tooltip.parentNode.removeChild(tooltip);
      }
    };
  }, []);

  return (
    <div className="projectsPg-section">
      <div className="projectsPg-header-section">
        <h1>Website and AI Projects</h1>
        <p>
          As a skilled developer, I create high-quality websites, integrating
          intelligent AI features to deliver both stunning visuals and powerful
          functionality.
        </p>
      </div>

      <div className="projectsPg-container">
        <h1 className="projectsPg-header">
          Most notable website and fun projects that I did
        </h1>
        <div className="projectsPg-projects">
          <div className="projectsPg-description">
            <a
              href="https://chabotforge.org"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              <img
                className="projectsPg-img"
                src={forge}
                alt="Forge website"
                data-tooltip="View Chabot Forge - Makerspace website"
              />
            </a>
            <p className="projectsPg-text">
              <span className="projectsPg-text-name">Chabot Forge </span>-
              Chabot College's makerspace website is a central online hub where
              many students go to discover available tools and resources, learn
              how to create and innovate through guides and workshops, and
              showcase their projects.
            </p>
          </div>

          <div className="projectsPg-description">
            <a
              href="https://github.com/diepngo21/Netflix_V2"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              <img
                className="projectsPg-img"
                src={netflix}
                alt="Netflix project"
                data-tooltip="View the project live"
              />
            </a>
            <p className="projectsPg-text">
              <span className="projectsPg-text-name">Netflix </span>- A
              responsive front-end streaming service with JavaScript, HTML, and
              CSS. Features dynamic content and demonstrates strong proficiency
              in DOM manipulation and API integration.
            </p>
          </div>

          <div className="projectsPg-description">
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
              href="https://github.com/diepngo21/Mapty"
            >
              <img
                className="projectsPg-img"
                src={mapty}
                alt="Mapty project"
                data-tooltip="View Repository"
              />
            </a>
            <p className="projectsPg-text">
              <span className="projectsPg-text-name">Mapty </span>- A web app
              that helps you track and map your running and cycling workouts.
              Uses your location to display activities on an interactive map
              with detailed workout logging.
            </p>
          </div>

          <div className="projectsPg-description">
            <ImageCarousel
              images={MarketSystemImages}
              projectName="MarketSystem"
            />

            <p className="projectsPg-text">
              <span className="projectsPg-text-name">
                Market Management System{" "}
              </span>
              - Admin dashboard platform for managing employees, products and
              payslips. Features role-based access control and user-friendly
              interface for different employee positions.
            </p>
          </div>

          <div className="projectsPg-description">
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="project-link "
              href="https://github.com/diepngo21/shopee-project"
            >
              <img
                className="projectsPg-img"
                src={shopee}
                alt="Shopee project"
                data-tooltip="View Repository"
              />
            </a>
            <p className="projectsPg-text">
              <span className="projectsPg-text-name">Shopee </span>- This
              project is a responsive HTML and CSS clone of the Shopee
              e-commerce platform's user interface. It meticulously recreates
              Shopee's visual design and layout, demonstrating strong frontend
              development and responsive styling capabilities.
            </p>
          </div>

          <div className="projectsPg-description">
            <ImageCarousel
              images={TheBandImages}
              projectName="TheBand"
              projectLink="https://github.com/diepngo21/theband"
            />
            <p className="projectsPg-text">
              <span className="projectsPg-text-name">The Band </span>- This
              project is a responsive band website built with HTML and CSS,
              applying fundamental web design principles found in W3Schools
              tutorials. It showcases a clean, adaptable layout that ensures
              optimal viewing and navigation across all device sizes.
            </p>
          </div>

          <div className="projectsPg-description">
            <a
              href="https://github.com/diepngo21/Weather"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              <img
                className="projectsPg-img"
                src={weather}
                alt="Weather project"
                data-tooltip="View Repository"
              />
            </a>
            <p className="projectsPg-text">
              <span className="projectsPg-text-name">Weather App </span>- This
              project is a simple weather application that uses an API to
              display the current temperature for your city. It provides quick,
              real-time temperature updates to keep you informed about your
              local weather conditions.
            </p>
          </div>

          <div className="projectsPg-description">
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
              href="https://github.com/diepngo21/Bankist"
            >
              <img
                className="projectsPg-img"
                src={bankist}
                alt=" Bankist project"
                data-tooltip="View Repository"
              />
            </a>
            <p className="projectsPg-text">
              <span className="projectsPg-text-name">Bankist </span>- This
              project is a simulated online banking application, "Bankist,"
              built with JavaScript. It features core functionalities like
              secure user login with ID and PIN, account transfers, requesting
              loans, and closing accounts. Users can also sort their transaction
              history and view their current balance.
            </p>
          </div>
        </div>
      </div>
      <Contact />
    </div>
  );
}
