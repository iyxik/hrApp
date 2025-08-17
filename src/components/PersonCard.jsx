import { getAnimalEmoji } from '../utils/animalEmojis';
import { calculateYearsOfService, getServiceReminder, formatStartDate } from '../utils/dateUtils';
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
  skills 
}) => {
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

  return (
    <div className="person-card">
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
      
      <div className="person-details">
        <div className="detail-item">
          <span className="detail-label">Salary:</span>
          <span className="detail-value salary">{formatSalary(salary)}</span>
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
        
        <div className="detail-item skills-item">
          <span className="detail-label">Skills:</span>
          <div className="skills-list">
            {skills && skills.map((skill, index) => (
              <span key={index} className="skill-tag">{skill}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonCard;