import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import logo from "../../Images/Logo.png";
const Navbar = () => {
  return (
    <div>
      <nav className="navBar">
        <a>
          <img style={{ width: "8vw", height: "7vh" }} src={logo} />
        </a>
        <a>
          <Link style={{ textDecoration: "none", color: "white" }} to="/">
            <a className="nn">HOME</a>
          </Link>
        </a>
        <a>
          <Link
            style={{ textDecoration: "none", color: "white" }}
            to="/aboutUs"
          >
            <a className="nn">ABOUT</a>
          </Link>
        </a>
        <a>
          <Link
            style={{ textDecoration: "none", color: "white" }}
            to="/mainService"
          >
            <a className="nn">SERVICES</a>
          </Link>
        </a>
        <a className="nn">PROJECTS</a>
        <a>
          <Link style={{ textDecoration: "none", color: "white" }} to="/blog">
            <a className="nn">BLOG</a>
          </Link>
        </a>
        <a>
          <Link
            style={{ textDecoration: "none", color: "white" }}
            to="/contact"
          >
            <a className="nn">CONTACT</a>
          </Link>
        </a>
        <a className="nn">COURSES</a>
      </nav>
    </div>
  );
};

export default Navbar;
