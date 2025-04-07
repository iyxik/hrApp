// src/App.jsx
import React from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Person from './Person';

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <Person
          name="John Doe"
          title="Software Engineer"
          salary="$100,000"
          phone="555-1234"
          email="johndoe@example.com"
          animal="Dog"
        />
        {/* Add more Person components as needed */}
      </main>
      <Footer />
    </div>
  );
};

export default App;
