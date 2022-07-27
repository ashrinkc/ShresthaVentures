import React, { useEffect, useState } from "react";
import "./footer.css";
import { useNavigate } from "react-router-dom";
const Footer = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);
  const navigate = useNavigate();

  return (
    <div>
      <div className="footer">
        <div>
          <h2>Explore</h2>
          <h4>About</h4>
          <h4>Our Team</h4>
          <h4>Locations</h4>
          <h4>Gallery</h4>
        </div>
        <div>
          <h2>You've Questions?</h2>
          <h4>Call Us: 0001111100</h4>
          <h4>Send Us Email: example@gmail.com</h4>
        </div>
        <div>
          <h2>You've Questions?</h2>
          <h4>Call Us: 0001111100</h4>
          <h4>Send Us Email: example@gmail.com</h4>
        </div>
        <div>
          <h2>Explore</h2>
          <h4>About</h4>
          <h4>Our Team</h4>
          <h4>Locations</h4>
          <h4>Gallery</h4>
        </div>
      </div>
    </div>
  );
};

export default Footer;
