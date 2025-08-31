import React from 'react';
import cert1Image from '../assets/cert1.jpg'; 
import cert2Image from '../assets/cert2.jpg';
import cert3Image from '../assets/cert3.jpg';

const useScrollAnimation = (threshold = 0.1) => {
  const ref = React.useRef();
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
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

const certifications = [
  { 
    title: 'Introduction to Cybersecurity', 
    image: cert1Image,
    link: '#' // Add actual link when available
  },
  {
    title: 'Elements of Cloud and Cybersecurity', 
    image: cert2Image, 
    link: 'https://openbadgefactory.com/v1/assertion/d9f98ef8c866b98de0890a831de24aac3a227764'
  },
  {
    title: 'Microsoft Certified: Azure Fundamentals', 
    image: cert3Image, 
    link: 'https://openbadgefactory.com/v1/assertion/a6dd8d097c508d5e7c7c225c0eef95f0a082a92a'
  },
];

const Certifications = () => {
  const [certRef, certVisible] = useScrollAnimation(0.2);

  return (
    <section id="certifications">
      <div 
        ref={certRef}
        className={`box ${certVisible ? 'animate-in' : ''}`}
      >
        <h2>My Certifications</h2>
        <div className="certifications-container">
          {certifications.map((cert, index) => (
            <div key={index} className="certification-card">
              <a 
                href={cert.link} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label={`View ${cert.title} certification`}
              >
                <img 
                  src={cert.image} 
                  alt={cert.title}
                  loading="lazy"
                />
                <h3>{cert.title}</h3>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;