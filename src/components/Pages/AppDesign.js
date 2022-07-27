import React, { useState } from "react";
import Navbar from "../MainHome/navbar/Navbar";
import "./pages.css";
const AppDesign = () => {
  const [branding, setBranding] = useState(1);
  const [web, setWeb] = useState(null);
  const [digital, setDigital] = useState(null);
  const [brandisActive, brandsetIsactivve] = useState(true);
  const [webisActive, websetIsactivve] = useState(false);
  const [digiisActive, digisetIsactivve] = useState(false);
  const brandingFunc = () => {
    setBranding(1);
    setWeb(null);
    setDigital(null);
    brandsetIsactivve(true);
    websetIsactivve(false);
    digisetIsactivve(false);
  };
  const webFunc = () => {
    setBranding(null);
    setWeb(1);
    setDigital(null);
    brandsetIsactivve(false);
    websetIsactivve(true);
    digisetIsactivve(false);
  };
  const digiFunc = () => {
    setBranding(null);
    setWeb(null);
    setDigital(1);
    brandsetIsactivve(false);
    websetIsactivve(false);
    digisetIsactivve(true);
  };
  return (
    <>
      <Navbar />
      <div className="mainServiceTwo">
        <div className="welcomeBottom">
          <div className="welcome">
            <h1>Our Apps related Works and Projects</h1>
            <small>
              We provide all kinds of app designing services with clients and
              business across industries and categories, helping them achieve
              great things"
            </small>
          </div>
          <div className="serviceTitles">
            <h4
              style={{ color: brandisActive ? "red" : "white" }}
              onClick={brandingFunc}
            >
              AppDesign
            </h4>
            <h4
              style={{ color: webisActive ? "red" : "white" }}
              onClick={webFunc}
            >
              Apps
            </h4>
            <h4
              style={{ color: digiisActive ? "red" : "white" }}
              onClick={digiFunc}
            >
              Apps
            </h4>
          </div>
          <div className="serviceContent">
            {branding && (
              <>
                <img src="https://tateeda.com/wp-content/uploads/2020/10/1-14.jpg" />
              </>
            )}
            {web && (
              <>
                <img src="https://www.techbooky.com/wp-content/uploads/2022/03/Offshore-app-developer-1024x512-1.png" />
              </>
            )}
            {digital && (
              <>
                <img src="https://d540vms5r2s2d.cloudfront.net/mad/uploads/mad_blog_5f9716241755b1603737124.png" />
              </>
            )}
            <div>
              <button className="seeAllBtn">See all works {"->"} </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppDesign;
