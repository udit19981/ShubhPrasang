import React, { useState } from 'react';
import { TextField, Button, Container, Grid, Paper, Typography, CssBaseline } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  
  const [errors, setErrors] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async () => {
    // Validate fields (you can add your validation logic here)
    if (formData.username && formData.password) {
      // Perform login using an API call
      try {
        const response = await fetch('/api/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
      
        if (response.status === 200) {
          const responseData = await response.json();
          console.log('Response Data:', responseData); // Log the responseData
      
          if (responseData.token && responseData.user && responseData.user.role) {
            // Save the token to local storage or a secure location
            localStorage.setItem('token', responseData.token);
      
            // Save the user role to local storage or state
            localStorage.setItem('userRole', responseData.user.role);
      
            // Clear the error message
            setErrors('');
      
            // Redirect based on user role
            if (responseData.user.role === 'user') {
              navigate('/'); // Replace with the path for the user's dashboard
            } else if (responseData.user.role === 'admin') {
              navigate('/dashboard'); // Replace with the path for the admin dashboard
            }
      
            // Set the success message
            setSuccessMessage('Login successful!');
          } else {
            setErrors('Invalid username or password.');
          }
        } else {
          setErrors('Invalid username or password.');
        }
      } catch (error) {
        console.error('Error:', error);
        setErrors('Login failed. Please try again.');
      }
    } else {
      setErrors('Required all fields.');
    }
  };

  return (
    <Container component="main" sx={{ marginTop: 10 }} maxWidth="xs">
      <CssBaseline />
      <Paper elevation={3} sx={{ padding: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <LockOutlinedIcon sx={{ fontSize: 'large', mb: 1 }} />
        <Typography component="h1" sx={{ marginBottom: 2 }} variant="h5">
          Sign in
        </Typography>
        <TextField
          name="username"
          label="Username"
          value={formData.username}
          onChange={handleInputChange}
          variant="outlined"
          margin="normal"
          required
          fullWidth
        />
        <TextField
          name="password"
          label="Password"
          type="password"
          value={formData.password}
          onChange={handleInputChange}
          variant="outlined"
          margin="normal"
          required
          fullWidth
        />
        <Button
          onClick={handleSubmit}
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2 }}
        >
          Sign In
        </Button>
        {errors && (
          <Typography variant="body2" color="error" sx={{ mt: 1 }}>
            {errors}
          </Typography>
        )}
        {successMessage && (
          <Typography variant="body2" color="success" sx={{ mt: 1 }}>
            {successMessage}
          </Typography>
        )}
      </Paper>
    </Container>
  );
};

export default Login;
