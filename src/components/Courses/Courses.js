import React from "react";
import fox from ".././Images/fox.jpg";
import OurCourse from "../MainHome/Home/OurCourse";
import { data } from "../MainHome/Home/OurCourseData";
import Navbarr from "../MainHome/navbar/Navbar";
const Courses = () => {
  return (
    <>
      <Navbarr />
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
        {/* <button>View All</button> */}
      </div>
    </>
  );
};

export default Courses;
