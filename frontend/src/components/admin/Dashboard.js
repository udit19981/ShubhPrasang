import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Dashboard.css'; 

const Dashboard = () => {
  const [userCount, setUserCount] = useState(0);
  const [venueCount, setVenueCount] = useState(0);
  const [organizerCount, setOrganizerCount] = useState(0);

  useEffect(() => {
    axios.get('/api/users/count')
      .then(response => {
        setUserCount(response.data.count);
      })
      .catch(error => {
        console.error('Error fetching user count:', error);
      });

    axios.get('/api/venues/count')
      .then(response => {
        setVenueCount(response.data.count);
      })
      .catch(error => {
        console.error('Error fetching venue count:', error);
      });

      axios.get('/api/venues/count')
      .then(response => {
        setOrganizerCount(response.data.count);
      })
      .catch(error => {
        console.error('Error fetching venue count:', error);
      });
  }, []);

  return (
    <div className="dashboard-container">
      <h1>Dashboard</h1>
      <div className="counts-container">
        <Link to="/Usermgmt" className="count-box users-box">
          <p>Total Users</p>
          <p className="count-number">{userCount}</p>
        </Link>
        <Link to="/Venue" className="count-box venues-box">
          <p>Total Venues</p>
          <p className="count-number">{venueCount}</p>
        </Link>
        <Link to="/Organizers" className="count-box venues-box">
          <p>Total Organizers</p>
          <p className="count-number">{organizerCount}</p>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
