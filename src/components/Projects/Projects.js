import React from "react";
import "./Projects.css";

const projectList = [
  {
    title: "Greeting Site",
    description: "A calming, modular React site with expressive UI and animated sections.",
    tech: "React, CSS Grid",
    link: "https://github.com/monika388/Greeting-Site"
  },
  {
    title: "Text-Utils",
    description: "A Text-Editor containing editing Function with soft gradients and interactive components.",
    tech: "React, Flexbox, Styled Components",
    link: "https://github.com/monika388/Text-Utils"
  }
];

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projectList.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <span className="tech">{project.tech}</span>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                <button type="button" class="btn btn-dark">View Project</button>


                
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;