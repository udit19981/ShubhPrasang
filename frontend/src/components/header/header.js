import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;

const container = {
  display: 'flex',
  flexDirection: 'row',

};
const Logo = styled.div`
  font-family: 'DM Sans', sans-serif;
  display: flex;
  align-items: center;
`;

const LogoText = styled.div`
  font-family: system-ui;
  font-weight: bold;
  font-size: 20px;
  color: black;
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
    color: black;
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
      <div style={container}>
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
            <NavLink to="/about">About us</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </Navigation>
      <UserActions>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/signup">Sign up</NavLink>
      </UserActions>
      </div>
    </HeaderContainer>
  );
};

export default Header;
