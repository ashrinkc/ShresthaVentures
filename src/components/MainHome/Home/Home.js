import React from "react";
import "./home.css";
import team from "../../Images/teamgif.gif";
const Home = () => {
  return (
    <div className="mainHome">
      <div className="homeHead">
        <div className="homeHeadContent">
          <h1>Performing Brilliantly to boost your business</h1>
          <p>
            We have a clear strategy that helps you bring each project to its
            goal.
          </p>
          <button className="homeBtn">Get Started</button>
        </div>
        <div>
          <img className="homeGif" src={team} />
        </div>
      </div>
      {/* <div className="semiCir" /> */}
    </div>
  );
};

export default Home;
