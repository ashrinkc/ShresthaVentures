import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./service.css";
import handy from "../../Images/handyFolder.gif";
import logo from "../../Images/Logo.png";
import art from "../../Images/artStudio.png";
import srv from "../../Images/srv.png";
import wedstr from "../../Images/weddingstore.png";
const Service = () => {
  const navigate = useNavigate();

  const myStyle = {
    // backgroundImage: "url('https://wallpaperaccess.com/full/1129018.jpg')",
    backgroundColor: "rgb(26, 24, 24)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  const PageforWeb = () => {
    navigate("webDesignPage");
  };

  const PageforApp = () => {
    navigate("appDesignPage");
  };

  const PageforGraphic = () => {
    navigate("graphicDesignPage");
  };

  const PageforAnimation = () => {
    navigate("animationPage");
  };

  const contact = () => {
    navigate("/contact");
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const [gr, setGr] = useState(null);
  const [wb, setWb] = useState(1);
  const [ap, setAp] = useState(null);
  const [il, setIl] = useState(null);
  const grElement = () => {
    setGr(1);
    setWb(null);
    setAp(null);
    setIl(null);
  };

  const wbElement = () => {
    setWb(1);
    setGr(null);
    setAp(null);
    setIl(null);
  };

  const apElement = () => {
    setWb(null);
    setGr(null);
    setAp(1);
    setIl(null);
  };
  const ilElement = () => {
    setWb(null);
    setGr(null);
    setAp(null);
    setIl(1);
  };

  const webpg = () => {
    navigate("/webDesignPage");
  };
  return (
    <div className="homeServiceContainer" style={myStyle}>
      <div className="mainService">
        <div>
          <div className="topWelcome">
            <h1>Our Services</h1>
            <small>
              We provide all kinds of services with clients and business across
              industries and categories, helping them achieve great things
            </small>
          </div>
          <div className="strategy">
            <div className="strategyCom" onClick={PageforGraphic}>
              <h3>Design</h3>
              <p>
                We provide all kind of digital strategy for organizations all
                across the country
              </p>
            </div>
            <div className="strategyCom" onClick={PageforWeb}>
              <h3>Web Development</h3>
              <p>
                We provide all kind of digital strategy for organizations all
                across the country
              </p>
            </div>
            <div className="strategyCom" onClick={PageforApp}>
              <h3>App Development</h3>
              <p>
                We provide all kind of digital strategy for organizations all
                across the country
              </p>
            </div>
            <div className="strategyCom" onClick={PageforAnimation}>
              <h3>Animation</h3>
              <p>
                We provide all kind of digital strategy for organizations all
                across the country
              </p>
            </div>
            <div className="strategyCom">
              <h3>Digital Strategy</h3>
              <p>
                We provide all kind of digital strategy for organizations all
                across the country
              </p>
            </div>
            <div className="strategyCom">
              <h3>Production</h3>
              <p>
                We provide all kind of digital strategy for organizations all
                across the country
              </p>
            </div>
            <div className="strategyCom">
              <h3>Marketing</h3>
              <p>
                We provide all kind of digital strategy for organizations all
                across the country
              </p>
            </div>
            <div className="strategyCom">
              <h3>Art and Sketch</h3>
              <p>
                We provide all kind of digital strategy for organizations all
                across the country
              </p>
            </div>
          </div>
        </div>
      </div>
      <hr className="hsrhr" />
      <div className="ourLatestWorkContainer">
        <h1>Latest Works</h1>
        <div className="latestworkContent">
          <p style={{ color: wb ? "red" : "white" }} onClick={wbElement}>
            Website
          </p>
          <p style={{ color: gr ? "red" : "white" }} onClick={grElement}>
            Graphic
          </p>
          <p style={{ color: ap ? "red" : "white" }} onClick={apElement}>
            Applications
          </p>
          <p style={{ color: il ? "red" : "white" }} onClick={ilElement}>
            Illustration
          </p>
        </div>
        {wb && (
          <>
            <div className="galleryGrid">
              <img
                className="item1"
                src="https://thumbs.dreamstime.com/b/couple-sitting-couch-talking-vector-illustration-sketch-cartoon-style-man-woman-living-room-interior-friendly-171787366.jpg"
              />
              <img
                className="item2"
                src="https://cdn.dribbble.com/uploads/599/original/86d75f5ebf6abc13a630dda33b292727.png?1544829141"
              />
              <img
                className="item3"
                src="https://www.istockphoto.com/resources/images/IllustrationsLanding/Essentials_iStock_1120x740_-1255353333.jpg"
              />
              <img
                className="item4"
                src="https://3udno63459u23yboa6366rls-wpengine.netdna-ssl.com/wp-content/uploads/2020/07/RanganathKrishnamani_Dryino_out_masks-Feature.jpg"
              />
              <img
                className="item5"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTYdVCyVjhgSYkopz4THn5LgX1samQH9lM3g&usqp=CAU"
              />
            </div>

            <div className="hworkbtn" onClick={webpg}>
              Show All
            </div>
          </>
        )}
        {gr && (
          <>
            <div className="galleryGrid">
              <img
                className="item1"
                src="https://cms-assets.tutsplus.com/cdn-cgi/image/width=800/uploads/users/2361/posts/35776/image/what_is_editorial_illustration_estudio_santarita_1.JPG"
              />
              <img
                className="item2"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGDg046InQBB7upI_zMQJEvn8Db4HqlCIcwjqEnpSWIl-kmxZMk9xBc01Qn6gnk-HQQ-w&usqp=CAU"
              />
              <img
                className="item3"
                src="http://www.graphicmania.net/wp-content/uploads/13062011/illustration14.jpg"
              />
              <img
                className="item4"
                src="https://us.123rf.com/450wm/9george/9george1901/9george190100054/119012930-owl-drawn-in-style-antistress-freehand-sketch-drawing-vector-illustration-.jpg?ver=6"
              />
              <img
                className="item5"
                src="https://media.istockphoto.com/vectors/girl-sitting-at-the-computer-office-work-flat-design-vector-vector-id865705930?k=20&m=865705930&s=170667a&w=0&h=mPvQ_ZIfWxtMMR98CD3IKr1Sh6B8dtVtjYZSsjw8a4Q="
              />
            </div>
            <div className="hworkbtn">Show All</div>
          </>
        )}
        {ap && (
          <>
            <div>
              <img src={handy} />
            </div>
            <div className="hworkbtn">Show All</div>
          </>
        )}
        {il && (
          <>
            <div>
              <img src={handy} />
            </div>
            <div className="hworkbtn">Show All</div>
          </>
        )}
      </div>
      <hr className="hsrhr" />
      <div className="sponsorContainer">
        <h1>Our Brands</h1>
        <div className="sponsors">
          <div className="sponsorsInside">
            <img className="sponsorsImg" src={art} />
          </div>
          <div className="sponsorsInside">
            <img className="sponsorsImg" src={srv} />
          </div>
          <div className="sponsorsInside">
            <img className="sponsorsImg" src={wedstr} />
          </div>
          <div className="sponsorsInside">
            <img className="sponsorsImg" src={wedstr} />
          </div>
          <div className="sponsorsInside">
            <img className="sponsorsImg" src={srv} />
          </div>

          <div className="sponsorsInside">
            <img className="sponsorsImg" src={art} />
          </div>
        </div>
      </div>
      <hr className="hsrhr" />
      <div className="reviewContainer">
        <h1> Testimonials</h1>
        <div className="review">
          {/* <div>
            <img
              style={{ width: "3vw" }}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRmo-fj7NoUc9nvUHCd0OlBLKGUpXG_f9WyA&usqp=CAU"
            />
          </div> */}
          <div className="reviewInside">
            <small>
              It was a wonderful experience working with the team. They are
              really good at what they do and their service is amazing
            </small>
            <img src="https://cdn.pixabay.com/photo/2021/05/04/13/29/portrait-6228705_1280.jpg" />
            <small>Mike Kelly</small>
          </div>
          <div className="reviewInside">
            <small>
              It was a wonderful experience working with the team. They are
              really good at what they do and their service is amazing
            </small>
            <img src="https://cdn.pixabay.com/photo/2021/05/04/13/29/portrait-6228705_1280.jpg" />
            <small>Mike Kelly</small>
          </div>
          <div className="reviewInside">
            <small>
              It was a wonderful experience working with the team. They are
              really good at what they do and their service is amazing
            </small>
            <img src="https://cdn.pixabay.com/photo/2021/05/04/13/29/portrait-6228705_1280.jpg" />
            <small>Mike Kelly</small>
          </div>
          {/* <div>
            <img
              style={{ width: "3vw" }}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnbn9q61AbFjkzf7QXfcXG8RgH3FCeYV0PZQ&usqp=CAU"
            />
          </div> */}
        </div>
      </div>
      <div className="getStartedContainer">
        <div className="getStarted">
          {/* <div>
            <img style={{ width: "10vw" }} src={logo} />
          </div> */}
          <div>
            <h1>Have A Project In Mind?</h1>
          </div>
          <div>
            <button className="Startedbtn" onClick={contact}>
              Contact Us
            </button>
          </div>
        </div>
      </div>
      {/* <div className="aboutUsContainer">
        <h1>About Us</h1>
        <div className="aboutUs">
          <div className="aboutUsInfo">
            <h4>Who Are We?</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur
            </p>
          </div>
          <div>
            <hr className="abouthr" />
          </div>
          <div className="aboutUsInfo">
            <h4>Our Philosophy</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur
            </p>
          </div>
          <div>
            <hr className="abouthr" />
          </div>
          <div className="aboutUsInfo">
            <h4>How We Work?</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur
            </p>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Service;
