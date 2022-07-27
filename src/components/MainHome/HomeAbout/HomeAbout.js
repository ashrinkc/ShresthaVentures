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
          <h1>We Are Creative Dreamers and Innovators</h1>
          <p>
            We provide only high quality services with an individual approach to
            each project. Projects created by us work an bring pleasant benefits
            to your business.
          </p>
          <button className="hAboutBtn" onClick={aboutPage}>
            About Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
