import React from "react";
import "./singlePost.css";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          src="https://images.pexels.com/photos/17445331/pexels-photo-17445331/free-photo-of-cold-glacier-snow-light.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt=""
          className="singlePageimg"
        />
        <h1 className="singlePostTitle">
          lorem is a great text
          <div className="singlePostEdit">
            <EditIcon className="singlePostIcon" />
            <DeleteIcon className="singlePostIcon" />
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            {" "}
            Author : <b>Aryan</b>
          </span>
          <span className="singlePostDate">
            {" "}
            Date : <b>1 hour ago</b>
          </span>
        </div>
        <p className="postContent">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio aut
          accusantium ipsum, commodi nam repellendus eaque ad explicabo. Illo,
          porro quaerat? Placeat ea quo eum quisquam corporis ex aliquam veniam!
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus
          nisi sequi perferendis quisquam aut nostrum, architecto et pariatur
          illo, doloremque id consectetur labore. Tempora natus eligendi
          eveniet, distinctio alias odit quisquam. Eligendi numquam molestias
          repudiandae voluptatibus unde, doloremque modi, labore praesentium qui
          impedit iure cupiditate incidunt vero aliquam, magnam maiores eius
          libero aut veritatis. Ex repudiandae officiis iste alias qui ratione
          fuga commodi unde quibusdam, perferendis nemo nam voluptates eum. Aut
          odio necessitatibus, molestiae ratione voluptatum corrupti unde harum
          repudiandae at, eligendi tempora aliquid, quibusdam sequi atque
          aspernatur quas beatae reprehenderit fuga. Maiores ratione fugit saepe
          ex voluptatem sunt consequatur.
        </p>
      </div>
    </div>
  );
}

export default SinglePost;
