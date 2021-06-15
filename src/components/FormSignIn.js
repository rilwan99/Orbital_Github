import firebase from "firebase/app";
import { FirebaseAuthConsumer } from "@react-firebase/auth";
import React, { useState, useEffect } from "react";
//import "../App.css";
//import { Button } from "./Button";
//import "./Button.css";
import "./FormSignIn.css";
import "./Form.css";
import { CenterFocusStrong } from "@material-ui/icons";

function FormSignIn() {
  const handleSignIn = (firebase) => {
    const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(googleAuthProvider);
  };
  return (
    <div className="sign-in-format">
      <p style={{ fontSize: 18 }}>Not Logged In.</p>
      <FirebaseAuthConsumer>
        {({ firebase }) => (
          <button
            className="form-input-btn btn-center"
            onClick={() => handleSignIn(firebase)}
          >
            Sign In With Google
          </button>
        )}
      </FirebaseAuthConsumer>
    </div>
  );
}

export default FormSignIn;
