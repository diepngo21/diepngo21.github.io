import React, { useState } from "react";
import "../style/components/navbar.css";
import { data } from "../data";
import { Link, useLocation } from "react-router-dom";

export const Navbar = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLinkClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/" className="navbar-text home" onClick={handleLinkClick}>
          {data.name}
        </Link>
      </div>

      <button
        className={`hamburger ${isMobileMenuOpen ? "hamburger-active" : ""}`}
        onClick={toggleMobileMenu}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div
        className={`navbar-links ${
          isMobileMenuOpen ? "navbar-links-mobile" : ""
        }`}
      >
        <Link
          to="/"
          className={`navbar-text navbar-option ${
            isActive("/") ? "active" : ""
          }`}
          onClick={handleLinkClick}
        >
          Home
        </Link>

        <Link
          to="/projects"
          className={`navbar-text navbar-option ${
            isActive("/projects") ? "active" : ""
          }`}
          onClick={handleLinkClick}
        >
          Projects
        </Link>

        <Link
          to="/contact"
          className={`navbar-text navbar-option ${
            isActive("/contact") ? "active" : ""
          }`}
          onClick={handleLinkClick}
        >
          Contact
        </Link>
      </div>

      {isMobileMenuOpen && (
        <div
          className="navbar-overlay"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
      )}
    </nav>
  );
};
