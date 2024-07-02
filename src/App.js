import React from 'react';
import Navbar from './components/Navbar';
import WelcomeSection from './components/WelcomeSection';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './estilos/App.scss';
import './estilos/themes.scss';

function App() {
  return (
    <div className="App">
      <Navbar />
      <WelcomeSection />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
  