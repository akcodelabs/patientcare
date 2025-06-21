import React, { useState } from "react";
import "./PatientBookingView.css";

const PatientBookingView = () => {
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    age: "",
    blood: "",
    address: "",
    phone: "",
    dob: "",
    department: "",
    gender: "",
  });

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setError("");
    setSuccess(false);
  };

  const handleGenderChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      gender: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check for empty fields
    const hasEmptyFields = Object.values(formData).some((val) => val.trim() === "");
    if (hasEmptyFields) {
      setError("Please fill all fields.");
      return;
    }

    // Simulate success
    setSuccess(true);
    setError("");

    // Optionally reset form
    setFormData({
      name: "",
      date: "",
      age: "",
      blood: "",
      address: "",
      phone: "",
      dob: "",
      department: "",
      gender: "",
    });
  };

  return (
    <div className="container">
      <div className="sidebar">
        <h2>Health CR</h2>
        <div className="menu-section">
          <h4>Manager</h4>
          <hr />
          <h4>OPD</h4>
          <ul>
            <li>Register patients</li>
            <li>patients list</li>
            <li>Payment</li>
          </ul>
          <h4>IPD</h4>
          <ul>
            <li>Register patients</li>
            <li>patients list</li>
            <li>Paiement</li>
          </ul>
          <h4>Medicine</h4>
          <ul>
            <li>List all</li>
          </ul>
        </div>
      </div>

      <div className="form-container">
        <h2>IP - Register a patient</h2>
        {error && <div className="error">{error}</div>}
        {success && <div className="success">Registration successful!</div>}
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input id="name" name="name" type="text" value={formData.name} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="date">Date</label>
              <input id="date" name="date" type="text" value={formData.date} onChange={handleChange} />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="age">Age</label>
              <input id="age" name="age" type="text" value={formData.age} onChange={handleChange} />
            </div>
            <div className="form-group gender-group">
              <label>Gender</label>
              <div className="gender-options">
                <label><input type="radio" name="gender" value="Male" checked={formData.gender === "Male"} onChange={handleGenderChange} /> Male</label>
                <label><input type="radio" name="gender" value="Female" checked={formData.gender === "Female"} onChange={handleGenderChange} /> Female</label>
                <label><input type="radio" name="gender" value="Author" checked={formData.gender === "Author"} onChange={handleGenderChange} /> Author</label>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="blood">Blood group</label>
              <input id="blood" name="blood" type="text" value={formData.blood} onChange={handleChange} />
            </div>
          </div>

          <div className="form-group full-width">
            <label htmlFor="address">House address</label>
            <input id="address" name="address" type="text" value={formData.address} onChange={handleChange} />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input id="phone" name="phone" type="text" value={formData.phone} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="dob">Date or Birth</label>
              <input id="dob" name="dob" type="text" value={formData.dob} onChange={handleChange} />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group full-width">
              <label htmlFor="department">Department</label>
              <input id="department" name="department" type="text" value={formData.department} onChange={handleChange} />
            </div>
            <button type="submit">Register</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PatientBookingView;
