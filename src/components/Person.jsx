import './Person.css';

const Person = ({ name, title, salary, phone, email, animal }) => {
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
    // Simple phone formatting for US numbers
    const cleaned = phone.replace(/\D/g, '');
    if (cleaned.length === 10) {
      return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(6)}`;
    }
    return phone;
  };

  return (
    <div className="person-card">
      <div className="person-header">
        <h2 className="person-name">{name || 'Unknown Employee'}</h2>
        <span className="person-title">{title || 'Position TBD'}</span>
      </div>
      
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
          <span className="detail-value animal">{animal || '🦄'}</span>
        </div>
      </div>
    </div>
  );
};

export default Person;