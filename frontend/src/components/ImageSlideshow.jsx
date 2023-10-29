import React, { useState, useEffect } from 'react';
import './stylesheet/imageSlidesshow.css';

const ImageSlideshow = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Create an interval to switch images every 3 seconds
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [images]);

  return (
    <div className="slideshow-container">
      {images.map((image, index) => (
        <div
          key={index}
          className={`slide ${index === currentImageIndex ? 'active' : ''}`}
        >
          <img src={image} alt="A scenic landscape" />
        </div>
      ))}
    </div>
  );
};

export default ImageSlideshow;
