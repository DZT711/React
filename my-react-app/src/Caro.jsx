import { useState } from 'react';
import './Caro.css';

// Square component - renders a single button for the tic-tac-toe board
// Props: value (X, O, or null), onSquareClick (callback when clicked)
function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

// Board component - renders the 3x3 tic-tac-toe board and handles game logic
// Props: xIsNext (boolean to determine whose turn), squares (array of board state), onPlay (callback for moves)
function Board({ xIsNext, squares, onPlay }) {
  // Handle square click - validates move and updates board state
  function handleClick(i) {
    // Exit if square is already filled or if there's a winner
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    // Create a copy of the board and place the current player's mark
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = 'X';
    } else {
      nextSquares[i] = 'O';
    }
    // Call parent callback with updated board state
    onPlay(nextSquares);
  }
  // Determine game status - check for winner or display next player
  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O');
  }
  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}

// Game component - manages game history and allows time travel through moves
export default function Game() {
  // history: stores all board states; currentMove: tracks which move we're viewing
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  // X plays on even moves (0, 2, 4...), O plays on odd moves (1, 3, 5...)
  const xIsNext = currentMove % 2 === 0;
  // Get the current board state from history
  const currentSquares = history[currentMove];
  // Update game history when a move is played
  // This removes any 'future' moves if jumping back in time
  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }
  // Jump to a specific move in history (time travel feature)
  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }
  // Reset the game to initial state
  function handleReset() {
    setHistory([Array(9).fill(null)]);
    setCurrentMove(0);
  }
  // Create list of buttons to navigate through game history
  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = 'Go to move #' + move;
    } else {
      description = 'Go to game start';
    }
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });
  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <button className="refresh-btn" onClick={handleReset}>🔄 New Game</button>
        <ol>{moves}</ol>
      </div>
    </div>
  );
}

// Helper function to determine if there's a winner
// Returns the winner ('X' or 'O') or null if no winner
function calculateWinner(squares) {
  // All possible winning combinations on a 3x3 board
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  // Check each winning combination
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    // If all three positions have the same value (X or O), that's the winner
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  // No winner found
  return null;
}