import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Header from './components/Header';
import Footer from './components/Footer';
import PersonList from './components/PersonList';
import About from './pages/About';
import AddEmployee from './pages/AddEmployee';
import './App.css';

function App() {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch employees from JSON server
  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        setLoading(true);
        const response = await axios.get('http://localhost:3001/employees');
        setEmployees(response.data);
        setError(null);
      } catch (err) {
        console.error('Error fetching employees:', err);
        setError('Failed to load employees. Make sure the server is running.');
      } finally {
        setLoading(false);
      }
    };

    fetchEmployees();
  }, []);

  const handleAddEmployee = async (newEmployee) => {
    try {
      const response = await axios.post('http://localhost:3001/employees', newEmployee);
      setEmployees(prev => [...prev, response.data]);
      return { success: true };
    } catch (err) {
      console.error('Error adding employee:', err);
      return { success: false, error: 'Failed to add employee. Please try again.' };
    }
  };

  if (loading) {
    return (
      <div className="app">
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p>Loading employees...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="app">
        <div className="error-container">
          <h2>⚠️ Connection Error</h2>
          <p>{error}</p>
          <p>Please run: <code>npm run server</code></p>
        </div>
      </div>
    );
  }

  return (
    <Router>
      <div className="app">
        <Header />
        
        <main className="main-content">
          <div className="container">
            <Routes>
              <Route 
                path="/" 
                element={<PersonList employees={employees} />} 
              />
              <Route 
                path="/add-employee" 
                element={<AddEmployee onAddEmployee={handleAddEmployee} />} 
              />
              <Route 
                path="/about" 
                element={<About />} 
              />
            </Routes>
          </div>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;