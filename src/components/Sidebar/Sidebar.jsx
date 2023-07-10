import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import "./sidebar.css";
function Sidebar() {
  return (
    <div className="Sidebar">
      <div className="sidebarItems">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src="https://th.bing.com/th/id/OIP.O9v8TdFG-O5lOc5Zk9FDtQAAAA?pid=ImgDet&rs=1"
          alt=""
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
          quisquam fugiat enim. Dolorum inventore alias deleniti quibusdam ab.
          Ex corrupti accusamus iste a? Recusandae accusamus nam eius? Dolores,
          facilis asperiores?
        </p>
      </div>
      <div className="sidebaritem">
        <span className="sidebarTitle">CATAGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">EXPERIENCES</li>
          <li className="sidebarListItem">TECHNOLOGIES</li>
          <li className="sidebarListItem">DEPLOYMENT</li>
          <li className="sidebarListItem">WEBDEV</li>
          <li className="sidebarListItem">MACHINE LEARNING</li>
        </ul>
      </div>
      <div className="sidebbar-item">
        FOLLOW US
        <div className="sidebar-socials">
          <GitHubIcon className="icon" />
          <TwitterIcon className="icon" />
          <LinkedInIcon className="icon" />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
