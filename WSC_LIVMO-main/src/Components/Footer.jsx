import React from "react";
import { Link } from "react-scroll";
import logo from './logo.png';
import SocialMedia from "./SocialMedia";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className=" bg-backgroundColor text-white rounded-t-3xl mt-8 md:mt-0">
      <div className="flex flex-col md:flex-row justify-between p-8 md:px-32 px-5">
        <div className=" w-full md:w-1/4">
        <Link to="home" spy={true} smooth={true} duration={500}>
  <img 
      src={logo}
      alt="WeStayClose Logo" 
      className="w-[100px] h-[100px] object-contain"
    />
  </Link>
          <h1 className=" font-semibold text-xl pb-4">WeStayClose</h1>
          <p className=" text-sm">
          Empower patients through education and advocacy, fostering a more transparent and accessible healthcare environment.
          </p>
        </div>
        <div>
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">About Us</h1>
          <nav className=" flex flex-col gap-2">
            <Link
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-hoverColor transition-all cursor-pointer"
            >
              About
            </Link>
            <Link
              to="services"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-hoverColor transition-all cursor-pointer"
            >
              Services
            </Link>
            <Link
              to="Our Team"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-hoverColor transition-all cursor-pointer"
            >
              Our Team
            </Link>
          </nav>
        </div>
        <div>
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">Services</h1>
          <nav className=" flex flex-col gap-2">
            <Link
              to="services"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-hoverColor transition-all cursor-pointer"
            >
              Lab Test
            </Link>
            <Link
              to="services"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-hoverColor transition-all cursor-pointer"
            >
              Health Check
            </Link>
            <Link
              to="services"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-hoverColor transition-all cursor-pointer"
            >
              Heart Health
            </Link>
          </nav>
        </div>
        <div className=" w-full md:w-1/4">
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">Contact Us</h1>
          <nav className=" flex flex-col gap-2">
            <span className=" text-hoverColor"></span> A-28, 1st Floor,  
            Thiru-vi-ka Industrial Estate, Guindy, Chennai-600 032.
            <span className=" text-hoverColor"> Registered Office: </span> Livmo Pvt. Ltd., No. 36/3, Otheri Road, Swamy Nagar, Otteri, Vellore - 632 002.
           
            info@westayclose.in
            +91 97890 86627
          </nav>
        </div>
      </div>
      <SocialMedia />
      <div>
        <p className=" text-center py-4">
        Copyright © 2024 - All right reserved By
          <span className=" text-hoverColor text-bold"> WeStayClose</span>

        </p>
      </div>
    </div>
  );
};

export default Footer;