import React from "react";
import { Link } from "react-router-dom";

function FinCardItem(props) {
  return (
    <>
      <li className="finCards__item">
        <Link to={props.path} className="finCards__item__link">
          <figure className="finCards__item__pic-wrap">
            <img className="finCards__item__img" src={props.src} />
          </figure>
          <div className="finCards__item__info">
            <h5 className="finCards__item__text">{props.text}</h5>
            <p className="finCards__item__subtext">{props.subtext1}</p>
            <p className="finCards__item__subtext">{props.subtext2}</p>
            <p className="finCards__item__subtext">{props.subtext3}</p>
            <p className="finCards__item__subtext">{props.subtext4}</p>
          </div>
        </Link>
      </li>
    </>
  );
}

export default FinCardItem;
