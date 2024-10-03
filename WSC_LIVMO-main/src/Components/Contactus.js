import React from 'react';

const ContactUs = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Contact Us</h1>
      <form>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" required />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" required />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea id="message" rows="4" required></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
      <div style={{ marginTop: "20px" }}>
        <h2>Our Location</h2>
        <div style={{ height: "400px", width: "100%" }}>
          <iframe
            loading="lazy"
            src="https://maps.google.com/maps?q=Greeta%20Techpark%2C%20Industrial%20Estate%2C%20Perungudi%2C%20Chennai%2C%20Tamil%20Nadu%20600096&amp;t=m&amp;z=15&amp;output=embed&amp;iwloc=near"
            title="Greeta Techpark, Industrial Estate, Perungudi, Chennai, Tamil Nadu 600096"
            style={{ width: "100%", height: "100%", border: 0 }}
            aria-label="Greeta Techpark, Industrial Estate, Perungudi, Chennai, Tamil Nadu 600096"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
