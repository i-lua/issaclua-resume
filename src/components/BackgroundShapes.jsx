import React, { useEffect } from "react";
import semiCircle from "../assets/semi circle.svg";
import circle from "../assets/circle.svg";
import squiggly from "../assets/squiggly.svg";
import triangle from "../assets/triangle.svg";

const scaleFactor = 0.05; // Adjust this value for scaling

const moveBackground = (event) => {
  const shapes = document.querySelectorAll(".shape");
  const x = event.clientX * scaleFactor;
  const y = event.clientY * scaleFactor;

  shapes.forEach((shape, index) => {
    const isOdd = index % 2 !== 0;
    const boolInt = isOdd ? -1 : 1;
    shape.style.transform = `translate(${x * boolInt}px, ${y * boolInt}px)`;
  });
};

const BackgroundShapes = () => {
  useEffect(() => {
    const handleMouseMove = (event) => moveBackground(event);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove); // Cleanup
    };
  }, []);

  return (
    <div>
      <img src={semiCircle} alt="semi circle" className="shape shape--0" />
      <img src={circle} alt="circle" className="shape shape--1" />
      <img src={squiggly} alt="squiggly" className="shape shape--2" />
      <img src={circle} alt="circle" className="shape shape--3" />
      <img src={triangle} alt="triangle" className="shape shape--4" />
      <img src={circle} alt="circle" className="shape shape--5" />
      <img src={squiggly} alt="squiggly" className="shape shape--6" />
      <img src={circle} alt="circle" className="shape shape--7" />
      <img src={semiCircle} alt="semi circle" className="shape shape--8" />
    </div>
  );
};

export default BackgroundShapes;
