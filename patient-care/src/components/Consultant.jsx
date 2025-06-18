import React from "react";
import "./Consultant.css";

function Consultant() {
  return (
    <div className="app-container">
      <div className="sidebar">
        <h2>Health CR</h2>
        <div className="menu">
          <p>Manager</p>
          <hr />
          <div className="submenu">
            <p>OPD</p>
            <ul>
              <li>Register patients</li>
              <li>patients list</li>
              <li>Payment</li>
            </ul>
          </div>
          <div className="submenu">
            <p>IPD</p>
            <ul>
              <li>Register patients</li>
              <li>patients list</li>
              <li>Payment</li>
            </ul>
          </div>
          <p>Medicine</p>
          <ul>
            <li>List all</li>
          </ul>
        </div>
      </div>

      <div className="main-content">
        <h1>Caty (name of Consultant)</h1>
        <div className="stats-container">
          <div className="stat-card">
            <h3>Patients</h3>
            <p>Not finished : 15</p>
            <p>Finished : 35</p>
            <p>Today's all : 50</p>
          </div>
          <div className="stat-card">
            <h3>Nurse</h3>
            <p>Morning : 9:00 - 12:30</p>
            <p>After Noon : 2:00 - 5:00</p>
            <p>Evening : 6:30 - 8:00</p>
          </div>
        </div>

        <table className="patient-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Phone</th>
              <th>Date and Time</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>abc</td>
              <td>12</td>
              <td>0123456789</td>
              <td>12/11/2022 - 03:30 AM</td>
            </tr>
            <tr>
              <td>abc</td>
              <td>12</td>
              <td>0123456789</td>
              <td>12/11/2022 - 03:30 AM</td>
            </tr>
            <tr>
              <td>abc</td>
              <td>12</td>
              <td>0123456789</td>
              <td>12/11/2022 - 03:30 AM</td>
            </tr>
            <tr>
              <td>abc</td>
              <td>12</td>
              <td>0123456789</td>
              <td>12/11/2022 - 03:30 AM</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Consultant;

