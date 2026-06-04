import "../style/components/projects.css";

const projectsList = [
  {
    num: "01",
    name: "Chabot Forge",
    description: "Official makerspace website for Chabot College",
    tech: "HTML · CSS · JavaScript",
    href: "https://chabotforge.org/",
    label: "Featured →",
  },
  {
    num: "02",
    name: "Market Management System",
    description: "Admin platform with RBAC for employees, inventory & payroll",
    tech: "JavaScript · RBAC · Admin UI",
    href: "https://github.com/diepngo21",
    label: "View →",
  },
  {
    num: "03",
    name: "Point Cloud Touch",
    description: "Interactive AI art installation exhibited at ArtIS festival",
    tech: "Computer Vision · AI · Interactive",
    href: "https://github.com/diepngo21",
    label: "View →",
  },
  {
    num: "04",
    name: "Mapty",
    description: "Workout tracker with geolocation and interactive map logging",
    tech: "Leaflet.js · Geolocation · LocalStorage",
    href: "https://github.com/diepngo21/Mapty",
    label: "View →",
  },
  {
    num: "05",
    name: "Bankist",
    description: "Simulated banking app with transfers, loans & transaction history",
    tech: "JavaScript · DOM · Finance UI",
    href: "https://github.com/diepngo21",
    label: "View →",
  },
  {
    num: "06",
    name: "Netflix Clone",
    description: "Responsive streaming UI with dynamic content and API integration",
    tech: "JavaScript · HTML/CSS · API",
    href: "https://diepngo21.github.io/Netflix_V2/",
    label: "View →",
  },
];

export const Projects = () => {
  return (
    <section className="projects-section" id="projects-section">
      <div className="projects-inner">
        <p className="section-label">SELECTED WORK</p>
        <div className="section-divider"></div>

        {projectsList.map((project) => (
          <div key={project.num} className="project-row">
            <span className="project-num">{project.num}</span>
            <div className="project-info">
              <p className="project-name">{project.name}</p>
              <p className="project-desc">{project.description}</p>
              <p className="project-tech">{project.tech}</p>
            </div>
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="proj-link"
            >
              {project.label}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};
