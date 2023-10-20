import React, { useState } from 'react';
import axios from 'axios';
import './login.css'

const Login = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/login', formData);
            console.log('Token:', response.data.token);
            console.log("Login Success")
        } catch (error) {
            console.error('Login error:', error);
        }
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <input
                    className="input-field"
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={handleChange}
                />
                <input
                    className="input-field"
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={handleChange}
                />
                <button className="login-button" type="submit">Log In</button>
                <p>
                    Don't have an account? <a href="/signup">Sign Up</a>
                </p>
            </form>
        </div>
    );
}

export default Login;
