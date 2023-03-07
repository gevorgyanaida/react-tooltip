import { useState } from "react";
import "./MyTooltip.css";

export default function MyTooltip(props) {
  const {
    position,
    backgroundColor = "black",
    color = "white",
    text,
    children,
  } = props;

  const [visible, setVisible] = useState(false);

  function showTooltip() {
    setVisible(true);
  }

  function hideTooltip() {
    setVisible(false);
  }

  var bodyStyles = document.body.style;
  bodyStyles.setProperty("--background-color", backgroundColor);


  return (
    <div
      className="container"
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
    >
      {children}
      {visible && (
        <div
          className={`tooltip tooltip-${position}`}
          style={{ backgroundColor: `${backgroundColor}`, color: `${color}` }}
        >
        {text}
        </div>
      )}
    </div>
  );
}
