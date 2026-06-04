import React from "react";
import "../style/pages/main.css";
import { data } from "../data";

export const Main = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="hero-left">
          <h1 className="hero-name">
            <span>Diep</span>
            <span>Ngo</span>
          </h1>
          <p className="hero-role">
            Software Engineer &amp; Web Developer, Bay Area CA
          </p>

          <div className="hero-cta-row">
            <div className="available-pill">
              <span className="available-dot"></span>
              <span className="available-text">Available now</span>
            </div>
            <a href="#projects-section" className="btn-dark">
              View Work
            </a>
            <a href={`mailto:${data.gmail}`} className="btn-outline">
              Contact Me
            </a>
          </div>
        </div>

        <div className="hero-right">
          <p className="stack-label">STACK</p>
          <div className="stack-divider"></div>
          <ul className="stack-list">
            <li>JavaScript</li>
            <li>HTML · CSS</li>
            <li>Python</li>
            <li>React</li>
            <li>AI Integration</li>
          </ul>
        </div>
      </div>

      <div className="hero-ornament">
        <div className="ornament-line"></div>
        <div className="ornament-dot-outer">
          <div className="ornament-dot-inner"></div>
        </div>
        <div className="ornament-line"></div>
      </div>

      {/* Stats row */}
      <div className="hero-stats">
        <div className="stat-item">
          <span className="stat-number">8+</span>
          <span className="stat-label">Projects built</span>
        </div>
        <div className="stat-divider"></div>

        <div className="stat-divider"></div>
        <div className="stat-item">
          <span className="stat-number">AI</span>
          <span className="stat-label">Focused stack</span>
        </div>
        <div className="stat-divider"></div>
        <div className="stat-item">
          <span className="stat-number">CA</span>
          <span className="stat-label">Bay Area</span>
        </div>
      </div>
    </section>
  );
};
