import React from 'react';

const ContactMe = () => {
  return (
    <section id="contact-me">
      <div className="box">
        <h2>Contact Me</h2>
        <p>I'm looking forward to hearing from you about possible opportunities!</p>
        <button onClick={() => window.location.href = 'mailto:leevi.nokkonen@gmail.com'}>
          Send Me an Email
        </button>
        
        <div className="contact-details">
          <p><strong>Email:</strong> Leevi.nokkonen@gmail.com</p>
          <p><strong>Location:</strong> Finland, Kokkola</p>
          <p><strong>Connect with me:</strong></p>
          <div className="contact-social-links">
            <a href="https://www.linkedin.com/in/leevi-nokkonen-0909b5206" target="_blank" rel="noopener noreferrer" className="social-button linkedin">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://github.com/Carlonjumala" target="_blank" rel="noopener noreferrer" className="social-button github">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
