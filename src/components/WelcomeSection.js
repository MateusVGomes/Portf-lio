import React from 'react';
import perfilImage from '../fotos/perfil.jpg';
import '../estilos/WelcomeSection.scss';

function WelcomeSection() {
  return (
    <section className="welcome-section" id="welcome-section">
      <img src={perfilImage} alt="Uma foto de quem eu sou" id="my-photo" />
      <h1>Bem-vindo ao meu Portfólio</h1>
      <p>
        Olá meu nome é Mateus mas meus amigos só me chamam de Gomes, tudo bem? Sou formado em Ciência da Computação pela UNICAP. Atualmente, estou me aprofundando em marketing digital com Google Ads, Node.js, Express e MongoDB. Tenho experiência em Java focada em aplicativos de console, além de um forte conhecimento em front-end com HTML, CSS, JavaScript e React. Desenvolvi uma API para um sistema de almoxarifado durante meu tempo na empresa júnior da faculdade.
      </p>
      <p>
        Adoro aprender e estou sempre em busca de novas oportunidades. Sou criativo na resolução de problemas e gosto de colaborar para o crescimento da equipe. Acredito que um problema em um projeto é um desafio para todos.
      </p>
    </section>
  );
}

export default WelcomeSection;
