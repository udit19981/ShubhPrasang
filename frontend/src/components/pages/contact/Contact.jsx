import React, { useState } from 'react';
import { TextField, Button, Grid, Typography } from '@mui/material';
import contactImage from '../../../assets/images/event3.png'
import './contact.css'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
   
    <div className='container' >
      <div>
        <img className='img' src={contactImage} alt='img'/>
      </div>
      <form onSubmit={handleSubmit}>
        <Typography textAlign="center" variant="h4" gutterBottom>
          Contact Us
        </Typography>
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
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Message"
              name="message"
              fullWidth
              required
              variant="outlined"
              multiline
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
          style={{ marginTop: '16px' }}
          fullWidth
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;



