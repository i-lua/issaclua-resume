import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Modal from "./components/Modal";
import Footer from "./components/Footer";
import BackgroundShapes from "./components/BackgroundShapes";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  let contrastToggle = false;

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
    document.body.classList.toggle("modal--open");
  };

  const toggleContrast = () => {
    contrastToggle = !contrastToggle;
    if (contrastToggle) {
      document.body.classList += " dark-theme";
    } else {
      document.body.classList.remove("dark-theme");
    }
  };

  return (
    <div className="App">
      <Navbar toggleContrast={toggleContrast} toggleModal={toggleModal} />
      <Header toggleModal={toggleModal} />
      <Modal toggleModal={toggleModal} isModalOpen={isModalOpen} />
      <BackgroundShapes />
      <Projects />
      <Footer toggleModal={toggleModal} />
    </div>
  );
}

export default App;
