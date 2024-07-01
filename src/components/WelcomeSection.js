import React from 'react';
import perfilImage from '../fotos/perfil.jpg';
//import './WelcomeSection.css';

function WelcomeSection() {
  return (
    <section id="welcome-section">
    <img src={perfilImage} alt="Foto de quem eu sou" id="my-photo" />
    <h1>Bem-vindo ao meu Portfólio</h1>
  </section>
  );
}

export default WelcomeSection;