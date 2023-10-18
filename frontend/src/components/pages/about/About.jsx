import React from 'react';
import { Typography, Container, Box } from '@mui/material';

const About = () => {
  return (
    <Container maxWidth="md">
      <Box textAlign="center" marginTop={3} marginBottom={3}>
        <Typography variant="h4">About Us</Typography>
      </Box>

      <Typography variant="h6" gutterBottom>
        Our Belief
      </Typography>
      <Typography paragraph>
        ShubhPrasang is a highly creative event design and management available for weddings and all the events. We are one of the leading event management with a talented team of dedicated event professionals with creativity and innovation. We are also passionate about transforming spaces and creating events that are genuinely unique.
      </Typography>

      <Typography variant="h6" gutterBottom>
        Vision
      </Typography>
      <Typography paragraph>
        We are here to let you enjoy your piece of cake while we walk the extra mile for you and offer a "One stop Shoppe" for all your event management requirements. An Event Organizer in Canada.
      </Typography>

      <Typography variant="h6" gutterBottom>
        Mission
      </Typography>
      <Typography paragraph>
        We strive to achieve the very best in quality and elegance for the client. From events which are close to heart like birthday parties to significant events like Marriages, we take a challenge and make sure each and every requirement of the client is met. We have been in all the corners, and with that, we bring to the table what you deserve, the best event management company in Canada.
      </Typography>
    </Container>
  );
};

export default About;
