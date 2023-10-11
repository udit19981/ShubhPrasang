import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/login/login';
import Signup from './components/signup/signup';
import Header from './components/header/header';
import AboutUsPage from './components/pages/aboutus';
import ContactForm from './components/pages/contactus';
import EventPage from './components/pages/events';
import HomePage from './components/pages/home';
import Footer from './components/footer/footer';

function App() {
  return (
    
    <Router>
      <Header />
    <div className='App'>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/about" element={<AboutUsPage/>} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/events" element={<EventPage/>} />
      </Routes>
    </div>
      <Footer />
  </Router>
      
  );
}

export default App;
