import React from "react";
import { Link } from "react-router-dom";

function FinCardItem(props) {
  return (
    <>
      <li className="finCards__item">
        <a className="finCards__item__link" href={props.path}>
          <figure className="finCards__item__pic-wrap">
            <img
              className="finCards__item__img"
              alt="Travel Image"
              src={props.src}
            />
          </figure>
          <div className="finCards__item__info">
            <h5 className="finCards__item__text">{props.text}</h5>
            <h4 className="finCards__item__subtext">{props.subtext}</h4>
          </div>
        </a>
      </li>
    </>
  );
}

export default FinCardItem;
