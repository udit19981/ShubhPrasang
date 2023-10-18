import React from "react";
import './home.css'

const Home = () => {
  return (
    <div className="homepage">
      <section className="section">
        <h1 className="big-text">Event Planning is Hard</h1>
        <p>We can help you</p>
      </section>
      <section className="section">
        <div className="content">
          <h2>About Us</h2>
          <p>
            ShubhPrasang is a full-service event management firm based in Ontario that was created by pairing together our passion for business and events. We bring a fresh, unique approach to the event management industry. Our team understands that a properly executed event can be leveraged to support an organization’s strategic vision, incorporated into a company’s marketing plan, or used to build networks and client loyalty.
          </p>
        </div>
      </section>
      <section className="section">
        <h1 className="big-text">Event Planning is our passion</h1>
      </section>
      <section className="section">
        <div className="content">
          <h2>Our Approach</h2>
          <p>
            ShubhPrasang approaches every project with meticulous attention to detail and obsessive precision. Regardless of size and scope, we treat your event like a business with clear strategic goals, defined milestones, and a comprehensive plan to ensure that your event is delivered on time and on budget. At Spark, we put your organization first. We learn about your business, we focus on your challenges, and we plan events to support your goals.
          </p>
        </div>
      </section>
    </div>
  )
}

export default Home;