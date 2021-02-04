import React from "react";
import "./square.css";
const Square = ({ value, handleClickOnSquare, index }) => {
  return (
    <button
      style={{ color: "#111d5e" }}
      className="Square"
      onClick={() => handleClickOnSquare(index)}
    >
      {value}
    </button>
  );
};

export default Square;
