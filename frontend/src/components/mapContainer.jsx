import React, { Component } from 'react';

class PreferredLocationMap extends Component {
  componentDidMount() {
    // Load the Google Maps API script
    const script = document.createElement('script');
    // script.src = `http://maps.googleapis.com/maps/api/js?YOUR_API_KEY&callback=initMap`;
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    // Initialize the map
    window.initMap = this.initMap;
  }

  initMap = () => {
    const mapOptions = {
      center: { lat: 43.3977, lng: -80.4028 }, // Conestoga College coordinates
      zoom: 14, // Adjust the zoom level as needed
    };
    const map = new window.google.maps.Map(document.getElementById('map'), mapOptions);
    new window.google.maps.Marker({
      position: { lat: 43.3977, lng: -80.4028 }, // Conestoga College coordinates
      map: map,
      title: 'Conestoga College', // Set the title for Conestoga College
    });
  };

  render() {
    return <div id="map" style={{  width: '100%', height: '500px' }}></div>; // Adjust the height as needed
  }
}

export default PreferredLocationMap;
