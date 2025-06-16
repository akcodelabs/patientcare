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
          <label>username</label>
          <input type="text" className="input-field" />

          <label>username</label>
          <input type="password" className="input-field" />

          <button type="submit" className="submit-button">submit</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
