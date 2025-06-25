// App.jsx
import React, { useState } from "react";
import "./Consultantview.css";

const initialData = [
  {
    name: "abc",
    age: "12/12/2022",
    phone: "0123456789",
    datetime: "12/11/2022 - 03:30 AM"
  },
  {
    name: "abc",
    age: "12/12/2022",
    phone: "0123456789",
    datetime: "12/11/2022 - 03:30 AM"
  },
  {
    name: "abc",
    age: "12/12/2022",
    phone: "0123456789",
    datetime: "12/11/2022 - 03:30 AM"
  }
];

function App() {
  const [rows, setRows] = useState(initialData);

  const handleInputChange = (index, field, value) => {
    const updatedRows = [...rows];
    updatedRows[index][field] = value;
    setRows(updatedRows);
  };

  const handleCancel = (indexToRemove) => {
    setRows(rows.filter((_, i) => i !== indexToRemove));
  };

  return (
    <div className="container">
      <div className="sidebar">
        <h2>Health CR</h2>
        <div className="menu-section">
          <h4>Manager</h4>
          <div>
            <strong>OPD</strong>
            <ul>
              <li>Register patients</li>
              <li>patients list</li>
              <li><em>Paiement</em></li>
            </ul>
            <strong>IPD</strong>
            <ul>
              <li>Register patients</li>
              <li>patients list</li>
              <li><em>Paiement</em></li>
            </ul>
            <strong>Medicin</strong>
            <ul><li>List all</li></ul>
          </div>
        </div>
      </div>

      <div className="main-content">
        <h2>Caty(name of Consultent)</h2>

        <div className="stats-section">
          <div className="patients-box">
            <h4>Patients</h4>
            <p>Non finished : <span>15</span></p>
            <p>Finished : <span>35</span></p>
            <p>Today's all : <span>50</span></p>
          </div>
          <div className="nurse-box">
            <h4>Nurse</h4>
            <p>Morning &nbsp;&nbsp;: 9:00 - 12:30</p>
            <p>After Noon: 2:00 - 5:00</p>
            <p>Evening &nbsp;&nbsp;: 6:30 - 8:00</p>
          </div>
        </div>

        <table className="data-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Phone</th>
              <th>Date and Time</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr key={index} className="data-row">
                <td>
                  <input
                    type="text"
                    value={row.name}
                    onChange={(e) => handleInputChange(index, 'name', e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={row.age}
                    onChange={(e) => handleInputChange(index, 'age', e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={row.phone}
                    onChange={(e) => handleInputChange(index, 'phone', e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={row.datetime}
                    onChange={(e) => handleInputChange(index, 'datetime', e.target.value)}
                  />
                </td>
                <td>
                  <button onClick={() => handleCancel(index)} className="cancel-btn">Cancel</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
