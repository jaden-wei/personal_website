import React from "react";
import { Link } from "react-scroll";
import Computer from "../Computer";

import "./Home.css";

function Home() {
  return (
    <>
      <div className="page-container" id="home">
        <div className="section-container home-section">
          <div className="intro-container" data-aos="fade-right">
            <h1 className="intro-name">Hello! My name is Jaden Wei.</h1>
            <p className="intro-paragraph">
              I am a student at Purdue studying computer science and math, and I'm currently looking for internships and full time opportunities. 
            </p>
            <p className="model-desc">
              Try dragging around the model on the right! (Desktop Only)
            </p>
            <Link
              className="animated-btn"
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              Learn More
            </Link>
          </div>
          <div className="model-container">
            <Computer className="model" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
