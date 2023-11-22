import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import './venuepage.css';


const VenuePage = () => {
  const [venues, setVenues] = useState([]);

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

  let navigate = useNavigate(); 
  let path = '/CheckoutPage'; 
 
  
  return (
    <div className="venue-container1">
      <h1>Venue List</h1>
      {venues.length > 0 ? (
        <table className="venue-table1">
          <thead>
            <tr>
              <th>Occasion Type</th>
              <th>Venue Name</th>
              <th>Description</th>
              <th>Address</th>
              <th>Capacity</th>
              <th>Accepted Payments</th>
              <th>Book Now</th>
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
                  <button onClick={() =>  navigate(path)}>Book Now</button>
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

export default VenuePage;
