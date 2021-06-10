import React from "react";
import "./SubPages.css";
import Footer from "../../Footer";

function Options() {
  return (
    <div className="container">
      <h1 className="main-header">Options</h1>
      <div className="sub-container">
        <h3 className="sub-header">What Are Options?</h3>
        <p className="body-text">
          Options are{" "}
          <a
            className="tag"
            href="https://corporatefinanceinstitute.com/resources/knowledge/trading-investing/financial-instrument/"
          >
            financial instruments
          </a>{" "}
          that are{" "}
          <a
            className="tag"
            href="https://www.thebalance.com/what-are-derivatives-3305833"
          >
            derivatives
          </a>{" "}
          based on the value of underlying{" "}
          <a
            className="tag"
            href="https://www.myaccountingcourse.com/accounting-dictionary/securitiese"
          >
            securities
          </a>{" "}
          such as stocks. An options contract offers the buyer the opportunity
          to buy or sell—depending on the type of contract they hold—the
          underlying asset. Unlike{" "}
          <a
            className="tag"
            href="https://www.investopedia.com/terms/f/futures.asp"
          >
            futures
          </a>{" "}
          , the holder is not required to buy or sell the asset if they choose
          not to.
        </p>
        <p className="body-text">
          Each option contract will have a specific expiration date by which the
          holder must exercise their option. The stated price on an option is
          known as the{" "}
          <a
            className="tag"
            href="https://www.cmegroup.com/education/courses/introduction-to-options/what-is-exercise-price-strike.html#"
          >
            strike price
          </a>{" "}
          . Options are typically bought and sold through online or retail
          brokers.
        </p>
      </div>

      <div className="sub-container">
        <h3 className="sub-header">Options Trading</h3>
        <p className="body-text">
          Options are powerful because they can enhance an individual’s
          portfolio. They do this through added income, protection, and even
          leverage. Depending on the situation, there is usually an option
          scenario appropriate for an investor’s goal. A popular example would
          be using options as an effective{" "}
          <a
            className="tag"
            href="https://www.thebalance.com/hedge-what-it-is-how-it-works-with-examples-3305933"
          >
            hedge
          </a>{" "}
          against a declining stock market to limit downside losses. Options can
          also be used to generate recurring income. Additionally, they are
          often used for speculative purposes such as wagering on the direction
          of a stock.
        </p>
        <p className="body-text">
          A{" "}
          <a
            className="tag"
            href="https://corporatefinanceinstitute.com/resources/knowledge/trading-investing/call-option/"
          >
            call
          </a>{" "}
          option gives the holder the right to buy a stock and a{" "}
          <a
            className="tag"
            href="https://www.thestreet.com/investing/options/what-is-a-put-option-14826777"
          >
            put
          </a>{" "}
          option gives the holder the right to sell a stock. Think of a call
          option as a down-payment for a future purchase. There are four things
          you can do with options: Buy calls, Sell calls, Buy puts, and Sell
          puts.
        </p>
        <p className="body-text">
          The "
          <a
            className="tag"
            href="https://www.optionsplaybook.com/options-introduction/option-greeks/"
          >
            Greeks
          </a>
          " is a term used in the options market to describe the different
          dimensions of risk involved in taking an options position, either in a
          particular option or a portfolio of options. These variables are
          called Greeks because they are typically associated with Greek
          symbols. Each risk variable is a result of an imperfect assumption or
          relationship of the option with another underlying variable. Traders
          use different Greek values, such as delta, theta, and others, to
          assess options risk and manage option portfolios.
        </p>

        <p className="body-text">
          <ul>
            <li>
              <a
                className="tag"
                href="https://www.investopedia.com/terms/d/delta.asp"
              >
                Delta
              </a>{" "}
              (Δ): represents the rate of change between the option's price and
              a $1 change in the underlying asset's price.
            </li>
            <li>
              <a
                className="tag"
                href="https://www.investopedia.com/terms/t/theta.asp"
              >
                Theta
              </a>{" "}
              (Θ): represents the rate of change between the option price and
              time, or time sensitivity - sometimes known as an option's time
              decay.
            </li>
            <li>
              <a
                className="tag"
                href="https://www.investopedia.com/terms/g/gamma.asp"
              >
                Gamma
              </a>{" "}
              (Γ): represents the rate of change between an option's delta and
              the underlying asset's price. This is called second-order
              (second-derivative) price sensitivity.
            </li>
            <li>
              <a
                className="tag"
                href="https://www.investopedia.com/terms/v/vega.asp"
              >
                Vega
              </a>{" "}
              (V): represents the rate of change between an option's value and
              the underlying asset's implied volatility. This is the option's
              sensitivity to volatility.
            </li>
            <li>
              <a
                className="tag"
                href="https://www.investopedia.com/terms/r/rho.asp"
              >
                Rho
              </a>{" "}
              (p): represents the rate of change between an option's value and a
              1% change in the interest rate. This measures sensitivity to the
              interest rate.
            </li>
          </ul>
        </p>
      </div>

      <div className="singlePost">
        <div className="singlePostWrapper">
          <img
            className="singlePostImg"
            src="https://www.visualcapitalist.com/wp-content/uploads/2014/11/option-featured.jpg"
            alt=""
          />
        </div>
      </div>

      <div className="sub-container">
        <h3 className="sub-header">How options work</h3>
        <p className="body-text">
          In terms of{" "}
          <a
            className="tag"
            href="https://www.toptal.com/finance/financial-analysts/option-pricing"
          >
            valuing options contracts
          </a>{" "}
          , it is essentially all about determining the probabilities of future
          price events. The more likely something is to occur, the more
          expensive an option would be that profits from that event. For
          instance, a call value goes up as the stock (underlying) goes up. This
          is the key to understanding the relative value of options.
        </p>
        <p className="body-text">
          The less time there is until{" "}
          <a
            className="tag"
            href="https://www.help.saxo/hc/en-sg/articles/360045815011-How-does-Options-Expiry-work-"
          >
            expiry
          </a>{" "}
          , the less value an option will have. This is because the chances of a
          price move in the underlying stock diminish as we draw closer to
          expiry. This is why an option is a{" "}
          <a
            className="tag"
            href="https://financial-dictionary.thefreedictionary.com/wasting+asset"
          >
            wasting asset
          </a>{" "}
          . If you buy a one-month option that is out of the money, and the
          stock doesn’t move, the option becomes less valuable with each passing
          day. Since time is a component to the price of an option, a one-month
          option is going to be less valuable than a three-month option. This is
          because with more time available, the probability of a price move in
          your favor increases, and vice versa.
        </p>
        <p className="body-text">
          <a
            className="tag"
            href="https://www.optionsplaybook.com/options-introduction/what-is-volatility/"
          >
            Volatility
          </a>{" "}
          also increases the price of an option. This is because uncertainty
          pushes the odds of an outcome higher. If the volatility of the
          underlying asset increases, larger price swings increase the
          possibilities of substantial moves both up and down. Greater price
          swings will increase the chances of an event occurring. Therefore, the
          greater the volatility, the greater the price of the option. Options
          trading and volatility are intrinsically linked to each other in this
          way.
        </p>
        <p className="body-text">
          Fluctuations in option prices can be explained by{" "}
          <a
            className="tag"
            href="https://www.investopedia.com/terms/i/intrinsicvalue.asp"
          >
            intrinsic
          </a>{" "}
          value and{" "}
          <a
            className="tag"
            href="https://www.investopedia.com/terms/e/extrinsicvalue.asp"
          >
            extrinsic
          </a>{" "}
          value, which is also known as time value. An option's{" "}
          <a
            className="tag"
            href="https://www.stockinvestor.com/36867/option-premium-everything-you-need-to-know/"
          >
            premium
          </a>{" "}
          is the combination of its intrinsic value and time value. Intrinsic
          value is the in-the-money amount of an options contract, which, for a
          call option, is the amount above the strike price that the stock is
          trading. Time value represents the added value an investor has to pay
          for an option above the intrinsic value, which is the extrinsic value
          or time value.
        </p>
      </div>
      <div className="singlePost">
        <div className="singlePostWrapper">
          <img
            className="singlePostImg"
            src="https://www.investopedia.com/thmb/-qcY-q0HC6fZqiPYcXTRNNB5mlM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/OPTIONSBASICSFINALJPEGII-e1c3eb185fe84e29b9788d916beddb47.jpg"
            alt=""
          />
        </div>
      </div>

      <div className="sub1-container">
        <h3 className="sub-header">How to trade options in 4 steps</h3>
        <p className="body2-text">
          1) Open an options trading account
          <ul>
            <li>
              Before you can start trading options, you’ll have to prove you
              know what you’re doing. Compared with opening a brokerage account
              for stock trading, opening an{" "}
              <a
                className="tag"
                href="https://www.publicfinanceinternational.org/best-options-trading-platform-singapore/"
              >
                options trading account
              </a>{" "}
              requires larger amounts of capital. And, given the complexity of
              predicting multiple moving parts, brokers need to know a bit more
              about a potential investor before giving them a permission slip to
              start trading options. Finding the broker that offers the tools,
              research, guidance and support you need is especially important
              for investors who are new to options trading.
            </li>
          </ul>
        </p>
        <p className="body2-text">
          2) Pick which options to buy or sell
          <ul>
            <li>
              Depending on which direction you expect the underlying stock to
              move determines what type of options contract to take on: If you
              think the stock price will move up: buy a call option, sell a put
              option. If you think the stock price will stay stable: sell a call
              option or sell a put option. If you think the stock price will go
              down: buy a put option, sell a call option. This is just a very
              basic overview, for more advanced techniques check out this{" "}
              <a
                className="tag"
                href="https://www.nerdwallet.com/article/investing/options-trading-strategies"
              >
                options trading strategies guide
              </a>{" "}
              .
            </li>
          </ul>
        </p>
        <p className="body2-text">
          3) Predict the option strike price
          <ul>
            <li>
              When buying an option, it remains valuable only if the stock price
              closes the option’s expiration period “in the money.” That means
              either above or below the strike price. (For call options, it’s
              above the strike; for put options, it’s below the strike.) You’ll
              want to buy an option with a strike price that reflects where you
              predict the stock will be during the option’s lifetime.
            </li>
            <li>
              For example, if you believe the share price of a company currently
              trading for $100 is going to rise to $120 by some future date,
              you’d buy a call option with a strike price less than $120
              (ideally a strike price no higher than $120 minus the cost of the
              option, so that the option remains profitable at $120). Similarly,
              if you believe the company’s share price is going to dip to $80,
              you’d buy a put option (giving you the right to sell shares) with
              a strike price above $80 (ideally a strike price no lower than $80
              plus the cost of the option, so that the option remains profitable
              at $80).
            </li>
          </ul>
        </p>
        <p className="body2-text">
          4) Determine the option time frame
          <ul>
            <li>
              Every options contract has an expiration period that indicates the
              last day you can exercise the option. Your choices are limited to
              the ones offered when you call up an option chain. There are two
              styles of options,{" "}
              <a
                className="tag"
                href="https://www.money-zine.com/definitions/investing-dictionary/american-options/"
              >
                American
              </a>{" "}
              and{" "}
              <a
                className="tag"
                href="https://www.money-zine.com/definitions/investing-dictionary/european-options/"
              >
                European
              </a>{" "}
              , which differ depending on when the options contract can be
              exercised.
            </li>
            <li>
              Expiration dates can range from days to months to years. Longer
              expirations give the stock more time to move and time for your
              investment thesis to play out. As such, the longer the expiration
              period, the more expensive the option. A longer expiration is also
              useful because the option can retain time value, even if the stock
              trades below the strike price.
            </li>
          </ul>
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

export default Options;
