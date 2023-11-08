// HomePage.js
import React from 'react';
import eventImage1 from '../../../assets/images/event1.png';
import eventImage2 from '../../../assets/images/event2.png';
import eventImage3 from '../../../assets/images/event3.png';
import eventImage4 from '../../../assets/images/event4.png';
import ImageSlideshow from '../../ImageSlideshow';
import EventTagline from '../../eventTagLine';
import SearchBar from '../../searchBar';
import PreferredLocationMap from '../../mapContainer';
import MyCarousel from '../../MyCarousel';
import './home.css';
import VenueList from '../venue/VenueList';

function HomePage() {
  const images = [
    eventImage1,
    eventImage2,
    eventImage3,
    eventImage4,
  ];

  const handleSearch = (searchText) => {
    console.log('Searching for:', searchText);
  };
  const customStyles = {
    color: 'grey',
    backgroundColor: 'red',
    height: '2px',
    border: 'none',
  };
  const mapContainer = {
    
    height: '20%',
    width: '100%'

  }

  const sectionContainer ={
    display:'flex',
    flexDirection:'row'
  }
  return (
    <div>
      <header>
        <h1>Welcome to </h1>
        <EventTagline />
      </header>
      <hr style={customStyles} /> 
      <SearchBar onSearch={handleSearch} />
      <main>
      <div className='mainContainer'>

      <h1>Image Slideshow</h1>
      <div className='imgContainer'>
      <div className='imgSlider'>
      <ImageSlideshow className='img1' images={images} />
      </div>
      </div>
    </div>
    <hr style={customStyles} /> 
    <div>
      <h1>Browse by EventType
Preferred Locations</h1>
      <MyCarousel />
    </div>
    <hr style={customStyles} /> 
    <div>
      <h1>Venues</h1>
      <VenueList />
    </div>
    <hr style={customStyles} /> 
    <div style={sectionContainer}>
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
        <hr style={customStyles} /> 
        <h1>Preferred Locations</h1>
        <div style={mapContainer}>
        <PreferredLocationMap />
        </div>
      </main>
    </div>
  );
}

export default HomePage;
