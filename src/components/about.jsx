import React from "react";
import "../style/components/about.css";

export const About = React.forwardRef((props, ref) => {
  return (
    <section className="about-section" id="about-section" ref={ref}>
      <div className="about-inner">
        <p className="section-label">ABOUT</p>
        <div className="section-divider"></div>

        <div className="about-headline">
          <h2 className="about-h2">Building the web,</h2>
          <h2 className="about-h2 about-h2-italic">one project at a time.</h2>
        </div>

        <div className="about-rule"></div>

        <div className="about-columns">
          <div className="about-bio">
            <p>
              My full name is Diep Gia Lich Ngo. I'm a university student and
              Software Engineer with a passion for web development and AI. I
              believe in continuous learning and staying current with the
              industry.
            </p>
            <p>
              When I'm not coding, you'll find me exploring new technologies,
              contributing to open source, or playing strategy games like
              Teamfight Tactics.
            </p>
          </div>

          <div className="about-skills-panel">
            <p className="skills-panel-label">SKILLS</p>
            <div className="skills-panel-divider"></div>
            <div className="skills-grid">
              <ul>
                <li>JavaScript</li>
                <li>HTML &amp; CSS</li>
                <li>Python</li>
                <li>React</li>
                <li>Git &amp; GitHub</li>
                <li>API Integration</li>
              </ul>
              <ul>
                <li>AI Integration</li>
                <li>Responsive Design</li>
                <li>DOM Manipulation</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});
