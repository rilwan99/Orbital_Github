import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="/videos/stockmarketvideo.mp4" autoPlay loop muted />
      <h1 style={{ maxWidth: 1000 }}>TIME TO LEARN HOW TO INVEST NOW</h1>
      <p>What are you waiting for?</p>
    </div>
  );
}

export default HeroSection;
