import React, { useEffect, useState } from 'react';
import { Link} from "react-router-dom";
import axios from 'axios';
import './venueList.css'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import GroupsIcon from '@mui/icons-material/Groups';

const VenueList = () => {
  const [venues, setVenues] = useState([]);

  useEffect(() => {
    // Fetch venues from your API or server
    const fetchVenues = async () => {
      try {
        const response = await axios.get('/api/venues');
        setVenues(response.data);
      } catch (error) {
        console.error('Error loading Venue data:', error);
      }
    };

    fetchVenues();
  }, []);


  return (
    <div  className="fp">
      {venues.length > 0 ? (
        <>
            {venues.map((venue) => (
              <div className="fpItem" key={venue._id}>
                <Link to={`/fhalls/${venue._id}`}><img src={venue.imageUrl} alt="Venue" className="fpImg" /></Link>
                <span className="fpName">{venue.venueName}</span>
                <span className="fpCity"><LocationOnIcon/> {venue.address}</span>
                <span className="fpName">Event: {venue.occasionType}</span>
                <span className="fpName">Capacity: {venue.capacity} <GroupsIcon/></span>

              </div>
            ))}
            </>
      ) : (
        <p>No venues available.</p>
      )}
    </div>
  );
};

export default VenueList;
