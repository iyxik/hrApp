import PersonCard from './PersonCard';
import './PersonList.css';

const PersonList = ({ employees, onEmployeeUpdate }) => {
  if (!employees || employees.length === 0) {
    return (
      <div className="person-list-empty">
        <h3>No employees found</h3>
        <p>Please add some employee data to display.</p>
      </div>
    );
  }

  return (
    <div className="person-list">
      <div className="person-list-header">
        <h2 className="section-title">Our Team</h2>
        <p className="section-subtitle">
          Meet our talented team of {employees.length} professionals
        </p>
      </div>
      
      <div className="employees-grid">
        {employees.map((employee) => (
          <PersonCard
            key={employee.id}
            id={employee.id}
            name={employee.name}
            title={employee.title}
            salary={employee.salary}
            phone={employee.phone}
            email={employee.email}
            animal={employee.animal}
            startDate={employee.startDate}
            location={employee.location}
            department={employee.department}
            skills={employee.skills}
            onEmployeeUpdate={onEmployeeUpdate}
          />
        ))}
      </div>
    </div>
  );
};

export default PersonList;