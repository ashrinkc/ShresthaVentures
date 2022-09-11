import React from "react";
import rocket from "../../Images/rocket.png";
const IndiService = (props) => {
  return (
    <div className="strategyCom">
      <div className="stComIn">
        <div className="stImg">
          <img src={rocket} />
        </div>
        <h3>{props.item.title}</h3>
        <p>
          Having an identity is imperative. Shrestha Ventures can help you build
          this identity with appealing, extraordinary designs.
        </p>
        <button>View more</button>
      </div>
    </div>
  );
};

export default IndiService;
