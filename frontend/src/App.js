import './App.css';
import React, {useState, useEffect}  from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/pages/login/Login';
import Signup from './components/pages/signup/Signup';
import Header from './components/header/Header';
import ShubhPrasangAboutUs from './components/pages/about/About';
import ContactForm from './components/pages/contact/Contact';
import EventPage from './components/pages/events/Events';
import Wedding from './components/pages/events/wedding';
import Birthday from './components/pages/events/birthday';
import Corporate from './components/pages/events/corporate';
import HomePage from './components/pages/home/Home';
import Footer from './components/footer/Footer';
import Venue from './components/admin/Venue';
import Usermgmt from './components/admin/Usermgmt';
import Dashboard from './components/admin/Dashboard';
import OrganizerForm from './components/admin/Organizer';
import AdminLogin from './components/admin/AdminLogin';
import ListFeatured from './components/pages/listfeatured/ListFeatured';
import CheckoutPage from './components/pages/checkout/CheckoutPage';
import VenuePage from './components/pages/venuePage/VenuePage'

function App() {

  const [userRole, setUserRole] = useState(null);

  useEffect(() => {
    const storedUserRole = localStorage.getItem('userRole');
    setUserRole(storedUserRole);
  }, []);

  return (  
    <Router>
    
    <div className='App'>
      <Header className="header" userRole={userRole}/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/about" element={<ShubhPrasangAboutUs/>} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/events" element={<EventPage/>} />
        <Route path="events/wedding" element={<Wedding />} />
        <Route path="events/birthday" element={<Birthday />} />
        <Route path="events/corporate" element={<Corporate />} />
        <Route path="/Venue" element={<Venue/>}/>
        <Route path='/Usermgmt' element={<Usermgmt/>}/>
        <Route path='/Dashboard' element={<Dashboard/>}/>
        <Route path='/Organizers' element={<OrganizerForm/>}/>
        <Route path='/AdminLogin' element={<AdminLogin/>}/>
        <Route path="/fhalls/:id" element={<ListFeatured/>} />
        <Route path='/CheckoutPage' element={<CheckoutPage/>}  />
        <Route path='/VenuePage' element={<VenuePage />}  />
        
      </Routes>
    </div>
    <Footer className="footer" />
  </Router>
      
  );
}

export default App;
