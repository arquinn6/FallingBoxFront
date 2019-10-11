import React from 'react';
import board from './GameSprites/GameBoard.png'
import block from './GameSprites/FallingBlock.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={board} className="Game-Board" alt="Upsidedown_Smiling_Face" />
        <p>
          Dis da game
        </p>
      </header>
    </div>
  );
}

export default App;
