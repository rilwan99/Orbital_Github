import React from "react";
import "./FinInstruments.css";
import FinCardItem from "./FinCardItem.js";
import Footer from "../../Footer";

function FinInstruments() {
  return (
    <>
      <div className="finCards">
        <h1>Financial Instruments</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.{" "}
        </p>

        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.{" "}
        </p>

        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.{" "}
        </p>

        <div className="finCards__container">
          <div className="finCards__wrapper">
            <ul className="trendingCards__items">
              <FinCardItem
                src="https://images.moneycontrol.com/static-mcnews/2020/01/Sensex_BSE_NSE_Stock-market_bull_bear_Gold-1-770x433.png?impolicy=website&width=770&height=431"
                text="Investing in Stocks"
                subtext="Options Trading"
                path="https://www.moneycontrol.com/news/business/markets/trading-expensive-options-amid-covid-19-uncertainties-heres-what-you-need-to-know-5082561.html"
              />
              <FinCardItem
                src="https://www.syfe.com/magazine/wp-content/uploads/2020/04/Blog-Banner-Time-to-invest-55.png"
                text="Investing in Cryptocurrency"
                subtext="REIT"
                path="https://www.businesstimes.com.sg/real-estate/retail-investors-snap-up-chinas-first-batch-of-reits"
              />
            </ul>
            <ul className="trendingCards__items">
              <FinCardItem
                src="https://images.moneycontrol.com/static-mcnews/2020/01/Sensex_BSE_NSE_Stock-market_bull_bear_Gold-1-770x433.png?impolicy=website&width=770&height=431"
                text=" Learing Options Trading"
                subtext="Options Trading"
                path="https://www.moneycontrol.com/news/business/markets/trading-expensive-options-amid-covid-19-uncertainties-heres-what-you-need-to-know-5082561.html"
              />
              <FinCardItem
                src="https://www.syfe.com/magazine/wp-content/uploads/2020/04/Blog-Banner-Time-to-invest-55.png"
                text="Investing in REITs (Real estate investment trust)"
                subtext="REIT (Real estate investment trust)"
                path="https://www.businesstimes.com.sg/real-estate/retail-investors-snap-up-chinas-first-batch-of-reits"
              />
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default FinInstruments;
