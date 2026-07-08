import { useState, useEffect } from 'react';
import './CaroWithBot.css';

// Square component - renders a single button for the tic-tac-toe board
function Square({ value, onSquareClick, disabled }) {
  return (
    <button 
      className="square" 
      onClick={onSquareClick}
      disabled={disabled}
    >
      {value}
    </button>
  );
}

// Helper function to calculate winner
function calculateWinner(squares) {
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
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

// Check if board is full (draw)
function isBoardFull(squares) {
  return squares.every(square => square !== null);
}

// Simple AI - picks random empty square
function getRandomMove(squares) {
  const emptySquares = squares
    .map((val, idx) => val === null ? idx : null)
    .filter(val => val !== null);
  return emptySquares[Math.floor(Math.random() * emptySquares.length)];
}

// Minimax algorithm for hard AI
function minimax(squares, depth, isMaximizing) {
  const winner = calculateWinner(squares);
  
  // Terminal states
  if (winner === 'O') return 10 - depth; // Bot wins (higher score for faster wins)
  if (winner === 'X') return depth - 10; // Player wins (lower score)
  if (isBoardFull(squares)) return 0; // Draw
  
  if (isMaximizing) {
    // Bot's turn - maximize score
    let maxScore = -Infinity;
    for (let i = 0; i < 9; i++) {
      if (squares[i] === null) {
        const newSquares = [...squares];
        newSquares[i] = 'O';
        const score = minimax(newSquares, depth + 1, false);
        maxScore = Math.max(score, maxScore);
      }
    }
    return maxScore;
  } else {
    // Player's turn - minimize score
    let minScore = Infinity;
    for (let i = 0; i < 9; i++) {
      if (squares[i] === null) {
        const newSquares = [...squares];
        newSquares[i] = 'X';
        const score = minimax(newSquares, depth + 1, true);
        minScore = Math.min(score, minScore);
      }
    }
    return minScore;
  }
}

// Hard AI - uses minimax algorithm
function getBotMove(squares) {
  let bestScore = -Infinity;
  let bestMove = 0;
  
  for (let i = 0; i < 9; i++) {
    if (squares[i] === null) {
      const newSquares = [...squares];
      newSquares[i] = 'O';
      const score = minimax(newSquares, 0, false);
      if (score > bestScore) {
        bestScore = score;
        bestMove = i;
      }
    }
  }
  return bestMove;
}

// Main game component
export default function CaroWithBot() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isPlayerNext, setIsPlayerNext] = useState(true);
  const [difficulty, setDifficulty] = useState('easy'); // 'easy' or 'hard'

  // Compute derived values based on game state
  const winner = calculateWinner(squares);
  const isBoardFull = squares.every(square => square !== null);
  const gameOver = winner !== null || isBoardFull;
  const isThinking = !isPlayerNext && !gameOver;

  // Compute game status message
  const computeGameStatus = () => {
    if (winner === 'X') {
      return '🎉 You Win!';
    } else if (winner === 'O') {
      return '🤖 Bot Wins!';
    } else if (isBoardFull) {
      return "It's a Draw!";
    } else if (!isPlayerNext) {
      return '🤖 Bot is thinking...';
    } else {
      return 'Your Turn (X)';
    }
  };
  const gameStatus = computeGameStatus();

  // Handle bot move with delay
  useEffect(() => {
    if (!isPlayerNext && !gameOver) {
      // Delay for better UX (lightweight = 300ms, hard = 500ms)
      const delay = difficulty === 'easy' ? 300 : 500;
      
      const timer = setTimeout(() => {
        const newSquares = [...squares];
        const botMove = difficulty === 'easy' 
          ? getRandomMove(newSquares) 
          : getBotMove(newSquares);
        
        newSquares[botMove] = 'O';
        // Batch state updates
        setSquares(newSquares);
        setIsPlayerNext(true);
      }, delay);
      
      return () => clearTimeout(timer);
    }
  }, [isPlayerNext, gameOver, squares, difficulty]);

  // Handle player move
  function handleSquareClick(index) {
    if (squares[index] || gameOver || !isPlayerNext || isThinking) {
      return;
    }
    
    const newSquares = [...squares];
    newSquares[index] = 'X';
    setSquares(newSquares);
    setIsPlayerNext(false);
  }

  // Reset game
  function handleReset() {
    setSquares(Array(9).fill(null));
    setIsPlayerNext(true);
  }

  // Change difficulty
  function handleDifficultyChange(newDifficulty) {
    setDifficulty(newDifficulty);
    handleReset();
  }

  return (
    <div className="game-container">
      <div className="game-header">
        <h1>Tic Tac Toe - Play with Bot</h1>
      </div>

      <div className="difficulty-selector">
        <label>Difficulty:</label>
        <button 
          className={`difficulty-btn ${difficulty === 'easy' ? 'active' : ''}`}
          onClick={() => handleDifficultyChange('easy')}
        >
          ⚡ Easy (Fast)
        </button>
        <button 
          className={`difficulty-btn ${difficulty === 'hard' ? 'active' : ''}`}
          onClick={() => handleDifficultyChange('hard')}
        >
          🧠 Hard (Smart)
        </button>
      </div>

      <div className="game-board-section">
        <div className="status">{gameStatus} {isThinking && <span className="thinking-dot">●</span>}</div>
        
        <div className="board">
          <div className="board-row">
            <Square value={squares[0]} onSquareClick={() => handleSquareClick(0)} disabled={!isPlayerNext || gameOver || isThinking} />
            <Square value={squares[1]} onSquareClick={() => handleSquareClick(1)} disabled={!isPlayerNext || gameOver || isThinking} />
            <Square value={squares[2]} onSquareClick={() => handleSquareClick(2)} disabled={!isPlayerNext || gameOver || isThinking} />
          </div>
          <div className="board-row">
            <Square value={squares[3]} onSquareClick={() => handleSquareClick(3)} disabled={!isPlayerNext || gameOver || isThinking} />
            <Square value={squares[4]} onSquareClick={() => handleSquareClick(4)} disabled={!isPlayerNext || gameOver || isThinking} />
            <Square value={squares[5]} onSquareClick={() => handleSquareClick(5)} disabled={!isPlayerNext || gameOver || isThinking} />
          </div>
          <div className="board-row">
            <Square value={squares[6]} onSquareClick={() => handleSquareClick(6)} disabled={!isPlayerNext || gameOver || isThinking} />
            <Square value={squares[7]} onSquareClick={() => handleSquareClick(7)} disabled={!isPlayerNext || gameOver || isThinking} />
            <Square value={squares[8]} onSquareClick={() => handleSquareClick(8)} disabled={!isPlayerNext || gameOver || isThinking} />
          </div>
        </div>

        <button className="reset-btn" onClick={handleReset}>
          🔄 New Game
        </button>
      </div>

      <div className="info-box">
        <p><strong>Player:</strong> X</p>
        <p><strong>Bot:</strong> O</p>
        <p><strong>Mode:</strong> {difficulty === 'easy' ? '⚡ Easy - Random moves' : '🧠 Hard - Unbeatable (Minimax)'}</p>
      </div>
    </div>
  );
}
