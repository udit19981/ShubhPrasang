// EventPage.js
import React from 'react';
import { Button, Typography, Grid, Card, CardMedia, CardContent } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './events.css'; 
import eventImage1 from '../../../assets/images/event1.png';
import eventImage2 from '../../../assets/images/event2.png';
import eventImage3 from '../../../assets/images/event3.png';

function EventPage() {
  const navigate = useNavigate();

  const routeChange = (path) => {
    navigate(path);
  };

  return (
    <div className="event-page-container">
      <Typography variant="h4"mb={4} gutterBottom>
        Events
      </Typography>
      <main>
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} sm={6} md={4}>
            <Card className="event-card">
              <CardMedia component="img" className='imgEvent' alt="Wedding Event" height="140" image={eventImage2} />
              <CardContent>
                <Button
                  onClick={() => routeChange('./wedding')}
                  variant="contained"
                  color="primary"
                  className="eventBtn"
                  style={{ backgroundColor: '#17a1c3' }}
                >
                  Wedding Event
                </Button>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className="event-card">
              <CardMedia component="img" className='imgEvent' alt="Birthday Party" height="140" image={eventImage1} />
              <CardContent>
                <Button
                  onClick={() => routeChange('./birthday')}
                  variant="contained"
                  color="primary"
                  className="eventBtn"
                  style={{ backgroundColor: '#17a1c3' }}
                >
                  Birthday Party
                </Button>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className="event-card">
              <CardMedia component="img" className='imgEvent' alt="Corporate Event" height="140" image={eventImage3} />
              <CardContent>
                <Button
                  onClick={() => routeChange('./corporate')}
                  variant="contained"
                  color="primary"
                  className="eventBtn"
                  style={{ backgroundColor: '#17a1c3' }}
                >
                  Corporate Event
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </main>
    </div>
  );
}

export default EventPage;
