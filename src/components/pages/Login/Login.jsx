import React from "react";
import "./login.css";
// import Navbar from "../../topbar/Navbar";
function Login() {
  return (
    <>
      <div className="login">
        <span className="loginTitle">Login</span>
        <form action="" className="loginForm">
          <span style={{ fontSize: "1.8rem" }}>Username</span>
          <input type="text" placeholder="Enter your username" />
          <span style={{ fontSize: "1.8rem" }}>Email</span>
          <input type="email" placeholder="Enter your emial" />
          <span style={{ fontSize: "1.8rem" }}>Password</span>
          <input type="password" />
          <button className="loginBtn">Login</button>
        </form>
        <span>Don't Have an account ? </span>
        <button className="registerBtn">Register</button>
      </div>
    </>
  );
}

export default Login;
