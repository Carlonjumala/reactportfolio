import React, { useEffect, useState } from 'react';
import profilePic from '../assets/profile.jpg';

const useScrollAnimation = (threshold = 0.1) => {
  const ref = React.useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  return [ref, isVisible];
};

const skills = [
  'C# / C++', 'JavaScript & TypeScript (React, Node.js)', 'HTML, CSS', 'Python',
  'Unity', 'Unreal Engine', '.NET', 'SQL / SQLite',
  'IT', 'Git, GitHub, Jira Version Control'
];

const splitSkills = () => {
  const mid = Math.ceil(skills.length / 2);
  return [skills.slice(0, mid), skills.slice(mid)];
};

const AboutMe = () => {
  const [leftColumn, rightColumn] = splitSkills();
  const [aboutRef, aboutVisible] = useScrollAnimation(0.2);
  const [experienceRef, experienceVisible] = useScrollAnimation(0.2);
  const [skillsRef, skillsVisible] = useScrollAnimation(0.2);

  return (
    <section id="about-me" className="about-me">
      {/* About Me Box */}
      <div 
        ref={aboutRef}
        className={`box ${aboutVisible ? 'animate-in' : ''}`}
      >
        <h2>About Me</h2>
        <div className="about-me-container">
          <img 
            src={profilePic} 
            alt="Leevi Nokkonen - Software Engineer" 
            className="profile-pic" 
            loading="lazy"
          />
          <div className="about-me-text">
            <p>
              Hello, I'm <strong>Leevi Nokkonen</strong>, a passionate Software Engineer eager for new adventures.
              I specialize in game development & full-stack development.
              With a strong problem-solving mindset, I enjoy building impactful digital experiences.
            </p>
            <p>I'm currently located in <strong>Kokkola, Finland</strong>.</p>
            <h1><strong>TEAM PLAYER TO THE END!</strong></h1>
          </div>
        </div>

        {/* Social Links */}
        <div className="social-links">
          <a
            href="https://github.com/Carlonjumala"
            target="_blank"
            rel="noopener noreferrer"
            className="social-button github"
            aria-label="Visit my GitHub profile"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/leevi-nokkonen-0909b5206"
            target="_blank"
            rel="noopener noreferrer"
            className="social-button linkedin"
            aria-label="Visit my LinkedIn profile"
          >
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>

      {/* Experience Section */}
      <div 
        ref={experienceRef}
        className={`box ${experienceVisible ? 'animate-in' : ''}`}
      >
        <h2>Experience</h2>
        <div className="experience-item">
          <h3>Bachelor's degree Information Technology</h3>
          <p><em>2020-2025</em></p>
          <ul>
            <li>I got my degree in Kajaani University of Applied Sciences</li>
            <li>C++/C#, JavaScript/TypeScript, Unreal Eninge and Unity </li>
          </ul>
        </div>
        <div className="experience-item">
          <h3>Co-Founder - Varattu Valo Games</h3>
          <p><em>Jun 2023 - Present</em></p>
          <ul>
            <li>Audio Lead, Audio Programmer, and Gameplay Programmer</li>
            <li>Developing videogames consulting for different projects</li>
          </ul>
        </div>
      </div>

      {/* Skills Section */}
      <div 
        ref={skillsRef}
        className={`box ${skillsVisible ? 'animate-in' : ''}`}
      >
        <h2>Skills & Technologies</h2>
        <div className="skills-container">
          <div className="skills-panel">
            <ul>
              {leftColumn.map((skill, index) => (
                <li key={`left-${index}`}>{skill}</li>
              ))}
            </ul>
          </div>
          <div className="skills-panel">
            <ul>
              {rightColumn.map((skill, index) => (
                <li key={`right-${index}`}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;