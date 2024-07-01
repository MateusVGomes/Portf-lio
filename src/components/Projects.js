import React from 'react';
//import './Projects.css';

function Projects() {
  return (
    <section id="projects">
        <h2>Projetos</h2>
        <div className="project-tile">
          <a href="https://github.com/MateusVGomes/Z.I.K" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i> Z.I.K - GitHub
          </a>
          <a href="https://z-i-p1vthjiix-mateusvgomes.vercel.app" target="_blank" rel="noopener noreferrer">
            <i className="fas fa-external-link-alt"></i> Z.I.K - Vercel
          </a>
        </div>
        <div className="project-tile">
          <a href="https://github.com/MateusVGomes/Lista-de-jogos" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i> Lista de jogos - GitHub
          </a>
          <a href="https://lista-de-jogos-1r8et4kkp-mateusvgomes.vercel.app" target="_blank" rel="noopener noreferrer">
            <i className="fas fa-external-link-alt"></i> Lista de jogos - Vercel
          </a>
        </div>
      </section>
      
  );
}

export default Projects;
