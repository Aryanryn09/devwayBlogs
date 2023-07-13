import React from "react";
import "./signup.css";
import Navbar from "../../topbar/Navbar";
function Signup() {
  return (
    <>
      <Navbar />
      <div className="register">
        <span className="registerTitle">Register</span>
        <form action="" className="registerForm">
          <span style={{ fontSize: "1.8rem" }}>Name</span>
          <input type="text" placeholder="Enter your full name" />
          <span style={{ fontSize: "1.8rem" }}>Username</span>
          <input type="text" placeholder="Enter your username" />
          <span style={{ fontSize: "1.8rem" }}>Email</span>
          <input type="email" placeholder="Enter your emial" />
          <span style={{ fontSize: "1.8rem" }}>Password</span>
          <input type="password" />
          <button className="registerBtn">Register</button>
        </form>
        <span>Don't Have an account ? </span>
        {/* <button className="registerBtn">L</button> */}
      </div>
    </>
  );
}

export default Signup;
