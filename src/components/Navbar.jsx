/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import logo from "../assets/illogo.webp";

const Navbar = ({ toggleModal, toggleContrast }) => {
  return (
    <section
      id="landing-page"
      onMouseMove={(e) => console.log("Move background", e)}
    >
      <nav>
        <figure>
          <img id="personal-logo" src={logo} alt="Personal Logo" />
        </figure>
        <ul className="nav__link--list">
          <li className="nav__link">
            <a
              href="#"
              onClick={toggleModal}
              className="nav__link--anchor link__hover-effect link__hover-effect--black"
            >
              About
            </a>
          </li>
          <li className="nav__link">
            <a
              href="#projects"
              className="nav__link--anchor link__hover-effect link__hover-effect--black"
            >
              Projects
            </a>
          </li>
          <li className="nav__link">
            <a
              href="#"
              onClick={toggleModal}
              className="nav__link--anchor link__hover-effect link__hover-effect--black"
            >
              Contacts
            </a>
          </li>
          <li className="nav__link click">
            <a
              href="#"
              onClick={toggleContrast}
              className="nav__link--anchor link__hover-effect link__hover-effect--black"
            >
              <i className="fa fa-adjust"></i>
            </a>
          </li>
        </ul>
      </nav>
      <header className="header">
        <div className="header__content">
          <h1 className="title">Hey</h1>
          <h1 className="title blue">I'm Issac</h1>
          <p className="header__para">
            I'm a <b className="blue">Frontend Software Engineer</b> with a
            strong passion for experiences.
            <br />
            Here's a bit more{" "}
            <b className="blue click" onClick={toggleModal}>
              about me.
            </b>
          </p>
          <div className="social__list">
            <a
              href="https://www.linkedin.com/in/issac-lua-78bbb2161/"
              target="_blank"
              rel="noopener noreferrer"
              className="social__link click"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              href="https://github.com/i-lua"
              target="_blank"
              rel="noopener noreferrer"
              className="social__link click"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="./assets/David Bragg Resume.pdf"
              target="_blank"
              className="social__link click"
            >
              <i className="fas fa-file-pdf"></i>
            </a>
          </div>
        </div>
      </header>
      <a href="#">
        <button className="mail__btn click" onClick={toggleModal}>
          <i className="fas fa-envelope"></i>
        </button>
      </a>
      <a href="#projects" className="scroll">
        <div className="scroll__icon click"></div>
      </a>
    </section>
  );
};

export default Navbar;
