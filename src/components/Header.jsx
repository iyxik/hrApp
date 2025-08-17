import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const location = useLocation();
  
  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="app-title-link">
          <h1 className="app-title">HR App</h1>
        </Link>
        <p className="app-subtitle">Employee Management System</p>
        
        <nav className="header-nav">
          <Link 
            to="/" 
            className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
          >
            👥 Employees
          </Link>
          <Link 
            to="/add-employee" 
            className={`nav-link ${location.pathname === '/add-employee' ? 'active' : ''}`}
          >
            ➕ Add Employee
          </Link>
          <Link 
            to="/about" 
            className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}
          >
            ℹ️ About
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;