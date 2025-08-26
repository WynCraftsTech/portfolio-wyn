import React, { useState } from 'react';
import './About.css';
import resumeFile from '../assets/Job_Resume_Aquino.pdf';

const About = () => {
  const [activeTab, setActiveTab] = useState('about');

  const handleDownloadResume = () => {
    // Create a link to download the PDF
    const link = document.createElement('a');
    link.href = resumeFile;
    link.download = 'Job_Resume_Aquino.pdf';
    link.target = '_blank';
    
    // Add error handling
    link.onerror = () => {
      alert('Resume file not found. Please make sure Job_Resume_Aquino.pdf is in the assets folder.');
    };
    
    // Trigger download
    document.body.appendChild(link);
    link.click(); 
    document.body.removeChild(link);
  };

  const experienceData = [
    {
      title: "Mobile Educational Learning Application",
      description: "Developed a Mobile Educational Learning Application with AI-assisted Features for an Integrated School using React Native, designed to enhance learning through interactive lessons and user-friendly navigation.",
      category: "Mobile Development",
      technologies: ["React Native", "AI Features", "Interactive Learning"]
    },
    {
      title: "Point-of-Sale (POS) System Case Study",
      description: "Conducted A Case Study on a Proposed Point-of-Sale (POS) System for Small Local Businesses, focusing on improving sales tracking, inventory management, and overall business efficiency.",
      category: "System Analysis",
      technologies: ["System Design", "Business Analysis", "Process Optimization"]
    },
    {
      title: "Food Recipe Website",
      description: "Developed a Food Recipe Website using HTML, CSS, and JavaScript, featuring easy navigation and interactive functions.",
      category: "Web Development",
      technologies: ["HTML", "CSS", "JavaScript"]
    },
    {
      title: "Posters and Brand Design",
      description: "Designed Posters and Brand Design using (Adobe Photoshop, Blender, Photopea, Canva) and other related tools.",
      category: "Graphic Design",
      technologies: ["Adobe Photoshop", "Blender", "Photopea", "Canva"]
    },
    {
      title: "UI/UX and Graphic Design",
      description: "Knowledgeable in UI/UX and Graphic Design, creating user-friendly interfaces and engaging visuals to improve system usability and experience.",
      category: "UI/UX Design",
      technologies: ["User Research", "Wireframing", "Prototyping"]
    },
    {
      title: "Team-Based Projects",
      description: "Collaborated in Team-Based Projects by contributing system planning, documentation, and testing, ensuring functional and user-friendly solutions.",
      category: "Team Collaboration",
      technologies: ["Project Planning", "Documentation", "Testing"]
    }
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">Get to know me better</p>
        </div>

        <div className="about-content">
          <div className="about-text">
            <div className="tab-navigation">
              <button 
                className={`tab-btn ${activeTab === 'about' ? 'active' : ''}`}
                onClick={() => setActiveTab('about')}
              >
                About
              </button>
              <button 
                className={`tab-btn ${activeTab === 'experience' ? 'active' : ''}`}
                onClick={() => setActiveTab('experience')}
              >
                Experience
              </button>
              <button 
                className={`tab-btn ${activeTab === 'education' ? 'active' : ''}`}
                onClick={() => setActiveTab('education')}
              >
                Education
              </button>
            </div>

            <div className="tab-content">
              {activeTab === 'about' && (
                <div className="tab-panel">
                  <p>
                  Develop IT solutions by designing user-friendly interfaces and engaging digital experiences. I 
                  look forward to applying knowledge in UI/UX, graphic design, and front-end development while 
                  continuously learning new technologies to strengthen skills. 
                  </p>
                  <p>
                  Committed to contributing to the 
                  organization's success by building web and mobile applications, developing prototypes, and 
                  creating innovative digital solutions that improve business processes.
                  </p>
                  <div className="personal-info">
                    <div className="info-item">
                      <span className="info-label">Name:</span>
                      <span className="info-value">Godwyn Aquino</span>
                    </div>
                    <div className="info-item">
                      <span className="info-label">Email:</span>
                      <span className="info-value">aquinogodwyn@gmail.com</span>
                    </div>
                    <div className="info-item">
                      <span className="info-label">Location:</span>
                      <span className="info-value">Rizal, Philippines</span>
                    </div>
                    <div className="info-item">
                      <span className="info-label">Phone Number:</span>
                      <span className="info-value">+63 9475437388</span>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'experience' && (
                <div className="tab-panel">
                  <div className="experience-header">
                    <h3 className="experience-title">System Development Experience</h3>
                    
                  </div>
                  
                  <div className="experience-grid">
                    {experienceData.map((experience, index) => (
                      <div key={index} className="experience-card">
                        <div className="experience-card-header">
                          <div className="experience-meta">
                            <span className="experience-category">{experience.category}</span>
                          </div>
                        </div>
                        
                        <div className="experience-card-content">
                          <h4 className="experience-card-title">{experience.title}</h4>
                          <p className="experience-card-description">{experience.description}</p>
                          
                          <div className="experience-technologies">
                            {experience.technologies.map((tech, techIndex) => (
                              <span key={techIndex} className="tech-tag">{tech}</span>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'education' && (
                <div className="tab-panel">
                  <div className="education-item">
                    <h4>Bachelor of Science in Information Technology</h4>
                    <p className="institution">New Era University</p>
                    <p className="period">2022 - Present</p>
                    <p>President's List (Last 2 Semesters GWA 1.20/1.50)</p>
                  </div>
                </div>
              )}
            </div>

            <div className="about-actions">
              <button className="btn btn-primary" onClick={handleDownloadResume}>
                Download Resume
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
