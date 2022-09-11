import React from "react";
import "./homeabout.css";
import team from "../../Images/teamgif.gif";
import { useNavigate } from "react-router-dom";
const HomeAbout = () => {
  const navigate = useNavigate();
  const aboutPage = () => {
    navigate("/aboutUs");
  };
  return (
    <div className="mainHomeAbout">
      <div className="homeAbout">
        <div>
          <img
            className="hbgif"
            src="https://img.freepik.com/free-vector/business-team-putting-together-jigsaw-puzzle-isolated-flat-vector-illustration-cartoon-partners-working-connection-teamwork-partnership-cooperation-concept_74855-9814.jpg"
          />
        </div>
        <div className="homeAboutInfo">
          <div>
            <h3>OUR STORY</h3>
          </div>
          <div>
            <h1>We Are Creative Dreamers & Innovators</h1>
          </div>
          <div>
            <p>
              With years of experience and a vision to help you conquer the
              digital world, we have set foot on this path. This allows us to
              provide the utmost services, top-notch experience, and
              high-quality solutions to every client who knocks our door
            </p>
          </div>
          <button className="hAboutBtn" onClick={aboutPage}>
            About Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
