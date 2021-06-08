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
              src="https://images.financialexpress.com/2021/03/Stock-REU2-13.jpg"
              text="Stock Market outlook 2021"
              subtext="Morganstanley"
              label="Stocks"
              path="https://www.morganstanley.com/ideas/stock-market-outlook-2021"
            />
            <TrendingCardItem
              src="https://images.unsplash.com/photo-1519162584292-56dfc9eb5db4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Yml0Y29pbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              text="Forecasting Bitcoin price using quantitative models"
              subtext="Cointelegraph"
              label="Cryptocurrency"
              path="https://cointelegraph.com/news/forecasting-bitcoin-price-using-quantitative-models-part-3"
            />
          </ul>
          <ul className="trendingCards__items">
            <TrendingCardItem
              src="https://images.moneycontrol.com/static-mcnews/2020/01/Sensex_BSE_NSE_Stock-market_bull_bear_Gold-1-770x433.png?impolicy=website&width=770&height=431"
              text="Trading expensive options amid COVID-19 uncertainties"
              subtext="Moneycontrol"
              label="Options"
              path="https://www.moneycontrol.com/news/business/markets/trading-expensive-options-amid-covid-19-uncertainties-heres-what-you-need-to-know-5082561.html"
            />
            <TrendingCardItem
              src="https://www.syfe.com/magazine/wp-content/uploads/2020/04/Blog-Banner-Time-to-invest-55.png"
              text="Retail investors snap up China's first batch of Reits"
              subtext="BusinessTimes"
              label="REIT"
              path="https://www.businesstimes.com.sg/real-estate/retail-investors-snap-up-chinas-first-batch-of-reits"
            />
            <TrendingCardItem
              src="https://www.securitiesfinancetimes.com/securitieslendingnews/images/FridayJune420211622806612.jpg"
              text="RMA and State Street release ESG data white paper"
              subtext="Securitesfinancetimes"
              label="Securities"
              path="https://www.securitiesfinancetimes.com/securitieslendingnews/esgarticle.php?article_id=224777&navigationaction=esgnews&page=1&newssection=ESG"
            />
          </ul>
          <ul className="trendingCards__items">
            <TrendingCardItem
              src="https://image.cnbcfm.com/api/v1/image/105950083-1559732787601gettyimages-1140423073.jpeg?v=1622834318&w=900&h=506"
              text="The second-half recovery is underway, and these are the top stocks to own, analysts say"
              subtext="CNBC"
              label="Stocks"
              path="https://www.cnbc.com/2021/06/06/analysts-like-top-stocks-for-the-recovery-match-booking-holdings.html?&qsearchterm=stocks"
            />
            <TrendingCardItem
              src="https://assets.bwbx.io/images/users/iqjWHBFdfxIU/i7yNjkjkKGr8/v1/1000x-1.jpg"
              text="DBS gets licence for its majority-owned securities JV in China"
              subtext="BusinessTimes"
              label="Securities"
              path="https://www.businesstimes.com.sg/companies-markets/dbs-gets-licence-for-its-majority-owned-securities-jv-in-china-operations-to-start"
            />
            <TrendingCardItem
              src="https://cdn-japantimes.com/wp-content/uploads/2021/05/np_file_87436.jpeg"
              text="Tesla (TSLA) Discloses $1.5B Investment in Bitcoin"
              subtext="Investopedia"
              label="Cryptocurrency"
              path="https://www.investopedia.com/tesla-tsla-discloses-usd1-5b-investment-in-bitcoin-5105078"
            />
          </ul>
          <ul className="trendingCards__items">
            <TrendingCardItem
              src="https://cdn.benzinga.com/files/imagecache/story_image_685x375C/images/story/2012/facebook-1084449_1920_14.jpg"
              text="Facebook Options Traders Forecast Blue Skies Ahead"
              subtext="Benzinga"
              label="Options"
              path="https://www.benzinga.com/markets/options/21/06/21431820/facebook-options-traders-forecast-blue-skies-ahead"
            />
            <TrendingCardItem
              src="https://images.cnbctv18.com/wp-content/uploads/2020/11/asianmarket4-768x432.jpg"
              text="Asia shares hesitate, China imports underpin resources"
              subtext="Reuters"
              label="Stocks"
              path="https://www.reuters.com/article/us-global-markets/asia-shares-hesitate-china-imports-underpin-resources-idUSKCN2DJ00P"
            />
            <TrendingCardItem
              src="https://images2.markets.businessinsider.com/60ba59dd93c6fa00195e5388?format=jpeg"
              text="8 experts weigh in on what Coinbase adding dogecoin means for the meme cryptocurrency"
              subtext="MarketsInsider"
              label="Cryptocurrency"
              path="https://markets.businessinsider.com/currencies/news/coinbase-dogecoin-price-cryptocurrency-meme-token-experts-elon-musk-2021-6-1030497107"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Trending;
