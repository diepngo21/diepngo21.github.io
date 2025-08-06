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
        </div>
      </div>
    </div>
  );
});
