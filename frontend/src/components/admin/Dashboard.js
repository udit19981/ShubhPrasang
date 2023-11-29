// Dashboard.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
  const [userCount, setUserCount] = useState(0);
  const [venueCount, setVenueCount] = useState(0);
  const [organizerCount, setOrganizerCount] = useState(0);
  const [upcomingEvents, setUpcomingEvents] = useState([]);

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

    axios.get('/api/organizer/count')
      .then(response => {
        setOrganizerCount(response.data.count);
      })
      .catch(error => {
        console.error('Error fetching organizer count:', error);
      });

    // Simulate upcoming events
    const events = [
      {
        id: 1,
        title: 'Conference 2023',
        date: '2023-12-01',
      },
      {
        id: 2,
        title: 'Product Launch',
        date: '2023-12-15',
      },
      {
        id: 3,
        title: 'Tech Expo',
        date: '2024-01-10',
      },
      {
        id: 4,
        title: 'Workshop Series',
        date: '2024-02-05',
      },
      {
        id: 5,
        title: 'Networking Event',
        date: '2024-03-20',
      },
    ];

    setUpcomingEvents(events);
  }, []);

  return (
    <div className="dashboard-container">
      {/* Hero Image */}
      <div className="hero-image">
        <h1>Welcome to Your Dashboard</h1>
        <p>Stay organized and manage your resources efficiently.</p>
      </div>

      
 {/* Counts Container */}
 <div className="counts-container">
 <Link to="/Usermgmt" className="count-box users-box">
   <p>Total Users</p>
   <span className="count-number">{userCount}</span>
 </Link>
 <Link to="/Venue" className="count-box venues-box">
   <p>Total Venues</p>
   <span className="count-number">{venueCount}</span>
 </Link>
 <Link to="/Organizers" className="count-box organizers-box">
   <p>Total Organizers</p>
   <span className="count-number">{organizerCount}</span>
 </Link>
</div>

      {/* Additional Widgets */}
      <div className="widgets-container">
        {/* Widget 1 - Upcoming Events */}
        <div className="widget">
          <h2>Upcoming Events</h2>
          <ul>
            {upcomingEvents.map(event => (
              <li key={event.id}>
                <strong>{event.title}</strong> - {event.date}
              </li>
            ))}
          </ul>
        </div>


      <div className="widget">
      <h2>Recent Activity</h2>
      <div className="no-activity-message">
      <p>No recent activity</p>
  </div>
</div>
      </div>
    </div>
  );
};

export default Dashboard;


