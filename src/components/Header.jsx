import React from "react";

const Header = ({ toggleModal }) => {
  return (
    <header className="header">
      <div className="header__content">
        <h1 className="title">Hey</h1>
        <h1 className="title blue">I'm Issac</h1>
        <p className="header__para">
          I'm a <b className="blue">Frontend Software Engineer</b> with a strong
          passion for experiences.
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
            className="social__link click"
            rel="noreferrer"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="https://github.com/i-lua" className="social__link click">
            <i className="fab fa-github"></i>
          </a>
          <a
            href="./assets/David_Bragg_Resume.pdf"
            target="_blank"
            className="social__link click"
          >
            <i className="fas fa-file-pdf"></i>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
