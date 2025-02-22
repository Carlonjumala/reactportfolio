import React, { useState } from 'react';
import project1Image from '../assets/project1.jpg';
import project2Image from '../assets/project2.jpg';
import project3Image from '../assets/project3.jpg';
import project4Image from '../assets/project4.jpg';
import project5Image from '../assets/project5.jpg';
import project6Image from '../assets/project6.jpg';
import project7Image from '../assets/project7.jpg';

import project1Video from '../assets/project1.mp4';  
import project2Video from '../assets/project2.mp4';
import project3Video from '../assets/project3.mp4';
import project4Video from '../assets/project4.mp4';
import project5Video from '../assets/project5.mp4';
import project6Video from '../assets/project6.mp4';

const projects = [
  { 
    title: 'Kamk2D', 
    description: 'This is a game engine that I made to render Tilemaps in 2D and also made some common games too. Supports OpenGL and SFML.', 
    image: project1Image,
    video: project1Video,
    link: 'https://repo.kamit.fi/ttv23sp/pelimoottoriprojektit/moottorit/kamk2d'
  },
  { 
    title: '.NET ASP Portfolio With DataBase', 
    description: 'I wanted to learn .NET ASP And Decided To Do My New Portfolio With It. Since Hosting Portfolio Using .NET & SQL Is Not So Easy Task Decided To Use My .NET Portfolio Inside This Portfolio.', 
    image: project2Image,
    video: project2Video,
    link: 'https://github.com/Carlonjumala/Portfolio'

  },
  { 
    title: 'Thalassophobia', 
    description: 'Ive Been Working On Thalassophobia As Audio Lead, Audio Programmer And Gameplay Programmer. Thalassophobia Is Made With Unreal Engine 5.', 
    image: project3Image,
    video: project3Video,
    link: 'https://store.steampowered.com/app/2507690/Thalassophobia/'
  },
  { 
    title: 'Fear of Neighbours', 
    description: 'I Was Part Of 5-Person Team Working On This Game Project The Game Is VR Horror Game Made In Unity I was Working As Gameplay Programmer.', 
    image: project4Image,
    video: project4Video,
    link: 'https://store.steampowered.com/app/2333040/Fear_of_Neighbours/'
  },
  { 
    title: 'NotHitster', 
    description: 'I Remade Popular Boardgame Called Hitster Using React + Vite For Friend Group.', 
    image: project5Image,
    video: project5Video,
    link: 'https://github.com/Carlonjumala/NotHitster'
  },
  { 
    title: 'WhosWinning WoW Addon', 
    description: 'Decided To Make A World Of Warcraft Addon Using .LUA That Tracks All Of Your PVP Kills And The Zones Where You Got Those Kills To Tell You Whos Winning.', 
    image: project6Image,
    video: project6Video,
    link: 'https://github.com/Carlonjumala/WhosWinning'
  },
  { 
    title: 'QT Projects', 
    description: 'My QT Projects Including Calculator, Calendar / Analog Clock And Chat.', 
    image: project7Image,
    link: 'https://github.com/Carlonjumala/QtProjects'
  },


];

const Projects = () => {
  const [currentProject, setCurrentProject] = useState(0);

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section id="projects">
    <div className="box">
      <h2 className="projects-header">PROJECTS</h2>

      <div className="project-image-container">
        <img src={projects[currentProject].image} alt={projects[currentProject].title} className="project-image" />
      </div>

        {/* Video Player (if available) */}
        {projects[currentProject].video && (
          <div className="video-container">
            <video key={projects[currentProject].video} controls autoPlay>
              <source src={projects[currentProject].video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        )}

<div className="project-info">
          <h3>{projects[currentProject].title}</h3>
          <p>{projects[currentProject].description}</p>
          <a href={projects[currentProject].link} className="project-link">Go to Project</a>
        </div>

        <div className="project-navigation">
          <button onClick={prevProject}>Previous</button>
          <button onClick={nextProject}>Next</button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
