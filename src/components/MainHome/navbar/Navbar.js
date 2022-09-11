import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../../Images/whiteLogo.png";
const Navbarr = () => {
  return (
    <>
      <div className="mainNavbb">
        <Navbar collapseOnSelect expand="lg" variant="dark" className="navv">
          <Container>
            <Navbar.Brand href="#home" className="logoo">
              <img src={logo} />
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto"></Nav>
              <Nav className="navIn">
                <Link
                  className="navItems"
                  to="/"
                  style={{ textDecoration: "none" }}
                >
                  Home
                </Link>
                <Link
                  className="navItems"
                  to="/aboutUs"
                  style={{ textDecoration: "none" }}
                >
                  About Us
                </Link>
                <Link
                  className="navItems"
                  to="/mainService"
                  style={{ textDecoration: "none" }}
                >
                  Services
                </Link>
                <Link
                  className="navItems"
                  to="/mainService"
                  style={{ textDecoration: "none" }}
                >
                  Portfolio
                </Link>
                <Link
                  className="navItems"
                  to="/blog"
                  style={{ textDecoration: "none" }}
                >
                  Blog
                </Link>
                <Link
                  className="navItems"
                  to="/courses"
                  style={{ textDecoration: "none" }}
                >
                  Courses
                </Link>
                <Link
                  className="navItems"
                  to="/contact"
                  style={{ textDecoration: "none" }}
                >
                  Contact Us
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      {/* <div className="mainNav">
        <nav className="navBar">
          <a>
            <img src={logo} />
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
          <a className="nn">PORTFOLIO</a>
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
      </div> */}
    </>
  );
};

export default Navbarr;
