import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Signin.css';


function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    // alert('hi')
    const response = await fetch('http://localhost/my-app/login.php', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });
    const data = await response.json();
    if (data.success) {
      alert('Logined Successfully')
      navigate('/home');

    } else {
      alert('Login Failed');
    }
  };

  return (
    <div className="login-container">
      <div className="login-header">
        <div className="login-icon">
          <svg fill="none" viewBox="0 0 24 24" className="icon" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
        </div>
        <h2 className="login-title">Sign in to your account</h2>
        <span className="login-subtitle">
          or <Link to="/register" className="login-link">register a new account</Link>
        </span>
      </div>
      <div className="login-form-container">
        <div className="login-form">
          <div className="form-group">
            <label htmlFor="Email" className="form-label">Email address</label>
            <input type="email" className="form-input" required onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="Password" className="form-label">Password</label>
            <input type="password" className="form-input" required onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div className="form-group form-remember">
            <label htmlFor="remember" className="remember-label">
              <input type="checkbox" name="" id="remember" className="remember-checkbox" />
              <span className="remember-text">Remember Me</span>
            </label>
          </div>
          <div className="form-group">
            <button className="login-button" onClick={handleLogin}>Sign in</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
