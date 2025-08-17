import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="copyright">
          &copy; {currentYear} REACT25K. All rights reserved.
        </p>
        <p className="footer-text">
          Built with React & modern web technologies
        </p>
      </div>
    </footer>
  );
};

export default Footer;