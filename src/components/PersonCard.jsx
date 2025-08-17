import { useState } from 'react';
import { getAnimalEmoji } from '../utils/animalEmojis';
import { calculateYearsOfService, getServiceReminder, formatStartDate } from '../utils/dateUtils';
import axios from 'axios';
import './PersonCard.css';

const PersonCard = ({ 
  id, 
  name, 
  title, 
  salary, 
  phone, 
  email, 
  animal, 
  startDate, 
  location, 
  department, 
  skills,
  onEmployeeUpdate
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [saveMessage, setSaveMessage] = useState('');
  const [editData, setEditData] = useState({
    salary: salary || 0,
    location: location || '',
    department: department || '',
    skills: skills ? skills.join(', ') : ''
  });

  const formatSalary = (salary) => {
    if (!salary) return 'Not specified';
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(salary);
  };

  const formatPhone = (phone) => {
    if (!phone) return 'Not provided';
    // Handle different phone formats
    const cleaned = phone.replace(/\D/g, '');
    if (cleaned.length === 10) {
      return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(6)}`;
    }
    return phone;
  };

  const yearsOfService = calculateYearsOfService(startDate);
  const serviceReminder = getServiceReminder(yearsOfService);
  const animalEmoji = getAnimalEmoji(animal);

  const departmentOptions = [
    'Human Resources', 'Engineering', 'Design', 'Product', 'Marketing', 
    'Sales', 'Finance', 'Operations', 'Data', 'Customer Support'
  ];

  const handleEditClick = () => {
    setIsEditing(true);
    setEditData({
      salary: salary || 0,
      location: location || '',
      department: department || '',
      skills: skills ? skills.join(', ') : ''
    });
    setSaveMessage('');
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditData({
      salary: salary || 0,
      location: location || '',
      department: department || '',
      skills: skills ? skills.join(', ') : ''
    });
    setSaveMessage('');
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSave = async () => {
    setIsSaving(true);
    setSaveMessage('');

    try {
      const updatedEmployee = {
        salary: parseInt(editData.salary) || 0,
        location: editData.location,
        department: editData.department,
        skills: editData.skills.split(',').map(skill => skill.trim()).filter(skill => skill)
      };

      const response = await axios.patch(`http://localhost:3001/employees/${id}`, updatedEmployee);
      
      // Update local state with response data
      onEmployeeUpdate(response.data);
      
      setIsEditing(false);
      setSaveMessage('Changes saved successfully!');
      
      // Clear success message after 3 seconds
      setTimeout(() => setSaveMessage(''), 3000);
      
    } catch (error) {
      console.error('Error updating employee:', error);
      setSaveMessage('Error saving changes. Please try again.');
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="person-card">
      {saveMessage && (
        <div className={`save-message ${saveMessage.includes('Error') ? 'error' : 'success'}`}>
          {saveMessage}
        </div>
      )}
      
      <div className="person-header">
        <h2 className="person-name">{name || 'Unknown Employee'}</h2>
        <span className="person-title">{title || 'Position TBD'}</span>
        <div className="person-meta">
          <span className="department">{department}</span>
          <span className="location">📍 {location}</span>
        </div>
      </div>
      
      {serviceReminder && (
        <div className={`service-reminder ${serviceReminder.type}`}>
          <span className="reminder-emoji">{serviceReminder.emoji}</span>
          <span className="reminder-message">{serviceReminder.message}</span>
        </div>
      )}
      
      <div className="card-actions">
        {!isEditing ? (
          <button onClick={handleEditClick} className="edit-btn">
            ✏️ Edit
          </button>
        ) : (
          <div className="edit-actions">
            <button 
              onClick={handleSave} 
              className="save-btn"
              disabled={isSaving}
            >
              {isSaving ? '💾 Saving...' : '💾 Save'}
            </button>
            <button 
              onClick={handleCancelEdit} 
              className="cancel-btn"
              disabled={isSaving}
            >
              ❌ Cancel
            </button>
          </div>
        )}
      </div>
      
      <div className="person-details">
        <div className="detail-item">
          <span className="detail-label">Salary:</span>
          {isEditing ? (
            <input
              type="number"
              name="salary"
              value={editData.salary}
              onChange={handleInputChange}
              className="edit-input"
              min="0"
            />
          ) : (
            <span className="detail-value salary">{formatSalary(salary)}</span>
          )}
        </div>
        
        <div className="detail-item">
          <span className="detail-label">Phone:</span>
          <span className="detail-value">{formatPhone(phone)}</span>
        </div>
        
        <div className="detail-item">
          <span className="detail-label">Email:</span>
          <span className="detail-value email">{email || 'Not provided'}</span>
        </div>
        
        <div className="detail-item">
          <span className="detail-label">Spirit Animal:</span>
          <span className="detail-value animal">{animalEmoji} {animal}</span>
        </div>
        
        <div className="detail-item">
          <span className="detail-label">Start Date:</span>
          <span className="detail-value">{formatStartDate(startDate)}</span>
        </div>
        
        <div className="detail-item">
          <span className="detail-label">Years of Service:</span>
          <span className="detail-value years">{yearsOfService} years</span>
        </div>
        
        <div className="detail-item">
          <span className="detail-label">Location:</span>
          {isEditing ? (
            <input
              type="text"
              name="location"
              value={editData.location}
              onChange={handleInputChange}
              className="edit-input"
              placeholder="e.g., New York, NY"
            />
          ) : (
            <span className="detail-value">📍 {location}</span>
          )}
        </div>
        
        <div className="detail-item">
          <span className="detail-label">Department:</span>
          {isEditing ? (
            <select
              name="department"
              value={editData.department}
              onChange={handleInputChange}
              className="edit-select"
            >
              {departmentOptions.map(dept => (
                <option key={dept} value={dept}>{dept}</option>
              ))}
            </select>
          ) : (
            <span className="detail-value">{department}</span>
          )}
        </div>
        
        <div className="detail-item skills-item">
          <span className="detail-label">Skills:</span>
          {isEditing ? (
            <input
              type="text"
              name="skills"
              value={editData.skills}
              onChange={handleInputChange}
              className="edit-input"
              placeholder="e.g., JavaScript, React, Node.js"
            />
          ) : (
            <div className="skills-list">
              {skills && skills.map((skill, index) => (
                <span key={index} className="skill-tag">{skill}</span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PersonCard;