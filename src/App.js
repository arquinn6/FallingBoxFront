import React, {Fragment} from 'react';
import board from './GameSprites/GameBoard.png'
import block from './GameSprites/FallingBlock.png';
import playerObject from './GameSprites/PlayerCharacter.png'
import Player from './components/Player'
import './App.css';

function App() {
  return (
	 <Fragment>
		<div className="Game">
			<img src={board} className="Game-Board" alt="Upsidedown_Smiling_Face" /> 
		</div>
		
		<div className="Player" style={{left:'50%', top:'75%'}}>
			<img src={playerObject} className="playerObject" alt="playerObject"/>
		</div>
		
		< Player />
		
	</Fragment>
  );
}

export default App;
