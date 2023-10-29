import React, { useState } from 'react';

const AdminLogin = () => {
    const [formData, setFormData] = useState({ username: '', password: '' });
    const [redirectToDashboard, setRedirectToDashboard] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { username, password } = formData;

        // Hardcoded admin credentials
        if (username === 'uditavaiya777@gmail.com' && password === 'udit123') {
            // Successful login, set redirect to admin dashboard
            setRedirectToDashboard(true);
        } else {
            // Invalid login, handle accordingly
            alert('Invalid username or password');
        }
    };

    if (redirectToDashboard) {
        window.location.href = '/Dashboard'; // Redirecting the user to the Dashboard page
    }

    return (
        <div>
            <h2>Admin Login</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={formData.username}
                    onChange={handleChange}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default AdminLogin;
