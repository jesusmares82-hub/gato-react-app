import React, { useState, useEffect } from "react";
import Board from "./Board";

function calculateWinner(board) {
  const winningPositions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let index = 0; index < winningPositions.length; index++) {
    const [a, b, c] = winningPositions[index]; // index = 1 a:3,b:4,c:5
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }

  return null;
}

const Game = () => {
  const [board, setBoard] = useState(new Array(9).fill(null)); // null, "X", "O"
  const [xIsNext, setXIsNext] = useState(true);
  const [playWinner, setPlayWinner] = useState("");
  let winner = calculateWinner(board);

  const Reload = () => {
    const copiedBoard = [...board];
    copiedBoard.fill(null);
    setBoard(copiedBoard.fill(null));
    setPlayWinner("");
    setXIsNext(true);
  };

  useEffect(() => {
    setPlayWinner(winner);
  });

  const handleSquareChange = (index) => {
    const copiedBoard = [...board];
    if (copiedBoard[index] || winner) {
      setPlayWinner(winner);

      return;
    }

    copiedBoard[index] = xIsNext ? "X" : "O";
    setXIsNext(!xIsNext);
    setBoard(copiedBoard);
    setPlayWinner(winner);
  };
  return (
    <div>
      <label>Next Turn: {xIsNext ? "X" : "O"}</label>
      <Board squares={board} handleClick={handleSquareChange} />
      <label>WINNER: {playWinner}</label>
      <div>
        <button onClick={Reload} style={{ margin: "4%" }}>
          Nueva Partida
        </button>
      </div>
    </div>
  );
};

export default Game;
