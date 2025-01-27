import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; 
import { ReactComponent as LogoIcon } from './Images/LogoIcon.svg'; 
import { ReactComponent as CompanyLogo } from './Images/CompanyLogo.svg'; 
import { ReactComponent as EyeIcon } from './Images/EyeIcon.svg'; 

const Login = ({ onLogin }) => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [attempts, setAttempts] = useState(0);
  const [errorMessage, setErrorMessage] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate();

  const predefinedCredentials = {
    username: 'Runer',
    password: 'Runer'
  };

  const handleSignIn = () => {
    if (userId !== predefinedCredentials.username || password !== predefinedCredentials.password) {
      setAttempts(attempts + 1);
      if (attempts >= 4) {
        setErrorMessage('maximum number of attempts reached. Contact Admin');
      } else {
        setErrorMessage('Wrong User ID');
      }
    } else {
      onLogin(); // Call the login handler from App.js
      navigate('/dashboard'); // Redirect to dashboard after successful login
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="login-container">
      <LogoIcon className="logo-icon" />
      <CompanyLogo className="company-logo" />
      <h1 className="title">Sign In to your Account</h1>
      <p className="subtitle">Welcome! Please enter your details</p>

      <div className="input-container">
        <input
          type="text"
          placeholder="Enter your ID"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
        <div className="password-container">
          <input
            type={passwordVisible ? 'text' : 'password'}
            placeholder="Enter your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <EyeIcon 
            className="eye-icon" 
            onClick={togglePasswordVisibility} 
          />
        </div>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </div>

      <p className="forgot-password">Forgot Password?</p>

      <button className="sign-in-btn" onClick={handleSignIn}>Sign In</button>
    </div>
  );
};

export default Login;
