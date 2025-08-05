import React from "react";
import "../style/components/navbar.css";
import { data } from "../data";
import { Link, useNavigate } from "react-router-dom";

export const Navbar = () => {
  return (
    <ul className="navbar">
      <div className="home">
        <Link to="*" className="navbar-text home">
          {data.name}
        </Link>
      </div>
      <div className="link">
        <Link to="/projects" className="navbar-text navbar-option">
          Projects
        </Link>
        <a href="#about-section" className="navbar-text navbar-option">
          About
        </a>
        <Link to="/contact" className="navbar-text navbar-option">
          Contact
        </Link>
      </div>
    </ul>
  );
};
