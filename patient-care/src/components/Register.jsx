import React from 'react';
import './Register.css';

export default function App() {
  return (
    <div className="app">
      <header className="header">Health CR</header>
      <div className="content">
        <aside className="sidebar">
          <h3>Manager</h3>
          <div className="line"></div>
          <h3>OPD</h3>
          <ul>
            <li>Register patients</li>
            <li>patients list</li>
            <li>Paiement</li>
          </ul>
          <h3>IPD</h3>
          <ul>
            <li>Register patients</li>
            <li>patients list</li>
            <li>Paiement</li>
          </ul>
          <h3>Medicin</h3>
          <ul><li>List all</li></ul>
        </aside>
        <main className="form-area">
          <div className="form-header">
            <h2>OP - Register a patient</h2>
            <span className="id">ID : #123</span>
          </div>

          <div className="form-grid">
            <div className="form-group">
              <label>Name</label>
              <input type="text" className="input" />
            </div>
            <div className="form-group">
              <label>Date</label>
              <input type="date" className="input" />
            </div>
            <div className="form-group">
              <label>Age</label>
              <input type="number" className="input" />
            </div>
            <div className="form-group">
              <label>Gender</label>
              <div className="gender-box">
                <label><input type="radio" name="gender" /> Male</label>
                <label><input type="radio" name="gender" /> Female</label>
                <label><input type="radio" name="gender" /> Author</label>
              </div>
            </div>
            <div className="form-group">
              <label>Blood group</label>
              <input type="text" className="input" />
            </div>
            <div className="form-group full-width">
              <label>House address</label>
              <input type="text" className="input" placeholder="name, house, city, ..." />
            </div>
            <div className="form-group">
              <label>Phone</label>
              <input type="text" className="input" />
            </div>
            <div className="form-group">
              <label>Date or Birth</label>
              <input type="date" className="input" />
            </div>
            <div className="form-group full-width">
              <label>Department</label>
              <input type="text" className="input" />
            </div>
          </div>

          <button className="submit-btn">Register</button>
        </main>
      </div>
    </div>
  );
}