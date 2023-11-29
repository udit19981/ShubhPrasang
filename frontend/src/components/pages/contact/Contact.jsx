import React, { useState } from "react";
import { TextField, Button, Grid, Typography } from "@mui/material";
import contactImage from "../../../assets/images/event3.png";
import "./contact.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    phoneNumber: "",
    subject: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    subject: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // Clear previous error on change
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { name: "", email: "", phoneNumber: "", subject: "" };

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    } else if (!/^[a-zA-Z]+$/.test(formData.name.trim())) {
      newErrors.name = "Name should contain only alphabets";
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      newErrors.email = "Invalid email address";
      isValid = false;
    }

    const phoneRegex = /^\d{10}$/; // Assuming a 10-digit phone number
    if (
      !formData.phoneNumber.trim() ||
      !phoneRegex.test(formData.phoneNumber)
    ) {
      newErrors.phoneNumber = "Invalid phone number";
      isValid = false;
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log(formData);
      setFormData({
        name: "",
        email: "",
        message: "",
        phoneNumber: "",
        subject: "",
      });
    } else {
      console.log("Form has errors. Please fix them.");
    }
  };

  return (
    <div className="container">
      {/* <div style={{ width: '100%' }}>
        <img className='img' src={contactImage} alt='img' style={{ width: '100%', height: '100%' }} />
      </div> */}
      <Typography textAlign="center" variant="h1" fontSize="3rem" gutterBottom>
        Contact Us
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Name"
              name="name"
              fullWidth
              required
              variant="outlined"
              value={formData.name}
              onChange={handleChange}
              error={!!errors.name}
              helperText={errors.name}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Email"
              name="email"
              fullWidth
              required
              variant="outlined"
              value={formData.email}
              onChange={handleChange}
              error={!!errors.email}
              helperText={errors.email}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Phone Number"
              name="phoneNumber"
              fullWidth
              required
              variant="outlined"
              value={formData.phoneNumber}
              onChange={handleChange}
              error={!!errors.phoneNumber}
              helperText={errors.phoneNumber}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Subject"
              name="subject"
              fullWidth
              required
              variant="outlined"
              value={formData.subject}
              onChange={handleChange}
              error={!!errors.subject}
              helperText={errors.subject}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Message"
              name="message"
              fullWidth
              required
              variant="outlined"
              rows={4}
              value={formData.message}
              onChange={handleChange}
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          size="large"
          style={{ marginTop: "16px" }}
          fullWidth
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
