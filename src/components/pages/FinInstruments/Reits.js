import React from "react";
import "./SubPages.css";
import Footer from "../../Footer";

function Reits() {
  return (
    <div className="container">
      <h1 className="main-header">REITs</h1>
      <div className="sub-container">
        <h3 className="sub-header">What Are REITs?</h3>
        <p className="body-text">
          REIT stands for Real Estate Investment Trust. REITs pool money from
          investors to invest in a portfolio of income-generating real estate
          assets. These assets can be: hotels, industrial buildings, shopping
          malls, offices or even data centres. In exchange for your investment
          in a REIT, you will receive{" "}
          <a
            className="tag"
            href="https://www.investopedia.com/terms/d/distribution.asp#:~:text=The%20word%20%22distribution%22%20has%20several,to%20an%20investor%20or%20beneficiary.&text=A%20distribution%20also%20refers%20to,other%20payouts%20to%20its%20shareholders."
          >
            distributions
          </a>{" "}
          at regular intervals — usually on a quarterly basis. But since REITs
          are professionally managed, the REIT managers will receive{" "}
          <a
            className="tag"
            href="https://sg.style.yahoo.com/reit-management-fees-4-things-234018136.html"
          >
            REIT management fees
          </a>{" "}
          and{" "}
          <a
            className="tag"
            href="https://www.thebalancesmb.com/a-breakdown-of-property-management-fees-4589926"
          >
            property management fees
          </a>{" "}
          . These will be paid out first before you, as an investor, receive
          your share of the cut.
        </p>
        <p className="body-text">
          REITs pool money from investors to buy and manage a portfolio of real
          estate assets or properties. There are a few types of properties that
          they focus on. As an investor, you can choose which type of REIT class
          you would like to invest in based on your area of interest or
          expertise.
          <ul>
            <li>
              Industrial REITs: represents the rate of change between the
              option's price and a $1 change in the underlying asset's price.
            </li>
            <li>
              Commercial REITs: These types of REITs invest directly or
              indirectly in office buildings.
            </li>
            <li>
              Residential REITs: These REITs own or operate rental properties.
              Such properties range from entire apartment buildings which are
              rented out to different families to manufactured housing.
            </li>

            <li>
              Hospitality REITs: These REITs focus on properties which deal with
              hospitality. These REITs own properties such as serviced
              apartments and hotels. Ascott Residence Trust is a good example of
              such a REIT.
            </li>
            <li>
              Healthcare REITs: These REITs focusing on hospitals, medical
              centres, nursing and retirement homes. A prime example of
              healthcare REITs will be Parkway Life REIT.
            </li>
            <li>
              Retail REITs: They invest in shopping malls and freestanding
              retail. There're no prizes for guessing, but yep, CapitaLand Mall
              Trust is a retail REIT.
            </li>
          </ul>
        </p>
      </div>

      <div className="singlePost">
        <div className="singlePostWrapper">
          <img
            className="singlePostImg"
            src="https://images.prismic.io/seedly/c25265a1-52b4-4d3e-90d6-cfee12dc6fa1_unnamed+%2813%29.png?auto=compress,format"
            alt=""
          />
        </div>
      </div>

      <div className="sub-container">
        <h3 className="sub-header">How to pick the best Singapore REITs</h3>
        <p className="body-text">
          Here, let’s explore some criterias to pick Singapore REITs to invest
          in.
          <ul>
            <li>
              Growth in Gross Revenue and Net Property Income:{" "}
              <a
                className="tag"
                href="https://www.reitas.sg/reit-basics/reit-glossary/"
              >
                Gross revenue
              </a>{" "}
              is money a REIT receives from its tenants mainly through the
              rentals. After deducting property-related expenses such as
              property management fees, property tax and maintenance expenses,
              we derive at the{" "}
              <a
                className="tag"
                href="https://www.reitsweek.com/2012/12/npi.html"
              >
                NPI
              </a>{" "}
              figure.
            </li>
            <li>
              Growth in Distribution Per Unit: Apart from gross revenue and NPI,
              it is important to look at whether a REIT’s{" "}
              <a
                className="tag"
                href="https://blog.seedly.sg/singapore-reits-higher-dpu/"
              >
                distribution per unit(DPU)
              </a>{" "}
              is improving consistently every year. Growth in DPU is critical as
              DPU’s ultimately what unitholders receive for investing in a REIT.
            </li>
            <li>
              Property Yield of Between 5% and 9%: A REIT’s property yield is
              its NPI divided by the valuation of the properties held in the
              REIT’s portfolio. The property yield reveals the strength of the
              REIT’s underlying properties and is more important than
              calculating the{" "}
              <a
                className="tag"
                href="https://www.commsec.com.au/education/learn/choosing-investments/what-is-distribution-yield.html#:~:text=Distribution%20yield%20can%20be%20used,a%20distribution%20yield%20of%205%25."
              >
                REIT's distribution yield
              </a>{" "}
              , which is ultimately a function of the stock market price.
            </li>
            <li>
              Gearing Ratio of Below 40%: The gearing ratio reveals the strength
              of a{" "}
              <a
                className="tag"
                href="https://www.probutterfly.com/blog/the-beginner-s-guide-to-analysis-financial-statements-balance-sheet"
              >
                REIT's balance sheet
              </a>{" "}
              . The gearing ratio is calculated by dividing the total loan of a
              REIT by its total assets. A relatively low gearing ensures that
              when the economy goes south, and asset prices come down, there’s
              enough margin of safety before the gearing limit is breached.
            </li>
            <li>
              Interest Coverage Ratio of Above 5x: Another aspect to look at is
              a REIT’s{" "}
              <a
                className="tag"
                href="https://www.mykayaplus.com/interest-coverage-ratio-reit-analysis-101/"
              >
                interest coverage ratio
              </a>{" "}
              . The interest cover is obtained by dividing the NPI by finance
              costs. Finance costs mainly consist of interest expense on
              borrowings.
            </li>
            <li>
              Healthy Portfolio Occupancy Rate: Moving on, the portfolio
              occupancy rate shows the ratio of a REIT’s rented space to the
              total amount of space available.
            </li>
            <li>
              Positive Rental Reversions: Rental increase is the most common way
              for REITs to grow their gross revenue. A REIT’s{" "}
              <a
                className="tag"
                href="https://www.businesstimes.com.sg/companies-markets/reits-must-be-consistent-in-how-they-compute-rental-reversions"
              >
                rental reversion
              </a>{" "}
              shows how new leases that were signed during a period have changed
              compared to the previous period. If the new leases are better than
              the previous one, it leads to a positive rental reversion.
            </li>
            <li>
              Presence of Growth Prospects: On top of growing through rental
              reversions, a REIT can also grow through{" "}
              <a
                className="tag"
                href="https://howtoinvest.asia/what-asset-enhancement-initiatives-is-and-why-its-important/"
              >
                acquisitions and asset enhancement initiatives (AEIs)
              </a>{" "}
              . A REIT with a strong sponsor can help in the acquisition front.
              The sponsor looks for properties to be placed into the initial
              portfolio of the REIT and may continue to provide a pipeline of
              assets for the REIT to acquire. The good sponsor also owns
              significant stakes in the REIT manager and the REIT.
            </li>
            <li>
              Acceptable{" "}
              <a
                className="tag"
                href="https://blog.seedly.sg/what-is-price-to-book-p-b-ratio/"
              >
                Price-To-Book ratio
              </a>{" "}
              : The price-to-book (PB) ratio is a valuation metric commonly used
              to value REITs. It consists of two parts: the unit price of a REIT
              and its book value. The book value (also known as net asset value)
              is the difference between a REIT’s assets and its liabilities, and
              it shows the REIT’s net worth.
            </li>
            <li>
              Distribution Yield: Distribution yield is similar to a dividend
              yield for a listed company. Distribution yield, another valuation
              metric, is obtained by dividing a REIT’s DPU by its unit price and
              multiplying that by 100%.
            </li>
          </ul>
        </p>
      </div>
      <div className="singlePost">
        <div className="singlePostWrapper">
          <img
            className="singlePostImg"
            src="https://commercialpropertykenya.com/wp-content/uploads/2020/08/How-REITs-work.jpg"
            alt=""
          />
        </div>
      </div>

      <div className="sub1-container">
        <h3 className="sub-header">Pros and Cons of REITs</h3>
        <p className="body-text">
          The first benefit in investing in a REIT would be accessibility and
          diversification. Another key feature of a REIT is its{" "}
          <a
            className="tag"
            href="https://www.reit.com/investing/investment-benefits-reits/reits-and-liquidity"
          >
            liquidity
          </a>{" "}
          . You can buy one at the opening of the market and sell before the
          market closes. Third is professional management and{" "}
          <a
            className="tag"
            href="https://www.reit.com/investing/investment-benefits-reits/reits-and-transparency"
          >
            transparency
          </a>
          .Companies which offer REITs have proven track record with several
          years of industry experience and are backed by adequate capital. REITs
          provide a steady stream of cash dividends to the investors. These
          dividends come from the income generated by the real estate assets,
          which in turn come from contracted rental cash flows. Since it comes
          from rental income, investing in REITs provide you with stable
          recurring dividends every year.
        </p>
        <p className="body-text">
          But as mentioned earlier, any form of investment carry risks. REIT
          share prices can drop as property values fall. Since REITs are
          tradeable like a stock, share prices can fall with the broader stock
          market based on supply and demand of its shares. While investing in
          REIT offers you more diversification, its income base is not as
          diversified as that of a large public company.
        </p>
      </div>

      <div className="sub1-container">
        <h3 className="sub-header">What are the next steps?</h3>
        <p className="body-text">
          REITs trade like stocks on the stock market. So all you need is an{" "}
          <a
            className="tag"
            href="https://www.moneysmart.sg/online-brokerage/reits"
          >
            online brokerage
          </a>{" "}
          in order to purchase the REIT you want. The great thing about this is
          that this means REIT investors can gain exposure to the property
          market without the need for a huge capital outlay. And unlike common
          stocks, REITs also enjoy unique tax transparency. In order to qualify
          for this, Singapore REITs are required to pay out at least 90% of
          their taxable income to unitholders in the same year which the income
          comes in. These regular and high payouts make Singapore REITs very
          attractive as an investment, particularly for investors who are
          looking for a regular source of passive income.
        </p>
      </div>

      <div className="last-container">
        <h3 className="conc">You're good to go!</h3>
        <p>
          Investing is all about the long-term. You should be disciplined and
          stay the course during market volatility, which is a norm when it
          comes to investing.
        </p>
      </div>

      <Footer />
    </div>
  );
}

export default Reits;
