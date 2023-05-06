import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './RegisterPage.css';

const RegisterPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleRegister = (e) => {
    e.preventDefault();

    // Perform registration logic here
    // Example:
    if (username && password) {
      // Registration successful, navigate to dashboard
      history.push('/dashboard');
    } else {
      alert('Please fill in all the fields');
    }
  };

  return (
    <div className="register-page-container">
      <h1 className="register-page-title">Register</h1>
      <form className="register-page-form" onSubmit={handleRegister}>
        <input
          type="text"
          className="register-page-input"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          className="register-page-input"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="register-page-button">
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;
