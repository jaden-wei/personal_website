import React from "react";
import { Link } from "react-scroll";

import "./About.css";

function About() {
  return (
    <div className="page-container" id="about">
      <div className="section-container about-section">
        <div className="journey-container" data-aos="fade-right">
          <h1 className="journey-title">My Journey</h1>
          <p className="exp-header">
            Roblox - Incoming Software Engineer Intern (Summer 2023)
          </p>
          <p className="exp-header">
            SGNL - Software Engineer Intern (September 2022 - December 2022)
          </p>
          <ul className="exp-list">
            <li>
              Build a capacity model by simulating production-like read and
              write workloads in Neo4j’s graph database
            </li>
            <li>
              Generate large, synthetic datasets for scale testing to identify
              performance upper bounds and bottlenecks
            </li>
          </ul>
          <p className="exp-header">
            Purdue - Research Intern (August 2022 - December 2022)
          </p>
          <ul className="exp-list">
            <li>
              Collecting and analyzing real-time data under Dr. Shanyue Guan to
              develop a smart building framework
            </li>
            <li>
              Training ML models with TensorFlow, OpenCV, and U-Net to
              accurately perform semantic segmentation of UAV images with the
              goal of recognizing natural disasters to develop a live early
              warning system with drones
            </li>
          </ul>
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
