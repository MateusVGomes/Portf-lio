import React from 'react';
import './App.css';
import perfilImage from './fotos/perfil.jpg';

function App() {
  return (
    <div className="App">
      <nav id="navbar">
        <ul>
          <li><a href="#welcome-section">Bem-vindo</a></li>
          <li><a href="#projects">Projetos</a></li>
          <li><a href="#contact">Contatos</a></li>
        </ul>
      </nav>
      
      <section id="welcome-section">
        <img src={perfilImage} alt="Foto de quem eu sou" id="my-photo" />
        <h1>Bem-vindo ao meu Portfólio</h1>
      </section>
      
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
      
      <footer id="contact">
        <h2>Contact Me</h2>
        <div className="social-links">
          <a href="https://github.com/MateusVGomes" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i> GitHub
          </a>
          <a href="https://www.linkedin.com/in/mateus-v-gomes-54027223b/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i> LinkedIn
          </a>
          <a href="https://www.instagram.com/mvg2911/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i> Instagram
          </a>
        </div>
        <a id="profile-link" href="https://github.com/MateusVGomes" target="_blank" rel="noopener noreferrer">My GitHub Profile</a>
      </footer>
    </div>
  );
}

export default App;
