//import firebase from "firebase/app";
import { FirebaseAuthConsumer } from "@react-firebase/auth";
import React from "react";
import "./FormSignIn.css";
import "./Form.css";

function FormSignIn() {
  const handleSignIn = (firebase) => {
    const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(googleAuthProvider);
  };
  return (
    <div className="sign-in-format">
      <p style={{ fontSize: 20 }}>Not Logged In.</p>
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
