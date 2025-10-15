import React from 'react';
import './Project.css';

const projects = [
  {
    title: "Qorelyx - Modern Web Application",
    image: "qorelyx.png",
    technologies: ["Next.js", "Three.js", "PostgreSQL"],
    githublink: "https://qorelyx.vercel.app/",
  },
  {
    title: "Makelti - Modern Web Application",
    image: "makelti.png",
    technologies: ["Next.js", "Three.js", "PostgreSQL"],
    githublink: "https://makelti.vercel.app/",
  },
  {
    title: "File containing more than 500 solved Codeforces problems",
    image: "image.png",
    technologies: ["C++", "Java", "Python"],
    githublink: "https://github.com/Fridhi-Rochdi/Competitive_Programming-.git",
  },
  {
    title: "Online Book Store",
    image: "book.png",
    technologies: ["React", "javascript", "MySQL",'Node.js'],
    githublink: "https://github.com/Fridhi-Rochdi/Online-Book-Store.git",
  },
  {
    title: "Hospital Management Application",
    image: "1.png",
    technologies: ["Java", "JavaFX", "MySQL"],
    githublink: "https://github.com/Fridhi-Rochdi/Gestion-Clinique-.git",
  },
  {
    title: "A website for an event at ENICarthage",
    image: "techx.png",
    technologies: ["HTML", "CSS", "JavaScript"],
    githublink: "https://github.com/Fridhi-Rochdi/techX-Competition.git",
  },
];

const Project = () => {
  const handleRedirect = (url) => {
    window.open(url, "_blank"); // Opens in a new tab
  };

  return (
    <div className="projects">
      <h1 className="title">Ready to discover my work?</h1>
      <div className="project">
        {projects.map((project, index) => (
          <div
            className="project-item"
            key={index}
            onClick={() => handleRedirect(project.githublink)}
          >
            <img src={project.image} alt={`Project ${index + 1}`} />
            <div className="description">
              <p className="description-item">{project.title}</p>
              <ul className="languages">
                {project.technologies.map((tech, i) => (
                  <li key={i}>{tech}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
