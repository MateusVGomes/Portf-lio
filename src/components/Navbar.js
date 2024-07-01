import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../estilos/Navbar.scss';

const Navbar = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  return (
    <nav id="navbar" className="navbar">
      <ul>
        <li><a href="#welcome-section">Bem-vindo</a></li>
        <li><a href="#projects">Projetos</a></li>
        <li><a href="#contact">Contatos</a></li>
      </ul>
      <div className="theme-toggle" onClick={toggleTheme}>
        {theme === 'light' ? (
          <i className="fas fa-moon"></i>
        ) : (
          <i className="fas fa-sun"></i>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
