import React from "react";
import Square from "./Square";
import "./board.css";

const Board = ({ squares, handleClick }) => {
  const handler = (i) => {
    handleClick(i);
  };
  return (
    <div className="Board mt-5">
      <Square value={squares[0]} index={0} handleClickOnSquare={handler} />
      <Square value={squares[1]} index={1} handleClickOnSquare={handler} />
      <Square value={squares[2]} index={2} handleClickOnSquare={handler} />

      <Square value={squares[3]} index={3} handleClickOnSquare={handler} />
      <Square value={squares[4]} index={4} handleClickOnSquare={handler} />
      <Square value={squares[5]} index={5} handleClickOnSquare={handler} />

      <Square value={squares[6]} index={6} handleClickOnSquare={handler} />
      <Square value={squares[7]} index={7} handleClickOnSquare={handler} />
      <Square value={squares[8]} index={8} handleClickOnSquare={handler} />
    </div>
  );
};

export default Board;
