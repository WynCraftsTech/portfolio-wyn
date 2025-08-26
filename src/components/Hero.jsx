import React from 'react';
import './Hero.css';
import profileImage from '../assets/Aquino,Godwyn A..jpg';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Hi, I'm <span className="highlight">Godwyn Aquino</span>
            </h1>
            <h2 className="hero-subtitle">
              I'm a <span className="typing-text">UI/UX Designer & Graphic Designer</span>
            </h2>
            <p className="hero-description">
              Passionate about creating intuitive, beautiful, and user-centered digital experiences. 
              I transform ideas into compelling designs that users love to interact with.
            </p>
            
            <div className="hero-buttons">
              <button 
                className="btn btn-primary"
                onClick={() => scrollToSection('projects')}
              >
                View My Work
              </button>
              <button 
                className="btn btn-secondary"
                onClick={() => scrollToSection('contact')}
              >
                Get In Touch
              </button>
            </div>
          </div>

          <div className="hero-image">
            <div className="profile-placeholder">
              <div className="profile-circle">
                <img 
                  src={profileImage} 
                  alt="Godwyn Aquino" 
                  className="profile-image"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="hero-social">
          <a href="https://www.linkedin.com/in/godwynaquino/" target="_blank" rel="noopener noreferrer" className="social-link">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://github.com/WynCraftsTech" target="_blank" rel="noopener noreferrer" className="social-link">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://www.instagram.com/godwyyynnnnnn/" target="_blank" rel="noopener noreferrer" className="social-link">
            <i className="fab fa-instagram"></i>
          </a>
        </div>

        <div className="scroll-indicator">
          <div className="scroll-arrow" onClick={() => scrollToSection('about')}>
            <span>↓</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
