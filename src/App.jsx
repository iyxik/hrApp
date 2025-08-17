import Header from './components/Header';
import Footer from './components/Footer';
import Person from './components/Person';
import './App.css';

function App() {
  // Sample employee data
  const employees = [
    {
      name: "Sarah Johnson",
      title: "Senior Software Engineer",
      salary: 95000,
      phone: "5551234567",
      email: "sarah.johnson@hrapp.com",
      animal: "🦅"
    },
    {
      name: "Michael Chen",
      title: "Product Manager",
      salary: 85000,
      phone: "5559876543",
      email: "michael.chen@hrapp.com",
      animal: "🐺"
    },
    {
      name: "Emily Rodriguez",
      title: "UX Designer",
      salary: 72000,
      phone: "5555551234",
      email: "emily.rodriguez@hrapp.com",
      animal: "🦋"
    }
  ];

  return (
    <div className="app">
      <Header />
      
      <main className="main-content">
        <div className="container">
          <h2 className="section-title">Our Team</h2>
          <div className="employees-grid">
            {employees.map((employee, index) => (
              <Person
                key={index}
                name={employee.name}
                title={employee.title}
                salary={employee.salary}
                phone={employee.phone}
                email={employee.email}
                animal={employee.animal}
              />
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;