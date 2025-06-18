import React from "react";
import "./DoctorView.css";

const DoctorView = () => {
  const doctors = [
    { name: "abc", status: "online", time: "02:30 PM" },
    { name: "abc", status: "offline", time: "02:30 PM" },
    { name: "abc", status: "online", time: "02:30 PM" },
    { name: "abc", status: "online", time: "02:30 PM" },
  ];

  return (
    <div className="doctor-view">
      <div className="sidebar">
        <h2>Health CR</h2>
        <div className="menu-section">
          <div className="menu-header">Manager</div>
          <hr />
        </div>
        <div className="menu-section">
          <div className="menu-header">OPD</div>
          <ul>
            <li>Register patients</li>
            <li>patients list</li>
            <li>Paiement</li>
          </ul>
        </div>
        <div className="menu-section">
          <div className="menu-header">IPD</div>
          <ul>
            <li>Register patients</li>
            <li>patients list</li>
            <li>Paiement</li>
          </ul>
        </div>
        <div className="menu-section">
          <div className="menu-header">Medicin</div>
          <hr />
          <ul>
            <li>List all</li>
          </ul>
        </div>
      </div>

      <div className="main-content">
        <h3>Departments - Name</h3>
        <table>
          <thead>
            <tr>
              <th>Doctors</th>
              <th>Status</th>
              <th>Available till</th>
            </tr>
          </thead>
          <tbody>
            {doctors.map((doc, index) => (
              <tr key={index}>
                <td>{doc.name}</td>
                <td>
                  <span
                    className={`status-dot ${
                      doc.status === "online" ? "green" : "red"
                    }`}
                  ></span>
                </td>
                <td>{doc.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DoctorView;
