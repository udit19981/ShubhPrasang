// ShubhPrasangAboutUs.js
import React from "react";
import "./about.css"; // Import your CSS file
import nikunjImage from "../../../assets/images/nikunj1.png";
import uditImage from "../../../assets/images/Udit.png";
import akashImage from "../../../assets/images/Akaash.jpg";
import deepImage from "../../../assets/images/deep.jpeg";
// import teammember from "../../../assets/images/teammember.png";
import { Typography} from '@mui/material';

function ShubhPrasangAboutUs() {
  const customStyles = {
    color: "red",
    backgroundColor: "red",
    height: "2px",
    border: "none",
  };
  const aboutSection = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    // justifyContent:'space-between'
  };

  return (
    <div className="about-us-container">
      <section className="about-us-section">
        <Typography variant="h1" fontSize="2rem" mb={4} gutterBottom>
          About ShubhPrasang
        </Typography>
        <div className="para">
          ShubhPrasang is your trusted partner in creating unforgettable events.
          We specialize in event planning and management, making every occasion
          truly special and memorable.
        </div>
        <div>
          Our mission is to bring your dreams to life, whether it's a wedding,
          corporate event, or any other special occasion. With our dedicated
          team of event experts, we take care of every detail, ensuring a
          seamless and stress-free experience for our clients.
        </div>
      </section>
      <hr style={customStyles} />
      <div style={aboutSection}>
        <section className="team-section">
          <h2>Meet Our Team</h2>
          <div className="team-member">
            <img src={nikunjImage} alt="Team Member 1" />
            <h3>Nikunj Patel</h3>
            <p>Full Stack developer</p>
          </div>
          <hr style={customStyles} />
          <div className="team-member">
            <img src={uditImage} alt="Team Member 2" />
            <h3>Udit avaiya</h3>
            <p>Full Stack developer</p>
          </div>
          <hr style={customStyles} />
          <div className="team-member">
            <img src={deepImage} alt="Team Member 3" />
            <h3>Deep Patel</h3>
            <p>Full Stack developer</p>
          </div>
          <hr style={customStyles} />
          <div className="team-member">
            <img src={akashImage} alt="Team Member 4" />
            <h3>Akash Singh</h3>
            <p>Full Stack developer</p>
          </div>
        </section>

        <section className="testimonials-section">
          <h2>What Our Clients Say</h2>
          <div className="testimonial">
            <blockquote>
              ShubhPrasang made our wedding day absolutely magical. Their
              attention to detail and creativity exceeded our expectations.
            </blockquote>
            <span>- Happy Couple</span>
          </div>
          <div className="testimonial">
            <blockquote>
              We couldn't have pulled off our corporate event without
              ShubhPrasang. Their professionalism and expertise were
              outstanding.
            </blockquote>
            <span>- Satisfied Client</span>
          </div>
          {/* Add more testimonials as needed */}
        </section>
      </div>
    </div>
  );
}

export default ShubhPrasangAboutUs;
