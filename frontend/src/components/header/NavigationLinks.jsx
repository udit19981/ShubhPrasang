// NavigationLinks.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';

const NavigationLinks = ({ userRole }) => (
  <ul>
    {userRole === 'user' && (
      <>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/events">Events</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
        <li>
          <NavLink to="/about">About us</NavLink>
        </li>
      </>
    )}
    {userRole === 'admin' && (
      <>
        <li>
          <NavLink to="/Venue">Venue</NavLink>
        </li>
        <li>
          <NavLink to="/Usermgmt">Usermgmt</NavLink>
        </li>
        <li>
          <NavLink to="/Dashboard">Dashboard</NavLink>
        </li>
        <li>
          <NavLink to="/Organizer">Organizer</NavLink>
        </li>
      </>
    )}
  </ul>
);

export default NavigationLinks;
