import React, { useState } from "react";
import Board from "./Board";
import { Button } from "react-bootstrap";
import { Alert } from "react-bootstrap";

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
  let winner = calculateWinner(board, playWinner);

  const Reload = () => {
    const copiedBoard = [...board];
    copiedBoard.fill(null);
    setBoard(copiedBoard);
    setPlayWinner("");
    setXIsNext(true);
  };

  const handleSquareChange = (index) => {
    const copiedBoard = [...board];
    if (copiedBoard[index] || winner) {
      return;
    }

    copiedBoard[index] = xIsNext ? "X" : "O";
    setXIsNext(!xIsNext);
    setBoard(copiedBoard);
  };
  return (
    <>
      <div>
        <Alert variant="warning" className="mx-auto">
          Next Turn: {xIsNext ? "X" : "O"}
        </Alert>
        <Board squares={board} handleClick={handleSquareChange} />
        <Alert variant="danger" style={{ margin: "2%" }}>
          {winner === "X"
            ? "The winner is X Congrats"
            : winner === "O"
            ? "The winner is O Congrats!"
            : ""}{" "}
        </Alert>

        <div>
          <Button variant="primary" onClick={Reload} style={{ margin: "2%" }}>
            New Game
          </Button>
        </div>
      </div>
    </>
  );
};

export default Game;
