import React from "react";

const PrimaryButton = ({ label, onClick, type = "primary" }) => {
  const baseStyle =
    "px-6 py-3 rounded-xl font-semibold transition-all duration-300";

  const styles = {
    primary:
      "bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:scale-105 hover:shadow-lg",
    secondary:
      "bg-white text-indigo-600 border border-indigo-600 hover:bg-indigo-50 hover:scale-105",
    outline:
      "border-2 border-gray-600 text-gray-700 hover:bg-gray-100 hover:scale-105",
  };

  return (
    <button onClick={onClick} className={`${baseStyle} ${styles[type]}`}>
      {label}
    </button>
  );
};

export default PrimaryButton;
