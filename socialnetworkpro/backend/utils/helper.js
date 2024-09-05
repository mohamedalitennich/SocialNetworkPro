// Function to format a date in a specific format
const formatDate = (date) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString(undefined, options);
  };
  
  // Function to check if a string is a valid email
  const isValidEmail = (email) => {
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return regex.test(email);
  };
  
  // Function to sanitize input to prevent XSS attacks
  const sanitizeInput = (input) => {
    return input.replace(/</g, "&lt;").replace(/>/g, "&gt;");
  };
  
  module.exports = {
    formatDate,
    isValidEmail,
    sanitizeInput,
  };
  