import React from "react";
import "./Outpatient.css";

function Outpatient() {
  return (
    <div className="main-container">
      <div className="sidebar">
        <h2>Health CR</h2>
        <div className="menu">
          <p className="menu-heading">Manager</p>
          <hr />
          <p className="menu-heading">OPD</p>
          <ul className="menu-list">
            <li>Register patients</li>
            <li>patients list</li>
            <li>Payment</li>
          </ul>
          <p className="menu-heading">IPD</p>
          <ul className="menu-list">
            <li>Register patients</li>
            <li>patients list</li>
            <li>Paiment</li>
          </ul>
          <p className="menu-heading medicin-heading">Medicin</p>
          <hr className="medicin-underline" />
          <p className="menu-heading">List all</p>
        </div>
      </div>

      <div className="content">
        <h2 className="title">OP Patient view</h2>

        <div className="info-container">
          <div className="info-row">
            <span className="label">Name</span>
            <span className="colon">:</span>
            <span className="value"><b>Abc</b></span>
          </div>
          <div className="info-row">
            <span className="label">Age</span>
            <span className="colon">:</span>
            <span className="value"><b>12</b></span>
          </div>
          <div className="info-row">
            <span className="label">Address</span>
            <span className="colon">:</span>
            <span className="value"><b>Address</b></span>
          </div>
          <div className="info-row">
            <span className="label">Gender</span>
            <span className="colon">:</span>
            <span className="value"><b>Male</b></span>
          </div>
          <div className="info-row">
            <span className="label">Blood group</span>
            <span className="colon">:</span>
            <span className="value"><b>A+ (or) not</b></span>
          </div>
        </div>

        <div className="dept-doctor">
          <div className="block">
            <div className="block-title">Department</div>
            <div className="block-content">Department-name</div>

            <div className="date-time">
              <div className="block-title">Date and Time</div>
              <div className="block-content">12/12/2022 - 03:40 PM</div>
            </div>
          </div>

          <div className="block">
            <div className="block-title">Doctor</div>
            <div className="block-content">abc</div>
          </div>
        </div>

        <div className="buttons">
          <button className="history-btn">History</button>
          <button className="book-btn">Book Now</button>
        </div>
      </div>
    </div>
  );
}

export default Outpatient;
