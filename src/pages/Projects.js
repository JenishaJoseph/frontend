import React from 'react';
import './Page.css';

const Projects = () => {
  const projects = [
  {
    title: 'My Portfolio Website',
    description:
      'A personal portfolio built with React and CSS. It includes animated routing, profile showcase, and a responsive layout.',
    tech: 'React, CSS',
    link: 'https://jenishajoseph.github.io/frontend/', //portfolio URL hosted
  },
  {
    title: 'Scope India Official Website',
    description:
      'A full-stack website developed for Scope India using the MERN stack. Features include course listing, contact forms, admin dashboard, and MongoDB integration.',
    tech: 'MongoDB, React, Node.js',
    link: 'https://github.com/JenishaJoseph/scopereact.git', // Link to frontend
    backend: 'https://github.com/JenishaJoseph/Server_Node.git', // Link to backend
  },
];

  return (
    <div className="projects-page">
      <h2>My Projects</h2>
      <div className="project-grid">
        {projects.map((project, index) => (
  <div key={index} className="project-card">
    <h3>{project.title}</h3>
    <p>{project.description}</p>
    <p>
      <strong>Tech:</strong> {project.tech}
    </p>
    <a href={project.link} target="_blank" rel="noopener noreferrer">
      View Frontend
    </a>
    {project.backend && (
      <>
        {' | '}
        <a href={project.backend} target="_blank" rel="noopener noreferrer">
          View Backend
        </a>
      </>
    )}
  </div>
))}
      </div>
    </div>
  );
};

export default Projects;
