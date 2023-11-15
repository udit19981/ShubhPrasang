import React, {useState, useEffect, lazy, Suspense} from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import "./header.css"
const NavigationLinks = lazy(() => import('./NavigationLinks'));
import { useNavigate } from "react-router-dom";

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

const Header = ({ userRole }) => {

  const navigate = useNavigate();
  
  const handleLogout = () => {
    // Clear the authentication information from local storage
    localStorage.removeItem('token');
    localStorage.removeItem('userRole');

    // Redirect to the logout or home page
    navigate('/login'); // Replace with the desired path
  };

  return (
    <HeaderContainer>
      <Logo>
        <LogoText>Shubh</LogoText>
        <LogoHighlight>Prasang</LogoHighlight>
      </Logo>
      <Suspense fallback={<div>Loading...</div>}>
        <Navigation>
          <NavigationLinks userRole={userRole} />
        </Navigation>
      </Suspense>
      <UserActions className="headerBtn">
        {userRole ? (
          <NavLink to="/login" onClick={handleLogout}>
            Logout
          </NavLink>
        ) : (
          <>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/signup">Sign up</NavLink>
          </>
        )}
      </UserActions>
    </HeaderContainer>
  );
};

export default Header;
