import React, { useState, useEffect } from 'react';
import project1Image from '../assets/project1.jpg';
import project2Image from '../assets/project2.jpg';
import project3Image from '../assets/project3.jpg';
import project4Image from '../assets/project4.jpg';
import project5Image from '../assets/project5.jpg';
import project6Image from '../assets/project6.jpg';
import project7Image from '../assets/project7.jpg';
import project8Image from '../assets/project8.jpg';
import project9Image from '../assets/project9.jpg';
import project10Image from '../assets/hitster1.jpg';
import wowtriviapic from '../assets/wowtrivia.jpg';

import project1Video from '../assets/project1.mp4';  
import project2Video from '../assets/project2.mp4';
import project3Video from '../assets/project3.mp4';
import project4Video from '../assets/project4.mp4';
import project5Video from '../assets/project5.mp4';
import project6Video from '../assets/project6.mp4';
import project8Video from '../assets/project8.mp4';
import project9Video from '../assets/project9.mp4';
import project7Video from '../assets/hitstervideo.mp4';
import wowtriviavideo from '../assets/wowtrivia.mp4';

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

const projects = [
  { 
    title: 'Kamk2D Game Engine', 
    description: 'A custom 2D game engine built from scratch that renders tilemaps and supports common game mechanics. Features OpenGL and SFML integration for efficient rendering.', 
    image: project1Image,
    video: project1Video,
    link: 'https://github.com/Carlonjumala/2D-videogame-engine',
    technologies: ['C++', 'OpenGL', 'SFML', '2D Graphics']
  },
  { 
    title: 'Varattuvalo Games Website', 
    description: 'Complete website solution for indie game studio Varattuvalo Games. Responsible for design, development, and hosting. Built with modern web technologies for optimal performance and user experience.', 
    image: project8Image,
    video: project8Video,
    link: 'https://varattuvalogames.com/',
    technologies: ['React', 'Tailwind CSS', 'Web Hosting', 'UI/UX Design']
  },
  { 
    title: 'Social Drinking Game App', 
    description: 'Cross-platform mobile application designed for social gaming experiences. Built with React Native for iOS and Android deployment, featuring engaging game mechanics and social interactions.', 
    image: project9Image,
    video: project9Video,
    link: '',
    technologies: ['React Native', 'Mobile Development', 'Ignite Framework']
  },
  { 
    title: '.NET ASP Portfolio with Database', 
    description: 'Full-stack portfolio application showcasing .NET ASP.NET Core skills. Features database integration, responsive design, and modern backend architecture patterns for scalable web applications.', 
    image: project2Image,
    video: project2Video,
    link: 'https://github.com/Carlonjumala/Portfolio',
    technologies: ['.NET Core', 'ASP.NET', 'SQL Server', 'Entity Framework']
  },
  { 
    title: 'Thalassophobia', 
    description: 'Immersive underwater horror experience developed with Unreal Engine 5. Serving as Audio Lead, Audio Programmer, and Gameplay Programmer, contributing to atmospheric sound design and core gameplay mechanics.', 
    image: project3Image,
    video: project3Video,
    link: 'https://store.steampowered.com/app/2507690/Thalassophobia/',
    technologies: ['Unreal Engine 5', 'Audio Programming', 'Game Development', 'Steam']
  },
  { 
    title: 'Fear of Neighbours', 
    description: 'Virtual Reality horror game developed in Unity as part of a 5-person development team. Focused on gameplay programming to create immersive and terrifying VR experiences with intuitive controls.', 
    image: project4Image,
    video: project4Video,
    link: 'https://store.steampowered.com/app/2333040/Fear_of_Neighbours/',
    technologies: ['Unity', 'VR Development', 'C# Programming', 'Steam VR']
  },
  { 
    title: 'NotHitster Music Game', 
    description: 'Digital recreation of the popular Hitster board game using modern web technologies. Features music integration, game logic, and multiplayer functionality for enhanced social gaming experiences.', 
    image: project10Image,
    video: project7Video,
    link: 'https://mellifluous-entremet-e5712d.netlify.app/',
    technologies: ['React', 'Vite', 'Music API', 'Game Logic']
  },
  { 
    title: 'WOW Trivia Masters', 
    description: 'This is a World of Warcraft Quiz site that i made using react and tried to make it look like every other quiz site. It has a timer and a score system. It also has a leaderboard that saves the top scores to local storage.', 
    image: wowtriviapic,
    video:  wowtriviavideo,
    link: 'https://inquisitive-bombolone-d80058.netlify.app/',
    technologies: ['React', 'WoW API', 'Quiz', 'Data Tracking']
  },
  { 
    title: 'Qt Desktop Applications', 
    description: 'Collection of desktop applications built with Qt framework, including a scientific calculator, calendar with analog clock, and real-time chat application demonstrating cross-platform development skills.', 
    image: project7Image,
    link: 'https://github.com/Carlonjumala/QtProjects',
    technologies: ['Qt Framework', 'C++', 'Desktop Development', 'Cross-platform']
  },
];

const Projects = () => {
  const [currentProject, setCurrentProject] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [projectRef, projectVisible] = useScrollAnimation(0.2);

  const nextProject = () => {
    setIsLoading(true);
    setTimeout(() => {
      setCurrentProject((prev) => (prev + 1) % projects.length);
      setIsLoading(false);
    }, 150);
  };

  const prevProject = () => {
    setIsLoading(true);
    setTimeout(() => {
      setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
      setIsLoading(false);
    }, 150);
  };

  const goToProject = (index) => {
    if (index !== currentProject) {
      setIsLoading(true);
      setTimeout(() => {
        setCurrentProject(index);
        setIsLoading(false);
      }, 150);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'ArrowLeft') {
        prevProject();
      } else if (e.key === 'ArrowRight') {
        nextProject();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  const currentProjectData = projects[currentProject];

  return (
    <section id="projects">
      <div 
        ref={projectRef}
        className={`box ${projectVisible ? 'animate-in' : ''}`}
      >
        <h2>Featured Projects</h2>
        
        {/* Project Counter */}
        <div style={{ 
          textAlign: 'center', 
          marginBottom: 'var(--spacing-lg)', 
          color: 'var(--text-muted)',
          fontSize: '0.9rem'
        }}>
          Project {currentProject + 1} of {projects.length}
        </div>

        {/* Project Indicators */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: 'var(--spacing-xs)',
          marginBottom: 'var(--spacing-lg)',
          flexWrap: 'wrap'
        }}>
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => goToProject(index)}
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                border: 'none',
                backgroundColor: index === currentProject ? 'var(--primary-color)' : 'var(--border-color)',
                cursor: 'pointer',
                transition: 'all var(--transition-normal)',
                padding: 0
              }}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </div>

        <div className={`project-container ${isLoading ? 'loading' : ''}`}>
          {/* Project Image */}
          <div className="project-image-container">
            <img 
              src={currentProjectData.image} 
              alt={currentProjectData.title}
              className="project-image"
              loading="lazy"
            />
          </div>

          {/* Video Player (if available) */}
          {currentProjectData.video && (
            <div className="video-container">
              <video 
                key={currentProjectData.video} 
                controls 
                preload="metadata"
                style={{ borderRadius: 'var(--radius-md)' }}
              >
                <source src={currentProjectData.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          )}

          {/* Project Information */}
          <div className="project-info">
            <h3>{currentProjectData.title}</h3>
            <p>{currentProjectData.description}</p>
            
            {/* Technologies Used */}
            {currentProjectData.technologies && (
              <div style={{ 
                margin: 'var(--spacing-md) 0',
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: 'var(--spacing-xs)'
              }}>
                {currentProjectData.technologies.map((tech, index) => (
                  <span
                    key={index}
                    style={{
                      background: 'var(--background-hover)',
                      color: 'var(--text-secondary)',
                      padding: 'var(--spacing-xs) var(--spacing-sm)',
                      borderRadius: 'var(--radius-sm)',
                      fontSize: '0.8rem',
                      border: '1px solid var(--border-color)',
                      transition: 'all var(--transition-normal)'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.color = 'var(--primary-color)';
                      e.target.style.borderColor = 'var(--primary-color)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.color = 'var(--text-secondary)';
                      e.target.style.borderColor = 'var(--border-color)';
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}

            {/* Project Link */}
            {currentProjectData.link && (
              <a 
                href={currentProjectData.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
                aria-label={`Visit ${currentProjectData.title} project`}
              >
                {currentProjectData.link.includes('github.com') ? 'View on GitHub' : 
                 currentProjectData.link.includes('steam') ? 'View on Steam' : 'Visit Project'}
              </a>
            )}
          </div>

          {/* Navigation */}
          <div className="project-navigation">
            <button 
              onClick={prevProject}
              aria-label="Previous project"
              disabled={isLoading}
            >
              ← Previous
            </button>
            <button 
              onClick={nextProject}
              aria-label="Next project"
              disabled={isLoading}
            >
              Next →
            </button>
          </div>
        </div>

        {/* Additional Project Info */}
        <div style={{
          marginTop: 'var(--spacing-xl)',
          textAlign: 'center',
          color: 'var(--text-muted)',
          fontSize: '0.9rem'
        }}>
          <p>Use arrow keys to navigate • Click indicators to jump to specific projects</p>
        </div>
      </div>
    </section>
  );
};

export default Projects;