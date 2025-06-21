import React from "react";
import "./Doctor_view.css";
import doctorImage from "../assets/doctor.png";
const Doctor_view = () => {
  return (
    <div className="container">
      <div className="sidebar">
        <h2>Health CR</h2>
        <h3>Manager</h3>
        <hr />
        <h4>OPD</h4>
        <ul>
          <li>
            <b>•</b> Register patients
          </li>
          <li>
            <b>•</b> patients list
          </li>
          <li>
            <b>•</b> Paiement
          </li>
        </ul>
        <h4>IPD</h4>
        <ul>
          <li>
            <b>•</b> Register patients
          </li>
          <li>
            <b>•</b> patients list
          </li>
          <li>
            <b>•</b> Paiement
          </li>
        </ul>
        <h4>Medicin</h4>
        <hr />
        <p>List all</p>
      </div>

      <div className="main-content">
        <div className="doctor-header">
          <table>
            <tbody>
              <tr>
                <td className="label">Name</td>
                <td className="colon">:</td>
                <td className="value">Dr.John</td>
              </tr>
              <tr>
                <td className="label">Department</td>
                <td className="colon">:</td>
                <td className="value">Cardiology</td>
              </tr>
              <tr>
                <td className="label">Qualification</td>
                <td className="colon">:</td>
                <td className="value">MBBS,MD,DNB</td>
              </tr>
              <tr>
                <td className="label">Experience</td>
                <td className="colon">:</td>
                <td className="value">10 years</td>
              </tr>
              <tr>
                <td className="label">About</td>
                <td className="colon">:</td>
                <td className="value">highly experienced cardiologists</td>
              </tr>
            </tbody>
          </table>
          <div className="image-container">
            <img src={doctorImage} alt="Doctor" />
          </div>
        </div>

        <div className="extra-box"></div>
      </div>
    </div>
  );
};

export default Doctor_view;
