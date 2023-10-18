import React from 'react';
import styled from 'styled-components';
import 'font-awesome/css/font-awesome.min.css';
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

const FooterContainer = styled.footer`
  background-color: #333333;
  color: white;
  padding: 20px;
`;

const container = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

const FooterText = styled.div`
  font-family: 'DM Sans', sans-serif;
`;

const SocialMediaLinks = styled.div`
  a {
    text-decoration: none;
    color: white;
    margin-right: 20px;
    font-size: 24px;
  }
  a:hover {
    color: #7848f4;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <div style={container}>
        <FooterText>&copy; 2023 ShubhPrasang</FooterText>
        <SocialMediaLinks>
          <a href="https://www.facebook.com"><i className="fab fa-facebook"></i></a>
          <a href="https://www.twitter.com"><i className="fab fa-twitter"></i></a>
          <a href="https://www.linkedin.com"><i className="fab fa-linkedin"></i></a>
          <a href="https://www.instagram.com"><i className="fab fa-instagram"></i></a>
        </SocialMediaLinks>
      </div>
    </FooterContainer>
  );
};

export default Footer;
