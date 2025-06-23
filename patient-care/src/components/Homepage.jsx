import React from "react";
import "./HomePage.css";

const departments = [
  { name: "Cardiology", doctors: 30, available: 10, busy: 27 },
  { name: "Cardiology", doctors: 15, available: 10, busy: 10 },
  { name: "Cardiology", doctors: 45, available: 10, busy: 27 },
  { name: "Cardiology", doctors: 10, available: 10, busy: 5 },
  { name: "Cardiology", doctors: 30, available: 10, busy: 27 },
  { name: "Cardiology", doctors: 30, available: 10, busy: 27 },
];

function HomePage() {
  return (
    <div className="container">
      <div className="sidebar">
        <h2>Health CR</h2>

        <div className="section">
          <p>
            <strong>Manager</strong>
          </p>
          <hr className="custom-line" />
        </div>

        <div className="section">
          <p>
            <strong>OPD</strong>
          </p>
          <ul>
            <li>Register patients</li>
            <li>patients list</li>
            <li>Paieemnt</li>
          </ul>
        </div>

        <div className="section">
          <p>
            <strong>IPD</strong>
          </p>
          <ul>
            <li>Register patients</li>
            <li>patients list</li>
            <li>Paieemnt</li>
          </ul>
        </div>

        <div className="section">
          <p>
            <strong>Medicin</strong>
          </p>
          <hr className="custom-line" />
          <ul>
            <li>List all</li>
          </ul>
        </div>
      </div>

      <div className="main">
        <div className="header">
          <h3>Departments</h3>
          <input className="sort-box" type="text" placeholder="Sort..." />
        </div>

        <div className="card-container">
          {departments.map((dept, index) => (
            <div key={index} className="card">
              <div className="row">
                <span className="label">Department</span>
                <span className="colon">:</span>
                <span className="value">
                  <strong>{dept.name}</strong>
                </span>
              </div>
              <div className="row">
                <span className="label">Docters</span>
                <span className="colon">:</span>
                <span className="value">{dept.doctors}</span>
              </div>
              <div className="row">
                <span className="label">Available</span>
                <span className="colon">:</span>
                <span className="value">{dept.available}</span>
              </div>
              <div className="row">
                <span className="label">Busy</span>
                <span className="colon">:</span>
                <span className="value">{dept.busy}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
