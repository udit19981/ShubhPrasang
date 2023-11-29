// EventPage.js
import React from 'react';
import { Button, Typography, Grid, Card, CardMedia, CardContent } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './events.css'; 
import eventImage1 from '../../../assets/images/event1.png';
import eventImage2 from '../../../assets/images/event2.png';
import eventImage3 from '../../../assets/images/event3.png';
import CustomButton from "../../../assets/theme/components/CustomButton";

function EventPage() {
  const navigate = useNavigate();

  const routeChange = (path) => {
    navigate(path);
  };

  return (
    <div className="event-page-container">
      <Typography variant="h1" fontSize="3rem" mb={4} gutterBottom>
        Events
      </Typography>
      <main>
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} sm={6} md={4}>
            <Card className="event-card">
              <CardMedia component="img" className='imgEvent' alt="wedding-event" height="140" image={eventImage2} />
              <CardContent>
                <CustomButton
                        backgroundColor="#E61F22"
                        color="#fff"
                        buttonText="WEDDING EVENT"
                        variant="contained"
                        href='/wedding'
                    />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className="event-card">
              <CardMedia component="img" className='imgEvent' alt="birthday-party" height="140" image={eventImage1} />
              <CardContent>
              <CustomButton
                        backgroundColor="#E61F22"
                        color="#fff"
                        buttonText="BIRTHDAY EVENT"
                        variant="contained"
                        href='/birthday'
                    />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className="event-card">
              <CardMedia component="img" className='imgEvent' alt="corporate-event" height="140" image={eventImage3} />
              <CardContent>
              <CustomButton
                        backgroundColor="#E61F22"
                        color="#fff"
                        buttonText="CORPORATE EVENT"
                        variant="contained"
                        href='/corporate'
                    />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </main>
    </div>
  );
}

export default EventPage;
