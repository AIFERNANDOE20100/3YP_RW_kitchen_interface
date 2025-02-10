import React from "react";
import "./custom_button.css";

const CustomButton = ({ label, bgColor, textColor, fontSize, padding, borderRadius, onClick, disabled }) => {
  return (
    <button
      className={`custom-button ${disabled ? "disabled" : ""}`}
      style={{ backgroundColor: bgColor, color: textColor, fontSize, padding, borderRadius }}
      onClick={!disabled ? onClick : undefined}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default CustomButton;
