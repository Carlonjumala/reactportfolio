import React from 'react';
import cert1Image from '../assets/cert1.jpg'; // Import the image

const certifications = [
  { title: 'Introduction to Cybersecurity', image: cert1Image }, // Use the imported image
];

const Certifications = () => {
  return (
    <section id="certifications">
      <h2>My Certifications</h2>
      <div className="certifications-container">
        {certifications.map((cert, index) => (
          <div key={index} className="certification-card">
            <a href={cert.link} target="_blank" rel="noopener noreferrer">
              <img src={cert.image} alt={cert.title} />
              <h3>{cert.title}</h3>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
