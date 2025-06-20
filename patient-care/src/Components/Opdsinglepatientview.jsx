import React, { useState } from 'react';
import './Opdsinglepatientview.css';

const sampleData = [
  {
    id: 1,
    name: 'haai',
    age: 15,
    place: 'some place',
    date: '12/12/2022',
    time: '01:20 PM',
    consultant: 'caty',
    department: 'Pediatricians'
  },
  // Add more rows here to match original layout
  { id: 2, name: 'haai', age: 15, place: 'some place', date: '12/12/2022', consultant: 'caty' },
  { id: 3, name: 'haai', age: 15, place: 'some place', date: '12/12/2022', consultant: 'caty' },
  { id: 4, name: 'haai', age: 15, place: 'some place', date: '12/12/2022', consultant: 'caty' },
];

export default function HealthCR() {
  const [searchText, setSearchText] = useState('');

  const rows = sampleData.filter(r =>
    r.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="health-cr">
      <header className="header-top">Health CR</header>

      <aside className="sidebar">
        <h3>Manager</h3>
        <hr />
        <div className="menu-section">
          <h4>OPD</h4>
          <ul>
            <li>Register patients</li>
            <li>patients list</li>
            <li>Paiement</li>
          </ul>
        </div>
        <div className="menu-section">
          <h4>IPD</h4>
          <ul>
            <li>Register patients</li>
            <li>patients list</li>
            <li>Paiement</li>
          </ul>
        </div>
        <div className="menu-section">
          <h4>Medicin</h4>
          <hr />
          <ul>
            <li>List all</li>
          </ul>
        </div>
      </aside>

      <main className="main-area">
        <div className="top-bar">
          <button className="filter-btn">filter &#x1F5D1;</button>
          <div className="title-label">O P D</div>
          <div className="search-wrapper">
            <input
              type="text"
              placeholder=""
              value={searchText}
              onChange={e => setSearchText(e.target.value)}
            />
            <button className="search-btn">search</button>
          </div>
        </div>

        <table className="data-table">
          <thead>
            <tr>
              <th>Name</th><th>Age</th><th>Place</th><th>Date</th><th>Consultant</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, idx) => (
              <React.Fragment key={r.id}>
                <tr className={idx===0 ? 'summary-row expanded' : 'summary-row'}>
                  <td>{r.name}</td><td>{r.age}</td><td>{r.place}</td><td>{r.date}</td><td>{r.consultant}</td>
                </tr>
                {idx===0 && (
                  <tr className="detail-row">
                    <td colSpan="5">
                      <div><span>Time</span> : <span>{r.time}</span></div>
                      <div><span>Consultant</span> : <span>{r.consultant}</span></div>
                      <div><span>Department</span> : <span>{r.department}</span></div>
                      <button className="cancel-btn">Cancel appointment</button>
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
}
