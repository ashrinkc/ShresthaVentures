import React from "react";
import Navbar from "../MainHome/navbar/Navbar";
import "./aboutus.css";
const AboutUs = () => {
  return (
    <div>
      <Navbar />
      <div className="aboutContainer">
        <div className="aboutImage">
          <img src="https://img.freepik.com/free-vector/city-skyline-summer-time-urban-view-background_107791-9101.jpg?w=2000" />
        </div>
        <div className="aboutTitle">
          <h3>About Us</h3>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
