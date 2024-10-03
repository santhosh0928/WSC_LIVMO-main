import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Services from './Components/Services';
import Doctors from './Components/Doctors';
import Blogs from './Components/Blogs';
import Footer from './Components/Footer';
import PackageList from './Components/Package';
import Aboutlist from './Components/AboutUsPage';
import Reviews from "./Components/Review";
//import Banner from "./Components/Banner";
//import ScrollToTop from './Components/ScrollToTop'; // Import ScrollToTop

function App() {
  return (
    <>
      <Navbar />
      <main>
        <div id='home'><Home /></div>
        
        <div id='about'><About /></div>
        <div id='services'><Services /></div>
        <div id='packagefile'><PackageList /></div>
        <div id='reviews'><Reviews /></div>
        <div id='doctors'><Doctors /></div>
        <div id='blogs'><Blogs /></div>
      </main>
      <Routes>
        <Route path="/aboutus" element={<Aboutlist />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
