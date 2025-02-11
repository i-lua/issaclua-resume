import React, { useEffect, useRef } from "react";
import semiCircle from "../assets/semi circle.svg";
import circle from "../assets/circle.svg";
import squiggly from "../assets/squiggly.svg";
import triangle from "../assets/triangle.svg";


const scaleFactor = 0.05; // Adjust this value for scaling

const BackgroundShapes = () => {
  const shapesRef = useRef([]);

  useEffect(() => {
    const moveBackground = (event) => {
      const x = event.clientX * scaleFactor;
      const y = event.clientY * scaleFactor;

      shapesRef.current.forEach((shape, index) => {
        if (shape) {
          const isOdd = index % 2 !== 0;
          const boolInt = isOdd ? -1 : 1;
          shape.style.transform = `translate(${x * boolInt}px, ${y * boolInt}px)`;
        }
      });
    };

    window.addEventListener("mousemove", moveBackground);

    return () => {
      window.removeEventListener("mousemove", moveBackground);
    };
  }, []);

  return (
    <div>
      {[
        semiCircle,
        circle,
        squiggly,
        circle,
        triangle,
        circle,
        squiggly,
        circle,
        semiCircle,
      ].map((imgSrc, index) => (
        <img
          key={index}
          src={imgSrc}
          alt="background shape"
          className={`shape shape--${index}`}
          ref={(el) => (shapesRef.current[index] = el)}
        />
      ))}
    </div>
  );
};

export default BackgroundShapes;
