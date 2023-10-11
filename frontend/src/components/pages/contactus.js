import React, { useState } from 'react';
import '../stylesheet/contactform.css';

function ContactForm() {
  // Define state variables for form inputs
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission logic here, such as sending data to a server.
    // For now, let's just log the form data.
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    // Clear form inputs
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <section>
      <h2>Contact Information</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </section>
  );
}

export default ContactForm;
