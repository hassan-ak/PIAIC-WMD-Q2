'use client';

import { SetStateAction, useState } from 'react';

function Square(params: { value: any; onSquareClick: any }) {
  return (
    <button className='square' onClick={params.onSquareClick}>
      {params.value}
    </button>
  );
}

function Board(params: { xIsNext: any; squares: any; onPlay: any }) {
  function handleClick(i: any) {
    if (calculateWinner(params.squares) || params.squares[i]) {
      return;
    }
    const nextSquares = params.squares.slice();
    if (params.xIsNext) {
      nextSquares[i] = 'X';
    } else {
      nextSquares[i] = 'O';
    }
    params.onPlay(nextSquares);
  }

  const winner = calculateWinner(params.squares);
  let status;
  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = 'Next player: ' + (params.xIsNext ? 'X' : 'O');
  }

  return (
    <>
      <div className='status'>{status}</div>
      <div className='board-row'>
        <Square
          value={params.squares[0]}
          onSquareClick={() => handleClick(0)}
        />
        <Square
          value={params.squares[1]}
          onSquareClick={() => handleClick(1)}
        />
        <Square
          value={params.squares[2]}
          onSquareClick={() => handleClick(2)}
        />
      </div>
      <div className='board-row'>
        <Square
          value={params.squares[3]}
          onSquareClick={() => handleClick(3)}
        />
        <Square
          value={params.squares[4]}
          onSquareClick={() => handleClick(4)}
        />
        <Square
          value={params.squares[5]}
          onSquareClick={() => handleClick(5)}
        />
      </div>
      <div className='board-row'>
        <Square
          value={params.squares[6]}
          onSquareClick={() => handleClick(6)}
        />
        <Square
          value={params.squares[7]}
          onSquareClick={() => handleClick(7)}
        />
        <Square
          value={params.squares[8]}
          onSquareClick={() => handleClick(8)}
        />
      </div>
    </>
  );
}

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares: any) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove: SetStateAction<number>) {
    setCurrentMove(nextMove);
  }

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
    <div className='game'>
      <div className='game-board'>
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className='game-info'>
        <ol>{moves}</ol>
      </div>
    </div>
  );
}

function calculateWinner(squares: any[]) {
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
