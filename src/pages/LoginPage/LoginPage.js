import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Form from '../../components/Form/Form';
import TextInput from '../../components/Form/TextInput';
import Button from '../../components/Button/Button';
import { login } from '../../api/auth';

const LoginPage = () => {
  const history = useHistory();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      await login(username, password);
      history.push('/dashboard');
    } catch (err) {
      setError('Invalid username or password.');
    }
  };

  return (
    <div className="login-page">
      <h1>Login</h1>
      <Form onSubmit={handleLogin}>
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
        <Button type="submit">Login</Button>
      </Form>
    </div>
  );
};

export default LoginPage;
