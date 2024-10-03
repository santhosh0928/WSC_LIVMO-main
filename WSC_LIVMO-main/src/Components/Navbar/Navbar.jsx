import React, { useState } from "react";
import { Link } from "react-scroll";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import ContactUs from "../Contactus";
import './Navbar.css';
import logo from './logo.png';

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const handleChange = () => {
    setMenu(!menu);
  };

  const closeMenu = () => {
    setMenu(false);
  };

  const openForm = () => {
    setShowForm(true);
    setMenu(false);
  };

  const closeForm = () => {
    setShowForm(false);
  };

  return (
    <>
      <div className="fixed w-full z-10 text-white">
        <div className="flex flex-row justify-between p-2 md:px-5 px-5 bg-backgroundColor shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
          <div className="flex flex-row items-center cursor-pointer">
            <Link to="home" spy={true} smooth={true} duration={500} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <img src={logo} alt="WeStayClose Logo" className="w-[200px] h-[80px] object-contain" />
            </Link>
          </div>
          <nav className="hidden lg:flex flex-row items-center text-lg font-medium gap-8">
            <Link to="home" spy={true} smooth={true} duration={500} className="hover:text-hoverColor transition-all cursor-pointer">
              Home
            </Link>
            <Link to="about" spy={true} smooth={true} duration={500} className="hover:text-hoverColor transition-all cursor-pointer">
              About Us
            </Link>
            <Link to="services" spy={true} smooth={true} duration={500} className="hover:text-hoverColor transition-all cursor-pointer">
              Services
            </Link>
            <Link to="packagefile" spy={true} smooth={true} duration={500} className="hover:text-hoverColor transition-all cursor-pointer">
              Package
            </Link>
            <Link to="doctors" spy={true} smooth={true} duration={500} className="hover:text-hoverColor transition-all cursor-pointer">
              Meet our Team
            </Link>
            <Link to="blogs" spy={true} smooth={true} duration={500} className="hover:text-hoverColor transition-all cursor-pointer">
              Blogs
            </Link>
            <Link to="Contact" spy={true} smooth={true} duration={500} className="hover:text-hoverColor transition-all cursor-pointer">
              Contact
            </Link>
          </nav>
          <div className="hidden lg:flex">
            <button className="login-btn bg-brightColor text-white rounded-md hover:bg-hoverColor transition duration-300 ease-in-out">
              Login
            </button>
            <button className="register-btn bg-brightColor text-white rounded-md hover:bg-hoverColor transition duration-300 ease-in-out" onClick={openForm}>
              Register
            </button>
          </div>
          {showForm && <ContactUs closeForm={closeForm} />}
          <div className="lg:hidden flex items-center">
            {menu ? (
              <AiOutlineClose size={28} onClick={handleChange} />
            ) : (
              <AiOutlineMenu size={28} onClick={handleChange} />
            )}
          </div>
        </div>
        <div className={`${menu ? "translate-x-0" : "-translate-x-full"} lg:hidden flex flex-col absolute bg-backgroundColor text-white left-0 top-16 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}>
          <Link to="home" spy={true} smooth={true} duration={500} className="hover:text-hoverColor transition-all cursor-pointer" onClick={closeMenu}>
            Home
          </Link>
          <Link to="about" spy={true} smooth={true} duration={500} className="hover:text-hoverColor transition-all cursor-pointer" onClick={closeMenu}>
            About Us
          </Link>
          <Link to="services" spy={true} smooth={true} duration={500} className="hover:text-hoverColor transition-all cursor-pointer" onClick={closeMenu}>
            Services
          </Link>
          <Link to="blogs" spy={true} smooth={true} duration={500} className="hover:text-hoverColor transition-all cursor-pointer" onClick={closeMenu}>
            Blogs
          </Link>
          <Link to="doctors" spy={true} smooth={true} duration={500} className="hover:text-hoverColor transition-all cursor-pointer" onClick={closeMenu}>
            Doctors
          </Link>
          <div className="lg:hidden">
            <button className="login-btn bg-brightColor text-white rounded-md hover:bg-hoverColor transition duration-300 ease-in-out" onClick={openForm}>
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
