import React from "react";
import "./Homepage.css";

function Homepage() {
  const departments = [
    { name: "Cardiology", doctors: 30, available: 10, busy: 27 },
    { name: "cardiology", doctors: 22, available: 7, busy: 15 },
    { name: "cardiology", doctors: 15, available: 5, busy: 10 },
    { name: "cardiology", doctors: 25, available: 10, busy: 15 },
    { name: "cardiology", doctors: 18, available: 8, busy: 10 },
    { name: "cardiology", doctors: 40, available: 20, busy: 20 },
  ];

  return (
    <div className="homepage-container">
      <div className="sidebar">
        <h2>Health CR</h2>

        <div className="section">
          <p className="menu-title">Manager</p>
          <hr />
        </div>

        <div className="section">
          <p className="menu-title">OPD</p>
          <ul>
            <li>Register patients</li>
            <li>Patients list</li>
            <li>Payment</li>
          </ul>
        </div>

        <div className="section">
          <p className="menu-title">IPD</p>
          <ul>
            <li>Register patients</li>
            <li>Patients list</li>
            <li>Payment</li>
          </ul>
        </div>

        <div className="section">
          <p className="menu-title">Medicin</p>
          <hr />
          <ul>
            <li>List all</li>
          </ul>
        </div>
      </div>

      <div className="main">
        <div className="header">
          <h3>Departments</h3>
          <input type="text" placeholder="Sort..." className="sort-input" />
        </div>

        <div className="cards">
          {departments.map((dept, index) => (
            <div className="card" key={index}>
              <p>
                <strong>Department</strong> <span>{dept.name}</span>
              </p>
              <p>
                Doctors : <span>{dept.doctors}</span>
              </p>
              <p>
                Available : <span>{dept.available}</span>
              </p>
              <p>
                Busy : <span>{dept.busy}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Homepage;
