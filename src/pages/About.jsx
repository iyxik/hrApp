import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <div className="about-container">
        <div className="about-header">
          <h1 className="about-title">About HR App</h1>
          <p className="about-subtitle">Modern Employee Management System</p>
        </div>
        
        <div className="about-content">
          <div className="about-section">
            <h2>🎯 Our Mission</h2>
            <p>
              HR App is designed to streamline employee management processes with a modern, 
              intuitive interface. We believe that managing your team should be simple, 
              efficient, and enjoyable.
            </p>
          </div>
          
          <div className="about-section">
            <h2>✨ Key Features</h2>
            <ul className="features-list">
              <li>📊 Comprehensive employee profiles with detailed information</li>
              <li>🎉 Automatic milestone tracking for work anniversaries</li>
              <li>🔔 Probation period reminders for new hires</li>
              <li>🐾 Fun spirit animal assignments for team building</li>
              <li>📱 Fully responsive design for all devices</li>
              <li>➕ Easy employee onboarding with intuitive forms</li>
            </ul>
          </div>
          
          <div className="about-section">
            <h2>🚀 Technology Stack</h2>
            <div className="tech-stack">
              <span className="tech-tag">React</span>
              <span className="tech-tag">JavaScript</span>
              <span className="tech-tag">CSS3</span>
              <span className="tech-tag">React Router</span>
              <span className="tech-tag">Vite</span>
            </div>
          </div>
          
          <div className="about-section">
            <h2>📈 Built for Growth</h2>
            <p>
              Whether you're managing a small startup team or a large enterprise workforce, 
              HR App scales with your needs. Our clean architecture and modular design 
              ensure that your employee data is always organized and accessible.
            </p>
          </div>
          
          <div className="about-stats">
            <div className="stat-item">
              <span className="stat-number">100%</span>
              <span className="stat-label">Responsive</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">⚡</span>
              <span className="stat-label">Fast</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">🎨</span>
              <span className="stat-label">Beautiful</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;