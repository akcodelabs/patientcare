import React from 'react';
import './DoctorView.css';

const DoctorView = () => {
  const doctors = [
    { name: 'abc', status: 'online', time: '02:30 PM' },
    { name: 'abc', status: 'offline', time: '02:30 PM' },
    { name: 'abc', status: 'online', time: '02:30 PM' },
    { name: 'abc', status: 'online', time: '02:30 PM' },
  ];

  return (
    <div className="page-wrapper">
      {/* Header */}
      <header className="header">Health CR</header>

      {/* Main Layout */}
      <div className="layout">
        {/* Sidebar */}
        <aside className="sidebar">
          <div className="manager-box">
            <p className="section-title">Manager</p>
            <hr />

            <p className="group-title">OPD</p>
            <ul>
              <li>Register patients</li>
              <li>patients list</li>
              <li>Paiement</li>
            </ul>

            <p className="group-title">IPD</p>
            <ul>
              <li>Register patients</li>
              <li>patients list</li>
              <li>Paiement</li>
            </ul>

            <p className="group-title">Medicin</p>
            <ul>
              <li>List all</li>
            </ul>
          </div>
        </aside>

        {/* Content */}
        <main className="content">
          <div className="department-box">
            <h3>Departments - Name</h3>

            <table className="doctor-table">
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
                          doc.status === 'online' ? 'green' : 'red'
                        }`}
                      ></span>
                    </td>
                    <td>{doc.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
};

export default DoctorView;
