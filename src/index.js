import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {
  FirebaseAuthProvider,
  FirebaseAuthConsumer,
} from "@react-firebase/auth";
import { config } from "./components/config/firebase";
import firebase from "firebase/app";
import "firebase/database";
import "firebase/storage";
import "firebase/firestore";
firebase.initializeApp(config);
var db = firebase.firestore();

ReactDOM.render(
  <FirebaseAuthProvider {...config} firebase={firebase}>
    <App />
  </FirebaseAuthProvider>,
  document.getElementById("root")
);
