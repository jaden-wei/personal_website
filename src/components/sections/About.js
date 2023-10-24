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
            Purdue University - B.S. in Computer Science (August 2021 - Present)
          </p>
          <ul className="exp-list">
            <li>Minor in Mathematics</li>
            <li>GPA: 3.64</li>
            <li>Awards: Dean's list, Semester Honors</li>
          </ul>
          <p className="exp-header">
            Roblox - Incoming Software Engineer Intern (May 2023 - August 2023)
          </p>
          <ul className="exp-list">
            <li>Developed and published authentication classes and scripts to retrieve live data from storefront and internal APIs and incorporated scripts into a CLI tool through an internal scripting and automation framework</li>
            <li>Deployed a slack bot integration of the tool to production to enable seamless access to version information for engineers</li>
            <li>Slashed query latency by 60x by creating and deploying a cron job microservice that pings a back end caching system</li>
          </ul>
          <p className="exp-header">
            SGNL - Software Engineer Intern (September 2022 - December 2022)
          </p>
          <ul className="exp-list">
            <li>Created and optimized Neo4j Cypher read and write queries based on certain policies and constraints to reduce average query latency by 70%</li>
            <li>Executed and analyzed performance tests through Kubernetes pods with a variety of hardware specifications</li>
            <li>Developed scripts to construct graphs using Pandas and Matplotlib, enabling concise visualizations of query times with specific hardware specifications</li>
          </ul>
          <p className="exp-header">
            Purdue Discovery Undergraduate Interdisciplinary Research - Research Intern (August 2022 - December 2022)
          </p>
          <ul className="exp-list">
          <li>Generated datasets for testing by taking snapshots of online UAV videos of natural disasters</li>
          <li>Utilized TensorFlow and OpenCV to preprocess Kaggle datasets for a machine learning model</li>
          <li>Created a U-net neural network to perform semantic segmentation on images to detect flooding with 99% accuracy</li>
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
