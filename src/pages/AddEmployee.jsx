import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './AddEmployee.css';

const AddEmployee = ({ onAddEmployee }) => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  
  const [formData, setFormData] = useState({
    name: '',
    title: '',
    salary: '',
    phone: '',
    email: '',
    animal: '',
    startDate: '',
    location: '',
    department: '',
    skills: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);
    
    // Build new employee object
    const newEmployee = {
      name: formData.name,
      title: formData.title,
      salary: parseInt(formData.salary) || 0,
      phone: formData.phone,
      email: formData.email,
      animal: formData.animal,
      startDate: formData.startDate,
      location: formData.location,
      department: formData.department,
      skills: formData.skills.split(',').map(skill => skill.trim()).filter(skill => skill)
    };

    try {
      const result = await onAddEmployee(newEmployee);
      
      if (result.success) {
        // Navigate back to employee list on success
        navigate('/');
      } else {
        setSubmitError(result.error || 'Failed to add employee');
      }
    } catch (error) {
      setSubmitError('An unexpected error occurred');
    } finally {
      setIsSubmitting(false);
    }
  };

  const animalOptions = [
    'Owl', 'Eagle', 'Butterfly', 'Dragon', 'Fox', 'Wolf', 'Elephant', 
    'Lion', 'Cat', 'Peacock', 'Panda', 'Turtle', 'Bear', 'Tiger', 
    'Rabbit', 'Horse', 'Monkey', 'Penguin', 'Dolphin', 'Shark'
  ];

  const departmentOptions = [
    'Human Resources', 'Engineering', 'Design', 'Product', 'Marketing', 
    'Sales', 'Finance', 'Operations', 'Data', 'Customer Support'
  ];

  return (
    <div className="add-employee-page">
      <div className="add-employee-container">
        <div className="form-header">
          <h1 className="form-title">Add New Employee</h1>
          <p className="form-subtitle">Welcome a new team member to the company</p>
        </div>

        {submitError && (
          <div className="error-message">
            <span className="error-icon">⚠️</span>
            {submitError}
          </div>
        )}

        <form onSubmit={handleSubmit} className="employee-form">
          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="name" className="form-label">Full Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="form-input"
                placeholder="Enter full name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="title" className="form-label">Job Title *</label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="form-input"
                placeholder="e.g., Software Engineer"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="salary" className="form-label">Salary (USD) *</label>
              <input
                type="number"
                id="salary"
                name="salary"
                value={formData.salary}
                onChange={handleChange}
                className="form-input"
                placeholder="e.g., 75000"
                min="0"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone" className="form-label">Phone Number *</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="form-input"
                placeholder="e.g., (555) 123-4567"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">Email Address *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-input"
                placeholder="employee@company.com"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="animal" className="form-label">Spirit Animal *</label>
              <select
                id="animal"
                name="animal"
                value={formData.animal}
                onChange={handleChange}
                className="form-select"
                required
              >
                <option value="">Select an animal</option>
                {animalOptions.map(animal => (
                  <option key={animal} value={animal}>{animal}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="startDate" className="form-label">Start Date *</label>
              <input
                type="date"
                id="startDate"
                name="startDate"
                value={formData.startDate}
                onChange={handleChange}
                className="form-input"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="location" className="form-label">Location *</label>
              <input
                type="text"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="form-input"
                placeholder="e.g., New York, NY"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="department" className="form-label">Department *</label>
              <select
                id="department"
                name="department"
                value={formData.department}
                onChange={handleChange}
                className="form-select"
                required
              >
                <option value="">Select department</option>
                {departmentOptions.map(dept => (
                  <option key={dept} value={dept}>{dept}</option>
                ))}
              </select>
            </div>

            <div className="form-group full-width">
              <label htmlFor="skills" className="form-label">Skills *</label>
              <input
                type="text"
                id="skills"
                name="skills"
                value={formData.skills}
                onChange={handleChange}
                className="form-input"
                placeholder="e.g., JavaScript, React, Node.js (separate with commas)"
                required
              />
              <small className="form-help">Separate multiple skills with commas</small>
            </div>
          </div>

          <div className="form-actions">
            <button
              type="button"
              onClick={() => navigate('/')}
              className="btn btn-secondary"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="btn btn-primary"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Adding Employee...' : 'Add Employee'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEmployee;