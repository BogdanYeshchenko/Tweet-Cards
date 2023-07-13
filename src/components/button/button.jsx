import "./button.css";

const Button = ({ isActive, onClick, text }) => {
  const colorButton = isActive ? "#5CD3A8" : "#EBD8FF";

  const colorButtonHover = "#5cd3a8";

  return (
    <button
      onClick={onClick}
      type="button"
      style={{
        "--colorButton": colorButton,
        "--colorButtonHover": colorButtonHover,
      }}
      className="meinButtonBox"
    >
      {text}
    </button>
  );
};

export default Button;
