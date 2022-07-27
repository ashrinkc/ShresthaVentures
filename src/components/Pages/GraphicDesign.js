import React, { useState } from "react";
import Navbar from "../MainHome/navbar/Navbar";
import "./pages.css";
const GraphicDesign = () => {
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
            <h1>Our Digital Works and Projects</h1>
            <small>
              We provide all kinds of graphic designing services with clients
              and business across industries and categories, helping them
              achieve great things"
            </small>
          </div>
          <div className="serviceTitles">
            <h4
              style={{ color: brandisActive ? "red" : "white" }}
              onClick={brandingFunc}
            >
              Product Design
            </h4>
            <h4
              style={{ color: webisActive ? "red" : "white" }}
              onClick={webFunc}
            >
              Logo Design
            </h4>
            <h4
              style={{ color: digiisActive ? "red" : "white" }}
              onClick={digiFunc}
            >
              Branding Design
            </h4>
          </div>
          <div className="serviceContent">
            {branding && (
              <>
                <img src="https://visme.co/blog/wp-content/uploads/2021/10/what-is-graphic-design-header-1200.png" />
              </>
            )}
            {web && (
              <>
                <img src="https://i0.wp.com/shergroup.com/wp-content/uploads/2021/07/77.png?fit=800%2C420&ssl=1" />
              </>
            )}
            {digital && (
              <>
                <img src="https://leverageedublog.s3.ap-south-1.amazonaws.com/blog/wp-content/uploads/2019/10/23170637/Graphic-Design-Courses.jpg" />
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

export default GraphicDesign;
