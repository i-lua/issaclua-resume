/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import logo from "../assets/illogo.webp";

const Navbar = ({ toggleModal, toggleContrast }) => {
  return (
    <section
      id="landing-page"
      onMouseMove={(e) => console.log("Move background", e)}
    >
      <nav data-aos="zoom-out">
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
