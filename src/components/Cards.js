import React from "react";
import "./Cards.css";
import CardItem from "./CardItem.js";

function Cards() {
  return (
    <div className="cards">
      <h1 className="header1">Check out these useful articles!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/stockmarket.jpg"
              text="Introduction to the stock market"
              label="Stocks"
              path="https://www.nerdwallet.com/article/investing/stock-market-basics-everything-beginner-investors-know"
            />
            <CardItem
              src="images/dogecoin.jpeg"
              text="The future of finance"
              label="Cryptocurrency"
              path="https://www.analyticsinsight.net/4-reasons-cryptocurrency-is-the-future-of-finance/"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/optionstrading.jpg"
              text="Technical Analysis tutorial"
              label="Options"
              path="https://corporatefinanceinstitute.com/resources/knowledge/trading-investing/technical-analysis/"
            />
            <CardItem
              src="images/reits.jpg"
              text="Is it profitable to invest in property?"
              label="REIT"
              path="https://www.reit.com/investing/why-invest-reits"
            />
            <CardItem
              src="images/accounting.jpg"
              text="Fundamental analysis tutorial"
              label="Securities Research"
              path="https://www.thebalance.com/tools-of-fundamental-analysis-3140772"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
