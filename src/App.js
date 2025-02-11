import React, { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Modal from "./components/Modal";
import Footer from "./components/Footer";
import BackgroundShapes from "./components/BackgroundShapes";
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [contrastToggle, setContrastToggle] = useState(false)

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
      delay: 200,
      easing: "ease-in-out",
    });
    AOS.refresh()
  }, [contrastToggle, isModalOpen]);

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
    document.body.classList.toggle("modal--open");
  };

  const toggleContrast = () => {
    setContrastToggle((prev) => !prev)
    document.body.classList.toggle('dark-theme')
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
