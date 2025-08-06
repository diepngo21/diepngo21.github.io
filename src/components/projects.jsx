import "../style/components/projects.css";
import forge from "../svg/forge_logo.png";
import netflix from "../svg/netflix.png";
import mapty from "../svg/mapty.png";
import Touchdesigner from "../svg/touchdesigner.mp4";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export const Projects = () => {
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
    <div className="project-section" id="projects-section">
      <div className="project-header">My Solo Projects</div>
      <div className="projects-container">
        <div className="projects">
          <div className="projects-text">
            <p className="projects-header">Chabot Forge</p>
            <p className="projects-description">
              As part of my work at Chabot Forge, I designed and developed the
              official front-end website for Chabot Forge, enhancing our digital
              presence and creating an accessible online resource.
            </p>
          </div>
          <a href="https://chabotforge.org/" target="_blank">
            {" "}
            <img
              className="projects-img"
              src={forge}
              href="https://chabotforge.org/"
              data-tooltip="Click to view Chabot Forge - Engineering Maker Lab"
            />
          </a>{" "}
        </div>
        <div className="projects">
          <div className="projects-text">
            <p className="projects-header">Netflix</p>
            <p className="projects-description">
              Developed a responsive front-end streaming service with
              JavaScript, HTML, and CSS. This project features dynamic content,
              and demonstrates strong proficiency in DOM manipulation and API
              integration.
            </p>
          </div>
          <a href="https://diepngo21.github.io/Netflix_V2/" target="_blank">
            <img
              className="projects-img"
              src={netflix}
              data-tooltip="View the project live"
            />
          </a>
        </div>
        <div className="projects">
          <div className="projects-text">
            <p className="projects-header">Mapty</p>
            <p className="projects-description">
              Mapty is a web app that helps you track and map your running and
              cycling workouts. It uses your location to display activities on
              an interactive map. You can log new workouts with details like
              distance and duration, which are then shown on the map and in a
              list.
            </p>
          </div>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/diepngo21/Mapty"
          >
            <img
              className="projects-img"
              src={mapty}
              data-tooltip="View Repository"
            />
          </a>
        </div>
      </div>
      <div className="project-header">Collaborative / Fun Projects</div>
      <div className="co-fun-projecs-container">
        <div className="co-projects">
          <div className="projects">
            <div className="projects-text co-projects-text">
              <p className="projects-header">Market Management System</p>
              <p className="projects-description">
                Admin Dashboard is a platform for managing employees, product
                and payslips for employees. It is divided into two parts. The
                first part is for users with admin, manager or superviosr roles
                to add employees and add new products or update existing
                products. The next part is for users such as Cashier, Grocery,
                Meat and Produce positions, in this part, employees can only
                update user informationm see if there are new products. In
                addition, employees can check payslips on this platform. This is
                a platform where only emplotees can post and recceive without
                admin permission. It is user-friendly and is still being
                improved and refined.
              </p>
            </div>
          </div>
          <div className="projects">
            <div className="projects-text co-projects-text">
              <p className="projects-header">Co Chau Kitchen</p>
              <p className="projects-description">
                I was responsible for the front-end development of a dynamic
                restaurant website, designed to enhance the customer's online
                ordering experience. This involved creating a visually appealing
                and highly interactive menu system where users can browse dishes
                by category, view item details, and seamlessly add items to
                their order cart. My work encompassed the entire user interface
                implementation, ensuring responsive design and intuitive
                navigation, by translating design mockups into functional code
                using React, HTML, CSS, etc...
              </p>
            </div>
          </div>
        </div>
        <div className="fun-projects">
          <div className="projects">
            <div className="projects-text co-projects-text">
              <p className="projects-header">Point Cloud Touch</p>
              <p className="projects-description">
                I had the opportunity to work with my professor on a captivating
                interactive project: "Point Cloud Touch." This installation
                transformed human movement into a dynamic visual experience,
                where hand gestures captured by a camera would create a wave
                that dramatically reshaped a projected image. Our goal was to
                develop an engaging piece for a collaborative exhibition with
                the ABG art group at a creative innovation festival.
              </p>
            </div>
            <video controls className="projects-video">
              <source src={Touchdesigner} type="video/mp4" />
              Your browser does not support the video tag.
            </video>{" "}
          </div>
          <div className="project-more-btn">
            <Link to="/projects">More Projects</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
