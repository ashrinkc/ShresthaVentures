import React, { useEffect, useState } from "react";
import "./home.css";
import team from "../../Images/teamgif.gif";
import { useLocation } from "react-router-dom";
// Performing Brilliantly to boost your business
const Home = (props) => {
  const location = useLocation();
  // useEffect(() => {
  //   console.log(location.state.title);
  // }, [location]);
  // const [tit, setTit] = useState(location.state.title);
  return (
    <div className="mainHome">
      <div className="homeHead">
        <div className="homeHeadContent">
          <h1>
            {props.title
              ? props.title
              : "Performing Brilliantly to boost your business"}
          </h1>
          <p>
            {props.subhead
              ? props.subhead
              : "We have a clear strategy that helps you bring each project to its goal."}
          </p>
          <button className="homeBtn">Get Started</button>
        </div>
        <div>
          <img className="homeGif" src={props.img ? props.img : team} />
        </div>
      </div>
      {/* <div className="semiCir" /> */}
    </div>
  );
};

export default Home;
