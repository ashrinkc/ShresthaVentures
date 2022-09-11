import React from "react";
import Navbar from "../MainHome/navbar/Navbar";
import "./aboutus.css";
import art from ".././Images/artStudio.png";
import srv from ".././Images/srv.png";
import wedstr from ".././Images/weddingstore.png";
import Footer from "../MainHome/Footer/Footer";
const AboutUs = () => {
  return (
    <>
      <Navbar />
      <div className="mainAbout">
        <div className="aboutContainer">
          <div className="aboutContentContainer">
            <div className="inContainerAbout">
              <div className="inContainerInfo">
                <h1>Get to know about us and relieve your journey</h1>
                <p>
                  Get acquainted with our team and understand how we work and
                  proceed towards success.
                </p>
                <button>Get acquainted</button>
              </div>
              <div>
                <img src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/3504fe58665953.5a0988b7d25c6.gif" />
              </div>
            </div>
          </div>
          {/* <div className="aboutContentContainer">
      <div className="aboutContent">
        <h1>Welcome To Shrestha Ventures</h1>
        <p>
          Shrestha Ventures Advertising and Marketing Private Limited is a
          full fledged advertising agency, a 360 degree
        </p>
        <p>
          solution powerhouse, equipped with the state of art
          infrastructure, pool of skilled
        </p>
        <p>human resources offering holistic advertising solution.</p>
        <hr />
        <p>
          Since 1989, we have grown our client-base to include some of the
          multinationals companies and a significant
        </p>
        <p> number of national companies too.</p>
        <img
          style={{ height: "60vh", width: "80vw" }}
          src="https://www.resolutionlawng.com/wp-content/uploads/2020/09/group-of-company-img.jpeg"
        />
      </div>
    </div> */}
          <hr className="hsrhr" />
          <div className="careerContainer">
            <div className="career">
              <h2>Together At Shrestha Ventures</h2>
              <p>
                No global movement springs from individuals. It takes an entire
                team behind something big.Together we work hard, we laugh a lot,
                we brainstorm nonstop
              </p>
              <div>
                <h3 style={{ color: "red" }}>Our Current Openings</h3>
              </div>
              <div className="carrerImg">
                <div>
                  <img src="https://thumbs.dreamstime.com/b/portrait-young-smiling-cheerful-entrepreneur-casual-office-making-phone-call-working-laptop-155845824.jpg" />
                  <h3>SEO</h3>
                  <p>Should be able to:-</p>
                  <p>Write efficient code</p>
                  <p>Write clean code</p>
                  <button>Apply Now</button>
                </div>
                <div>
                  <img src="https://www.zdnet.com/a/img/resize/400be54cb997de66880f2dfa4195e5e88ffc44d4/2021/10/27/7833ce8c-4d6f-4f46-92c6-2a5146d86c63/work-from-home.jpg?auto=webp&fit=crop&height=675&width=1200" />
                  <h3>App Developer</h3>
                  <p>Should be able to:-</p>
                  <p>Write efficient code</p>
                  <p>Write clean code</p>
                  <button>Apply Now</button>
                </div>
                <div>
                  <img src="https://media.istockphoto.com/photos/male-and-female-architects-in-office-working-at-desk-on-laptop-and-picture-id1317442297?b=1&k=20&m=1317442297&s=170667a&w=0&h=Gt1QH9v3z5UbAEXGaDCoKKSV9v9P5BXfV_M_OYrRPLo=" />
                  <h3>DevOps</h3>
                  <p>Should be able to:-</p>
                  <p>Write efficient code</p>
                  <p>Write clean code</p>
                  <button>Apply Now</button>
                </div>
              </div>
            </div>
          </div>
          <hr className="hsrhr" />
          <div className="trustedClients">
            <h1>Our Trusted Clients</h1>
            <div className="sponsors">
              <div className="sponsorsInside">
                <img className="sponsorsImg" src={art} />
              </div>
              <div className="sponsorsInside">
                <img className="sponsorsImg" src={wedstr} />
              </div>
              <div className="sponsorsInside">
                <img className="sponsorsImg" src={wedstr} />
              </div>
              <div className="sponsorsInside">
                <img className="sponsorsImg" src={wedstr} />
              </div>
              <div className="sponsorsInside">
                <img className="sponsorsImg" src={art} />
              </div>

              <div className="sponsorsInside">
                <img className="sponsorsImg" src={art} />
              </div>
              <div className="sponsorsInside">
                <img className="sponsorsImg" src={art} />
              </div>
              <div className="sponsorsInside">
                <img className="sponsorsImg" src={wedstr} />
              </div>
              <div className="sponsorsInside">
                <img className="sponsorsImg" src={wedstr} />
              </div>
            </div>
          </div>
          <hr className="hsrhr" />
          <div className="ourTeamContainer">
            <h1>Our Team</h1>
            <div className="ourTeam">
              <div className="oTm">
                <img src="https://2012books.lardbucket.org/books/an-introduction-to-organizational-behavior-v1.1/section_07/2200db70bd2ef02bfa1ec925c5308209.jpg" />
                <h1>CEO</h1>
                <p>
                  A hardworking CEO who is alwaways there to help you at need
                </p>
              </div>
              <div className="oTm">
                <img src="https://thecultivatedmind.files.wordpress.com/2012/08/david-lieb.png" />
                <h1>CEO</h1>
                <p>
                  A hardworking CEO who is alwaways there to help you at need
                </p>
              </div>
              <div className="oTm">
                <img src="https://images.squarespace-cdn.com/content/v1/54e5003ce4b09eaf2d726614/1460229385749-SWAD9PJOKR7L376QIR12/Stephan_S.jpg" />
                <h1>CEO</h1>
                <p>
                  A hardworking CEO who is alwaways there to help you at need
                </p>
              </div>
              <div className="oTm">
                <img src="https://2012books.lardbucket.org/books/an-introduction-to-organizational-behavior-v1.1/section_07/2200db70bd2ef02bfa1ec925c5308209.jpg" />
                <h1>CEO</h1>
                <p>
                  A hardworking CEO who is alwaways there to help you at need
                </p>
              </div>
              <div className="oTm">
                <img src="https://thecultivatedmind.files.wordpress.com/2012/08/david-lieb.png" />
                <h1>CEO</h1>
                <p>
                  A hardworking CEO who is alwaways there to help you at need
                </p>
              </div>
              <div className="oTm">
                <img src="https://images.squarespace-cdn.com/content/v1/54e5003ce4b09eaf2d726614/1460229385749-SWAD9PJOKR7L376QIR12/Stephan_S.jpg" />
                <h1>CEO</h1>
                <p>
                  A hardworking CEO who is alwaways there to help you at need
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default AboutUs;
