import React from "react";
import "./navbar.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";

import FindReplaceIcon from "@mui/icons-material/FindReplace";
import Person3Icon from "@mui/icons-material/Person3";
function Navbar() {
  return (
    <div className="nav">
      <div className="nav-left">
        <GitHubIcon className="icon" />
        <TwitterIcon className="icon" />
        <LinkedInIcon className="icon" />
      </div>
      <div className="nav-center">
        <ul className="dropList">
          <li className="topListItem">HOME</li>
          <li className="topListItem">ABOUT</li>
          <li className="topListItem">CONTACT</li>
          <li className="topListItem">WRITE</li>
          <li className="topListItem">REGISTER/LOGIN</li>
        </ul>
      </div>

      <div className="nav-right">
        <FindReplaceIcon />
        <div className="nav-i">
          <input type="text" placeholder="search" />
        </div>
        <Person3Icon />
      </div>
    </div>
  );
}

export default Navbar;
