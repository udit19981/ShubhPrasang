// HomePage.js
import React from 'react';
import eventImage1 from '../../assets/images/event1.jpeg';
import eventImage2 from '../../assets/images/event2.jpeg';
import eventImage3 from '../../assets/images/event3.jpeg';
import eventImage4 from '../../assets/images/event4.jpeg';
import eventImage5 from '../../assets/images/event5.jpeg';
import ImageSlideshow from '../ImageSlideshow';
import EventTagline from '../eventTagLine';
import SearchBar from '../searchBar';

function HomePage() {
  const images = [
    eventImage1,
    eventImage2,
    eventImage3,
    eventImage4,
    eventImage5,
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
      <div className="App">
      <h1>Image Slideshow</h1>
      <ImageSlideshow images={images} />
    </div>
    <div style={sectionContainer}>
        <section>
          <h2>About Us</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            quis ante ac arcu varius fermentum at vitae leo. Sed euismod, diam
            quis ultricies gravida, justo neque tincidunt ligula, at
            vestibulum purus nunc quis urna.
          </p>
        </section>
        <section>
          <h2>Services</h2>
          <p>
            We offer a wide range of services to meet your needs. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Nullam quis ante ac
            arcu varius fermentum at vitae leo.
          </p>
        </section>
        <section>
          <h2>Contact Us</h2>
          <p>
            If you have any questions or would like to get in touch, please
            contact us. Nullam quis ante ac arcu varius fermentum at vitae leo.
          </p>
        </section>
        </div>
      </main>
      <footer>
        <p>&copy; 2023 ShubhPrasang</p>
      </footer>
    </div>
  );
}

export default HomePage;