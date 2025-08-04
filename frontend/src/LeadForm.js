import React, { useState } from 'react';

function LeadForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  function handleChange(e) {
    setFormData({...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log('Lead submitted:', formData);
    alert('Lead captured! Check console.');
    setFormData({ name: '', email: '', phone: '' }); // reset form
  }

  return (
    <form onSubmit={handleSubmit} className="lead-form">
      <h2>Capture Lead</h2>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <label>
        Phone:
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <button type="submit">Submit Lead</button>
    </form>
  );
}

export default LeadForm;
