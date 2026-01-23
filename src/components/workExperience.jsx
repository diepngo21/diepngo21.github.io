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
    years: "2026 - Present",
    title: "Engineer Department Assistant",
    description:
"Assisting engineering professors with lab setup, equipment maintenance, and student support in engineering courses. Responsibilities include preparing materials, troubleshooting technical issues, and ensuring a safe learning environment. Help run the Chabot Forge, where students can go to do their projects outside of class time and use equipment like 3D printers, soldering, laser cutters, etc."  },
  {
    id: 2,
    years: " 2023 - 2025",
    title: "Lab Technician Assistant",
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
