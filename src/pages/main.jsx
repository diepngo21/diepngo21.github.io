import React, { useState } from "react";
import "../style/pages/main.css";
import { data } from "../data";
import chibi from "../svg/chibi.png";

import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

import { GoPaperAirplane } from "react-icons/go";

export const Main = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="main-container main-section-class">
      <div className="main-section">
        <div className="text">
          <div className="introduction">
            <div className="img">
              <img src={chibi}></img>
            </div>
            <ul className="intro-text">
              <div className="typewriter name">
                <Typewriter
                  loop={2}
                  cursor
                  typeSpeed={140}
                  cursorStyle="_"
                  words={["Hello, My name is Diep"]}
                />
              </div>
              <p className="intro-text-el" id="job">
                {data.job}
              </p>
              <p className="intro-text-el" id="about">
                A dedicated software engineer with a passion for developing
                website, and AI.
              </p>

              <a
                className="intro-text-el contact-btn"
                href="mailto:diepngo0531@gmail.com?&body=Message"
                style={{ textDecoration: "none" }}
              >
                {" "}
                <div className="info">
                  <p className="intro-text-el contact">Contact Me</p>
                  <div>
                    <GoPaperAirplane className="info-icon" />
                  </div>
                </div>
              </a>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
