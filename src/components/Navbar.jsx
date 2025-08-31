import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
      const offset = 80; // Account for fixed navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className={isScrolled ? 'scrolled' : ''}>
      <ul>
        <li>
          <a 
            href="#about-me" 
            onClick={(e) => handleNavClick(e, '#about-me')}
          >
            About Me
          </a>
        </li>
        <li>
          <a 
            href="#projects" 
            onClick={(e) => handleNavClick(e, '#projects')}
          >
            Projects
          </a>
        </li>
        <li>
          <a 
            href="#certifications" 
            onClick={(e) => handleNavClick(e, '#certifications')}
          >
            Certifications
          </a>
        </li>
        <li>
          <a 
            href="#contact-me" 
            onClick={(e) => handleNavClick(e, '#contact-me')}
          >
            Contact Me
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;