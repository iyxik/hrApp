// Utility functions for date calculations
export const calculateYearsOfService = (startDate) => {
    const start = new Date(startDate);
    const now = new Date();
    const diffTime = Math.abs(now - start);
    const diffYears = diffTime / (1000 * 60 * 60 * 24 * 365.25); // Account for leap years
    return Math.floor(diffYears * 10) / 10; // Round to 1 decimal place
  };
  
  export const getServiceReminder = (yearsOfService) => {
    // Check for milestone anniversaries (5, 10, 15, etc.)
    if (yearsOfService >= 5 && yearsOfService % 5 === 0) {
      return {
        emoji: '🎉',
        message: 'Schedule recognition meeting.',
        type: 'milestone'
      };
    }
    
    // Check for probation period (less than 0.5 years / 6 months)
    if (yearsOfService < 0.5) {
      return {
        emoji: '🔔',
        message: 'Schedule probation review.',
        type: 'probation'
      };
    }
    
    return null;
  };
  
  export const formatStartDate = (startDate) => {
    const date = new Date(startDate);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };