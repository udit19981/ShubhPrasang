import './App.css';
import React, {useState, useEffect} from 'react';
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
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import ListFeatured from './components/pages/listfeatured/ListFeatured';

function App() {
  const [userRole, setUserRole] = useState(null);

  useEffect(() => {
    const storedUserRole = localStorage.getItem('userRole');
    setUserRole(storedUserRole);
  }, []);


  return (
    
    <Router>
      <Header className="header" userRole={userRole}/>
    <div className='App'>
      <Routes>
        <Route path="/" element={<HomePage/>} />
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
        <Route path='/Organizer' element={<OrganizerForm/>}/>
        <Route path='/AdminLogin' element={<AdminLogin/>}/>
        <Route path="/fhalls/:id" element={<ListFeatured/>} />
      </Routes>
    </div>
    <Footer className="footer" />
  </Router>
      
  );
}

export default App;
