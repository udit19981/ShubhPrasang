import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: #333333;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
`;

const Logo = styled.div`
  font-family: 'DM Sans', sans-serif;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const LogoText = styled.div`
  font-family: system-ui;
  font-weight: bold;
  font-size: 20px;
  color: white;
`;

const LogoHighlight = styled.div`
  font-family: system-ui;
  font-weight: bold;
  font-size: 20px;
  color: #7848f4;
`;

const Navigation = styled.nav`
  ul {
    list-style: none;
    display: flex;
  }
  li {
    margin-right: 20px;
  }
  a {
    text-decoration: none;
    color: white;
    transition: color 0.3s;
  }
  a:hover {
    color: #7848f4;
  }
`;

const UserActions = styled.div`
  a {
    text-decoration: none;
    background-color: #7848f4;
    color: white;
    border-radius: 5px;
    padding: 5px 10px;
    margin-left: 10px;
   
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Logo>
        <LogoText>Shubh</LogoText>
        <LogoHighlight>Prasang</LogoHighlight>
      </Logo>
      <Navigation>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/events">Events</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li>
            <NavLink to="/about">About us</NavLink>
          </li>
          <li>
            <NavLink to="/Venue">Venue</NavLink>
          </li>
          <li>
            <NavLink to="/Usermgmt">Usermgmt</NavLink>
          </li>
          <li>
            <NavLink to="/Dashboard">Dashboard</NavLink>
          </li>
          <li>
            <NavLink to="/Organizer">Organizer</NavLink>
          </li>
        </ul>
      </Navigation>
      <UserActions className='headerBtn'>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/signup">Sign up</NavLink>
      </UserActions>
    </HeaderContainer>
  );
};

export default Header;
