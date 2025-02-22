import React, { useEffect, useState } from 'react';
import profilePic from '../assets/profile.jpg';

const skills = [
  'C# / C++', 'JavaScript (React, Node.js)', 'HTML, CSS', 'Python',
  'Unity', 'Unreal Engine', '.NET', 'SQL / SQLite',
  'IT', 'Git, GitHub, Jira Version Control'
];

const splitSkills = () => {
  const mid = Math.ceil(skills.length / 2);
  return [skills.slice(0, mid), skills.slice(mid)];
};

const AboutMe = () => {
  const [leftColumn, rightColumn] = splitSkills();
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <section id="about-me" className={`about-me ${animate ? 'animate' : ''}`}>
      <div className="box">
        <h2>About Me</h2>
        <div className="about-me-container">
          <img src={profilePic} alt="Profile" className="profile-pic" />
          <div className="about-me-text">
            <p>
              Hello, I'm <strong>Leevi Nokkonen</strong>, a passionate Software Engineer eager for new adventures.
              I specialize in game development, web applications, and backend development.
              With a strong problem-solving mindset, I enjoy building impactful digital experiences.
            </p>
            <p>I'm currently located in Finland, <strong>Kokkola</strong>.</p>
            <p><strong>TEAM PLAYER TO THE END!</strong></p>
          </div>
        </div>

        {/* Social Links */}
        <div className="social-links">
          <a href="https://github.com/Carlonjumala" target="_blank" rel="noopener noreferrer" className="social-button github">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/leevi-nokkonen-0909b5206" target="_blank" rel="noopener noreferrer" className="social-button linkedin">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>

      {/* Experience Section */}
      <div className="box">
        <h2>Experience</h2>
        <ul>
          <h1>Co-Founder - Varattu Valo Games (Jun 2023 - Present)</h1>
          <li>Working as Audio Lead, Audio Programmer, and Gameplay Programmer.</li>
        </ul>
      </div>

      {/* Skills Section */}
      <div className="box">
        <h2>Skills</h2>
        <div className="skills-container">
          <ul className="skills-column">
            {leftColumn.map((skill, index) => <li key={index}>{skill}</li>)}
          </ul>
          <ul className="skills-column">
            {rightColumn.map((skill, index) => <li key={index}>{skill}</li>)}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;