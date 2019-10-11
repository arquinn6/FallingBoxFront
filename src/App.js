import React, {Fragment} from 'react';
import board from './GameSprites/GameBoard.png'
import block from './GameSprites/FallingBlock.png';
import Player from './components/Player'
import './App.css';

function App() {
  return (
	 <Fragment>
		<div className="Game">
			<img src={board} className="Game-Board" alt="Upsidedown_Smiling_Face" /> 
		</div>
		
		< Player />
		
	</Fragment>
  );
}

export default App;
