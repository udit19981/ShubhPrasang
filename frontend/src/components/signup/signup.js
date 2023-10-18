// Signup.js
import React, { useState } from 'react';
import axios from 'axios';
import '../../../src/style.css';

function Signup() {
  const [formData, setFormData] = useState({
    username: '',
    name: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log('---------', formData)
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // password match validation
    if (formData.password !== formData.confirmPassword) {
      console.error('Passwords do not match.');
      return;
    }

    try {
      const response = await axios.post('/signup', formData);
      console.log(response.data.message);
    } catch (error) {
      console.error('Signup error:', error);
    }
  };

  return (
    <div>
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          onChange={handleChange}
        />
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />
        <input
          type="tel"
          name="phoneNumber"
          placeholder="Phone Number"
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          onChange={handleChange}
        />
        <button type="submit">Sign Up</button>
      </form>
      <p>
        Already have an account? <a href="/">Log In</a>
      </p>
    </div>
  );
}

export default Signup;
