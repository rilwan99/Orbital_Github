import React from "react";
import "./FinInstruments.css";
import FinCardItem from "./FinCardItem.js";
import Footer from "../../Footer";

function FinInstruments() {
  return (
    <>
      <div className="finCards">
        <h1 className="finHeader">Financial Instruments</h1>
        <p className="intro-text">
          If you are ready to start investing but aren't sure of the first steps
          to take, you’ve come to the right place. Some popular financial
          instrumnets include: Stocks, Cryptocurrencies, Options and REITs
        </p>

        <p className="intro-text">
          However, knowledge is crucial before you can start your own investment
          journey. Having an awareness of your risk apetite, expectations of
          returns and your intentions behind your investment is imperative.
          After doing some self-evaluation, pick the financial instrument that
          aligns with your goals the most.
        </p>

        <div className="finCards__container">
          <div className="finCards__wrapper">
            <ul className="trendingCards__items">
              <FinCardItem
                src="https://specials-images.forbesimg.com/imageserve/5fbc4c24998557783b8cb83c/960x0.jpg?fit=scale"
                text="Stocks, Shares and Securities"
                subtext1="Risk Apetite: Medium"
                subtext2="Volatility: Medium"
                subtext3="Learning curve: Medium"
                subtext4="Returns: Medium"
                path="/Stocks"
              />
              <FinCardItem
                src="https://images.livemint.com/img/2020/12/24/600x338/bitcoin_1583349940408_1608811162884.jpg"
                text="Cryptocurrencies"
                subtext1="Risk Apetite: High"
                subtext2="Volatility: High"
                subtext3="Learning curve: Medium"
                subtext4="Returns: High"
                path="/Crypto"
              />
            </ul>
            <ul className="trendingCards__items">
              <FinCardItem
                src="https://cabotwealth.com/wp-content/uploads/Financial-Activity-Monitor.jpg"
                text="Options and Futures trading"
                subtext1="Risk Apetite: High"
                subtext2="Volatility: Medium"
                subtext3="Learning curve: High"
                subtext4="Returns: High"
                path="/Stocks"
              />
              <FinCardItem
                src="https://www.fool.com.au/wp-content/uploads/2019/06/REIT-16.9.jpg"
                text="Investing in REITs (Real estate investment trust)"
                subtext1="Risk Apetite: Low"
                subtext2="Volatility: Low"
                subtext3="Learning curve: Medium"
                subtext4="Returns: Low"
                path="/Stocks"
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
