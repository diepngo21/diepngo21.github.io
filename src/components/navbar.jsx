import React from "react";
import "../style/components/navbar.css";
import { data } from "../data";
import { Link, useLocation } from "react-router-dom";

export const Navbar = () => {
  const location = useLocation();

  const handleLinkClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <ul className="navbar">
      <div className="home">
        <Link to="/" className="navbar-text home" onClick={handleLinkClick}>
          {data.name}
        </Link>
      </div>
      <div className="link">
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
    </ul>
  );
};
