import React from "react";
import rocket from "../../Images/rocket.png";
const OurCourse = (props) => {
  return (
    <div className="courseContainer">
      <div className="courseImg">
        <img src={rocket} />
      </div>
      <h3>{props.item.title}</h3>
      <p>
        Your website is the face of your business in the digital world. We
        ensure that you make a memorable first impression.
      </p>
      <button>View More</button>
    </div>
  );
};

export default OurCourse;
