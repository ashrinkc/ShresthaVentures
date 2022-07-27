import React from "react";
import "./Contact.css";
const Contact = () => {
  return (
    <div className="mainContactContainer">
      <div className="contactUsHead">
        <h1>Contact Us</h1>
      </div>
      <div className="contactContainer">
        <div>
          <h1>NEED HELP?</h1>
          <p>Leave a message we will reply you promptly</p>
          <form>
            <div className="inputField">
              <div>
                <h5>First Name</h5>
                <input />
                <h5>E-Mail</h5>
                <input type="email" name="email" />
              </div>
              <div>
                <h5>Last Name</h5>
                <input />
                <h5>Phone</h5>
                <input />
              </div>
            </div>
            <h5>Address</h5>
            <input className="msgInput" />
            <h5>Message</h5>
            <textarea rows="10" cols="76" />
            <div className="contactBtnContainer">
              <button className="contactSubmitbtn">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
