import React, { useEffect, useState } from "react";
import "./home.css";
import hand from "../../Images/hand.png";
import Navbar from "../navbar/Navbar";
import med from "../../Images/med.png";
import art from "../../Images/artStudio.png";
import srv from "../../Images/srv.png";
import wedstr from "../../Images/weddingstore.png";
import handy from "../../Images/handyFolder.gif";
import Footer from "../Footer/Footer";
import marketing from "../../Images/marketing.png";
import rocket from "../../Images/rocket.png";
import charity from "../../Images/charity.png";
import enterprise from "../../Images/enterprise.png";
import bigrocket from "../../Images/bigrocket.jpg";
import fox from "../../Images/fox.jpg";
import OurCourse from "./OurCourse";
import { data } from "./OurCourseData.js";
import { SerData } from "./OurServiceDats";
import IndiService from "./IndiService";
const Home = () => {
  return (
    <>
      <Navbar />
      <div className="mainHomee">
        <div className="notMainHome">
          {/* <div className="mainHome"> */}
          <div className="homeTop">
            <div className="homeTopInfo">
              <div className="homeTopInfoH1">Perform Brilliantly to</div>
              <div className="homeTopInfoH2">Boost your Business</div>
              <div className="homeTopInfoH3">
                We have a clear strategy that helps you bring each project to
                it’s goal.
              </div>
              <button>GET CONNECTED</button>
            </div>
            <div className="homeTopImg">
              <img src={hand} />
            </div>
          </div>
          <div className="midHome">
            <div>
              <img src={med} />
            </div>
            <div className="midHomeInfo">
              <h3>OUR STORY</h3>
              <h1>We are Creative Dreamers & Innovators</h1>
              <p>
                With years of experience and a vision to help you conquer the
                digital world, we have set foot on this path. This allows us to
                provide the utmost services, top-notch experience, and
                high-quality solutions to every client who knocks our door.
              </p>
              <button>ABOUT US</button>
            </div>
          </div>
          <div className="mainService">
            <div>
              <div className="topWelcome">
                <h1>Our Services</h1>
                <small>
                  End-to-end services to optimize your digital value and image.
                </small>
              </div>
              <div className="Mstrategy">
                <div className="strategy">
                  {SerData.map((item) => {
                    return <IndiService item={item} />;
                  })}
                </div>
                <button className="allServices">VIEW ALL SERVICES</button>
              </div>
            </div>
          </div>
          <div className="sponsorContainer">
            <h1>Our Brands</h1>
            <div className="sponsors">
              <div className="sponsorsInside">
                <img className="sponsorsImg" src={art} />
              </div>
              <div className="sponsorsInside">
                <img className="sponsorsImg" src={wedstr} />
              </div>
              <div className="sponsorsInside">
                <img className="sponsorsImg" src={art} />
              </div>
              <div className="sponsorsInside">
                <img className="sponsorsImg" src={wedstr} />
              </div>
              <div className="sponsorsInside">
                <img className="sponsorsImg" src={art} />
              </div>

              <div className="sponsorsInside">
                <img className="sponsorsImg" src={wedstr} />
              </div>
            </div>
          </div>
        </div>
        {/* <div className="reviewContainer">
              <h1> Testimonials</h1>
              <div className="review">
                <div className="reviewInside">
                  <small>
                    It was a wonderful experience working with the team. They
                    are really good at what they do and their service is amazing
                  </small>
                  <img src="https://cdn.pixabay.com/photo/2021/05/04/13/29/portrait-6228705_1280.jpg" />
                  <small>Mike Kelly</small>
                </div>
                <div className="reviewInside">
                  <small>
                    It was a wonderful experience working with the team. They
                    are really good at what they do and their service is amazing
                  </small>
                  <img src="https://cdn.pixabay.com/photo/2021/05/04/13/29/portrait-6228705_1280.jpg" />
                  <small>Mike Kelly</small>
                </div>
                <div className="reviewInside">
                  <small>
                    It was a wonderful experience working with the team. They
                    are really good at what they do and their service is amazing
                  </small>
                  <img src="https://cdn.pixabay.com/photo/2021/05/04/13/29/portrait-6228705_1280.jpg" />
                  <small>Mike Kelly</small>
                </div>
              </div>
            </div> */}
        <div className="digitalSolution">
          <h1>A Comprehensive Digital Solution</h1>
          <h5>For every type of business, we have a package.</h5>
          <h5>
            Whether you are from health, e-commerce, education, or other domain,
            we digitize businesses with our intriguing, scalable solutions
          </h5>
          <div className="digitalSolutionComponent">
            <div className="digitalInfoContainer">
              <div className="digiBlack">
                <div className="digitalImg">
                  <div className="digiimgContainer">
                    <img src={rocket} />
                  </div>
                  <h2>Startups</h2>
                  <p>
                    Launch your product and services in the market with full
                    momentum. We aim to achieve optimum performance for your
                    launch.
                  </p>
                </div>
              </div>
              <div className="digiBlack">
                <div className="digitalImg">
                  <div className="digiimgContainer">
                    <img src={enterprise} />
                  </div>
                  <h2>Enterprise</h2>
                  <p>
                    Uncover the hidden potential of the online world, explore
                    new opportunities, and attract new customers. Digitize your
                    organization!
                  </p>
                </div>
              </div>
            </div>
            <div className="bigRocket">
              <img src={bigrocket} />
            </div>
            <div className="digitalInfoContainer">
              <div className="digiBlack">
                <div className="digitalImg">
                  <div className="digiimgContainer">
                    <img src={marketing} />
                  </div>
                  <h2>Agencies</h2>
                  <p>
                    With an optimized digital presence, gain quality leads,
                    improve business success KPI, and enhance your revenue and
                    ROI.
                  </p>
                </div>
              </div>
              <div className="digiBlack">
                <div className="digitalImg">
                  <div className="digiimgContainer">
                    <img src={charity} />
                  </div>
                  <h2>INGO/NGO</h2>
                  <p>
                    We help in making storyboards, post, Animations, cover event
                    highlights and showcase their work through digital platforms
                    and give a clear message
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ourCoursesMain">
          <div className="ourCourses">
            <h1>Our Courses</h1>
            <h5>
              Start, switch, or advance your career, Professional Certificates,
              and degrees from world-class universities and companies.
            </h5>
            <div className="courseMain">
              <div className="ourCrs">
                {data.map((item) => {
                  return <OurCourse item={item} />;
                })}
              </div>
              <div className="ourCrImg">
                <img src={fox} />
              </div>
            </div>
          </div>
          <button>View All</button>
        </div>
        <div className="getStartedContainer">
          <div className="getStarted">
            <div>
              <img className="handy" src={handy} />
            </div>
            <div className="projectInMind">
              <h1>Have A Project In Mind?</h1>
              <h5>Ready to Grow your Business?</h5>
              <h6>
                Contact us to work with a results-driven best digital marketing
                agency
              </h6>
              <div className="quote">
                <button>GET A QUOTE</button>
                <p>OR</p>
                <button>CONTACT US</button>
              </div>
            </div>
          </div>
        </div>
        {/* </div> */}
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Home;
