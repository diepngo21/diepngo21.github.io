import React from "react";
import "../style/pages/about.css";
import avatar2 from "../svg/avatar2.png";
import { BsDiscord, BsGithub, BsLinkedin } from "react-icons/bs";

export const About = React.forwardRef((props, ref) => {
  return (
    <div className="about-sec" id="about-section" ref={ref}>
      {" "}
      <div className="about-container">
        <img src={avatar2} className="avatar" />
        <div className="about-description ">
          <h1 className="about-header">A Little Bit About Me</h1>
          <p className="about-text">
            My full name is Diep Gia Lich Ngo, and you can call me Diep. I
            immigrated with my family from Vietnam to California at the age of
            12.
            <br></br>I'm currently a university student and also work as a
            student assistant. I love turning ideas into reality through clean,
            efficient code. When I'm not coding, you'll find me exploring new
            technologies, contributing to open source projects, or enjoying
            strategy games like Teamfight Tactics, HSR, etc. I believe in
            continuous learning and staying up-to-date with the latest industry
            trends.
          </p>
          <div className="email about-text" style={{ marginTop: "50px" }}>
            <p>
              Email:
              <a
                href="mailto:diepngo0531@gmail.com?&body=Message"
                style={{ textDecoration: "none" }}
              >
                {" "}
                <span style={{ textDecoration: "underline", color: "black" }}>
                  diepngo0531@gmail.com
                </span>
              </a>
            </p>
          </div>

          <div className="contact-animated-icons-container">
            <a
              className="animated-contact-icon-wrapper"
              href="http://discord.com/users/670472609649000451"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsDiscord className="animated-contact-icon" />
              <div className="animated-contact-details">
                <p>Discord</p>
                <p>Connect with me!</p>
              </div>
            </a>
            <a
              className="animated-contact-icon-wrapper delay-1"
              href="https://github.com/diepngo21"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <BsGithub className="animated-contact-icon" />
              <div className="animated-contact-details">
                <p>GitHub</p>
                <p>My Projects</p>
              </div>
            </a>
            <a
              className="animated-contact-icon-wrapper delay-2"
              href="https://www.linkedin.com/in/diepngo21/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsLinkedin className="animated-contact-icon" />
              <div className="animated-contact-details">
                <p>LinkedIn</p>
                <p>Let's Connect</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
});
