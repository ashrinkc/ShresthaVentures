// import "./App.css";
import MainHome from "./components/MainHome/MainHome.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainServices from "./components/MainServices/MainServices.js";
import GraphicDesign from "./components/Pages/GraphicDesign";
import WebDesign from "./components/Pages/WebDesign";
import AppDesign from "./components/Pages/AppDesign";
import Animation from "./components/Pages/Animation";
import Blog from "./components/Blog/Blog";
import AboutUs from "./components/AboutUs/AboutUs";
import AdminPanel from "./components/AdminPanel/AdminPanel";
import Home from "./components/MainHome/Home/Home.js";
import Contact from "./components/Contact/Contact.js";
import Courses from "./components/Courses/Courses.js";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/mainService" element={<MainServices />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/aboutUs" element={<AboutUs />}></Route>
        <Route path="/graphicDesignPage" element={<GraphicDesign />}></Route>
        <Route path="/webDesignPage" element={<WebDesign />}></Route>
        <Route path="/appDesignPage" element={<AppDesign />}></Route>
        <Route path="/animationPage" element={<Animation />}></Route>
        <Route path="/admin" element={<AdminPanel />}></Route>
        <Route path="/courses" element={<Courses />}></Route>
      </Routes>
    </div>
  );
}

export default App;
