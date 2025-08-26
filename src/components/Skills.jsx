import React, { useState, useEffect, useRef } from 'react';
import './Skills.css';
import cert1 from '../assets/cert1.png';
import cert2 from '../assets/cert2.png';
import cert3 from '../assets/cert3.png';
import cert4 from '../assets/cert4.png';
import cert5 from '../assets/cert5.png';

const Skills = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const skillsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animation logic removed since skills section is gone
          }
        });
      },
      { threshold: 0.3 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  const certificates = [
    {
      id: 1,
      name: "Front End Development",
      issuer: "Free Code Camp",
      date: "2025",
      image: cert1,
      description: "Earned a certification in Front-End Development from freeCodeCamp, demonstrating skills in building responsive websites and applications using HTML, CSS, JavaScript, and modern frameworks.",
      link: "https://www.freecodecamp.org/certification/godwynaquino/front-end-development-libraries"
    },
    {
      id: 2,
      name: "Use Canva to Create Desktop and Mobile-Friendly Web Pages",
      issuer: "Coursera",
      date: "2025",
      image: cert2,
      description: "Earned a certificate in Web Design from Coursera, demonstrating skills in creating responsive and visually appealing web pages using Canva.",
      link: "https://coursera.org/share/81984957ebbe7d0d639464460b2ab697"
    },
    {
      id: 3,
      name: "Oracle Cloud Data Management 2023 Certified Foundation Associate",
      issuer: "Oracle",
      date: "2023",
      image: cert3,
      description: "Earned a certification in Oracle Cloud Data Management from Oracle, demonstrating skills in data management, data warehousing, and data integration.",
      link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=A0444E9FF5888CF5504ECADD4B5BB22FF781A2D9E7002789FA217F0F960EB7F6"
    },
    {
      id: 4,
      name: "Build a Full Website using WordPress",
      issuer: "Coursera",
      date: "2025",
      image: cert4,
      description: "Earned a certificate in WordPress from Coursera, demonstrating skills in building and managing websites using WordPress.",
      link: "https://coursera.org/share/0266294a726be12771aa13261118f7e9"
    },
    {
      id: 5,
      name: "Ethical Hacking",
      issuer: "Cisco",
      date: "2024",
      image: cert5,
      description: "Earned a certification in Ethical Hacking from Cisco, demonstrating skills in identifying and mitigating security vulnerabilities in computer systems.",
      link: "https://www.credly.com/badges/ab563187-0a48-4d9b-bd2b-ce3d27932a96"
    }
  ];

  const openCertificateModal = (certificate) => {
    setSelectedCertificate(certificate);
  };

  const closeCertificateModal = () => {
    setSelectedCertificate(null);
  };

  return (
    <section id="skills" className="skills" ref={skillsRef}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Certificates and Achievements</h2>
          <p className="section-subtitle">My Certificates and Achievements</p>
        </div>

        {/* Certificates Section */}
        <div className="certificates-section">
          <div className="section-subheader">
          </div>
          
          <div className="certificates-grid">
            {certificates.map((certificate) => (
              <div key={certificate.id} className="certificate-card">
                <div className="certificate-image-container">
                  <img 
                    src={certificate.image} 
                    alt={certificate.name}
                    className="certificate-image"
                  />
                  <div className="certificate-overlay">
                    <button 
                      className="view-certificate-btn"
                      onClick={() => openCertificateModal(certificate)}
                    >
                      View Certificate
                    </button>
                  </div>
                </div>
                <div className="certificate-content">
                  <h4 className="certificate-name">{certificate.name}</h4>
                  <p className="certificate-issuer">{certificate.issuer}</p>
                  <p className="certificate-date">{certificate.date}</p>
                  <p className="certificate-description">{certificate.description}</p>
                  <div className="certificate-actions">
                    <button 
                      className="btn btn-primary"
                      onClick={() => openCertificateModal(certificate)}
                    >
                      View Details
                    </button>
                    <a 
                      href={certificate.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline"
                    >
                      Verify Online
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Certificate Modal */}
      {selectedCertificate && (
        <div className="certificate-modal" onClick={closeCertificateModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={closeCertificateModal}>×</button>
            
            <div className="modal-header">
              <h3>{selectedCertificate.name}</h3>
            </div>
            
            <div className="modal-body">
              <div className="modal-image-container">
                <img 
                  src={selectedCertificate.image} 
                  alt={selectedCertificate.name} 
                  className="modal-full-image"
                />
              </div>
              
              <div className="modal-details">
                <div className="detail-item">
                  <strong>Issuer:</strong> {selectedCertificate.issuer}
                </div>
                <div className="detail-item">
                  <strong>Date:</strong> {selectedCertificate.date}
                </div>
                <div className="detail-item">
                  <strong>Description:</strong> {selectedCertificate.description}
                </div>
              </div>

              <div className="modal-actions">
                <a 
                  href={selectedCertificate.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Verify Certificate Online
                </a>
                <button 
                  className="btn btn-outline"
                  onClick={closeCertificateModal}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Skills;
