import React from 'react';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import ContactMe from './components/ContactMe';
import Navbar from './components/Navbar';
import './index.css';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <main>
        <AboutMe />
        <Projects />
        <Certifications />
        <ContactMe />
      </main>
    </div>
  );
};

export default App;