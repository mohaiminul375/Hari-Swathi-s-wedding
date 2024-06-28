// import React from 'react';

import AboutUs from "../../Component/Home/AboutUs";
import Banner from "../../Component/Home/Banner";
import Contact from "../../Component/Home/Contact";
import Event from "../../Component/Home/Event";
import Gallery from "../../Component/Home/Gallery";

const Home = () => {
  return (
    <div className="font-poppins">
      <Banner></Banner>
      <AboutUs></AboutUs>
      <Event></Event>
      <Gallery></Gallery>
      <Contact></Contact>
    </div>
  );
};

export default Home;
