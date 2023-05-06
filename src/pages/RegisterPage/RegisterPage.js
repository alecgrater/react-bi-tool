import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Form from '../../components/Form/Form';
import TextInput from '../../components/Form/TextInput';
import Button from '../../components/Button/Button';
import { register } from '../../api/auth';

const RegisterPage = () => {
  const history = useHistory();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await register(username, password);
      history.push('/dashboard');
    } catch (err) {
      setError('Failed to register. Please try again.');
    }
  };

  return (
    <div className="register-page">
      <h1>Register</h1>
      <Form onSubmit={handleRegister}>
        <TextInput
          label="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <TextInput
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {error && <div className="error">{error}</div>}
        <Button type="submit">Register</Button>
      </Form>
    </div>
  );
};

export default RegisterPage;
