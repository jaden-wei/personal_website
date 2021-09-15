import React from "react";
import { Link } from "react-scroll";

import "./About.css";

function About() {
  return (
    <div className="page-container" id="about">
      <div className="section-container about-section">
        <div className="about-container" data-aos="fade-right">
          <h1 className="about-title">About Me</h1>
          <p className="about-hobbies">
            I enjoy playing Chess, tennis, and snowboarding. Some of my other
            interests include computer hardware parts, cryptocurrency, and
            gaming.
          </p>
          <p className="about-coding">
            I started programming in my freshman year of high school, but
            started taking it seriously in my senior year. I occasionally attend
            competitions, but spend most of my time creating fun projects using
            cool technologies such as React, MongoDB, and Selenium.
          </p>
          <Link
            className="animated-btn"
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            Projects
          </Link>
        </div>
      </div>
    </div>
  );
}

export default About;
