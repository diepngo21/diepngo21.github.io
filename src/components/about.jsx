import React from "react";
import "../style/components/about.css";
import avatar2 from "../svg/avatar2.png";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { FaGit } from "react-icons/fa";
import { CgCPlusPlus } from "react-icons/cg";
import { TbApi } from "react-icons/tb";

const skills = [
  { icon: IoLogoJavascript, name: "JavaScript" },
  { icon: FaReact, name: "React" },
  { icon: FaHtml5, name: "HTML5" },
  { icon: FaCss3Alt, name: "CSS3" },
  { icon: FaNodeJs, name: "Node.js" },
  { icon: FaPython, name: "Python" },
  { icon: FaGit, name: "Git" },
  { icon: TbApi, name: "REST API" },
  { icon: CgCPlusPlus, name: "C++" },
];

export const About = React.forwardRef((props, ref) => {
  return (
    <div className="about-sec" id="about-section" ref={ref}>
      {" "}
      <div className="about-container">
        <img src={avatar2} className="avatar" />
        <div className="about-description ">
          <h1 className="about-header">A Little Bit About Me</h1>
          <p className="about-text">
            My full name is Diep Gia Lich Ngo, and you can call me Diep. I'm
            currently a university student and an Engineer Department
            Assistance. I love turning ideas into reality through clean,
            efficient code. When I'm not coding, you'll find me exploring new
            technologies, contributing to open source projects, or enjoying
            strategy games like Teamfight Tactics, Honkai Star Rail, etc. I
            believe in continuous learning and staying up-to-date with the
            latest industry trends.
          </p>
          <div className="about-skills-section">
            <h2 className="about-skills-header"> Skills & Technologies</h2>
            <ul className="about-skills-list">
              {skills.map((skill, index) => {
                const IconComponent = skill.icon;
                return (
                  <li key={index} className="about-skills-item">
                    <IconComponent className="about-skills-icon" />
                    <span className="skill-tooltip">{skill.name}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
});
