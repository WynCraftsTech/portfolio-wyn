import React, { useState } from 'react';
import './Projects.css';
import draftsImage from '../assets/DRAFTS.jpg';
import graphicsCardImage from '../assets/grapics_card_AQUINO.jpg';
import speakerActivityImage from '../assets/aquino_speaker_activity.jpg';
import speakerProjectImage from '../assets/speakerProject.jpg';
import headphoneImage from '../assets/headPhone_AQUINO.jpg';
import salesDataImage from '../assets/sales_data.png';
import travis1 from '../assets/travis1.png';
import p1Image from '../assets/p1.png';
import p2Image from '../assets/p2.png';
import p3Image from '../assets/p3.png';
import p4Image from '../assets/p4.png';
import p5Image from '../assets/p5.png';
import ineuit1 from '../assets/ineuit1.png';
import ineuit2 from '../assets/ineuit2.png';
import ineuit3 from '../assets/ineuit3.png';
import ineuit4 from '../assets/ineuit4.png';
import ineuit5 from '../assets/ineuit5.png';
import ineuit6 from '../assets/ineuit6.png';
import ineuit7 from '../assets/ineuit7.png';
import ineuit8 from '../assets/ineuit8.png';
import ineuit9 from '../assets/ineuit9.png';
import ineuit10 from '../assets/ineuit10.png';
import ineuit11 from '../assets/ineuit11.png';
import shoes1 from '../assets/shoes1.png';
import shoes2 from '../assets/shoes2.png';
import shoes3 from '../assets/shoes3.png';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentGraphicIndex, setCurrentGraphicIndex] = useState(0);
  const [currentFoodIndex, setCurrentFoodIndex] = useState(0);
  const [currentIneuitIndex, setCurrentIneuitIndex] = useState(0);
  const [currentShoesIndex, setCurrentShoesIndex] = useState(0);

  const graphicDesigns = [
    {
      title: 'Design Drafts Collection',
      description: 'A comprehensive collection of design drafts showcasing various creative concepts and iterations.',
      image: draftsImage,
      technologies: ['Adobe Photoshop', 'Adobe Illustrator', 'Design Process']
    },
    {
      title: 'Graphics Card Design',
      description: 'Modern graphics card design featuring sleek aesthetics and innovative visual elements. ',
      image: graphicsCardImage,
      technologies: ['Adobe Photoshop', 'Product Design', 'Visual Branding']
    },
    {
      title: 'Speaker Project Design',
      description: 'Comprehensive speaker project design including product visualization',
      image: speakerProjectImage,
      technologies: ['Adobe Photoshop', 'Marketing Design', 'Brand Identity']
    },
    {
      title: 'Headphone Design',
      description: 'Premium headphone design project featuring modern aesthetics, ergonomic considerations.',
      image: headphoneImage,
      technologies: ['Adobe Creative Suite', 'Product Aesthetics', 'Technical Illustration']
    }
  ];

  const foodWebsiteDesigns = [
    {
      title: 'Food Website Design 1',
      description: 'Modern food website design with intuitive navigation and beautiful food photography.',
      image: p1Image,
      technologies: ['Figma', 'Web Design', 'UI/UX']
    },
    {
      title: 'Food Website Design 2',
      description: 'Responsive food website featuring clean layouts and user-friendly interfaces.',
      image: p2Image,
      technologies: ['Figma', 'Responsive Design', 'User Experience']
    },
    {
      title: 'Food Website Design 3',
      description: 'Creative food website design showcasing innovative design concepts and modern aesthetics.',
      image: p3Image,
      technologies: ['Figma', 'Creative Design', 'Modern UI']
    },
    {
      title: 'Food Website Design 4',
      description: 'Professional food website design with emphasis on visual appeal and functionality.',
      image: p4Image,
      technologies: ['Figma', 'Professional Design', 'Visual Appeal']
    },
    {
      title: 'Food Website Design 5',
      description: 'Comprehensive food website design demonstrating full design process and implementation.',
      image: p5Image,
      technologies: ['Figma', 'Full Design Process', 'Implementation']
    }
  ];

  const ineuitDesigns = [
    {
      title: 'Ineuit Design 1',
      description: 'Innovative design concept showcasing modern aesthetics and creative thinking.',
      image: ineuit1,
      technologies: ['Design Thinking', 'Creative Process', 'Visual Innovation']
    },
    {
      title: 'Ineuit Design 2',
      description: 'Sophisticated design approach with emphasis on user experience and visual appeal.',
      image: ineuit2,
      technologies: ['User Experience', 'Visual Design', 'Interface Design']
    },
    {
      title: 'Ineuit Design 3',
      description: 'Creative design solution demonstrating innovative problem-solving approaches.',
      image: ineuit3,
      technologies: ['Problem Solving', 'Creative Design', 'Innovation']
    },
    {
      title: 'Ineuit Design 4',
      description: 'Modern design concept with focus on contemporary trends and user engagement.',
      image: ineuit4,
      technologies: ['Modern Trends', 'User Engagement', 'Contemporary Design']
    },
    {
      title: 'Ineuit Design 5',
      description: 'Strategic design approach combining aesthetics with functional requirements.',
      image: ineuit5,
      technologies: ['Strategic Design', 'Functional Aesthetics', 'Design Strategy']
    },
    {
      title: 'Ineuit Design 6',
      description: 'Innovative visual concept showcasing creative design thinking and execution.',
      image: ineuit6,
      technologies: ['Visual Innovation', 'Creative Execution', 'Design Thinking']
    },
    {
      title: 'Ineuit Design 7',
      description: 'Sophisticated design solution with emphasis on user interaction and experience.',
      image: ineuit7,
      technologies: ['User Interaction', 'Experience Design', 'Sophisticated UI']
    },
    {
      title: 'Ineuit Design 8',
      description: 'Creative design approach demonstrating innovative visual communication.',
      image: ineuit8,
      technologies: ['Visual Communication', 'Creative Design', 'Innovation']
    },
    {
      title: 'Ineuit Design 9',
      description: 'Modern design concept with focus on contemporary aesthetics and functionality.',
      image: ineuit9,
      technologies: ['Contemporary Aesthetics', 'Functionality', 'Modern Design']
    },
    {
      title: 'Ineuit Design 10',
      description: 'Strategic design solution combining creativity with practical implementation.',
      image: ineuit10,
      technologies: ['Strategic Implementation', 'Creative Design', 'Practical Solutions']
    },
    {
      title: 'Ineuit Design 11',
      description: 'Comprehensive design approach showcasing full creative process and execution.',
      image: ineuit11,
      technologies: ['Creative Process', 'Design Execution', 'Comprehensive Design']
    }
  ];

  const shoesDesigns = [
    {
      title: 'Shoe Design 1',
      description: 'Modern athletic shoe design with innovative styling and comfort features.',
      image: shoes1,
      technologies: ['Product Design', '3D Modeling', 'Footwear Design']
    },
    {
      title: 'Shoe Design 2',
      description: 'Casual lifestyle shoe featuring contemporary aesthetics and premium materials.',
      image: shoes2,
      technologies: ['Lifestyle Design', 'Material Selection', 'Brand Identity']
    },
    {
      title: 'Shoe Design 3',
      description: 'Performance footwear design optimized for functionality and visual appeal.',
      image: shoes3,
      technologies: ['Performance Design', 'Ergonomics', 'Technical Innovation']
    }
  ];

  const projects = [
    {
      id: 1,
      title: 'Food Website Design',
      description: 'A comprehensive food website design project showcasing modern web design principles.',
      image: p1Image,
      category: 'web-design',
      technologies: ['Figma', 'Web Design', 'Responsive Design'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
      isFoodPortfolio: true
    },
    {
      id: 2,
      title: 'Power BI Sales Dashboard',
      description: 'Comprehensive sales data analysis and visualization project using Power BI.',
      image: salesDataImage,
      category: 'data-analysis',
      technologies: ['Power BI', 'Data Visualization', 'Sales Analytics'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      id: 3,
      title: 'Graphic Design Portfolio',
      description: 'A comprehensive collection of graphic design work including product designs, marketing materials.',
      image: graphicDesigns[0].image,
      category: 'graphic-design',
      technologies: ['Product Design','Brand Identity'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
      isGraphicPortfolio: true
    },
    {
      id: 4,
      title: 'Ineuit Design Collection',
      description: 'A comprehensive collection of innovative design concepts showcasing creative thinking, modern aesthetics, and strategic design approaches.',
      image: ineuitDesigns[0].image,
      category: 'ineuit-design',
      technologies: ['React Native', 'JavaScript', 'Ai Features'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
      isIneuitPortfolio: true
    },
    {
      id: 5,
      title: 'Shoe Design Collection',
      description: 'A collection of innovative shoe designs showcasing modern footwear aesthetics and functionality.',
      image: shoesDesigns[0].image,
      category: 'shoes-design',
      technologies: ['Product Design', '3D Modeling', 'Footwear Design'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
      isShoesPortfolio: true
    },
    {
      id: 6,
      title: 'Travis Scott x Nike',
      description: 'This project is a creative exploration inspired by the iconic Travis Scott x Nike collaboration.',
      image: travis1,
      category: 'event-design',
      technologies: ['Figma', 'Web Design', 'UI/UX'],
      featured: false
    }
  ];

  const filters = [
    { key: 'all', label: 'All Projects' },
    { key: 'web-design', label: 'Web Design' },
    { key: 'data-analysis', label: 'Data Analysis' },
    { key: 'graphic-design', label: 'Graphic Design' },
    { key: 'ineuit-design', label: 'Ineuit Design' },
    { key: 'shoes-design', label: 'Shoe Design' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const openProjectModal = (project) => {
    setSelectedProject(project);
    if (project.isGraphicPortfolio) {
      setCurrentGraphicIndex(0);
    }
    if (project.isFoodPortfolio) {
      setCurrentFoodIndex(0);
    }
    if (project.isIneuitPortfolio) {
      setCurrentIneuitIndex(0);
    }
    if (project.isShoesPortfolio) {
      setCurrentShoesIndex(0);
    }
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
  };

  const nextGraphicDesign = () => {
    setCurrentGraphicIndex((prevIndex) => 
      (prevIndex + 1) % graphicDesigns.length
    );
  };

  const previousGraphicDesign = () => {
    setCurrentGraphicIndex((prevIndex) => 
      prevIndex === 0 ? graphicDesigns.length - 1 : prevIndex - 1
    );
  };

  const nextFoodDesign = () => {
    setCurrentFoodIndex((prevIndex) => 
      (prevIndex + 1) % foodWebsiteDesigns.length
    );
  };

  const previousFoodDesign = () => {
    setCurrentFoodIndex((prevIndex) => 
      prevIndex === 0 ? foodWebsiteDesigns.length - 1 : prevIndex - 1
    );
  };

  const nextIneuitDesign = () => {
    setCurrentIneuitIndex((prevIndex) => 
      (prevIndex + 1) % ineuitDesigns.length
    );
  };

  const previousIneuitDesign = () => {
    setCurrentIneuitIndex((prevIndex) => 
      prevIndex === 0 ? ineuitDesigns.length - 1 : prevIndex - 1
    );
  };

  const nextShoesDesign = () => {
    setCurrentShoesIndex((prevIndex) => 
      (prevIndex + 1) % shoesDesigns.length
    );
  };

  const previousShoesDesign = () => {
    setCurrentShoesIndex((prevIndex) => 
      prevIndex === 0 ? shoesDesigns.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">My Design Work</h2>
          <p className="section-subtitle">Selected projects showcasing my design process</p>
        </div>

        <div className="projects-filters">
          {filters.map(filter => (
            <button
              key={filter.key}
              className={`filter-btn ${activeFilter === filter.key ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.key)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map(project => (
            <div key={project.id} className={`project-card ${project.featured ? 'featured' : ''}`}>
              <div className="project-image">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="project-img"
                />
                <div className="project-overlay">
                  <div className="project-overlay-content">
                    <h3>{project.title}</h3>
                    <p>{project.description.substring(0, 80)}...</p>
                    <button 
                      className="btn btn-primary"
                      onClick={() => openProjectModal(project)}
                    >
                      View Details
                    </button>
                  </div>
                </div>
                {project.featured && <span className="featured-badge">Featured</span>}
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">
                  {project.description.length > 100 
                    ? `${project.description.substring(0, 100)}...` 
                    : project.description
                  }
                </p>
                
                <div className="project-technologies">
                  {project.technologies.slice(0, 3).map(tech => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="tech-tag more">+{project.technologies.length - 3}</span>
                  )}
                </div>

                <div className="project-actions">
                  <button 
                    className="btn btn-outline"
                    onClick={() => openProjectModal(project)}
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="no-projects">
            <p>No projects found for this category.</p>
          </div>
        )}
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div className="project-modal" onClick={closeProjectModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={closeProjectModal}>×</button>
            
            <div className="modal-header">
              <h3>{selectedProject.title}</h3>
            </div>
            
            <div className="modal-body">
              {selectedProject.isGraphicPortfolio ? (
                <div className="graphic-portfolio-modal">
                  <div className="graphic-carousel">
                    <button 
                      className="carousel-btn carousel-btn-prev" 
                      onClick={previousGraphicDesign}
                      aria-label="Previous design"
                    >
                      ‹
                    </button>
                    
                    <div className="carousel-image-container">
                      <img 
                        src={graphicDesigns[currentGraphicIndex].image} 
                        alt={graphicDesigns[currentGraphicIndex].title} 
                        className="carousel-image"
                      />
                      <div className="carousel-info">
                        <h4>{graphicDesigns[currentGraphicIndex].title}</h4>
                        <p>{graphicDesigns[currentGraphicIndex].description}</p>
                      </div>
                    </div>
                    
                    <button 
                      className="carousel-btn carousel-btn-next" 
                      onClick={nextGraphicDesign}
                      aria-label="Next design"
                    >
                      ›
                    </button>
                  </div>
                  
                  <div className="carousel-indicators">
                    {graphicDesigns.map((_, index) => (
                      <button
                        key={index}
                        className={`indicator ${index === currentGraphicIndex ? 'active' : ''}`}
                        onClick={() => setCurrentGraphicIndex(index)}
                        aria-label={`Go to design ${index + 1}`}
                      />
                    ))}
                  </div>
                  
                  <div className="carousel-technologies">
                    <h4>Design Tools & Methods:</h4>
                    <div className="tech-tags">
                      {graphicDesigns[currentGraphicIndex].technologies.map(tech => (
                        <span key={tech} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ) : selectedProject.isFoodPortfolio ? (
                <div className="food-website-modal">
                  <div className="food-website-carousel">
                    <button 
                      className="carousel-btn carousel-btn-prev" 
                      onClick={previousFoodDesign}
                      aria-label="Previous food website design"
                    >
                      ‹
                    </button>
                    
                    <div className="carousel-image-container">
                      <img 
                        src={foodWebsiteDesigns[currentFoodIndex].image} 
                        alt={foodWebsiteDesigns[currentFoodIndex].title} 
                        className="carousel-image"
                      />
                      <div className="carousel-info">
                        <h4>{foodWebsiteDesigns[currentFoodIndex].title}</h4>
                        <p>{foodWebsiteDesigns[currentFoodIndex].description}</p>
                      </div>
                    </div>
                    
                    <button 
                      className="carousel-btn carousel-btn-next" 
                      onClick={nextFoodDesign}
                      aria-label="Next food website design"
                    >
                      ›
                    </button>
                  </div>
                  
                  <div className="carousel-indicators">
                    {foodWebsiteDesigns.map((_, index) => (
                      <button
                        key={index}
                        className={`indicator ${index === currentFoodIndex ? 'active' : ''}`}
                        onClick={() => setCurrentFoodIndex(index)}
                        aria-label={`Go to food website design ${index + 1}`}
                      />
                    ))}
                  </div>
                  
                  <div className="carousel-technologies">
                    <h4>Design Tools & Methods:</h4>
                    <div className="tech-tags">
                      {foodWebsiteDesigns[currentFoodIndex].technologies.map(tech => (
                        <span key={tech} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ) : selectedProject.isIneuitPortfolio ? (
                <div className="ineuit-design-modal">
                  <div className="ineuit-design-carousel">
                    <button 
                      className="carousel-btn carousel-btn-prev" 
                      onClick={previousIneuitDesign}
                      aria-label="Previous ineuit design"
                    >
                      ‹
                    </button>
                    
                    <div className="carousel-image-container">
                      <img 
                        src={ineuitDesigns[currentIneuitIndex].image} 
                        alt={ineuitDesigns[currentIneuitIndex].title} 
                        className="carousel-image"
                      />
                      <div className="carousel-info">
                        <h4>{ineuitDesigns[currentIneuitIndex].title}</h4>
                        <p>{ineuitDesigns[currentIneuitIndex].description}</p>
                      </div>
                    </div>
                    
                    <button 
                      className="carousel-btn carousel-btn-next" 
                      onClick={nextIneuitDesign}
                      aria-label="Next ineuit design"
                    >
                      ›
                    </button>
                  </div>
                  
                  <div className="carousel-indicators">
                    {ineuitDesigns.map((_, index) => (
                      <button
                        key={index}
                        className={`indicator ${index === currentIneuitIndex ? 'active' : ''}`}
                        onClick={() => setCurrentIneuitIndex(index)}
                        aria-label={`Go to ineuit design ${index + 1}`}
                      />
                    ))}
                  </div>
                  
                  <div className="carousel-technologies">
                    <h4>Design Tools & Methods:</h4>
                    <div className="tech-tags">
                      {ineuitDesigns[currentIneuitIndex].technologies.map(tech => (
                        <span key={tech} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ) : selectedProject.isShoesPortfolio ? (
                <div className="shoes-design-modal">
                  <div className="shoes-design-carousel">
                    <button 
                      className="carousel-btn carousel-btn-prev" 
                      onClick={previousShoesDesign}
                      aria-label="Previous shoes design"
                    >
                      ‹
                    </button>
                    
                    <div className="carousel-image-container">
                      <img 
                        src={shoesDesigns[currentShoesIndex].image} 
                        alt={shoesDesigns[currentShoesIndex].title} 
                        className="carousel-image"
                      />
                      <div className="carousel-info">
                        <h4>{shoesDesigns[currentShoesIndex].title}</h4>
                        <p>{shoesDesigns[currentShoesIndex].description}</p>
                      </div>
                    </div>
                    
                    <button 
                      className="carousel-btn carousel-btn-next" 
                      onClick={nextShoesDesign}
                      aria-label="Next shoes design"
                    >
                      ›
                    </button>
                  </div>
                  
                  <div className="carousel-indicators">
                    {shoesDesigns.map((_, index) => (
                      <button
                        key={index}
                        className={`indicator ${index === currentShoesIndex ? 'active' : ''}`}
                        onClick={() => setCurrentShoesIndex(index)}
                        aria-label={`Go to shoes design ${index + 1}`}
                      />
                    ))}
                  </div>
                  
                  <div className="carousel-technologies">
                    <h4>Design Tools & Methods:</h4>
                    <div className="tech-tags">
                      {shoesDesigns[currentShoesIndex].technologies.map(tech => (
                        <span key={tech} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <>
                  <div className="modal-image-container">
                    <img 
                      src={selectedProject.image} 
                      alt={selectedProject.title} 
                      className="modal-full-image"
                    />
                  </div>
                  
                  <p className="modal-description">{selectedProject.description}</p>
                  
                  <div className="modal-technologies">
                    <h4>Design Tools & Methods:</h4>
                    <div className="tech-tags">
                      {selectedProject.technologies.map(tech => (
                        <span key={tech} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
