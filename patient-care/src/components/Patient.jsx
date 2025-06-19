import React, { useState } from 'react';
import './Patient.css';

const data = [
  { name: "haai", age: 15, place: "some place", date: "12/12/2022", consultant: "caty" },
  { name: "haai", age: 15, place: "some place", date: "12/12/2022", consultant: "caty" },
  { name: "haai", age: 15, place: "some place", date: "12/12/2022", consultant: "caty" },
  { name: "haai", age: 15, place: "some place", date: "12/12/2022", consultant: "caty" },
  { name: "haai", age: 15, place: "some place", date: "12/12/2022", consultant: "caty" },
  { name: "haai", age: 15, place: "some place", date: "12/12/2022", consultant: "caty" },
  { name: "haai", age: 15, place: "some place", date: "12/12/2022", consultant: "caty" },
];

function App() {
  const [search, setSearch] = useState('');

  const filteredData = data.filter(item =>
    item.name.toLowerCase().includes(search.toLowerCase()) ||
    item.place.toLowerCase().includes(search.toLowerCase()) ||
    item.consultant.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="app">
      <aside className="sidebar">
        <h2>Health CR</h2>
        <div className="section">
          <h4>Manager</h4>
          <h5>OPD</h5>
          <ul>
            <li>Register patients</li>
            <li>patients list</li>
            <li>Paiement</li>
          </ul>
          <h5>IPD</h5>
          <ul>
            <li>Register patients</li>
            <li>patients list</li>
            <li>Paiement</li>
          </ul>
          <h5>Medicin</h5>
          <ul>
            <li>List all</li>
          </ul>
        </div>
      </aside>

      <main className="main">
        <div className="header">
          <button className="filter-btn">filter ⏷</button>
          <h2>O P D</h2>
          <div className="search-container">
            <input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button className="search-btn">search</button>
          </div>
        </div>

        <table className="data-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Place</th>
              <th>Date</th>
              <th>Consultant</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item, idx) => (
              <tr key={idx} className={idx % 2 === 0 ? 'even' : 'odd'}>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.place}</td>
                <td>{item.date}</td>
                <td>{item.consultant}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
}

export default App;