import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import PersonList from './components/PersonList';
import About from './pages/About';
import AddEmployee from './pages/AddEmployee';
import { employees as initialEmployees } from './data/employees';
import './App.css';

function App() {
  const [employees, setEmployees] = useState(initialEmployees);

  const handleAddEmployee = (newEmployee) => {
    setEmployees(prev => [...prev, newEmployee]);
  };

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