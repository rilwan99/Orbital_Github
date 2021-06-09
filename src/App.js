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
          <Route path="/sign-up" component={SignUp} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
