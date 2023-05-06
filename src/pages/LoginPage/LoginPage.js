import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './LoginPage.css';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleLogin = (e) => {
    e.preventDefault();

    // Perform login logic here
    // Example:
    if (username === 'admin' && password === 'password') {
      history.push('/dashboard');
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <div className="login-page-container">
      <h1 className="login-page-title">Login</h1>
      <form className="login-page-form" onSubmit={handleLogin}>
        <input
          type="text"
          className="login-page-input"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          className="login-page-input"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="login-page-button">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
