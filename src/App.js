import React from 'react';
import board from './GameSprites/GameBoard.png'
import block from './GameSprites/FallingBlock.png';
import './App.css';

function App() {
  return (
    <div className="Game">
        <img src={board} className="Game-Board" alt="Upsidedown_Smiling_Face" />        
    </div>
  );
}

export default App;
