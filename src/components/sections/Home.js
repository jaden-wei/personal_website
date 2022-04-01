import React from "react";
import { Link } from "react-scroll";

import "./Home.css";

function Home() {
  return (
    <div className="page-container" id="home">
      <div className="section-container home-section">
        <div className="intro-container" data-aos="fade-right">
          <h1 className="intro-name">Hello! My name is Jaden Wei.</h1>
          <h1 className="intro-heading">I like writing code.</h1>
          <p className="intro-paragraph">
            I am a computer science student at Purdue Univeristy who loves to
            learn and create projects with Javascript, Python, and Java.
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
      </div>
    </div>
  );
}

export default Home;
