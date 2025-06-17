import React from "react";
import "./Consultant.css";

function Consultant() {
  return (
    <div className="consultant-app">
      <div className="sidebar">
        <h2>Health CR</h2>
        <div className="menu">
          <p>Manager</p>
          <hr />
          <p>OPD</p>
          <ul>
            <li>Register patients</li>
            <li>patients list</li>
            <li>Paiement</li>
          </ul>
          <p>IPD</p>
          <ul>
            <li>Register patients</li>
            <li>patients list</li>
            <li>Paiement</li>
          </ul>
          <p>Medicin</p>
          <hr />
          <p>List all</p>
        </div>
      </div>

      <div className="main-content">
        <h2>Caty (name of Consulent)</h2>
        <div className="summary-boxes">
          <div className="box">
            <h4>Patients</h4>
            <p>Non finished : 15</p>
            <p>Finished : 35</p>
            <p>Today's all : 50</p>
          </div>
          <div className="box">
            <h4>Nurse</h4>
            <p>Morning : 9:00 - 12:30</p>
            <p>After Noon : 2:00 - 5:00</p>
            <p>Evening : 6:30 - 8:00</p>
          </div>
        </div>

        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Phone</th>
              <th>Date and Time</th>
            </tr>
          </thead>
          <tbody>
            {[...Array(4)].map((_, index) => (
              <tr key={index}>
                <td>abc</td>
                <td>12</td>
                <td>0123456789</td>
                <td>12/11/2022 - 03:30 AM</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Consultant;
