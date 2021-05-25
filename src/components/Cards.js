import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out these USEFUL articles!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/stockmarket.jpg"
              text="Introduction to the stock market"
              label="Stocks"
              path="/services"
            />
            <CardItem
              src="images/dogecoin.jpeg"
              text="The future of finance"
              label="Crypocurrency"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/optionstrading.jpg"
              text="Technical Analysis tutorial"
              label="Options"
              path="/services"
            />
            <CardItem
              src="images/reits.jpg"
              text="Is it profitable to invest in property?"
              label="REIT"
              path="/products"
            />
            <CardItem
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

export default Cards;
