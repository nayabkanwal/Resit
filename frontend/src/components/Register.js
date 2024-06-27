import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Signup.css';


function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost/my-app/register.php', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });
    const data = await response.json();
    if (data.success) {
      alert('Signup successful');
      navigate('/');
    } else {
      alert('Registration failed');
    }
  };

  return (
    <div className="register-container">
      <div className="register-box">
        <div className="register-content">
          <div className="register-form">
            <div className="register-header">
              <h2 className="register-title">Sign Up</h2>
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="email">Email address</label>
              <input className="form-input" type="email" required onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="password">Password</label>
              <input className="form-input" type="password" required onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className="form-group">
              <button className="register-button" onClick={handleRegister}>Register</button>
            </div>
            <div className="login-link">
              <span>Already have an account? <Link to="/login" className="link">Login</Link></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
