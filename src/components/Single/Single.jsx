import React from "react";
import "./single.css";
import Sidebar from "../Sidebar/Sidebar";
import SinglePost from "../singlePost/SinglePost";
function Single() {
  return (
    <div className="single">
      <SinglePost />
      <Sidebar />
    </div>
  );
}

export default Single;
