import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';
import Header from './components/header/Header'
import Home from './components/pages/home/Home'
import Events from './components/pages/events/Events'
import Contact from './components/pages/contact/Contact'
import About from './components/pages/about/About'
import Signup from './components/pages/signup/Signup'
import Login from './components/pages/login/Login'

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
