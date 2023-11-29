// HomePage.js
import React from 'react';
import eventImage1 from '../../../assets/images/event1.png';
import eventImage2 from '../../../assets/images/event2.png';
import eventImage3 from '../../../assets/images/event3.png';
import eventImage4 from '../../../assets/images/event4.png';
import ImageSlideshow from '../../ImageSlideshow';
import './home.css';
import EventPage from '../events/Events';
import VenueList from '../venue/VenueList';


function HomePage() {
  const images = [
    eventImage1,
    eventImage2,
    eventImage3,
    eventImage4,
  ];

  return (
    <div className='content'>
      <main>
      <div className='mainContainer'>
      <div className='imgContainer'>
      <div className='imgSlider'>
      <ImageSlideshow className='img1' images={images} />
      </div>
      </div>
    </div>

    <div className='event'>
      <EventPage/>
    </div>
    <div className='venue'>
      <VenueList />
    </div>
    
    <div className='sectionContainer'>
        <section className='homeSection'>
          <h2>About Us</h2>
          <p>
          Shubhprasang Events crafts unforgettable experiences. 
          From corporate gatherings to magical weddings, our expert team ensures seamless, 
          personalized events that reflect your unique style. Join us in creating lasting memories.
          </p>
        </section>
        <section className='homeSection'>
          <h2>Services</h2>
          <p>
          Shubhprasang Events offers a diverse array of services tailored to your requirements. 
          Our offerings include comprehensive event planning and execution, 
          ensuring a seamless and unforgettable experience for you and your guests.
          </p>
        </section>
        <section className='homeSection'>
          <h2>Contact Us</h2>
          <p>
          For any inquiries or to get in touch, please reach out to us. We look forward to hearing from you.  
          </p>
        </section>
        </div>
      </main>
    </div>
  );
}

export default HomePage;
