import React from "react";
import "./MainService.css";
const ServicesBody = () => {
  const myStyle = {
    // backgroundImage: "url('https://wallpaperaccess.com/full/1129018.jpg')",
    backgroundColor: "black",
    color: "white",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  return (
    <div style={myStyle}>
      <div className="serviceBody">
        <h6>
          WE NOT ONLY HAVE THE SKILLS TO SOLVE OUR CLIENTS PROBLEM WE HELP THEM
          THINK THROUGH THE BEST OF THE SCENARIOS
        </h6>
        <h2>Expertise Where It Matters Most</h2>
      </div>
      <div className="serviceInfoContainer">
        <div className="serviceInfo">
          <h2>We Help To Build Your Projects</h2>
          <small>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </small>
          <button>Get our proposal</button>
        </div>
        <div>
          <img
            style={{ height: "70vh" }}
            src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80"
          />
        </div>
      </div>
      <div className="select">
        <div>
          <img
            style={{ height: "50vh" }}
            src="https://cdn.dribbble.com/users/214929/screenshots/4366947/dribbble-shot_6.gif"
          />
        </div>
        <div>
          <h1> What can we do for you </h1>
          <p>
            Our team of innovators and digital marketers in tech and design
            bring skills to every project
          </p>
          <div className="projects">
            <div>
              <h1 style={{ color: "red" }}>300+</h1>
              <p>Project Done</p>
            </div>
            <div>
              <h1 style={{ color: "red" }}>150+</h1>
              <p>Clients Happy</p>
            </div>
          </div>
        </div>
      </div>
      <div className="ourServiceContainer">
        <h3>Services We Provide</h3>
        <div className="ourService">
          <div className="serviceImg">
            <img
              style={{ width: "200px" }}
              src="http://tamangtshering.com.np/wp-content/uploads/2021/07/starting-career-web-dvelopment.jpg"
            />
            <h5>Web Development</h5>
          </div>
          <div className="serviceImg">
            <img
              style={{ width: "200px" }}
              src="https://d540vms5r2s2d.cloudfront.net/mad/uploads/mad_blog_5df2190b8638a1576147211.jpg"
            />
            <h5>App Development</h5>
          </div>
          <div className="serviceImg">
            <img
              style={{ width: "200px" }}
              src="https://www.reliablesoft.net/wp-content/uploads/2020/11/digital-marketing-campaign.jpg"
            />
            <h5>Digital Marketing</h5>
          </div>
          <div className="serviceImg">
            <img
              style={{ width: "200px" }}
              src="https://media.istockphoto.com/videos/loop-animated-light-bulb-icon-video-id1212476772?s=640x640"
            />
            <h5>Brand Strategy</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesBody;
