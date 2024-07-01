import React from 'react';
import './estilos/App.scss';
import Navbar from './components/Navbar';
import WelcomeSection from './components/WelcomeSection';
import Projects from './components/Projects';
import Contact from './components/Contact';

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
