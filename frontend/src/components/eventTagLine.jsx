import React from 'react';
import styled from 'styled-components';

const EventTaglineContainer = styled.div`
  background-size: cover;
  background-position: center;
  color: grey;
  text-align: center;
  padding: 20px 0;
`;

const Tagline = styled.h1`
  font-size: 36px;
  margin: 0;
`;

const Description = styled.p`
  font-size: 20px;
`;

const EventTagline = () => {
  return (
    <EventTaglineContainer>
      <Tagline>ShubhPrasang Event Portal</Tagline>
      <Description>We Turn Your Ideas into Unforgettable Moments.</Description>
    </EventTaglineContainer>
  );
};

export default EventTagline;
