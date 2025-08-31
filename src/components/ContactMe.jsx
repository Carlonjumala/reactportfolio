import React, { useState } from 'react';

const useScrollAnimation = (threshold = 0.1) => {
  const ref = React.useRef();
  const [isVisible, setIsVisible] = useState(false);

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

const ContactMe = () => {
  const [emailCopied, setEmailCopied] = useState(false);
  const [contactRef, contactVisible] = useScrollAnimation(0.2);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText('leevi.nokkonen@gmail.com');
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000);
    } catch (err) {
      // Fallback for older browsers
      window.location.href = 'mailto:leevi.nokkonen@gmail.com';
    }
  };

  return (
    <section id="contact-me">
      <div 
        ref={contactRef}
        className={`box ${contactVisible ? 'animate-in' : ''}`}
      >
        <h2>Let's Connect</h2>
        <p>I'm looking forward to hearing from you about possible opportunities!</p>
        
        <button 
          onClick={() => window.location.href = 'mailto:leevi.nokkonen@gmail.com'}
          aria-label="Send email to Leevi Nokkonen"
        >
          Send Me an Email
        </button>
        
        <div className="contact-details">
          <p>
            <strong>Email:</strong> 
            <span 
              onClick={copyEmail}
              style={{ 
                cursor: 'pointer',
                color: 'var(--primary-color)',
                marginLeft: '8px'
              }}
              title="Click to copy email"
            >
              leevi.nokkonen@gmail.com
              {emailCopied && <span style={{ marginLeft: '8px', fontSize: '0.8em' }}>✓ Copied!</span>}
            </span>
          </p>
          <p><strong>Location:</strong> Kokkola, Finland</p>
          <p><strong>Connect with me:</strong></p>
          
          <div className="contact-social-links">
            <a 
              href="https://www.linkedin.com/in/leevi-nokkonen-0909b5206" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-button linkedin"
              aria-label="Visit my LinkedIn profile"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a 
              href="https://github.com/Carlonjumala" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-button github"
              aria-label="Visit my GitHub profile"
            >
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;