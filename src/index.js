import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { config } from "./components/config/firebase";
import { FirebaseAuthProvider } from "@react-firebase/auth";
import "@react-firebase/auth";
// The following 2 imports differ from the website's guide a little
// You need to install both @firebase/app and @firebase/auth
// CLI Commands: yarn install @firebase/app @firebase/auth
import { firebase } from "@firebase/app";
import "@firebase/auth";
import "@firebase/firestore";
firebase.initializeApp(config);
//var db = firebase.firestore();

const rootElement = document.getElementById("root");
ReactDOM.render(
  <FirebaseAuthProvider {...config} firebase={firebase}>
    {<App />}
  </FirebaseAuthProvider>,
  rootElement
);
/*
ReactDOM.render(
  <FirebaseAuthProvider {...config} firebase={firebase}>
    <App />
  </FirebaseAuthProvider>,
  document.getElementById("root")
);*/
