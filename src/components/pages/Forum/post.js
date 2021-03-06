import React from "react";
import "./post.css";

function Post(props) {
  return (
    <>
      <div className="postCards__item">
        <div className="postCards__item__info">
          <h5 className="postCards__item__text">{props.title}</h5>
          <p className="postCards__item__subtext">{props.text}</p>
          <br></br>
          <p className="postCards__item__subtext">Author: {props.name}</p>
          <p className="postCards__item__subtext">
            Date and Time: {props.time}
          </p>
        </div>
      </div>
    </>
  );
}

export default Post;
