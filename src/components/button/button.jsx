import "./button.css";

const Button = ({ isActive, onClick, text }) => {
  const colorButton = isActive ? "#5CD3A8" : "#EBD8FF";

  return (
    <button
      onClick={onClick}
      type="button"
      className="meinButtonBox"
      style={{ background: colorButton }}
    >
      {text}
    </button>
  );
};

export default Button;
