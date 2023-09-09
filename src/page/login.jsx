import React, { useState } from 'react';
import WebNav from '../component/Nav';


function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = () => {
    fetch('http://localhost:3333/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else {
          throw new Error('Login failed');
        }
      })
      .then((data) => {
        const { status, message, token } = data;
        if (status === 'ok') {
          setMessage(`Login successful. Token: ${token}`);
        } else {
          setMessage(`Login failed. ${message}`);
        }
      })
      .catch((error) => {
        setMessage(`An error occurred: ${error.message}`);
      });
  };

  return (
    <div>
      <WebNav/>
      <h1>Login</h1>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button onClick={handleLogin}>Login</button>
      <div>{message}</div>
    </div>
  );
}

export default Login;
