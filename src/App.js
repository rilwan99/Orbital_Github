import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import SignUp from "./components/pages/SignUp";
import SignIn from "./components/pages/SignIn";
import Trending from "./components/pages/Trending/Trending";
import FinInstruments from "./components/pages/FinInstruments/FinInstruments";
import "./App.css";
import Stocks from "./components/pages/FinInstruments/Stocks";
import Crypto from "./components/pages/FinInstruments/Crypto";
import Options from "./components/pages/FinInstruments/Options";
import Reits from "./components/pages/FinInstruments/Reits";
import Forum from "./components/pages/Forum/forum";
import NewPost from "./components/pages/newPost";

//import { FirebaseDatabaseProvider } from "@react-firebase/auth";

function App() {
  //const uid = firebase.auth().currentUser?.uid;
  //const db = firebase.firestore();
  //const docRef = db.collection("/tasks").doc(uid);
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
          <Route path="/sign-in" component={SignIn} />
          <Route path="/forum" component={Forum} />
          <Route path="/new-post" component={NewPost} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
