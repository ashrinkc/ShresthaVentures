import React, { useState } from "react";
import Navbar from "../MainHome/navbar/Navbar";
import "./pages.css";
const Animation = () => {
  const [branding, setBranding] = useState(1);
  const [brandisActive, brandsetIsactivve] = useState(true);
  const [webisActive, websetIsactivve] = useState(false);
  const [digiisActive, digisetIsactivve] = useState(false);
  const brandingFunc = () => {
    setBranding(1);
    brandsetIsactivve(true);
    websetIsactivve(false);
    digisetIsactivve(false);
  };
  const webFunc = () => {
    setBranding(null);
    brandsetIsactivve(false);
    websetIsactivve(true);
    digisetIsactivve(false);
  };
  const digiFunc = () => {
    setBranding(null);
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
              Animation
            </h4>
          </div>
          <div className="serviceContent">
            {branding && (
              <>
                <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/23da955f-993e-400e-bab1-34ff343800d2/d5coi0e-6debd8f9-2c2b-4a73-8eb2-b2a6db63c968.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzIzZGE5NTVmLTk5M2UtNDAwZS1iYWIxLTM0ZmYzNDM4MDBkMlwvZDVjb2kwZS02ZGViZDhmOS0yYzJiLTRhNzMtOGViMi1iMmE2ZGI2M2M5NjguZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.L5tUUxhp7RUY7rU-6xKL93kqEgf9atnn_1EGuuHd4A8" />
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

export default Animation;
