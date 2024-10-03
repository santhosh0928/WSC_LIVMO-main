import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const ContactUs = () => {
  const mapCenter = [13.011041, 80.22097]; 

  return (
    <><section className="contact_section">
    <div className="contact_content_wrapper">
      <div className="contact_form">
        <div className="contact_form_title">
          <h2>Contact Us</h2>
          <p>
            We Available Online. Connect with me via phone: {" "}
            <span>XXXXXXXXXX</span> or email: <span>XXXXXXXX@gmail.com</span>
          </p>
        </div>

        <div className="form">
          <div className="single_field">
            <input type="text" placeholder="Your name" name="name" />
          </div>
          <div className="single_field">
            <input type="email" placeholder="Your email" name="email" />
          </div>
          <div className="single_field">
            <textarea name="message" placeholder="Your message" rows="4"></textarea>
          </div>
          <div className="submit_button">
            <button type="submit">Send Message</button>
          </div>
        </div>
      </div>

      <div className="contact_img">
        <img src={ContactImg} alt="contact me" />
      </div>
      <div className="linked_button">
            <a href={ContactUs} target="_blank" rel="noopener noreferrer">
              <button>ContactUs</button>
            </a>
          </div>
          </div>
  </section>
    <div>
      <h1>Contact Us</h1>
      <MapContainer center={mapCenter} zoom={13} style={{ height: 400, width: 800 }}>
        <TileLayer
          attribution='&copy; <a href="https://www.bing.com/maps/geoplat/REST/v1/Imagery/Map/RoadVibrant/13.011041,80.22097/11?ms=648,345&amp;heid=7472826543023063041,707070&amp;fpp=13.011040687561035,80.2209701538086;178&amp;ml=Basemap,LandCover,Landmarks,OsmBuildings&amp;key=AnTcaqBi2ypp0xI-OZNi4W_ik2KhjgpqioTAtXLC8GzkMBQRMlyxvxyTnd5b73im&amp;c=en-US&amp;ur=in&amp;fmt=jpeg&amp;od=1&amp;shading=hill&amp;logo=n&amp;da=ro">OpenStreetMap</a> contributors'
          url='https://www.bing.com/maps/geoplat/REST/v1/Imagery/Map/RoadVibrant/13.011041,80.22097/11?ms=648,345&amp;heid=7472826543023063041,707070&amp;fpp=13.011040687561035,80.2209701538086;178&amp;ml=Basemap,LandCover,Landmarks,OsmBuildings&amp;key=AnTcaqBi2ypp0xI-OZNi4W_ik2KhjgpqioTAtXLC8GzkMBQRMlyxvxyTnd5b73im&amp;c=en-US&amp;ur=in&amp;fmt=jpeg&amp;od=1&amp;shading=hill&amp;logo=n&amp;da=ro'
        />
        <Marker position={mapCenter}>
          <Popup>
            WeStayClose <br /> Guindy, Tamil Nadu
          </Popup>
        </Marker>
      </MapContainer>
      <div className="contact-info">
        <h2>Get in Touch</h2>
        <p>Address: [Your Address]</p>
        <p>Phone: [Your Phone Number]</p>
        <p>Email: [Your Email]</p>
        <form>
          {/* Add your contact form here */}
        </form>
      </div>
    </div>
    </>
  );
};

export default ContactUs;