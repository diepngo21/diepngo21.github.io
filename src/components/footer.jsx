import React from "react";
import { Link } from "react-router-dom";
import "../style/components/footer.css";

export const Footer = () => {
  return (
    <footer className="footer-sec">
      <div className="footer-content">
        <div className="footer-section footer-copyright">
          <p>©2025. All rights reserved.</p>
          <p>Made with ❤️ by Diep Ngo </p>
        </div>

        <div>
          <nav className="footer-links">
            <Link to="*">Home</Link>
            <Link to="/projects">Projects</Link>
            <Link to="*" href="#about-section">
              About
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};
