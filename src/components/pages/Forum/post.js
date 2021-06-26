import React from "react";
import "./post.css";

function Post(props) {
  return (
    <>
      <div className="postCards__item">
        <div className="postCards__item__info">
          <h5 className="postCards__item__text">{props.title}</h5>
          <p className="postCards__item__subtext">{props.text}</p>
          <p className="postCards__item__subtext">{props.name}</p>
          <p className="postCards__item__subtext">{props.time}</p>
        </div>
      </div>
    </>
  );
}

export default Post;
