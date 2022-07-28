import React from "react";
import Navbar from "../MainHome/navbar/Navbar";
import "./aboutus.css";
import art from ".././Images/artStudio.png";
import srv from ".././Images/srv.png";
import wedstr from ".././Images/weddingstore.png";
import Footer from "../MainHome/Footer/Footer";
const AboutUs = () => {
  return (
    <div className="mainAbout">
      <Navbar />
      <div className="aboutContainer">
        {/* <div className="aboutImage">
          <img src="https://cdn.videvo.net/videvo_files/video/free/2018-05/thumbnails/180503_02_PurpleGrid_small.jpg" />
        </div> */}
        {/* <div className="aboutTitle">
          <h3>WE DO NOT CREATE BRAND IN FACT,</h3>
          <h3> WE DISCOVER THEM</h3>
        </div> */}
        <div className="aboutContentContainer">
          <div className="aboutContent">
            <h1>Welcome To Shrestha Ventures</h1>
            <p>
              Shrestha Ventures Advertising and Marketing Private Limited is a
              full fledged advertising agency, a 360 degree
            </p>
            <p>
              solution powerhouse, equipped with the state of art
              infrastructure, pool of skilled
            </p>
            <p>human resources offering holistic advertising solution.</p>
            <hr />
            <p>
              Since 1989, we have grown our client-base to include some of the
              multinationals companies and a significant
            </p>
            <p> number of national companies too.</p>
          </div>
        </div>
        {/* <hr className="hsrhr" /> */}
        <div className="trustedClients">
          <h1>Our Trusted Clients</h1>
          <div className="sponsors">
            <div className="sponsorsInside">
              <img className="sponsorsImg" src={art} />
            </div>
            <div className="sponsorsInside">
              <img className="sponsorsImg" src={srv} />
            </div>
            <div className="sponsorsInside">
              <img className="sponsorsImg" src={wedstr} />
            </div>
            <div className="sponsorsInside">
              <img className="sponsorsImg" src={wedstr} />
            </div>
            <div className="sponsorsInside">
              <img className="sponsorsImg" src={srv} />
            </div>

            <div className="sponsorsInside">
              <img className="sponsorsImg" src={art} />
            </div>
            <div className="sponsorsInside">
              <img className="sponsorsImg" src={art} />
            </div>
            <div className="sponsorsInside">
              <img className="sponsorsImg" src={srv} />
            </div>
            <div className="sponsorsInside">
              <img className="sponsorsImg" src={wedstr} />
            </div>
          </div>
        </div>
        <hr className="hsrhr" />
        <div>
          <h1>Our Team</h1>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
