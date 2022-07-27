import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../MainHome/Footer/Footer";
import Navbar from "../MainHome/navbar/Navbar";
import "./pages.css";
const WebDesign = () => {
  const [branding, setBranding] = useState(1);
  const [web, setWeb] = useState(null);
  const [digital, setDigital] = useState(null);
  const [brandisActive, brandsetIsactivve] = useState(true);
  const [webisActive, websetIsactivve] = useState(false);
  const [digiisActive, digisetIsactivve] = useState(false);
  const [allworks, setAllWorks] = useState(null);
  const [workTitle, setWorktitle] = useState("See all works");
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
  const allWorks = () => {
    if (allworks) {
      setAllWorks(null);
      setWorktitle("See all works");
    } else {
      setAllWorks(1);
      setWorktitle("Hide");
    }
  };

  const facebook = () => {
    window.location.replace("https://www.facebook.com/");
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
              WebSites
            </h4>
            <h4
              style={{ color: webisActive ? "red" : "white" }}
              onClick={webFunc}
            >
              Web-Apps
            </h4>
            <h4
              style={{ color: digiisActive ? "red" : "white" }}
              onClick={digiFunc}
            >
              Web
            </h4>
          </div>
          <div className="serviceContent">
            {branding && (
              <>
                <img src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20200203200336/13-Things-You-Should-Know-Before-You-Enter-In-Web-Development.png" />
              </>
            )}
            {web && (
              <>
                <img src="https://raphaeloo.com/wp-content/uploads/2018/10/6-basic-principles-for-using-animation-in-web-design.png" />
              </>
            )}
            {digital && (
              <>
                <img src="https://images.squarespace-cdn.com/content/v1/5f1f73abac55ec57db191a6e/1600312912127-JJ1IIQIRVMR72IP7F8AD/blog_animation_cost.jpg" />
              </>
            )}
            <div>
              <button className="seeAllBtn" onClick={allWorks}>
                {workTitle} {"->"}{" "}
              </button>
            </div>
          </div>
        </div>
        {allworks && (
          <>
            <div className="fProjectsTitle">
              <h1>FEATURED PROJECTS</h1>
              <small>
                Few of our Projects related to web development are displayed
                below for you to look at.
              </small>
            </div>
            <div className="devItemsContainer">
              <div className="devItems">
                <div className="pgImg" onClick={facebook}>
                  <img src="https://cdn.dribbble.com/users/21030/screenshots/6386912/factorydribbble.jpg?compress=1&resize=400x300" />
                  <small>Project QBC</small>
                </div>
                <div className="pgImg">
                  <img src="https://cdn.dribbble.com/users/2151039/screenshots/14716747/media/cf5c480a7b2cb855bfbab15ddf456531.jpg?compress=1&resize=400x300&vertical=top" />
                  <small>Project XBC</small>
                </div>
                <div className="pgImg">
                  <img src="https://cdn.dribbble.com/users/2151039/screenshots/14664792/media/e861f954a94b7c30c9fa90032ab652d1.jpg?compress=1&resize=400x300&vertical=top" />
                  <small>Project ABC</small>
                </div>
                <div className="pgImg">
                  <img src="https://cdn.dribbble.com/users/13307/screenshots/17777832/media/a6479c5e7ad7816c10e3229dcc9c2c6e.jpg?compress=1&resize=400x300" />
                  <small>Project GHI</small>
                </div>
                <div className="pgImg">
                  <img src="https://cdn.dribbble.com/users/702789/screenshots/14012516/media/561a8b7e8cbe51c72c18f4ef0dc72676.png?compress=1&resize=400x300&vertical=top" />
                  <small>Project QIM</small>
                </div>
                <div className="pgImg">
                  <img src="https://cdn.dribbble.com/userupload/2457526/file/original-5525164a61224318667d316f85bf2c10.png?resize=400x0" />
                  <small>Project TQR</small>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
      <Footer />
    </>
  );
};

export default WebDesign;
