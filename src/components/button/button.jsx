import "./button.css";
// import { useState, useEffect } from "react";

const Button = ({ isActive, onClick, text }) => {
  // const [colorButton, setColorButton] = useState("#EBD8FF");

  // useEffect(() => {
  //   isActive ? setColorButton("#5CD3A8") : setColorButton("#EBD8FF");
  // }, [isActive]);

  const colorButtonHover = "#5cd3a8";

  return (
    <button
      onClick={onClick}
      type="button"
      style={{
        backgroundColor: isActive ? "#5CD3A8" : "#EBD8FF",
        // "--colorButton": colorButton,
        // "--colorButtonHover": colorButtonHover,
      }}
      className="meinButtonBox"
    >
      {text}
    </button>
  );
};

export default Button;
