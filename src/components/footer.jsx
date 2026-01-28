import React from "react";
import { Link } from "react-router-dom";
import "../style/components/footer.css";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-sec">
      {/* Optional: A subtle decorative line at the top */}
      <div className="footer-line"></div>

      <div className="footer-content">
        <div className="footer-section footer-copyright">
          <p>© {currentYear}. All rights reserved.</p>
          <p>
            Made with <span className="heart-beat">❤️</span> by Diep Ngo
          </p>
        </div>

        <div>
          <nav className="footer-links">
            <Link to="/" className="link-item">
              Home
            </Link>
            <Link to="/projects" className="link-item">
              Projects
            </Link>
            <Link to="/contact" className="link-item">
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};
