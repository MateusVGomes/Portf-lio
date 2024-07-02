import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../estilos/Contact.scss';

const Contact = () => {
  return (
    <section id="contact">
      <h2>Contatos</h2>
      <div className="social-links">
        <a href="https://www.linkedin.com/in/mateus-v-gomes-54027223b/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i> LinkedIn
        </a>
        <a href="https://github.com/MateusVGomes" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i> GitHub
        </a>
        <a href="https://www.instagram.com/mvg2911/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i> Instagram
        </a>
      </div>

    </section>
  );
};

export default Contact;
