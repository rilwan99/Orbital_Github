import React from "react";
import "./Trending.css";
import TrendingCardItem from "./TrendingCardItem.js";

function Trending() {
  return (
    <div className="trendingCards">
      <h1>Trending Articles</h1>
      <div className="trendingCards__container">
        <div className="trendingCards__wrapper">
          <ul className="trendingCards__items">
            <TrendingCardItem
              src="images/dogecoin.jpeg"
              text="The recent dip"
              label="Stocks"
              path="https://www.google.com/"
            />
            <TrendingCardItem
              src="images/dogecoin.jpeg"
              text="The future of finance"
              label="Crypocurrency"
              path="/trending"
            />
          </ul>
          <ul className="trendingCards__items">
            <TrendingCardItem
              src="images/optionstrading.jpg"
              text="Technical Analysis tutorial"
              label="Options"
              path="/trending"
            />
            <TrendingCardItem
              src="images/reits.jpg"
              text="Is it profitable to invest in property?"
              label="REIT"
              path="/products"
            />
            <TrendingCardItem
              src="images/accounting.jpg"
              text="Fundamental analysis tutorial"
              label="Securities Research"
              path="/sign-up"
            />
          </ul>
          <ul className="trendingCards__items">
            <TrendingCardItem
              src="images/optionstrading.jpg"
              text="Technical Analysis tutorial"
              label="Options"
              path="/trending"
            />
            <TrendingCardItem
              src="images/reits.jpg"
              text="Is it profitable to invest in property?"
              label="REIT"
              path="/products"
            />
            <TrendingCardItem
              src="images/accounting.jpg"
              text="Fundamental analysis tutorial"
              label="Securities Research"
              path="/sign-up"
            />
          </ul>
          <ul className="trendingCards__items">
            <TrendingCardItem
              src="images/optionstrading.jpg"
              text="Technical Analysis tutorial"
              label="Options"
              path="/trending"
            />
            <TrendingCardItem
              src="images/reits.jpg"
              text="Is it profitable to invest in property?"
              label="REIT"
              path="/products"
            />
            <TrendingCardItem
              src="images/accounting.jpg"
              text="Fundamental analysis tutorial"
              label="Securities Research"
              path="/sign-up"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Trending;
