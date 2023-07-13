import React from "react";
import "./create.css";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
function Create() {
  return (
    <div className="create">
      <img
        className="createImg"
        src="https://images.pexels.com/photos/11502142/pexels-photo-11502142.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt=""
      />
      <form className="createForm">
        <div className="createGrps">
          <label htmlFor="fileInput" className="lable">
            <AddPhotoAlternateIcon className="addImgIcon" />
            <span className="addImg">Add image .....</span>
          </label>
          <input
            id="fileInput"
            type="file"
            placeholder="choose a file locally"
            style={{ display: "none" }}
          />
          <input
            id="writeInputs"
            type="title"
            autoFocus="true"
            placeholder="Title"
            className="createTitle"
          />
          <div className="textArea">
            <textarea
              name="writeInputs"
              id=""
              className="createContent"
              placeholder="Write your creative stories here....."
            ></textarea>
          </div>
          <button className="btn">publish</button>
        </div>
      </form>
    </div>
  );
}

export default Create;
