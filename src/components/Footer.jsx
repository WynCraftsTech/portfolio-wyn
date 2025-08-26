import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const socialLinks = [
    { name: 'LinkedIn', icon: 'fab fa-linkedin', url: 'https://www.linkedin.com/in/godwynaquino/' },
    { name: 'GitHub', icon: 'fab fa-github', url: 'https://github.com/WynCraftsTech' },
    { name: 'Instagram', icon: 'fab fa-instagram', url: 'https://www.instagram.com/godwyyynnnnnn/' }
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-logo">Portfolio</h3>
                         <p>
               A passionate UI/UX designer creating beautiful and functional digital experiences. 
               Let's design something amazing together!
             </p>
            <div className="footer-social">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  title={social.name}
                >
                  <i className={social.icon}></i>
                </a>
              ))}
            </div>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><button onClick={() => scrollToSection('about')}>About</button></li>
              <li><button onClick={() => scrollToSection('skills')}>Skills</button></li>
              <li><button onClick={() => scrollToSection('projects')}>Projects</button></li>
              <li><button onClick={() => scrollToSection('contact')}>Contact</button></li>
            </ul>
          </div>

                     <div className="footer-section">
             <h4>Services</h4>
             <ul className="footer-links">
               <li>UI/UX Design</li>
               <li>Web Design</li>
               <li>Mobile App Design</li>
               <li>Brand Identity Design</li>
             </ul>
           </div>

                     <div className="footer-section">
             <h4>Contact Info</h4>
             <div className="contact-info">
               <p>📧 aquinogodwyn@gmail.com</p>
               <p>📱 +63 9475437388</p>
               <p>📍 Rizal, Philippines</p>
             </div>
           </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
                         <p>&copy; {currentYear} Godwyn Aquino. All rights reserved.</p>
            <div className="footer-bottom-links">
              <button onClick={() => scrollToSection('hero')}>Back to Top</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
