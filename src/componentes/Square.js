import React from "react";
import "./square.css";
const Square = ({ value, handleClickOnSquare, index }) => {
  return (
    <button className="Square" onClick={() => handleClickOnSquare(index)}>
      {" "}
      {value}{" "}
    </button>
  );
};

export default Square;
