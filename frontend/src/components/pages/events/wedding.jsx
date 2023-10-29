import React, { useState } from 'react';
import axios from 'axios';
import './wedding.css'; 

const Wedding = () => {
    const [brideName, setBrideName] = useState('');
    const [groomName, setGroomName] = useState('');
    const [eventDate, setEventDate] = useState('');
    const [venue, setVenue] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      const eventData = { brideName, groomName, eventDate, venue, email, phoneNumber };
  
      try {
        const response = await axios.post('/wedding', eventData);
        setSuccessMessage(response.data.message);
      } catch (error) {
        console.error('Error while saving data:', error);
      }
    };
  

  return (
    <div className="form-container">
      <h2 className="form-heading">Wedding Event Planner Form</h2>
      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label>Bride's Name:</label>
          <input
            type="text"
            value={brideName}
            onChange={(e) => setBrideName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Groom's Name:</label>
          <input
            type="text"
            value={groomName}
            onChange={(e) => setGroomName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Event Date:</label>
          <input
            type="date"
            value={eventDate}
            onChange={(e) => setEventDate(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Venue:</label>
          <input
            type="text"
            value={venue}
            onChange={(e) => setVenue(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Phone Number:</label>
          <input
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default Wedding;
