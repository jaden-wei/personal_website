import React, { useState } from "react";
import { Link } from "react-scroll";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { IconContext } from "react-icons";

import "./Navbar.css";

function Navbar() {
  const [clicked, setClicked] = useState(false);

  const toggleNav = () => setClicked(!clicked);

  if (window.screen.width <= 1280) {
    return (
      <>
        <IconContext.Provider value={{ color: "#fff" }}>
          <div className="navbar">
            <Link to="#" className="burger">
              <FaIcons.FaBars onClick={toggleNav} />
            </Link>
          </div>
          <nav className={clicked ? "side-bar active" : "side-bar"}>
            <Link to="#" className="burger">
              <AiIcons.AiOutlineClose onClick={toggleNav} />
            </Link>
            <div className="page-links">
              <Link
                onClick={toggleNav}
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                Home
              </Link>

              <Link
                onClick={toggleNav}
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                About
              </Link>
              <Link
                onClick={toggleNav}
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                Projects
              </Link>
              <Link
                onClick={toggleNav}
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                Contact
              </Link>
              <a href="https://www.linkedin.com/in/jaden-wei/">
                LinkedIn
              </a>
            </div>
          </nav>
        </IconContext.Provider>
      </>
    );
  } else
    return (
      <div className="navbar">
        <div className="navbar-link-container">
          <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            Home
          </Link>
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            About
          </Link>
          <Link
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            Projects
          </Link>
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            Contact
          </Link>
          <a href="https://www.linkedin.com/in/jaden-wei/">
            LinkedIn
          </a>
        </div>
      </div>
    );
}

export default Navbar;
