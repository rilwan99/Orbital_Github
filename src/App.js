import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import SignUpForm from "./components/SignUpForm";
import Trending from "./components/pages/Trending/Trending";
import FinInstruments from "./components/pages/FinInstruments/FinInstruments";
import SignUp from "./components/pages/SignUp";
import "./App.css";
import Stocks from "./components/pages/FinInstruments/Stocks";
import Crypto from "./components/pages/FinInstruments/Crypto";
import Options from "./components/pages/FinInstruments/Options";
import Reits from "./components/pages/FinInstruments/Reits";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/trending" component={Trending} />
          <Route path="/finInstruments" component={FinInstruments} />
          <Route path="/Stocks" component={Stocks} />
          <Route path="/Crypto" component={Crypto} />
          <Route path="/Options" component={Options} />
          <Route path="/Reits" component={Reits} />
          <Route path="/sign-up" component={SignUp} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
