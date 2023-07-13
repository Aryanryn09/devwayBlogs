import React from "react";
import "./home.css";
// import Navbar from "../../topbar/Navbar";
import Sidebar from "../../Sidebar/Sidebar";
import Header from "../../Header/Header";
import Posts from "../../Posts/Posts";
function Homee() {
  return (
    <>
      <div className="homee">
        <div className="head">
          <Header className="head" />
        </div>
        <div className="home">
          <Posts className="posts" />
          <Sidebar className="sidebar" />
        </div>
      </div>
    </>
  );
}

export default Homee;
