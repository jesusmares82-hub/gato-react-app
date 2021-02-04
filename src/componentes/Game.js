import React, { useState } from "react";
import Board from "./Board";
import { Container } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { calculateWinner } from "../helpers";

const styles = {
  width: "200px",
  margin: "20px auto",
};

const Game = () => {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXisNext] = useState(true);
  const winner = calculateWinner(history[stepNumber]);

  const handleClick = (i) => {
    const timeInHistory = history.slice(0, stepNumber + 1);
    const current = timeInHistory[stepNumber];
    const squares = [...current];
    // If user click an occupied square or if game is won, return
    if (winner || squares[i]) return;
    // Put an X or an O in the clicked square
    squares[i] = xIsNext ? "X" : "O";
    setHistory([...timeInHistory, squares]);
    setStepNumber(timeInHistory.length);
    setXisNext(!xIsNext);
  };

  const jumpTo = (step) => {
    setStepNumber(step);
    setXisNext(step % 2 === 0);
    if (step === 0) {
      setStepNumber(0);
      setXisNext(!xIsNext);
      setHistory([Array(9).fill(null)]);
      window.location.reload();
    }
  };

  const renderMoves = () =>
    history.map((_step, move) => {
      const destination = move ? `Turn # ${move}` : "New Game";
      return (
        <div className="mt-2 mb-2" key={move}>
          <Button variant="primary" onClick={() => jumpTo(move)}>
            {destination}
          </Button>
          {""}
        </div>
      );
    });

  return (
    <>
      <Container style={{ backgroundColor: "#f8f1f1" }}>
        <h1 style={{ color: "#21209c" }}>TIC TAC TOE</h1>
        <Row>
          <Col lg="6">
            <p style={{ color: "#21209c" }}>
              {!winner ? "Next Player: " + (xIsNext ? "X" : "O") : ""}
            </p>
            <Board squares={history[stepNumber]} handleClick={handleClick} />
            <div style={styles}>
              <p style={{ color: "#21209c" }}>
                {winner ? "Winner: " + winner : ""}
              </p>
            </div>
          </Col>
          <Col lg="6">{renderMoves()}</Col>
        </Row>
      </Container>
    </>
  );
};

export default Game;
