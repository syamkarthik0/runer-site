import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = ({ onLogout }) => {
  const navigate = useNavigate();

  useEffect(() => {
    // Perform logout actions such as clearing local storage or user session
    onLogout(); // Update state in App.js to indicate the user has logged out
    navigate('/'); // Redirect to login page
  }, [navigate, onLogout]);

  return <div>Logging out...</div>;
};

export default Logout;
