import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons';
import './App.css';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
  };

  const handleFacebookLogin = () => {
    console.log('Logging in with Facebook');
  };

  const handleGoogleLogin = () => {
    console.log('Logging in with Google');
  };

  return (
    <div
    className="login-form-container"
    style={{
      backgroundColor: '#ffffff',
        borderRadius: '8px',
        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1), 0 12px 40px rgba(0, 0, 0, 0.15)', // Increased box shadow
        padding: '40px',
        width: '400px',
        textAlign: 'center',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        border: '2px solid #000', // Black border color
      }}
    >
      <form
        className="login-form"
        onSubmit={handleSubmit}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <h2 style={{ marginBottom: '20px', color: '#333' }}>Login</h2>
        <label htmlFor="email" style={{ textAlign: 'left', marginBottom: '10px' }}>
          Email:
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
          required
          style={{
            marginBottom: '10px',
            padding: '12px',
            border: '1px solid #ccc',
            borderRadius: '4px',
            width: '100%',
          }}
        />
        <label htmlFor="password" style={{ textAlign: 'left', marginBottom: '10px' }}>
          Password:
        </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
          required
          style={{
            marginBottom: '10px',
            padding: '12px',
            border: '1px solid #ccc',
            borderRadius: '4px',
            width: '100%',
          }}
        />
        <button
          type="submit"
          style={{
            backgroundColor: '#007bff',
            color: '#ffffff',
            padding: '14px',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '18px',
            width: '100%',
          }}
        >
          Login
        </button>

        <p style={{ marginTop: '10px', textAlign: 'center', color: '#777' }}>
          Don't have an account?{' '}
          <button
            type="button"
            onClick={() => {
              console.log('Sign up button clicked');
            }}
            style={{
              background: 'none',
              border: 'none',
              color: '#007bff',
              cursor: 'pointer',
              textDecoration: 'underline',
              padding: 0,
              font: 'inherit',
            }}
          >
            Sign up
          </button>
        </p>

        <button
          type="button"
          className="facebook-button"
          onClick={handleFacebookLogin}
          style={{
            backgroundColor: '#1877f2',
            color: '#ffffff',
            padding: '14px',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '16px',
            marginTop: '10px',
            width: '100%',
          }}
        >
          <FontAwesomeIcon icon={faFacebookF} className="icon" />
          Login with Facebook
        </button>

        <button
          type="button"
          className="google-button"
          onClick={handleGoogleLogin}
          style={{
            backgroundColor: '#4285f4',
            color: '#ffffff',
            padding: '14px',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '16px',
            marginTop: '10px',
            width: '100%',
          }}
        >
          <FontAwesomeIcon icon={faGoogle} className="icon" />
          Login with Google
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
