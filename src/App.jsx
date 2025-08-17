import Header from './components/Header';
import Footer from './components/Footer';
import PersonList from './components/PersonList';
import { employees } from './data/employees';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      
      <main className="main-content">
        <div className="container">
          <PersonList employees={employees} />
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;