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
  const winner = calculateWinner(squares); // Evaluate if this board is already a terminal win state.

  if (winner === 'O') return 10 - depth; // Bot (O) has won; return positive score, faster wins get higher score.
  if (winner === 'X') return depth - 10; // Player (X) has won; return negative score, faster losses are worse.
  if (isBoardFull(squares)) return 0; // No winner and board full means a draw.

  if (isMaximizing) {
    // Bot's turn: it tries to maximize the score.
    let maxScore = -Infinity; // Start lower than any possible score.

    for (let i = 0; i < 9; i++) {
      if (squares[i] === null) {
        const newSquares = [...squares]; // Copy the current board before simulating the move.
        newSquares[i] = 'O'; // Place the bot's mark on the empty square.
        const score = minimax(newSquares, depth + 1, false); // Recurse to evaluate the opponent's response.
        maxScore = Math.max(score, maxScore); // Keep the best score from all possible moves.
      }
    }

    return maxScore; // Return the highest score the bot can force from this position.
  } else {
    // Player's turn: the player is assumed to play optimally and minimize the bot's score.
    let minScore = Infinity; // Start higher than any possible score.

    for (let i = 0; i < 9; i++) {
      if (squares[i] === null) {
        const newSquares = [...squares]; // Copy board for this simulated opponent move.
        newSquares[i] = 'X'; // Place the player's mark on the empty square.
        const score = minimax(newSquares, depth + 1, true); // Recurse with the bot's next turn.
        minScore = Math.min(score, minScore); // Pick the move that gives the smallest score to the bot.
      }
    }

    return minScore; // Return the worst-case score from the bot's perspective.
  }
}

// Hard AI - uses minimax algorithm to choose the best move
function getBotMove(squares) {
  let bestScore = -Infinity; // Best score found so far.
  let bestMove = 0; // Index of the best move.

  for (let i = 0; i < 9; i++) {
    if (squares[i] === null) {
      const newSquares = [...squares]; // Copy the current board.
      newSquares[i] = 'O'; // Simulate the bot making a move here.
      const score = minimax(newSquares, 0, false); // Evaluate the resulting board with minimax.

      if (score > bestScore) {
        // If this move gives a higher score than any previous move, remember it.
        bestScore = score;
        bestMove = i;
      }
    }
  }

  return bestMove; // Return the index of the optimal move.
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
