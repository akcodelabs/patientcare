import React from 'react';
import './LoginPage.css';

const LoginPage = () => {
  return (
    <div className="login-container">
      <header className="header-bar">
        <h1 className="logo-text">Health CR</h1>
      </header>

      <div className="login-box">
        <h2 className="login-title">Login</h2>
        <form>
          <label htmlFor="username">Username or Email</label>
          <input
            id="username"
            type="text"
            placeholder="Enter your username or email"
            className="input-field"
          />

          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            placeholder="Enter your password"
            className="input-field"
          />

          <button type="submit" className="submit-button">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
