import React from "react";
import "./settings.css";
import Person4Icon from "@mui/icons-material/Person4";
import Sidebar from "../Sidebar/Sidebar";
import DeleteIcon from "@mui/icons-material/Delete";
import UpdateIcon from "@mui/icons-material/Update";
import Navbar from "../topbar/Navbar";
function Settings() {
  return (
    <>
      <Navbar />
      <div className="setting">
        <div className="settingWrapper">
          <div className="settingsTitle">
            <span className="settingUpdateTitle">
              Update your account
              <UpdateIcon className="updateIcon" />
            </span>
            <span className="settingDeleteTitle">
              Delete your account <DeleteIcon className="deleteIcon" />
            </span>
          </div>
          <form action="" className="settingsForm">
            <label htmlFor="">Profile Picture</label>

            <div className="settingsPP">
              <img
                src="https://th.bing.com/th/id/OIP.O9v8TdFG-O5lOc5Zk9FDtQAAAA?pid=ImgDet&rs=1"
                alt=""
              />
              <label className="fileIp" htmlFor="fileInput">
                <Person4Icon
                  className="settingsPPIcon"
                  style={{
                    border: "2px solid rgb(131, 131, 228)",
                    boxShadow: "0 0 10px blue",
                    borderRadius: "50%",
                  }}
                />
              </label>
              <input type="file" id="fileInput" style={{ display: "none" }} />
            </div>

            <div className="formInfo">
              <label htmlFor="">Username</label>
              <input type="text" placeholder="Username" />
              <label htmlFor="">Email</label>
              <input type="email" placeholder="Password" />
              <label htmlFor="">Password</label>
              <input type="Password" />
            </div>
          </form>
          <button className="settingsSubBtn">apply changes</button>
        </div>
        <Sidebar className="sidebar" />
      </div>
    </>
  );
}

export default Settings;
