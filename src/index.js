import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "@firebase/auth";
import {
  FirebaseAuthProvider,
  FirebaseAuthConsumer,
} from "@react-firebase/auth";
import { firebase } from "@firebase/app";
import "@firebase/auth";
import { config } from "./components/config/firebase";

ReactDOM.render(
  <FirebaseAuthProvider {...config} firebase={firebase}>
    <App />
  </FirebaseAuthProvider>,
  document.getElementById("root")
);
