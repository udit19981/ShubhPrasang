// EventPage.js
import React from 'react';
import './events.css'
import eventImage1 from '../../assets/images/event1.png';
import eventImage2 from '../../assets/images/event2.png';
import eventImage3 from '../../assets/images/event3.png';
import { useNavigate } from "react-router-dom";

function EventPage() {
  let navigate = useNavigate(); 
  const routeChange1 = () =>{ 
    let path = './wedding'; 
    navigate(path);
  }
  const routeChange2 = () =>{ 
    let path = './birthday'; 
    navigate(path);
  }
  const routeChange3 = () =>{ 
    let path = './corporate'; 
    navigate(path);
  }
  return (
    <div>
      <header>
        <h1>Plan The Perfect Event</h1>
      </header>
      <main>
        <div className='eventSubContainer'>
        <section className='eventSection'>
          <img src={eventImage2} alt="A scenic landscape" />
          <button onClick={routeChange1} className='eventBtn'>Wedding Event</button>
        </section>
        <section className='eventSection'>
          <img src={eventImage1} alt="A scenic landscape" />
          <button onClick={routeChange2} className='eventBtn'>Birthday Party</button>
        </section>
        <section className='eventSection'>
          <img src={eventImage3} alt="A scenic landscape" />
          <button onClick={routeChange3} className='eventBtn'>Corporate Event</button>
        </section>
        </div>
      </main>
     
    </div>
  );
}

export default EventPage;
