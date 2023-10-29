import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Venue.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

const Venue = () => {
  const [formData, setFormData] = useState({
    occasionType: '',
    venueName: '',
    description: '',
    address: '',
    capacity: '',
    acceptedPayments: [],
  });

  const [venues, setVenues] = useState([]);

  const occasionTypeOptions = ['Wedding', 'Birthday', 'Conference', 'Party'];
  const paymentOptions = ['Credit Card', 'Cash', 'PayPal', 'Bank Transfer'];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === 'capacity' ? parseInt(value) : value,
    });
  };

  const handlePaymentChange = (e) => {
    const selectedOptions = Array.from(e.target.selectedOptions, (option) => option.value);
    setFormData({
      ...formData,
      acceptedPayments: selectedOptions,
    });
  };

  const isFormValid = () => {
    return (
      formData.occasionType &&
      formData.venueName &&
      formData.address &&
      formData.capacity > 0
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isFormValid()) {
      alert('Please fill in all required fields before submitting.');
      return;
    }

    try {
      // Send the formData to the server for saving in MongoDB
      const response = await axios.post('/api/venues', formData);
      console.log('Venue data saved:', response.data);
      // Clear the form after submission
      setFormData({
        occasionType: '',
        venueName: '',
        description: '',
        address: '',
        capacity: '',
        acceptedPayments: [],
      });
      // Append the new venue to the existing list
      setVenues((prevVenues) => [...prevVenues, response.data]);

      // After successfully adding a new venue, load all venues again to include existing entries.
      loadVenues();
    } catch (error) {
      console.error('Error saving Venue data:', error);
    }
  };

  const loadVenues = async () => {
    try {
      const response = await axios.get('/api/venues');
      console.log('Venues loaded:', response.data); 
      setVenues(response.data);
    } catch (error) {
      console.error('Error loading Venue data:', error);
    }
  };
  

  useEffect(() => {
    loadVenues();
  }, []);

  // Added a function to update the venue data. Currently, it is under maintainance. 
  const handleUpdateClick = async (venue) => {
    
  };

  // Added a function to Delete the venue data. Currently, it is under maintainance. 

  const handleDeleteClick = async (venue) => {
    
  };

    return (
      <div className="venue-container">
      <h1>Add Venue Information</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Occasion Type:</label>
          <select name="occasionType" class='select-venue' value={formData.occasionType} onChange={handleChange}>
            <option value="">Select an occasion</option>
            {occasionTypeOptions.map((occasion) => (
              <option key={occasion} value={occasion}>
                {occasion}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>Venue Name:</label>
          <input type="text" name="venueName" value={formData.venueName} onChange={handleChange} />
        </div>
        <div>
          <label>Description:</label>
          <textarea name="description" value={formData.description} onChange={handleChange}></textarea>
        </div>
        <div>
          <label>Address:</label>
          <input type="text" name="address" value={formData.address} onChange={handleChange} />
        </div>
        <div>
          <label>Capacity:</label>
          <input type="number" name="capacity" value={formData.capacity} onChange={handleChange} />
        </div>
        <div>
          <label>Accepted Payment Types:</label>
          <select
            name="acceptedPayments"
            multiple
            value={formData.acceptedPayments}
            onChange={handlePaymentChange}
          >
            {paymentOptions.map((payment) => (
              <option key={payment} value={payment}>
                {payment}
              </option>
            ))}
          </select>
        </div>
        <button className="venue-button" type="submit">
          Add Venue
        </button>
      </form>
  
        <h1>Manage Venue Data</h1>
        {venues.length > 0 ? (
          <table className="venue-table">
            <thead>
              <tr>
                <th>Occasion Type</th>
                <th>Venue Name</th>
                <th>Description</th>
                <th>Address</th>
                <th>Capacity</th>
                <th>Accepted Payments</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {venues.map((venue) => (
                <tr key={venue._id}>
                  <td>{venue.occasionType}</td>
                  <td>{venue.venueName}</td>
                  <td>{venue.description}</td>
                  <td>{venue.address}</td>
                  <td>{venue.capacity}</td>
                  <td>{venue.acceptedPayments.join(', ')}</td>
                  <td>
                  <button onClick={() => handleUpdateClick(venue)} className="icon-button">
        <FontAwesomeIcon icon={faEdit} /> {}
      </button>
      <button onClick={() => handleDeleteClick(venue)} className="icon-button" id='delete-button'>
        <FontAwesomeIcon icon={faTrash} /> {}
      </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No venues available.</p>
        )}
  
 
      
      </div>
    );
  };

export default Venue;
