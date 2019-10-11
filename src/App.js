import React, {Fragment} from 'react';
import board from './GameSprites/GameBoard.png'
import block from './GameSprites/FallingBlock.png';
import player from './GameSprites/PlayerCharacter.png'
import Player from './components/Player'
import './App.css';

function App() {
  return (
	 <Fragment>
		<div className="Game">
			<img src={board} className="Game-Board" alt="Upsidedown_Smiling_Face" /> 
			
		</div>
		<div className="Player" style={{left:'50%', bottom:'10%'}}>
			<img src={player} className="PlayerObject" alt="player"/>
		</div>
		
		
	</Fragment>
  );
}

export default App;
