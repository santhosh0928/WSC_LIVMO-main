import React from "react";
import img from "../assets/img/about.jpg";
import { useNavigate  } from "react-router-dom";



  function About() {
    const navigate = useNavigate();
  
    const handleBookAppointmentClick = () => {
      navigate("/aboutus");
    };

  return (
    <>
      <div className="min-h-screen flex flex-col lg:flex-row justify-between items-center lg:px-32 px-5 pt-24 lg:pt-16 gap-5">
        <div className="w-full lg:w-3/4 space-y-4">
          <h1 className="text-4xl font-semibold text-center lg:text-start">About Us</h1>
          <p className="text-justify lg:text-start">
            WESTAYCLOSE is a dedicated healthcare advocate service provider committed to enhancing patient experiences and outcomes.
          </p>
          
          
          <button
          className="text-appointment-btn"
          type="button"
          onClick={handleBookAppointmentClick}
        >
           Readmore
        </button>
        </div>

        <div className="w-full lg:w-3/4">
          <img className="rounded-lg" src={img} alt="about us" />
        </div>
      </div>
    </>
  );
};

export default About;