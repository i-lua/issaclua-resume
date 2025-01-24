/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import logo from "../assets/illogo.webp";
import resume from "../assets/iluaSoftwareResume.pdf";

const Footer = ({ toggleModal }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="container">
        <div className="row footer__row">
          <figure>
            <img className="footer__logo--img" src={logo} alt="Logo" />
          </figure>
          <div className="footer__social--list">
            <a
              href="https://github.com/i-lua"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social--link link__hover-effect link__hover-effect--white"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/issac-lua-78bbb2161/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social--link link__hover-effect link__hover-effect--white"
            >
              LinkedIn
            </a>
            <a
              href="#"
              onClick={toggleModal}
              className="footer__social--link link__hover-effect link__hover-effect--white"
            >
              Contact
            </a>
            <a
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social--link link__hover-effect link__hover-effect--white"
            >
              Resume
            </a>
          </div>
          <div className="footer__copyright">
            Copyright © <span>{currentYear}</span> Issac Lua
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
