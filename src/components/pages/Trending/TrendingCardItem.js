import React from "react";
import { Link } from "react-router-dom";

function TrendingCardItem(props) {
  return (
    <>
      <li className="trendingCards__item">
        <a className="trendingCards__item__link" href={props.path}>
          <figure
            className="trendingCards__item__pic-wrap"
            data-category={props.label}
          >
            <img
              className="trendingCards__item__img"
              alt="Travel Image"
              src={props.src}
            />
          </figure>
          <div className="trendingCards__item__info">
            <h5 className="trendingCards__item__text">{props.text}</h5>
          </div>
        </a>
      </li>
    </>
  );
}

export default TrendingCardItem;
