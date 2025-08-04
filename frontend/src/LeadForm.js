import React, { useState } from 'react';
import './LeadForm.css';  // <-- Import the new CSS file

function LeadForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const resp = await fetch('http://localhost:5000/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await resp.json();
      if (resp.ok) {
        alert('Lead captured!');
        setFormData({ name: '', email: '', phone: '' });
      } else {
        alert('Error: ' + (data.error || 'Could not save lead'));
      }
    } catch (err) {
      alert('Network error or server issue.');
    }
  }

  return (
    <form className="lead-form" onSubmit={handleSubmit}>
      <h2 className="lead-form-title">Capture Lead</h2>

      <label className="lead-form-label">
        Name
        <input
          className="lead-form-input"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder="Full Name"
        />
      </label>

      <label className="lead-form-label">
        Email
        <input
          className="lead-form-input"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="example@mail.com"
        />
      </label>

      <label className="lead-form-label">
        Phone
        <input
          className="lead-form-input"
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          placeholder="+44 7..."
        />
      </label>

      <button className="lead-form-button" type="submit">Submit Lead</button>
    </form>
  );
}

export default LeadForm;
