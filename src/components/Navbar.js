import React, { useState, useEffect } from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { IfFirebaseAuthed, IfFirebaseUnAuthed } from "@react-firebase/auth";
import firebase from "firebase/app";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <p style={{ marginLeft: 30 }}>INVESTMENTGURU</p>
            <i className="fab fa-typo3" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/forum" className="nav-links" onClick={closeMobileMenu}>
                Forum
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/trending"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Trending
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/finInstruments"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Financial instruments
              </Link>
            </li>

            <li>
              <Link
                to="/sign-up"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
          </ul>
          <IfFirebaseUnAuthed>
            {button && <Button buttonStyle="btn--outline">SIGN UP/IN</Button>}
          </IfFirebaseUnAuthed>
          <IfFirebaseAuthed>
            <button
              className="btn--outline"
              onClick={() => {
                firebase.app().auth().signOut();
              }}
            >
              SIGN OUT
            </button>
          </IfFirebaseAuthed>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
