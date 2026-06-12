import React from "react";
import "../style/components/workExperience.css";

const experienceData = [
  {
    date: "Feb 2026 – June 2026",
    title: "Engineer Department Assistant",
    company: "Chabot College",
    description:
      "Organizing technical resources, maintaining equipment, and ensuring smooth lab operations for faculty and students.",
  },
  {
    date: "May 2024 – May 2026",
    title: "Adaptive Technology Developer Intern",
    company: "Studio Cassava",
    description:
      'Developed interactive systems utilizing real-time motion tracking, including a Musical Wall Piano built with OpenCV and MediaPipe that maps shadow data to audio for students with physical disabilities at the Santa Clara County Office of Education. Additionally, architected "Point Cloud Touch," a TouchDesigner installation that uses motion-capture data to render 60fps particle physics simulations driven by hand gestures.',
  },
  {
    date: "Feb 2026 – Mar. 2026",
    title: "AI Trainer",
    company: "AI Handshake",
    description:
      "Evaluating machine learning outputs and providing quality control on client AI projects to improve accuracy.",
  },
  {
    date: "Aug 2023 – Jan 2026",
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
    title: "AS in Lib Arts & Sci-Sci, Math (Transfer)",
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
