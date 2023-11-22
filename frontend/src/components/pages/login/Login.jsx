import React, { useState } from 'react';
import { TextField, Button, Container, Grid, Paper, Typography, CssBaseline } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';


const Login = () => {
  const theme = createTheme();
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
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {/* <Box
                        component="img"
                        sx={{ height: 40, display: { xs: 'none', md: 'flex' }, mr: 1 }}
                        alt="Logo"
                        src={logo}
                    /> */}
          {/* <img src="logo-nobg.svg" alt="Logo" className="logo" /> */}
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              value={formData.username}
              onChange={handleInputChange}
              label="Username"
              name="username"
              autoComplete="username"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              value={formData.password}
              onChange={handleInputChange}
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              onClick={handleSubmit}
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
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
            <br />
            <Grid container>
              <Grid item >
                <Link style={{ cursor: 'pointer' }} onClick={()=>{navigate('/signup')}} variant="body2">
                  {"Don't have an account? Sign Up"} 
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Login;
