import React, { useState } from 'react';
import axios from 'axios';
import SignupImage from '../../../assets/images/event3.png'
import './signup.css'

const Signup = () => {
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
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
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
        <div className='signupContainer'>
        <div>
            <img className='signupImg' src={SignupImage} alt='img'/>
        </div>
        <div className="signup-container">
            <h2>Signup</h2>
            <form className='signupForm' onSubmit={handleSubmit}>
                <input
                    className="input-field"
                    type="text"
                    name="username"
                    placeholder="Username"
                    onChange={handleChange}
                />
                <input
                    className="input-field"
                    type="text"
                    name="name"
                    placeholder="Name"
                    onChange={handleChange}
                />
                <input
                    className="input-field"
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={handleChange}
                />
                <input
                    className="input-field"
                    type="tel"
                    name="phoneNumber"
                    placeholder="Phone Number"
                    onChange={handleChange}
                />
                <input
                    className="input-field"
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={handleChange}
                />
                <input
                    className="input-field"
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    onChange={handleChange}
                />
                <button className="signup-button" type="submit">Sign Up</button>
            </form>
            <p>
                Already have an account? <a href="/login">Log In</a>
            </p>
        </div>
        </div>
    );
};

export default Signup;
