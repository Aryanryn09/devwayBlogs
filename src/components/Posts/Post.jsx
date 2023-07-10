import React from "react";
import "./post.css";
function Post() {
  return (
    <div className="post">
      <div className="postRen">
        <img
          src="https://th.bing.com/th/id/OIP.O9v8TdFG-O5lOc5Zk9FDtQAAAA?pid=ImgDet&rs=1"
          alt=""
        />
        <div className="postInfo">
          <div className="postCats">
            <span className="postCat">EXPERIENCES</span>
            <span className="postCat">TECHNOLOGIES</span>
          </div>
          <span className="postTitle">Render the title here</span>
          <hr />
          <span className="postDate">1 hr ago</span>
          <p className="postDes">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. In aperiam
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic beatae
            molestiae, doloremque pariatur tenetur nihil deleniti! Labore sequi
            cum molestias, ea accusamus numquam unde earum perferendis
            dignissimos illo voluptate animi.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Post;
