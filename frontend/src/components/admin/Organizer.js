import React, { useState } from 'react';
import axios from 'axios';
import './Organizer.css';

const OrganizerForm = () => {
  const [organizerData, setOrganizerData] = useState({
    name: '',
    description: '',
    category: 'Select Category',
    address: '',
    email: '',
    contactNumber: '',
    website: '',
    image: null,
  });
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setOrganizerData({ ...organizerData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', organizerData.name);
    formData.append('description', organizerData.description);
    formData.append('category', organizerData.category);
    formData.append('address', organizerData.address);
    formData.append('email', organizerData.email);
    formData.append('contactNumber', organizerData.contactNumber);
    formData.append('website', organizerData.website);
    formData.append('image', organizerData.image);

    try {
      await axios.post('/api/organizers', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setSuccessMessage('Organizer data saved successfully!');
      setOrganizerData({
        name: '',
        description: '',
        category: 'Select Category',
        address: '',
        email: '',
        contactNumber: '',
        website: '',
        image: null,
      });
    } catch (error) {
      setErrorMessage('Failed to save organizer data');
      console.error('Error saving organizer:', error);
    }
  };

  return (
    <div>
      <h1>Organizer Information</h1>
      {successMessage && <div style={{ color: 'green' }}>{successMessage}</div>}
      {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={organizerData.name} onChange={handleChange} placeholder="Organizer Name" required />
        <textarea name="description" value={organizerData.description} onChange={handleChange} placeholder="Description" required />
        <select name="category" value={organizerData.category} onChange={handleChange} required>
          <option value="Select Category" disabled>Select Category</option>
          <option value="Category 1">Category 1</option>
          <option value="Category 2">Category 2</option>
          <option value="Category 3">Category 3</option>
        </select>
        <input type="text" name="address" value={organizerData.address} onChange={handleChange} placeholder="Address" required />
        <input type="email" name="email" value={organizerData.email} onChange={handleChange} placeholder="Email" required />
        <input type="text" name="contactNumber" value={organizerData.contactNumber} onChange={handleChange} placeholder="Contact Number" required />
        <input type="text" name="website" value={organizerData.website} onChange={handleChange} placeholder="Official Website" required />
        <input type="file" name="image" onChange={(e) => setOrganizerData({ ...organizerData, image: e.target.files[0] })} required />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default OrganizerForm;
