import React from "react";
import "../style/components/footer.css";

export const Footer = () => {
  return (
    <footer className="footer-sec">
      <div className="footer-inner">
        <div className="footer-rule"></div>
        <div className="footer-content">
          <span className="footer-name">D I E P &nbsp; N G O</span>
          <span className="footer-copy">
            &copy; {new Date().getFullYear()}. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};
