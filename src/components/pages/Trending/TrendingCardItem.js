import React from "react";

function TrendingCardItem(props) {
  return (
    <>
      <li className="trendingCards__item">
        <a className="trendingCards__item__link" href={props.path}>
          <figure
            className="trendingCards__item__pic-wrap"
            data-category={props.label}
          >
            <img className="trendingCards__item__img" alt="" src={props.src} />
          </figure>
          <div className="trendingCards__item__info">
            <h5 className="trendingCards__item__text">{props.text}</h5>
            <h4 className="trendingCards__item__subtext">{props.subtext}</h4>
          </div>
        </a>
      </li>
    </>
  );
}

export default TrendingCardItem;
