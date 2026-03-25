import React from "react";
import "../style/components/workExperience.css";

const educationData = [
  {
    id: 1,
    years: "2023 - Present",
    degree: "AS in Software Engineering (Transfer)",
    description:
      "Chabot College. Currently completing lower-division major requirements for transfer to UC and CSU system. Relevant coursework: Data Structures, Discrete Math, Physics.",
  },
  {
    id: 2,
    years: "2019 - 2023",
    degree: "High School Diploma",
    description:
      "James Logan High School. Graduated with Honors. Member of Leo Club.",
  },
];

const experienceData = [
  {
    id: 1,
    years: " Feb 2026 - Present",
    title: "Engineer Department Assistant - Chabot College",
    description:
      "I support daily lab operations and faculty needs by organizing technical resources, maintaining equipment, and ensuring a smooth, efficient workspace for engineering students. Handled equipment setup, inventory tracking, budget oversight, and procurement for faculty and students. Ensured smooth lab operations and safety compliance.",
  },
  {
    id: 2,
    years: " Jan 2026 - Present",
    title: "AI Trainer - AI Handshake",
    description:
      "I evaluated machine learning outputs and provided strict quality control on specific client projects to help improve the overall accuracy and performance of AI models.",
  },
  {
    id: 3,
    years: " Aug 2023 - Jan 2026",
    title: "Lab Technician Assistant - Chabot College",
    description:
      "Managed lab logistics for Physics, Engineering, and Geology departments. Handled equipment setup, inventory tracking, budget oversight, and procurement for faculty and students. Ensured smooth lab operations and safety compliance.",
  },
];

export const WorkExperience = () => {
  return (
    <div id="custom-timeline-wrapper">
      {" "}
      <div className="timeline-container">
        <div className="timeline-wrapper">
          <div className="timeline-column">
            <h2 className="column-title">EDUCATION</h2>
            <div className="timeline-list">
              {educationData.map((item) => (
                <div key={item.id} className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-card">
                    <span className="timeline-year">{item.years}</span>
                    <h3 className="timeline-heading">{item.degree}</h3>
                    <p className="timeline-text">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="timeline-column">
            <h2 className="column-title">EXPERIENCE</h2>
            <div className="timeline-list">
              {experienceData.map((item) => (
                <div key={item.id} className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-card">
                    <span className="timeline-year">{item.years}</span>
                    <h3 className="timeline-heading">{item.title}</h3>
                    <p className="timeline-text">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
