//import firebase from "firebase/app";
import {
  FirebaseAuthConsumer,
  IfFirebaseAuthed,
  IfFirebaseUnAuthed,
} from "@react-firebase/auth";
import React, { useState } from "react";
import "./FormSignIn.css";
import "./Form.css";
import Home from "../components/pages/Home";
import { useHistory } from "react-router-dom";

function FormSignIn() {
  const history = useHistory();
  const handleSignIn = (firebase) => {
    const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(googleAuthProvider);
  };
  const handleSignInViaEmail = (event, firebase) => {
    event.preventDefault();
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        var user = userCredential.user;
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <IfFirebaseUnAuthed>
        <div className="sign-in-format">
          <form className="form">
            <p className="signinform-header">SIGN IN</p>
            <div className="form-inputs">
              <label className="form-label">Email:</label>
              <input
                className="form-input"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Enter your email."
              ></input>
            </div>
            <div className="form-inputs">
              <label className="form-label">Password:</label>
              <input
                className="form-input"
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="Enter your password."
              ></input>
            </div>
            <FirebaseAuthConsumer>
              {({ firebase }) => (
                <button
                  type="submit"
                  className="signinform-btn"
                  onClick={(event) => handleSignInViaEmail(event, firebase)}
                >
                  Sign In With Email
                </button>
              )}
            </FirebaseAuthConsumer>
            <p style={{ color: "white", marginTop: 8 }}>
              ----------------------------- OR -----------------------------
            </p>
            <FirebaseAuthConsumer>
              {({ firebase }) => (
                <button
                  className="signinform-btn"
                  type="submit"
                  onClick={() => handleSignIn(firebase)}
                >
                  Sign In With Google
                </button>
              )}
            </FirebaseAuthConsumer>
          </form>
        </div>
      </IfFirebaseUnAuthed>
      <IfFirebaseAuthed>{() => history.push("/")}</IfFirebaseAuthed>
    </div>
  );
}

export default FormSignIn;

/*
return (
  <FirebaseAuthConsumer>
    <div className="sign-in-format">
      <p style={{ fontSize: 20 }}>Not Logged In.</p>
      <form>
        <label>Enter your email:</label>
        <input
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        ></input>
        <br></br>
        <label>Enter your password:</label>

        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        ></input>
        <button type="submit" onClick={handleSignInViaEmail}>
          Login via email and password.
        </button>
      </form>
      ------------------------------------------------------------------
      {({ firebase }) => (
        <button
          className="form-input-btn btn-center"
          onClick={() => handleSignIn(firebase)}
        >
          Sign In With Google
        </button>
      )}
    </div>
  </FirebaseAuthConsumer>
);
}*/
