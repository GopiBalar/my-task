import React, { useEffect, useState } from "react";
import styles from "../../styles/tic-tac-toe/ticTacToe.module.css";

function Square({ value, onClick }) {
  return (
    <button onClick={onClick} className={styles.squreBtn}>
      {value}
    </button>
  );
}

function TicTacToe() {
  const [squares, setSquares] = useState(Array(9).fill(""));
  const [isXTurn, setIsXTurn] = useState(true);
  const [status, setStatus] = useState("");

  function getWinner(squares) {
    const winningPetterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < winningPetterns.length; i++) {
      const [x, y, z] = winningPetterns[i];

      if (
        squares[x] &&
        squares[x] === squares[y] &&
        squares[x] === squares[z]
      ) {
        return squares[x];
      }
    }
    return null;
  }

  function handleClick(getCurrentSqure) {
    let cpySquares = [...squares];
    if (getWinner(cpySquares) || cpySquares[getCurrentSqure]) return;
    cpySquares[getCurrentSqure] = isXTurn ? "X" : "O";
    setIsXTurn(!isXTurn);
    setSquares(cpySquares);
  }

  function handleRestart() {
    setIsXTurn(true);
    setSquares(Array(9).fill(""));
  }

  useEffect(() => {
    if (!getWinner(squares) && squares.every((item) => item !== "")) {
      setStatus("This is a draw ! Please Restart a game !");
    } else if (getWinner(squares)) {
      setStatus(`Winner is ${getWinner(squares)} !Please restart the game`);
    } else {
      setStatus(`Next player is ${isXTurn ? "X" : "O"}`);
    }
  }, [squares, isXTurn]);

  return (
    <div className={styles.ticTacToeContainer}>
      <h1>{status}</h1>

      <div>
        <Square value={squares[0]} onClick={() => handleClick(0)} />
        <Square value={squares[1]} onClick={() => handleClick(1)} />
        <Square value={squares[2]} onClick={() => handleClick(2)} />
      </div>
      <div>
        <Square value={squares[3]} onClick={() => handleClick(3)} />
        <Square value={squares[4]} onClick={() => handleClick(4)} />
        <Square value={squares[5]} onClick={() => handleClick(5)} />
      </div>
      <div>
        <Square value={squares[6]} onClick={() => handleClick(6)} />
        <Square value={squares[7]} onClick={() => handleClick(7)} />
        <Square value={squares[8]} onClick={() => handleClick(8)} />
      </div>
      <br />
      <button onClick={handleRestart} className={styles.restartBtn}>
        Restart
      </button>
    </div>
  );
}

export default TicTacToe;
