import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './MyCarousel.css';

const MyCarousel = () => {

  const Style = {
    backgroundColor:'#333333',
    height: '300px',
    width: '80%',
    margin: '0 auto',
  }
  
  const responsive = {

    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <Carousel className='Carousel1' Style={Style} responsive={responsive}>
      <div className='innerDiv'>Item 1</div>
      <div className='innerDiv'>Item 2</div>
      <div className='innerDiv'>Item 3</div>
      <div className='innerDiv'>Item 4</div>
      <div className='innerDiv'>Item 1</div>
      <div className='innerDiv'>Item 2</div>
      <div className='innerDiv'>Item 3</div>
      <div className='innerDiv'>Item 4</div>
    </Carousel>
  );
};

export default MyCarousel;
