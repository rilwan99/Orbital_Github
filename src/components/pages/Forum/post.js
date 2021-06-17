import React from "react";
import "./post.css";

function Post(props) {
  return (
    <>
      <div className="postCards__item">
        <div className="postCards__item__info">
          <h5 className="postCards__item__text">{props.text}</h5>
          <p className="postCards__item__subtext">{props.subtext1}</p>
          <p className="postCards__item__subtext">{props.subtext2}</p>
          <p className="postCards__item__subtext">{props.subtext3}</p>
        </div>
      </div>
    </>
  );
}

export default Post;
