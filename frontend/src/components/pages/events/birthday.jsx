import React, { useState } from 'react';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Birthday = () => {
  const [personName, setPersonName] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [venue, setVenue] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessages, setErrorMessages] = useState({
    personName: '',
    venue: '',
    email: '',
    phoneNumber: '',
  });

  const validateField = (fieldName, value) => {
    if (fieldName === 'personName' || fieldName === 'venue') {
      const regex = /^[A-Za-z\s]+$/;
      return regex.test(value);
    } else if (fieldName === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(value);
    } else if (fieldName === 'phoneNumber') {
      const phoneRegex = /^\d{10}$/;
      return phoneRegex.test(value);
    }
    return true; // Default to valid
  };

  const handleFieldChange = (fieldName, value) => {
    const isValid = validateField(fieldName, value);
    if (!isValid) {
      setErrorMessages({
        ...errorMessages,
        [fieldName]: `Please enter valid ${fieldName}`,
      });
    } else {
      setErrorMessages({
        ...errorMessages,
        [fieldName]: '',
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const eventData = { personName, eventDate, venue, email, phoneNumber };
    let isValid = true;

    for (const fieldName of Object.keys(eventData)) {
      if (!validateField(fieldName, eventData[fieldName])) {
        handleFieldChange(fieldName, eventData[fieldName]);
        isValid = false;
      }
    }

    if (!isValid) {
      return; // Don't submit if there are validation errors
    }

    try {
      const response = await axios.post('/birthday', eventData);
      setSuccessMessage(response.data.message);
    } catch (error) {
      console.error('Error while saving data:', error);
    }
  };

  return (
    <div className="form-container">
      <h2 className="form-heading">Birthday Event Planner Form</h2>
      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
      <form onSubmit={handleSubmit} className="form">
        <TextField
          label="Person Name"
          value={personName}
          onChange={(e) => {
            setPersonName(e.target.value);
            handleFieldChange('personName', e.target.value);
          }}
          error={!!errorMessages.personName}
          helperText={errorMessages.personName}
          required
        />

        <TextField
          type="date"
          value={eventDate}
          onChange={(e) => setEventDate(e.target.value)}
          required
        />

        <TextField
          label="Venue"
          value={venue}
          onChange={(e) => {
            setVenue(e.target.value);
            handleFieldChange('venue', e.target.value);
          }}
          error={!!errorMessages.venue}
          helperText={errorMessages.venue}
          required
        />

        <TextField
          label="Email"
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            handleFieldChange('email', e.target.value);
          }}
          error={!!errorMessages.email}
          helperText={errorMessages.email}
          required
        />

        <TextField
          label="Phone Number"
          type="tel"
          value={phoneNumber}
          onChange={(e) => {
            setPhoneNumber(e.target.value);
            handleFieldChange('phoneNumber', e.target.value);
          }}
          error={!!errorMessages.phoneNumber}
          helperText={errorMessages.phoneNumber}
          required
        />

        <Button type="submit" variant="contained" color="primary" className="submit-button">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default Birthday;
