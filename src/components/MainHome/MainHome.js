import React from "react";
import Footer from "./Footer/Footer";
import Home from "./Home/Home";
import HomeAbout from "./HomeAbout/HomeAbout";
import Navbar from "./navbar/Navbar";
import Service from "./Services/Service";

const MainHome = () => {
  return (
    <div className="mainHomeContainer">
      <Navbar />
      <Home />
      <HomeAbout />
      <Service />
      <Footer />
    </div>
  );
};

export default MainHome;
