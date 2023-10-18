import React, { useState } from "react";
import './events.css';
import { Button, Card, CardContent, CardMedia, Grid } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import MarriageImage from '../../../images/marriage.jpg';
import BirthdayImage from '../../../images/birthday.jpg';
import EngagementImage from '../../../images/engagements.jpg';
import BachelorImage from '../../../images/bachelor.jpg';
import AnnualFunctionsImage from '../../../images/annual-functions.jpg';

const eventsData = [
  {
    image: MarriageImage,
    title: "Marriage",
    description: "A happy marriage is a long conversation which always seems too short.",
  },
  {
    image: BirthdayImage,
    title: "Birthday Parties",
    description: "Another adventure filled year awaits you.",
  },
  {
    image: EngagementImage,
    title: "Engagements",
    description: "The next chapter of the story begins.",
  },
  {
    image: BachelorImage,
    title: "Bachelor Parties",
    description: "Enjoy while you are young!",
  },
  {
    image: AnnualFunctionsImage,
    title: "Annual Functions",
    description: "The day of memorable events.",
  },
];

const Events = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPreviousEvent = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + eventsData.length) % eventsData.length);
  };

  const goToNextEvent = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % eventsData.length);
  };

  const currentEvent = eventsData[currentIndex];

  return (
    <div>
      <div className="events">
        <h1 style={{ color: 'black' }}>Our Events</h1>
        <Grid container alignItems="center" justifyContent="center">
          <Grid item xs={2}>
            <Button onClick={goToPreviousEvent}>
              <ArrowBackIosIcon />
            </Button>
          </Grid>
          <Grid item xs={8}>
            <Card>
              <CardMedia
                component="img"
                alt={currentEvent.title}
                height="300"
                image={currentEvent.image}
              />
              <CardContent>
                <h2 style={{ color: 'black' }}>{currentEvent.title}</h2>
                <p>{currentEvent.description}</p>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={2}>
            <Button onClick={goToNextEvent}>
              <ArrowForwardIosIcon />
            </Button>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Events;
