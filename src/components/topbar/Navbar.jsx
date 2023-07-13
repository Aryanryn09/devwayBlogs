import React from "react";
import "./navbar.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Link } from "react-router-dom";
import FindReplaceIcon from "@mui/icons-material/FindReplace";
import Person3Icon from "@mui/icons-material/Person3";
// import { Link } from "react-router-dom";
function Navbar() {
  const user = true;
  return (
    <div className="nav">
      <div className="nav-left">
        <GitHubIcon className="icon" />
        <TwitterIcon className="icon" />
        <LinkedInIcon className="icon" />
      </div>
      <div className="nav-center">
        <ul className="dropList">
          <li className="topListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="topListItem">ABOUT</li>
          <li className="topListItem">CONTACT</li>
          <li className="topListItem">
            <Link to="/create" className="link">
              WRITE
            </Link>
          </li>
          <li className="topListItem">
            <Link to="/register" className="link">
              REGISTER/LOGIN
            </Link>
          </li>
          <li className="topListItem">
            <Link to="/register" className="link">
              {user && "LOGOUT"}
            </Link>
          </li>
        </ul>
      </div>

      <div className="nav-right">
        <Person3Icon className="icon" />

        <div className="nav-i">
          <input type="text" placeholder="search" />
        </div>
        <FindReplaceIcon className="icon" />
      </div>
    </div>
  );
}

export default Navbar;
