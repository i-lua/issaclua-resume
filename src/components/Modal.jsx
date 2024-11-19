import React from "react";
import emailjs from "emailjs-com";
import html from "../assets/html5.svg";
import css from "../assets/css3-alt-brands-solid.svg";
import js from "../assets/js-brands-solid.svg";
import react from "../assets/react-brands-solid.svg";

function Modal({ toggleModal, isModalOpen }) {
  const contact = (event) => {
    event.preventDefault();
    const loading = document.querySelector(".modal__overlay--loading");
    const success = document.querySelector(".modal__overlay--success");
    loading.classList.add("modal__overlay--visible");

    emailjs
      .sendForm(
        "service_q87kve8",
        "template_m90imjd",
        event.target,
        "4qWfXumD-QtpTJXVK"
      )
      .then(() => {
        loading.classList.remove("modal__overlay--visible");
        success.classList.add("modal__overlay--visible");
        setTimeout(() => {
          success.classList.remove("modal__overlay--visible");
          toggleModal();
        }, 3000);
      })
      .catch(() => {
        loading.classList.remove("modal__overlay--visible");
        alert(
          "The email service is temporarily unavailable. Please contact me directly at issaclua@gmail.com"
        );
      });
  };

  return (
    <div className={`modal ${isModalOpen ? "modal--visible" : ""}`}>
      <div className="modal__half modal__about">
        <h3 className="modal__title modal__title--about">
          Here's a bit about me.
        </h3>
        <h4 className="modal__sub-title modal__sub-title--about">
          Frontend Software Engineer.
        </h4>
        <p className="modal__para">
          I'm a 26-year-old <b className="blue">frontend software engineer</b>{" "}
          with a strong passion for developing websites with great{" "}
          <b className="blue">user experiences</b>.
          <br />I currently work on extremely difficult engineering problems and
          learn from a team consisting of some of the most{" "}
          <b className="blue">talented</b> and{" "}
          <b className="blue">experienced</b> software engineers every day.
        </p>
        <div className="modal__languages">
          <figure className="modal__language">
            <img className="modal__language--img" src={html} alt="HTML5 logo" />
            <span className="language__name">HTML</span>
          </figure>
          <figure className="modal__language">
            <img className="modal__language--img" src={css} alt="CSS3 logo" />
            <span className="language__name">CSS</span>
          </figure>
          <figure className="modal__language">
            <img
              className="modal__language--img"
              src={js}
              alt="JavaScript logo"
            />
            <span className="language__name">JavaScript</span>
          </figure>
          <figure className="modal__language">
            <img
              className="modal__language--img"
              src={react}
              alt="React logo"
            />
            <span className="language__name">React</span>
          </figure>
        </div>
      </div>
      <div className="modal__half modal__contact">
        <i
          className="fas fa-times modal__exit click"
          onClick={toggleModal}
          aria-label="Close Modal"
        ></i>
        <h3 className="modal__title modal__title--contact">
          Let's have a chat!
        </h3>
        <h4 className="modal__sub-title modal__sub-title--contact">
          I'm currently open to new opportunities.
        </h4>
        <form id="contact__form" onSubmit={contact}>
          <div className="form__item">
            <label className="form__item--label" htmlFor="user_name">
              Name
            </label>
            <input
              className="input"
              name="user_name"
              id="user_name"
              type="text"
              required
            />
          </div>
          <div className="form__item">
            <label className="form__item--label" htmlFor="user_email">
              Email
            </label>
            <input
              className="input"
              name="user_email"
              id="user_email"
              type="email"
              required
            />
          </div>
          <div className="form__item">
            <label className="form__item--label" htmlFor="message">
              Message
            </label>
            <textarea className="input" name="message" id="message" required />
          </div>
          <button id="contact__submit" className="form__submit">
            Send it my way
          </button>
        </form>
        <div className="modal__overlay modal__overlay--loading">
          <i className="fas fa-spinner"></i>
        </div>
        <div className="modal__overlay modal__overlay--success">
          Thanks for the message! Looking forward to speaking to you soon.
        </div>
      </div>
    </div>
  );
}

export default Modal;
