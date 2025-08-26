import React, { useState } from 'react';
import './Contact.css';
import resumeFile from '../assets/Job_Resume_Aquino.pdf';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Send data to PHP backend
      const response = await fetch('http://localhost/portfolio/backend/contact_handler.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus('error');
        console.error('Backend error:', result.message);
      }
    } catch (error) {
      setSubmitStatus('error');
      console.error('Network error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

     const contactInfo = [
     {
       icon: '📧',
       title: 'Email',
       value: 'aquinogodwyn@gmail.com',
       link: 'mailto:aquinogodwyn@gmail.com'
     },
     {
       icon: '📱',
       title: 'Phone',
       value: '+63 9475437388',
       link: 'tel:+639475437388'
     },
     {
       icon: '📍',
       title: 'Location',
       value: 'Rizal, Philippines',
       link: null
     },
     {
       icon: '💼',
       title: 'LinkedIn',
       value: 'https://www.linkedin.com/in/godwynaquino/',
       link: 'https://www.linkedin.com/in/godwynaquino/'
     }
   ];

  const socialLinks = [
    { name: 'LinkedIn', icon: 'fab fa-linkedin', url: 'https://www.linkedin.com/in/godwynaquino/' },
    { name: 'GitHub', icon: 'fab fa-github', url: 'https://github.com/WynCraftsTech' },
    { name: 'Instagram', icon: 'fab fa-instagram', url: 'https://www.instagram.com/godwyyynnnnnn/' }
  ];

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">Let's work together on your next project</p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <h3>Let's Connect</h3>
                         <p>
               I'm always interested in hearing about new design opportunities and exciting projects. 
               Whether you need UI/UX design work or just want to discuss design ideas, feel free to reach out!
             </p>

            <div className="contact-details">
              {contactInfo.map((info, index) => (
                <div key={index} className="contact-item">
                  <div className="contact-icon">{info.icon}</div>
                  <div className="contact-text">
                    <h4>{info.title}</h4>
                    {info.link ? (
                      <a href={info.link} target={info.link.startsWith('http') ? '_blank' : '_self'} rel="noopener noreferrer">
                        {info.value}
                      </a>
                    ) : (
                      <span>{info.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="social-links">
              <h4>Follow Me</h4>
              <div className="social-icons">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                    title={social.name}
                  >
                    <i className={social.icon}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="Your full name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  placeholder="What's this about?"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows="5"
                  placeholder="Tell me about your project or inquiry..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                className={`btn btn-primary submit-btn ${isSubmitting ? 'loading' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>

              {submitStatus === 'success' && (
                <div className="form-success">
                  <span>✅</span> Thank you! Your message has been sent successfully.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="form-error">
                  <span>❌</span> Something went wrong. Please try again.
                </div>
              )}
            </form>
          </div>
        </div>

                 <div className="contact-cta">
           <h3>Ready to Start Your Design Project?</h3>
           <p>Let's discuss how I can help bring your design vision to life</p>
           <div className="cta-buttons">
             <button className="btn btn-primary" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
               Start a Conversation
             </button>
                           <a 
                href={resumeFile} 
                className="btn btn-outline" 
                download="Job_Resume_Aquino.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download Resume
              </a>
           </div>
         </div>
      </div>
    </section>
  );
};

export default Contact;
