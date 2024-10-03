import React from "react";
import CountUp from 'react-countup';
import "./Services.css"

import { RiMicroscopeLine } from "react-icons/ri";
import { MdHealthAndSafety, MdIntegrationInstructions } from "react-icons/md";
import { FaHeartbeat } from "react-icons/fa";
import ServicesCard from "../Layouts/ServicesCard";

const Services = () => {
  const icon1 = (
    <RiMicroscopeLine size={35} className=" text-backgroundColor" />
  );
  const icon2 = (
    <MdHealthAndSafety size={35} className=" text-backgroundColor" />
  );
  const icon3 = <FaHeartbeat size={35} className=" text-backgroundColor" />
  const icon5 = <FaHeartbeat size={35} className=" text-backgroundColor" />
  const icon6 = <FaHeartbeat size={35} className=" text-backgroundColor" />
  const icon4 = <FaHeartbeat size={35} className=" text-backgroundColor" />;

  return (
    <>
    <div className=" min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-24 lg:pt-16">
      <div className=" flex flex-col items-center justify-between">
        <div>
          <h1 className=" text-4xl font-semibold text-center lg:text-center">
          Core Services
          </h1>
          <p className=" mt-2 text-center lg:text-center">
          <span>As a healthcare advocate and coordinator service provider, <br/>
            WESTAYCLOSE understands the importance of caring for your loved ones while also managing your busy schedule. <br/>Our personalized support services are designed to save you time and alleviate the stress of navigating the healthcare system, <br/>allowing you to focus on what matters most - caring for your family and friends.
          </span></p>
        </div>
      </div>
      <div className=" flex flex-col lg:flex-row gap-5 pt-14">
        <ServicesCard 
        icon={icon1} 
        title="Comprehensive Advocacy and Coordination Services" 
        Desc="At WESTAYCLOSE, we understand that navigating the healthcare system can be overwhelming."/>
        <ServicesCard icon={icon2} 
        title="Holistic Healthcare Solutions"
         Desc="We believe that true wellness encompasses more than just medical care." />
        <ServicesCard icon={icon3} 
        title="Collaborations for Comprehensive Care" 
        Desc="At WESTAYCLOSE, we believe that delivering exceptional healthcare advocacy and coordination services"/>
      </div>
      <div className=" flex flex-col lg:flex-row gap-5 pt-14">
        <ServicesCard icon={icon4}
         title="Our Network of Partners"
         Desc="We've carefully selected our partners to provide our clients with seamless access to:"/>
        <ServicesCard icon={icon5} 
        title="Streamlined Care through Collaboration"
        Desc="Our partnerships enable us to coordinate care across multiple providers, ensuring that our clients receive seamless,"/>
        <ServicesCard icon={icon6} 
        title="Partner with WESTAYCLOSE" 
        Desc="We've carefully selected our partners to provide our clients with seamless access to:"
        />
      </div>
      
    </div>
    <div>
  {/* Counter Section */}
  <section className="counter-section">
    <div className="counter-container">
      {/* Healthcare Experience Counter */}
      <div className="counter-column">
        <div className="counter-widget">
          
          <div className="counter-number">
            <CountUp end={10} duration={2} suffix="+" />
            <div className="counter-title">HEALTH CARE EXPERIENCE</div>
          </div>
        </div>
      </div>
      {/* Customer Support Counter */}
      <div className="counter-column">
        <div className="counter-widget">
          
          <div className="counter-number">
            <CountUp end={100} duration={2} suffix="%" />
            <div className="counter-title">CUSTOMER SUPPORT</div>
          </div>
        </div>
      </div>
      {/* Timely Service Counter */}
      <div className="counter-column">
        <div className="counter-widget">
          
          <div className="counter-number">
            <CountUp end={95} duration={2} suffix="%" />
            <div className="counter-title">TIMELY SERVICE</div>
          </div>
        </div>
      </div>
      {/* On-Demand Assistance Counter */}
      <div className="counter-column">
        <div className="counter-widget">
         
          <div className="counter-number">
            <CountUp end={97} duration={2} suffix="%" />
            <div className="counter-title">On-Demand Assistance</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>
    </>
  );
};

export default Services;