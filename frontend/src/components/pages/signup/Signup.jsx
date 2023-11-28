import React, { useState } from "react";
import {
  TextField,
  Button,
  Container,
  Grid,
  MenuItem,
  Paper,
  Typography,
  CssBaseline,
  Avatar,
} from "@mui/material";
import bcrypt from "bcryptjs";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "user",
    secretKey: "",
    phone: "",
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const [isRegistered, setIsRegistered] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const clearErrors = () => {
    setErrors({});
  };

  const handleSubmit = async () => {
    // Validate fields
    const newErrors = {};

    if (!/^[A-Za-z0-9]+$/.test(formData.username)) {
      newErrors.username = "Username should only contain letters and numbers.";
    }

    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formData.email)) {
      newErrors.email = "Invalid email address.";
    }

    if (
      formData.password.length < 8 ||
      formData.password !== formData.confirmPassword
    ) {
      newErrors.password =
        "Password must be at least 8 characters and match confirm password.";
    }

    if (formData.role === "admin" && formData.secretKey !== "shubh") {
      newErrors.secretKey = "Invalid secret key.";
    }

    if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone number should be a 10-digit number.";
    }

    if (Object.keys(newErrors).length === 0) {
      const hashedPassword = await bcrypt.hash(formData.password, 10);

      // Create a new user object with the hashed password
      const newUser = {
        username: formData.username,
        email: formData.email,
        password: hashedPassword,
        role: formData.role,
        phone: formData.phone,
      };

      try {
        const response = await fetch("/api/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newUser),
        });

        if (response.status === 200) {
          setSuccessMessage("Registered successfully!");
          setIsRegistered(true);
          setFormData({
            username: "",
            email: "",
            password: "",
            confirmPassword: "",
            role: "user",
            secretKey: "",
            phone: "",
          });
          clearErrors(); // Clear errors when the form is reset
        } else if (response.status === 400) {
          newErrors.server = "User already exists!";
          setErrors(newErrors);
        } else {
          setSuccessMessage("Signup failed. Please try again.");
        }
      } catch (error) {
        console.error("Error:", error);
        setSuccessMessage("Signup failed. Please try again.");
      }
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <Container component="main" sx={{ marginTop: 4 }} maxWidth="xs">
      <CssBaseline />
      <Paper
        sx={{
          padding: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h2" sx={{ marginBottom: 2 }} variant="h5">
          Signup
        </Typography>
        <form noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                name="username"
                label="Username"
                value={formData.username}
                onChange={handleInputChange}
                helperText={errors.username}
                error={!!errors.username}
                fullWidth
                required
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                name="email"
                label="Email"
                value={formData.email}
                onChange={handleInputChange}
                helperText={errors.email}
                error={!!errors.email}
                fullWidth
                required
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                name="phone"
                label="Phone"
                value={formData.phone}
                onChange={handleInputChange}
                helperText={errors.phone}
                error={!!errors.phone}
                fullWidth
                required
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                name="role"
                select
                label="Role"
                value={formData.role}
                onChange={handleInputChange}
                fullWidth
              >
                <MenuItem value="user">User</MenuItem>
                <MenuItem value="admin">Admin</MenuItem>
              </TextField>
            </Grid>

            {formData.role === "admin" && (
              <Grid item xs={12}>
                <TextField
                  name="secretKey"
                  label="Secret Key"
                  type="password"
                  value={formData.secretKey}
                  onChange={handleInputChange}
                  helperText={errors.secretKey}
                  error={!!errors.secretKey}
                  fullWidth
                />
              </Grid>
            )}

            <Grid item xs={12}>
              <TextField
                name="password"
                label="Password"
                type="password"
                value={formData.password}
                onChange={handleInputChange}
                helperText={errors.password}
                error={!!errors.password}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="confirmPassword"
                label="Confirm Password"
                type="password"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                helperText={errors.password}
                error={!!errors.password}
                fullWidth
                required
              />
            </Grid>
          </Grid>

          <Button
            onClick={handleSubmit}
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2 }}
          >
            Signup
          </Button>
        </form>

        {errors.server && (
          <Typography variant="body2" color="error" sx={{ mt: 1 }}>
            {errors.server}
          </Typography>
        )}
        {successMessage && <div>{successMessage}</div>}
      </Paper>
    </Container>
  );
};

export default Signup;
