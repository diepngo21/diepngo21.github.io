import React from "react";
import "../style/components/workExperience.css";

const experienceData = [
  {
    date: "Feb 2025 – Present",
    title: "Engineer Department Assistant",
    company: "Chabot College",
    description:
      "Organizing technical resources, maintaining equipment, and ensuring smooth lab operations for faculty and students.",
  },
  {
    date: "Jan 2025 – Present",
    title: "AI Trainer",
    company: "AI Handshake",
    description:
      "Evaluating machine learning outputs and providing quality control on client AI projects to improve accuracy.",
  },
  {
    date: "Aug 2023 – Jan 2025",
    title: "Lab Technician Assistant",
    company: "Chabot College",
    description:
      "Managed lab logistics for Physics, Engineering, and Geology. Inventory tracking, budget oversight, and procurement.",
  },
];

const educationData = [
  {
    date: "2026 – Present",
    title: "BS in Computer Science",
    company: "UC Berkeley",
    description: "Transferred from Chabot College.",
  },
  {
    date: "2023 – 2026",
    title: "AS in Software Engineering (Transfer)",
    company: "Chabot College",
    description:
      "Completed transfer requirements. Data Structures, Discrete Math, Physics.",
  },
  {
    date: "2019 – 2023",
    title: "High School Diploma, Honors",
    company: "James Logan High School",
    description: "Member of Leo Club.",
  },
];

const ExpItem = ({ date, title, company, description }) => (
  <div className="exp-item">
    <p className="exp-date">{date}</p>
    <h3 className="exp-title">{title}</h3>
    <p className="exp-company">{company}</p>
    <p className="exp-desc">{description}</p>
  </div>
);

export const WorkExperience = () => {
  return (
    <>
      <section className="exp-section" id="experience-section">
        <div className="exp-inner">
          <p className="section-label">EXPERIENCE</p>
          <div className="section-divider"></div>
          {experienceData.map((item, i) => (
            <ExpItem key={i} {...item} />
          ))}
        </div>
      </section>

      <section className="exp-section" id="education-section">
        <div className="exp-inner">
          <p className="section-label">EDUCATION</p>
          <div className="section-divider"></div>
          {educationData.map((item, i) => (
            <ExpItem key={i} {...item} />
          ))}
        </div>
      </section>
    </>
  );
};
