import React, { useState, useEffect } from 'react';
import './Portfolio.css'; // We'll create this CSS file

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'projects', 'education', 'certifications', 'achievements', 'resume', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition && 
            (element.offsetTop + element.offsetHeight > scrollPosition)) {
          setActiveSection(section);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="portfolio">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container container">
          <div className="nav-logo" onClick={() => scrollToSection('hero')}>
            <i className="fas fa-code"></i>
            Sanskruti Sarode
          </div>
          <ul className={`nav-menu ${isMenuOpen ? 'nav-menu-open' : ''}`}>
            <li><a className={`nav-link ${activeSection === 'hero' ? 'active' : ''}`} onClick={() => scrollToSection('hero')}>Home</a></li>
            <li><a className={`nav-link ${activeSection === 'about' ? 'active' : ''}`} onClick={() => scrollToSection('about')}>About</a></li>
            <li><a className={`nav-link ${activeSection === 'skills' ? 'active' : ''}`} onClick={() => scrollToSection('skills')}>Skills</a></li>
            <li><a className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`} onClick={() => scrollToSection('projects')}>Projects</a></li>
            <li><a className={`nav-link ${activeSection === 'education' ? 'active' : ''}`} onClick={() => scrollToSection('education')}>Education</a></li>
            <li><a className={`nav-link ${activeSection === 'certifications' ? 'active' : ''}`} onClick={() => scrollToSection('certifications')}>Certifications</a></li>
            <li><a className={`nav-link ${activeSection === 'achievements' ? 'active' : ''}`} onClick={() => scrollToSection('achievements')}>Achievements</a></li>
            <li><a className={`nav-link ${activeSection === 'resume' ? 'active' : ''}`} onClick={() => scrollToSection('resume')}>Resume</a></li>
            <li><a className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`} onClick={() => scrollToSection('contact')}>Contact</a></li>
          </ul>
          <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="hero">
        <div className="hero-content container">
          <h1 className="hero-title">
            Hi, I'm <span className="highlight">Sanskruti Sarode</span>
          </h1>
          <p className="hero-subtitle">
            Full Stack Web Developer (MERN) & Full StackJava Developer 
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary" onClick={() => scrollToSection('projects')}>
              <i className="fas fa-rocket"></i>
              View Projects
            </a>
            <a href="#resume" className="btn btn-secondary" onClick={() => scrollToSection('resume')}>
              <i className="fas fa-download"></i>
              Download Resume
            </a>
          </div>
        </div>
        <div className="hero-scroll" onClick={() => scrollToSection('about')}>
          <i className="fas fa-chevron-down"></i>
        </div>
      </section>

      {/* About Section - Centered */}
      <section id="about" className="about">
        <div className="container">
          <h2 className="section-title">
            About <span>Me</span>
          </h2>
          <div className="about-content-centered">
            <p>
              Passionate Full Stack Developer with expertise in modern web technologies. 
              I specialize in creating scalable, performant applications using the MERN stack 
              and robust Java backend solutions. With a keen eye for detail and a commitment 
              to clean, maintainable code, I transform complex requirements into intuitive 
              user experiences. Experienced Full Stack Developer.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills">
        <div className="container">
          <h2 className="section-title">
            Tech <span>Skills</span>
          </h2>
          <div className="skills-grid">
            <div className="skill-category">
              <h3><i className="fab fa-react"></i>Frontend</h3>
              <div className="skill-tags">
                <span>React.js</span>
                <span>Next.js</span>
                <span>Tailwind CSS</span>
                <span>JavaScript </span>
                <span>HTML5</span>
                <span>CSS3</span>
                <span>Node.js</span>
                <span>Express.js</span>
              </div>
            </div>
            <div className="skill-category">
              <h3><i className="fas fa-server"></i>Backend</h3>
              <div className="skill-tags">
                <span>Node.js</span>
                <span>Express.js</span>
                <span>MongoDB</span>
                <span>Java Spring Boot</span>
                <span>REST APIs</span>
                <span>GraphQL</span>
              </div>
            </div>
            <div className="skill-category">
              <h3><i className="fas fa-tools"></i>Tools</h3>
              <div className="skill-tags">
                <span>Git & GitHub</span>
                <span>Docker</span>
                <span>Vercel</span>
                <span>Postman</span>
                <span>Figma</span>
                <span>VS Code</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="container">
          <h2 className="section-title">
            Featured <span>Projects</span>
          </h2>
          <div className="projects-grid">
            <div className="project-card">
              <div className="project-image">
                <i className="fas fa-shopping-cart"></i>
              </div>
              <div className="project-content">
                <h3>E-Commerce Platform</h3>
                <p>Full-stack e-commerce solution with payment integration, admin dashboard, and real-time inventory management.</p>
                <div className="project-tech">
                  <span>React</span>
                  <span>Node.js</span>
                  <span>MongoDB</span>
                  <span>Stripe</span>
                </div>
                
              </div>
            </div>
            <div className="project-card">
              <div className="project-image">
                <i className="fas fa-tasks"></i>
              </div>
              <div className="project-content">
                <h3>StaySphere</h3>
                <p>Developed a full-stack accommodation booking web application enabling users to browse stays, view property details, and make bookings.
Built responsive and interactive user interfaces using React.js, JavaScript, and TypeScript. Implemented secure authentication and RESTful APIs using Node.js, Express.js, and MongoDB. 
</p>
                <div className="project-tech">
                  <span>Next.js</span>
                  <span>Socket.io</span>
                  <span>MongoDB</span>
                  <span>Tailwind</span>
                </div>
              </div>
            </div>
            <div className="project-card">
              <div className="project-image">
                <i className="fas fa-blog"></i>
              </div>
              <div className="project-content">
                <h3>TradeFlow</h3>
                <p>Developed a full-stack stock trading web application interface inspired by Zerodha, featuring stock listings and user dashboards.
Designed responsive and reusable frontend components using React.js, JavaScript, and TypeScript. Implemented backend services and APIs using Node.js, Express.js, and MongoDB
</p>
                <div className="project-tech">
                  <span>React</span>
                  <span>Strapi</span>
                  <span>Redis</span>
                  <span>Tailwind</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section - Point-wise */}
      <section id="education" className="education">
        <div className="container">
          <h2 className="section-title">
            Education
          </h2>
          <div className="education-list">
            <div className="education-item">
              <i className="fas fa-graduation-cap"></i>
              <div>
                <h3>Bachelor of Engineering</h3>
                <span>Computer Engineering • 2023-2027</span>
                <p>CGPA: 7.43/10 </p>
              </div>
            </div>
            <div className="education-item">
              <i className="fas fa-school"></i>
              <div>
                <h3>HSC</h3>
                <span>2023</span>
                <p>Percentage: 64.17%</p>
              </div>
            </div>
            <div className="education-item">
              <i className="fas fa-school"></i>
              <div>
                <h3>SSC</h3>
                <span>2021</span>
                <p>Percentage: 84.60%</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="certifications">
        <div className="container">
          <h2 className="section-title">
            Certifications
          </h2>
          <div className="certifications-list">
            <div className="certification-item">
              <i className="fas fa-certificate"></i>
              <div>
                <h3>Full Stack Web Developer - MERN Stack</h3>
                <span>Apna College</span>
              </div>
            </div>
            <div className="certification-item">
              <i className="fas fa-certificate"></i>
              <div>
                <h3>Data Structures and Algorithm in Java</h3>
                <span>Apna College</span>
              </div>
            </div>
            <div className="certification-item">
              <i className="fas fa-certificate"></i>
              <div>
                <h3>AWS Academy Cloud Foundation</h3>
                <span>AWS Academy</span>
              </div>
            </div>
            <div className="certification-item">
              <i className="fas fa-certificate"></i>
              <div>
                <h3>Database Programming in MySQL</h3>
                <span>Oracle Academy</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="achievements">
        <div className="container">
          <h2 className="section-title">
            Achievements
          </h2>
          <div className="achievements-grid">
            <div className="achievement-card">
              <div className="achievement-icon">
                <i className="fas fa-trophy"></i>
              </div>
              <h3>Solved 50+ DSA problems on leetcode</h3>
              
            </div>
            <div className="achievement-card">
              <div className="achievement-icon">
                <i className="fas fa-star"></i>
              </div>
              <h3>Achieved 5 star rating in problem solving on hackerrank</h3>
              
            </div>
            <div className="achievement-card">
              <div className="achievement-icon">
                <i className="fas fa-crown"></i>
              </div>
              <h3>Awarded for best English speaker in group discussion</h3>
              
            </div>
          </div>
        </div>
      </section>

      {/* Resume Section */}
<section id="resume" className="resume">
  <div className="container">
    <h2 className="section-title">
      Get My <span>Resume</span>
    </h2>

    <div className="resume-buttons">
      <a
        href="/Sanskruti-sarode-resume.pdf"
        className="btn btn-primary"
        download
      >
        <i className="fas fa-download"></i>
        Download Resume
      </a>
    </div>
  </div>
</section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-title">
            Let's <span>Connect</span>
          </h2>
          <div className="contact-links">
            <a href="mailto:sanskrutisarode07@email.com" className="contact-link">
              <i className="fas fa-envelope"></i>
              <span>sanskrutisarode07@email.com</span>
              <br/>
            </a>
            <a href="http://www.linkedin.com/in/sanskruti-sarode-970742319" className="contact-link" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
              <span>LinkedIn</span>
              <br/>
            </a>
            <a href="https://github.com/Sanskrutisarode07" className="contact-link" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <p>&copy; 2026 Sanskruti Sarode. </p>
            <div className="social-links">
              <a href="#"><i className="fab fa-linkedin"></i></a>
              <a href="#"><i className="fab fa-github"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;