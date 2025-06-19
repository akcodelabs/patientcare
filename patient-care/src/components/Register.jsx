// File: ConsultantDraft.js
import React from 'react';
import './Register.css';

const ConsultantDraft = () => {
  return (
    <div className="container">
      <div className="sidebar">
        <h2>Health CR</h2>
        <div className="section">
          <p className="section-title">Manager</p>
        </div>
        <div className="section">
          <p className="section-title">OPD</p>
          <ul>
            <li>Register patients</li>
            <li>patients list</li>
            <li>Paiement</li>
          </ul>
        </div>
        <div className="section">
          <p className="section-title">IPD</p>
          <ul>
            <li>Register patients</li>
            <li>patients list</li>
            <li>Paiement</li>
          </ul>
        </div>
        <div className="section">
          <p className="section-title">Medicin</p>
          <ul>
            <li>List all</li>
          </ul>
        </div>
      </div>

      <div className="main">
        <h2>OP - Final draft to Consultant</h2>
        <div className="info">
          <p><strong>Name</strong> : Abc</p>
          <p><strong>Age</strong> : 13</p>
          <p><strong>Gender</strong> : Male</p>
          <p><strong>Blood group</strong> : A+</p>
          <p><strong>Date of Birth</strong> : 12/12/2022</p>
          <p><strong>Phone</strong> : 0123456789</p>
          <p><strong>Department</strong> : <span className="highlight">Cardiology</span></p>
          <p><strong>Date and Time</strong> : 12/12/2022 - [2:00]</p>
          <p><strong>Consultant</strong> : caty</p>
        </div>
        <div className="buttons">
          <button>Print</button>
          <button>Sent</button>
        </div>
      </div>
    </div>
  );
};

export default ConsultantDraft;