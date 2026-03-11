import React, { useState, useEffect, useRef } from 'react';
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
import pulsinggiImage from '../assets/pulsinggitVideo.png';

import project1Video from '../assets/project1.mp4';
import project2Video from '../assets/project2.mp4';
import project3Video from '../assets/project3.mp4';
import project4Video from '../assets/project4.mp4';
import project5Video from '../assets/project5.mp4';
import project6Video from '../assets/project6.mp4';
import project8Video from '../assets/project8.mp4';
import project9Video from '../assets/project9.mp4';
import project7Video from '../assets/hitstervideo.mp4';
import pulsinggitVideo from '../assets/pulsinggitImagine.mp4';

// ─── Data ────────────────────────────────────────────────────────────────────

const categories = [
  { id: 'all',     label: 'All',            icon: '' },
  { id: 'game',    label: 'Game Dev',       icon: '' },
  { id: 'web',     label: 'Web & Full-Stack', icon: '' },
  { id: 'mobile',  label: 'Mobile',         icon: '' },
  { id: 'desktop', label: 'Desktop / Systems', icon: '' },
];

const projects = [
  {
    id: 'pulsinggit',
    category: 'web',
    title: 'PulsingGit',
    tagline: 'GitHub activity tracker & visualizer',
    description:
      'A web application designed to track and visualize GitHub activity. Provides insights into commit history, repository statistics, and contribution patterns through interactive charts and graphs. Built with .NET Core for the backend and Blazor for a seamless user experience.',
    image: pulsinggiImage,
    video: pulsinggitVideo,
    link: 'https://pulsinggit.netlify.app/login',
    technologies: ['.NET Core', 'Blazor', 'REST API', 'Full-Stack', 'Data Tracking'],
    linkLabel: 'Visit Project',
  },
  {
    id: 'kamk2d',
    category: 'game',
    title: 'Kamk2D Game Engine',
    tagline: 'Custom 2D engine with OpenGL & SFML',
    description:
      'A custom 2D game engine built from scratch that renders tilemaps and supports common game mechanics. Features OpenGL and SFML integration for efficient rendering.',
    image: project1Image,
    video: project1Video,
    link: 'https://github.com/Carlonjumala/2D-videogame-engine',
    technologies: ['C++', 'OpenGL', 'SFML', '2D Graphics', 'CMAKE', 'Game Engine Development'],
    linkLabel: 'View on GitHub',
  },
  {
    id: 'varattuvalo',
    category: 'web',
    title: 'Varattuvalo Games Website',
    tagline: 'Full studio website — design to deployment',
    description:
      'Complete website solution for indie game studio Varattuvalo Games. Responsible for design, development, and hosting. Built with modern web technologies for optimal performance and user experience.',
    image: project8Image,
    video: project8Video,
    link: 'https://varattuvalogames.com/',
    technologies: ['React', 'Tailwind CSS', 'Web Hosting', 'UI/UX Design'],
    linkLabel: 'Visit Project',
  },
  {
    id: 'drinking',
    category: 'mobile',
    title: 'Social Drinking Game App',
    tagline: 'Cross-platform mobile social gaming',
    description:
      'Cross-platform mobile application designed for social gaming experiences. Built with React Native for iOS and Android deployment, featuring engaging game mechanics and social interactions.',
    image: project9Image,
    video: project9Video,
    link: '',
    technologies: ['React Native', 'Mobile Development', 'Ignite Framework'],
    linkLabel: '',
  },
  {
    id: 'thalassophobia',
    category: 'game',
    title: 'Thalassophobia',
    tagline: 'Underwater horror — Unreal Engine 5',
    description:
      'Immersive underwater horror experience developed with Unreal Engine 5. Serving as Audio Lead, Audio Programmer, and Gameplay Programmer, contributing to atmospheric sound design and core gameplay mechanics.',
    image: project3Image,
    video: project3Video,
    link: 'https://store.steampowered.com/app/2507690/Thalassophobia/',
    technologies: ['Unreal Engine 5', 'Game Development', 'Steam', 'C++'],
    linkLabel: 'View on Steam',
  },
  {
    id: 'fear',
    category: 'game',
    title: 'Fear of Neighbours',
    tagline: 'VR horror — Unity & SteamVR',
    description:
      'Virtual Reality horror game developed in Unity as part of a 5-person development team. Focused on gameplay programming to create immersive and terrifying VR experiences with intuitive controls.',
    image: project4Image,
    video: project4Video,
    link: 'https://store.steampowered.com/app/2333040/Fear_of_Neighbours/',
    technologies: ['Unity', 'VR Development', 'C# Programming', 'Steam VR'],
    linkLabel: 'View on Steam',
  },
  {
    id: 'hitster',
    category: 'web',
    title: 'NotHitster Music Game',
    tagline: 'Digital Hitster board game remake',
    description:
      'Digital recreation of the popular Hitster board game using modern web technologies. Features music integration, game logic, and multiplayer functionality for enhanced social gaming experiences.',
    image: project10Image,
    video: project7Video,
    link: 'https://mellifluous-entremet-e5712d.netlify.app/',
    technologies: ['React', 'Vite', 'Music API', 'Game Logic'],
    linkLabel: 'Visit Project',
  },
  {
    id: 'qt',
    category: 'desktop',
    title: 'Qt Desktop Applications',
    tagline: 'Calculator, calendar, real-time chat',
    description:
      'Collection of desktop applications built with Qt framework, including a scientific calculator, calendar with analog clock, and real-time chat application demonstrating cross-platform development skills.',
    image: project7Image,
    video: null,
    link: 'https://github.com/Carlonjumala/QtProjects',
    technologies: ['Qt Framework', 'C++', 'Desktop Development', 'Cross-platform'],
    linkLabel: 'View on GitHub',
  },
];

// ─── Scroll animation hook ────────────────────────────────────────────────────

const useScrollAnimation = (threshold = 0.1) => {
  const ref = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold, rootMargin: '0px 0px -100px 0px' }
    );
    const el = ref.current;
    if (el) observer.observe(el);
    return () => { if (el) observer.unobserve(el); };
  }, [threshold]);

  return [ref, isVisible];
};

// ─── Project Detail Panel ────────────────────────────────────────────────────

const ProjectDetail = ({ project, onClose }) => {
  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onClose]);

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem',
        background: 'rgba(0,0,0,0.75)',
        backdropFilter: 'blur(6px)',
        animation: 'fadeIn 0.2s ease',
      }}
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: 'var(--background-secondary, #1a1a2e)',
          border: '1px solid var(--border-color)',
          borderRadius: 'var(--radius-lg, 16px)',
          maxWidth: '760px',
          width: '100%',
          maxHeight: '90vh',
          overflowY: 'auto',
          position: 'relative',
          animation: 'slideUp 0.25s ease',
        }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          style={{
            position: 'sticky',
            top: '1rem',
            float: 'right',
            marginRight: '1rem',
            zIndex: 10,
            background: 'var(--background-hover)',
            width: '36px',
            height: '36px',
            cursor: 'pointer',
            color: 'var(--text-primary)',
            fontSize: '1rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.2s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'var(--primary-color)';
            e.currentTarget.style.borderColor = 'var(--primary-color)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'var(--background-hover)';
            e.currentTarget.style.borderColor = 'var(--border-color)';
          }}
          aria-label="Close"
        >
          Close
        </button>

        {/* Media */}
        <div style={{ borderRadius: 'var(--radius-lg, 16px) var(--radius-lg, 16px) 0 0', overflow: 'hidden' }}>
          {project.video ? (
            <video
              key={project.video}
              controls
              autoPlay
              muted
              preload="metadata"
              style={{ width: '100%', display: 'block', maxHeight: '380px', objectFit: 'cover' }}
            >
              <source src={project.video} type="video/mp4" />
            </video>
          ) : (
            <img
              src={project.image}
              alt={project.title}
              style={{ width: '100%', maxHeight: '380px', objectFit: 'cover', display: 'block' }}
            />
          )}
        </div>

        {/* Content */}
        <div style={{ padding: '1.75rem 2rem 2rem' }}>
          <h3 style={{ margin: '0 0 0.25rem', fontSize: '1.5rem', color: 'var(--text-primary)' }}>
            {project.title}
          </h3>
          <p style={{ margin: '0 0 1rem', color: 'var(--primary-color)', fontSize: '0.9rem' }}>
            {project.tagline}
          </p>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, margin: '0 0 1.25rem' }}>
            {project.description}
          </p>

          {/* Tech tags */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.5rem' }}>
            {project.technologies.map((tech) => (
              <span
                key={tech}
                style={{
                  background: 'var(--background-hover)',
                  color: 'var(--text-secondary)',
                  padding: '0.3rem 0.7rem',
                  borderRadius: 'var(--radius-sm)',
                  fontSize: '0.78rem',
                  border: '1px solid var(--border-color)',
                  transition: 'all 0.2s',
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

          {/* Link */}
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
              style={{ display: 'inline-block' }}
            >
              {project.linkLabel || 'Visit Project'} →
            </a>
          )}
        </div>
      </div>

      <style>{`
        @keyframes fadeIn  { from { opacity: 0 } to { opacity: 1 } }
        @keyframes slideUp { from { transform: translateY(24px); opacity: 0 } to { transform: translateY(0); opacity: 1 } }
      `}</style>
    </div>
  );
};

// ─── Project Card ─────────────────────────────────────────────────────────────

const ProjectCard = ({ project, onClick, index }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <button
      onClick={() => onClick(project)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: 'var(--background-secondary, #1a1a2e)',
        border: `1px solid ${hovered ? 'var(--primary-color)' : 'var(--border-color)'}`,
        borderRadius: 'var(--radius-md, 12px)',
        cursor: 'pointer',
        padding: 0,
        textAlign: 'left',
        overflow: 'hidden',
        transition: 'all 0.25s ease',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
        boxShadow: hovered ? '0 12px 32px rgba(0,0,0,0.35)' : '0 2px 8px rgba(0,0,0,0.15)',
        animation: `cardIn 0.35s ease ${index * 0.06}s both`,
      }}
      aria-label={`View ${project.title}`}
    >
      {/* Thumbnail */}
      <div style={{ position: 'relative', overflow: 'hidden', height: '160px' }}>
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
            transition: 'transform 0.4s ease',
            transform: hovered ? 'scale(1.06)' : 'scale(1)',
          }}
        />
        {/* Overlay on hover */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 60%)',
          opacity: hovered ? 1 : 0,
          transition: 'opacity 0.25s',
          display: 'flex',
          alignItems: 'flex-end',
          padding: '0.75rem',
        }}>
          <span style={{
            color: '#fff',
            fontSize: '0.78rem',
            background: 'var(--primary-color)',
            padding: '0.25rem 0.65rem',
            borderRadius: '20px',
          }}>
            {project.video ? '▶ Watch demo' : '→ View details'}
          </span>
        </div>
      </div>

      {/* Info */}
      <div style={{ padding: '1rem 1.1rem 1.1rem' }}>
        <h4 style={{
          margin: '0 0 0.2rem',
          fontSize: '1rem',
          color: 'var(--text-primary)',
          fontWeight: 600,
        }}>
          {project.title}
        </h4>
        <p style={{
          margin: '0 0 0.75rem',
          fontSize: '0.8rem',
          color: 'var(--text-muted)',
          lineHeight: 1.4,
        }}>
          {project.tagline}
        </p>

        {/* Top 2 tech tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.3rem' }}>
          {project.technologies.slice(0, 3).map((tech) => (
            <span key={tech} style={{
              fontSize: '0.7rem',
              padding: '0.2rem 0.5rem',
              borderRadius: 'var(--radius-sm)',
              border: '1px solid var(--border-color)',
              color: 'var(--text-muted)',
            }}>
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span style={{
              fontSize: '0.7rem',
              padding: '0.2rem 0.5rem',
              color: 'var(--text-muted)',
            }}>
              +{project.technologies.length - 3}
            </span>
          )}
        </div>
      </div>

      <style>{`
        @keyframes cardIn {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </button>
  );
};

// ─── Main Component ──────────────────────────────────────────────────────────

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [sectionRef, sectionVisible] = useScrollAnimation(0.1);

  const filtered = activeCategory === 'all'
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  // Count per category
  const counts = categories.reduce((acc, cat) => {
    acc[cat.id] = cat.id === 'all'
      ? projects.length
      : projects.filter((p) => p.category === cat.id).length;
    return acc;
  }, {});

  return (
    <section id="projects">
      <div
        ref={sectionRef}
        className={`box ${sectionVisible ? 'animate-in' : ''}`}
      >
        <h2>Featured Projects</h2>

        {/* ── Category Tabs ── */}
        <div
          role="tablist"
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.5rem',
            justifyContent: 'center',
            marginBottom: '2rem',
          }}
        >
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveCategory(cat.id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  padding: '0.5rem 1.1rem',
                  borderRadius: '999px',
                  border: `1px solid ${isActive ? 'var(--primary-color)' : 'var(--border-color)'}`,
                  background: isActive ? 'var(--primary-color)' : 'transparent',
                  color: isActive ? '#fff' : 'var(--text-secondary)',
                  cursor: 'pointer',
                  fontSize: '0.85rem',
                  fontWeight: isActive ? 600 : 400,
                  transition: 'all 0.2s ease',
                  whiteSpace: 'nowrap',
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.borderColor = 'var(--primary-color)';
                    e.currentTarget.style.color = 'var(--text-primary)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.borderColor = 'var(--border-color)';
                    e.currentTarget.style.color = 'var(--text-secondary)';
                  }
                }}
              >
                <span>{cat.icon}</span>
                <span>{cat.label}</span>
                <span style={{
                  background: isActive ? 'rgba(255,255,255,0.25)' : 'var(--background-hover)',
                  padding: '0.05rem 0.45rem',
                  borderRadius: '999px',
                  fontSize: '0.72rem',
                  minWidth: '20px',
                  textAlign: 'center',
                }}>
                  {counts[cat.id]}
                </span>
              </button>
            );
          })}
        </div>

        {/* ── Project Grid ── */}
        <div
          key={activeCategory}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
            gap: '1.25rem',
          }}
        >
          {filtered.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onClick={setSelectedProject}
            />
          ))}
        </div>

        {/* ── Empty state ── */}
        {filtered.length === 0 && (
          <p style={{ textAlign: 'center', color: 'var(--text-muted)', padding: '2rem' }}>
            No projects in this category yet.
          </p>
        )}

        <p style={{
          textAlign: 'center',
          color: 'var(--text-muted)',
          fontSize: '0.82rem',
          marginTop: '1.75rem',
        }}>
          Click any card to view details & demo video
        </p>
      </div>

      {/* ── Detail modal ── */}
      {selectedProject && (
        <ProjectDetail
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};

export default Projects;