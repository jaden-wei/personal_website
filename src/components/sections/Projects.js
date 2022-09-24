import React from "react";
import { AiFillGithub } from "react-icons/ai";

import "./Projects.css";
import Bot2048 from "./projects/2048";
import Krypto from "./projects/Krypto";
import Typey from "./projects/Typey";
import SideProjectsData from "./projects/SideProjectsData";

function Projects() {
  return (
    <div className="page-container" id="projects">
      <div className="section-container projects-section" data-aos="fade-right">
        <h1 className="projects-section-title">My Projects</h1>
        <div className="main-projects-container">
          <div className="project bot">
            <Bot2048 />
            <div className="project-description">
              <a href="https://play2048.co/">2048 Bot</a>
              <p>
                Tools: Python, Selenium, OpenCV, Numpy, Pillow, ImageGrab,
                Multiprocessing
              </p>
              <p>
                Description: Python AI that opens up the 2048 game on Google
                Chrome. I implemented a Monte-Carlo algorithm and the program
                gets tiles of 2048 with occasional 4096 tiles. Multiprocessing
                was incorporated to speed up the program.
              </p>
              <a href="https://github.com/jwee789/2048-bot">
                <AiFillGithub className="github-icon" />
              </a>
            </div>
          </div>
          <div className="project typey">
            <Typey />
            <div className="project-description">
              <a href="https://onlinetypingtest.netlify.app/">Typing Test</a>
              <p>
                Tools: MongoDB, Express, React JS, Sass, JWT Authentication,
                Bcrypt, Chart JS
              </p>
              <p>
                Description: Full stack web application created with MongoDB,
                Express, and React JS. Styling was done in Sass. Track your
                progress over time with the visuals created using Chart JS.
              </p>
              <a href="https://github.com/jwee789/Typey">
                <AiFillGithub className="github-icon" />
              </a>
            </div>
          </div>
          <div className="project krypto">
            <Krypto />
            <div className="project-description">
              <a href="https://krypto.netlify.app/">Krypto</a>
              <p>Tools: React JS, Chart JS, React Bootstrap</p>
              <p>
                Description: A cryptocurrency website displaying the top
                cryptocurrencies in a simple table. See how the prices have
                changed in the interactive graphs created with Chart JS.
              </p>
              <a href="https://github.com/jwee789/crypto-app">
                <AiFillGithub className="github-icon" />
              </a>
            </div>
          </div>
        </div>
        <div className="side-projects-container">
          {SideProjectsData.map((project, index) => {
            return (
              <div key={index} className="side-project-description">
                <p className="project-title">
                  <a href={project.link}>{project.name}</a>
                </p>
                <p>{`Tools: ${project.tools}`}</p>
                <p>{`Description: ${project.description}`}</p>
                <a href={project.github}>
                  <AiFillGithub className="github-icon" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Projects;
