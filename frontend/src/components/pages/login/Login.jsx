import React, { useState } from 'react';
import axios from 'axios';
import loginImage from '../../../assets/images/event3.png';
import './login.css';
import { Link } from 'react-router-dom';

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
     <div className='loginContainer'>
        <div>
            <img className='loginImg' src={loginImage} alt='img'/>
        </div>
        <div className="login-container">
            <h2>Login</h2>
            
            <form className='loginForm' onSubmit={handleSubmit}>
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
                <Link to="/AdminLogin">
                        <button className="login-button1" type="button">isAdmin?</button>
                </Link>
            </form>
        </div>
        </div>
    );
}

export default Login;
