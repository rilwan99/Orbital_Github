import React from "react";
import "./post.css";

function Post(props) {
  return (
    <>
      <div className="postCards__item">
        <div className="postCards__item__info">
          <h5 className="postCards__item__text">{props.title}</h5>
          <p className="postCards__item__subtext">{props.description}</p>
          <p className="postCards__item__subtext">{props.author}</p>
          <p className="postCards__item__subtext">{props.dateTime}</p>
        </div>
      </div>
    </>
  );
}

export default Post;
