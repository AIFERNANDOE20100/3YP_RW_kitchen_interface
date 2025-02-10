import React from "react";
import "./custom_button.css";

const CustomButton = ({ label, color, size, onClick }) => {
  return (
    <button 
      className="custom-button" 
      style={{ backgroundColor: color, fontSize: size }} 
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default CustomButton;
