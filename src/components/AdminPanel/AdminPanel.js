import React, { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Home from "../MainHome/Home/Home";
import "./adminpanel.css";
const AdminPanel = () => {
  const password = 123;
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [subhead, setHead] = useState("");
  const [img, setImg] = useState("");
  const [pass, setPass] = useState("");
  const [show, setShow] = useState(null);
  const change = (e) => {
    setTitle(e.target.value);
  };

  const changetwo = (e) => {
    setHead(e.target.value);
  };

  const changethree = (e) => {
    if (e.target.files && e.target.files[0]) {
      let img = e.target.files[0];
      setImg({
        ima: URL.createObjectURL(img),
      });
    }
  };

  const submit = () => {
    navigate("/", { state: { id: 1, title: "bobo" } });
  };

  const passwor = (e) => {
    setPass(e.target.value);
  };

  const adminSubmit = () => {
    if (pass == password) {
      setShow(1);
    } else {
      alert("Not authorized");
    }
  };
  return (
    <div className="adminMain">
      {!show && (
        <>
          <h5> Enter the password </h5>
          <input value={pass} onChange={passwor} />
          <button className="adminSubmit" onClick={adminSubmit}>
            {" "}
            Submit{" "}
          </button>
        </>
      )}
      {show && (
        <>
          <h1>Admin Panel</h1>
          <h5>HOME PAGE</h5>
          <form className="sub" onSubmit={submit}>
            <h3>Title</h3>
            <input value={title} onChange={change} />
            <h3>Sub-Heading</h3>
            <input value={subhead} onChange={changetwo} />
            <h3>GIF</h3>
            <input type="file" onChange={changethree} />
            <button className="adminSubmit">Change</button>
          </form>
          <Home title={title} subhead={subhead} img={img.ima} />
        </>
      )}
    </div>
  );
};

export default AdminPanel;
